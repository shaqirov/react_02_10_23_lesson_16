import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();
  function back() {
    navigate("/");
  }
  return (
    <>
      <button onClick={back}>Назад</button>
      <Outlet />
    </>
  );
}
