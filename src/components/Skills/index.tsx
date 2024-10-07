'use client';

import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { skillsData } from './data';
import './skills.scss';

const SkillSection = () => {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const animation = {
    start: 'opacity-0 -translate-y-12',
    end: 'opacity-100 translate-y-0'
  };

  return (
    <section
      id="skills"
      className="skill-section p-12 text-center text-white relative z-10"
      ref={ref}
    >
      <h2 className="text-8xl font-josefin text-blueLight my-10 -translate-y-12">
        Skills
      </h2>
      <div className="grid skill-grid">
        {skillsData.map((skillCategory, iIndex) => {
          return (
            <div
              className={clsx(
                'skill-grid-item transition duration-500',
                skillCategory.tileClass,
                animation.start,
                inView && animation.end
              )}
              key={`skill-grid-item-${iIndex}`}
              style={{
                transitionDelay: `${iIndex * 100}ms`
              }}
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
