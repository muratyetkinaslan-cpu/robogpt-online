import VideoCard from './VideoCard';

const PROJECTS = [
  {
    file: 'student-yunus-arm',
    badge: { color: '#a855f7', label: 'BERRYBOT' },
    title: 'Yunus’un Robot Kolu',
    subtitle: 'Servo motorlu mekanik kol projesi',
  },
  {
    file: 'student-emir-berrybot',
    badge: { color: '#a855f7', label: 'BERRYBOT' },
    title: 'Emir Buğra’nın BerryBot’u',
    subtitle: 'Sensör ve motor kontrolü',
  },
  {
    file: 'student-uraz-pico',
    badge: { color: '#ef4444', label: 'PICOBRICKS' },
    title: 'Uraz’ın PicoBricks Projesi',
    subtitle: 'Modüler kartla yapılan proje',
  },
  {
    file: 'student-tank-build',
    badge: { color: '#06b6d4', label: 'TANK' },
    title: 'Çocuklar Tank Kuruyor',
    subtitle: 'Mekanik montaj atölyesi',
  },
  {
    file: 'student-berrybot-sumo',
    badge: { color: '#a855f7', label: 'BERRYBOT' },
    title: 'BerryBot Sumo Modu',
    subtitle: 'Çekişmeli robot turnuvası',
  },
  {
    file: 'student-pico-tank',
    badge: { color: '#06b6d4', label: 'PICO + TANK' },
    title: 'PicoTank Projesi',
    subtitle: 'Kartlar birleşince yeni robot',
  },
];

export default function StudentProjects() {
  return (
    <section className="section" id="ogrenci-projeleri">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Öğrenci Projeleri</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Öğrencilerimizin gerçek robotları, gerçek videoları
          </h2>
          <p className="section-lead">
            Slogan değil — kanıt. ROBOGPT öğrencilerinin kendi elleriyle
            kurduğu, kendi yazdığı kodla çalışan robotlardan birkaçı.
          </p>
        </div>

        <div className="video-grid reveal">
          {PROJECTS.map((p) => (
            <VideoCard
              key={p.file}
              src={`/assets/videos/${p.file}.mp4`}
              poster={`/assets/posters/${p.file}.jpg`}
              badge={p.badge}
              title={p.title}
              subtitle={p.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
