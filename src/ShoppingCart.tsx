import type { ReactElement } from "react";
import {
    addToCart,
    setShowCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
} from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import React, { useState } from "react";
import mobilePhoneImg from "./assets/products/mobile-phone.jpg";
import iphone14Img from "./assets/products/iphone14.jpg";
import iphone15proImg from "./assets/products/iphone15pro.jpg";
import laptopImg from "./assets/products/laptop.jpg";
import macbookAirM2Img from "./assets/products/macbook-air-m2.jpg";
import dellXps15Img from "./assets/products/dell-xps-15.jpg";
import cameraImg from "./assets/products/camera.jpg";
import sonyA7ivImg from "./assets/products/sony-a7iv.jpg";
import canonEosR5Img from "./assets/products/canon-eos-r5.jpg";
import headphonesImg from "./assets/products/headphones.jpg";
import airpodsMaxImg from "./assets/products/airpods-max.jpg";
import boseQc45Img from "./assets/products/bose-qc45.jpg";
import tabletImg from "./assets/products/tablet.jpg";
import ipad10thGenImg from "./assets/products/ipad-10th-gen.jpg";
import galaxyTabS8Img from "./assets/products/galaxy-tab-s8.jpg";
import tvImg from "./assets/products/tv.jpg";
import samsungQled4kImg from "./assets/products/samsung-qled-4k.jpg";
import lgOledCxImg from "./assets/products/lg-oled-cx.jpg";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    image: string;
}

