import React from "react";
import Card from "./Card";

export default function Notes({ fetchdata, data }) {
  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="w-screen flex flex-col space-y-5">
      <h1 className="font-bold text-gray-700 text-2xl">All Notes</h1>
      <div className="w-full container flex flex-row flex-wrap justify-evenly">
        {data.length === 0 ? (
          <h1>Nothing to show</h1>
        ) : (
          data.map((ele) => {
            return <Card ele={[ele]} key={ele.id} fetchdata={fetchdata} />;
          })
        )}
      </div>
    </div>
  );
}
