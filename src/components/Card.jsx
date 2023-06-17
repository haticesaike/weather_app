import React from "react";

function Card({ day, data }) {
  return (
    <div className="flex flex-col bg-[#252525]  h-full rounded-3xl bg-opacity-30 justify-around items-center    ">
      <div className="text-xl">
        {new Date(data.days[day].datetime).toLocaleString("en-us", {
          weekday: "long",
        })}
      </div>
      <div>
        <img
          width={35}
          height={35}
          src={`/icons/blackWhite/${data.days[day].icon}.svg`}
          alt="icon"
        />
      </div>
      <div className="flex text-center">{data.days[day].conditions}</div>
      <div className="flex ">
        <div>
          {String(((data.days[day].temp - 32) * 5) / 9).includes(".")
            ? String(((data.days[day].temp - 32) * 5) / 9).split(".")[0] +
              "." +
              String(((data.days[day].temp - 32) * 5) / 9)
                .split(".")[1]
                .slice(0, 1)
            : String(((data.days[day].temp - 32) * 5) / 9)}
        </div>
        <div className="text-xs  ">o</div>
        <div className="text-xs   " style={{ marginTop: "3px" }}>
          C
        </div>
      </div>
    </div>
  );
}

export default Card;
