import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TitleContainer = () => {
  const api = useSelector(state => state.api);
  const method = useSelector(state => state.method);
  const path = useSelector(state => state.path);

  return <div>
      <h1>{method} {path}</h1>
      <h2>All Apis &gt; {api} &gt; {path}</h2>
    </div>;
}

export default TitleContainer;