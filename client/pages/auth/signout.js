import React, { useEffect } from "react";
import { useRequest } from "../../hooks/use-request";
import Router from "next/router";

export default function signout() {
  const { doRquest, errors } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });
  useEffect(() => {
    doRquest();
  }, []);
  return <div>Signing you out...</div>;
}
