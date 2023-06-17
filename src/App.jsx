import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import SideMenu from "./components/SideMenu";
import axios from "axios";
import cities from "./assets/data/cities.json";

function App() {
  var dataCities = [];
  var dataId = [];
  const [value, setValue] = useState("samsun");
  const [data, setData] = useState();

  cities.map((city) => {
    return dataCities.push(city.name), dataId.push(city.id);
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=EJUAFDMP8LQFHMLMXTZ8VU3AW&options=beta&contentType=json`
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [value]);
  return (
    <div>
      {data && (
        <div className="flex ">
          <SideMenu data={data} dataCities={dataCities} setValue={setValue} />
          {/* component ekleme */}

          <Content data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
