import React, { useState, useRef, useEffect } from "react";

const slides = [
  {
    id: 1,
    imageSrc:
      "https://www.everyveganrecipe.com/recipe/images/carrot-cake-vegan_sm.jpg",
    altText: "Slide 1",
    title: "Apple Watch Series 7 ",
    price: "599$",
  },
  {
    id: 2,
    imageSrc:
      "https://www.everyveganrecipe.com/recipe/images/salted-caramel-chocolate-chip-raspberry-ice-cream-cups_sm.jpg",
    altText: "Slide 2",
    title: "Aluminium Case",
    price: "599$",
  },
  {
    id: 3,
    imageSrc:
      "https://www.everyveganrecipe.com/recipe/images/no-bake-pumpkin-cheesecake_sm.jpg",
    altText: "Slide 3",
    title: "Every Vegan Recipe",
    price: "599$",
  },
  {
    id: 4,
    imageSrc:
      "https://www.everyveganrecipe.com/recipe/images/pumpkin-pie-hummus_sm.jpg",
    altText: "Slide 3",
    title: "Every Vegan Recipe",
    price: "599$",
  },
  {
    id: 5,
    imageSrc:
      "https://www.everyveganrecipe.com/recipe/images/pumpkin-pie-hummus_sm.jpg",
    altText: "Slide 3",
    title: "Every Vegan Recipe",
    price: "599$",
  },
];

const Recomandations = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  return (
    <div className="relative  container mx-auto">
      <div className="my-10 text-center">
        <p className="text-[#283618]    text-6xl  font-bold  dark:text-white">
          Recomandations
        </p>
      </div>
      <div className="flex">
        <div className="carousel  mx-auto">
          <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={` carousel-item inset-0 transition-opacity duration-500  bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
                >
                  <a href="#">
                    <img
                      className="p-8 rounded object-cover "
                      src={slide.imageSrc}
                      alt={slide.altText}
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {slide.title}
                      </h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {slide.price}
                      </span>
                      <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomandations;
