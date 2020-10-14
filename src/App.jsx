/** @jsx jsx */
import {jsx} from "@emotion/core";
import GlobalCSS from "./views/components/GlobalCSS";
import Home from "./views/Home";

export default function App() {
  return (
    <div>
      <GlobalCSS />
      <Home />
    </div>
  );
};


