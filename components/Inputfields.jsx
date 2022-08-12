import React from "react";
import { useForm } from "react-hook-form";

export default function Inputfields({ fetchdata }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3004/notes`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => fetchdata());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5 w-80 p-5"
    >
      <input
        {...register("notes", { required: true })}
        placeholder="Notes"
        className="border rounded-sm p-1 px-3"
      />
      <input
        {...register("description", { required: true })}
        placeholder="Details"
        className="border rounded-sm p-1 px-3"
      />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <input
        type="submit"
        className="bg-blue-600 text-white rounded-md p-2 px-3 cursor-pointer"
      />
    </form>
  );
}
