import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      rating: 4.5,
      image: "/api/placeholder/300/200",
      description: "High-quality wireless headphones with noise cancellation",
      stock: 15,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.8,
      image: "/api/placeholder/300/200",
      description: "Feature-rich smartwatch with health tracking",
      stock: 8,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      rating: 4.2,
      image: "/api/placeholder/300/200",
      description: "Durable laptop backpack with multiple compartments",
      stock: 23,
      category: "Accessories"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">${product.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`text-sm ${product.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>
                  {product.stock} in stock
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;