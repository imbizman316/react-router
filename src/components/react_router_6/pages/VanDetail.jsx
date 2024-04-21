import React, { useState } from "react";
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../../api";

export function loader({ params }) {
  return getVan(params.id);
}

export default async function VanDetail() {
  const params = await useParams();
  const vans = await useLoaderData();

  const detailData = vans.filter(
    (item) => parseInt(item.id) === parseInt(params.id)
  )[0];

  console.log(detailData);

  const location = useLocation();

  let backText = "all";

  if (location.state.search.length === 0) {
    backText = "all";
  } else {
    backText = location.state.search.split("type=")[1] + "+";
  }

  console.log(backText);

  return (
    <div>
      <Link
        relative="path"
        to={
          location.state.search.length > 0
            ? `../?${location.state.search}`
            : ".."
        }
        style={{ margin: "30px", marginTop: "30px", textDecoration: "none" }}
      >
        &larr; Back to {backText} vans
      </Link>

      <div className="van_detail">
        <h5>id:{detailData.id}</h5>
        <img src={detailData.webformatURL} alt={detailData.user} />
        <h2>
          [{detailData.tags}] by {detailData.user}
        </h2>
        <h3>{detailData.likes} likes</h3>
        <button>Rent this van</button>
      </div>
    </div>
  );
}
