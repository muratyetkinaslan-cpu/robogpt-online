/**
 * Donanım Galerisi — eğitimde kullanılan gerçek elektronik bileşenler.
 * Görseller public/assets/hw içinde.
 */

const HARDWARE = [
  { name: 'LED', img: 'led.png', color: '#f59e0b' },
  { name: 'RGB LED', img: 'rgb.png', color: '#a855f7' },
  { name: 'Buzzer', img: 'buzzer.png', color: '#06b6d4' },
  { name: 'Servo Motor', img: 'servo.png', color: '#ec4899' },
  { name: 'DC Motor', img: 'dcmotor.png', color: '#3b82f6' },
  { name: 'Buton', img: 'button.png', color: '#22c55e' },
  { name: 'Mesafe Sensörü', img: 'ultrasonic.png', color: '#14b8a6' },
  { name: 'OLED Ekran', img: 'oled.png', color: '#6366f1' },
  { name: 'Röle', img: 'relay.png', color: '#ef4444' },
  { name: 'Potansiyometre', img: 'pot.png', color: '#f97316' },
  { name: 'Işık Sensörü', img: 'ldr.png', color: '#eab308' },
  { name: 'Isı/Nem (DHT11)', img: 'dht11.png', color: '#8b5cf6' },
];

export default function Hardware() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="donanim">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Donanım</span>
          <h2 className="section-title">
            Çocuk gerçek elektronikle, gerçek bileşenlerle çalışır
          </h2>
          <p className="section-lead">
            Sensörler, motorlar, ekranlar… Eğitim boyunca onlarca farklı
            elektronik bileşeni tanır ve programlar.
          </p>
        </div>

        <div className="hw-grid">
          {HARDWARE.map((hw) => (
            <div
              className="hw-card reveal"
              key={hw.name}
              style={{ ['--card-color' as string]: hw.color }}
            >
              <img
                className="hw-photo"
                src={`/assets/hw/${hw.img}`}
                alt={hw.name}
                loading="lazy"
              />
              <div className="name">{hw.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
