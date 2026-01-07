import { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { Categuries } from "../data";

export default function Menu() {
  const data = useRouteLoaderData("Data");
  const [myUrl, setMyUrl] = useState(
    "1Afmrmd7qaaUtMYapHnbDmW4Ny1feuywlKxW_YvuULKg"
  );
  const [Styel, setStyel] = useState(0);
  const [title, seTtitle] = useState("cafe");

  function handelSubmit(url, i, title) {
    setStyel(i);
    setMyUrl(url);
    seTtitle(title);
  }
  const filtering = data.filter((item) => item[title]);
  let lastItem=""
  if (data.length / 2 !== 0) {
    lastItem = "lastItem";
  }
  return (
    <>
      <div className="categuriesButton">
        {Categuries?.map((item, i) => {
          return (
            <button
              className={`CtBtn ${i === Styel && "red"}`}
              onClick={() => handelSubmit(item.Url, i, item.categuries)}
            >
              {item.Title}
            </button>
          );
        })}
      </div>
      {data && (
        <div className={`menu ${lastItem}`}>
          {filtering[0][title]?.map((prev, i) => {
            console.log(prev);
            return (
              <>
                <div>
                  <Link to={`${myUrl}/${prev.Title}`}>
                    <li key={i}>{prev.Title}</li>
                    <img src={prev.Title + ".webp"} />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
