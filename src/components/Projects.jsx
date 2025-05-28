import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import laptop from '../assets/laptop.png';

function Projects() {
  const { languageData } = useContext(LanguageContext);
  const projects = languageData?.projects;

  if (!projects) return null;

  const cardColors = ["bg-blue-50", "bg-green-50"]; // Kart arka planları

  return (
    <section className="py-16 bg-white dark:bg-gray-600 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">{projects.title}</h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {projects.list.map((project, index) => (
          <div
            key={index}
            className={`${cardColors[index % cardColors.length]} rounded-xl shadow-lg p-6 flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-900">{project.title}</h3>

              <p className="text-sm mb-4 text-gray-800 dark:text-gray-900">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white border border-gray-300 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm font-medium text-blue-600">
                <a href={project.github} target="_blank" rel="noreferrer">{project.github1}</a>
                <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-800 hover:text-pink-600">{project.app} →</a>
              </div>
            </div>

            <div className="relative mt-6 flex justify-center items-center">
  {/* Laptop arka plan */}
  <img
    src={laptop}
    alt="Laptop"
    className="w-[440px] z-10"
  />

  {/* Ekrandaki içerik */}
  <img
    src={project.image}
    alt={project.title}
    className="absolute z-0 w-[315px] h-[215px] top-[0px] left-[calc(50%-154px)] object-cover rounded-sm"
  />
</div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