export const ShoppingCart = (): ReactElement => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.itemList);
    const totalAmount = useSelector(
        (state: RootState) => state.cart.totalAmount
    );

    const [showOrderBox, setShowOrderBox] = useState(false);
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const products = [
        {
            id: "prod1",
            name: "Mobile Phone",
            image: mobilePhoneImg,
            description:
                "Latest smartphones with high-resolution cameras, fast processors, and long battery life.",
            features: [
                "5G connectivity",
                "OLED display",
                "Face ID",
                "Fast charging",
                "Water resistant",
            ],
            models: [
                {
                    id: "iphone14",
                    name: "iPhone 14",
                    price: 799,
                    image: iphone14Img,
                    features: [
                        "6.1-inch Super Retina XDR display",
                        "A15 Bionic chip",
                        "Dual 12MP camera system",
                        "5G capable",
                        "Up to 20 hours video playback",
                    ],
                },
                {
                    id: "iphone15pro",
                    name: "iPhone 15 Pro",
                    price: 999,
                    image: iphone15proImg,
                    features: [
                        "6.1-inch ProMotion display",
                        "A17 Pro chip",
                        "Triple 48MP camera system",
                        "Titanium design",
                        "USB-C connectivity",
                    ],
                },
            ],
        },
        {
            id: "prod2",
            name: "Laptop",
            image: laptopImg,
            description: "Powerful laptops for work and play.",
            features: [
                "Retina display",
                "SSD storage",
                "Lightweight design",
                "Long battery life",
                "Backlit keyboard",
            ],
            models: [
                {
                    id: "macbookair",
                    name: "MacBook Air M2",
                    price: 1199,
                    image: macbookAirM2Img,
                    features: [
                        "13.6-inch Liquid Retina display",
                        "Apple M2 chip",
                        "Fanless design",
                        "MagSafe charging",
                        "Up to 18 hours battery life",
                    ],
                },
                {
                    id: "dellxps15",
                    name: "Dell XPS 15",
                    price: 1499,
                    image: dellXps15Img,
                    features: [
                        "15.6-inch InfinityEdge display",
                        "Intel Core i7 processor",
                        "NVIDIA GeForce RTX graphics",
                        "Carbon fiber palm rest",
                        "Up to 1TB SSD",
                    ],
                },
            ],
        },
        {
            id: "prod3",
            name: "Camera",
            image: cameraImg,
            description: "Capture stunning photos and videos.",
            features: [
                "4K video recording",
                "Interchangeable lenses",
                "Image stabilization",
                "Wi-Fi connectivity",
                "Touchscreen LCD",
            ],
            models: [
                {
                    id: "sonyA7IV",
                    name: "Sony A7 IV",
                    price: 2499,
                    image: sonyA7ivImg,
                    features: [
                        "33MP full-frame sensor",
                        "4K 60p video",
                        "759 phase-detection AF points",
                        "5-axis in-body stabilization",
                        "Vari-angle touchscreen",
                    ],
                },
                {
                    id: "canonR5",
                    name: "Canon EOS R5",
                    price: 3899,
                    image: canonEosR5Img,
                    features: [
                        "45MP full-frame sensor",
                        "8K RAW video",
                        "Dual Pixel CMOS AF II",
                        "In-body image stabilization",
                        "Dual card slots",
                    ],
                },
            ],
        },
        {
            id: "prod4",
            name: "Headphones",
            image: headphonesImg,
            description: "Experience immersive sound and comfort.",
            features: [
                "Noise cancellation",
                "Wireless Bluetooth",
                "Long battery life",
                "Comfort fit",
                "Built-in microphone",
            ],
            models: [
                {
                    id: "airpodsmax",
                    name: "AirPods Max",
                    price: 549,
                    image: airpodsMaxImg,
                    features: [
                        "Active Noise Cancellation",
                        "Spatial audio",
                        "Apple H1 chips",
                        "Digital Crown control",
                        "Up to 20 hours battery life",
                    ],
                },
                {
                    id: "boseqc45",
                    name: "Bose QuietComfort 45",
                    price: 329,
                    image: boseQc45Img,
                    features: [
                        "Acoustic Noise Cancelling",
                        "Aware Mode",
                        "Lightweight comfort",
                        "24 hours battery life",
                        "Adjustable EQ",
                    ],
                },
            ],
        },
        {
            id: "prod5",
            name: "Tablet",
            image: tabletImg,
            description: "Versatile tablets for work and entertainment.",
            features: [
                "Multi-touch display",
                "Stylus support",
                "Portable design",
                "Split-screen multitasking",
                "HD front camera",
            ],
            models: [
                {
                    id: "ipad10",
                    name: "iPad 10th Gen",
                    price: 449,
                    image: ipad10thGenImg,
                    features: [
                        "10.9-inch Liquid Retina display",
                        "A14 Bionic chip",
                        "Landscape stereo speakers",
                        "Touch ID",
                        "Apple Pencil (1st gen) support",
                    ],
                },
                {
                    id: "galaxytabs8",
                    name: "Samsung Galaxy Tab S8",
                    price: 699,
                    image: galaxyTabS8Img,
                    features: [
                        "11-inch LCD display",
                        "Snapdragon 8 Gen 1",
                        "S Pen included",
                        "Ultra-wide front camera",
                        "8,000mAh battery",
                    ],
                },
            ],
        },
        {
            id: "prod6",
            name: "TV",
            image: tvImg,
            description: "Enjoy movies and shows in stunning clarity.",
            features: [
                "4K UHD resolution",
                "Smart TV apps",
                "HDR support",
                "Voice control",
                "Multiple HDMI ports",
            ],
            models: [
                {
                    id: "samsungQLED",
                    name: "Samsung QLED 4K",
                    price: 1199,
                    image: samsungQled4kImg,
                    features: [
                        "4K UHD resolution",
                        "Quantum Dot technology",
                        "Ambient Mode+",
                        "Smart TV apps",
                        "Multiple voice assistants",
                    ],
                },
                {
                    id: "lgOLED",
                    name: "LG OLED CX",
                    price: 1499,
                    image: lgOledCxImg,
                    features: [
                        "OLED display",
                        "α9 Gen 3 AI Processor 4K",
                        "Dolby Vision IQ & Atmos",
                        "NVIDIA G-SYNC compatible",
                        "ThinQ AI",
                    ],
                },
            ],
        },
    ];

    const handleAddToCart = (product: CartItem) => {
        dispatch(addToCart(product));
    };

    const handleDecrease = (id: string) => {
        dispatch(decreaseQuantity(id));
    };

    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOrderSubmitted(true);
        setShowOrderBox(false);
        setAddress("");
        setContact("");
    };

    const handleThankYouClose = () => {
        setOrderSubmitted(false);
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto p-4">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Products</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <li
                                key={product.id}
                                className="border rounded-2xl p-6 flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-36 h-36 object-cover rounded-xl mb-5 group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <h3 className="text-2xl font-extrabold mb-3 text-blue-900 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3 text-center">
                                    {product.description}
                                </p>
                                <ul className="text-xs text-gray-500 mb-3 list-disc list-inside">
                                    {product.features &&
                                        product.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                </ul>
                                <Accordion title={product.name}>
                                    <ul className="space-y-6">
                                        {product.models.map((model, idx) => (
                                            <li
                                                key={model.id}
                                                className="flex flex-col items-center border rounded-xl bg-gray-50 p-4 shadow hover:shadow-md transition-shadow duration-200 relative"
                                            >
                                                <img
                                                    src={model.image}
                                                    alt={model.name}
                                                    className="w-20 h-20 object-cover rounded mb-2 border border-gray-200 bg-white"
                                                    loading="lazy"
                                                />
                                                <span className="font-semibold text-lg text-gray-800 mb-1">
                                                    {model.name}
                                                </span>
                                                <span className="mb-3 text-blue-700 font-bold text-xl">
                                                    ${model.price}
                                                </span>
                                                <ul className="text-xs text-gray-500 mb-2 list-disc list-inside">
                                                    {model.features &&
                                                        model.features.map(
                                                            (feature, idx) => (
                                                                <li key={idx}>
                                                                    {feature}
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                                <button
                                                    onClick={() =>
                                                        handleAddToCart(model)
                                                    }
                                                    className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 rounded-lg font-semibold shadow hover:from-yellow-300 hover:to-yellow-200 hover:text-blue-800 transition-all duration-200"
                                                    type="button"
                                                >
                                                    Add to Cart
                                                </button>
                                                {idx !==
                                                    product.models.length -
                                                        1 && (
                                                    <div className="absolute left-4 right-4 bottom-0 h-px bg-gray-200 mt-4" />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-10 bg-gray-100 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
                    {items.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <ul>
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className="mb-2 flex items-center justify-between"
                                    >
                                        <span>
                                            {item.name} - Quantity:{" "}
                                            {item.quantity}
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            <span className="font-semibold">
                                                ${item.totalPrice}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleDecrease(item.id)
                                                }
                                                className="ml-2 px-2 py-1 bg-red-400 text-white rounded hover:bg-red-500 transition"
                                                type="button"
                                            >
                                                −
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 text-right font-bold text-lg">
                                Total: ${totalAmount}
                            </div>
                            <div className="mt-6 text-right">
                                <button
                                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition"
                                    onClick={() => setShowOrderBox(true)}
                                >
                                    Confirm Order
                                </button>
                            </div>
                        </>
                    )}
                </section>
                {showOrderBox && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                                onClick={() => setShowOrderBox(false)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                            <h3 className="text-xl font-bold mb-4">
                                Enter Shipping Details
                            </h3>
                            <form
                                onSubmit={handleOrderSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Address
                                    </label>
                                    <textarea
                                        className="w-full border rounded p-2"
                                        required
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Contact Number
                                    </label>
                                    <input
                                        className="w-full border rounded p-2"
                                        required
                                        value={contact}
                                        onChange={(e) =>
                                            setContact(e.target.value)
                                        }
                                        type="tel"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
                                >
                                    Submit Order
                                </button>
                            </form>
                        </div>
                    </div>
                )}
                {orderSubmitted && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
                            <h3 className="text-2xl font-bold mb-4 text-green-700">
                                Thank you for your order!
                            </h3>
                            <p className="mb-4">
                                We have received your order and will process it
                                soon.
                            </p>
                            <button
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                                onClick={handleThankYouClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};
