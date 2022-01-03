import React from "react";
import { pagesNames } from "../consts";

const CurrentPageContext = React.createContext(pagesNames.landing);

export default CurrentPageContext;