import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll window to top whenever the route changes
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    // Re-enable CSS smooth scrolling
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
    }, 20);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
