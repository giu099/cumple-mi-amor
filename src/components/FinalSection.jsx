import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function FinalSection({ photos }) {
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const launchConfetti = () => {
    if (showFinalMessage) return;

    setShowFinalMessage(true);

    confetti({
      particleCount: 90,
      spread: 80,
      origin: {
        y: 0.7,
      },
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 65,
        origin: {
          x: 0,
          y: 0.65,
        },
      });

      confetti({
        particleCount: 60,
        angle: 120,
        spread: 65,
        origin: {
          x: 1,
          y: 0.65,
        },
      });
    }, 250);
  };

  const polaroids = [
    {
      image: photos[0],
      caption: "vos",
      rotation: -3,
      offset: false,
    },
    {
      image: photos[1],
      caption: "y yo",
      rotation: 2,
      offset: true,
    },
    {
      image: photos[2],
      caption: "nosotros",
      rotation: -2,
      offset: true,
    },
    {
      image: photos[3],
      caption: "siempre",
      rotation: 3,
      offset: false,
    },
  ];

  return (
    <section
      id="final-section"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0d0513]
        px-4
        py-24
        md:px-6
        md:py-32
      "
    >
      {/* FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[600px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.12]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-fuchsia-700/[0.08]
          blur-3xl
        "
      />

      <div className="pointer-events-none absolute left-[10%] top-[16%] text-yellow-200/30">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[28%] text-violet-200/30">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-[22%] left-[15%] text-yellow-200/20">
        ✦
      </div>

      <div className="relative mx-auto max-w-[1550px]">
        {/* CABECERA */}

        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.5,
            ease,
          }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-yellow-300/30" />

            <Sparkles
              size={16}
              className="text-yellow-300"
            />


            <div className="h-px w-10 bg-yellow-300/30" />
          </div>

          <h2 className="font-letter text-6xl leading-tight text-white md:text-8xl">
            Feliz cumpleaños,
          </h2>

          <p className="font-letter mt-1 text-5xl text-violet-300 md:text-7xl">
            mi amor.
          </p>

          <p className="font-elegant mx-auto mt-7 max-w-2xl text-lg leading-8 text-violet-100/55 md:text-xl">
            Quería que este regalo fuera algo que pudieras volver a mirar
            cuando quieras y recordar lo importante que sos para mí.
          </p>
        </motion.div>

        {/* POLAROIDS */}

        <div
          className="
            relative
            mx-auto
            flex
            w-full
            flex-wrap
            items-start
            justify-center
            gap-6
            md:gap-7
            xl:flex-nowrap
          "
        >
          {polaroids.map((photo, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                rotate: photo.rotation,
              }}
              whileInView={{
                opacity: 1,
                y: photo.offset ? 18 : 0,
                rotate: photo.rotation,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease,
              }}
              whileHover={{
                scale: 1.025,
                rotate: 0,
              }}
              className="
                w-[46%]
                max-w-[380px]
                bg-[#fffaf0]
                p-2
                pb-5
                shadow-2xl

                sm:w-[44%]

                md:w-[350px]
                md:max-w-none

                lg:w-[370px]

                xl:w-[345px]
              "
            >
              {/* FOTO COMPLETA */}

              <div
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#e9e0d6]
                "
              >
                <img
                  src={photo.image}
                  alt={photo.caption}
                  loading="lazy"
                  className="
                    block
                    h-auto
                    max-h-[520px]
                    w-full
                    object-contain
                  "
                />
              </div>

              {/* CAPTION */}

              <div
                className="
                  flex
                  min-h-[44px]
                  items-center
                  justify-center
                "
              >
                <p
                  className="
                    font-letter
                    mt-2
                    text-center
                    text-2xl
                    text-purple-950
                    md:text-3xl
                  "
                >
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MENSAJE */}

        <motion.div
          className="
            mx-auto
            mt-28
            max-w-3xl
            text-center
            md:mt-36
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
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
        >
          <Heart
            size={20}
            fill="currentColor"
            className="mx-auto text-pink-300"
          />

          <p className="font-elegant mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100/65 md:text-xl">
            Espero poder seguir estando en muchos de tus cumpleaños,
            seguir acompañándote, viéndote crecer, riéndome con vos y
            creando miles de recuerdos que algún día podamos mirar como
            miramos estos.
          </p>

          <p className="font-elegant mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100/65 md:text-xl">
            Gracias por dejarme formar parte de tu vida y por convertirte
            en una parte tan importante de la mía.
          </p>

          {/* BOTÓN FINAL */}

          {!showFinalMessage && (
            <motion.button
              type="button"
              onClick={launchConfetti}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-yellow-300/25
                bg-gradient-to-r
                from-purple-700/50
                to-fuchsia-700/40
                px-7
                py-4
                font-elegant
                text-lg
                text-white
                shadow-xl
                transition
                hover:border-yellow-300/40
              "
            >
              <Sparkles
                size={17}
                className="text-yellow-300"
              />

              Una última cosa...
            </motion.button>
          )}

          {/* MENSAJE FINAL */}

          <AnimatePresence>
            {showFinalMessage && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease,
                }}
                className="
                  mx-auto
                  mt-14
                  max-w-3xl
                "
              >
                <div
                  className="
                    mx-auto
                    mb-7
                    flex
                    items-center
                    justify-center
                    gap-4
                  "
                >
                  <div className="h-px w-14 bg-yellow-300/25" />

                  <Heart
                    size={17}
                    fill="currentColor"
                    className="text-yellow-300"
                  />

                  <div className="h-px w-14 bg-yellow-300/25" />
                </div>

                <p className="font-letter text-5xl leading-tight text-white md:text-7xl">
                  Te amo.
                </p>

                <p className="font-letter mt-3 text-4xl leading-tight text-violet-300 md:text-6xl">
                  Hoy, mañana
                </p>

                <p className="font-letter text-4xl leading-tight text-violet-300 md:text-6xl">
                  y todos los días de mi vida.
                </p>

                <p className="font-elegant mx-auto mt-8 max-w-xl text-lg italic leading-8 text-violet-100/50">
                  Feliz cumpleaños, hermosa. Espero que te haya gustado mucho este regalito mio.
                </p>

                <p className="font-letter mt-10 text-3xl text-yellow-200/80 md:text-4xl">
                  Para vos, con todo mi amor. ♡
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalSection;