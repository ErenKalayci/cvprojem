import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Profile() {
  const { languageData } = useContext(LanguageContext);
  const lang = languageData?.profile;

  if (!lang) return null;

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">{lang.title}</h2>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
  {/* Sol Kutu - Temel Bilgiler */}
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border-l-4 border-pink-500">
    <h3 className="text-md font-semibold text-pink-600 mb-4">{lang.basicTitle}</h3>
    <ul className="space-y-2 text-sm">
      <li><strong>{lang.birth}:</strong> 21.02.2001</li>
      <li><strong>{lang.locations}:</strong> {lang.location}</li>
      <li><strong>{lang.stack}:</strong> React, Node, Tailwind</li>
      <li><strong>{lang.langsLabel}:</strong> {lang.langsValue}</li>
    </ul>
  </div>

  {/* Sağ Kutu - Hakkımda */}
  <div className="p-6">
    <h3 className="text-md font-semibold text-pink-600 mb-4">{lang.aboutTitle}</h3>
    <p className="text-sm text-gray-700 dark:text-gray-300 leading-6">
      {lang.aboutText}
    </p>
  </div>
</div>
    </section>
  );
}

export default Profile;
