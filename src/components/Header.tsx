import type { ReactElement } from "react";

const Header = (): ReactElement => {
    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 p-5 shadow-lg flex items-center justify-between">
            <h1 className="text-white text-3xl font-extrabold tracking-widest select-none">
                ElectroCart
            </h1>
            {/* shopping cart icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white hover:text-indigo-300 transition-colors duration-300 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m5-7v7m6-7v7m1-18h-6l-1 4H3"
                />
            </svg>
        </header>
    );
};

export default Header;
