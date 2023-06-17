import React from "react";
import { WiMoonWaningCrescent3, WiSunrise } from "react-icons/wi";
function CardBottom({ data, title, apiPath, mark, sun, icon }) {
  return !sun ? (
    <div className="flex flex-col bg-[#252525]  h-full rounded-3xl bg-opacity-30 justify-around items-center py-3 ">
      <div>{title}</div>
      <div>{icon}</div>

      <div className="flex gap-1">
        <div className="text-2xl">{apiPath}</div>
        <div className=" pt-1">{mark}</div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col bg-[#252525]  h-full rounded-3xl bg-opacity-30 justify-around items-center py-3   ">
      <div className="flex gap-3">
        <div className="mt-1">
          <WiSunrise size={40} />
        </div>
        <div>
          <div className="text-lg ">
            {String(data.currentConditions.sunrise).split(":")[0] +
              ":" +
              String(data.currentConditions.sunrise).split(":")[1]}
          </div>
          <div className="text-xs ">Sunrise</div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="mt-1">
          <WiMoonWaningCrescent3 size={40} />
        </div>
        <div>
          <div className="text-lg ">
            {String(data.currentConditions.sunset).split(":")[0] +
              ":" +
              String(data.currentConditions.sunset).split(":")[1]}
          </div>
          <div className="text-xs  ">Sunset</div>
        </div>
      </div>
    </div>
  );
}

export default CardBottom;
