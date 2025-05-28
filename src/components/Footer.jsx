import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Footer() {
  const { languageData } = useContext(LanguageContext);
  const footer = languageData?.footer;

  if (!footer) return null;

  return (
    <footer className="bg-white dark:bg-gray-600 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-10 text-gray-800 dark:text-gray-100">
        
        {/* Sol metin bloğu */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{footer.title}</h2>
          <p className="text-sm">{footer.desc}</p>
        </div>

        {/* Sağ bağlantı bloğu */}
        <div className="flex flex-col text-sm text-center md:text-left">
          <a href={footer.github} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Github</a>
          <a href="https://blog.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Personal Blog</a>
          <a href={footer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Linkedin</a>
          <a href="mailto:someone@example.com" className="hover:text-pink-600">Email</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
