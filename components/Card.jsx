import React from "react";

export default function Card({ ele, fetchdata }) {
  //   console.log(ele[0]);
  function deletefun(e) {
    fetch(`http://localhost:3004/notes/${e}`, {
      method: "DELETE",
    }).then(() => fetchdata());
  }
  return (
    <div
      className="flex flex-col space-y-4 border-2 rounded p-3 my-3"
      key={ele[0].id}
    >
      <p>Name :- {ele[0].notes}</p>
      <p>Description :- {ele[0].description}</p>
      <div className="flex space-x-2">
        <button
          className="bg-red-500 rounded p-2 px-3"
          onClick={() => deletefun(ele[0].id)}
        >
          Delete
        </button>
        {/* <button className="bg-blue-500 rounded p-2 px-3">Update</button> */}
      </div>
    </div>
  );
}
