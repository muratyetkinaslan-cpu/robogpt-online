import { IconArrow, IconWhatsapp, IconInstagram } from './Icons';
import { SITE } from '../config';
import { openDemoModal } from '../demo';

export default function Demo() {
  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="demo reveal">
          <span className="demo-badge">
            ● {SITE.promo.startDate} — {SITE.promo.endDate} dönemi ·{' '}
            {SITE.promo.discount} erken kayıt
          </span>
          <h2>
            İlk ders <span className="grad-text">bizden</span>.
            <br />
            Gerisini çocuğunuzun gözleri anlatır.
          </h2>
          <p>
            Ücretsiz demo dersinde çocuğunuz gerçek bir robot görevini
            tamamlar, siz de eğitimi yakından tanırsınız. {SITE.promo.startDate}
            'da başlayan yeni döneme erken kayıtla {SITE.promo.discount}{' '}
            indirim kazanın.
          </p>
          <div className="demo-actions">
            <button onClick={openDemoModal} className="btn btn-primary">
              Demo Dersi Ayırt <IconArrow size={18} />
            </button>
            <a
              href={SITE.whatsapp}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <IconWhatsapp size={18} /> WhatsApp'tan Yaz
            </a>
            <a
              href={SITE.instagram}
              className="btn btn-ig"
              target="_blank"
              rel="noreferrer"
            >
              <IconInstagram size={18} /> Instagram
            </a>
          </div>
          <div className="demo-note">
            Kontenjanlarımız sınırlıdır — gruplar dolmadan kaydolun.
          </div>
        </div>
      </div>
    </section>
  );
}
