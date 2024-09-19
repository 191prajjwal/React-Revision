import React from "react";
import { useParams } from "react-router-dom";

export default function Aadhar() {
  const {id,no}=useParams()
  return (
    <>
      <h1>This is aadhar </h1>
      {id==="user1" && no==="123" && <h1>User 1 has aadhar no 123</h1>}
      {id==="user2" && no==="321" && <h1>User 2 has aadhar no 321</h1>}
      {id==="user3" && no==="1234" && <h1>User 1 has aadhar no 1234</h1>}

    </>
  );
}
