package PRF2021.spring.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    private int itemid;

    private String name;
    private int price;

    public Product() {
    }

    public Product(int itemid, String name, int prize) {
        this.itemid = itemid;
        this.name = name;
        this.price = prize;
    }

    public int getItemid() {
        return itemid;
    }

    public void setItemid(int itemid) {
        this.itemid = itemid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrize() {
        return price;
    }

    public void setPrize(int prize) {
        this.price = prize;
    }

    @Override
    public String toString() {
        return "[itemid: " + itemid + ", name: " + name + ", prize: " + price + "]";
    }
}
