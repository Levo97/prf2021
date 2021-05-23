package PRF2021.spring.models;

import javax.persistence.*;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int itemid;
    private String date;
    private int price;

    public Transaction() {
    }

    public Transaction(int id, int itemid, String date, int price) {
        this.id = id;

        this.itemid = itemid;

        this.date = date;

        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getItemid() {
        return itemid;
    }

    public void setItemid(int itemid) {
        this.itemid = itemid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getPrize() {
        return price;
    }

    public void setPrize(int prize) {
        this.price = prize;
    }

    @Override
    public String toString() {
        return "[id: " + id + ", itemid: " + itemid + ", date: " + date + ", prize: " + price + "]";
    }
}
