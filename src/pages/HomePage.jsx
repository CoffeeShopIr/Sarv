import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useRouteLoaderData } from "react-router-dom";
export default function HomePage(){
    const d=useRouteLoaderData("Data")

    return(
        <>
            <Header/>
            <Menu/>
            <Footer/>
        </>
    )
}

let cachedData = null;
let cachedPromise = null;

export async function LoaderAllData() {
  // اگه دیتا قبلاً گرفته شده → مستقیم برگردون
  if (cachedData) {
    return cachedData;
  }

  // اگه fetch در حال انجامه → همونو await کن
  if (cachedPromise) {
    return cachedPromise;
  }

  cachedPromise = (async () => {
    const responses = await Promise.all([
      fetch("https://opensheet.elk.sh/1Afmrmd7qaaUtMYapHnbDmW4Ny1feuywlKxW_YvuULKg/headerTitle"),
      fetch("https://opensheet.elk.sh/1DAYyJewlLqCcQ6bT3BlrRQQYlIgFVZEhT1nDoX9j5Vo/headerTitle"),
      fetch("https://opensheet.elk.sh/1dQFgcuvU802ChbcwsvJ0fwiRh8s6_ZRzw8BDb35Exbw/headerTitle"),
      fetch("https://opensheet.elk.sh/1WLPwqTiprCbTEmcIhGK3XDvbCEGtMnFNnGln1jYB4gg/headerTitle"),
    ]);

    if (responses.some(res => !res.ok)) {
      throw new Response("Fetch error", { status: 500 });
    }

    const [cafe, food, breakfast, hookah] =
      await Promise.all(responses.map(res => res.json()));

    cachedData = [
      {cafe},
      {food},
      {breakfast},
      {hookah},
    ];

    return cachedData;
  })();

  return cachedPromise;
}

