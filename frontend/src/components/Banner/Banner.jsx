import React, {useState, useEffect} from 'react';
import './Banner.css';

function Banner({messages, interval}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, interval);
    
        return () => clearInterval(timer);
      }, [messages, interval]);

  return (
    <div className='banner'>
        <p className='banner-text'>{messages[currentIndex]}</p>
    </div>
  )
}

export default Banner;