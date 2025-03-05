import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

import './Icon.css'
function Icon(){
    return(
        <>
          <FaInstagram className="icon"/>
          <CiFacebook className="icon"/>
        </>
    )
}
export default Icon