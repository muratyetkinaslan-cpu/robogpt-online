/**
 * Demo kayıt modalını her yerden açabilmek için
 * basit bir global event yardımcısı.
 */
export function openDemoModal() {
  window.dispatchEvent(new CustomEvent('robogpt:open-demo'));
}
