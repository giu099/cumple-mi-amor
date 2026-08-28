import { useEffect, useRef, useState } from "react";

import HeroLetter from "./components/HeroLetter";
import ThankYou from "./components/ThankYou";
import LoveTimeline from "./components/LoveTimeline";
import ThingsILove from "./components/ThingsILove";
import LoveCounters from "./components/LoveCounters";
import MemoriesGallery from "./components/MemoriesGallery";
import Songs from "./components/Songs";
import WhyYou from "./components/WhyYou";
import BestMemories from "./components/BestMemories";
import FinalSection from "./components/FinalSection";

import { photos } from "./data/siteData";

function App() {
  const [letterPhase, setLetterPhase] =
    useState("closed");

  const musicRef = useRef(null);
  const timerRef = useRef(null);

  /* =========================================================
     ABRIR CARTA
  ========================================================= */

  const handleOpenLetter = () => {
    if (letterPhase !== "closed") return;

    setLetterPhase("opening");

    if (musicRef.current) {
      musicRef.current.currentTime = 0;
      musicRef.current.volume = 0.3;

      musicRef.current
        .play()
        .catch((error) => {
          console.log(
            "No se pudo iniciar la música:",
            error
          );
        });
    }

    timerRef.current = setTimeout(() => {
      setLetterPhase("opened");
    }, 900);
  };

  /* =========================================================
     MÚSICA DE FONDO
  ========================================================= */

  const pauseBackgroundMusic = () => {
    if (!musicRef.current) return;

    musicRef.current.pause();
  };

  const resumeBackgroundMusic = () => {
    if (!musicRef.current) return;

    musicRef.current
      .play()
      .catch((error) => {
        console.log(
          "No se pudo reanudar la música:",
          error
        );
      });
  };

  /* =========================================================
     LIMPIAR TIMER
  ========================================================= */

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#100717]">
      {/* =====================================================
          MÚSICA DE FONDO
      ====================================================== */}

      <audio
        ref={musicRef}
        src="/audio/bruno-mars.mp3"
        loop
        preload="auto"
      />

      {/* =====================================================
          HERO

          photo-01
      ====================================================== */}

      <HeroLetter
        phase={letterPhase}
        onOpen={handleOpenLetter}
        firstPhoto={photos[0]}
      />

      {/* =====================================================
          CONTENIDO DESPUÉS DE ABRIR LA CARTA
      ====================================================== */}

      {letterPhase === "opened" && (
        <>
          {/* =================================================
              GRACIAS

              photo-02
              photo-35

              photo-03 fue movida a BestMemories
          ================================================= */}

          <ThankYou
            photos={[
              photos[1],  // photo-02
              photos[34], // photo-35
            ]}
          />

          {/* =================================================
              CÓMO ME ENAMORÉ

              photo-18
              photo-05
              photo-06

              photo-18 reemplazó a photo-04
          ================================================= */}

          <LoveTimeline
            photos={[
              photos[17], // photo-18
              photos[4],  // photo-05
              photos[5],  // photo-06
            ]}
          />

          {/* =================================================
              LO QUE MÁS AMO DE NOSOTROS

              photo-36
              photo-08
              photo-09
              photo-10

              photo-07 fue movida a BestMemories
          ================================================= */}

          <ThingsILove
            photos={[
              photos[35], // photo-36
              photos[7],  // photo-08
              photos[8],  // photo-09
              photos[9],  // photo-10
            ]}
          />

          {/* =================================================
              CONTADORES
          ================================================= */}

          <LoveCounters />

          {/* =================================================
              GALERÍA

              photo-37 reemplaza photo-11

              photo-04 reemplaza photo-18

              Resultado:

              photo-37
              photo-12
              photo-13
              photo-14
              photo-15
              photo-16
              photo-17
              photo-04
              photo-19 ... photo-30
          ================================================= */}

          <MemoriesGallery
            photos={[
              photos[36], // photo-37

              ...photos.slice(
                11,
                17
              ),
              // photo-12 hasta photo-17

              photos[3],
              // photo-04

              ...photos.slice(
                18,
                30
              ),
              // photo-19 hasta photo-30
            ]}
          />

          {/* =================================================
              CANCIONES
          ================================================= */}

          <Songs
            onPauseBackground={
              pauseBackgroundMusic
            }
            onResumeBackground={
              resumeBackgroundMusic
            }
          />

          {/* =================================================
              ¿POR QUÉ VOS?

              photo-31
              photo-32
              photo-33
              photo-34
          ================================================= */}

          <WhyYou
            photos={[
              photos[30], // photo-31
              photos[31], // photo-32
              photos[32], // photo-33
              photos[33], // photo-34
            ]}
          />

          {/* =================================================
              NUESTROS MEJORES RECUERDOS

              photo-03
              Primera vez tomando mates

              photo-07
              Primera vez en su casa

              photo-11
              Cuando le pediste que fuera tu novia
          ================================================= */}

          <BestMemories
            photos={[
              photos[2],  // photo-03
              photos[6],  // photo-07
              photos[10], // photo-11
            ]}
          />

          {/* =================================================
              FINAL

              photo-39
              photo-38
              photo-41
              photo-42
          ================================================= */}

          <FinalSection
            photos={[
              photos[38], // photo-39
              photos[37], // photo-38
              photos[40], // photo-41
              photos[41], // photo-42
            ]}
          />
        </>
      )}
    </main>
  );
}

export default App;