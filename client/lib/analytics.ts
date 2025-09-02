import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
  } else {
    console.warn("Google Analytics ID not found in env");
  }
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (action: string, category?: string, label?: string) => {
  ReactGA.event(action, { category, label });
};
