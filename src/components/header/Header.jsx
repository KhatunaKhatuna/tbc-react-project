import logo from "../../logo.svg";
import Navigation from "../Navigation";
export default function Header() {
  return (
    <header className="bg-darck-blue/95 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-[90%] my-0 mx-auto py-[1rem]">
        <a href="/">
          <img className="h-12" src={logo} alt="logo" />
        </a>
        <Navigation />
      </div>
    </header>
  );
}
