import { useRef, useState } from "react";
import Cards from "./cards";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/16/solid";

export default function TrendingSection() {
  const scrollRef = useRef(null);
  const [scrolledRight, setScrolledRight] = useState(false)

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -3000, behavior: "smooth" });
    setScrolledRight(false)
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 3000, behavior: "smooth" }); 
    setScrolledRight(true)
  };

  return (
    <>
      <p className="text-white pl-2 pb-6 font-medium text-[18px]">Trending Now</p>

      <div className="flex items-center">

        {scrolledRight && 
            <button 
                onClick={handleScrollLeft}
                className="bg-gray-950 py-10 m-2.5 rounded-md hover:bg-gray-900"
            >
                <ChevronLeftIcon className="h-10 w-7 font-extralight" />
            </button>
        }

            <div
            ref={scrollRef}
            className="flex overflow-x-scroll scroll gap-4 whitespace-nowrap scroll-smooth scrollbar-hide px-6"
            >
            <Cards img_src="src/assets/1.jpg" />
            <Cards img_src="src/assets/2.jpg" />
            <Cards img_src="src/assets/3.jpg" />
            <Cards img_src="src/assets/4.jpg" />
            <Cards img_src="src/assets/5.jpg" />
            <Cards img_src="src/assets/6.jpg" />
            <Cards img_src="src/assets/7.jpg" />
            <Cards img_src="src/assets/8.jpg" />
            <Cards img_src="src/assets/9.jpg" />
            <Cards img_src="src/assets/10.jpg" />
            </div>

        {!scrolledRight && 
            <button 
                onClick={handleScrollRight}
                className="bg-gray-950 py-10 m-2.5 rounded-md hover:bg-gray-900"
            >
                    <ChevronRightIcon className="h-10 w-7 font-extralight" />
            </button>
        }

      </div>
    </>
  );
}
