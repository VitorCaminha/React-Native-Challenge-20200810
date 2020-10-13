package com.example.reactnativechallenge.repositories;

import com.example.reactnativechallenge.entities.Product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
}
