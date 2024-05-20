"use client";

import { useEffect, useState } from "react";

function useYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return year;
}

export default function Year() {
  const year = useYear();
  return <span>{year}</span>;
}

// clock
// "use client";
// import { useEffect, useState } from "react";

// function useTime() {
//   const [time, setTime] = useState(() => new Date());

//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return time;
// }

// export default function Clock() {
//   const time = useTime();
//   return <span>{time.toLocaleString()}</span>;
// }
