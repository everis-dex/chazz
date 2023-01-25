import { RoutesInfo } from "./interfaces/routes";

export const routesInfo: RoutesInfo[] = [
  {
    id: 0,
    name: "We are",
    route: "/"
  },
  {
    id: 1,
    name: "Services",
    route: "/services"
  },
  {
    id: 2,
    name: "Work",
    route: "/work"
  },
  {
    id: 3,
    name: "Thoughts",
    route: "/thoughts"
  },
  {
    id: 4,
    name: "Privacy Policy",
    route: "/privacy_policy"
  },
  {
    id: 5,
    name: "Cookie Policy",
    route: "/cookie_policy"
  },
];

// select here which nav options are available
export const availableRouteIDs: number[] = [0, 1, 2, 3];

export const desktopLineBreakSymbol: string = "+";
export const mobileLineBreakSymbol: string = "*";

// Navigation bar Display Modes
export const DisplayModes = {
  dark: {
    color: "white",
    activeStyle: "active-black"
  },
  light: {
    color: "black",
    activeStyle: "active-pink"
  }
};
