/**
 * Hafif, bağımlılıksız SVG ikon seti — stroke tabanlı, currentColor.
 */
type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const IconCpu = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

export const IconCode = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const IconBolt = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

export const IconGear = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M5 5l2 2M17 17l2 2M2 12h3M19 12h3M5 19l2-2M17 7l2-2" />
  </svg>
);

export const IconRocket = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 13c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.85-.85.9-2.2.1-3.1a2.2 2.2 0 0 0-3.1.1z" />
    <path d="M19 4c-3 0-7 1.5-10 6l-1 3 3-1c4.5-3 6-7 6-10 0-.55-.45-1-1-1z" />
    <path d="M14.5 6.5l3 3" />
  </svg>
);

export const IconUsers = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 4.5a3.2 3.2 0 0 1 0 6.5M21 20c0-2.6-1.7-4.8-4-5.6" />
  </svg>
);

export const IconBrain = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9 18a3 3 0 0 0 3 1.5" />
    <path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 15 18a3 3 0 0 1-3 1.5" />
    <path d="M12 5v14.5" />
  </svg>
);

export const IconLayers = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const IconTarget = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

export const IconBook = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 19a2 2 0 0 1 2-2h13" />
  </svg>
);

export const IconAward = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
  </svg>
);

export const IconTag = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9z" />
    <circle cx="8" cy="8" r="1.6" fill="currentColor" />
  </svg>
);

export const IconCheck = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconCheckCircle = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12l2.5 2.5L16 9" />
  </svg>
);

export const IconVideo = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M16 10l6-3v10l-6-3" />
  </svg>
);

export const IconWrench = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M14.5 5.5a4 4 0 0 0-5.3 5l-6 6 2.3 2.3 6-6a4 4 0 0 0 5-5.3l-2.7 2.7-2-2 2.7-2.7z" />
  </svg>
);

export const IconChart = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 3v18h18" />
    <path d="M7 14l3-4 4 3 5-7" />
  </svg>
);

export const IconShield = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
    <path d="M8.5 12l2.5 2.5L16 9" />
  </svg>
);

export const IconArrow = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const IconMenu = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const IconClose = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconPhone = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconMail = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconPin = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconInstagram = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const IconWhatsapp = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 21l1.6-4.5A8.5 8.5 0 1 1 8 19.5L3 21z" />
    <path d="M9 9c0 4 2 6 6 6 1 0 1.2-2 .5-2.3l-2-.7-1 1.2c-1.4-.6-2.3-1.5-2.9-2.9l1.2-1-.7-2C9.5 8 9 8 9 9z" />
  </svg>
);

export const IconYoutube = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
  </svg>
);
