import { useRef, useState } from 'react';

export default function Testimonial() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [played, setPlayed] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setPlayed(true);
  };

  return (
    <section className="section" id="gorus">
      <div className="container">
        <div className="testimonial reveal">
          {/* Sol — metin */}
          <div className="testimonial-text">
            <span className="eyebrow">Öğrenci Görüşü</span>
            <blockquote className="testimonial-quote">
              ROBOGPT'de sadece kod öğrenmiyorum — gerçek robotlar kurup,
              programlıyorum. Her hafta yeni bir şey yapıyoruz ve bu çok
              eğlenceli.
            </blockquote>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.98rem' }}>
              Uraz, ROBOGPT öğrencisi olarak deneyimini anlatıyor. PicoBricks
              kitiyle yaptığı projeyi, eğitmenlerini ve neden ROBOGPT'yi
              sevdiğini kendi sözleriyle paylaşıyor.
            </p>
            <div className="testimonial-byline">
              <div className="avatar">U</div>
              <div>
                <div className="name">Uraz</div>
                <div className="role">ROBOGPT öğrencisi · PicoBricks projesi</div>
              </div>
            </div>
          </div>

          {/* Sağ — video */}
          <div className="testimonial-video">
            <video
              ref={videoRef}
              src="/assets/videos/uraz-intro-sesli.mp4"
              poster="/assets/posters/hero-intro.jpg"
              playsInline
              preload="metadata"
              controls={played}
              onEnded={() => setPlayed(false)}
            />
            <div
              className={`testimonial-play ${played ? 'hidden' : ''}`}
              onClick={play}
              role="button"
              aria-label="Videoyu oynat"
            >
              <div className="testimonial-play-btn">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#08080a"
                >
                  <path d="M6 4v16l14-8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
