import logo from "../../logo.svg";
import Navigation from "../Navigation";
export default function Header() {
  return (
    <header className="bg-[rgb(25,25,25)]/95 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-[90%] my-0 mx-auto py-[0.5rem]">
        <a href="/">
          <img className="h-12" src={logo} alt="logo" />
        </a>
        <Navigation />
      </div>
    </header>
  );
}
