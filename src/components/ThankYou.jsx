import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function ThankYou({ photos }) {
  return (
    <section
      id="thank-you"
      className="
        relative
        overflow-hidden
        bg-[#160920]
        px-5
        py-24
        md:py-32
      "
    >
      {/* FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-700/[0.10]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-100px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-700/[0.08]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* TÍTULO */}

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
            mb-16
            max-w-3xl
            text-center
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

            <Sparkles
              size={15}
              className="text-yellow-300"
            />

            <div className="h-px w-10 bg-yellow-300/25" />
          </div>

          <h2
            className="
              font-letter
              text-6xl
              text-white
              md:text-8xl
            "
          >
            Gracias
          </h2>

          <p
            className="
              font-elegant
              mt-4
              text-lg
              italic
              text-violet-200/55
              md:text-xl
            "
          >
            por volver a aparecer en mi vida
          </p>
        </motion.div>

        {/* CONTENIDO */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_1.1fr_1fr]
            lg:gap-10
          "
        >
          {/* FOTO 1 */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              rotate: -4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -4,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className="
              mx-auto
              w-full
              max-w-[340px]
            "
          >
            <div
              className="
                bg-[#fffaf0]
                px-3
                pb-8
                pt-3
                shadow-2xl
              "
            >
              <div className="overflow-hidden bg-[#e8dfd5]">
                <img
                  src={photos[0]}
                  alt="Nuestro recuerdo"
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                  "
                />
              </div>

              <p
                className="
                  font-letter
                  mt-4
                  text-center
                  text-2xl
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
              y: 25,
            }}
            whileInView={{
              opacity: 1,
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
            className="
              mx-auto
              max-w-xl
              text-center
            "
          >
            <Heart
              size={19}
              fill="currentColor"
              className="
                mx-auto
                mb-7
                text-pink-300
              "
            />

            <div
              className="
                font-elegant
                space-y-5
                text-lg
                leading-8
                text-violet-100/70
                md:text-xl
              "
            >
              <p>
                Gracias por aparecer de nuevo en mi vida.
              </p>

              <p>
                Te convertiste en una de las personas mas importantes para mi.
              </p>

              <p>
                Desde que estas en mi vida, todo es mas bonito.
              </p>

              <p>
                Voy agradecer siempre que la vida nos haya juntado de nuevo.
              </p>

              <p>
                Y ya te lo dije muchas veces, pero me haces muy feliz, sos mi
                motorcito.
              </p>
            </div>

            <div
              className="
                mx-auto
                mt-8
                flex
                max-w-[180px]
                items-center
                gap-3
              "
            >
              <div className="h-px flex-1 bg-yellow-300/20" />

              <Heart
                size={13}
                fill="currentColor"
                className="text-yellow-200/70"
              />

              <div className="h-px flex-1 bg-yellow-300/20" />
            </div>
          </motion.div>

          {/* FOTO 2 */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              rotate: 4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 4,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: 0.12,
              ease,
            }}
            className="
              mx-auto
              w-full
              max-w-[340px]
            "
          >
            <div
              className="
                bg-[#fffaf0]
                px-3
                pb-8
                pt-3
                shadow-2xl
              "
            >
              <div className="overflow-hidden bg-[#e8dfd5]">
                <img
                  src={photos[1]}
                  alt="Nuestro recuerdo"
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                  "
                />
              </div>

              <p
                className="
                  font-letter
                  mt-4
                  text-center
                  text-2xl
                  text-purple-950
                "
              >
                mi motorcito ♡
              </p>
            </div>
          </motion.div>
        </div>

        {/* CIERRE */}

        <motion.div
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
            duration: 0.5,
            delay: 0.15,
            ease,
          }}
          className="
            mt-24
            text-center
          "
        >
          <p
            className="
              font-letter
              text-3xl
              text-violet-300/70
              md:text-4xl
            "
          >
            Y esto recién empieza...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ThankYou;