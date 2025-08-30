import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Addwhitelist() {
  const [username, setUsername] = useState("");

  const addWhitelist = async () => {
    // console.log("click");s
    console.log(username);
    try {
      const respone = await axios.post(
        `${import.meta.env.VITE_API}/api/add-whitelist`,
        {
          username: username,
        }
      );

      //   toast.success(await respone.message);
      toast.success(respone.data.message);
    } catch (err) {
      //   console.log(err);
      toast.error(respone.data.message);
    }
  };

  return (
    <>
      <input
        type="text"
        className="pl-3 focus:outline-none "
        placeholder="enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 rounded-r-xl px-3 p-2 cursor-pointer font-bold"
        onClick={addWhitelist}
      >
        Add
      </button>
    </>
  );
}
