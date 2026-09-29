import { IconArrow, IconWhatsapp, IconInstagram } from './Icons';
import { SITE } from '../config';
import { openDemoModal } from '../demo';

export default function Demo() {
  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="demo reveal">
          <span className="demo-badge">
            ● {SITE.enrollment.status} · {SITE.enrollment.note}
          </span>
          <h2>
            İlk değerlendirme <span className="grad-text">bizden</span>.
            <br />
            Doğru eğitim yolu birlikte başlar.
          </h2>
          <p>
            Ücretsiz Assessment sürecinde çocuğunuzun algoritma, yazılım,
            mekanik, İngilizce, ritim ve odak becerilerini tanırız. Sonuçlara
            göre uygun yaş ve seviye grubunu birlikte belirleriz.
          </p>
          <div className="demo-actions">
            <button onClick={openDemoModal} className="btn btn-primary">
              Assessment Başvurusu Yap <IconArrow size={18} />
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
