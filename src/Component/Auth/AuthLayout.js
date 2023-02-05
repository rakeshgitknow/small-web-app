import { useLoaderData, useOutlet } from "react-router-dom";
import { AuthProvider } from "../../Hook/useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};