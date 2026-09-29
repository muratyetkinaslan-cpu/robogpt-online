const STEPS = [
  {
    n: '01',
    title: 'Assessment ile öğrenciyi tanıyalım',
    desc: 'Algoritma, yazılım, mekanik, İngilizce, ritim ve odak alanlarını değerlendirerek öğrencinin güçlü yönlerini ve gelişim ihtiyaçlarını belirleyelim.',
  },
  {
    n: '02',
    title: 'Doğru gruba yerleştirelim',
    desc: 'Yaş ve seviyeye uygun sınıfı seçelim; eğitim planını, kullanılacak robot kitini ve hedefleri birlikte netleştirelim.',
  },
  {
    n: '03',
    title: 'Tasarlamaya ve üretmeye başla',
    desc: 'Mühendis eğitmenlerle robotunu kur, sensörleri keşfet, kodunu yaz ve her derste çalışan yeni bir proje ortaya çıkar.',
  },
];

export default function EnrollmentSteps() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="kayit-sureci">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Kayıt Süreci</span>
          <h2 className="section-title">
            Robotik kodlamaya doğru adımla başlayın
          </h2>
          <p className="section-lead">
            Her çocuk farklıdır. Önce tanıyor, sonra doğru grubu belirliyor ve
            onu üreten bir öğrenme yolculuğuna dahil ediyoruz.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step-card reveal" key={s.n}>
              <div className="big-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
