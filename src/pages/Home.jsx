import { AnimatePresence } from "framer-motion";
import background from "../assets/images/background.png"
import Starter from "../components/Starter";
import { useGetRandomAyahQuery, useGetRandomRukuQuery } from "../store/quran-api";
import { useEffect, useState } from "react";
import QuranDisplay from "../components/QuranDisplay";

export default function Home() {

  const [showStarter, setShowStarter] = useState(true);
  const [ayahRequested, setAyahRequested] = useState(false);
  const [rukuRequested, setRukuRequested] = useState(false);
  const [showQuranDisplay, setShowQuranDisplay] = useState(false);

  const {
    data: ayah,
    refetch: refetchAyah,
    isLoading: isLoadingAyah,
    isFetching: isFetchingAyah,
    isError: isErrorAyah,
    error: errorAyah
  } = useGetRandomAyahQuery(undefined, { skip: !ayahRequested });

  const {
    data: ruku,
    refetch: refetchRuku,
    isLoading: isLoadingRuku,
    isFetching: isFetchingRuku,
    isError: isErrorRuku,
    error: errorRuku
  } = useGetRandomRukuQuery(undefined, { skip: !rukuRequested });

  // Fetch Ayah after setting ayahRequested to true
  useEffect(() => {
    if (ayahRequested) refetchAyah();
  }, [ayahRequested, refetchAyah]);

  // Fetch Ruku after setting rukuRequested to true
  useEffect(() => {
    if (rukuRequested) refetchRuku();
  }, [rukuRequested, refetchRuku]);

  const fetchAyah = () => setAyahRequested(true);
  const fetchRuku = () => setRukuRequested(true);

  // useEffect(() => {
  //   if (!isLoadingAyah && !isFetchingAyah && ayah) {
  //     console.log('Ayah:', ayah);
  //   }
  // }, [isLoadingAyah, isFetchingAyah, ayah]);

  // useEffect(() => {
  //   if (!isLoadingRuku && !isFetchingRuku && ruku) {
  //     console.log('Ruku:', ruku);
  //   }
  // }, [isLoadingRuku, isFetchingRuku, ruku]);

  return (
    <section
      style={{
        backgroundImage: `url(${background})`
      }}
      className="home">
      <div className="inner">
        <AnimatePresence mode="wait" onExitComplete={() => setShowQuranDisplay(true)}>
          {
            showStarter &&
            <Starter
              refetchAyah={fetchAyah}
              refetchRuku={fetchRuku}
              closeStarter={() => setShowStarter(false)}
            />
          }
        </AnimatePresence>
        <AnimatePresence>
          {showQuranDisplay && (
            <QuranDisplay
              ayah={ayah}
              ruku={ruku}
              isLoadingAyah={isLoadingAyah}
              isLoadingRuku={isLoadingRuku}
              show={showQuranDisplay}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}