import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

type CookieConsentContextType = {
  preferences: CookiePreferences;
  hasChosen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: CookiePreferences) => void;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

// Microsoft Clarity project ID (clarity.microsoft.com → Settings → Overview).
const CLARITY_ID = 'z4ckub9nxb';

// Loads Microsoft Clarity only after the visitor accepts analytics cookies,
// and tells it to stop tracking if that consent is withdrawn later.
function updateClarity(preferences: CookiePreferences) {
  if (!CLARITY_ID) return;

  if (!preferences.analytics) {
    window.clarity?.('consent', false);
    return;
  }

  if (window.clarity) {
    window.clarity('consent');
    return;
  }

  const queue: unknown[] = [];
  window.clarity = Object.assign((...args: unknown[]) => { queue.push(args); }, { q: queue });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(script);
  window.clarity?.('consent');
}

// Tells Google tags (GA4, and later GTM/Ads) what the visitor consented to.
function updateGoogleConsent(preferences: CookiePreferences) {
  const state = (allowed: boolean) => (allowed ? 'granted' : 'denied');

  window.gtag?.('consent', 'update', {
    analytics_storage: state(preferences.analytics),
    functionality_storage: state(preferences.functional),
    personalization_storage: state(preferences.functional),
    ad_storage: state(preferences.marketing),
    ad_user_data: state(preferences.marketing),
    ad_personalization: state(preferences.marketing),
  });
}

const CookieConsentContext =
  createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    const savedPreferences = localStorage.getItem(
      'artificialOwlCookiePreferences'
    );

    if (savedPreferences) {
      const parsed: CookiePreferences = JSON.parse(savedPreferences);
      setPreferences(parsed);
      setHasChosen(true);
      updateClarity(parsed);
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasChosen(true);
    updateGoogleConsent(newPreferences);
    updateClarity(newPreferences);

    localStorage.setItem(
      'artificialOwlCookiePreferences',
      JSON.stringify(newPreferences)
    );
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasChosen,
        acceptAll,
        rejectNonEssential,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      'useCookieConsent must be used inside CookieConsentProvider'
    );
  }

  return context;
}
