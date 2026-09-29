import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { IconMenu, IconClose, IconInstagram } from './Icons';
import { SITE } from '../config';
import { openDemoModal } from '../demo';

const LINKS = [
  { href: '#kitler', label: 'Kitler' },
  { href: '#lms', label: 'BerryBot LMS' },
  { href: '#ogrenci-projeleri', label: 'Projeler' },
  { href: '#platform', label: 'Platform' },
  { href: '#veli', label: 'Veli Paneli' },
  { href: '#kayit-sureci', label: 'Kayıt Süreci' },
  { href: '#sss', label: 'SSS' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />

        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a
            href={SITE.instagram}
            className="btn btn-ghost nav-ig"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram size={18} />
          </a>
          <button onClick={openDemoModal} className="btn btn-primary">
            Ücretsiz Assessment
          </button>
          <button
            className="nav-toggle"
            aria-label="Menü"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={SITE.instagram}
            className="btn btn-ig"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <IconInstagram size={18} /> Instagram
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              setOpen(false);
              openDemoModal();
            }}
          >
            Ücretsiz Assessment
          </button>
        </div>
      )}
    </nav>
  );
}
