import { IconAward, IconCpu, IconTarget, IconBrain } from './Icons';

const ITEMS = [
  { type: 'robotistan' as const },
  { ic: <IconAward size={20} />, label: "Bursa'nın lider kurumu" },
  { ic: <IconCpu size={20} />, label: 'Mühendis kadro' },
  { ic: <IconTarget size={20} />, label: 'Proje tabanlı eğitim' },
  { ic: <IconBrain size={20} />, label: 'Kendi dijital platformumuz' },
];

export default function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee-label">Güçlü iş ortakları &amp; referanslar</div>
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((it, i) =>
          'type' in it ? (
            <div className="marquee-item" key={i}>
              <img
                className="robotistan-logo"
                src="/assets/robotistan.png"
                alt="Robotistan"
              />
              <span>iş ortağı</span>
            </div>
          ) : (
            <div className="marquee-item" key={i}>
              <span className="ic">{it.ic}</span>
              {it.label}
            </div>
          )
        )}
      </div>
    </section>
  );
}
