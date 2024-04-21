import { redirect } from "react-router-dom";

export default async function Auth(request) {
  const pathname = new URL(request.url).pathname;
  const isLogged = localStorage.getItem("loggedin");

  if (!isLogged) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  }

  return isLogged;
}

export const loginLoader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};
