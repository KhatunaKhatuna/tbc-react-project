"use client";
import Card from "./Card";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useReducer, useState } from "react";
import { useLocale } from "next-intl";
import Cart from "./Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { reducer } from "../helpers";

export default function ProductsList({ isSorted = false, searchQuery = "" }) {
  const locale = useLocale();

  const [cards, setCards] = useState<productElement[]>([]);

  const [cachedValue, setCachedValue] = useLocalStorage("selectedProducts", []);

  const [selectedProducts, dispatch] = useReducer(reducer, cachedValue);

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  const handleClick = (card: productElement) => {
    dispatch({ type: "INCREMENT", payload: card });
    setCachedValue(selectedProducts);
  };

  const selectedNumber = selectedProducts.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

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
          <div className="relative mb-[3rem] mt-[3rem]">
            <h2 className="text-[#0e0e0e]/80 dark:text-[#fdf2e9] text-center  text-[2rem] ">
              {locale === "en" ? "Products" : "პროდუქტები"}
            </h2>
            <Cart selectedNumber={selectedNumber} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleClick={() => handleClick(card)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
