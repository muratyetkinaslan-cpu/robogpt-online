import { IconBolt, IconUsers, IconTarget, IconCheckCircle } from './Icons';

const FEATS = [
  {
    ic: <IconUsers size={19} />,
    h: 'Anlık ekran bağlantısı',
    p: 'Öğretmen, öğrencinin çalışma alanına canlı bağlanır — blokları gerçek zamanlı görür.',
  },
  {
    ic: <IconBolt size={19} />,
    h: 'Anında müdahale',
    p: 'Öğrenci takıldığında öğretmen aynı ekranda düzeltir, birlikte çözer. Bekleme yok.',
  },
  {
    ic: <IconTarget size={19} />,
    h: '“El Kaldır” butonu',
    p: 'Öğrenci tek tıkla yardım ister; öğretmen sınıf panelinden anında görür.',
  },
  {
    ic: <IconCheckCircle size={19} />,
    h: 'Sınıf görünümü',
    p: 'Kim aktif, kim hangi görevde, kim takıldı — öğretmen tek bakışta yönetir.',
  },
];

export default function LiveShare() {
  return (
    <section className="section" id="canli-sinif" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="liveshare reveal">
          {/* Sol — metin */}
          <div className="ls-text">
            <span className="eyebrow">Canlı Sınıf · Live Share</span>
            <h2 className="section-title">
              Öğretmen, öğrencinin ekranına{' '}
              <span style={{ color: '#22c55e' }}>anında bağlanır</span>
            </h2>
            <p className="section-lead">
              Online eğitimin en büyük sorunu “öğrenci ekranda ne yapıyor?”
              belirsizliğidir. RoboBlocks Extreme'in Live Share özelliğiyle bu
              sorun ortadan kalkar — öğretmen öğrencinin çalışma alanını canlı
              görür ve anında müdahale eder.
            </p>

            <div className="ls-feats">
              {FEATS.map((f) => (
                <div className="ls-feat" key={f.h}>
                  <span className="ic">{f.ic}</span>
                  <div>
                    <h4>{f.h}</h4>
                    <p>{f.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ — gerçek ekran görüntüsü */}
          <div>
            <div className="ls-shot">
              <div className="ls-shot-bar">
                <i />
                <i />
                <i />
                <span>RoboBlocks Extreme · Canlı Sınıf</span>
              </div>
              <img
                src="/assets/rbx-liveshare.jpg"
                alt="RoboBlocks Extreme Live Share — öğretmen ve öğrenci aynı sınıfta"
                loading="lazy"
              />
              <div className="ls-live-tag">
                <i />
                CANLI BAĞLI
              </div>
              <div className="ls-callout">
                <strong>👩‍🏫 Yetkin Hoca bağlandı</strong>
                <span>Öğrencinin ekranını canlı izliyor</span>
              </div>
            </div>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginTop: '14px',
              }}
            >
              Gerçek ekran görüntüsü — RoboBlocks Extreme sınıf paneli
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
