import { useEffect, useRef, useState } from 'preact/hooks';

type Link = {
  href: string;
  label: string;
};

interface Props {
  links: Link[];
}

const Mobile = ({ links }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div ref={containerRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
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
        <nav
          aria-label="Mobile"
          class="absolute end-0 top-12 z-99 m-4 w-56 overflow-hidden rounded-xl border border-black/5 bg-white shadow-lg"
        >
          <ul>
            {links.map((link: Link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class="text-brand-900 hover:bg-cream-100 block px-4 py-3 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Mobile;
