import { IconCheck } from './Icons';

const GROUPS = [
  {
    cls: 'kids',
    range: '4–9',
    title: 'Kids Grubu',
    desc: 'Oyunlaştırılmış, eğlenceli ve sezgisel. Küçük yaşta robotikle tanışan çocuklar için tasarlandı.',
    items: [
      'Renkli bloklarla görsel kodlama',
      'BerryBot ile ilk robot deneyimi',
      'El becerisi ve problem çözme',
      'Kısa, oyun temelli görevler',
    ],
  },
  {
    cls: 'pro',
    range: '10–18',
    title: 'Büyük Grup',
    desc: 'Bloklardan gerçek metin tabanlı kodlamaya geçiş. Mühendislik düşüncesi ve gerçek projeler.',
    items: [
      'Blok tabanlı kodlamadan MicroPython’a geçiş',
      'PicoBricks ile ileri donanım projeleri',
      'Sensör, motor ve algoritma mantığı',
      'Özgün proje tasarımı ve sunumu',
    ],
  },
];

export default function AgeGroups() {
  return (
    <section className="section" id="yas">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Yaş Grupları</span>
          <h2 className="section-title">
            4'ten 18'e — her yaşa uygun, doğru zorlukta program
          </h2>
          <p className="section-lead">
            Çocuğun yaşı ve seviyesi neyse, eğitim ona göre. İki ana grupta,
            birbirini takip eden müfredatla ilerliyoruz.
          </p>
        </div>

        <div className="age-grid">
          {GROUPS.map((g) => (
            <div className={`age-card ${g.cls} reveal`} key={g.title}>
              <div className="age-glow" />
              <div className="age-range">{g.range}</div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <ul className="age-list">
                {g.items.map((it) => (
                  <li key={it}>
                    <IconCheck size={18} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
