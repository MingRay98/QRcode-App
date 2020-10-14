/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useRef, useEffect, useState } from "react";
import { BrowserQRCodeReader, NotFoundException } from "@zxing/library";
import QRcodeResult from "./QRcodeResult";
import { scanner as styles } from "./styles";

const codeReader = new BrowserQRCodeReader();

const constraints = {
  audio: false,
  video: {
    width: { min: 640, ideal: 1280, max: 1280 },
    facingMode: "environment"
  }
};

export default function Scanner() {
  const [resultText, setQRcodeResult] = useState("Wait for detecting...");
  let video = useRef();

  const getCameraStream = (video) => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function success(stream) {
        video.srcObject = stream;
        console.log("get Stream");
        codeReader.decodeFromVideoElementContinuously(video, (r, e) => {
          if (!!r) {
            console.log(r);
            setQRcodeResult(r.text);
          }
          if (!e instanceof NotFoundException) console.log(e);
        });
      });
  };

  useEffect(() => {
    getCameraStream(video.current);
  }, []);

  return (
    <div css={styles.container}>
      <video
        css={css([
          styles.video,
          { width: window.innerWidth, height: window.innerWidth }
        ])}
        autoPlay={true}
        ref={video}
      />
      <div
        css={css([
          styles.videoShadow,
          { width: window.innerWidth, height: window.innerWidth }
        ])}
      />
      <QRcodeResult text={resultText} />
    </div>
  );
}
