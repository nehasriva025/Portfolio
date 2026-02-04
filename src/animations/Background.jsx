import { motion } from "framer-motion";



const AnimatedGradient = () => {
  const gradientVariants = {
    animate: {
      background: [
        "radial-gradient(125% 50% at 50% 0%, #9000ff 0%, #000000)",
        "radial-gradient(125% 50% at 50% 0%, #3b118a 0%, #000000)",
        "radial-gradient(125% 50% at 50% 0%, #3300ff 0%, #000000)",
        "radial-gradient(125% 50% at 50% 0%, #4116c2 0%, #000000)",
                "radial-gradient(125% 50% at 50% 0%, #9000ff 0%, #000000)",

        

      ],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100vh",
      }}
      variants={gradientVariants}
      animate="animate"
    >
    </motion.div>
  );
};

export default AnimatedGradient;
