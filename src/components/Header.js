import logo from "../logo.svg";
export default function Header() {
  return (
    <header className="bg-darck-blue ">
      <nav className="flex items-center justify-between w-4/5 my-0 mx-auto py-[10px]">
        <a href="/">
          <img className="h-12" src={logo} />
        </a>
        <ul className="flex text-[#fff] gap-5">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
