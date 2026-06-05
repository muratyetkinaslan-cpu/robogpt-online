import { IconBook, IconLayers } from './Icons';

const MINI_BLOCKS = [
  { t: 'başla', c: '#f97316' },
  { t: 'tekrarla', c: '#fbbf24' },
  { t: 'RGB boya', c: '#a855f7' },
  { t: 'motor ileri', c: '#22c55e' },
  { t: 'sensör oku', c: '#38bdf8' },
];

const FEATS = [
  'Blok tabanlı editör',
  'MicroPython modu',
  'Live Share — canlı sınıf',
  'Web Serial — gerçek yükleme',
  'Anlık kod önizleme',
  'Tema desteği',
];

export default function Platform() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Kendi Platformumuz</span>
          <h2 className="section-title">
            Eğitimi başkasının aracıyla değil, kendi geliştirdiğimiz
            platformla veriyoruz
          </h2>
          <p className="section-lead">
            Mühendis ekibimiz, çocuklar için özel bir kodlama editörü ve
            öğrenme yönetim sistemi geliştirdi. Her şey tek bir yerde.
          </p>
        </div>

        <div className="platform-grid">
          {/* Ana ürün — RoboBlocks Extreme */}
          <div className="platform-main reveal">
            <span className="platform-tag">● Kendi IDE'miz</span>
            <h3>RoboBlocks Extreme</h3>
            <p>
              Çocuğun seviyesiyle birlikte büyüyen kodlama editörü.
              Renkli bloklarla başlar, hazır olduğunda tek tıkla MicroPython'a
              geçer. Yazdığı kod gerçek robota anında yüklenir.
            </p>

            <div className="block-strip">
              {MINI_BLOCKS.map((b, i) => (
                <span
                  className="mini-blk"
                  key={i}
                  style={{ background: b.c }}
                >
                  {b.t}
                </span>
              ))}
            </div>

            <div className="platform-feats">
              {FEATS.map((f) => (
                <span className="feat-chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Yan ürünler */}
          <div className="platform-side">
            <div className="platform-mini reveal">
              <div className="ic">
                <IconBook size={22} />
              </div>
              <h4>BerryBot LMS</h4>
              <p>
                Kendi öğrenme yönetim sistemimiz. Dersler, görevler, XP ve
                ilerleme tek panelde — veli paneliyle birlikte.
              </p>
            </div>
            <div className="platform-mini reveal">
              <div className="ic">
                <IconLayers size={22} />
              </div>
              <h4>3 Robot Kiti</h4>
              <p>
                BerryBot, PicoBricks ve Tank — her kit kendi 3 boyutlu
                modeli ve görev setiyle sistemde tanımlı.
              </p>
            </div>
          </div>
        </div>

        {/* Gerçek ekran görüntüsü */}
        <div className="shot-single reveal">
          <div className="shot">
            <img
              src="/assets/rbx-editor.jpg"
              alt="RoboBlocks Extreme — gerçek blok tabanlı kodlama editörü"
              loading="lazy"
            />
            <div className="shot-cap">
              ▸ RoboBlocks Extreme — kendi geliştirdiğimiz blok kodlama editörü
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
