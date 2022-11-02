import Contacts from "./Contacts";
import Exports from "./Exports";
import Header from "./Header";
import Kurs from "./Kurs";
import Mobil from "./Mobil";
import OnlinePlatform from "./OnlinePlatform";
import Navbar from "../pages/Navbar";
import Footer from "../Footer";
import Partners from "./Partners";
import AutoPlayMethods from "./Slider";
import Thoughts from "./Thoughts";
import Ustunlik from "./Ustunlik";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <>
      <Navbar />
      <main>
        <Header />
        <AutoPlayMethods />
        <OnlinePlatform />
        <Ustunlik />
        <Kurs />
        <Mobil />
        <Exports />
        <Thoughts />
        <Partners />
        <Mobil />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
