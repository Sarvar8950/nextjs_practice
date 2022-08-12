import React from "react";
import Inputfields from "./Inputfields";
import Notes from "./Notes";

export default function Layout({ children }) {
  const [pagerefresh, setpagerefresh] = React.useState(0);

  const [data, setdata] = React.useState([]);
  function fetchdata() {
    fetch(`http://localhost:3004/notes`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
        // console.log(res);
      });
  }
  return (
    <>
      <nav className="w-screen relative">
        <div className="container flex flex-row items-center justify-between mx-auto p-6">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/community">Community</a>
        </div>
      </nav>
      <div className="container mx-auto flex space-x-5 space-y-6">
        <Inputfields fetchdata={fetchdata} />
        <Notes fetchdata={fetchdata} data={data} />
      </div>
      {children}
    </>
  );
}
