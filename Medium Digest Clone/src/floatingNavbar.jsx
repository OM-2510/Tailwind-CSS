import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArticleSection from "./Articles";

export default function FloatingNavbar() {
    const fontStyles = "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24";
    const scrollRef = useRef(null);
    const [scrolledRight, setScrolledRight] = useState(false);

    const handleScrollLeft = () => {
        scrollRef.current?.scrollBy({ left: 120, behavior: "smooth" });
        setScrolledRight(true);
    };

    const handleScrollRight = () => {
        scrollRef.current?.scrollBy({ left: -120, behavior: "smooth" });
        setScrolledRight(false);
    };

    return (
        <div className="flex flex-col pl-20 mx-auto w-[800px]">
            <section className="sticky top-0 z-50 bg-white text-sm text-gray-600 font-extralight border-b border-gray-200 w-2xl">
                <div className="relative flex items-center">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto whitespace-nowrap items-end h-17 w-3xl space-x-6 px-4 pr-14 hide-scrollbar"
                    >
                        <a className="hover:text-black pb-3" href="#">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: fontStyles }}
                            >
                                add
                            </span>
                        </a>
                        <a className="hover:text-black pb-4 px-2" href="#">For You</a>
                        <a className="hover:text-black pb-4 px-2" href="#">Following</a>
                        <a className="hover:text-black pb-4 px-2" href="#">Featured</a>
                        <a className="hover:text-black pb-4 px-2" href="#">Machine Learning</a>
                        <a className="hover:text-black pb-4 px-2" href="#">Data Science</a>
                        <a className="hover:text-black pb-4 px-2" href="#">Programming</a>
                    </div>

                    <div
                        onClick={handleScrollLeft}
                        className="absolute right-0 top-0 h-full flex items-center pr-1 cursor-pointer bg-gradient-to-l from-white/100 to-white/10"
                    >
                        {!scrolledRight && <ChevronRight className="w-7 mx-auto mt-4 h-5 text-gray-500" />}
                    </div>

                    <div
                        onClick={handleScrollRight}
                        className="absolute left-0 top-0 h-full flex items-center pl-1 cursor-pointer bg-gradient-to-r from-white/100 to-white/10"
                    >
                        {scrolledRight && <ChevronLeft className="w-7 mx-auto mt-4 h-5 text-gray-500" />}
                    </div>
                </div>
            </section>

            <ArticleSection />
        </div>
    );
}
