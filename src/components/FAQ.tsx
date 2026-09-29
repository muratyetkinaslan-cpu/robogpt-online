import { useRef, useState } from 'react';

const FAQS = [
  {
    q: 'Çocuğumun hiç deneyimi yok, başlayabilir mi?',
    a: 'Kesinlikle. Eğitimimiz sıfırdan başlar. BerryBot araç kiti ve renkli bloklarla, hiç deneyimi olmayan çocuklar bile ilk dersten itibaren robotunu çalıştırır. Müfredat yaşa ve seviyeye göre kademelidir.',
  },
  {
    q: 'Eğitimlerde hangi robot kitleri kullanılıyor?',
    a: 'Öğrencinin yaşına ve seviyesine göre BerryBot, PicoBricks ve farklı robotik eğitim kitleri kullanıyoruz. Gerekli malzemeler ve kit seçimi konusunda kayıt öncesinde sizi ayrıntılı olarak yönlendiriyoruz.',
  },
  {
    q: 'Hangi yaş aralığına eğitim veriyorsunuz?',
    a: '4 ile 18 yaş arası tüm çocuklara eğitim veriyoruz. 4–9 yaş için oyunlaştırılmış Kids grubumuz, 10–18 yaş için metin tabanlı kodlamaya geçen Büyük grubumuz var.',
  },
  {
    q: 'Assessment değerlendirmesi gerçekten ücretsiz mi?',
    a: 'Evet, tamamen ücretsiz ve hiçbir yükümlülük içermez. Değerlendirmede çocuğunuzun algoritma, yazılım, mekanik, İngilizce, ritim ve odak alanlarındaki mevcut düzeyini tanır; uygun eğitim grubunu belirleriz.',
  },
  {
    q: 'Veli olarak çocuğumun gelişimini takip edebilir miyim?',
    a: 'Evet. Kendi geliştirdiğimiz BerryBot LMS sisteminde her veliye özel bir hesap açılır. Çocuğunuzun şu an hangi görevde olduğunu, hangi kavramları öğrendiğini, kaç görev tamamladığını ve seviyesini kendi panelinizden anlık olarak görürsünüz.',
  },
  {
    q: 'Öğretmen öğrencinin gelişimini nasıl takip ediyor?',
    a: 'Kendi geliştirdiğimiz RoboBlocks Extreme ve BerryBot LMS üzerinden öğrencinin görevleri, ilerlemesi ve zorlandığı noktalar takip edilir. Eğitmen gerektiğinde çalışma ekranına bağlanır, hatayı öğrenciyle birlikte çözer ve veli paneline gelişim verileri yansır.',
  },
  {
    q: 'Blok tabanlı kodlamadan gerçek programlamaya geçiş oluyor mu?',
    a: 'Evet. Kendi geliştirdiğimiz RoboBlocks Extreme editörü, çocuk hazır olduğunda renkli bloklardan MicroPython metin tabanlı kodlamaya geçişi sağlar. Çocuk gerçek bir programlama dili öğrenir.',
  },
];

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="plus" />
      </button>
      <div
        className="faq-a"
        style={{ maxHeight: open ? `${ref.current?.scrollHeight ?? 200}px` : 0 }}
      >
        <div className="faq-a-inner" ref={ref}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section" id="sss">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Sık Sorulan Sorular</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Aklınızdaki soruların yanıtı burada
          </h2>
        </div>

        <div className="faq-list reveal">
          {FAQS.map((f) => (
            <FaqRow key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
