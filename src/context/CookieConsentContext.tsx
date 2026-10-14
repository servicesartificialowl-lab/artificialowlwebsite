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
      setPreferences(JSON.parse(savedPreferences));
      setHasChosen(true);
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasChosen(true);

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
