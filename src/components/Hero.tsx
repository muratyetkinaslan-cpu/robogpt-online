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
            Robotik Kodlama Eğitimleri · Kayıtlar Açık
          </div>

          <h1>
            Önce öğrenciyi{' '}
            <span className="grad-text">tanıyoruz.</span>
            <span className="line2">
              Sonra doğru eğitimi <span className="grad-text">başlatıyoruz.</span>
            </span>
          </h1>

          <p className="hero-lead">
            Her öğrenci eğitime kapsamlı bir <strong style={{ color: 'var(--text)' }}>
            Assessment</strong> ile başlar. Güçlü yönlerini ve gelişim
            alanlarını belirler, yaşına ve seviyesine uygun robotik kodlama
            yolculuğunu birlikte planlarız.
          </p>

          <div className="assessment-card" aria-label="Assessment değerlendirme alanları">
            <div className="assessment-head">
              <span className="assessment-icon">✦</span>
              <div>
                <strong>ROBOGPT Assessment</strong>
                <small>Eğitimden önce çok yönlü öğrenci değerlendirmesi</small>
              </div>
            </div>
            <div className="assessment-tags">
              {['Algoritma', 'Yazılım', 'Mekanik', 'İngilizce', 'Ritim', 'Odak'].map(
                (item) => <span key={item}>{item}</span>,
              )}
            </div>
          </div>

          {/* Kayıt dönemi tanıtım bandı */}
          <div className="hero-promo-bar">
            <span className="hpb-chip">
              {SITE.enrollment.status.toUpperCase()}
            </span>
            <span className="hpb-text">
              <strong>{SITE.enrollment.note}</strong> · Kontenjanlar sınırlı —{' '}
              <button onClick={openDemoModal} className="hpb-link">
                bilgi al
              </button>
            </span>
          </div>

          <div className="hero-actions">
            <button onClick={openDemoModal} className="btn btn-primary">
              Ücretsiz Assessment Başvurusu <IconArrow size={18} />
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
