import { useState, useEffect } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import VanDetail from "./VanDetail";
import { getVans } from "../../../api";
import React from "react";
import Error from "./Error";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  const dataPromise = useLoaderData();
  // const [vans, setVans] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="vans_origin">
      <h2>Explore our van options</h2>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            const displayVans = typeFilter
              ? vans.filter((van) => van.likes >= parseInt(typeFilter))
              : vans;

            const vanElements = displayVans?.map((item) => {
              return (
                <Link
                  to={`./${item.id}`}
                  element={<VanDetail />}
                  key={item.id}
                  state={{ search: searchParams.toString() }}
                >
                  <div className="van_card">
                    <div
                      style={{
                        backgroundImage: `url(${item.webformatURL})`,
                        height: "200px",
                        width: "200px",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        border: "1px black solid",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div className="vans_bottom">
                      <h5 style={{ textAlign: "center" }}>{item.tags}</h5>
                      <h5 style={{ color: "red" }}>{item.likes} likes</h5>
                    </div>
                  </div>
                </Link>
              );
            });

            return (
              <>
                <div className="van_button_container">
                  <h4>Filter by Likes: </h4>
                  <button
                    onClick={() => setSearchParams({ type: 300 })}
                    className={typeFilter === "300" ? "button-selected" : null}
                  >
                    300+
                  </button>

                  <button
                    onClick={() => setSearchParams({ type: 200 })}
                    d
                    className={typeFilter === "200" ? "button-selected" : null}
                  >
                    200+
                  </button>

                  <button
                    onClick={() => setSearchParams({ type: 100 })}
                    className={typeFilter === "100" ? "button-selected" : null}
                  >
                    100+
                  </button>

                  {typeFilter ? (
                    <button
                      onClick={() => setSearchParams("")}
                      className="van-type"
                    >
                      Clear filter
                    </button>
                  ) : (
                    <button className="van-type-inactive">Clear filter</button>
                  )}
                </div>
                <div className="vans">{vanElements}</div>
              </>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
}

//webformatURL
//tags
