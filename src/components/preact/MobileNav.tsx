import { useState } from 'preact/hooks';

type Link = {
  href: string;
  label: string;
};

interface Props {
  links: Link[];
}

const Mobile = ({ links }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        class="rounded-full border border-white/25 p-2 text-white transition hover:bg-white/10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div
          role="menu"
          class="absolute end-0 top-12 z-99 m-4 w-56 overflow-hidden rounded-xl border border-black/5 bg-white shadow-lg"
        >
          {links.map((link: Link) => (
            <a
              key={link.href}
              href={link.href}
              class="text-brand-900 hover:bg-cream-100 block px-4 py-3 text-sm font-medium transition-colors"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mobile;
