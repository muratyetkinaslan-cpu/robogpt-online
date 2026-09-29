const STEPS = [
  {
    tag: 'Başlangıç',
    title: 'BerryBot Araç Kiti',
    desc: 'Çocuk kendi robot aracını kurar. Görev tabanlı derslerle ilk blokları yazar, robotunu hareket ettirir.',
  },
  {
    tag: 'Görevler',
    title: 'Görevden Göreve',
    desc: 'Çizgi takibi, engelden kaçma, ışık ve mesafe sensörleri… Her görev yeni bir mühendislik kavramı öğretir.',
  },
  {
    tag: 'Gelişim',
    title: 'PicoBricks',
    desc: 'Daha güçlü kart, daha çok donanım. Çocuk artık sensörler, motorlar ve ekranlarla çok yönlü projeler kurar.',
  },
  {
    tag: 'Üretim',
    title: 'Gerçek Projeler',
    desc: 'MicroPython ile kendi projesini tasarlar. Akıllı ev, robot kol, oyun… Hayal ettiğini üretecek seviyeye gelir.',
  },
];

export default function Journey() {
  return (
    <section className="section" id="yolculuk">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Eğitim Yolculuğu</span>
          <h2 className="section-title">
            İlk bloktan gerçek projeye uzanan net bir patika
          </h2>
          <p className="section-lead">
            Her öğrenci aynı sağlam temelden başlar ve adım adım ilerler.
            Eğitim, kit ve seviye birbirini tamamlar.
          </p>
        </div>

        <div className="journey">
          <div className="journey-track">
            <div className="journey-line" />
            {STEPS.map((s, i) => (
              <div className="jstep reveal" key={i}>
                <div className="jstep-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="jstep-card">
                  <span className="jstep-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
