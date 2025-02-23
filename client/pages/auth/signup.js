import React, { useState } from "react";
import Router from "next/router";
import { useRequest } from "../../hooks/use-request";

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRquest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },
    onSuccess: () => Router.push("/"),
  });
  async function onSubmit(event) {
    event.preventDefault();
    await doRquest();
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
}
