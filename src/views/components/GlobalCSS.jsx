/** @jsx jsx */
import { jsx, Global } from "@emotion/core";

export default function GlobalCSS() {
  return (
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "ABeeZee",
          color: "white",
          wordBreak: "break-all",
          backgroundColor: "rgb(200,200,200)"
        }
      }}
    />
  );
}
