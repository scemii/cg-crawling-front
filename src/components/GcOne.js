import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Switches from "./Switches";
import GraphicCard from "./GraphicCard";
import SimpleTable from "./SimpleTable";
import Timer from "./Timer";
import { v4 as uuidv4 } from "uuid";

function GcOne({ value }) {
  const [data, setData] = useState(null);
  const [viewDetailed, setViewDetailed] = useState(false);

  const handleChange = () => {
    setViewDetailed(!viewDetailed);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/" + value);
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 900000);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="App">
      <h1 className="title">LDLC {value} G.C stock</h1>
      <div className="flex-container2">
        <Timer />
        <Switches handleChange={handleChange} />
      </div>
      {!viewDetailed ? (
        data && <SimpleTable className="table" data={data} />
      ) : (
        <div className="container">
          {data &&
            data.map((e) => (
              <GraphicCard
                key={uuidv4()}
                name={e.gc}
                status={e.status}
                image={e.image}
                link={e.link}
                price={e.price}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default GcOne;
