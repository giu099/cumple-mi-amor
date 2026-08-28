import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, RotateCcw, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function ThingsILove({ photos }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const cards = [
    {
      title: "Nuestras risas",
      image: photos[0],
      text:
        "Amo esos momentos en los que nos reímos de cualquier cosa y terminamos abrazados, mirándonos en silencio y disfrutando de estar juntos.",
      rotation: -2,
    },

    {
      title: "Cómo somos juntos",
      image: photos[1],
      text:
        "Me encanta que con vos puedo ser yo mismo, sin pensar demasiado, y sentirme cómodo simplemente estando a tu lado.",
      rotation: 2,
    },

    {
      title: "Los momentos simples",
      image: photos[2],
      text:
        "No importa el plan que hagamos, sabiendo que voy a verte, soy el chico más feliz del mundo y nada se compara con la tranquilidad que me das.",
      rotation: -2,
    },

    {
      title: "Lo que construimos",
      image: photos[3],
      text:
        "Me encanta mirar todo lo que ya vivimos y pensar que esto es solamente una pequeña parte de todo lo que todavía nos queda por vivir.",
      rotation: 2,
    },
  ];

  const handleCardClick = (index) => {
    setFlippedCard((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="things-i-love"
      className="
        relative
        overflow-hidden
        bg-[#0f0616]
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
          left-[-180px]
          top-[25%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/[0.08]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[55%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-700/[0.06]
          blur-3xl
        "
      />

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
            mb-16
            max-w-3xl
            text-center
            md:mb-20
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

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-yellow-200/65
              "
            >
              Pequeñas cosas
            </p>

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
            Lo que más amo
          </h2>

          <p
            className="
              font-letter
              mt-1
              text-4xl
              text-violet-300
              md:text-5xl
            "
          >
            de nosotros
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
            Cuatro pequeños recuerdos y cuatro razones por las que amo
            compartir mi vida con vos.
          </p>

          <p
            className="
              mt-5
              text-xs
              uppercase
              tracking-[0.32em]
              text-yellow-200/55
            "
          >
            Tocá cada foto para descubrir el mensaje
          </p>
        </motion.div>

        {/* =========================================
            CARDS
        ========================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            grid-cols-1
            gap-10
            md:grid-cols-2
            md:gap-x-16
            md:gap-y-12
          "
        >
          {cards.map((card, index) => {
            const isFlipped = flippedCard === index;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: index * 0.06,
                  ease,
                }}
                className="
                  mx-auto
                  h-[490px]
                  w-full
                  max-w-[365px]
                  cursor-pointer
                  [perspective:1200px]
                "
                onClick={() => handleCardClick(index)}
              >
                {/* CONTENEDOR QUE GIRA */}

                <motion.div
                  animate={{
                    rotateY: isFlipped ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease,
                  }}
                  className="
                    relative
                    h-full
                    w-full
                    [transform-style:preserve-3d]
                  "
                >
                  {/* =================================
                      FRENTE
                  ================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#fffaf0]
                      p-4
                      pb-6
                      shadow-2xl
                      [backface-visibility:hidden]
                    "
                    style={{
                      transform: `rotate(${card.rotation}deg)`,
                    }}
                  >
                    {/* FOTO */}

                    <div
                      className="
                        relative
                        h-[385px]
                        overflow-hidden
                        bg-[#e8dfd5]
                      "
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                        "
                      />

                      {/* CORAZÓN */}

                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          shadow-lg
                        "
                      >
                        <Heart
                          size={18}
                          fill="currentColor"
                          className="text-purple-700"
                        />
                      </div>
                    </div>

                    {/* TÍTULO */}

                    <div className="text-center">
                      <p
                        className="
                          font-letter
                          mt-4
                          text-3xl
                          text-purple-900
                        "
                      >
                        {card.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-purple-400/60
                        "
                      >
                        Tocá para descubrir
                      </p>
                    </div>
                  </div>

                  {/* =================================
                      DORSO
                  ================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      rounded-sm
                      border
                      border-violet-300/10
                      bg-gradient-to-br
                      from-[#351244]
                      via-[#281033]
                      to-[#19091f]
                      px-8
                      py-8
                      shadow-2xl
                      [backface-visibility:hidden]
                      [transform:rotateY(180deg)]
                    "
                  >
                    {/* ESQUINAS DECORATIVAS */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        h-10
                        w-10
                        border-l
                        border-t
                        border-yellow-300/25
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        h-10
                        w-10
                        border-b
                        border-r
                        border-yellow-300/25
                      "
                    />

                    <div
                      className="
                        flex
                        h-full
                        flex-col
                        items-center
                        justify-center
                        text-center
                      "
                    >
                      {/* CORAZÓN */}

                      <Heart
                        size={19}
                        fill="currentColor"
                        className="
                          mb-7
                          text-pink-300
                        "
                      />

                      {/* DECORACIÓN */}

                      <div
                        className="
                          mb-6
                          flex
                          items-center
                          justify-center
                          gap-3
                        "
                      >
                        <div className="h-px w-8 bg-yellow-300/30" />

                        <Sparkles
                          size={14}
                          className="text-yellow-300"
                        />

                        <div className="h-px w-8 bg-yellow-300/30" />
                      </div>

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
                        {card.title}
                      </h3>

                      {/* TEXTO */}

                      <p
                        className="
                          font-elegant
                          mt-8
                          text-lg
                          leading-7
                          text-violet-100/75
                        "
                      >
                        {card.text}
                      </p>

                      {/* VOLVER */}

                      <div
                        className="
                          mt-9
                          flex
                          items-center
                          justify-center
                          gap-2
                          text-violet-200/35
                        "
                      >
                        <RotateCcw size={14} />

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                          "
                        >
                          Tocá para volver
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            FRASE FINAL
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
            delay: 0.1,
            ease,
          }}
          className="
            mt-24
            text-center
          "
        >
          <Heart
            size={16}
            fill="currentColor"
            className="
              mx-auto
              mb-5
              text-pink-300
            "
          />

          <p
            className="
              font-letter
              text-3xl
              text-white
              md:text-4xl
            "
          >
            Pero mi parte favorita siempre sos vos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ThingsILove;