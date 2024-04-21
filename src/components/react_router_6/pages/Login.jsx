import React from "react";
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    await localStorage.setItem("loggedin", true);
    console.log(data);
    return redirect(pathname);
  } catch (e) {
    return e.message;
  }

  // return null;
}

function Login() {
  // const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const errorMessage = useActionData();

  const message = useLoaderData();

  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="login">
      {message && <h2>{message}</h2>}
      <h1>Sign in to your account</h1>
      {(error !== null || error !== undefined) && <h2>{errorMessage}</h2>}
      <Form method="post">
        <input
          type="text"
          name="email"
          // value={loginFormData.email}
          // onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          name="password"
          // value={loginFormData.password}
          // onChange={(e) => handleChange(e)}
        ></input>
        {navigation.state === "submitting" ? (
          <button disabled>Log in</button>
        ) : (
          <button>Log in</button>
        )}
      </Form>
    </div>
  );
}

export default Login;
