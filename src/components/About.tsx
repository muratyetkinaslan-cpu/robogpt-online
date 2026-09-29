import {
  IconBrain,
  IconLayers,
  IconTarget,
  IconCpu,
  IconCode,
  IconGear,
} from './Icons';

export default function About() {
  return (
    <section className="section" id="neden">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Neden ROBOGPT</span>
          <h2 className="section-title">
            Mühendisler tarafından kurulan, mühendislik öğreten bir okul
          </h2>
          <p className="section-lead">
            ROBOGPT'yi bir yapay zeka mühendisi ve bir endüstri mühendisi
            kurdu. Tüm eğitmen kadromuz mühendislerden oluşuyor — çocuğunuz
            işini gerçekten bilen kişilerden öğreniyor.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card card span2 reveal">
            <h3>Mekanik · Yazılım · Elektronik — üçü bir arada</h3>
            <p>
              Çoğu kurs sadece kod öğretir. Biz robotun nasıl kurulduğunu,
              nasıl çalıştığını ve nasıl programlandığını bir bütün olarak
              öğretiyoruz. Çocuk hem mühendis gibi düşünür hem de üretir.
            </p>
            <div className="disciplines">
              <span className="disc-pill">
                <span className="ic">
                  <IconGear size={16} />
                </span>
                Mekanik
              </span>
              <span className="disc-pill">
                <span className="ic">
                  <IconCode size={16} />
                </span>
                Yazılım
              </span>
              <span className="disc-pill">
                <span className="ic">
                  <IconCpu size={16} />
                </span>
                Elektronik
              </span>
            </div>
          </div>

          <div className="why-card card reveal">
            <div className="icon-box">
              <IconBrain size={24} />
            </div>
            <h3>Mühendis kadro</h3>
            <p>
              Kurucular yapay zeka ve endüstri mühendisi. Tüm ekibimiz
              mühendislerden oluşur.
            </p>
          </div>

          <div className="why-card card reveal">
            <div className="icon-box">
              <IconTarget size={24} />
            </div>
            <h3>Proje tabanlı</h3>
            <p>
              Her ders bir görev, her kurs bir proje. Çocuk ezberlemez —
              çözer, kurar, test eder.
            </p>
          </div>

          <div className="why-card card reveal">
            <div className="icon-box">
              <IconLayers size={24} />
            </div>
            <h3>Kademeli müfredat</h3>
            <p>
              Basit görevlerden gerçek projelere uzanan, yaşa göre tasarlanmış
              bir yolculuk.
            </p>
          </div>

          <div className="why-card card reveal">
            <div className="icon-box">
              <IconCpu size={24} />
            </div>
            <h3>Kendi dijital altyapımız</h3>
            <p>
              Kodlama editörümüz ve LMS'imiz bize ait. Eğitim deneyimini biz
              tasarlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
