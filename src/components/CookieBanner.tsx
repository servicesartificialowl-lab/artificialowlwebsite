import { useState } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function CookieBanner() {
  const {
    hasChosen,
    preferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useCookieConsent();

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

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl">
        <div className="mx-auto max-w-6xl px-4 py-5 md:flex md:items-center md:justify-between md:gap-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-slate-900">
              Cookies & Privacy
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              We use essential cookies to make the website work. With your
              permission, we may also use analytics, functional and marketing
              technologies.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={rejectNonEssential}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700"
            >
              Reject non-essential
            </button>

            <button
              onClick={() => setShowPreferences(true)}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700"
            >
              Manage preferences
            </button>

            <button
              onClick={acceptAll}
              className="rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-slate-900">
              Cookie preferences
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Choose which optional technologies you allow.
            </p>

            <div className="mt-6 space-y-4">
              <label className="flex justify-between gap-4">
                <span>
                  <span className="block font-medium text-slate-900">Necessary</span>
                  <span className="block text-xs text-slate-500">
                    Required for the website to work, such as remembering your cookie choices.
                  </span>
                </span>
                <input type="checkbox" checked disabled />
              </label>

              <label className="flex justify-between gap-4">
                <span>
                  <span className="block font-medium text-slate-900">Analytics</span>
                  <span className="block text-xs text-slate-500">
                    Help us understand how the website is used (Google Analytics and Microsoft Clarity).
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
              </label>

              <label className="flex justify-between gap-4">
                <span>
                  <span className="block font-medium text-slate-900">Functional</span>
                  <span className="block text-xs text-slate-500">
                    Remember extra settings to improve your experience.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={functional}
                  onChange={(e) => setFunctional(e.target.checked)}
                />
              </label>

              <label className="flex justify-between gap-4">
                <span>
                  <span className="block font-medium text-slate-900">Marketing</span>
                  <span className="block text-xs text-slate-500">
                    Measure and personalise our advertising.
                  </span>
                </span>
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
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
