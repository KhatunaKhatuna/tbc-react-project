"use client";
import Card from "./Card";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

// const cards = [
//   {
//     id: 1,
//     title: "Zeta Zephyrs",
//     description: "Leading the way in pioneering technology.",
//   },
//   {
//     id: 2,
//     title: "Kappa Keys",
//     description: "Solutions designed for tomorrow's challenges.",
//   },
//   {
//     id: 3,
//     title: "Gamma Creations",
//     description: "Creativity and innovation in one place.",
//   },
//   {
//     id: 4,
//     title: "Theta Tech",
//     description: "Dynamic solutions for a dynamic world.",
//   },
//   {
//     id: 5,
//     title: "Epsilon Electronics",
//     description: "Electrifying the future with innovative electronics.",
//   },
//   {
//     id: 6,
//     title: "Alpha Innovations",
//     description: "Breezing through innovation and design.",
//   },
//   {
//     id: 7,
//     title: "Eta Engineering",
//     description: "Engineering your dreams into reality.",
//   },
//   {
//     id: 8,
//     title: "Delta Dynamics",
//     description: "At the forefront of technological advancement.",
//   },
//   {
//     id: 9,
//     title: "Iota Ideas",
//     description: "Where great ideas come to life.",
//   },
//   {
//     id: 10,
//     title: "Beta Solutions",
//     description: "Unlocking the potential of the future.",
//   },
//   {
//     id: 11,
//     title: "Lambda Lights",
//     description: "Illuminating the world with innovative lighting solutions.",
//   },
//   {
//     id: 12,
//     title: "Mu Mechanics",
//     description: "Mechanical mastery for a modern age.",
//   },
//   {
//     id: 13,
//     title: "Nu Networks",
//     description: "Networking the world, one connection at a time.",
//   },
//   {
//     id: 14,
//     title: "Xi Xylophones",
//     description: "Harmonizing technology and music.",
//   },
//   {
//     id: 15,
//     title: "Omicron Optics",
//     description: "Visionary optics for a clearer tomorrow.",
//   },
//   {
//     id: 16,
//     title: "Pi Programming",
//     description: "Coding the future, one line at a time.",
//   },
//   {
//     id: 17,
//     title: "Rho Robotics",
//     description: "Revolutionizing the world with cutting-edge robotics.",
//   },
//   {
//     id: 18,
//     title: "Sigma Software",
//     description: "Software solutions that transcend the ordinary.",
//   },
//   {
//     id: 19,
//     title: "Tau Technolog",
//     description: "each that transforms and transcends.",
//   },
//   {
//     id: 20,
//     title: "Upsilon Utilities",
//     description: "Utility solutions for the modern era.",
//   },
//   {
//     id: 21,
//     title: "Phi Solutions",
//     description: "Solutions designed for complex challenges.",
//   },
//   {
//     id: 22,
//     title: "Chi Innovations",
//     description: "Innovating for a sustainable future.",
//   },
//   {
//     id: 23,
//     title: "Psi Products",
//     description: "Products that exceed expectations.",
//   },
//   {
//     id: 24,
//     title: "Omega Optics",
//     description: "Optical solutions for every need.",
//   },
// ];

export default function ProductsList({ isSorted = false, searchQuery = "" }) {
  const locale = useLocale();

  const [cards, setCards] = useState<product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // await new Promise(resolve => setTimeout(resolve, 3000));
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCards(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      {/* Horisontal scroll */}
      {/* <div className="grid grid-flow-col auto-cols-[90%] md:auto-cols-[45%] lg:auto-cols-[35%] xl:auto-cols-[23%] gap-5 max-w-[80%] my-0 mx-auto pb-[2rem] overflow-x-auto snap-x snap-mandatory overscroll-x-contain"> */}

      {newCards.length === 0 ? (
        <p className="text-[#fdf2e9] text-[2rem] text-center col-span-full justify-self-center">
          Loading...
        </p>
      ) : (
        <div className="max-w-[80%] my-0 mx-auto">
          <h2 className="text-[#0e0e0e]/80 dark:text-[#fdf2e9] text-center  text-[2rem] mb-[3rem] mt-[3rem]">
            {locale === "en" ? "Products" : "პროდუქტები"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newCards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
