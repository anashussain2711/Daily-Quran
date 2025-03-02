import { motion } from "framer-motion";
import React from "react";
import Controls from "./Controls";

const Starter = ({ closeStarter, refetchAyah, refetchRuku }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text medium"
                style={{ 
                    marginBottom: "1rem", 
                    fontSize:"2.75rem",
                    textAlign: "center"
                }}
            >
                Discover Wisdom
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text light"
                style={{ 
                    marginBottom: "2rem", 
                    fontSize:"1rem",
                    textAlign: "center"
                }}
            >
                Let a random <strong className="medium" >Ayah</strong> or <strong className="medium">Ruku</strong> find you at this moment.
            </motion.p>
            <Controls closeStarter={closeStarter} refetchAyah={refetchAyah} refetchRuku={refetchRuku} />
        </motion.div>
    );
};

export default Starter;
