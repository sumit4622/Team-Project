export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?coffee,shop')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Enjoy the Best Coffee in Town ☕
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Order your favorite coffee or tea online & get it ready when you
          arrive!
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition">
          Order Now
        </button>
      </div>
    </section>
  );
}
