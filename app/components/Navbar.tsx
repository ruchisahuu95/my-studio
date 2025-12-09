export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 border-b border-gray-800 relative">

            {/* Left: Logo */}
            <div className="w-1/3">
                <h1 className="text-2xl font-bold text-neon-cyan">MyStudio</h1>
            </div>

            {/* Center: Title (Hidden on mobile) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                <h2 className="text-xl font-semibold tracking-wide text-white">
                    Design & Dev Studio
                </h2>
            </div>

            {/* Right: Menu */}
            <ul className="flex gap-6 w-1/3 justify-end">
                <li>
                    <a href="#projects" className="hover:text-neon-pink transition">
                        Works
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-neon-pink transition">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
