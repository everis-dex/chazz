import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToTop(): void | undefined {
  const location = useLocation();
  useEffect(() => {
    document.body.classList.remove("no-scroll");
    const isHomePage = location.pathname === "/" || location.key === "default";
    if (isHomePage) document.body.classList.add("no-scroll");
    setTimeout(
      () => {
        //Sin Timeout hace el calculo antes de renderizar todos los componentes y falla el scrollTo
        window.scrollTo(0, 0);
      },
      isHomePage ? 400 : 100
    );
  }, [location]);
}
