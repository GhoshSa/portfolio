import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}`}>
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-6 mr-2 mt-0.5"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              <path d="M9 20h6" />
              <path d="M10 9l-2 2 2 2" />
              <path d="M14 9l2 2-2 2" />
            </svg>
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((items, key) => (
            <a key={key} href={items.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {items.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50" aria-level={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
        <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((items, key) => (
              <a key={key} href={items.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {items.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar