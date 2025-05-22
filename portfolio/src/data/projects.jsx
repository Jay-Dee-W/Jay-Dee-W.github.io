const projects = [
    {
      title: "Inventory Manager (CRUD App)",
      url: "https://v0-crud-app-requirements-ivory.vercel.app/",
      image: "inventory-manager.png",
      description: "A full-featured inventory management system allowing users to add, edit, and delete inventory items.",
      features: [
        "Form handling and validation",
        "LocalStorage and optional backend integration",
        "Real-time UI updates",
        "Modular component design"
      ],
      techStack: ["React", "React Hook Form", "TailwindCSS", "Zod", "LocalStorage"]
    },
    {
      title: "Real-Time Chat App",
      url: "https://chat-app.vercel.app",
      image: "chat-app.jpg",
      description: "A real-time messaging app with authentication and live communication features.",
      features: [
        "User authentication (OAuth, JWT, Firebase Auth)",
        "Live chat using Socket.io or Firebase Realtime Database",
        "Typing indicators and user status",
        "Clean mobile-first UI with Vue"
      ],
      techStack: ["Vue", "Firebase", "Socket.io", "TailwindCSS"]
    },
    {
      title: "E-commerce Store",
      url: "https://ecommerce-store.vercel.app",
      image: "ecommerce-store.jpg",
      description: "A fully functional online store with payments, product management, and a dynamic user interface.",
      features: [
        "Stripe/PayPal integration",
        "Cart, checkout, and product filtering",
        "Admin dashboard for product control",
        "Secure authentication and protected routes"
      ],
      techStack: ["React", "Stripe API", "Zustand", "TailwindCSS", "Next.js"]
    },
    {
      title: "SaaS Admin Dashboard",
      url: "https://saas-dashboard.vercel.app",
      image: "saas-dashboard.jpg",
      description: "An analytics dashboard with KPIs, user access controls, and advanced admin features.",
      features: [
        "Charts, tables, and real-time KPIs",
        "Role-based access control",
        "Backend API integration",
        "Responsive and clean modular design"
      ],
      techStack: ["Next.js", "Node.js", "Chart.js", "TailwindCSS", "ShadCN UI"]
    }
  ];
  
  export default projects;