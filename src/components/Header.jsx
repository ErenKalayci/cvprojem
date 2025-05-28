import { useContext, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/1.jpg';
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from '../context/LanguageContext';
import { toast } from 'react-toastify';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, languageData } = useContext(LanguageContext);
  const [dark, setDark] = useState(theme === 'dark');

  if (!languageData?.header) return null;

  const lang = languageData.header;

  const handleThemeToggle = () => {
    toggleTheme();
    setDark(!dark);
    toast(!dark ? lang.darkToast : lang.lightToast);
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
    toast(language === 'en' ? lang.switchToTR : lang.switchToEN);
  };

  return (
    
    <header className={`transition-colors duration-300 py-12 ${dark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* Sol */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6">
          <p className="text-md font-medium">{lang.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-pink-600"></span> {lang.desc}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">{lang.subtitle}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">{lang.invite}</p>

          {/* Sosyal medya */}
          <div className="flex gap-4 text-2xl">
            <a href={lang.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaLinkedin />
            </a>
            <a href={lang.github} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaGithub />
            </a>
          </div>

          {/* Alt metin */}
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p>{lang.note}</p>
            <p className="text-pink-600 underline">{lang.mail} ➔ erenkalayci421@gmail.com</p>
          </div>
        </div>

        {/* Sağ */}
        <div className="relative mt-10 md:mt-0 w-fit">
          {/* Toggle ve Dil Butonu */}
          <div className="absolute -top-6 right-0 flex items-center gap-3">
            {/* Toggle switch */}
            <div
              onClick={handleThemeToggle}
              className={`w-10 h-5 rounded-full cursor-pointer relative transition-all duration-300 ${dark ? 'bg-pink-600' : 'bg-gray-300'}`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${dark ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </div>

            <span className="text-xs uppercase tracking-wide">Dark Mode</span>

            {/* Language toggle */}
            <button
              onClick={handleLanguageToggle}
              className="text-xs font-medium text-pink-600 hover:underline"
            >
              {language === 'en' ? `TÜRKÇE'YE GEÇ` : 'SWITCH TO ENG'}
            </button>
          </div>

          {/* Profil görseli */}
          <img
            src={profileImage}
            alt="Profile"
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-pink-500 shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
