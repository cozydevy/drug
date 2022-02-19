import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();

  console.log(location.state.id)


  return (
    <div>resultxxx</div>
  )
}
