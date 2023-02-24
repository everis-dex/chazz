import { useEffect } from "react";

export function useScrollToTop(): void | undefined {
  useEffect(() => {
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);
}
