const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;

    event.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="w-full flex flex-wrap items-center justify-center gap-2 px-4 pt-6 sm:px-6 sm:gap-3 md:px-10 md:pt-8 lg:justify-between">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(event) => handleClick(event, link.href)}
          className="text-[#D7E2EA] text-[0.65rem] sm:text-sm md:text-lg lg:text-[1.15rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200 whitespace-nowrap flex-shrink-0"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
