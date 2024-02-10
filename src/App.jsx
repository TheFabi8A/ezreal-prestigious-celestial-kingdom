import { useContext } from "react";

import Atropos from "atropos/react";
import "atropos/css";

import { Cassette } from "./components/Cassette";

import { ContextAnime } from "./context/ContextProvider";

export default function App() {
  const {
    toggleCassetteVisible,
    isCassetteVisible,
    audioRef,
    setCassetteVisible,
  } = useContext(ContextAnime);

  return (
    <>
      <div id="app" className="app relative w-full max-w-sm">
        <Atropos
          onClick={toggleCassetteVisible}
          highlight={true}
          className="relative cursor-pointer"
          shadow={false}
          activeOffset={10}
          shadowScale={1}
          rotateXMax={45}
          rotateYMax={45}
          innerClassName={`overflow-visible after:w-full after:absolute after:h-full after:block after:top-0 after:left-0 before:absolute before:w-full before:block before:h-full before:top-0 before:left-0 before:z-10 ${
            isCassetteVisible
              ? "before:animate-[hue-infinite_10s_infinite]"
              : ""
          }`}
          shadowOffset={50}
        >
          <audio
            ref={audioRef}
            src="audio/audio.mp3"
            preload="auto"
            onEnded={() => setCassetteVisible(false)}
          />
          <div className="container-content absolute flex h-full w-full justify-end">
            <Cassette />
          </div>
          <span className="face-top" />
          <span className="face-top" />
          <span className="face-left" />
          <span className="face-right" />
          <span className="face-bottom" />
          <div
            className={`container origin-left transition-transform duration-700 ${
              isCassetteVisible ? "active" : ""
            }`}
          >
            <img
              className="relative"
              data-atropos-offset=""
              src="front-page/ezreal.jpg"
              alt="Imagen frontal del contenedor del cassette"
            />
            <img
              className="absolute left-[27%] top-[8%] w-[6.5%]"
              data-atropos-offset="20"
              src="front-page/left-horn.png"
              alt="Cuerno izquierdo de Ezreal"
            />
            <img
              className="absolute right-[49.5%] top-[3.5%] w-[10.25%]"
              data-atropos-offset="20"
              src="front-page/right-horn.png"
              alt="Cuerno derecho de Ezreal"
            />
            <img
              className="absolute right-[5%] top-[25.25%] w-[34%]"
              data-atropos-offset="15"
              src="front-page/arm.png"
              alt="Brazo derecho de Ezreal"
            />
          </div>
        </Atropos>
      </div>
    </>
  );
}
