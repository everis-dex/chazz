import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToTop(): void | undefined {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    document.body.classList.remove("no-scroll");
    if (location.pathname === "/" || location.key === "default") document.body.classList.add("no-scroll");
    setTimeout(() => {
      //Sin Timeout hace el calculo antes de renderizar todos los componentes y falla el scrollTo
      window.scrollTo(0, 0);
    }, 400);
  }, [location]);
}
