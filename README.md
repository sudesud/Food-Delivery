# 🍔 Food Delivery - Web Uygulaması

Food Delivery, kullanıcıların çevrimiçi olarak yemek siparişi verebildiği, sepetlerini yönetebildiği, siparişlerinin durumunu takip edebildiği ve Stripe ile ödeme yapabildiği tam özellikli bir web uygulamasıdır. Uygulama React.js, Node.js, Express ve MongoDB kullanılarak geliştirilmiştir.

---



## 🛠️ Kullanılan Teknolojiler

- **Frontend**: React.js (Vite), React Router, Axios, Context API  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Ödeme Sistemi**: Stripe API  
- **Resim Yükleme**: Multer  
- **Kimlik Doğrulama**: JWT (JSON Web Tokens)

🧩 Uygulama Özellikleri
👤 Kullanıcı
Kayıt olma / Giriş yapma

Yemekleri görüntüleme ve filtreleme

Sepet yönetimi (ekle, çıkar, miktar değiştir)

Sipariş oluşturma ve Stripe ile ödeme

Sipariş geçmişini görüntüleme

🛒 Admin Paneli
Ürün ekleme / silme / güncelleme

Sipariş listesini görüntüleme

Sipariş durumunu güncelleme (Hazırlanıyor → Yola Çıktı → Teslim Edildi)

📸 Ekran Görüntüleri![Ekran görüntüsü 2025-05-19 174753](https://github.com/user-attachments/assets/bb7e785c-4c59-4b35-a4![Ekran görüntüsü 2025-05-19 175215](https://github.com/user-attachments/assets/db86ab3e-7f44-4ebd-9e7d-ce5bd120997d)
![Ekran görüntüsü 2025-05-19 174955](https://github.com/user-attachments/assets/ea5d7cfb-5092-412d-b487-9c749a37b6ef)![Ekran görüntüsü 2025-05-19 174452](https://github.com/user-attachments/assets/a0af68cd-5a74-4dc3-8a2c-3ed3604b9afd)

37-e9ecf878816d)
![Ekran görüntüsü 2025-05-19 174518](https://github.com/user-attachments/assets/0d3b17a1-67d6-4685-afe3-e1ca750c122c)


🧪 API Endpointleri (Backend)
POST /api/user/register – Kullanıcı kayıt

POST /api/user/login – Kullanıcı girişi

GET /api/food/list – Yemek listesi

POST /api/cart/add – Sepete ürün ekle

POST /api/cart/remove – Sepetten çıkar

POST /api/order/place – Sipariş oluştur

POST /api/order/verify – Ödeme sonrası onay

POST /api/order/userorders – Sipariş geçmişi


