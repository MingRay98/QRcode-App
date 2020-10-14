/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { home as styles } from "./styles";
import Scanner from "./scanner/Scanner";
import Header from "./components/Header";
import Generator from "./generator/Generator";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("scanner");
  let innerContainer = css([
    styles.innerContainer,
    {
      width: window.innerWidth + "px",
      height: window.innerHeight + "px",
      maxWidth: "600px"
    }
  ]);
  return (
    <div css={styles.container}>
      <div css={innerContainer}>
        <Header changeMode={setMode} mode={mode} />
        {mode === "scanner" ? <Scanner /> : <Generator />}
      </div>
    </div>
  );
}
