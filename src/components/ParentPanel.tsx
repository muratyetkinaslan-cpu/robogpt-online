import { IconChart, IconCheckCircle, IconBolt } from './Icons';

const FEATS = [
  {
    ic: <IconChart size={20} />,
    h: 'Anlık ilerleme takibi',
    p: 'Çocuğunuzun hangi görevde olduğunu, kaç görev tamamladığını ve gelişimini gerçek zamanlı görürsünüz.',
  },
  {
    ic: <IconBolt size={20} />,
    h: 'XP, seviye ve rozetler',
    p: 'Çocuğunuz görev tamamladıkça XP kazanır, seviye atlar. Steve Wozniak\u2019dan Elon Musk\u2019a uzanan 10 mühendis seviyesi.',
  },
  {
    ic: <IconCheckCircle size={20} />,
    h: 'Görev görünürlüğü',
    p: 'Her görevin başlığı, açıklaması ve eğitmen onayı veli panelinde. Çocuğunuzun ne öğrendiğini birebir bilirsiniz.',
  },
];

export default function ParentPanel() {
  return (
    <section className="section" id="veli">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Veli Paneli · BerryBot LMS</span>
          <h2 className="section-title">
            Çocuğunuzun gelişimini avucunuzun içinde görün
          </h2>
          <p className="section-lead">
            Kendi geliştirdiğimiz BerryBot LMS'in veli paneliyle, eğitimi
            dışarıdan izlemekle kalmaz — her adımı anlık takip edersiniz.
          </p>
        </div>

        <div className="parent reveal">
          {/* Sol — özellikler */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
              Eğitim artık bir <span className="grad-text">kara kutu</span>{' '}
              değil
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>
              Veliye özel hesabınızla giriş yapar, çocuğunuzun robotik
              yolculuğunu tek ekrandan izlersiniz. Eğitmen, öğrenci ve veli —
              herkes aynı sistemde.
            </p>

            <div className="parent-feats">
              {FEATS.map((f) => (
                <div className="pfeat" key={f.h}>
                  <span className="ic">{f.ic}</span>
                  <div>
                    <h4>{f.h}</h4>
                    <p>{f.p}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="roles-row">
              <span className="role-pill">
                <span className="d" style={{ background: '#f97316' }} />
                Yönetici
              </span>
              <span className="role-pill">
                <span className="d" style={{ background: '#38bdf8' }} />
                Eğitmen
              </span>
              <span className="role-pill">
                <span className="d" style={{ background: '#22c55e' }} />
                Öğrenci
              </span>
              <span className="role-pill">
                <span className="d" style={{ background: '#a855f7' }} />
                Veli
              </span>
            </div>
          </div>

          {/* Sağ — veli paneli mockup */}
          <div>
            <div className="dash">
              <div className="dash-top">
                <div className="who">
                  <div className="dash-avatar">🧠</div>
                  <div>
                    <div className="name">Ali'nin Gelişimi</div>
                    <div className="sub">Büyük Grup · BerryBot</div>
                  </div>
                </div>
                <div className="dash-live">
                  <i />
                  CANLI
                </div>
              </div>

              <div className="dash-body">
                <div className="dash-level">
                  <span className="lv">
                    Seviye 5 · <span>Alan Turing</span>
                  </span>
                  <span className="xp">370 / 500 XP</span>
                </div>
                <div className="xp-bar">
                  <div className="xp-fill" />
                </div>

                <div className="dash-stats">
                  <div className="dstat">
                    <div className="v orange">18</div>
                    <div className="k">Tamamlanan Görev</div>
                  </div>
                  <div className="dstat">
                    <div className="v green">%72</div>
                    <div className="k">İlerleme</div>
                  </div>
                  <div className="dstat">
                    <div className="v">9</div>
                    <div className="k">Günlük Seri</div>
                  </div>
                </div>

                <div className="dash-task">
                  <div className="lbl">▸ Şu anki görev</div>
                  <div className="tt">Görev 19 · Mesafe Sensörüyle Park</div>
                </div>

                <div className="dash-badges">
                  <div className="dash-badge">
                    🥇<small>İlk Robot</small>
                  </div>
                  <div className="dash-badge">
                    ⚡<small>Hız Ustası</small>
                  </div>
                  <div className="dash-badge">
                    🔥<small>7 Gün Seri</small>
                  </div>
                  <div className="dash-badge locked">
                    🚀<small>Master</small>
                  </div>
                </div>
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
              BerryBot LMS · Veli görünümü — örnek ekran
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
