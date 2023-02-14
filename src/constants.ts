import { RoutesInfo } from "./interfaces/routes";
import { services, thoughtsPage, work } from "./content";

const routesInfo: RoutesInfo[] = [
  { id: 0, name: "We are", route: "/", published: true },
  { id: 1, name: "Services", route: "/services", published: services.published },
  { id: 2, name: "Work", route: "/work", published: work.published },
  { id: 3, name: "Thoughts", route: "/thoughts", published: thoughtsPage.published }
];

// select here which nav options are
export const availableRoutes: RoutesInfo[] = routesInfo.filter((route: RoutesInfo) => route.published);

export const desktopLineBreakSymbol: string = "+";
export const mobileLineBreakSymbol: string = "*";
export const paragraphSymbol: string = "\n";

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
