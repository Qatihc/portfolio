import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0})
  }, [location]);
  return null
}

export default ScrollToTopOnRouteChange;