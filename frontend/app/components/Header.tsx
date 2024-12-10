import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[6vh] bg-indigo-800 bg-opacity-80 text-white p-2 sm:p-4 lg:p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl sm:text-3xl font-semibold">Unreal Deals</div>
        <nav>
          <ul className="flex justify-center items-center space-x-8">
            <li>
              <Link href="/products" className="hover:text-yellow-300 text-lg">
                Products
              </Link>
            </li>
            <li>
              <Link href="#cart" className="hover:text-yellow-300 text-lg">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
