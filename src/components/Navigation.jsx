export default function Navigation({ style }) {
  return (
    <nav className="">
      <ul className={"flex text-[#fdf2e9] gap-4 text-lg font-medium " + style}>
        <li>
          <a href="#" className="hover:text-[#5262ac] transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#5262ac] transition duration-300">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#5262ac] transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
