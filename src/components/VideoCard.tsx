import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  poster: string;
  badge?: { color: string; label: string };
  title: string;
  subtitle?: string;
}

/**
 * Görünür alana girdiğinde otomatik oynayan, çıkınca duran video kartı.
 * Sessiz + döngülü — kısa öğrenci/teknik proje klipleri için.
 */
export default function VideoCard({ src, poster, badge, title, subtitle }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (!('IntersectionObserver' in window)) {
      v.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="video-card">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="v-overlay" />
      {badge && (
        <span className="v-badge">
          <span className="d" style={{ background: badge.color }} />
          {badge.label}
        </span>
      )}
      <div className="v-info">
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
