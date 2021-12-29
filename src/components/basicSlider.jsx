import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";

// Images
const bogliasco = "/images/slider/1.jpeg";
const bogliasco2 = "/images/slider/2.jpeg";
const bogliasco3 = "/images/slider/3.jpeg";
const bogliasco4 = "/images/slider/4.jpeg";
const bogliasco5 = "/images/slider/5.jpeg";
const bogliasco6 = "/images/slider/6.jpeg";

const App = () => {
  const nextSlideHandler = React.useRef()
  const previousSlideHandler = React.useRef()

  return (
    <HeroSlider
      nextSlide={nextSlideHandler}
      previousSlide={previousSlideHandler}
      slidingAnimation="right_to_left"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      shouldSlideOnArrowKeypress={true}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "90vh"
      }}
    >
      <OverlayContainer>
        
          <button sx={{
                width: 100,
                margin: "12px 8px"
              }}
              onClick={() => previousSlideHandler.current()}
            >
            </button>
          <button
              sx={{
                width: 100,
                margin: "12px 8px"
              }}
            button="success"
            onClick={() => nextSlideHandler.current()}
          >
          </button>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco2,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco3,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco4,
          backgroundAttachment: "fixed"
        }}
      />


      <Slide
        background={{
          backgroundImage: bogliasco5,
          backgroundAttachment: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImage: bogliasco6,
          backgroundAttachment: "fixed"
        }}
      />
      <Nav />
    </HeroSlider>
  );
};

export default App;
