import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import { relationshipDates } from "../data/siteData";

const ease = [0.22, 1, 0.36, 1];

/* =========================================================
   CALCULAR TIEMPO TRANSCURRIDO
========================================================= */

function getElapsedTime(dateString) {
  const start = new Date(dateString);
  const now = new Date();

  const difference = Math.max(0, now.getTime() - start.getTime());

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor((totalSeconds % 86400) / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

/* =========================================================
   CAJA INDIVIDUAL
========================================================= */

function TimeBox({ value, label }) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.035]
        px-2
        py-4
      "
    >
      <span
        className="
          font-elegant
          text-3xl
          font-semibold
          tabular-nums
          text-yellow-200
          md:text-4xl
        "
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="
          mt-1
          text-[9px]
          uppercase
          tracking-[0.18em]
          text-violet-100/40
          md:text-[10px]
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   CONTADOR
========================================================= */

function CounterCard({
  eyebrow,
  title,
  dateLabel,
  date,
  icon,
}) {
  const [elapsed, setElapsed] = useState(() =>
    getElapsedTime(date)
  );

  useEffect(() => {
    const updateCounter = () => {
      setElapsed(getElapsedTime(date));
    };

    updateCounter();

    const interval = setInterval(updateCounter, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.45,
        ease,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-purple-300/10
        bg-gradient-to-br
        from-[#2c123d]
        via-[#21102f]
        to-[#17091f]
        p-6
        shadow-xl
        md:p-8
      "
    >
      {/* Esquinas decorativas */}

      <div
        className="
          absolute
          left-5
          top-5
          h-9
          w-9
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
          h-9
          w-9
          border-b
          border-r
          border-yellow-300/25
        "
      />

      {/* Cabecera */}

      <div className="text-center">
        <div
          className="
            mx-auto
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-yellow-300/20
            bg-yellow-300/[0.06]
            text-yellow-300
          "
        >
          <span className="text-2xl">
            {icon}
          </span>
        </div>

        <p
          className="
            mt-5
            text-xs
            uppercase
            tracking-[0.28em]
            text-yellow-200/60
          "
        >
          {eyebrow}
        </p>

        <h3
          className="
            font-letter
            mt-3
            text-4xl
            leading-tight
            text-white
            md:text-5xl
          "
        >
          {title}
        </h3>

        <p
          className="
            font-elegant
            mt-2
            text-lg
            italic
            text-violet-200/55
          "
        >
          {dateLabel}
        </p>
      </div>

      {/* Línea */}

      <div
        className="
          mx-auto
          my-7
          flex
          max-w-[190px]
          items-center
          gap-3
        "
      >
        <div className="h-px flex-1 bg-yellow-300/20" />

        <Heart
          size={13}
          fill="currentColor"
          className="text-yellow-300/60"
        />

        <div className="h-px flex-1 bg-yellow-300/20" />
      </div>

      {/* CONTADOR */}

      <div className="grid grid-cols-4 gap-2 md:gap-3">
        <TimeBox
          value={elapsed.days}
          label="días"
        />

        <TimeBox
          value={elapsed.hours}
          label="horas"
        />

        <TimeBox
          value={elapsed.minutes}
          label="min"
        />

        <TimeBox
          value={elapsed.seconds}
          label="seg"
        />
      </div>

      {/* Texto inferior */}

      <p
        className="
          font-elegant
          mt-6
          text-center
          text-base
          italic
          text-violet-100/40
        "
      >
        y seguimos contando...
      </p>
    </motion.article>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

function LoveCounters() {
  return (
    <section
      id="love-counters"
      className="
        relative
        overflow-hidden
        bg-[#160920]
        px-5
        py-24
        md:py-28
      "
    >
      {/* Fondo */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl">
        {/* =========================================
            CABECERA
        ========================================== */}

        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
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
            <div className="h-px w-9 bg-yellow-300/30" />

            <Sparkles
              size={16}
              className="text-yellow-300"
            />


            <div className="h-px w-9 bg-yellow-300/30" />
          </div>

          <h2
            className="
              font-letter
              text-5xl
              text-white
              md:text-7xl
            "
          >
            Nuestra historia
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
            también se cuenta en días
          </p>

        </motion.div>

        {/* =========================================
            CONTADORES
        ========================================== */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            md:gap-8
          "
        >
          <CounterCard
            eyebrow="Nuestro primer beso"
            title="El día que todo cambió"
            dateLabel="27 · 03 · 2026"
            date={relationshipDates.firstKiss}
            icon="💋"
          />

          <CounterCard
            eyebrow="Desde que somos novios"
            title="Desde que somos vos y yo"
            dateLabel="01 · 08 · 2026"
            date={relationshipDates.relationship}
            icon="💜"
          />
        </div>

        {/* =========================================
            FRASE FINAL
        ========================================== */}

        <motion.div
          className="mt-14 text-center"
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
            className="mx-auto text-pink-300"
          />

          <p
            className="
              font-letter
              mt-4
              text-3xl
              text-violet-100
              md:text-4xl
            "
          >
            Y todavía nos queda muchísimo tiempo juntos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default LoveCounters;