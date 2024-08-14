import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  ////////////////////////////////////////////////////
  // This is one way of fetching data from API Call.This happens after click happens on the element.
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);

  // Another way of fetching data from API call, is by using Loader property in the Route.

  const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git profile picture" width="300px" />
      </div>
    </>
  );
}

export const loadInfo = async () => {
  const prom = await fetch("https://api.github.com/users/hiteshchoudhary");
  return prom.json();
};
