import { useLocation } from "react-router-dom";
import logo from "../../../logo.svg";
import { Card } from "../../Card";
import useDebounce from "../../../hooks/useDebounce";

const cards = [
  {
    id: 1,
    logo,
    title: "Zeta Zephyrs",
    description: "Leading the way in pioneering technology.",
  },
  {
    id: 2,
    logo,
    title: "Kappa Keys",
    description: "Solutions designed for tomorrow's challenges.",
  },
  {
    id: 3,
    logo,
    title: "Gamma Creations",
    description: "Creativity and innovation in one place.",
  },
  {
    id: 4,
    logo,
    title: "Theta Tech",
    description: "Dynamic solutions for a dynamic world.",
  },
  {
    id: 5,
    logo,
    title: "Epsilon Electronics",
    description: "Electrifying the future with innovative electronics.",
  },
  {
    id: 6,
    logo,
    title: "Alpha Innovations",
    description: "Breezing through innovation and design.",
  },
  {
    id: 7,
    logo,
    title: "Eta Engineering",
    description: "Engineering your dreams into reality.",
  },
  {
    id: 8,
    logo,
    title: "Delta Dynamics",
    description: "At the forefront of technological advancement.",
  },
  {
    id: 9,
    logo,
    title: "Iota Ideas",
    description: "Where great ideas come to life.",
  },
  {
    id: 10,
    logo,
    title: "Beta Solutions",
    description: "Unlocking the potential of the future.",
  },
  {
    id: 11,
    logo,
    title: "Lambda Lights",
    description: "Illuminating the world with innovative lighting solutions.",
  },
  {
    id: 12,
    logo,
    title: "Mu Mechanics",
    description: "Mechanical mastery for a modern age.",
  },
  {
    id: 13,
    logo,
    title: "Nu Networks",
    description: "Networking the world, one connection at a time.",
  },
  {
    id: 14,
    logo,
    title: "Xi Xylophones",
    description: "Harmonizing technology and music.",
  },
  {
    id: 15,
    logo,
    title: "Omicron Optics",
    description: "Visionary optics for a clearer tomorrow.",
  },
  {
    id: 16,
    logo,
    title: "Pi Programming",
    description: "Coding the future, one line at a time.",
  },
  {
    id: 17,
    logo,
    title: "Rho Robotics",
    description: "Revolutionizing the world with cutting-edge robotics.",
  },
  {
    id: 18,
    logo,
    title: "Sigma Software",
    description: "Software solutions that transcend the ordinary.",
  },
  {
    id: 19,
    logo,
    title: "Tau Technolog",
    description: "each that transforms and transcends.",
  },
  {
    id: 20,
    logo,
    title: "Upsilon Utilities",
    description: "Utility solutions for the modern era.",
  },
  {
    id: 21,
    logo,
    title: "Phi Solutions",
    description: "Solutions designed for complex challenges.",
  },
  {
    id: 22,
    logo,
    title: "Chi Innovations",
    description: "Innovating for a sustainable future.",
  },
  {
    id: 23,
    logo,
    title: "Psi Products",
    description: "Products that exceed expectations.",
  },
  {
    id: 24,
    logo,
    title: "Omega Optics",
    description: "Optical solutions for every need.",
  },
];

export default function Products({ isSorted = false, searchQuery = "" }) {
  const location = useLocation();
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  // Sort by title
  let newCards;
  newCards = isSorted
    ? cards.slice().sort((a, b) => a.title.localeCompare(b.title))
    : cards;

  // Filter by searchQuery
  newCards = newCards.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <section className="mb-[3rem] mt-[3rem]">
      {location.pathname === "/products" ? (
        <h2 className="text-[#fdf2e9] text-center text-[2rem] mb-[3rem]">
          Products
        </h2>
      ) : null}

      {/* Horisontal scroll */}
      {/* <div className="grid grid-flow-col auto-cols-[90%] md:auto-cols-[45%] lg:auto-cols-[35%] xl:auto-cols-[23%] gap-5 max-w-[90%] my-0 mx-auto pb-[2rem] overflow-x-auto snap-x snap-mandatory overscroll-x-contain"> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  max-w-[90%] my-0 mx-auto">
        {newCards.length === 0 ? (
          <p className="text-[#fdf2e9] text-[2rem] col-span-full justify-self-center">
            No results found
          </p>
        ) : (
          newCards.map((card) => <Card key={card.id} card={card} />)
        )}
      </div>
    </section>
  );
}
