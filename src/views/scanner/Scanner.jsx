/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useRef, useEffect, useState } from "react";
import { BrowserQRCodeReader, NotFoundException } from "@zxing/library";
import QRcodeResult from "./QRcodeResult";
import { scanner as styles } from "./styles";
import Notification from "../components/Notification";

const codeReader = new BrowserQRCodeReader();

const constraints = {
  audio: false,
  video: {
    width: { min: 640, ideal: 1280, max: 1280 },
    facingMode: "environment"
  }
};

const isMobileDevice = () => (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

export default function Scanner() {
  const [resultText, setQRcodeResult] = useState("Wait for detecting...");
  const [isNotification, setNotification] = useState(false);
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
            showNotification();
          }
          if (!e instanceof NotFoundException) console.log(e);
        });
      });
  };

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  }

  useEffect(() => {
    getCameraStream(video.current);
  }, []);

  return (
    <div css={styles.container}>
      {isNotification && <Notification />}
      <video
        css={css([
          styles.video, { transform: isMobileDevice() ? ' scaleX(1)' : 'scaleX(-1)'},
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
