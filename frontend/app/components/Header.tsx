import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-indigo-800 bg-opacity-80 text-white p-4 sm:p-6 lg:p-8 fixed w-full top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-semibold">Unreal Deals</div>
        <nav>
          <ul className="flex justify-center space-x-12">
            <li>
              <Link href="#products" className="hover:text-yellow-300 text-lg">
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
