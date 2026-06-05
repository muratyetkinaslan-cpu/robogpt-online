const STEPS = [
  {
    n: '01',
    title: 'Ücretsiz demo dersine katıl',
    desc: 'Çocuğunuzla birlikte ilk dersi ücretsiz deneyin. Eğitmenimizle tanışın, sistemi görün, sorularınızı sorun.',
  },
  {
    n: '02',
    title: 'Kitiniz kapınıza gelsin',
    desc: 'Robotistan iş ortaklığımız sayesinde eğitim kitiniz doğrudan adresinize kargolanır. Hazırlık derdi yok.',
  },
  {
    n: '03',
    title: 'Canlı derslerle üretmeye başla',
    desc: 'Mühendis eğitmenlerle birebir takip edilen canlı dersler. Kendi platformumuz üzerinden kod yaz, robotunu çalıştır.',
  },
];

export default function HowOnline() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="online">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Online Eğitim</span>
          <h2 className="section-title">
            Yüz yüze kalitemizi artık ekrana taşıyoruz
          </h2>
          <p className="section-lead">
            Bursa'da yüz yüze verdiğimiz eğitimin aynısı, Türkiye'nin her
            yerinden. Üç basit adımda başlıyorsunuz.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step-card reveal" key={s.n}>
              <div className="big-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
