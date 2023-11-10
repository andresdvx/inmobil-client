/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export const AuthZodErrors = ({ zodError }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-[80%] h-12 grid place-items-center bg-[#f56965] relative z-40 mx-auto mb-2 rounded-md"
    >
      <p className="text-white text-center">{zodError}</p>
    </motion.div>
  );
};

export const AuthError = ({ error }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-[80%] h-12 grid place-items-center bg-[#f56965] relative z-40 mx-auto mb-2 rounded-md"
    >
      <p className="text-white text-center">{error.message}</p>
    </motion.div>
  );
};
