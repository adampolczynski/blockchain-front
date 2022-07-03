import { useState } from "react";

interface BUTTON {
  func: () => void;
  title: string;
}

export const WSButtons = () => {
  const [ws, setWS] = useState(new WebSocket("ws://localhost:5001"));

  const apiCall = {
    type: "TRANSACTION",
    transaction: {
      to: "",
      amount: 0,
      type: "the type",
    },
  };

  const createTransaction = () => {
    ws.send(JSON.stringify(apiCall));
  };

  const sendChain = () => {
    ws.send(
      JSON.stringify({
        type: "CHAIN",
        chain: [],
      })
    );
  };
  const sendBlock = () => {
    ws.send(
      JSON.stringify({
        type: "CHAIN",
        block: {},
      })
    );
  };

  ws.onopen = (event) => {
    // ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    console.warn("Received JSON: ", json);
    try {
      if ((json.event = "data")) {
        // setBids(json.data.bids.slice(0, 5));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   ws && ws.send(JSON.stringify(apiCall));
  // }, []);

  const WS_BUTTONS: BUTTON[] = [
    {
      func: createTransaction,
      title: "Create transaction",
    },
    {
      func: sendChain,
      title: "Send chain",
    },
    { func: sendBlock, title: "Send block" },
  ];

  return (
    <div style={{}}>
      {WS_BUTTONS.map((_: BUTTON) => (
        <button
          onClick={() => {
            _.func();
            //setModalVisible(true);
          }}
        >
          {_.title} (WS)
        </button>
      ))}
    </div>
  );
};
