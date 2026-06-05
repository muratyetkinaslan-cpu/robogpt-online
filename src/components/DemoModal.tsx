import { useEffect, useRef, useState } from 'react';
import { SITE } from '../config';

interface FormData {
  parentName: string;
  phone: string;
  childAge: string;
  notes: string;
}

/**
 * Demo dersi kayıt modalı.
 *
 * Veli bilgileri doldurur → WhatsApp'a önceden doldurulmuş mesaj açılır.
 * Global "robogpt:open-demo" event'ini dinler.
 */
export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<FormData>({
    parentName: '',
    phone: '',
    childAge: '',
    notes: '',
  });
  const firstFieldRef = useRef<HTMLInputElement>(null);

  /* Global "demo modalı aç" event'i */
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('robogpt:open-demo', handler);
    return () => window.removeEventListener('robogpt:open-demo', handler);
  }, []);

  /* ESC ile kapat + odak */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', esc);
    };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.parentName.trim() || !data.phone.trim()) return;

    const lines = [
      'Merhaba ROBOGPT! Ücretsiz demo dersi için kayıt olmak istiyorum.',
      '',
      `👤 Ad Soyad: ${data.parentName}`,
      `📞 Telefon: ${data.phone}`,
      data.childAge && `🧒 Çocuk Yaşı: ${data.childAge}`,
      data.notes && `💬 Not: ${data.notes}`,
    ].filter(Boolean) as string[];

    const msg = encodeURIComponent(lines.join('\n'));
    const waNumber = SITE.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${waNumber}?text=${msg}`, '_blank');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="modal-card" role="dialog" aria-modal="true">
        <button
          className="modal-close"
          onClick={() => setOpen(false)}
          aria-label="Kapat"
        >
          ✕
        </button>

        <div className="modal-head">
          <span className="modal-eyebrow">● ÜCRETSİZ DEMO DERS</span>
          <h3>Çocuğunuzu robotla tanıştıralım</h3>
          <p>
            Bilgilerinizi bırakın, size {SITE.promo.startDate}'da başlayan
            yeni döneme özel {SITE.promo.discount} erken kayıt indirimiyle
            dönelim. Form gönderildiğinde WhatsApp'a yönlendirileceksiniz.
          </p>
        </div>

        <form className="demo-form" onSubmit={submit}>
          <label className="form-row">
            <span>Ad Soyad <em>*</em></span>
            <input
              ref={firstFieldRef}
              type="text"
              required
              autoComplete="name"
              placeholder="Adınız soyadınız"
              value={data.parentName}
              onChange={(e) =>
                setData({ ...data, parentName: e.target.value })
              }
            />
          </label>

          <div className="form-grid">
            <label className="form-row">
              <span>Telefon <em>*</em></span>
              <input
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="0 5__ ___ __ __"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </label>

            <label className="form-row">
              <span>Çocuğun yaşı</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="örn. 9"
                value={data.childAge}
                onChange={(e) =>
                  setData({ ...data, childAge: e.target.value })
                }
              />
            </label>
          </div>

          <label className="form-row">
            <span>Not (isteğe bağlı)</span>
            <textarea
              rows={3}
              placeholder="Müsait olduğunuz gün/saat veya merak ettikleriniz"
              value={data.notes}
              onChange={(e) => setData({ ...data, notes: e.target.value })}
            />
          </label>

          <button type="submit" className="btn btn-primary form-submit">
            WhatsApp'tan Gönder
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z" />
            </svg>
          </button>

          <p className="form-note">
            Numaranıza otomatik bir mesaj göndermeyeceğiz — bilgileriniz
            WhatsApp'ta gönderebileceğiniz hazır bir mesaja dönüştürülür.
          </p>
        </form>
      </div>
    </div>
  );
}
