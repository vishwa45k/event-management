import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Rocket } from "lucide-react";
import "../../assets/fonts/dmsans.css";
import Button from "./Button";

const MusicalConcert = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen bg-white py-6 sm:py-8 lg:py-12"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div
            className="relative overflow-hidden rounded-2xl flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://res.cloudinary.com/dzpkbej9y/image/upload/v1739942589/Priyanka_gmlqsf.avif"
              alt="Musical Concert"
              className="w-full max-w-md h-auto object-cover rounded-3xl   object-center flex-1"
            />
          </motion.div>
          <motion.div
            className="md:py-4 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-cp text-2xl dm-sans md:text-5xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              Musical Concert
            </motion.h2>
            <motion.p
              className="text-gray-600 sm:text-lg mb-6 md:mb-8 work-sans"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get ready for an unforgettable evening of musical exploration as
              we present Melodic Evening, a unique concert that showcases the
              rich tapestry of ethnic music and the esteemed presence of our
              distinguished guests.
            </motion.p>
            <motion.p
              className="text-gray-600 sm:text-lg mb-6 md:mb-8  work-sans"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Our event will transport you to a world of diverse musical
              traditions, with a focus on the sounds and styles of various
              cultures.
            </motion.p>
            <motion.p
              className="text-gray-600 sm:text-lg mb-6 md:mb-8  work-sans"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Join us for an unforgettable evening as we welcome our renowned
              singer "Priya Jerson," known for her exceptional talent and as a
              significant figure in Super Singer, at our concert. Experience her
              mesmerizing voice and be captivated by her performance!
            </motion.p>
            <motion.p
              className="text-gray-600 sm:text-lg mb-6 md:mb-8  work-sans"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Get ready to groove to the beats of our dynamic DJ at the concert.
            </motion.p>
            {/* <Button link="/registration" text="Register" /> */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicalConcert;
