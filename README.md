# ROBOGPT — Kurumsal Web Sitesi

Robotik & kodlama eğitimi kurumu **ROBOGPT** için React + TypeScript ile
geliştirilmiş, tek sayfalık (one-page) tanıtım ve müşteri kazanım sitesi.

## Teknoloji

- **React 18 + TypeScript**
- **Vite** — hızlı geliştirme & derleme
- Sıfır ek bağımlılık (ikonlar ve animasyonlar elle yazıldı)
- Tam responsive — masaüstü, tablet, mobil
- Erişilebilirlik: `prefers-reduced-motion` desteği

## Kurulum

```bash
npm install
npm run dev      # http://localhost:5173
```

## Derleme

```bash
npm run build    # dist/ klasörü oluşur
npm run preview  # derlenmiş hali önizle
```

## Yayına Alma

`dist/` klasörünü herhangi bir statik hosting'e yükleyebilirsiniz
(Vercel, Netlify, GitHub Pages). Vercel önerilir:

1. Projeyi GitHub'a push edin
2. vercel.com → Import Project → Deploy

## Sayfa Bölümleri

| Bölüm          | Açıklama                                              |
| -------------- | ----------------------------------------------------- |
| Hero           | Assessment vurgusu + robotik kodlama kayıt CTA'sı     |
| Güven Şeridi   | Aselsan, Robotistan logosu, Bursa lideri referansları |
| Eğitim Kitleri | BerryBot, PicoBricks, Tank — kit kartları             |
| Neden ROBOGPT  | Mühendis kadro, mekanik+yazılım+elektronik            |
| Eğitim Yolculuğu | BerryBot → görevler → PicoBricks → projeler         |
| Platformumuz   | RoboBlocks Extreme + BerryBot LMS + ekran görüntüleri |
| Veli Paneli    | BerryBot LMS veli takip paneli — XP, seviye, görev    |
| Donanım        | 12 gerçek elektronik bileşen fotoğrafı                |
| Yaş Grupları   | Kids (4-9) ve Büyük (10-18) program detayları         |
| Kayıt Süreci   | 3 adımda robotik kodlama eğitimine başlama             |
| Assessment CTA | Ücretsiz değerlendirme + iletişim bağlantıları        |
| SSS            | Sık sorulan sorular (akordeon)                        |

## ⚙️ Düzenlenmesi Gerekenler

Yayına almadan önce **`src/config.ts`** dosyasını gerçek bilgilerinizle
güncelleyin — tüm iletişim bağlantıları tek yerden yönetilir:

```ts
export const SITE = {
  instagram: 'https://instagram.com/KULLANICI_ADINIZ',
  whatsapp:  'https://wa.me/90XXXXXXXXXX',
  phone:     '+90 5XX XXX XX XX',
  email:     'merhaba@robogpt.com.tr',
  ...
};
```

Görseller `public/assets/` klasöründedir (logo, kit logoları, donanım
fotoğrafları, platform ekran görüntüleri). İsterseniz kendi
fotoğraflarınızla değiştirebilirsiniz.

## Renk & Font

- Marka rengi: turuncu `#F97316`, gradyan `#FF7B01 → #FF4525 → #7C3AED`
- Fontlar: Chakra Petch (başlık), Manrope (metin), JetBrains Mono (kod)
- Tüm tasarım değişkenleri `src/index.css` `:root` bölümünde
