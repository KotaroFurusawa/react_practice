import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import Emotion from "./emotion";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <Emotion />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
