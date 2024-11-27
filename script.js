// Productos iniciales
const initialProducts = [
    {
      name: "Stormtrooper",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Stormtrooper"
    },
    {
      name: "Game Boy Classic",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Game+Boy+Classic"
    },
    {
      name: "Stormtrooper",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Stormtrooper"
    },
    {
      name: "Game Boy Classic",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Game+Boy+Classic"
    },
    {
      name: "Stormtrooper",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Stormtrooper"
    },
    {
      name: "Game Boy Classic",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Game+Boy+Classic"
    },
    {
      name: "Stormtrooper",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Stormtrooper"
    },
    {
      name: "Game Boy Classic",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Game+Boy+Classic"
    },
    {
      name: "Stormtrooper",
      price: 60.00,
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Stormtrooper"
    },
  ];
  
  // Función para crear una tarjeta de producto
  function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <p class="product-name">${product.name}</p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="delete-button">🗑️</button>
    `;
  
    // Agregar funcionalidad al botón de eliminar
    productCard.querySelector(".delete-button").addEventListener("click", function () {
      productCard.remove(); // Eliminar la tarjeta de producto
    });
  
    return productCard;
  }
  
  // Función para cargar los productos iniciales
  function loadInitialProducts() {
    const productList = document.getElementById("product-list");
  
    initialProducts.forEach(product => {
      const productCard = createProductCard(product);
      productList.appendChild(productCard);
    });
  }
  
  // Escuchar el evento 'submit' del formulario
  document.getElementById("add-product-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que la página se recargue
  
    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const image = document.getElementById("image").value;
  
    // Validación básica
    if (!name || !price || !image) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Crear un objeto producto
    const newProduct = { name, price, image };
  
    // Crear y agregar la tarjeta de producto
    const productCard = createProductCard(newProduct);
    document.getElementById("product-list").appendChild(productCard);
  
    // Limpiar el formulario
    document.getElementById("add-product-form").reset();
  });
  
  // Cargar productos iniciales al cargar la página
  loadInitialProducts();
  