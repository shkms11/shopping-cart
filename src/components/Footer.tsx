import type { ReactElement } from "react";

const Footer = (): ReactElement => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
                {/* About Us */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-white text-lg font-semibold mb-2">
                        About Us
                    </h2>
                    <p className="text-sm max-w-xs">
                        ElectroCart is your trusted store for electronics,
                        offering quality products and great service.
                    </p>
                </div>

                {/* Address */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-white text-lg font-semibold mb-2">
                        Address
                    </h2>
                    <address className="not-italic text-sm">
                        Shop #666, Multiplan Center,
                        <br />
                        New Elephant Rd, Dhaka 1205
                    </address>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">
                        Contact
                    </h2>
                    <p className="text-sm">Email: support@electrocart.com</p>
                    <p className="text-sm">Phone: +88 0177662898</p>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-6">
                &copy; 2025 ElectroCart. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
