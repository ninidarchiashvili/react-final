import React from "react";
import {Link as RouterLink} from "react-router-dom";




export const Link = ({ children, to }) => {
    return(
    <RouterLink to={to} style={{ textDecoration: "none", color: "#041111", fontSize:25, fontweight: "bold" }} >
        {children}
    </RouterLink>
    );
};