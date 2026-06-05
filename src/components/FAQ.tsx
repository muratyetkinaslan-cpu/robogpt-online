import { useRef, useState } from 'react';

const FAQS = [
  {
    q: 'Çocuğumun hiç deneyimi yok, başlayabilir mi?',
    a: 'Kesinlikle. Eğitimimiz sıfırdan başlar. BerryBot araç kiti ve renkli bloklarla, hiç deneyimi olmayan çocuklar bile ilk dersten itibaren robotunu çalıştırır. Müfredat yaşa ve seviyeye göre kademelidir.',
  },
  {
    q: 'Online eğitim için kit nasıl temin ediliyor?',
    a: 'İş ortağımız Robotistan üzerinden eğitim kitiniz doğrudan adresinize kargolanır. Sizin ayrıca malzeme araştırması yapmanıza gerek yoktur — biz yönlendiririz, kit kapınıza gelir.',
  },
  {
    q: 'Hangi yaş aralığına eğitim veriyorsunuz?',
    a: '4 ile 18 yaş arası tüm çocuklara eğitim veriyoruz. 4–9 yaş için oyunlaştırılmış Kids grubumuz, 10–18 yaş için metin tabanlı kodlamaya geçen Büyük grubumuz var.',
  },
  {
    q: 'Demo ders gerçekten ücretsiz mi?',
    a: 'Evet, tamamen ücretsiz ve hiçbir yükümlülük içermez. Demo derste çocuğunuz gerçek bir görevi tamamlar, siz de eğitmenimizi ve sistemimizi tanırsınız. Beğenirseniz devam edersiniz.',
  },
  {
    q: 'Veli olarak çocuğumun gelişimini takip edebilir miyim?',
    a: 'Evet. Kendi geliştirdiğimiz BerryBot LMS sisteminde her veliye özel bir hesap açılır. Çocuğunuzun şu an hangi görevde olduğunu, hangi kavramları öğrendiğini, kaç görev tamamladığını ve seviyesini kendi panelinizden anlık olarak görürsünüz.',
  },
  {
    q: 'Online derslerde öğretmen öğrenciyi nasıl takip ediyor?',
    a: 'Kendi geliştirdiğimiz RoboBlocks Extreme editöründe Live Share (Canlı Sınıf) özelliği var. Öğretmen, öğrencinin çalışma ekranına anlık bağlanır; blokları canlı görür ve gerekirse aynı ekranda müdahale ederek hatayı birlikte düzeltir. Öğrenci de “El Kaldır” butonuyla tek tıkla yardım isteyebilir.',
  },
  {
    q: 'Eğitim sonunda sertifika veriliyor mu?',
    a: 'Evet. Programı tamamlayan her öğrenci ROBOGPT ve Robotistan onaylı sertifikasını alır. Ayrıca mezunlarımıza özel Robotistan indirim kodu sağlıyoruz.',
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
