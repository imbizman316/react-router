import React from "react";
import ReactDOM from "react-dom/client";
import "./components/react_router_6/router.css";
import reportWebVitals from "./reportWebVitals";
import { Route } from "react-router-dom";
import Home from "./components/react_router_6/pages/Home";
import About from "./components/react_router_6/pages/About";
import Vans, {
  loader as vansLoader,
} from "./components/react_router_6/pages/Vans";
import VanDetail, {
  loader as vanDetailLoader,
} from "./components/react_router_6/pages/VanDetail";
import Layout from "./components/react_router_6/Layout";
import Dashboard from "./components/react_router_6/pages/Host/Dashboard";
import Income from "./components/react_router_6/pages/Host/Income";
import Reviews from "./components/react_router_6/pages/Host/Reviews";
import HostLayout from "./components/react_router_6/HostLayout";
import HostVans, {
  loader as hostVanLoader,
} from "./components/react_router_6/pages/Host/HostVans";
import HostVansDetail, {
  loader as hostVanDetailLoader,
} from "./components/react_router_6/pages/Host/HostVansDetail";
import HostVansDetails from "./components/react_router_6/pages/Host/Details/HostVansDetails";
import HostVansPricing from "./components/react_router_6/pages/Host/Details/HostVansPricing";
import HostVansPhotos from "./components/react_router_6/pages/Host/Details/HostVansPhotos";
import NotFound from "./components/react_router_6/pages/NotFound";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./components/react_router_6/pages/Error";
import Auth from "./auth";
import Login, {
  action as loginAction,
} from "./components/react_router_6/pages/Login";
import { loginLoader } from "./auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await Auth(request)}
          errorElement={<Error />}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await Auth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await Auth(request)}
        />

        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          errorElement={<Error />}
        />

        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVansDetails />}
            loader={async ({ request }) => await Auth(request)}
            errorElement={<Error />}
          />
          <Route
            path="pricing"
            element={<HostVansPricing />}
            loader={async ({ request }) => await Auth(request)}
          />
          <Route
            path="photos"
            element={<HostVansPhotos />}
            loader={async ({ request }) => await Auth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}>
        <Route path="catch-all" element={<NotFound />} />
      </Route>
    </Route>
  )
);

root.render(
  <RouterProvider router={router} />

  // <React.StrictMode>

  // <BrowserRouter>
  //   <Routes>
  //   </Routes>
  // </BrowserRouter>
  // {/* <App /> */}
  // {/* </React.StrictMode> */}
);

reportWebVitals();

// npm install firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAs0Mjf-WJaJk_tAp7WUp0-3JLTlaRtRoY",
//   authDomain: "vanlife-86fa7.firebaseapp.com",
//   projectId: "vanlife-86fa7",
//   storageBucket: "vanlife-86fa7.appspot.com",
//   messagingSenderId: "353886909941",
//   appId: "1:353886909941:web:e04f8ab96772ffb5945cbc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
