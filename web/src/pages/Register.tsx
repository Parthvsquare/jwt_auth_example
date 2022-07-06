import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useResgisterMutation } from "../generated/graphql";

function Register({ history }: RouteComponentProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useResgisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("from submitted");
        const response = await register({
          variables: {
            email,
            password,
          },
        });

        console.log(response);
        history.push("/");
      }}>
      <div>
        Register page
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit">Register</button>;
    </form>
  );
}

export default Register;
