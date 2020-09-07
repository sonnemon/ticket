import React from "react";
import buildClient from "../api/build-client";

function Landing(props) {
  const { currentUser } = props;
  return (
    <h1 className="title">
      {currentUser != null ? "you are signed in" : "you are not signed in"}
    </h1>
  );
}

Landing.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
export default Landing;
