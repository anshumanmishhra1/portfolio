// @flow strict
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 font-mono text-base lg:text-lg text-[#c9d1d9]">
        {/* Logo */}
        <Link href="/" className="text-[#16f2b3] text-2xl lg:text-3xl">
          {"<Anshuman />"}
        </Link>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-[#16f2b3] focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Navbar List for Mobile */}
        <ul
          className={`${
            isOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-full"
          } absolute top-16 left-0 w-full bg-[#1a1a1a] p-4 space-y-4 transition-all duration-300 ease-in-out lg:hidden`}
        >
          <li>
            <Link href="/#about" className="text-[#50fa7b] hover:text-[#16f2b3] transition">
              {"about()"}
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-[#ff79c6] hover:text-[#16f2b3] transition">
              {"skills()"}
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-[#8be9fd] hover:text-[#16f2b3] transition">
              {"projects()"}
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-[#f1fa8c] hover:text-[#16f2b3] transition">
              {"education()"}
            </Link>
          </li>
          <li>
            <Link href="/#testimonials" className="text-[#bd93f9] hover:text-[#16f2b3] transition">
              {"testimonials()"}
            </Link>
          </li>
        </ul>

        {/* Navbar List for Desktop */}
        <ul className="hidden lg:flex lg:space-x-6">
          <li>
            <Link href="/#about" className="text-[#50fa7b] hover:text-[#16f2b3] transition">
              {"about()"}
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-[#ff79c6] hover:text-[#16f2b3] transition">
              {"skills()"}
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-[#8be9fd] hover:text-[#16f2b3] transition">
              {"projects()"}
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-[#f1fa8c] hover:text-[#16f2b3] transition">
              {"education()"}
            </Link>
          </li>
          <li>
            <Link href="/#testimonials" className="text-[#bd93f9] hover:text-[#16f2b3] transition">
              {"testimonials()"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
