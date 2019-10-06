import React, { useEffect, useState } from 'react';
import '../swiper.css';
import Swiper from 'swiper';
import ProjectsContent from './ProjectsContent';

const ProjectsSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      speed: 1000,
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      direction: 'horizontal',
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        1300: {
          direction: 'vertical',
          slidesPerView: 1
        },
        900: {
          direction: 'horizontal',
          slidesPerView: 2
        },
        600: {
          direction: 'horizontal',
          slidesPerView: 2
        },
        300: {
          direction: 'horizontal',
          slidesPerView: 1
        }
      },
      navigation: {
        nextEl: '.project-slider .next-btn',
        prevEl: '.project-slider .prev-btn'
      },
      pagination: {
        el: '.project-slider .fn-bullets',
        type: 'bullets',
        clickable: true
      }
    });

    mySwiper.on('slideChange', () => {
      setActiveIndex(mySwiper.realIndex);
    });

    return () => mySwiper.destroy(true, true);
  }, []);

  return (
    <article className='project-slider'>
      <ProjectsContent items={slides} activeIndex={activeIndex} />

      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {slides.map(slide => (
            <div key={slide.id} className='swiper-slide'>
              <div className='ps-thumb'>
                <img src={slide.image} alt={slide.siteName} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='ps-controls'>
        <button className='swiper-btn prev-btn'>
          <span className='chevron chevron-top'>&nbsp;</span>
        </button>
        <div className='fn-bullets'></div>
        <button className='swiper-btn next-btn'>
          <span className='chevron chevron-bottom'>&nbsp;</span>
        </button>
      </div>
    </article>
  );
};

export default ProjectsSlider;
