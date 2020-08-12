/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import Textfit from "react-textfit";
import Twemoji from "react-twemoji";
import { render } from "react-dom";

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        backgroundImage: `linear-gradient(45deg, rgb(191,228,242) 0%, rgb(191,228,242) 5%,rgb(146,92,119) 5%, rgb(146,92,119) 7%,rgb(114,151,166) 7%, rgb(114,151,166) 9%,rgb(117,185,190) 9%, rgb(117,185,190) 100%)`,
        position: "absolute",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <link rel="stylesheet" href="https://use.typekit.net/osf8fyt.css" />
      <Global
        styles={{
          ".emoji": {
            height: "1em",
            width: "1em",
            margin: "0 .05em 0 .1em",
            verticalAlign: "-0.1em"
          },
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "proxima-nova",
            fontWeight: 100
          }
        }}
      />
      <div
        css={{
          background: "#EEF6F7",
          margin: "40px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 15,
          padding: "2rem",
          boxShadow: `
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`
        }}
      >
        <h1
          css={{
            color: "black",
            height: "100%",
            fontWeight: 100
          }}
        >
          <Textfit
            max={140}
            min={24}
            style={{ minHeight: "80%", maxHeight: "80%", maxWidth: "85%" }}
          >
            <Twemoji
              options={{ className: "emoji", folder: "svg", ext: ".svg" }}
            >
              {window.title}
            </Twemoji>
      </Textfit>
        </h1>
        <div
          css={{
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 100,
            fontSize: 36
          }}
        >
          {<Twemoji
              options={{ className: "emoji", folder: "svg", ext: ".svg" }}>{window.type}</Twemoji>}
          <span>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('corgi'))

