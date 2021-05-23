package PRF2021.spring.services;

import PRF2021.spring.models.Transaction;
import PRF2021.spring.models.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public void addTransaction(Transaction transaction) {
        this.transactionRepository.save(transaction);
    }

    public List<Transaction> listTransaction() {
        return this.transactionRepository.findAll();
    }

}
