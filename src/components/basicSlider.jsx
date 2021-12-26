import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";

// Images
const bogliasco = "/images/slider/1.jpg";
const bogliasco2 = "/images/slider/2.jpg";
const bogliasco3 = "/images/slider/3.jpg";
const bogliasco4 = "/images/slider/4.jpg";
const bogliasco5 = "/images/slider/5.jpg";
const bogliasco6 = "/images/slider/6.jpg";

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
        height: "90vh"
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

export default app;
