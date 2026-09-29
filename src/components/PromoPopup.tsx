import { useEffect, useState } from 'react';
import { SITE } from '../config';
import { openDemoModal } from '../demo';

/**
 * Sayfa girişinde otomatik açılan promosyon popup'ı.
 * Yeni dönem robotik kodlama kayıt duyurusu.
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
          {SITE.enrollment.label.toUpperCase()} · {SITE.enrollment.status.toUpperCase()}
        </div>

        <div className="promo-body">
          <div className="promo-discount">
            <span className="d-num">4–18</span>
            <span className="d-text">
              <strong>YAŞ</strong>
              <small>seviyeye uygun eğitim</small>
            </span>
          </div>

          <h2 className="promo-title">
            Robotik kodlama eğitimlerinde{' '}
            <span className="grad-text">kayıtlar başladı</span>
          </h2>

          <p className="promo-lead">
            Çocuğunuz robotunu kurarken kodlamayı, elektroniği ve mühendislik
            düşüncesini yaşayarak öğrensin. <strong>Yaş ve seviyeye uygun</strong>{' '}
            sınıflarımız için kontenjanlar sınırlıdır.
          </p>

          <div className="promo-feats">
            <div className="promo-feat">
              <span className="pf-ic" style={{ color: '#f97316' }}>
                ✦
              </span>
              <span>Ücretsiz öğrenci değerlendirmesi</span>
            </div>
            <div className="promo-feat">
              <span className="pf-ic" style={{ color: '#a855f7' }}>
                ✦
              </span>
              <span>Gerçek robot kitleriyle uygulama</span>
            </div>
            <div className="promo-feat">
              <span className="pf-ic" style={{ color: '#06b6d4' }}>
                ✦
              </span>
              <span>Assessment ile doğru seviye ve grup</span>
            </div>
          </div>

          <div className="promo-actions">
            <button onClick={handleSignup} className="btn btn-primary">
              Ücretsiz Assessment'a Katıl
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
