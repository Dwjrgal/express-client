import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";
import TextInput from "./text-input";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [inputOpen, setInputOpen] = useState(false);
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };
  const open = () => {
    setInputOpen(true);
  };

  const addList = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: name,
        email: email,
        position: position,
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    console.log("AE", user);
    setUsers([...users, user]);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  console.log("name", name);
  return (
    <>
      <section className="flex justify-center mt-20">
        <div className="overflow-x-auto bg-slate-200 rounded">
          <table className="table">
            <UserHead />
            <tbody>
              {users?.map((user) => (
                <UserRow user={user} />
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-outline btn-success h-5 ml-5" onClick={open}>
          Add list
        </button>
      </section>

      {inputOpen && (
        <TextInput
          addList={addList}
          setName={setName}
          name={name}
          setEmail={setEmail}
          email={email}
          setPosition={setPosition}
          position={position}
        />
      )}
    </>
  );
};

export default UserList;
