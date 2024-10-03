import clsx from 'clsx';
import { skillsData } from './data';
import './skills.scss';

const SkillSection = () => {
  return (
    <section id="skills" className="skill-section p-12 text-center text-white">
      <h2 className="text-8xl font-josefin text-blueLight my-10">Skills</h2>
      <div className="grid skill-grid">
        {skillsData.map((skillCategory, iIndex) => {
          return (
            <div
              className={clsx('skill-grid-item', skillCategory.tileClass)}
              key={`skill-grid-item-${iIndex}`}
            >
              <div className="skill-grid-item-content">
                <div className="skill-icon">{skillCategory.Icon}</div>
                <h3 className="font-josefin font-bold">
                  {skillCategory.title}
                </h3>
                <ul className="skill-list">
                  {skillCategory.skills.map((skill, jIndex) => {
                    return (
                      <li className="mb-4" key={`skill-${jIndex}`}>
                        <span className="skill-title text font-josefin mr-2 text-xl">
                          {skill.title}:
                        </span>
                        <span className="skill-description font-roboto font-thin text-base">
                          <span>{skill.description}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
