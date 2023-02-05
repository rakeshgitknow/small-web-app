import {   Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
import MenuBar from "../Layout/MenuBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <section className={`bg-slate-50 min-h-screen md:pl-16`}>
      <MenuBar/>
      <main className={``}>
        <Outlet />
      </main>
    </section>
  )
};