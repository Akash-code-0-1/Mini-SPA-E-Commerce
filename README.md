# MINI-SPA-ECOMMERCE 🛒⚡

**MINI-SPA-ECOMMERCE** is a modern and responsive single-page e-commerce web application built with **React.js**, **Tailwind CSS**, and a **Node.js + Express.js** backend. It showcases featured products, detailed product views, cart functionality, checkout UI, and a fully dynamic backend-powered product system using a JSON data source.

---

## 📸 Screenshots

> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/1.PNG)  
> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/2.PNG)
> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/3.PNG)  
> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/4.PNG)
> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/5.PNG)  
> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/6.PNG)
> ![](https://github.com/Akash-code-0-1/Complete-Social-Media-Web-Application/blob/main/client/src/assets/projectImages/7.PNG)  

---

## 📂 Project Structure  

```
mini-spa-ecommerce/
├── api/                         # Backend API (Node.js + Express)
│   ├── products.json            # Mock product database
│   └── server.js                # Express server
│
├── src/                         # React Frontend
│   ├── components/              # UI and context components
│   │   ├── CartContext.jsx
│   │   ├── CartSidebar.jsx
│   │   ├── CheckoutModal.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ThemeProvider.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── pages/                   # Route-based page components
│   │   ├── HomePage.jsx
│   │   └── ProductDetailPage.jsx
│   │
│   ├── App.jsx                  # Main layout and routing
│   ├── main.jsx                 # Entry point
│   ├── App.css
│   └── index.css
│
├── index.html                   # HTML shell
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md

```

---

## 🚀 Features  

- 🔥 Fully responsive design
- 🛍️ Featured and complete product listings
- 📦 Product detail page with ratings, images, and descriptions
- 🛒 Cart sidebar with global state (React Context API)
- 💳 Checkout modal UI
- 🌙 Light and dark theme toggle
- 🌐 Backend API with Express and JSON data

---

## ⚙️ Tech Stack

### Frontend:
- React.js (SPA)
- React Router
- Tailwind CSS
- Context API (Cart & Theme)

### Backend:
- Node.js
- Express.js
- JSON file as a mock database (no external DB required)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mini-spa-ecommerce.git
cd mini-spa-ecommerce
````

### 2. Install Frontend Dependencies

```bash
npm install
npm run dev
```

### 3. Start Backend Server

```bash
cd api
npm install
node server.js
```

> 🔗 Frontend runs on: [http://localhost:5173](http://localhost:5173)
> 🔌 Backend API runs on: [http://localhost:5000/api/products](http://localhost:5000/api/products)

---

## 🧠 Future Improvements

* 🗃️ Add MongoDB or SQLite for persistent storage
* ✅ Order confirmation flow
* 🔐 User authentication
* 📦 Product search and category filters
* 📈 Admin dashboard

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 💌 Contact  

👨‍💻 **Developer:** MD. Tanvir Ahmed Akash  
📧 **Email:** tanvir0ah0akash@gmail.com  
🌐 **GitHub:** [Akash-code-0-1](https://github.com/Akash-code-0-1)  
💼 **LinkedIn:** [MD. Tanvir Ahmed Akash](https://www.linkedin.com/in/md-tanvir-ahmed-akash-8ba50b2b9/)  

---

🌟 **If you found this project helpful, consider giving it a ⭐ on GitHub!** 🚀