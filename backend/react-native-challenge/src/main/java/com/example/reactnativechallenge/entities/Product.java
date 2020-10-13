package com.example.reactnativechallenge.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name = "products")
public class Product {
  @Id
  @GeneratedValue(generator = "id")
  @GenericGenerator(name = "id", strategy = "increment")
  private Long id;

  @Column(name = "title")
  private String title;

  @Column(name = "type")
  private String type;

  @Column(name = "description")
  private String description;

  @Column(name = "filename")
  private String filename;

  @Column(name = "height")
  private int height;

  @Column(name = "width")
  private int width;

  @Column(name = "price", scale = 2, precision = 8)
  private Number price;

  @Column(name = "rating")
  private int rating;

  @CreationTimestamp()
  private Date createdAt;

  public Product(
    @JsonProperty("title") String title,
    @JsonProperty("type") String type,
    @JsonProperty("description") String description,
    @JsonProperty("filename") String filename,
    @JsonProperty("height") int height,
    @JsonProperty("width") int width,
    @JsonProperty("price") Number price,
    @JsonProperty("rating") int rating
  ) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.filename = filename;
    this.height = height;
    this.width = width;
    this.price = price;
    this.rating = rating;  
  }

  public Product update(String title, String type, Number price) {
    this.title = title;
    this.type = type;
    this.price = price;

    return this;
  }

  public Long getId() {
    return id;
  }
  
  public String getTitle() {
    return title;
  }

  public Product setTitle(String title) {
    this.title = title;

    return this;
  }
  
  public String getType() {
    return type;
  }

  public Product setType(String type) {
    this.type = type;

    return this;
  }
  
  public String getDescription() {
    return description;
  }
  
  public String getFilename() {
    return filename;
  }

  public int getWidth() {
    return width;
  }

  public int getHeight() {
    return height;
  }
  
  public Number getPrice() {
    return price;
  }

  public Product setPrice(Number price) {
    this.price = price;

    return this;
  }
  
  public int getRating() {
    return rating;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

}
