import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function WhyYou({ photos }) {
  const reasons = [
    {
      title: "Porque con vos puedo ser yo",

      text:
        "No siento que tenga que pensar demasiado lo que digo o cómo actúo. Con vos puedo simplemente ser yo, y eso es algo que valoro muchísimo. Nunca fui de esta manera con nadie y me siento muy comodo siendo yo mismo con vos. ",

      image: photos[0],

      objectPosition: "50% 45%",
    },

    {
      title: "Porque hacés especial lo simple",

      text:
        "No importa demasiado dónde estemos ni qué estemos haciendo. Incluso los momentos más normales terminan convirtiéndose en recuerdos que quiero llevar conmigo siempre.",

      image: photos[1],

      objectPosition: "50% 45%",
    },

    {
      title: "Lo que me haces sentir",

      text:
        "Me haces sentir querido, seguro, comodo y tranquilo. Siempre que estoy mal un simple abrazo tuyo me envuelve el alma y me sana todo. Tus besos, tus mimos, tus te amo, tu sonrisa, no las cambiaria por nada.",

      image: photos[2],

      objectPosition: "62% 45%",
    },

    {
      title: "¿Por que vos?",

      text:
        "Porque llegaste a mi vida de una manera diferente, despacio y con amor. Porque mas alla de las peleas y discusiones siempre supimos seguir adelante y seguir eligiendonos el uno al otro. Porque con una sonrisa me alegras los dias. Porque no hay nadie mas atenta y cariñosa que vos. Porque con solo un abrazo calmas todo. Podria seguir escribiendo muchisimas razones, pero al final siempre termino llegando a la misma respuesta: te eligiria simplemente porque sos vos. ",

      image: photos[3],

      objectPosition: "50% 45%",
    },
  ];

  return (
    <section
      id="why-you"
      className="
        relative
        overflow-hidden
        bg-[#100717]
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
          left-[-150px]
          top-[15%]
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

      <div className="relative mx-auto max-w-6xl">
        {/* =========================================
            CABECERA
        ========================================== */}

        <motion.div
          className="
            mx-auto
            mb-16
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

            <Heart
              size={15}
              fill="currentColor"
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
              Entre todas las personas
            </p>

            <div className="h-px w-10 bg-yellow-300/30" />
          </div>

          <h2
            className="
              font-letter
              text-6xl
              text-white
              md:text-8xl
            "
          >
            ¿Por qué vos?
          </h2>

          <p
            className="
              font-elegant
              mt-2
              text-2xl
              italic
              text-violet-300/80
              md:text-3xl
            "
          >
            Porque no puede ser de otra manera
          </p>

          <p
            className="
              font-elegant
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-violet-100/55
            "
          >
            A veces me pregunto qué fue lo que hizo que fueras vos.
            Y cuanto más lo pienso, más razones encuentro.
          </p>
        </motion.div>

        {/* =========================================
            RAZONES
        ========================================== */}

        <div className="space-y-20 md:space-y-28">
          {reasons.map((reason, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <motion.article
                key={reason.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
                className="
                  grid
                  items-center
                  gap-9
                  md:grid-cols-2
                  md:gap-16
                "
              >
                {/* =================================
                    FOTO
                ================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageLeft ? -25 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className={
                    imageLeft
                      ? ""
                      : "md:order-2"
                  }
                >
                  <div
                    className="
                      group
                      relative
                      mx-auto
                      max-w-[430px]
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/[0.07]
                      bg-[#1c0b29]
                      shadow-xl
                    "
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        loading="lazy"
                        style={{
                          objectPosition:
                            reason.objectPosition,
                        }}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-[1.025]
                        "
                      />
                    </div>

                    {/* DEGRADADO */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-purple-950/40
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* CORAZÓN FOTO */}

                    <Heart
                      size={18}
                      fill="currentColor"
                      className="
                        absolute
                        bottom-5
                        right-5
                        text-pink-200
                      "
                    />
                  </div>
                </motion.div>

                {/* =================================
                    TEXTO
                ================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageLeft ? 25 : -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.05,
                    ease,
                  }}
                  className={
                    imageLeft
                      ? ""
                      : "md:order-1 md:text-right"
                  }
                >
                  {/* =================================
                      LÍNEAS + CORAZÓN
                  ================================== */}

                  <div
                    className="
                      mb-1
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        h-px
                        w-12
                        bg-yellow-300/30
                      "
                    />

                    <Heart
                      size={14}
                      fill="currentColor"
                      className="
                        text-pink-300
                      "
                    />

                    <div
                      className="
                        h-px
                        w-12
                        bg-yellow-300/30
                      "
                    />
                  </div>

                  {/* TÍTULO */}

                  <h3
                    className="
                      font-letter
                      text-center
                      text-4xl
                      leading-tight
                      text-white
                      md:text-5xl
                    "
                  >
                    {reason.title}
                  </h3>

                  {/* TEXTO */}

                  <p
                    className="
                      font-elegant
                      mt-6
                      text-justify
                      text-lg
                      leading-8
                      text-violet-100/65
                      md:text-xl
                    "
                  >
                    {reason.text}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            CIERRE
        ========================================== */}

        <motion.div
          className="
            mx-auto
            mt-28
            max-w-3xl
            text-center
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
            size={20}
            fill="currentColor"
            className="
              mx-auto
              text-pink-300
            "
          />

          <p
            className="
              font-letter
              mt-5
              text-4xl
              text-white
              md:text-6xl
            "
          >
            Si tuviera que elegir otra vez...
          </p>

          <p
            className="
              font-letter
              mt-2
              text-5xl
              text-violet-300
              md:text-7xl
            "
          >
            volverías a ser vos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyYou;