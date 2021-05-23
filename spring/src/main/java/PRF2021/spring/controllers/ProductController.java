package PRF2021.spring.controllers;

import PRF2021.spring.models.Product;
import PRF2021.spring.models.Transaction;
import PRF2021.spring.services.ProductService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping

@CrossOrigin(origins = "*")
public class ProductController {

    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping(path = "/addProduct", consumes = "application/json")
    public String addProduct(@RequestBody Product product) {
        try {
            this.productService.addProduct(product);
            return "Termék  hozzáadva.";
        } catch (Exception e) {
            System.out.println(e);
            return "Error";
        }
    }

    @GetMapping("/listProducts")
    public String listProducts() {
        return String.format(productService.listProducts().toString());
    }

}
