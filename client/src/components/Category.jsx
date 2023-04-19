import React from "react";

const genres = [
  {
    id: "1",
    title: "Breakfast",
    icon: "svg/breakfast.svg",
    alt: "Breakfast",
  },
  {
    id: "2",
    title: "Lunch",
    icon: "svg/lunch.svg",
    alt: "Lunch",
  },
  { id: "3", title: "Dinner", icon: "svg/dinner.svg", alt: "dinner" },
  { id: "4", title: "Dessert", icon: "svg/dessert.svg", alt: "Dessert" },
  { id: "5", title: "Drinks", icon: "svg/drinks.svg", alt: "Drinks" },
  { id: "6", title: "Soups", icon: "svg/soup.svg", alt: "Soups" },
  { id: "7", title: "FastFood", icon: "svg/fastfood.svg", alt: "FastFood" },
  { id: "8", title: "SeaFood", icon: "svg/seafood.svg", alt: "SeaFood" },
];

export default function Category() {
  return (
    <div className="container mx-auto text-center ">
      <div className="content-center my-10 ">
        <p className="text-[#283618]  text-6xl my-2 font-bold  dark:text-white">
          Categories
        </p>
        <p className="text-3xl text-lime-950  text-gray-900 dark:text-white">
          A large selection of dishes of cooking
        </p>
      </div>
      <div className="flex justify-around mx-9  my-10 ">
        {genres.map((foods) => (
          <div className="grid">
            <button
              key={foods.id}
              type="button"
              className=" text-white bg-[#BC6C25] hover:bg-[#DDA15E]  rounded-full drop-shadow-[5px_1px_1px_rgba(221,161,94,0.5)]  px-10 py-10    dark:focus:ring-yellow-900 my-3 "
            >
              <img
                className="h-12 stroke-cyan-500 "
                src={foods.icon}
                alt={foods.alt}
              />
            </button>

            <a href="">{foods.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
