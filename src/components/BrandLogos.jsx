import { useState } from 'react';

/** Official Shopee Brand Icon (#EE4D2D) */
export function ShopeeLogo({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#EE4D2D" />
      <path
        d="M17.5 16.5C17.5 12.91 20.41 10 24 10C27.59 10 30.5 12.91 30.5 16.5"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M12.5 16.5H35.5L34.1 35.4C33.98 37.03 32.63 38.3 31 38.3H17C15.37 38.3 14.02 37.03 13.9 35.4L12.5 16.5Z"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M27.8 23.2C27.4 21.8 25.9 21 24.1 21C22.1 21 20.6 22 20.6 23.5C20.6 25 22 25.6 24.2 26.1C26.5 26.6 28.2 27.4 28.2 29.6C28.2 31.6 26.4 33 23.9 33C21.6 33 19.9 31.8 19.5 30.1"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Official Tokopedia Brand Icon (#03AC0E) */
export function TokopediaLogo({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#03AC0E" />
      <path
        d="M18 15.5C18 12.46 20.69 10 24 10C27.31 10 30 12.46 30 15.5"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M12 16.5H36V34.5C36 36.43 34.43 38 32.5 38H15.5C13.57 38 12 36.43 12 34.5V16.5Z"
        fill="#FFFFFF"
      />
      <circle cx="19.5" cy="25.5" r="4.2" fill="#03AC0E" />
      <circle cx="28.5" cy="25.5" r="4.2" fill="#03AC0E" />
      <circle cx="19.5" cy="25.5" r="1.8" fill="#FFFFFF" />
      <circle cx="28.5" cy="25.5" r="1.8" fill="#FFFFFF" />
      <path d="M22.2 30.2L24 32.4L25.8 30.2H22.2Z" fill="#03AC0E" />
    </svg>
  );
}

/** Official WhatsApp Brand Icon (#25D366) */
export function WhatsAppLogo({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#25D366" />
      <path
        d="M24 11C16.82 11 11 16.71 11 23.75C11 26.2 11.71 28.49 12.94 30.43L11.4 36.5L17.68 34.98C19.55 36.02 21.71 36.6 24 36.6C31.18 36.6 37 30.89 37 23.85C37 16.81 31.18 11 24 11Z"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.4 18.8C19.1 18.2 18.8 18.2 18.5 18.2H17.7C17.4 18.2 17 18.3 16.6 18.8C16.2 19.2 15.2 20.1 15.2 22C15.2 23.9 16.6 25.7 16.8 26C17 26.3 19.5 30.2 23.4 31.8C26.7 33.1 27.3 32.8 28 32.7C28.7 32.6 30.3 31.7 30.6 30.8C30.9 29.9 30.9 29.1 30.8 28.9C30.7 28.7 30.4 28.6 29.9 28.4C29.4 28.1 27.1 27 26.6 26.8C26.2 26.7 25.9 26.6 25.6 27.1C25.3 27.5 24.4 28.5 24.2 28.8C23.9 29.1 23.6 29.1 23.1 28.9C22.7 28.6 21.1 28.1 19.3 26.5C17.9 25.3 17 23.8 16.7 23.3C16.4 22.8 16.7 22.6 16.9 22.3C17.1 22.1 17.4 21.7 17.6 21.4C17.8 21.1 17.9 20.9 18.1 20.6C18.2 20.3 18.1 20 18 19.8L19.4 18.8Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/** Official Facebook Brand Icon (#1877F2) */
export function FacebookLogo({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#1877F2" />
      <path
        d="M26.6 38V25.6H30.8L31.4 20.8H26.6V17.7C26.6 16.3 27 15.3 29 15.3H31.6V11C31.1 10.9 29.6 10.8 27.9 10.8C24.2 10.8 21.7 13.1 21.7 17.2V20.8H17.5V25.6H21.7V38H26.6Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Rickiest Toys & Hobby Store Logo
 * Renders the real store logo downloaded from Facebook (`/images/rickiest-logo.jpg`).
 */
export function RickiestLogo({ className = 'h-10 w-10' }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <img
        src="/images/rickiest-logo.jpg"
        alt="Logo Rickiest Toys & Hobby Shop Palembang"
        onError={() => setImgFailed(true)}
        className={`${className} shrink-0 rounded-lg border border-zinc-200 bg-white object-cover`}
      />
    );
  }

  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center rounded-lg bg-orange-600 font-extrabold tracking-tight text-white`}
      aria-label="Rickiest Toys & Hobby"
    >
      <span className="text-sm">RT</span>
    </div>
  );
}

/** Official Instagram Brand Icon */
export function InstagramLogo({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#E1306C" />
      <rect x="12" y="12" width="24" height="24" rx="7" stroke="#FFFFFF" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="5.5" stroke="#FFFFFF" strokeWidth="2.6" />
      <circle cx="30.8" cy="17.2" r="1.6" fill="#FFFFFF" />
    </svg>
  );
}
