import { useEffect, useState } from "react";
import { NewUserForm } from "./components/NewUserForm";
import { Table } from "./components/Table";
import { getAllUsers } from "../../service/userService";

export const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        console.log("response", response);
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <NewUserForm />
      <Table rows={users} />
    </>
  );
};
