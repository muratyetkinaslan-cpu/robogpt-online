import VideoCard from './VideoCard';

const TECH = [
  {
    file: 'tech-robot-dog',
    title: 'Robot Köpek',
    subtitle: 'Dört ayaklı yürüme robotu',
  },
  {
    file: 'tech-robot-hand',
    title: 'Robot El',
    subtitle: 'Parmak hareketleri kontrolü',
  },
  {
    file: 'tech-spider',
    title: 'Örümcek Robot',
    subtitle: 'Çok eklemli yürüyüş sistemi',
  },
  {
    file: 'tech-hexapod',
    title: 'Hexapod Robot',
    subtitle: 'Altı bacaklı koordinasyon',
  },
  {
    file: 'tech-mars',
    title: 'Mars Robotu',
    subtitle: 'Engebeli arazi keşif robotu',
  },
  {
    file: 'tech-cube-solver',
    title: 'Küp Çözücü',
    subtitle: 'Rubik küpünü çözen robot',
  },
  {
    file: 'tech-animatronic',
    title: 'Animatronik Göz',
    subtitle: 'Bakışı takip eden mekanizma',
  },
];

export default function TechCapabilities() {
  return (
    <section className="section" id="teknik">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Mühendislik Kapasitemiz</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Çocuğunuza biz <span className="grad-text">bunu yapan ekip</span>{' '}
            öğretiyor
          </h2>
          <p className="section-lead">
            ROBOGPT ekibi sadece eğitim vermiyor — gerçek robotlar tasarlıyor.
            Robot köpekten örümceğe, animatronikten Mars robotuna kadar
            geliştirdiğimiz projelerden bazıları.
          </p>
        </div>

        <div className="video-grid reveal">
          {TECH.map((t) => (
            <VideoCard
              key={t.file}
              src={`/assets/videos/${t.file}.mp4`}
              poster={`/assets/posters/${t.file}.jpg`}
              title={t.title}
              subtitle={t.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
