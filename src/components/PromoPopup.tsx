import { useEffect, useState } from 'react';
import { SITE } from '../config';
import { openDemoModal } from '../demo';

/**
 * Sayfa girişinde otomatik açılan promosyon popup'ı.
 * 29 Haziran - 22 Temmuz dönemi · %20 erken kayıt.
 */
export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /* Sayfa yüklendikten 1.5 sn sonra göster (rahatsız etmesin) */
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', esc);
    };
  }, [open]);

  if (!open) return null;

  const handleSignup = () => {
    setOpen(false);
    setTimeout(() => openDemoModal(), 200);
  };

  return (
    <div
      className="modal-backdrop promo-backdrop"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="promo-card" role="dialog" aria-modal="true">
        <button
          className="modal-close"
          onClick={() => setOpen(false)}
          aria-label="Kapat"
        >
          ✕
        </button>

        {/* Üst süslü bant */}
        <div className="promo-banner">
          <span className="promo-banner-dot" />
          {SITE.promo.label.toUpperCase()} · ERKEN KAYIT AÇILDI
        </div>

        <div className="promo-body">
          <div className="promo-discount">
            <span className="d-num">{SITE.promo.discount}</span>
            <span className="d-text">
              <strong>İNDİRİM</strong>
              <small>erken kayıt</small>
            </span>
          </div>

          <h2 className="promo-title">
            {SITE.promo.startDate}'da{' '}
            <span className="grad-text">yeni dönem</span> başlıyor
          </h2>

          <p className="promo-lead">
            <strong>
              {SITE.promo.startDate} – {SITE.promo.endDate}
            </strong>{' '}
            arasında verilecek {SITE.promo.label.toLocaleLowerCase('tr')} robotik
            ve kodlama eğitimi için kontenjan sınırlı. Şimdi kaydolup{' '}
            {SITE.promo.discount} erken kayıt avantajıyla yerinizi alın.
          </p>

          <div className="promo-feats">
            <div className="promo-feat">
              <span className="pf-ic" style={{ color: '#f97316' }}>
                ✦
              </span>
              <span>Ücretsiz demo dersi</span>
            </div>
            <div className="promo-feat">
              <span className="pf-ic" style={{ color: '#a855f7' }}>
                ✦
              </span>
              <span>Kit adresinize kargoyla</span>
            </div>
            <div className="promo-feat">
              <span className="pf-ic" style={{ color: '#06b6d4' }}>
                ✦
              </span>
              <span>Sertifika programı dahil</span>
            </div>
          </div>

          <div className="promo-actions">
            <button onClick={handleSignup} className="btn btn-primary">
              Hemen Kaydol ({SITE.promo.discount} İndirimle)
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <button onClick={() => setOpen(false)} className="btn btn-ghost">
              Daha sonra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
