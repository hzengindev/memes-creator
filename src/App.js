import { useState } from "react";
import * as htmlToImage from "html-to-image";
import "./styles.css";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  const download = () => {
    htmlToImage
      .toPng(document.querySelector(".result"))
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.setAttribute("download", "meme.png");
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <div className="container">
      <header>
        <h1>MEMES CREATOR</h1>
        <button type="button" className="download" onClick={download}>
          Download
        </button>

        <div className="desc">
          <h3>Draft</h3>
          <h3>Result</h3>
        </div>
      </header>
      <main>
        <div className="maker">
          <div className="draft">
            <textarea
              className="text-input"
              placeholder="Enter text"
              value={text1}
              onChange={(e) => setText1(e.currentTarget.value)}
            />
            <textarea
              className="text-input"
              placeholder="Enter text"
              value={text2}
              onChange={(e) => setText2(e.currentTarget.value)}
            />
            <textarea
              className="text-input"
              placeholder="Enter text"
              value={text3}
              onChange={(e) => setText3(e.currentTarget.value)}
            />
            <textarea
              className="text-input"
              placeholder="Enter text"
              value={text4}
              onChange={(e) => setText4(e.currentTarget.value)}
            />
            <textarea
              className="text-input"
              placeholder="Enter text"
              value={text5}
              onChange={(e) => setText5(e.currentTarget.value)}
            />
            <img src={"./picture.jpg"} alt="draft" />
          </div>
          <div className="result">
            <span name="pictext1" className="text-span">
              {text1}
            </span>
            <span name="pictext2" className="text-span">
              {text2}
            </span>
            <span name="pictext3" className="text-span">
              {text3}
            </span>
            <span name="pictext4" className="text-span">
              {text4}
            </span>
            <span name="pictext5" className="text-span">
              {text5}
            </span>
            <img src={"./picture.jpg"} alt="result" />
          </div>
        </div>
      </main>
    </div>
  );
}
