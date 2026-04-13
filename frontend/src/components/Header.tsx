import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 shadow bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10 object-contain" />
          <span className="font-heading text-2xl tracking-wide">PizzaHub</span>
        </div>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="relative text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition">
              Home
            </span>

            <span className="absolute inset-0 scale-x-0 origin-left bg-accent transition-transform duration-300 group-hover:scale-x-100 rounded-xl"></span>
          </Link>
          <Link
            to="/"
            className="relative text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition">
              Home
            </span>

            <span className="absolute inset-0 scale-x-0 origin-left bg-accent transition-transform duration-300 group-hover:scale-x-100 rounded-xl"></span>
          </Link>
          <Link
            to="/"
            className="relative text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition">
              Home
            </span>

            <span className="absolute inset-0 scale-x-0 origin-left bg-accent transition-transform duration-300 group-hover:scale-x-100 rounded-xl"></span>
          </Link>
          <Link
            to="/"
            className="relative text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition">
              Home
            </span>

            <span className="absolute inset-0 scale-x-0 origin-left bg-accent transition-transform duration-300 group-hover:scale-x-100 rounded-xl"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
              <ShoppingCart size={20} />
            </button>
          </div>
          <div className="flex flex-col items-end leading-tight">
            <p className="text-xs text-gray-500">Order now</p>

            <a
              href="tel:+380000000000"
              className="text-sm font-semibold hover:text-[var(--color-primary)] transition"
            >
              +38 (098) 213 32 27
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
