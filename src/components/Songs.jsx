import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  Music2,
  PauseCircle,
  PlayCircle,
} from "lucide-react";

import { songs } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1];

/* =========================================================
   CANCIONES
========================================================= */

const songsWithExtras = [
  ...songs,

  {
    title: "Crayola",
    artist: "Danny Ocean",
    cover: "/images/song-09.jpg",
    spotifyId: "6cWhEExHUKZR3boz4yC2Mf",
    spotifyUrl:
      "https://open.spotify.com/track/6cWhEExHUKZR3boz4yC2Mf",
  },

  {
    title: "El Trato",
    artist: "Los del Fuego",
    cover: "/images/song-10.jpg",
    spotifyId: "5RTIOIav43mQw3TpqQoVMm",
    spotifyUrl:
      "https://open.spotify.com/track/5RTIOIav43mQw3TpqQoVMm",
  },

  {
    title: "Sabes",
    artist: "Los del Fuego",
    cover: "/images/song-11.jpg",
    spotifyId: "2gxI4c72YWxgVO32PrL9bZ",
    spotifyUrl:
      "https://open.spotify.com/track/2gxI4c72YWxgVO32PrL9bZ",
  },

  {
    title: "Puñaladas",
    artist: "Lauta, Amigo de Artistas, Tote",
    cover: "/images/song-12.jpg",
    spotifyId: "53QqcQJy2khVsmQpyNgV0Q",
    spotifyUrl:
      "https://open.spotify.com/track/53QqcQJy2khVsmQpyNgV0Q",
  },

  {
    title: "Hecha Pa' Mí",
    artist: "Grupo Frontera",
    cover: "/images/song-13.jpg",
    spotifyId: "3AIVCSqTfDX9NxStqhi80S",
    spotifyUrl:
      "https://open.spotify.com/track/3AIVCSqTfDX9NxStqhi80S",
  },

  {
    title: "Me Voy Enamorando - Remix",
    artist: "Chino & Nacho, Farruko",
    cover: "/images/song-14.jpg",
    spotifyId: "0SUukeNYkHMk8bxwgGQKJa",
    spotifyUrl:
      "https://open.spotify.com/track/0SUukeNYkHMk8bxwgGQKJa",
  },

  {
    title: "Te Vi",
    artist: "Piso 21, Micro TDH",
    cover: "/images/song-15.jpg",
    spotifyId: "059bcIhyc2SBwm6sw2AZzd",
    spotifyUrl:
      "https://open.spotify.com/track/059bcIhyc2SBwm6sw2AZzd",
  },

  {
    title: "Tú y Yo",
    artist: "La Misma Gente",
    cover: "/images/song-16.jpg",
    spotifyId: "17LdmV5cIcTvxB0O18tD2Z",
    spotifyUrl:
      "https://open.spotify.com/track/17LdmV5cIcTvxB0O18tD2Z",
  },

  {
    title: "No Me Importa el Dinero",
    artist:
      "Los Auténticos Decadentes, Julieta Venegas",
    cover: "/images/song-17.jpg",
    spotifyId: "4wXjnoLIMTninCnKRgGsQc",
    spotifyUrl:
      "https://open.spotify.com/track/4wXjnoLIMTninCnKRgGsQc",
  },
];

/* =========================================================
   COLORES
========================================================= */

