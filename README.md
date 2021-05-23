# prf2021 - Pizza shop
Programrendszerek fejlesztése gyakorlatra készült shop

https://fm9im6.herokuapp.com/


![image](https://user-images.githubusercontent.com/50501945/119276099-38ea1000-bc19-11eb-9251-48caeafe4e8f.png)

Belépéshez használható userek:

![image](https://user-images.githubusercontent.com/50501945/119276123-620aa080-bc19-11eb-9504-5935fba5aad7.png)

A szaboz az admin user.
de a regisztrációval létrehozhatók új felhasználók:

![image](https://user-images.githubusercontent.com/50501945/119276180-b44bc180-bc19-11eb-8d6d-50b593e95618.png)

A usereknek az adminisztráció menüpont kivételével minden elérhető bejelentkezés után


![image](https://user-images.githubusercontent.com/50501945/119276163-9e3e0100-bc19-11eb-9fde-7106f6b1d8d0.png)



MongoDb Atlast-t használtam a projekt megvalósításához. A https://cloud.mongodb.com/ linken regisztráltam, létrehoztam egy adatbázist.
Két tábla van benne, egy a termékeket, egy pedig a felhasználókat tárolja.

![image](https://user-images.githubusercontent.com/50501945/119276273-3936db00-bc1a-11eb-8d52-a6dde8798e27.png)

A mongoose bizrtosítja a NodeJS - MongoDB összeköttetést. A környezeti változóknak létrehoztam egy .env fájlt, ebben vannak a kapcsolódáshoz szükséges adatok

Product modell
- itemid:  azonosítója
- name:  neve
- description: leíró szöveg
- price:  ára
- quantity: termékből elérhető mennyiség
- img_name: termék képéhez tartozó elérési út
- 
 User modell
- name: felhasználó neve
- password: felhasználó jelszava hashelve 

Az adminisztráció menüpont a termékek módosítási felületét szolgáltatott megvalósítani:
![image](https://user-images.githubusercontent.com/50501945/119276769-376e1700-bc1c-11eb-85b1-151d6f8ae9d6.png)

A tranzakciókat a PostgreSQL -ben terveztem tárolni ElephantSQL (https://www.elephantsql.com/) segítségével , de mivel nem sikerült összekapcsolni a Java Sprin backendet a projektemmel ezért az a szekció jelenleg nem üzemképes.

Az Angular:
- admin: Az alkalmazás bejelentkező képernyője
- auth: Jogosultságkezelős szolgáltatások
- cart: A  megvásárolni kívánt termékeket listázza. Lehet törölni is
elemet a kosárból.
- home: Ezzel a komponenssel lehet a terméket a kosárhoz adni
- login: Az alkalmazás bejelentkező képernyője
- page-error: Ha nem talál egy keresett oldalt, ide irányít el.
