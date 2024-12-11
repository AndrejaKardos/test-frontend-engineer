import ProductList from "./ProductList";

const MainContent = () => {
  return (
    <main className="flex-grow bg-gray-50 px-6 py-8">
      <section className="max-w-7xl mx-auto pt-[8vh]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-indigo-800">
          Welcome to Unreal Deals!
        </h1>
        <p className="text-lg text-center mb-8 text-black">
          Explore the best deals on our platform.
        </p>
      </section>

      <ProductList />
    </main>
  );
};

export default MainContent;
