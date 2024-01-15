import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap} from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

const skills=[
  {
    name:"Typescript",bgColor:"var(--primary-color)",icon:images.typescript
  },
  {
    name:"figma",bgColor:"var(--primary-color)",icon:images.figma
  },
  {
    name:"css",bgColor:"var(--primary-color)",icon:images.css
  },
  {
    name:"Html",bgColor:"var(--primary-color)",icon:images.html
  },
  {
    name:"c++",bgColor:"var(--primary-color)",icon:images.cpp
  },
  {
    name:"flutter",bgColor:"var(--primary-color)",icon:images.flutter
  },
  {
    name:"javascript",bgColor:"var(--primary-color)",icon:images.javascript
  },
  {
    name:"Node js",bgColor:"var(--primary-color)",icon:images.node
  },
  {
    name:"Sass",bgColor:"var(--primary-color)",icon:images.sass
  },
  {
    name:"Typescript",bgColor:"var(--primary-color)",icon:images.typescript
  },
  {
    name:"React",bgColor:"var(--primary-color)",icon:images.react
  }
]

const experiences=[
  {
    year:'2019', name:"Wordpress",company:"Numayou",desc:"Online shopping app",
  },
  {
    year:'2020',name:"Vending Machine",company:"Manav Rachna University",desc:"virtual vending machine as a project"
  },
  {
    year:'2021',name:"travel web (PWA)",company:"Manav Rachna University",desc:"progressive web application"
  }
];

const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <>
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
            </motion.div>
               <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experience.name}
                      key={experience.name}
                    >
                      <h4 className="bold-text">{experience.name}</h4>
                      <p className="p-text">{experience.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={experience.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {experience.desc}
                    </ReactTooltip>
                  </>
              </motion.div>
          </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
'skills',"app__whitebg");