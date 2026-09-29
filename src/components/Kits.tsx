/**
 * Eğitim Kitleri — BerryBot, PicoBricks, Tank.
 * Gerçek ürün fotoğrafları public/assets içinde.
 */

const KITS = [
  {
    step: 'ADIM 01',
    photo: '/assets/photo-berrybot.jpg',
    name: 'BerryBot',
    level: 'Başlangıç Kiti',
    levelColor: '#8b5cf6',
    desc: 'Çocuğun ilk robotu. Ahşap gövdeli araç robotunu kendi kurar, görev tabanlı derslerle ilk kodlarını yazar ve robotunu hareket ettirir.',
    tags: ['Araç robotu', 'Görev tabanlı', 'Blok kodlama'],
  },
  {
    step: 'ADIM 02',
    photo: '/assets/photo-picobricks.jpg',
    name: 'PicoBricks',
    level: 'Gelişim Kiti',
    levelColor: '#ef4444',
    desc: 'Daha güçlü kart, daha çok donanım. Modüler bloklarla sensörler, motorlar ve ekranlarla çok yönlü projeler kurar; MicroPython’a geçer.',
    tags: ['Modüler kart', 'Çok sensörlü', 'MicroPython'],
  },
  {
    step: 'İLERİ',
    photo: '/assets/photo-tank.jpg',
    name: 'Tank Robot',
    level: 'Proje Kiti',
    levelColor: '#06b6d4',
    desc: 'İleri seviye paletli robot. Daha karmaşık mekanik, güçlü motor kontrolü ve gerçek mühendislik projeleri için tasarlandı.',
    tags: ['Paletli robot', 'İleri mekanik', 'Özgün proje'],
  },
];

export default function Kits() {
  return (
    <section className="section" id="kitler" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Eğitim Kitlerimiz</span>
          <h2 className="section-title">
            Her seviye için gerçek bir robot kiti
          </h2>
          <p className="section-lead">
            Kitiniz iş ortağımız Robotistan tarafından doğrudan adresinize
            kargolanır. Çocuk seviye atladıkça kit de büyür.
          </p>
        </div>

        <div className="kits-grid">
          {KITS.map((k) => (
            <div className="kit-card reveal" key={k.name}>
              <div className="kit-photo-tile">
                <span className="kit-step">{k.step}</span>
                <img src={k.photo} alt={k.name} loading="lazy" />
              </div>
              <div className="kit-body">
                <h3>{k.name}</h3>
                <span
                  className="kit-level"
                  style={{
                    color: k.levelColor,
                    background: `${k.levelColor}1f`,
                    border: `1px solid ${k.levelColor}44`,
                  }}
                >
                  {k.level}
                </span>
                <p>{k.desc}</p>
                <div className="kit-tags">
                  {k.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
