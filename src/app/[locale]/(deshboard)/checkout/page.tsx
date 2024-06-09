"use client";
import { useEffect, useState, useReducer } from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { useLocale } from "next-intl";
import Image from "next/image";
import { reducer } from "../../../../helpers";
import { productElement, SelectedProduct } from "../../../../../types";
export default function CheckoutPage() {
  const locale = useLocale();

  // fix hydrate error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  //
  const [cardsData, setCachedValue] = useLocalStorage("selectedProducts", []);

  const [SelectedProducts, dispatch] = useReducer(reducer, cardsData);

  useEffect(() => {
    setCachedValue(SelectedProducts);
  }, [SelectedProducts, setCachedValue]);

  const handleQuantityChange = (
    action: "INCREMENT" | "DECREMENT" | "REMOVE",
    card: productElement
  ) => {
    dispatch({ type: action, payload: card });
  };

  const handleProductRemove = (action: "RESET") => {
    dispatch({ type: action });
  };

  // count total items
  const totalCount = cardsData.reduce(
    (accumulator: any, item: any) => accumulator + item.count,
    0
  );
  const totalPrice = cardsData.reduce(
    (accumulator: any, item: any) =>
      accumulator + item.count * item.selectedCard.price,
    0
  );
  console.log(totalPrice);
  console.log(cardsData);
  return (
    <section className="">
      <div className=" max-w-[80%] my-0 mx-auto py-[2rem] flex flex-col justify-center gap-10">
        {isMounted && cardsData.length > 0 ? (
          <h2 className="text-[40px] leading-[25px] text-center">
            {locale === "en" ? "Cart" : "კალათა"}
          </h2>
        ) : (
          ""
        )}
        {isMounted && cardsData.length > 0 ? (
          <>
            <table className="w-[80%] my-0 mx-auto border-collapse border-none">
              <thead>
                <tr className="[&>th]:text-start  bg-[#D1D1D1] dark:bg-[#333B61] [&>th]:py-[10px] [&>th]:pr-[20px]">
                  <th>
                    {locale === "en" ? "Poduct Image" : "პროდუქტის სურათი"}
                  </th>
                  <th>
                    {locale === "en" ? "Poduct Title" : "პროდუქტის დასახელება"}
                  </th>
                  <th>{locale === "en" ? "Category" : "კატეგორია"}</th>
                  <th>{locale === "en" ? "Price" : "ფასი"}</th>
                  <th>{locale === "en" ? "Quantity" : "რაოდენობა"}</th>
                  <th className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#b91c1c"
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleProductRemove("RESET")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cardsData.map((product: SelectedProduct) => (
                  <tr
                    key={product.id}
                    className=" [&>td]:h-[80px] [&>td]:pr-[20px] border-b-2 border-[#5262ac] hover:bg-[#ededed] dark:hover:bg-[#8589a0]/50"
                  >
                    <td>
                      <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden ">
                        <Image
                          className="w-[90%] h-[100px] object-cover object-center inline-block"
                          src={product.selectedCard.thumbnail}
                          alt={product.selectedCard.title}
                          width={500}
                          height={500}
                        />
                      </div>
                    </td>
                    <td>{product.selectedCard.title}</td>
                    <td>{product.selectedCard.category}</td>
                    <td>{product.selectedCard.price} $</td>
                    <td>
                      <div className="flex gap-3 items-center">
                        <button
                          className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                          onClick={() =>
                            handleQuantityChange(
                              "DECREMENT",
                              product.selectedCard
                            )
                          }
                        >
                          -
                        </button>
                        <span className="text-2xl">{product.count}</span>
                        <button
                          className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                          onClick={() =>
                            handleQuantityChange(
                              "INCREMENT",
                              product.selectedCard
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="text-3xl text-red-700 hover:text-green-700 transition-all duration-300 ease-in-out"
                        onClick={() =>
                          handleQuantityChange("REMOVE", product.selectedCard)
                        }
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
                {/* <td className="text-[20px] font-bold ">
                  <div className="w-full">total-items:</div>
                  <div className="w-full">total-price:</div>
                </td>
                <td className="text-[20px] font-bold text-center ">
                  <div className="w-full">{totalCount}</div>

                </td> */}
              </tbody>
            </table>
            <div className="w-[80%] my-0 mx-auto text-right text-[30px]">
              <div className="flex items-center justify-end">
                <span className="flex-initial w-64">Total Items:</span>
                <span className="flex-initial w-36 ">{totalCount}</span>
              </div>
              <div className="flex items-center justify-end">
                <span className="flex-initial w-64">Total Price :</span>
                <span className="flex-initial w-36">{totalPrice} $</span>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-[25px] lg:mt-[65px] flex justify-center text-[20px] lg:text-[25px]">
            {locale === "en" ? "Cart is empty" : "კალათა ცარიელია"}
          </div>
        )}
      </div>
    </section>
  );
}
//
// border-separate border-spacing-3
