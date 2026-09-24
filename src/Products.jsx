function Products() {

  const products = [
    {
      name: "Laptop",
      price: "₹50,000",
      rating: "5",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },

    {
      name: "Smart Phone",
      price: "₹25,000",
      rating: "3",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },

    {
      name: "Headphones",
      price: "₹2,000",
      rating: "5",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },

    {
      name: "Smart Watch",
      price: "₹4,000",
      rating: "4",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },

    {
      name: "Keyboard",
      price: "₹1,500",
      rating: "5",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    },

    {
      name: "Mouse",
      price: "₹800",
      rating: "5",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    }
  ];

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >

        
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

        
            <div className="p-5">

              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p className="text-green-600 text-lg font-semibold mt-2">
                {product.price}
              </p>

              <p className="mt-2">
                {product.rating}
              </p>

              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;