import { useState } from "react";
import axios, { AxiosError } from "axios";

const URL = "http://localhost:3001";

interface BUTTON {
  func: () => void;
  title: string;
}

export const HTTPButtons = () => {
  const getBlocks = () => {
    axios
      .get(`${URL}/blocks`)
      .then(({ data }: any) => {
        //setValue(data);
      })
      .catch((e: AxiosError) => console.error(e));
  };
  const mine = () => {
    axios
      .post(`${URL}/mine`, {
        data: "test_data",
      })
      .then(({ data }: any) => {
        //setValue(data);
      })
      .catch((e: AxiosError) => console.error(e));
  };
  const walletTransactions = () => {
    axios
      .get(`${URL}/wallet/transactions`)
      .then(({ data }: any) => {
        //setValue(data);
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
        //setValue(data);
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
    <div style={{}}>
      {BUTTONS.map((_: BUTTON) => (
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
