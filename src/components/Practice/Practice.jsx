import React,{useState} from 'react';
import './Practice.scss';
import { images } from '../../constants';
import { AppWrap,MotionWrap} from '../../wrapper';
import { motion } from 'framer-motion';
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


const Practice = () => {
 const [value,setValue]=useState(0);
 /*const [posts,setPosts]=useState('');*/
 
 function increment () {
    setValue(prevvalue=>prevvalue+1);
 }
 function decrement () {
    setValue(prevvalue=>prevvalue-1);
 }

 //useeffect and axios library to load data
/*const fetchposts=()=>{
    fetch (``)
    .then(Response=>Response.json)
    .then((json)=>setPosts(json))

}

useEffect (()=>{
      posts();
},[]);*/
  return (
    <div className='app__practice'>
        <button onClick={increment}>increment</button>
        <span>{value}</span>
        <button onClick={decrement}>decrement</button>
        <div className='app__skills'>
             {
                skills.map((skill)=>(
                    <motion.div 
                    whileInView={{opacity:1}}
                    whileHover={{scale:1.1}}
                    transition={{duration:0.5,type:"tween"}}
                    className='app__skill'
                    key={(skills)}>
                      <img src={skill.icon} alt={skill.name}/>
                      <p>{skill.name}</p>
                    </motion.div>
                ))

             }
        </div>
    </div>
  )
}

export default AppWrap(
    MotionWrap(Practice,'app__works'),
  'practice',"app__primarybg");