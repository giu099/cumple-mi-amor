import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function BestMemories({ photos }) {
  const memories = [
    {
      title: "La primera vez que nos juntamos",
      text:
        "Nunca me voy a olvidar de la primera vez que nos juntamos a tomar mates, solos, nosotros 2. Ese día volví a mi casa demasiado contento. No podía entender cómo algo tan simple me hacía tan feliz, pero después me di cuenta de que había algo más, y ese algo más eras vos. Le agregás ese color, esa esencia, ese toque tuyo que hace que todo lo que haga con vos sea mas lindo.",
      image: photos[0],
      caption: "El comienzo de algo más ♡",
      rotation: -2,
    },

    {
      title: "La primera vez que fui a tu casa",
      text:
        "También me acuerdo de la primera vez que fui a tu casa, de lo nerviosos que estábamos los dos. Yo tenía miedo porque no sabía cómo les iba a caer a tus papás, pero dentro de todo salió bien.",
      image: photos[1],
      caption: "♡",
      rotation: 2,
    },

    {
      title: "Cuando te pedí que fueras mi novia",
      text:
        "Y también de cuando te pedí que fueras mi novia. Fue la mejor decision que pude haber tomado. Estaba tan nervioso y tan ansioso por que todo saliera como lo había planeado, que los días anteriores no podía dormir de la emoción. Queria que cada detalle este perfecto para poder ver esa sonrisa tan bonita que tenes. Me encanta poder decir que sos mi novia",
      image: photos[2],
      caption: "El día que empezamos a ser nosotros ♡",
      rotation: -2,
    },
  ];

  return (
    <section
      id="best-memories"
      className="
        relative
        overflow-hidden
        bg-[#14081d]
        px-5
        py-24
        md:py-32
      "
    >
      {/* =========================================
          FONDO
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/[0.09]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[55%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-700/[0.07]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-700/[0.06]
          blur-3xl
        "
      />

      {/* ESTRELLAS DECORATIVAS */}

      <span className="pointer-events-none absolute left-[9%] top-[14%] text-yellow-200/25">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[12%] top-[27%] text-violet-200/25">
        ✧
      </span>

      <span className="pointer-events-none absolute bottom-[18%] left-[14%] text-yellow-200/20">
        ✦
      </span>

      <div className="relative mx-auto max-w-6xl">
        {/* =========================================
            CABECERA
        ========================================== */}

        <motion.div
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
          className="
            mx-auto
            mb-24
            max-w-3xl
            text-center
            md:mb-32
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <div className="h-px w-10 bg-yellow-300/25" />

            <Heart
              size={15}
              fill="currentColor"
              className="text-pink-300"
            />

            <div className="h-px w-10 bg-yellow-300/25" />
          </div>

          <h2
            className="
              font-letter
              text-6xl
              leading-tight
              text-white
              md:text-8xl
            "
          >
            Nuestros mejores
          </h2>

          <p
            className="
              font-letter
              mt-1
              text-5xl
              text-violet-300
              md:text-7xl
            "
          >
            recuerdos
          </p>

          <p
            className="
              font-elegant
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-violet-100/60
              md:text-xl
            "
          >
            Hay momentos que pasan, pero hay unos que quiero que se queden para siempre
            con nosotros. Estos son algunos de los que nunca quiero olvidar.
          </p>
        </motion.div>

        {/* =========================================
            RECUERDOS
        ========================================== */}

        <div className="space-y-32 md:space-y-40">
          {memories.map((memory, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <div
                key={memory.title}
                className="
                  relative
                  grid
                  items-center
                  gap-12
                  lg:grid-cols-2
                  lg:gap-24
                "
              >
                {/* =================================
                    FOTO
                ================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageOnLeft ? -35 : 35,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    ease,
                  }}
                  className={`
                    flex
                    justify-center

                    ${
                      imageOnLeft
                        ? "lg:order-1 lg:justify-end"
                        : "lg:order-2 lg:justify-start"
                    }
                  `}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      w-full
                      max-w-[430px]
                      bg-[#fffaf0]
                      p-2.5
                      pb-6
                      shadow-2xl
                    "
                    style={{
                      rotate: `${memory.rotation}deg`,
                    }}
                  >
                    {/* FOTO COMPLETA */}

                    <div
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        bg-[#e8dfd5]
                      "
                    >
                      <img
                        src={memory.image}
                        alt={memory.title}
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

                    {/* TEXTO DE LA POLAROID */}

                    <p
                      className="
                        font-letter
                        mt-4
                        text-center
                        text-2xl
                        text-purple-950
                        md:text-3xl
                      "
                    >
                      {memory.caption}
                    </p>
                  </motion.div>
                </motion.div>

                {/* =================================
                    TEXTO
                ================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageOnLeft ? 35 : -35,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08,
                    ease,
                  }}
                  className={`
                    mx-auto
                    max-w-lg
                    text-center

                    ${
                      imageOnLeft
                        ? "lg:order-2 lg:mx-0 lg:text-left"
                        : "lg:order-1 lg:ml-auto lg:mr-0 lg:text-right"
                    }
                  `}
                >
                  {/* TÍTULO */}

                  <h3
                    className="
                      font-letter
                      text-4xl
                      leading-tight
                      text-white
                      md:text-5xl
                    "
                  >
                    {memory.title}
                  </h3>

                  {/* TEXTO */}

                  <p
                    className="
                      font-elegant
                      mt-7
                      text-lg
                      leading-8
                      text-violet-100/70
                      md:text-xl
                    "
                  >
                    {memory.text}
                  </p>

                  {/* DECORACIÓN */}

                  <div
                    className={`
                      mt-8
                      flex
                      items-center
                      justify-center
                      gap-3

                      ${
                        imageOnLeft
                          ? "lg:justify-start"
                          : "lg:justify-end"
                      }
                    `}
                  >
                    <div className="h-px w-14 bg-yellow-300/25" />

                    <Heart
                      size={13}
                      fill="currentColor"
                      className="text-pink-300/80"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            CIERRE
        ========================================== */}

        <motion.div
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
          className="
            mx-auto
            mt-32
            max-w-3xl
            text-center
            md:mt-40
          "
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
              mt-6
              text-4xl
              leading-tight
              text-white
              md:text-5xl
            "
          >
            Y todavía nos quedan
          </p>

          <p
            className="
              font-letter
              mt-1
              text-4xl
              leading-tight
              text-violet-300
              md:text-5xl
            "
          >
            muchísimos más por vivir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BestMemories;