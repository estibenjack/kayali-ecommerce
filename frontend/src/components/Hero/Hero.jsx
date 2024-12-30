import React from 'react';
import ybmHero from '../../assets/kayali-ybm-hero.jpg';
import {motion} from "framer-motion";
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-section'>
          <motion.p 
                className="hero-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.8
                }}
            >Capture the Magic of Every Moment with Kayali</motion.p>
            <motion.div 
                className='img-div'
                animate={{
                    scale: [0.45, 1],
                    y: ["5%", "20%"],
                    width: ["80%", "100%"],
                    height: ["70%", "100%"]
                }}
                transition={{
                    duration: 1.1,
                    ease: "easeInOut",
                }}
            >
                <img
                    className='hero-img'
                    src={ybmHero}
                    alt="Yum Boujee Marshmallow promo image"
                />
            </motion.div>
        </div>
    );
};

export default Hero;