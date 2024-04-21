import React, { useEffect, useState } from "react";
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLoaderData,
} from "react-router-dom";
import { getTheVan } from "../../../../api";
import Auth from "../../../../auth";

export async function loader({ params, request }) {
  await Auth(request);
  return getTheVan(params);
}

export default function HostVansDetail() {
  const targetVan = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div>
      <Link to=".." relative="path">
        --Back to all vans
      </Link>
      <div className="host-vans-detail">
        <img src={targetVan.webformatURL} alt={targetVan.tags}></img>
        <div>
          <h5 className="sticker">id: {targetVan.id}</h5>
          <h3>{targetVan.tags}</h3>
          <h5>{targetVan.likes} likes</h5>
        </div>
      </div>
      <nav className="host-vans-detail-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="."
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={targetVan} />
    </div>
  );
}
