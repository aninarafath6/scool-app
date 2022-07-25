import NavigationItem from "./NavigationItem";

export default function Navigation({ size = "sm" }) {
  // all navigation items
  const navigators = ["Home", "About", "Contact", "Explore"];
  return (
    <ul
      className={`${
        size == "md"
          ? " justify-evenly text-center flex flex-col  gap-8 h-full"
          : "lg:flex gap-10 cursor-pointer  ease-in-out hidden  text-lg duration-300 "
      }`}
    >
      {navigators.map((navigation, index) => (
        <NavigationItem key={index} label={navigation} />
      ))}
    </ul>
  );
}
//
