import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import SectionHeartDivider from "./SectionHeartDivider";

const ease = [0.22, 1, 0.36, 1];

function LoveTimeline({ photos }) {
  const moments = [
    {
      title: "Todo empezó en marzo",
      text:
        "Al principio no sabía todo lo que ibas a terminar significando para mí. Solo sabía que había algo en vos que hacía que quisiera conocerte un poquito más cada día.",
      caption: "El comienzo de algo hermoso",
      image: photos[0],
      aspect: "aspect-[16/9]",
      maxWidth: "max-w-[480px]",
    },

    {
      title: "Empecé a elegir cada momento con vos",
      text:
        "Con el tiempo empecé a darme cuenta de lo mucho que disfrutaba estar con vos. Las charlas, las risas, las miradas, las sonrisas y hasta los momentos más simples tomaban color estando con vos.",
      caption: "Cada vez un poquito más",
      image: photos[1],
      aspect: "aspect-[4/3]",
      maxWidth: "max-w-[430px]",
    },

    {
      title: "Y terminé enamorándome de vos",
      text:
        "En algún momento dejaste de ser solo una personita especial y pasaste a ser la persona que quería que esté a mi lado siempre. Y me alegra muchísimo decir que una chica tan increíble, bonita y buena como vos, sea mi novia.",
      caption: "Y apareciste vos",
      image: photos[2],
      aspect: "aspect-[3/4]",
      maxWidth: "max-w-[350px]",
    },
  ];

  return (
    <section
      id="love-timeline"
      className="
        relative
        overflow-hidden
        bg-[#120719]
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
          top-[20%]
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
            mb-24
            max-w-3xl
            text-center
            md:mb-28
          "
        >
          {/* etiqueta */}

          <SectionHeartDivider />

          {/* título */}

          <h2
            className="
              font-letter
              text-6xl
              leading-tight
              text-white
              md:text-8xl
            "
          >
            Cómo me enamoré
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
            de vos
          </p>

          {/* TU TEXTO */}

          <p
            className="
              font-elegant
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-violet-100/65
              md:text-xl
            "
          >
            Desde la primera vez que te vi, quise que fueras vos y me lo
            confirmaste a medida que te iba conociendo.
          </p>
        </motion.div>

        {/* =========================================
            TIMELINE
        ========================================== */}

        <div className="relative">
          {/* línea central - escritorio */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-yellow-300/25
              to-transparent
              lg:block
            "
          />

          {/* =====================================
              MOMENTO 1
          ====================================== */}

          <div
            className="
              relative
              grid
              items-center
              gap-12
              pb-32
              lg:grid-cols-2
              lg:gap-24
              lg:pb-40
            "
          >
            {/* FOTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
                duration: 0.5,
                ease,
              }}
              className="
                flex
                justify-center
                lg:justify-end
              "
            >
              <div
                className={`
                  w-full
                  ${moments[0].maxWidth}
                  rotate-[-2deg]
                  bg-[#fffaf0]
                  px-3
                  pb-8
                  pt-3
                  shadow-2xl
                `}
              >
                <div
                  className={`
                    ${moments[0].aspect}
                    overflow-hidden
                    bg-[#e8dfd5]
                  `}
                >
                  <img
                    src={moments[0].image}
                    alt={moments[0].caption}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />
                </div>

                <p
                  className="
                    font-letter
                    mt-5
                    text-center
                    text-3xl
                    text-purple-900
                  "
                >
                  {moments[0].caption}
                </p>
              </div>
            </motion.div>

            {/* punto */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                hidden
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-yellow-300
                shadow-[0_0_12px_rgba(253,224,71,0.8)]
                lg:block
              "
            />

            {/* TEXTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                duration: 0.5,
                delay: 0.08,
                ease,
              }}
              className="
                mx-auto
                max-w-lg
                text-center
                lg:mx-0
                lg:text-left
              "
            >
              <h3
                className="
                  font-letter
                  text-4xl
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >
                {moments[0].title}
              </h3>

              <p
                className="
                  font-elegant
                  mt-7
                  text-lg
                  leading-8
                  text-violet-100/65
                  md:text-xl
                "
              >
                {moments[0].text}
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-3
                  lg:justify-start
                "
              >
                <div className="h-px w-12 bg-yellow-300/25" />

                <Heart
                  size={14}
                  fill="currentColor"
                  className="text-yellow-300/70"
                />
              </div>
            </motion.div>
          </div>

          {/* =====================================
              MOMENTO 2
          ====================================== */}

          <div
            className="
              relative
              grid
              items-center
              gap-12
              pb-32
              lg:grid-cols-2
              lg:gap-24
              lg:pb-40
            "
          >
            {/* TEXTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
                duration: 0.5,
                ease,
              }}
              className="
                order-2
                mx-auto
                max-w-lg
                text-center
                lg:order-1
                lg:mx-0
                lg:text-right
              "
            >
              <h3
                className="
                  font-letter
                  text-4xl
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >
                {moments[1].title}
              </h3>

              <p
                className="
                  font-elegant
                  mt-7
                  text-lg
                  leading-8
                  text-violet-100/65
                  md:text-xl
                "
              >
                {moments[1].text}
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-3
                  lg:justify-end
                "
              >
                <div className="h-px w-12 bg-yellow-300/25" />

                <Heart
                  size={14}
                  fill="currentColor"
                  className="text-yellow-300/70"
                />
              </div>
            </motion.div>

            {/* punto */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                hidden
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-yellow-300
                shadow-[0_0_12px_rgba(253,224,71,0.8)]
                lg:block
              "
            />

            {/* FOTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                duration: 0.5,
                delay: 0.08,
                ease,
              }}
              className="
                order-1
                flex
                justify-center
                lg:order-2
                lg:justify-start
              "
            >
              <div
                className={`
                  w-full
                  ${moments[1].maxWidth}
                  rotate-[2deg]
                  bg-[#fffaf0]
                  px-3
                  pb-8
                  pt-3
                  shadow-2xl
                `}
              >
                <div
                  className={`
                    ${moments[1].aspect}
                    overflow-hidden
                    bg-[#e8dfd5]
                  `}
                >
                  <img
                    src={moments[1].image}
                    alt={moments[1].caption}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />
                </div>

                <p
                  className="
                    font-letter
                    mt-5
                    text-center
                    text-3xl
                    text-purple-900
                  "
                >
                  {moments[1].caption}
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================
              MOMENTO 3
          ====================================== */}

          <div
            className="
              relative
              grid
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-24
            "
          >
            {/* FOTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
                duration: 0.5,
                ease,
              }}
              className="
                flex
                justify-center
                lg:justify-end
              "
            >
              <div
                className={`
                  w-full
                  ${moments[2].maxWidth}
                  rotate-[-2deg]
                  bg-[#fffaf0]
                  px-3
                  pb-8
                  pt-3
                  shadow-2xl
                `}
              >
                <div
                  className={`
                    ${moments[2].aspect}
                    overflow-hidden
                    bg-[#e8dfd5]
                  `}
                >
                  <img
                    src={moments[2].image}
                    alt={moments[2].caption}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />
                </div>

                <p
                  className="
                    font-letter
                    mt-5
                    text-center
                    text-3xl
                    text-purple-900
                  "
                >
                  {moments[2].caption}
                </p>
              </div>
            </motion.div>

            {/* punto */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                hidden
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-yellow-300
                shadow-[0_0_12px_rgba(253,224,71,0.8)]
                lg:block
              "
            />

            {/* TEXTO */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                duration: 0.5,
                delay: 0.08,
                ease,
              }}
              className="
                mx-auto
                max-w-lg
                text-center
                lg:mx-0
                lg:text-left
              "
            >
              <h3
                className="
                  font-letter
                  text-4xl
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >
                {moments[2].title}
              </h3>

              <p
                className="
                  font-elegant
                  mt-7
                  text-lg
                  leading-8
                  text-violet-100/65
                  md:text-xl
                "
              >
                {moments[2].text}
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-3
                  lg:justify-start
                "
              >
                <div className="h-px w-12 bg-yellow-300/25" />

                <Heart
                  size={14}
                  fill="currentColor"
                  className="text-yellow-300/70"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveTimeline;