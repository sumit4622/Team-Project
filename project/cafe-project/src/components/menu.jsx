export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      price: "$2.99",
      image: "https://source.unsplash.com/200x200/?espresso,coffee",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "$3.99",
      image: "https://source.unsplash.com/200x200/?cappuccino,coffee",
    },
    {
      id: 3,
      name: "Latte",
      price: "$4.49",
      image: "https://source.unsplash.com/200x200/?latte,coffee",
    },
    {
      id: 4,
      name: "Mocha",
      price: "$4.99",
      image: "https://source.unsplash.com/200x200/?mocha,coffee",
    },
    {
      id: 5,
      name: "Black Coffee",
      price: "$2.49",
      image: "https://source.unsplash.com/200x200/?blackcoffee,coffee",
    },
    {
      id: 6,
      name: "Iced Coffee",
      price: "$3.49",
      image: "https://source.unsplash.com/200x200/?icedcoffee,coffee",
    },
  ];

  return (
    <section id="menu" className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Our Menu</h2>
      <p className="mt-2 text-gray-600">
        Choose your favorite coffee & order online
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8 px-4">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
