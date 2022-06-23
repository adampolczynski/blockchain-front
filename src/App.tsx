import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Modal } from "./modal";

interface BUTTON {
  func: () => void;
  title: string;
}

const URL = "http://localhost:3001";

const App = () => {
  const [value, setValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const [ws, setWS] = useState(new WebSocket("ws://localhost:5001"));
  const [chain, setChain] = useState([]);

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

  const getBlocks = () => {
    axios
      .get(`${URL}/blocks`)
      .then(({ data }: any) => {
        setValue(data);
      })
      .catch((e: AxiosError) => console.error(e));
  };
  const mine = () => {
    axios
      .post(`${URL}/mine`, {
        data: "test_data",
      })
      .then(({ data }: any) => {
        setValue(data);
      })
      .catch((e: AxiosError) => console.error(e));
  };
  const walletTransactions = () => {
    axios
      .get(`${URL}/wallet/transactions`)
      .then(({ data }: any) => {
        setValue(data);
      })
      .catch((e: AxiosError) => console.error(e));
  };
  const walletTransact = () => {
    axios
      .post(`${URL}/wallet/transact`, {
        data: {
          to: "",
          amount: 10,
          type: "",
          blockchain: [],
        },
      })
      .then(({ data }: any) => {
        setValue(data);
      })
      .catch((e: AxiosError) => console.error(e));
  };

  const BUTTONS: BUTTON[] = [
    {
      func: getBlocks,
      title: "Get blocks",
    },
    {
      func: mine,
      title: "Mine",
    },
    { func: walletTransactions, title: "Wallet transactions" },
    { func: walletTransact, title: "Wallet transact" },
  ];

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 600,
          height: 200,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {WS_BUTTONS.map((_: BUTTON) => (
          <button
            onClick={() => {
              _.func();
              setModalVisible(true);
            }}
          >
            {_.title} (WS)
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: 600,
          height: 200,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {BUTTONS.map((_: BUTTON) => (
          <button
            onClick={() => {
              _.func();
              setModalVisible(true);
            }}
          >
            {_.title}
          </button>
        ))}
      </div>

      <Modal
        text={JSON.stringify(value)}
        show={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default App;
