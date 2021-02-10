import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Countdown from "react-countdown";

export default function Timer() {
  const [value, setValue] = useState(0);

  return (
    <h2 className="title-timer">
      Next refresh in: {""}
      <span className="timer">
        <Countdown
          key={value}
          date={Date.now() + 900000}
          onComplete={() => setValue(uuidv4())}
        />
      </span>
    </h2>
  );
}
