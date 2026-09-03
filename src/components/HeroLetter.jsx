import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import SunFlowerSeal from "./SunFlowerSeal";

const ease = [0.22, 1, 0.36, 1];

function HeroLetter({
  phase,
  onOpen,
  firstPhoto,
}) {
  const isClosed = phase === "closed";
  const isOpening = phase === "opening";
  const isOpened = phase === "opened";

  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#100717]
        px-5
        py-16
      "
    >
      {/* =========================================
          FONDO
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[15%]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.12]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-120px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-700/[0.08]
          blur-3xl
        "
      />

      {/* =========================================
          ESTRELLAS DEL FONDO
      ========================================== */}

      <span
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[18%]
          text-sm
          text-yellow-200/30
        "
      >
        ✦
      </span>

      <span
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[25%]
          text-lg
          text-violet-200/25
        "
      >
        ✧
      </span>

      <span
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[17%]
          text-sm
          text-yellow-200/20
        "
      >
        ✦
      </span>

      <span
        className="
          pointer-events-none
          absolute
          bottom-[25%]
          right-[12%]
          text-xs
          text-violet-200/25
        "
      >
        ✧
      </span>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          items-center
          justify-center
        "
      >
        {/* =====================================================
            SOBRE CERRADO / ABRIENDO
        ====================================================== */}

        {(isClosed || isOpening) && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: isOpening ? 0 : 1,
              y: isOpening ? -15 : 0,
              scale: isOpening ? 1.03 : 1,
            }}
            transition={{
              duration: isOpening ? 0.85 : 0.45,
              ease,
            }}
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {/* SOBRE */}

            <motion.button
              type="button"
              onClick={onOpen}
              disabled={!isClosed}
              whileHover={
                isClosed
                  ? {
                      y: -4,
                      scale: 1.01,
                    }
                  : {}
              }
              whileTap={
                isClosed
                  ? {
                      scale: 0.98,
                    }
                  : {}
              }
              className="
                group
                relative
                w-full
                max-w-[620px]
                cursor-pointer
                border-0
                bg-transparent
                p-0
              "
              aria-label="Abrir carta"
            >
              {/* sombra */}

              <div
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  h-12
                  w-[80%]
                  -translate-x-1/2
                  rounded-full
                  bg-black/35
                  blur-2xl
                "
              />

              {/* cuerpo del sobre */}

              <div
                className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-violet-200/10
                  bg-gradient-to-br
                  from-[#ddc9ed]
                  via-[#c8a9df]
                  to-[#aa7dcc]
                  shadow-2xl
                "
              >
                {/* textura */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/20
                    via-transparent
                    to-purple-950/10
                  "
                />

                {/* luz detrás del sello */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[42%]
                    h-[220px]
                    w-[220px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-yellow-100/[0.06]
                    blur-2xl
                  "
                />

                {/* flap superior */}

                <motion.div
                  animate={{
                    y: isOpening ? -35 : 0,
                    opacity: isOpening ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-[57%]
                    w-full
                    origin-top
                    bg-[#d7bfe8]
                    [clip-path:polygon(0_0,100%_0,50%_100%)]
                  "
                />

                {/* triángulo izquierda */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[72%]
                    w-[55%]
                    bg-[#c8a7df]
                    [clip-path:polygon(0_0,100%_100%,0_100%)]
                  "
                />

                {/* triángulo derecha */}

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-[72%]
                    w-[55%]
                    bg-[#b995d4]
                    [clip-path:polygon(100%_0,100%_100%,0_100%)]
                  "
                />

                {/* parte frontal */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[58%]
                    w-full
                    bg-[#c3a2db]
                    [clip-path:polygon(0_0,50%_65%,100%_0,100%_100%,0_100%)]
                  "
                />

                {/* sello original */}

                <motion.div
                  animate={{
                    opacity: isOpening ? 0 : 1,
                    scale: isOpening ? 0.85 : 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-[53%]
                    z-20
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <SunFlowerSeal
                    opening={isOpening}
                  />
                </motion.div>

                {/* texto inferior */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-6
                    left-1/2
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                  "
                >
                  <p
                    className="
                      font-elegant
                      text-sm
                      italic
                      text-purple-950/55
                      sm:text-base
                    "
                  >
                    Tocá el sello para abrir
                  </p>
                </div>
              </div>
            </motion.button>

            {/* TEXTO DE ABAJO */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.4,
              }}
              className="
                font-letter
                mt-9
                text-3xl
                text-violet-200/70
                sm:text-4xl
              "
            >
              Una pequeña parte de nosotros ♡
            </motion.p>
          </motion.div>
        )}

        {/* =====================================================
            CARTA ABIERTA
        ====================================================== */}

        {isOpened && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="
              grid
              w-full
              items-center
              gap-12
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-16
            "
          >
            {/* FOTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease,
              }}
              className="
                mx-auto
                w-full
                max-w-[430px]
              "
            >
              <div
                className="
                  rotate-[-2deg]
                  bg-[#fffaf0]
                  px-4
                  pb-9
                  pt-4
                  shadow-2xl
                "
              >
                <div
                  className="
                    overflow-hidden
                    bg-[#eadfd4]
                  "
                >
                  <img
                    src={firstPhoto}
                    alt="Nuestro recuerdo"
                    className="
                      block
                      h-auto
                      max-h-[580px]
                      w-full
                      object-contain
                    "
                  />
                </div>

                <p
                  className="
                    font-letter
                    mt-5
                    text-center
                    text-3xl
                    text-purple-950
                  "
                >
                  nosotros ♡
                </p>
              </div>
            </motion.div>

            {/* TEXTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.12,
                ease,
              }}
              className="
                mx-auto
                max-w-2xl
                text-center
                lg:text-left
              "
            >
              <h1
                className="
                  font-letter
                  text-5xl
                  leading-tight
                  text-white
                  md:text-7xl
                "
              >
                Feliz cumpleaños,
              </h1>

              <p
                className="
                  font-letter
                  mt-1
                  text-4xl
                  text-violet-300
                  md:text-5xl
                "
              >
                mi amor.
              </p>

              {/* TU TEXTO */}

              <div
                className="
                  font-elegant
                  mt-7
                  space-y-5
                  text-lg
                  leading-8
                  text-violet-100/65
                  md:text-xl
                "
              >
                <p>
                  Quería regalarte algo diferente.
                </p>

                <p>
                  Algo que no fuera solamente una carta, sino algo que puedas
                  volver a ver cada vez que quieras; un lugar donde estén
                  guardados algunos de nuestros recuerdos más hermosos y que,
                  sobre todo, también pueda mostrar todo lo lindo que tenemos.
                </p>

                <p>
                  Hice esto porque te amo muchísimo y porque quería recordar
                  todo lo que vivimos juntos hasta este momento.
                </p>

                <p>
                  Y no puedo evitar emocionarme al pensar en todo lo que ya
                  vivimos y, especialmente, en todo lo que todavía nos queda
                  por vivir.
                </p>
              </div>

              {/* separador */}

              <div
                className="
                  mx-auto
                  mt-7
                  flex
                  max-w-[180px]
                  items-center
                  gap-3
                  lg:mx-0
                "
              >
              </div>

              <p
                className="
                  font-letter
                  mt-5
                  text-3xl
                  text-yellow-100/80
                  md:text-4xl
                "
              >
                Con todo mi amor. ♡
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default HeroLetter;