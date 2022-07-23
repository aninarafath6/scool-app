import NavigationItem from "./NavigationItem";

export default function Navigation({ size = "sm" }) {
  return (
    <ul
      className={`${
        size == "md"
          ? " justify-evenly text-center flex flex-col  gap-24 h-screen"
          : "lg:flex gap-10 cursor-pointer  ease-in-out hidden  text-lg duration-300 "
      }`}
    >
      <NavigationItem label="Home" />
      <NavigationItem label="About" />
      <NavigationItem label="Contact" />
      <NavigationItem label="Explore" />
    </ul>
  );
}
//
