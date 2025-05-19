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

📸 Ekran Görüntüleri
![Ekran görüntüsü 2025-05-19 175215](https://github.com/user-attachments/assets/8407ed83-7eed-430e-9d0d-b559f05b44b0)
![Ekran görüntüsü 2025-05-19 174955](https://gi![Ekran görüntüsü 2025-05-19 174452](https://github.com/user-attachments/assets/d8f657bf-b86f-496b-87f3-75de5e5cf65d)
thub.com/user-attachments/assets/354e40f9-36ea-4f4d-9517-cc38a8c533cd)
![Ekran görüntüsü 2025-05-19 174518](https://github.com/user-attachments/assets/59e2a3cd-a4cc-44d0-aa72-b6e093df0e6c)
![Ekran görüntüsü 2025-05-19 174753](https://github.com/user-attachments/assets/38cb984a-5249-439e-a81d-6350df10387b)
![image](https://github.com/user-attachments/assets/bccb0ff2-1323-40f7-b447-bf700b9919a8)










🧪 API Endpointleri (Backend)
POST /api/user/register – Kullanıcı kayıt

POST /api/user/login – Kullanıcı girişi

GET /api/food/list – Yemek listesi

POST /api/cart/add – Sepete ürün ekle

POST /api/cart/remove – Sepetten çıkar

POST /api/order/place – Sipariş oluştur

POST /api/order/verify – Ödeme sonrası onay

POST /api/order/userorders – Sipariş geçmişi


