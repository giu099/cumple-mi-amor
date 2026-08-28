import { motion } from "framer-motion";

function SunFlowerSeal({ opening = false }) {
  return (
    <motion.div
      className="relative flex h-28 w-28 items-center justify-center"
      animate={
        opening
          ? {
              scale: [1, 1.08, 0],
              rotate: [0, -4, 18],
              opacity: [1, 1, 0],
            }
          : {
              scale: [1, 1.035, 1],
            }
      }
      transition={
        opening
          ? {
              duration: 0.42,
              ease: [0.4, 0, 0.2, 1],
            }
          : {
              duration: 2.7,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      {/* Luz dorada */}
      <motion.div
        className="absolute inset-2 rounded-full bg-yellow-300/25 blur-xl"
        animate={
          opening
            ? {
                opacity: 0,
                scale: 1.5,
              }
            : {
                opacity: [0.25, 0.65, 0.25],
                scale: [0.9, 1.18, 0.9],
              }
        }
        transition={
          opening
            ? {
                duration: 0.4,
              }
            : {
                duration: 2.7,
                repeat: Infinity,
              }
        }
      />

      {/* Cera */}
      <div
        className="
          relative
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-[48%_52%_46%_54%/52%_46%_54%_48%]
          bg-gradient-to-br
          from-[#873ca5]
          via-[#65217e]
          to-[#351044]
          shadow[
            inset_4px_4px_8px_rgba(255,255,255,.15),
            inset_-6px_-7px_10px_rgba(0,0,0,.4),
            0_10px_30px_rgba(0,0,0,.45)
          ]
        "
      >
        <div className="absolute inset-[6px] rounded-full border border-purple-200/20" />

        {/* Sol real */}
        <img
          src="/images/sol-rapunzel.png"
          alt="Sol de Rapunzel"
          draggable="false"
          className="
            relative
            z-10
            h-[500px]
            w-[500px]
            object-contain
            drop-shadow-[0_0_6px_rgba(255,210,50,.55)]
          "
        />
      </div>
    </motion.div>
  );
}

export default SunFlowerSeal;