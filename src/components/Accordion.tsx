import type { ReactElement, ReactNode } from "react";
import { useState } from "react";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm mb-4">
            <button
                className="w-full flex justify-between items-center p-3 text-left bg-gray-200 hover:bg-gray-300 transition"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-expanded={isOpen}
            >
                <span className="font-semibold">{title}</span>
                <span className="text-xl select-none">
                    {isOpen ? "−" : "+"}
                </span>
            </button>
            {isOpen && <div className="p-3 bg-white">{children}</div>}
        </div>
    );
};

export default Accordion;
