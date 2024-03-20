import { Link } from "react-router-dom";

export default function Navigation({ style }) {
  return (
    <nav className="">
      <ul className={"flex text-[#fdf2e9] gap-4 text-lg font-medium " + style}>
        <li>
          <Link to="/" className="hover:text-[#5262ac] transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-[#5262ac] transition duration-300"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="hover:text-[#5262ac] transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
