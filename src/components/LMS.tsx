import { useState } from 'react';

/**
 * BerryBot LMS — öğrenme deneyimi.
 * 3 sekme: Görevler (macera haritası), Practice, Ödev.
 * Gerçek ekran görüntüleriyle.
 */

type Point = { icon: string; h: string; p: string; teacher?: boolean };

interface Tab {
  id: string;
  label: string;
  tnum: string;
  kicker: string;
  title: string;
  desc: string;
  shot: string;
  shotTitle: string;
  reverse?: boolean;
  points: Point[];
}

const TABS: Tab[] = [
  {
    id: 'gorev',
    label: 'Görevler',
    tnum: '01',
    kicker: '🗺️ Macera Haritası',
    title: 'Görev görev ilerleyen bir macera',
    desc: 'Öğrenci, oyunlaştırılmış bir macera haritasında görev görev ilerler. Her görev yeni bir robotik kavramı öğretir — RGB LED, buton, buzzer, sensör, motor… Tamamladıkça XP kazanır, seviye atlar.',
    shot: '/assets/lms-map.jpg',
    shotTitle: 'BerryBot LMS · Macera Haritası',
    points: [
      {
        icon: '📋',
        h: 'Görev tanımı',
        p: 'Her görevde ne yapılacağı net görsellerle anlatılır.',
      },
      {
        icon: '🎬',
        h: 'Çözüm videosu',
        p: 'Öğrenci takılırsa adım adım çözüm videosunu izler.',
      },
      {
        icon: '🔑',
        h: 'Cevap anahtarı',
        p: 'Öğrencinin hazır olduğuna eğitmen karar verir; cevap anahtarını eğitmen açar.',
        teacher: true,
      },
    ],
  },
  {
    id: 'practice',
    label: 'Practice',
    tnum: '02',
    kicker: '🧠 Pratik Alanı',
    title: 'Yazılım ve robotik pratiği',
    desc: 'Görevler arasında öğrenci Practice alanında pratik yapar. Çoktan seçmeli kod ve robotik sorularıyla öğrendiği kavramları pekiştirir — “hangi kod doğru çalışır?” mantığıyla gerçek programlama düşüncesi kazanır.',
    shot: '/assets/lms-practice.jpg',
    shotTitle: 'BerryBot LMS · Practice',
    reverse: true,
    points: [
      {
        icon: '💻',
        h: 'Kod okuma & seçme',
        p: 'if/elif/else, döngüler ve mantık sorularıyla kodu anlamayı öğrenir.',
      },
      {
        icon: '⚡',
        h: 'XP kazanır',
        p: 'Her doğru çözüm puan getirir; öğrenme oyuna dönüşür.',
      },
      {
        icon: '🔁',
        h: 'Tekrar tekrar',
        p: 'Konuyu pekiştirene kadar dilediği kadar pratik yapabilir.',
      },
    ],
  },
  {
    id: 'odev',
    label: 'Ödev',
    tnum: '03',
    kicker: '📝 Ev Ödevi',
    title: 'Eğitmen ödev verir, öğrenme eve taşınır',
    desc: 'Öğrenme sadece derste kalmaz. Eğitmen, görselli ve videolu yönergelerle ev ödevleri tanımlar. Öğrenci evde robotuyla tekrar eder, çözümünün videosunu yükler — eğitmen kontrol eder.',
    shot: '/assets/lms-odev.jpg',
    shotTitle: 'BerryBot LMS · Ödev',
    points: [
      {
        icon: '🎯',
        h: 'Eğitmen tanımlar',
        p: 'Her ödevin görseli, açıklaması, süresi ve teslim tarihi vardır.',
        teacher: true,
      },
      {
        icon: '🏠',
        h: 'Evde tekrar',
        p: 'Öğrenci robotuyla görevi evde uygular, kalıcı öğrenir.',
      },
      {
        icon: '📤',
        h: 'Video ile teslim',
        p: 'Öğrenci çözüm videosunu yükler, eğitmen değerlendirir.',
      },
    ],
  },
];

export default function LMS() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="section" id="lms">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">BerryBot LMS</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Öğrenci görev yapar, pratik yapar, ödev alır
          </h2>
          <p className="section-lead">
            Kendi geliştirdiğimiz öğrenme yönetim sistemi, eğitimi baştan sona
            tek bir deneyimde toplar. Her şey ölçülebilir, oyunlaştırılmış ve
            eğitmen kontrolünde.
          </p>
        </div>

        {/* Sekmeler */}
        <div className="lms-tabs reveal">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              className={`lms-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="tnum">{t.tnum}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Aktif sekme içeriği */}
        <div
          className={`lms-panel reveal in ${tab.reverse ? 'reverse' : ''}`}
          key={tab.id}
        >
          <div className="lms-info">
            <span className="lms-kicker">{tab.kicker}</span>
            <h3>{tab.title}</h3>
            <p>{tab.desc}</p>
            <div className="lms-points">
              {tab.points.map((pt) => (
                <div className="lms-point" key={pt.h}>
                  <span className="pic">{pt.icon}</span>
                  <div>
                    <h4>{pt.h}</h4>
                    <p>{pt.p}</p>
                    {pt.teacher && (
                      <span className="teacher-flag">
                        ● EĞİTMEN KONTROLÜNDE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lms-shot">
            <div className="lms-shot-bar">
              <i />
              <i />
              <i />
              <span>{tab.shotTitle}</span>
            </div>
            <img src={tab.shot} alt={tab.shotTitle} />
          </div>
        </div>
      </div>
    </section>
  );
}
