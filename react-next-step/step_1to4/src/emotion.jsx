/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default () => {
  return (
    <div>
      <p css={emotionStyle}>- Emotion -</p>
    </div>
  );
};

const emotionStyle = css({
  color: "#3d84a8"
});
