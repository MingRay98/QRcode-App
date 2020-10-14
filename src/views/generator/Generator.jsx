/** @jsx jsx */

import { jsx } from "@emotion/core";
import { BrowserQRCodeSvgWriter } from "@zxing/library";
import { useState, useRef } from "react";
import { generator as styles } from "./styles";

export default function Generator() {
  const [imgURL, setImgURL] = useState(null);
  const [message, setMessage] = useState(null);
  const codeWriter = new BrowserQRCodeSvgWriter();
  let content = useRef(null);
  console.log("ZXing code writer initialized");

  const createSvg = () => {
    if (!content.current.value) return;
    const svgElement = codeWriter.write(content.current.value, 300, 300);
    setMessage(content.current.value);
    svgToPNG(svgElement);
  };

  const svgToPNG = (svgElement) => {
    let svgData = new XMLSerializer().serializeToString(svgElement);
    setImgURL("data:image/svg+xml;base64," + btoa(svgData));
  };

  const clear = () => {
    setImgURL(null);
    setMessage(null);
  };

  return (
    <div css={styles.container}>
      <div css={styles.inputContainer}>
        <div css={styles.message}>Message:</div>
        {message ? (
          message
        ) : (
          <textarea
            css={styles.textArea}
            placeholder="Type website address or some message."
            ref={content}
          />
        )}
      </div>
      <div css={styles.buttonContainer}>
        <div css={styles.button} onClick={() => createSvg()}>
          Create
        </div>
        <div onClick={() => clear()} css={styles.button}>
          Rework
        </div>
      </div>
      {imgURL && <img css={styles.image} alt={""} src={imgURL} />}
    </div>
  );
}
