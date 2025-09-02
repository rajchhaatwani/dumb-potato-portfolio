import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./lib/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
}
