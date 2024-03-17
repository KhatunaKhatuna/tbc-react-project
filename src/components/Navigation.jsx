export default function Navigation() {
  return (
    <nav className="">
      <ul className="flex text-[#fddddd] gap-5 text-xl font-medium">
        <li>
          <a href="#" className="hover:text-[#6B72FE] transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#6B72FE] transition duration-300">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#6B72FE] transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#6B72FE] transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
