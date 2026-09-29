import { Logo } from './Logo';
import {
  IconInstagram,
  IconWhatsapp,
  IconYoutube,
  IconPhone,
  IconMail,
  IconPin,
} from './Icons';
import { SITE } from '../config';

const ico = {
  display: 'inline-flex',
  verticalAlign: 'middle' as const,
  marginRight: 8,
};

export default function Footer() {
  return (
    <footer className="footer" id="iletisim">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Robotik &amp; kodlama eğitimi. Mekanik, yazılım ve elektroniği
              birlikte öğreten, mühendislerden oluşan bir okul.
            </p>
            <div className="footer-social">
              <a
                href={SITE.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <IconInstagram size={18} />
              </a>
              <a
                href={SITE.whatsapp}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <IconWhatsapp size={18} />
              </a>
              <a
                href={SITE.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <IconYoutube size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Eğitim</h4>
            <a href="#kitler">Eğitim Kitleri</a>
            <a href="#yolculuk">Eğitim Yolculuğu</a>
            <a href="#platform">Platformumuz</a>
            <a href="#kayit-sureci">Kayıt Süreci</a>
          </div>

          <div className="footer-col">
            <h4>Kurum</h4>
            <a href="#neden">Neden ROBOGPT</a>
            <a href="#veli">Veli Paneli</a>
            <a href="#sss">SSS</a>
            <a href="#demo">Ücretsiz Assessment</a>
          </div>

          <div className="footer-col">
            <h4>İletişim</h4>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <span style={ico}>
                <IconInstagram size={15} />
              </span>
              Instagram {SITE.instagramHandle}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span style={ico}>
                <IconWhatsapp size={15} />
              </span>
              WhatsApp
            </a>
            <a href={SITE.phoneHref}>
              <span style={ico}>
                <IconPhone size={15} />
              </span>
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`}>
              <span style={ico}>
                <IconMail size={15} />
              </span>
              {SITE.email}
            </a>
            <a
              href="https://maps.google.com/?q=19+Mayıs+Mahallesi+Nilüfer+Bursa"
              target="_blank"
              rel="noreferrer"
            >
              <span style={ico}>
                <IconPin size={15} />
              </span>
              {SITE.address}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} ROBOGPT · Tüm hakları saklıdır.
          </span>
          <span className="made">Robotistan iş ortağı · Bursa</span>
        </div>
      </div>
    </footer>
  );
}
