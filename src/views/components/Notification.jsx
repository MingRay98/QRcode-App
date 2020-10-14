/** @jsx jsx */
import { notification as styles } from "./styles";
import { jsx } from "@emotion/core";

export default function Notification() {
  return (
    <div css={styles.container}>
      <div>▼▼▼There is the Result▼▼▼</div>
    </div>
  );
}
