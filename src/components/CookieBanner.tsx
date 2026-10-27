import { useState } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function CookieBanner() {
  const {
    hasChosen,
    preferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useCookieConsent();
  const { language } = useLanguage();
  const t = translations[language].cookieBanner;

  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(preferences.analytics);
  const [functional, setFunctional] = useState(preferences.functional);
  const [marketing, setMarketing] = useState(preferences.marketing);

  if (hasChosen) {
    return null;
  }

  const handleSave = () => {
    savePreferences({
      necessary: true,
      analytics,
      functional,
      marketing,
    });

    setShowPreferences(false);
  };

  const categoryLabel = (category: keyof typeof t.categories) => (
    <span>
      <span className="block font-medium text-slate-900">{t.categories[category].label}</span>
      <span className="block text-xs text-slate-500">
        {t.categories[category].description}
      </span>
    </span>
  );

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl">
        <div className="mx-auto max-w-6xl px-4 py-5 md:flex md:items-center md:justify-between md:gap-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.title}
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              {t.description}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={rejectNonEssential}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700"
            >
              {t.rejectNonEssential}
            </button>

            <button
              onClick={() => setShowPreferences(true)}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700"
            >
              {t.managePreferences}
            </button>

            <button
              onClick={acceptAll}
              className="rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white"
            >
              {t.acceptAll}
            </button>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-slate-900">
              {t.preferencesTitle}
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              {t.preferencesSubtitle}
            </p>

            <div className="mt-6 space-y-4">
              <label className="flex justify-between gap-4">
                {categoryLabel('necessary')}
                <input type="checkbox" checked disabled />
              </label>

              <label className="flex justify-between gap-4">
                {categoryLabel('analytics')}
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
              </label>

              <label className="flex justify-between gap-4">
                {categoryLabel('functional')}
                <input
                  type="checkbox"
                  checked={functional}
                  onChange={(e) => setFunctional(e.target.checked)}
                />
              </label>

              <label className="flex justify-between gap-4">
                {categoryLabel('marketing')}
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="rounded-lg border border-slate-300 px-4 py-2"
              >
                {t.cancel}
              </button>

              <button
                onClick={handleSave}
                className="rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
