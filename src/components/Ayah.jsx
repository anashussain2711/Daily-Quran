import { motion } from "framer-motion";
import { easeIn } from "framer-motion";
import $ from "jquery";

export const Ayah = ({key, text, translation, ayahKey }) => (
    <motion.div
        className="text ayah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: key === 0 ? 2 : 0, ease: easeIn }}
        onAnimationComplete={() => {
            $(".display").css("overflow", "auto")
        }}
    >
        <div className="ayah-key">
            {ayahKey}
        </div>
        <div className="ayah-content">
            <div className="arabic">
                {text}
            </div>
            <div className="english-translation"
                dangerouslySetInnerHTML={{ __html: translation }}>
            </div>
        </div>

    </motion.div>
)