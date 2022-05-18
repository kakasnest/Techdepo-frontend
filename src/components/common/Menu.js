import MenuLink from "./MenuLink";

const menu = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "Categories",
    to: "/categories",
  },
  {
    id: 3,
    name: "Register",
    to: "/register",
  },
  {
    id: 4,
    name: "Login",
    to: "/login",
  },
  {
    id: 5,
    name: "Add a product",
    to: "/addP_temp",
  },
];

const Menu = () => {
  return (
    <>
      {menu.map((m) => (
        <MenuLink {...m} key={m.id} />
      ))}
    </>
  );
};

export default Menu;
