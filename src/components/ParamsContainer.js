import React from "react";
 
const ParamsContainer = ({isRequest}) => { 
  return <div>Parameters Editor {isRequest ? 'Request' : 'Response'}</div>;
}

export default ParamsContainer;