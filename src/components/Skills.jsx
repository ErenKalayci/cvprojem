import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

import js from '../assets/js.jpg';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/node.jpg';
import vscode from '../assets/vscode.png';
import figma from '../assets/figma.jpg';

const icons = [js, react, redux, node, vscode, figma];

function Skills() {
  const { languageData } = useContext(LanguageContext);
  const skills = languageData?.skills;

  if (!skills) return null;

  return (
    <section className="py-16 bg-white dark:bg-gray-600 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        {skills.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.list.map((skill, index) => (
          <div
            key={index}
            className="w-24 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-white rounded-md shadow-md overflow-hidden flex items-center justify-center">
              <img
                src={icons[index]}
                alt={skill}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs mt-2 text-gray-700 dark:text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
