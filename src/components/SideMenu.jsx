import React from "react";
import { Select } from "@mantine/core";

import { IconCurrentLocation, IconSearch } from "@tabler/icons-react";
import "./side.css";
import { useMediaQuery } from "@mantine/hooks";

function SideMenu({ data, dataCities, setValue }) {
  console.log(data);
  const largeScreen = useMediaQuery("(min-width: 60em)");

  return (
    <div
      className={`${
        largeScreen ? "w-1/3" : "w-full"
      } h-screen gap-3 flex flex-col items-center py-4 `}
    >
      <Select
        icon={<IconSearch size="15px" className=" stroke-black " />}
        rightSection={
          <IconCurrentLocation size="1rem" className="opacity-50 " />
        }
        rightSectionWidth={30}
        radius="lg"
        defaultValue="select a city"
        size="sm"
        onChange={(event) => {
          setValue(event);
        }}
        styles={{
          input: {
            backgroundColor: "#ababab",
            borderColor: "#ababab",
          },
        }}
        placeholder="Select a City"
        searchable
        nothingFound="Not Found"
        data={dataCities}
      />

      {!data ? (
        <div>loading</div>
      ) : (
        <div className="flex flex-col gap-5 items-center ">
          <div className=" text-3xl font-semibold pb-7 ">
            {String(data.address).toLocaleUpperCase("tr-TR")}
          </div>

          <img
            width={100}
            src={`/icons/color/${data.currentConditions.icon}.svg`}
            alt="icon"
          />
          <div className="flex ">
            <div className="text-8xl ">
              {
                String(((data.currentConditions.temp - 32) * 5) / 9).split(
                  "."
                )[0]
              }
            </div>
            <div className="text-3xl mt-2 ">o</div>
            <div className="text-5xl  mt-3 ">C</div>
          </div>

          <div className="flex gap-1 justify-start  text-slate-800   ">
            <p>Feels like </p>
            <div className="flex  ">
              <div>
                {String(
                  ((data.currentConditions.feelslike - 32) * 5) / 9
                ).includes(".")
                  ? String(data.currentConditions.feelslike).indexOf(`.`) &&
                    String(
                      ((data.currentConditions.feelslike - 32) * 5) / 9
                    ).split(".")[0] +
                      "." +
                      String(((data.currentConditions.feelslike - 32) * 5) / 9)
                        .split(".")[1]
                        .slice(0, 1)
                  : String(((data.currentConditions.feelslike - 32) * 5) / 9)}
              </div>
              <div className="text-xs  ">o</div>
              <div className="text-xs   " style={{ marginTop: "3px" }}>
                C
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <img
              width={35}
              height={35}
              src={`/icons/blackWhite/${data.currentConditions.icon}.svg`}
              alt="icon"
            />

            <div className="text-lg">
              {String(data.currentConditions.conditions).toLocaleUpperCase()}
            </div>
          </div>
          <div className="bg-black w-full h-[1px]  opacity-30" />

          <div className="flex  gap-1 font-semibold font-daysFont text-3xl tracking-widest">
            <div>{new Date().toLocaleString("en-us", { weekday: "long" })}</div>
            <div className="text-slate-800">
              {new Date().toLocaleTimeString().slice(0, 5)}
            </div>
          </div>
          {}
        </div>
      )}
    </div>
  );
}

export default SideMenu;
