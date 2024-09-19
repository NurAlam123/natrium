import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
