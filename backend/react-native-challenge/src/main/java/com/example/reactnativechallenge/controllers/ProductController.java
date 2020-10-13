package com.example.reactnativechallenge.controllers;

import java.io.IOException;

import com.example.reactnativechallenge.entities.Product;
import com.example.reactnativechallenge.repositories.ProductRepository;
import com.example.reactnativechallenge.services.DeleteProductByIdService;
import com.example.reactnativechallenge.services.UpdateProductByIdService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.example.reactnativechallenge.services.GetProductByIdService;

import org.apache.commons.io.IOUtils;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/products")
@RestController
public class ProductController {
  private final ProductRepository productRepository;
  private final GetProductByIdService getProductByIdService;
  private final UpdateProductByIdService updateProductByIdService;
  private final DeleteProductByIdService deleteProductByIdService;

  @Autowired
  public ProductController(ProductRepository productRepository, GetProductByIdService getProductByIdService,
      UpdateProductByIdService updateProductByIdService, DeleteProductByIdService deleteProductByIdService) {
    this.productRepository = productRepository;
    this.getProductByIdService = getProductByIdService;
    this.updateProductByIdService = updateProductByIdService;
    this.deleteProductByIdService = deleteProductByIdService;
  }

  @GetMapping
  public Iterable<Product> getProducts() {
    return productRepository.findAll();
  }

  @GetMapping("/{id}")
  public Product getProductById(@PathVariable Long id) {
    Product product = getProductByIdService.execute(id);

    return product;
  }

  @PostMapping
  public Product createProduct(@RequestBody Product product) {
    return productRepository.save(product);
  }

  @PutMapping("/{id}")
  public Product updateProduct(@PathVariable("id") Long id, @RequestBody Product product) {
    return updateProductByIdService.execute(id, product);
  }

  @DeleteMapping("/{id}")
  public void deleteProduct(@PathVariable("id") Long id) {
    deleteProductByIdService.execute(id);
  }

  @Transactional
  @PostMapping("/import")
  public String importJSON() throws IOException {
    Gson gson = new Gson();

    Type listType = new TypeToken<List<Product>>() {}.getType();

    List<Product> list = gson.fromJson(loadFileFromClasspath("products.json"), listType);

    productRepository.saveAll(list);

    return gson.toJson(list);
  }
  
  public String loadFileFromClasspath(String fileName) throws IOException {
    ClassLoader classLoader = getClass().getClassLoader();
    try (InputStream inputStream = classLoader.getResourceAsStream(fileName)) {
        // common-io
        return IOUtils.toString(inputStream, StandardCharsets.UTF_8);
    }
  }
}
