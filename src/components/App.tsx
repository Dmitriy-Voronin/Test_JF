import React from "react";
import '../../main.global.scss';
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { useAppDispatch } from "../hooks/redux";
import { fetchUsers } from "../store/reducers/usersReducer";

export default function App() {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <Header />
      <Layout>
        <Sidebar />
        <Main />
      </Layout>
    </>

  )
}

