import React, { useEffect, useState } from "react";
import { WSButtons } from "./components/ws-buttons";
import { HTTPButtons } from "./components/http-buttons";

const App = () => {
  // const [value, setValue] = useState();
  // const [modalVisible, setModalVisible] = useState(false);

  // const [chain, setChain] = useState([]);

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
        <WSButtons />
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
        <HTTPButtons />
      </div>
    </div>
  );
};

export default App;
