import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoàng", age: "21" },
    { id: 2, name: "Trang", age: "20" },
    { id: 3, name: "Huy", age: "10" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((user) => user.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <DisplayInfo handleDeleteUser={handleDeleteUser} listUsers={listUsers} />
    </>
  );
};

export default MyComponent;
