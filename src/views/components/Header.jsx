/** @jsx jsx */

import { jsx } from "@emotion/core";
import { useState } from "react";
import { header as styles } from "./styles";

export default function Header(props) {
  const [nextMode, setNextMode] = useState("generator");

  const changeMode = () => {
    if (nextMode === "generator") {
      props.changeMode("generator");
      setNextMode("scanner");
    } else {
      props.changeMode("scanner");
      setNextMode("generator");
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.button} onClick={() => changeMode()}>
        {nextMode}
      </div>
      <div css={styles.title}>
        QRcode <span css={styles.transformUppercase}>{" " + props.mode}</span>
      </div>
    </div>
  );
}
