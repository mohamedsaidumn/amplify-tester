"use client";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  const adder = async () => {
    try {
      const response = await fetch(`/api/adder?count=${count}`); // Replace '/api/example' with your API endpoint
      const data = await response.json();
      console.log(data);
      setCount(parseInt(data["count"]));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
  const sub = async () => {
    try {
      const response = await fetch(`/api/sub?count=${count}`); // Replace '/api/example' with your API endpoint
      const data = await response.json();
      console.log(data);
      setCount(parseInt(data["count"]));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
  return (
    <>
      <button onClick={adder}>Adder</button>
      <button onClick={sub}>Sub</button>
      <div>{count}</div>
    </>
  );
}
