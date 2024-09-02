import { motion, AnimatePresence } from "framer-motion"
import { easeIn } from "framer-motion"

const Starter = ({ started }) => {
    return (
        <AnimatePresence>
            {
                !started &&
                <motion.div
                    className="starter-message"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: easeIn }}
                >
                    <h2 className="text">Select an Option</h2>
                    <p className="text">Let a random <strong>Ayah</strong> or <strong>Ruku</strong> find you at this moment.</p>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Starter;