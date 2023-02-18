import React from 'react';
import HeroSlider, {Slide} from 'hero-slider';

import IMG1 from '../img/cateringtray.jpeg'
import IMG2 from '../img/cateringtray2.jpeg'
import IMG3 from '../img/lunchbox.jpeg'
import IMG4 from '../img/img4.jpeg'

const HeroImgSlider = () => {
  return (
    <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide = {1}
        onBeforeChange = {(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
        onChange = {nextSlide => console.log("onChange", nextSlide)}
        onAfterChange = {nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
            backgroundColor: "#5c5c5c",
            // backgroundColor: "rgba(0,0,0,0.3)",  
        }}
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 5000,
            height: "100vh"
        }}
    >
        <Slide
            background={{
                backgroundImageSrc: IMG1,
                backgroundAttachment:"fixed"
            }}
        />
            <Slide
                background={{
                    backgroundImageSrc: IMG2,
                    backgroundAttachment:"fixed"
                }}
            />
            <Slide
            background={{
                backgroundImageSrc: IMG3,
                backgroundAttachment:"fixed"
            }}
            />

            <Slide
                background={{
                    backgroundImageSrc: IMG4,
                    backgroundAttachment:"fixed"
                }}
            />
    </HeroSlider>
  );
}

export default HeroImgSlider;