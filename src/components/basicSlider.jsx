import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";

// Images
const bogliasco = "/images/abraj-slider.jpeg";
const countyClare = "/images/abraj-2.jpeg";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
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
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "80vh"
      }}
    >
      <OverlayContainer>
        <div sx={{display: "flex",
justifyContent: "center",
alignItems: "center",
flexFlow: "column",
width: "100%",
height: "100%",
margin: "0",
padding: "0",
pointerEvents: "none",
backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
          <div sx={{display: "flex",
justifyContent: "center",
alignItems: "center",
flexFlow: "column",
width: "100%",
height: "100%",
margin: "0",
padding: "0",
pointerEvents: "none",
backgroundColor: "rgba(0, 0, 0, 0.1)"}}></div>
          <div sx={{display: "flex",
justifyContent: "center",
alignItems: "center",
flexFlow: "column",
width: "100%",
height: "100%",
margin: "0",
padding: "0",
pointerEvents: "none",
backgroundColor: "rgba(0, 0, 0, 0.1)"}}></div>
        </div>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
