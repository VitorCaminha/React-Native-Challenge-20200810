package com.example.reactnativechallenge.services;

import com.example.reactnativechallenge.entities.Product;
import com.example.reactnativechallenge.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UpdateProductByIdService {  
  @Autowired
  private ProductRepository productRepository;

  public Product execute(Long id, Product updateProduct) {
    Product product = productRepository.findById(id).orElse(null);

    if (product == null) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "product with this id not found");
    }
          
    Product updatedProduct = product.update(
      updateProduct.getTitle(),
      updateProduct.getType(),
      updateProduct.getPrice()
    );

    productRepository.save(product);

    return updatedProduct;
  }
}
