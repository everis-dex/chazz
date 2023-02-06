import { RoutesInfo } from "./interfaces/routes";

export const routesInfo: RoutesInfo[] = [
  { id: 0, name: "We are", route: "/" },
  { id: 1, name: "Services", route: "/services" },
  { id: 2, name: "Work", route: "/work" },
  { id: 3, name: "Thoughts", route: "/thoughts" },
  { id: 4, name: "Privacy Policy", route: "/privacy_policy" },
  { id: 5, name: "Cookie Policy", route: "/cookie_policy" }
];

// select here which nav options are available
export const availableRouteIDs: number[] = [0, 2];

export const desktopLineBreakSymbol: string = "+";
export const mobileLineBreakSymbol: string = "*";
export const paragraphSymbol: string = "#";

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

type Dictionary = {
  [key: number]: string;
};
export const Months: Dictionary = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};