const themeById = {
  "0ZyNiSXRbq68lmBjV0vJkR": {
    from: "#39105B",
    to: "#1C082D",
    accent: "#D7B6FF",
    soft: "#6D28D9",
  },

  "5zpZUFF7YyPG90nkR88RYd": {
    from: "#E3C0D6",
    to: "#7D4E68",
    accent: "#FFF3FB",
    soft: "#F0A8CE",
  },

  "6r6IPuFvUX72kQGc9b46rk": {
    from: "#FF7D8E",
    to: "#2A132A",
    accent: "#FFEAEF",
    soft: "#FF9AA8",
  },

  "19vrzibX1lFlT2V2ToVQkv": {
    from: "#5921A8",
    to: "#161A43",
    accent: "#F7D84A",
    soft: "#7C3AED",
  },

  "1Q4DK5GLldkubj5GtCzbs7": {
    from: "#102E71",
    to: "#0C1736",
    accent: "#FFE36C",
    soft: "#2563EB",
  },

  "4j3iq13kHs5PB94jdTp3Y3": {
    from: "#6B707B",
    to: "#23252B",
    accent: "#FFFFFF",
    soft: "#A3A3A3",
  },

  "5sYKy39d3d6B4lU3d9n7Z1": {
    from: "#43212D",
    to: "#111111",
    accent: "#F0B59D",
    soft: "#9F1239",
  },

  "6MJXcbTdn5v63sHSjpH7qq": {
    from: "#2B2625",
    to: "#0F0B0B",
    accent: "#F5D6BF",
    soft: "#9A3412",
  },

  "6cWhEExHUKZR3boz4yC2Mf": {
    from: "#F29A2E",
    to: "#7C2D12",
    accent: "#FFF2D8",
    soft: "#FB923C",
  },

  "5RTIOIav43mQw3TpqQoVMm": {
    from: "#5B1717",
    to: "#1F0909",
    accent: "#FFD5A5",
    soft: "#B45309",
  },

  "2gxI4c72YWxgVO32PrL9bZ": {
    from: "#243B53",
    to: "#0B1520",
    accent: "#D5E7F5",
    soft: "#3B82A0",
  },

  "53QqcQJy2khVsmQpyNgV0Q": {
    from: "#5A3D2B",
    to: "#1B1210",
    accent: "#F4DEC4",
    soft: "#A36B47",
  },

  "3AIVCSqTfDX9NxStqhi80S": {
    from: "#523127",
    to: "#1A0D0A",
    accent: "#FFE1C2",
    soft: "#A85E3B",
  },

  "0SUukeNYkHMk8bxwgGQKJa": {
    from: "#902F5C",
    to: "#271020",
    accent: "#FFD6E8",
    soft: "#D64C87",
  },

  "059bcIhyc2SBwm6sw2AZzd": {
    from: "#376C78",
    to: "#10242A",
    accent: "#DDF7F4",
    soft: "#55A5B1",
  },

  "17LdmV5cIcTvxB0O18tD2Z": {
    from: "#7A402E",
    to: "#24110C",
    accent: "#FFE0B8",
    soft: "#C7774F",
  },

  "4wXjnoLIMTninCnKRgGsQc": {
    from: "#674E25",
    to: "#1D160A",
    accent: "#FFE59D",
    soft: "#B8943C",
  },
};

/* =========================================================
   COMPONENTE
========================================================= */

