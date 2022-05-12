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
