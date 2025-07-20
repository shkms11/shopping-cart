import type { ReactElement } from "react";
const Header = (): ReactElement => {
    return (
        <header className="bg-blue-900 p-4 shadow-md sticky top-0 z-50">
            <h1 className="text-white text-2xl font-bold">Shopping Cart</h1>
        </header>
    );
};

export default Header;
