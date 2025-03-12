// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-4 font-mono text-base lg:text-lg text-[#c9d1d9]">
        {/* Logo */}
        <Link href="/" className="text-[#16f2b3] text-2xl lg:text-3xl">
          {"<Anshuman />"}
        </Link>

        {/* Navbar List */}
        <ul className="flex space-x-6">
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
