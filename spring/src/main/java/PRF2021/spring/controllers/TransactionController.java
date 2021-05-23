package PRF2021.spring.controllers;

import PRF2021.spring.models.Product;
import PRF2021.spring.models.Transaction;
import PRF2021.spring.services.ProductService;
import PRF2021.spring.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class TransactionController {

    TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping(path = "/addTransaction", consumes = "application/json")
    public String addTransaction(@RequestBody Transaction transaction) {
        try {
            this.transactionService.addTransaction(transaction);
            return "Tranzakció  hozzáadva.";
        } catch (Exception e) {
            System.out.println(e);
            return "Error";
        }
    }

    @GetMapping("/listTransaction")
    public String listTransaction() {
        return String.format(transactionService.listTransaction().toString());
    }

}
