import { motion } from "framer-motion";
import Loader from "./Loader";
import Controls from "./Controls";

export default function QuranDisplay({ ayah, ruku, isLoadingAyah, isLoadingRuku, show }) {
    if (!show) return null; // Don't mount until show is true

    return (
        <motion.div
            className="quran-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {isLoadingAyah ? (
                <Loader />
            ) : (
                ayah && (
                    <div className="ayah engraved-box"
                        style={{
                            padding: '0',
                            display: "flex"
                        }}>
                        <div className="ayah-box"
                            style={{
                                width: "calc(100% - 50px)",
                            }}>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text arabic"
                                style={{
                                    fontSize: "1.25rem",
                                    lineHeight: "150%",
                                    padding: "0.75rem",
                                    textAlign: "right",
                                }}
                                dangerouslySetInnerHTML={{ __html: ayah.verse.text_uthmani }}
                            />
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text medium"
                                style={{
                                    fontSize: "1rem",
                                    borderTop: "7px ridge #00000023",
                                    letterSpacing: "0.4px",
                                    lineHeight: "140%",
                                    padding: "0.75rem",
                                    textAlign: "left"
                                }}
                                dangerouslySetInnerHTML={{ __html: ayah.verse.translations[0].text }}
                            />
                        </div>
                        <div className="actions"
                            style={{
                                width: '50px',
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                borderLeft: "7px ridge #00000023",
                            }}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text"
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    fontSize: "0.75rem",
                                    padding: "0.75rem 0",
                                    borderBottom: "7px ridge #00000023",
                                }}
                            >
                                88:888
                            </motion.div>
                        </div>
                        {console.log(ayah.verse)}
                    </div>
                )
            )}

            {isLoadingRuku ? (
                <Loader />
            ) : (
                ruku && (
                    <div className="ruku">
                        {console.log(ruku)}
                    </div>
                )
            )}
            <Controls fixed />
        </motion.div>
    );
}