function Songs({
  onPauseBackground,
  onResumeBackground,
}) {
  const songsWithTheme = useMemo(() => {
    return songsWithExtras.map((song) => ({
      ...song,

      theme:
        themeById[song.spotifyId] || {
          from: "#3B0764",
          to: "#14061F",
          accent: "#F3E8FF",
          soft: "#7E22CE",
        },
    }));
  }, []);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [showPlayer, setShowPlayer] =
    useState(false);

  const currentSong =
    songsWithTheme[currentIndex];

  /* =========================================================
     CARRUSEL AUTOMÁTICO
  ========================================================= */

  useEffect(() => {
    /*
      Si Spotify está abierto,
      detenemos el cambio automático.
    */

    if (showPlayer) return;

    /*
      Después de 4 segundos
      pasamos a la siguiente canción.
    */

    const timer = setTimeout(() => {
      setCurrentIndex((current) => {
        return current ===
          songsWithTheme.length - 1
          ? 0
          : current + 1;
      });
    }, 3000);

    /*
      Cada vez que cambia la canción
      borramos el timer anterior.

      Así los 4 segundos empiezan de nuevo.
    */

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentIndex,
    showPlayer,
    songsWithTheme.length,
  ]);

  /* =========================================================
     SPOTIFY
  ========================================================= */

  const togglePlayer = () => {
    if (showPlayer) {
      setShowPlayer(false);

      onResumeBackground?.();

      return;
    }

    onPauseBackground?.();

    setShowPlayer(true);
  };

  /* =========================================================
     ANTERIOR
  ========================================================= */

  const goToPrevious = useCallback(() => {
    setCurrentIndex((current) => {
      return current === 0
        ? songsWithTheme.length - 1
        : current - 1;
    });
  }, [songsWithTheme.length]);

  /* =========================================================
     SIGUIENTE
  ========================================================= */

  const goToNext = useCallback(() => {
    setCurrentIndex((current) => {
      return current ===
        songsWithTheme.length - 1
        ? 0
        : current + 1;
    });
  }, [songsWithTheme.length]);

  /* =========================================================
     IR A CANCIÓN
  ========================================================= */

  const goToSong = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="songs"
      className="
        relative
        overflow-hidden
        bg-[#160920]
        px-4
        py-24
        md:px-6
        md:py-32
      "
    >
      {/* =========================================
          FONDO DINÁMICO
      ========================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
        "
        animate={{
          background: `
            radial-gradient(
              circle at 20% 20%,
              ${currentSong.theme.soft}55 0%,
              transparent 30%
            ),

            radial-gradient(
              circle at 80% 25%,
              ${currentSong.theme.accent}22 0%,
              transparent 28%
            ),

            radial-gradient(
              circle at 50% 80%,
              ${currentSong.theme.soft}35 0%,
              transparent 35%
            )
          `,
        }}
        transition={{
          duration: 0.6,
          ease,
        }}
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
        "
      >
        {/* =========================================
            CABECERA
        ========================================== */}

        <motion.div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
        >
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <div className="h-px w-10 bg-yellow-300/30" />

            <Music2
              size={16}
              className="text-yellow-300"
            />

            <p
              className="
                text-xs
                uppercase
                tracking-[0.32em]
                text-yellow-200/70
              "
            >
              Nuestra playlist
            </p>

            <div className="h-px w-10 bg-yellow-300/30" />
          </div>

          <h2
            className="
              font-letter
              text-5xl
              text-white
              md:text-7xl
            "
          >
            Canciones que
          </h2>

          <p
            className="
              font-elegant
              mt-1
              text-2xl
              italic
              text-violet-300/80
              md:text-3xl
            "
          >
            siempre me llevan a vos
          </p>

          <p
            className="
              font-elegant
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-violet-100/50
            "
          >
            Hay canciones que desde que estás en mi vida dejaron de ser
            solamente canciones y pasaron a tener tu nombre.
            <br />
            Estas son solo algunas de ellas
          </p>
        </motion.div>

        {/* =========================================
            FLECHAS
        ========================================== */}

        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          "
        >
          <button
            type="button"
            onClick={goToPrevious}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition
              hover:bg-white/[0.08]
              hover:text-yellow-200
            "
            aria-label="Canción anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition
              hover:bg-white/[0.08]
              hover:text-yellow-200
            "
            aria-label="Siguiente canción"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* =========================================
            CANCIÓN
        ========================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSong.spotifyId}
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -30,
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease,
            }}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              shadow-2xl
            "
            style={{
              background: `linear-gradient(
                135deg,
                ${currentSong.theme.from},
                ${currentSong.theme.to}
              )`,
            }}
          >
            <div
              className="
                grid
                items-center
                gap-8
                p-5
                md:grid-cols-[320px_1fr]
                md:p-8
                lg:grid-cols-[350px_1fr]
                lg:p-10
              "
            >
              {/* PORTADA */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
                  mx-auto
                  w-full
                  max-w-[340px]
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-black/10
                    shadow-2xl
                  "
                >
                  <img
                    src={currentSong.cover}
                    alt={currentSong.title}
                    loading="lazy"
                    className="
                      aspect-square
                      w-full
                      object-cover
                    "
                  />
                </div>
              </motion.div>

              {/* INFORMACIÓN */}

              <div
                className="
                  text-center
                  md:text-left
                "
              >
                <h3
                  className="
                    font-letter
                    text-5xl
                    leading-tight
                    text-white
                    md:text-6xl
                  "
                >
                  {currentSong.title}
                </h3>

                <p
                  className="
                    font-elegant
                    mt-2
                    text-xl
                    italic
                    md:text-2xl
                  "
                  style={{
                    color:
                      currentSong.theme.accent,
                  }}
                >
                  {currentSong.artist}
                </p>

                {/* BOTONES */}

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    items-center
                    gap-4
                    sm:flex-row
                    sm:justify-center
                    md:justify-start
                  "
                >
                  <button
                    type="button"
                    onClick={togglePlayer}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      px-6
                      py-3
                      text-sm
                      font-medium
                      shadow-lg
                      transition
                      hover:scale-[1.02]
                    "
                    style={{
                      backgroundColor:
                        currentSong.theme.accent,

                      color:
                        currentSong.theme.to,
                    }}
                  >
                    {showPlayer ? (
                      <PauseCircle
                        size={18}
                      />
                    ) : (
                      <PlayCircle
                        size={18}
                      />
                    )}

                    {showPlayer
                      ? "Ocultar reproductor"
                      : "Escuchar acá"}
                  </button>

                  <a
                    href={
                      currentSong.spotifyUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.06]
                      px-6
                      py-3
                      text-sm
                      text-white
                      transition
                      hover:bg-white/[0.1]
                    "
                  >
                    Spotify

                    <ExternalLink
                      size={16}
                    />
                  </a>
                </div>

                {/* =================================
                    SPOTIFY
                ================================== */}

                <AnimatePresence>
                  {showPlayer && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease,
                      }}
                      className="
                        mt-8
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          rounded-[22px]
                          border
                          border-white/10
                          bg-black/15
                          p-3
                        "
                      >
                        <iframe
                          key={
                            currentSong.spotifyId
                          }
                          src={`https://open.spotify.com/embed/track/${currentSong.spotifyId}?utm_source=generator&autoplay=1`}
                          width="100%"
                          height="152"
                          allowFullScreen=""
                          allow="
                            autoplay;
                            clipboard-write;
                            encrypted-media;
                            fullscreen;
                            picture-in-picture
                          "
                          loading="eager"
                          className="
                            rounded-xl
                            border-0
                          "
                          title={`Spotify - ${currentSong.title}`}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =========================================
            INDICADORES
        ========================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {songsWithTheme.map(
            (song, index) => {
              const active =
                index === currentIndex;

              return (
                <button
                  key={song.spotifyId}
                  type="button"
                  onClick={() =>
                    goToSong(index)
                  }
                  className={`
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      active
                        ? "h-3 w-8"
                        : "h-3 w-3 opacity-60 hover:opacity-100"
                    }
                  `}
                  style={{
                    backgroundColor:
                      song.theme.accent,
                  }}
                  aria-label={`Ir a ${song.title}`}
                />
              );
            }
          )}
        </div>

        {/* =========================================
            CIERRE
        ========================================== */}

        <motion.div
          className="
            mx-auto
            mt-16
            max-w-2xl
            text-center
          "
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            ease,
          }}
        >
          <Heart
            size={18}
            fill="currentColor"
            className="
              mx-auto
              text-pink-300
            "
          />

          <p
            className="
              font-letter
              mt-4
              text-3xl
              text-white
              md:text-4xl
            "
          >
            Y ahora todas suenan un poquito más a nosotros.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Songs;