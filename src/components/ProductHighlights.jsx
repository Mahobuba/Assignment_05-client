// src/components/ProductHighlights.js
import React from 'react';

const products = [
  {
    id: 1,
    name: "Atomic Habits",
    image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*IirUWdu5_jw10pEb1oaLtg.jpeg",
    description: "This is a great product.",
    price: "$20.00",
  },
  {
    id: 2,
    name: "Sapiens: A Brief History of Humankind",
    image: "https://m.media-amazon.com/images/I/613w6Hitb+L._CR2,0,1276,720_SR684,386_.jpg",
    description: "This product is highly recommended.",
    price: "$30.00",
  },
  {
    id: 3,
    name: "Where the Crawdads Sing",
    image: "https://bookclubchat.com/wp-content/uploads/2018/10/Where-The-Crawdads-Sing-Book-Club-Questions-Book-Club-Chat.jpg",
    description: "A bestseller that everyone loves.",
    price: "$25.00",
  },
];

function ProductHighlights() {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Product-related Images/Text Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-blue-500 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductHighlights;
