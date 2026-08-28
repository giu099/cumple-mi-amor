import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const heartPositions = [
  // fila 1
  { top: "5%", left: "32%", rotate: -5 },
  { top: "5%", left: "43%", rotate: -2 },
  { top: "5%", left: "57%", rotate: 2 },
  { top: "5%", left: "68%", rotate: 5 },

  // fila 2
  { top: "20%", left: "22%", rotate: -6 },
  { top: "20%", left: "33%", rotate: -3 },
  { top: "20%", left: "44%", rotate: -1 },
  { top: "20%", left: "56%", rotate: 1 },
  { top: "20%", left: "67%", rotate: 3 },
  { top: "20%", left: "78%", rotate: 6 },

  // fila 3
  { top: "36%", left: "31%", rotate: -4 },
  { top: "36%", left: "43%", rotate: -2 },
  { top: "36%", left: "57%", rotate: 2 },
  { top: "36%", left: "69%", rotate: 4 },

  // fila 4
  { top: "52%", left: "38%", rotate: -3 },
  { top: "52%", left: "50%", rotate: 0 },
  { top: "52%", left: "62%", rotate: 3 },

  // fila 5
  { top: "68%", left: "44%", rotate: -2 },
  { top: "68%", left: "56%", rotate: 2 },

  // punta
  { top: "84%", left: "50%", rotate: 0 },
];

function MemoriesGallery({ photos }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const previousPhoto = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? photos.length - 1
        : current - 1;
    });
  };

  const nextPhoto = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === photos.length - 1
        ? 0
        : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === 0
            ? photos.length - 1
            : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === photos.length - 1
            ? 0
            : current + 1;
        });
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedIndex, photos.length]);

  return (
    <section
      id="memories-gallery"
      className="
        relative
        overflow-hidden
        bg-[#100717]
        px-4
        py-24
        md:px-6
        md:py-28
        lg:py-32
      "
    >
      {/* FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-700/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[-150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-700/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* CABECERA */}

        <motion.div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
            md:mb-20
            lg:mb-24
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
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-yellow-300/30" />

            <Sparkles
              size={16}
              className="text-yellow-300"
            />


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
            Nuestras Fotos
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
            un pedacito de nuestra historia
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
            Son solamente algunas fotos, pero cada una guarda un momento que
            me hace feliz volver a recordar con vos.
          </p>

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-yellow-200/35
            "
          >
            Tocá una foto para verla completa
          </p>
        </motion.div>

        {/* CELULAR + TABLET */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:gap-4
            md:grid-cols-3
            lg:hidden
          "
        >
          {photos.map((photo, index) => (
            <motion.button
              key={photo}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.02, 0.12),
                ease,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[16px]
                border
                border-white/[0.07]
                bg-[#1c0b29]
                shadow-lg
              "
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo}
                  alt={`Recuerdo ${index + 1}`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-300
                    group-hover:scale-[1.025]
                  "
                />
              </div>

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-purple-950/25
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  right-3
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fffaf0]/90
                  text-purple-800
                  opacity-0
                  shadow
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              >
                <Heart
                  size={14}
                  fill="currentColor"
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* PC - CORAZÓN */}

        <div className="hidden lg:block">
          <div
            className="
              relative
              mx-auto
              h-[820px]
              w-full
              max-w-[1000px]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[43%]
                h-[550px]
                w-[650px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-fuchsia-700/[0.05]
                blur-3xl
              "
            />

            {photos.slice(0, 20).map((photo, index) => {
              const position = heartPositions[index];

              return (
                <motion.button
                  key={photo}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.025, 0.25),
                    ease,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -6,
                    zIndex: 30,
                  }}
                  className="
                    group
                    absolute
                    z-10
                    w-[115px]
                    -translate-x-1/2
                    -translate-y-1/2
                    cursor-pointer
                    border-0
                    bg-transparent
                    p-0
                    xl:w-[128px]
                  "
                  style={{
                    top: position.top,
                    left: position.left,
                    rotate: `${position.rotate}deg`,
                  }}
                >
                  <div
                    className="
                      bg-[#fffaf0]
                      p-[6px]
                      pb-[18px]
                      shadow-xl
                      transition-shadow
                      duration-300
                      group-hover:shadow-2xl
                    "
                  >
                    <div className="aspect-square overflow-hidden bg-[#e8ded2]">
                      <img
                        src={photo}
                        alt={`Recuerdo ${index + 1}`}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-300
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                    <div className="flex h-[15px] items-end justify-center">
                      <Heart
                        size={9}
                        fill="currentColor"
                        className="
                          translate-y-[7px]
                          text-purple-900/20
                          transition
                          duration-300
                          group-hover:text-purple-700/60
                        "
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* CIERRE */}

        <motion.div
          className="
            mx-auto
            mt-14
            max-w-2xl
            text-center
            lg:mt-4
          "
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
        >
          <Heart
            className="mx-auto text-pink-300"
            size={18}
            fill="currentColor"
          />

          <p
            className="
              font-letter
              mt-5
              text-4xl
              text-white
              md:text-5xl
            "
          >
            Y todavía nos quedan miles por sacar.
          </p>
        </motion.div>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-black/90
              px-4
              py-6
              backdrop-blur-sm
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition
                hover:bg-white/20
                md:right-7
                md:top-7
              "
              aria-label="Cerrar imagen"
            >
              <X size={21} />
            </button>

            <button
              type="button"
              onClick={previousPhoto}
              className="
                absolute
                left-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition
                hover:bg-white/20
                md:left-7
                md:h-12
                md:w-12
              "
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={nextPhoto}
              className="
                absolute
                right-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition
                hover:bg-white/20
                md:right-7
                md:h-12
                md:w-12
              "
              aria-label="Foto siguiente"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={selectedPhoto}
              className="
                relative
                flex
                max-h-[90vh]
                max-w-[90vw]
                items-center
                justify-center
              "
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
                ease,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt={`Recuerdo ${selectedIndex + 1}`}
                className="
                  max-h-[85vh]
                  max-w-[88vw]
                  rounded-xl
                  object-contain
                  shadow-2xl
                "
              />
            </motion.div>

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-black/40
                px-4
                py-2
                text-xs
                tracking-[0.18em]
                text-white/60
              "
            >
              {String(selectedIndex + 1).padStart(2, "0")}
              {" / "}
              {String(photos.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MemoriesGallery;