import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
import MenuBar from "../Layout/MenuBar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/delivery/home" />;
  }

  return (
    <section className={`bg-slate-100 min-h-screen flex justify-center items-center`}>
      {outlet}
    </section>
  )
};