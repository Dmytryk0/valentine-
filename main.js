"use client";
const { useState } = React;

function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    React.createElement("div", { className: "flex flex-col items-center justify-center h-screen -mt-16" },
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
              style: { fontSize: yesButtonSize },
              onClick: () => setYesPressed(true)
            }, "Yes"),
            React.createElement("button", {
              onClick: handleNoClick,
              className: " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            }, noCount === 0 ? "No" : getNoButtonText())
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Page), document.getElementById('root'));
