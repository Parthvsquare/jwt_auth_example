import React from "react";
import { useByeQuery } from "../generated/graphql";

function Bye() {
  const { data, loading, error } = useByeQuery();
  if (loading) {
    return <div>lading..</div>;
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (!data) {
    return <div>no data</div>;
  }
  return <div>{data.bye}</div>;
}

export default Bye;
