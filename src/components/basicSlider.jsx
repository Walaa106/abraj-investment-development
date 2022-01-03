import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";

// Images
const images = [
  "/images/slider/1.jpeg",
  "/images/slider/2.jpeg",
"/images/slider/5.jpeg",
"/images/slider/6.jpeg",
"/images/slider/7.jpeg",
"/images/slider/8.jpeg",
"/images/slider/9.jpeg",
"/images/slider/10.jpeg"
]
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
        backgroundColor: "rgba(0, 0, 0, 0.33)",
      }}
      shouldSlideOnArrowKeypress={true}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "90vh",
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
      {
        images.map(img => {
          return (
            <Slide
              background={{
                backgroundImage: img,
                backgroundAttachment: "fixed",
                backgroundPosition: 'center center'
              }}
            />
          )
        })
      }

      <Nav />
    </HeroSlider>
  );
};

export default App;
