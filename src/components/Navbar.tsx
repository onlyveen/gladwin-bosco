import { BiDownArrowCircle } from 'react-icons/bi';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 flex max-w-[94vw] -translate-x-1/2 items-center gap-4 overflow-x-auto rounded-full border border-white/70 bg-white/5 px-5 py-2.5 backdrop-blur-sm sm:top-[30px] sm:justify-center sm:gap-6 sm:px-6 sm:py-3 lg:gap-10 lg:px-[30px] lg:py-[15px]">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="whitespace-nowrap font-poppins text-xs tracking-[-0.18px] text-white sm:text-base lg:text-lg"
        >
          {link.label}
        </a>
      ))}
      <a
        href="/resume.pdf"
        download
        className="flex items-center justify-center gap-1.5 whitespace-nowrap font-poppins text-xs tracking-[-0.18px] text-[#d98200] sm:gap-2.5 sm:text-base lg:text-lg"
      >
        Resume
        <BiDownArrowCircle size={18} />
      </a>
    </nav>
  );
}
