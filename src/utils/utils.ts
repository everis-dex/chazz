import { useEffect } from "react";

export function useScrollToTop(): void | undefined {
  useEffect(() => {
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      //Sin Timeout hace el calculo antes de renderizar todos los componentes y falla el scrollTo
      window.scrollTo(0, 0);
    }, 200);
  }, []);
}
