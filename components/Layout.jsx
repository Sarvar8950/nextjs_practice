import React from "react";
import Inputfields from "./Inputfields";
import Notes from "./Notes";
import Link from 'next/link'

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
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/community">Community</Link>
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
