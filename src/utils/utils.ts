import { useEffect } from "react";

export function ScrollToTop(): void {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove("no-scroll");
  }, []);
}
