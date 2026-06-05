import { IconArrow, IconVideo } from './Icons';
import { SITE } from '../config';
import { openDemoModal } from '../demo';

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        {/* Sol — metin */}
        <div className="reveal in">
          <div className="hero-badge">
            <span className="dot" />
            Artık online · uzaktan eğitim başladı
          </div>

          <h1>
            Çocuğunuz robot <span className="grad-text">kurar</span>,{' '}
            <span className="line2">
              kod <span className="grad-text">yazar</span>, üretir.
            </span>
          </h1>

          <p className="hero-lead">
            ROBOGPT, 4–18 yaş çocuklara mekanik, yazılım ve elektroniği{' '}
            <strong style={{ color: 'var(--text)' }}>birlikte</strong> öğreten
            robotik kodlama kurumudur. Mühendis kadro, proje tabanlı eğitim,
            kendi geliştirdiğimiz dijital platform.
          </p>

          {/* 29 Haziran yeni dönem tanıtım bantı */}
          <div className="hero-promo-bar">
            <span className="hpb-chip">
              {SITE.promo.discount} ERKEN KAYIT
            </span>
            <span className="hpb-text">
              <strong>{SITE.promo.startDate}</strong>'da yeni dönem başlıyor —{' '}
              <button onClick={openDemoModal} className="hpb-link">
                hemen kaydol
              </button>
            </span>
          </div>

          <div className="hero-actions">
            <button onClick={openDemoModal} className="btn btn-primary">
              Ücretsiz Demo Dersi Al <IconArrow size={18} />
            </button>
            <a href="#yolculuk" className="btn btn-ghost">
              <IconVideo size={18} /> Eğitim Yolculuğu
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">
                1 <span>yıl</span>
              </div>
              <div className="lbl">İçinde Bursa'nın lideri</div>
            </div>
            <div className="hero-stat">
              <div className="num">
                4–18 <span>yaş</span>
              </div>
              <div className="lbl">Her yaşa uygun program</div>
            </div>
            <div className="hero-stat">
              <div className="num">
                100<span>%</span>
              </div>
              <div className="lbl">Mühendis eğitmen kadrosu</div>
            </div>
          </div>
        </div>

        {/* Sağ — anasayfa giriş videosu + kit fotoğrafları */}
        <div className="hero-visual reveal in">
          <div className="hero-phone">
            <div className="hero-phone-notch" />
            <video
              src="/assets/videos/hero-intro.mp4"
              poster="/assets/posters/hero-intro.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="hero-photo hero-photo-bb">
            <img src="/assets/photo-berrybot.jpg" alt="BerryBot robot kiti" />
            <span className="hero-photo-tag">BerryBot</span>
          </div>

          <div className="hero-photo hero-photo-pb">
            <img
              src="/assets/photo-picobricks.jpg"
              alt="PicoBricks robot kiti"
            />
            <span className="hero-photo-tag">PicoBricks</span>
          </div>
        </div>
      </div>
    </header>
  );
}
