/** @jsx jsx */
import { jsx } from "@emotion/core";
import { qrcodeResult as styles } from "./styles";

export default function QRcodeResult(props) {
  const isValidUrl = (text) => {
    try {
      new URL(text);
    } catch (_) {
      return false;
    }
    return true;
  };

  return (
    <div css={styles.container}>
      {isValidUrl(props.text) ? (
        <a css={styles.link} href={props.text}>
          {props.text}
        </a>
      ) : (
        props.text
      )}
    </div>
  );
}
