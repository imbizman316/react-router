import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import HostVansDetail from "./HostVansDetail";
import { getMyVans } from "../../../../api";
import Auth from "../../../../auth";

export async function loader({ request }) {
  await Auth(request);
  // return defer({ vans: getVans() });
  return defer({ vans: getMyVans() });
}

export default function HostVans() {
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((item) => {
      return (
        <Link key={item.id} to={`${item.id}`} element={<HostVansDetail />}>
          <div className="host-vans">
            <img src={item.webformatURL} alt={item.tags} />
            <div>
              <h4>{item.tags}</h4>
              <h5>{item.likes} likes</h5>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <div>
      <h3>Your listed vans</h3>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </React.Suspense>
    </div>
  );
}
