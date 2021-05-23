package PRF2021.spring.services;

import PRF2021.spring.models.Product;
import PRF2021.spring.models.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void addProduct(Product product) {
        if (!this.productRepository.existsById(product.getItemid())) {
            this.productRepository.save(product);
        }
    }

    public List<Product> listProducts() {
        return this.productRepository.findAll();
    }
}
