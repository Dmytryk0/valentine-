"use client";
const { useState, useEffect } = React;

function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });
  const [themeColor, setThemeColor] = useState("#ffc0cb");

  const handleNoClick = () => {
    setNoCount((prevCount) => prevCount + 1);
    if (noCount < 2) {
      moveButtonRandomly();
    } else {
      attachNoButtonToCursor();
    }
  };

  const moveButtonRandomly = () => {
    const randomTop = Math.random() * 80 + 10;
    const randomLeft = Math.random() * 80 + 10;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const attachNoButtonToCursor = () => {
    document.body.addEventListener("mousemove", (event) => {
      setNoPosition({ top: `${event.clientY}px`, left: `${event.clientX}px` });
    });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    React.createElement("div", { className: "flex flex-col items-center justify-center h-screen", style: { backgroundColor: themeColor } },
      yesPressed ? (
        React.createElement(React.Fragment, null,
          React.createElement("img", { src: "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" }),
          React.createElement("div", { className: "text-4xl font-bold my-4" }, "Ok yay!!!")
        )
      ) : (
        React.createElement(React.Fragment, null,
          React.createElement("img", { className: "h-[200px]", src: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" }),
          React.createElement("h1", { className: "text-4xl my-4" }, "Will you be my Valentine?"),
          React.createElement("div", null,
            React.createElement("button", {
              className: `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`,
              onClick: () => setYesPressed(true)
            }, "Yes"),
            React.createElement("button", {
              onClick: handleNoClick,
              className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
              style: { position: "absolute", top: noPosition.top, left: noPosition.left }
            }, getNoButtonText())
          ),
          React.createElement("div", { className: "mt-6" },
            React.createElement("label", { className: "mr-2 font-bold" }, "Choose Background Color: "),
            React.createElement("select", {
              onChange: (e) => setThemeColor(e.target.value),
              className: "border p-2 rounded"
            },
              React.createElement("option", { value: "#ffc0cb" }, "Pink"),
              React.createElement("option", { value: "#ffe4e1" }, "Light Pink"),
              React.createElement("option", { value: "#ff69b4" }, "Hot Pink"),
              React.createElement("option", { value: "#ffb6c1" }, "Light Coral")
            )
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Page), document.getElementById('root'));
