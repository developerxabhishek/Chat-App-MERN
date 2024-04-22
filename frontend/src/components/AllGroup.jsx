import axios from "axios";

import { useEffect, useState } from "react";

const AllGroup = () => {
  const [Data, setData] = useState([]);
  const [user, setUser] = useState({});
  const userdetails = JSON.parse(localStorage.getItem("userInfo"));

  console.log(Data);
  const getdata = useEffect(() => {
    axios
      .get("/api/chat/allgroups", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const handleClick = async (grpid) => {
    await setUser({
      chatId: grpid,
      userId: userdetails._id,
    });
    joingrp();
  };
  const joingrp = () => {
    axios.put("/api/chat/groupadd", user).then((res) => {
      alert("successfully joined group");
    });
  };

  return (
    <>
      <center>
        <table
          style={{
            width: "600px",
            border: "1px solid white",
            textAlign: "center",
            color: "black",
            marginTop: "50px",
          }}
        >
          <thead
            style={{ border: "1px solid white", backgroundColor: "beige" }}
          >
            <th>Group Name</th>
            <th>Admin Name</th>
            <th>Join</th>
          </thead>
          <tbody style={{ backgroundColor: "beige" }}>
            {Data.map((data) => {
              return (
                <tr style={{ border: "1px solid white" }}>
                  <td>{data.chatName}</td>
                  <td>{data.groupAdmin.username}</td>
                  <td>
                    <button
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "blue",
                      }}
                      onClick={() => {
                        handleClick(data._id);
                      }}
                    >
                      Join group
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </>
  );
};
export default AllGroup;
