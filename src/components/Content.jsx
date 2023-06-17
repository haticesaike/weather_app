import React from "react";
import Card from "./Card";
import CardBottom from "./CardBottom";
import {
  WiHumidity,
  WiCloudyGusts,
  WiBarometer,
  WiCloudy,
} from "react-icons/wi";
import { TiWaves } from "react-icons/ti";
import { useMediaQuery } from "@mantine/hooks";

function Content({ data }) {
  const att = [
    {
      id: 0,
      title: "Humidity",
      apiPath: data.currentConditions.humidity,
      mark: "%",
      icon: <WiHumidity size={40} />,
    },
    {
      id: 1,
      title: "Wind Speed",
      apiPath: data.currentConditions.windspeed,
      mark: "m/s",
      icon: <WiCloudyGusts size={40} />,
    },
    {
      id: 2,
      title: "Pressure",
      apiPath: data.currentConditions.pressure,
      mark: "hPa",
      icon: <WiBarometer size={40} />,
    },
    {
      id: 3,
      title: "Clouds",
      apiPath: data.currentConditions.cloudcover,
      mark: "%",
      icon: <WiCloudy size={40} />,
    },
    {
      id: 4,
      title: "UV Index",
      apiPath: data.currentConditions.uvindex,
      mark: " ",
      icon: <TiWaves size={40} />,
    },
    {
      id: 5,
      title: "---------",
      apiPath: data.currentConditions.pressure,
      mark: " ",
      sun: true,
    },
  ];
  const largeScreen = useMediaQuery("(min-width: 60em)");

  return (
    <div
      className={
        !largeScreen
          ? "hidden"
          : "w-2/3 h-screen bg-slate-400  flex flex-col items-center pt-8 px-8 pb-20 bg-opacity-40 text-black font-medium tracking-wide "
      }
    >
      <div className="flex w-full pb-4 font-bold text-xl   ">Weekly</div>
      {data && (
        <div className="grid grid-cols-4 justify-center  w-full h-1/3 gap-5 ">
          {[1, 2, 3, 4].map((element) => {
            return (
              <div className="w-full " key={Math.random()}>
                <Card day={element} data={data} />
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-col justify-around h-2/3 w-full  ">
        <div className="flex w-full  font-bold text-xl   ">
          Today's Highlights
        </div>
        {data && (
          <div className="grid grid-cols-3 justify-center h-1/2 gap-3 -mt-20 ">
            {att.map((element) => {
              return (
                <div className=" w-full " key={Math.random()}>
                  <CardBottom
                    data={data}
                    title={element.title}
                    apiPath={element.apiPath}
                    mark={element.mark}
                    sun={element.sun}
                    icon={element.icon}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
