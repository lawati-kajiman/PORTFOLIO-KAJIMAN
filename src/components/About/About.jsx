import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

const abouts=[
  {
    title:"Web Development",description:"I am a good Web Developer.",imgUrl: images.about01
  },
  {
    title:"UI/UX",description:"I am a good ui/ux designer.", imgUrl:images.about02
  },
  {
    title:"Graphic design",description:"I have quite good experience in graphic design.",imgUrl:images.about03
  },
  {
    title:"Flutter",description:"Developing app will always be a good thing for me .",imgUrl:images.about04
  } 
]

const About = () => {

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About,'app__about'),
'about',"app__whitebg");