import  { useState, useEffect } from "react";
import type { ReactElement } from "react";
import mobilePhoneImg from "../assets/products/mobile-phone.jpg";
import laptopImg from "../assets/products/laptop.jpg";
import tvImg from "../assets/products/tv.jpg";

const images = [mobilePhoneImg, laptopImg, tvImg];
const slogans = [
    "Trusted Ecommerce: Quality, Value, Service",
    "Your One-Stop Shop for Electronics",
    "Shop Smart. Shop Secure. Shop With ElectroCart!",
];

const Banner = (): ReactElement => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-8">
            <img
                src={images[index]}
                alt="Banner Slide"
                className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow mb-2 text-center">
                    {slogans[index]}
                </h2>
                <div className="flex space-x-2 mt-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`inline-block w-3 h-3 rounded-full ${
                                i === index ? "bg-white" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
