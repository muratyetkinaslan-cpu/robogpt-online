import { IconAward, IconTag, IconShield } from './Icons';
import { LogoMark } from './Logo';

export default function Certificate() {
  return (
    <section className="section" id="sertifika">
      <div className="container">
        <div className="cert reveal">
          {/* Sol — metin */}
          <div>
            <span className="eyebrow">Sertifika & Ayrıcalıklar</span>
            <h2>
              Eğitimin sonunda{' '}
              <span className="grad-text">geçerli bir belge</span>, gerçek bir
              ödül
            </h2>
            <p>
              Programı tamamlayan her öğrenci, ROBOGPT ve Robotistan onaylı
              sertifikasını alır. Ayrıca eğitimini bitirenlere özel Robotistan
              indirim kodu sağlıyoruz — öğrenmeye evde de devam.
            </p>

            <div className="partner-badge" style={{ marginTop: 20 }}>
              <LogoMark size={28} />
              <span className="x">×</span>
              <img src="/assets/robotistan.png" alt="Robotistan" />
            </div>

            <div className="cert-perks">
              <div className="cert-perk">
                <span className="ic">
                  <IconAward size={20} />
                </span>
                <div>
                  Robotistan & ROBOGPT Sertifikası
                  <small>İş ortağımız Robotistan onaylı resmi belge</small>
                </div>
              </div>
              <div className="cert-perk">
                <span className="ic">
                  <IconTag size={20} />
                </span>
                <div>
                  Robotistan İndirim Kodu
                  <small>Mezunlara özel — kendi malzemelerini avantajlı al</small>
                </div>
              </div>
              <div className="cert-perk">
                <span className="ic">
                  <IconShield size={20} />
                </span>
                <div>
                  Kit Robotistan'dan kapına gelir
                  <small>Online öğrenciler için kit doğrudan adrese kargo</small>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ — sertifika görseli */}
          <div className="cert-visual">
            <div className="cert-doc">
              <div className="cert-doc-top">
                <LogoMark size={36} />
                <div className="cert-seal">ONAYLI</div>
              </div>
              <h4>Başarı Sertifikası</h4>
              <div className="cert-name">Robotik &amp; Kodlama Eğitimi</div>
              <p
                style={{
                  color: 'var(--text-dim)',
                  fontSize: '0.84rem',
                  margin: 0,
                }}
              >
                Bu belge, sahibinin ROBOGPT robotik kodlama programını
                başarıyla tamamladığını onaylar.
              </p>
              <div className="cert-meta">
                <span>ROBOGPT × ROBOTISTAN</span>
                <span>NO: RG-2026-•••</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
