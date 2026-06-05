/**
 * ROBOGPT logosu — gerçek devre-kartı/beyin markası (public/assets/robogpt-mark.png).
 */

export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <img
      className="logo-mark"
      src="/assets/robogpt-mark.png"
      alt="ROBOGPT"
      width={size}
      height={size}
      style={{ width: size, height: 'auto' }}
    />
  );
}

export function Logo({ markSize = 40 }: { markSize?: number }) {
  return (
    <div
      className="logo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <LogoMark size={markSize} />
      <span className="logo-word">
        ROBO<b>GPT</b>
      </span>
    </div>
  );
}
