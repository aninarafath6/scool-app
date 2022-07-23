import NavigationItem from "./NavigationItem";

export default function Navigation() {
  return (
    <ul className="lg:flex gap-10 cursor-pointer  ease-in-out hidden  text-lg duration-300">
      <NavigationItem label="Home" />
      <NavigationItem label="About" />
      <NavigationItem label="Contact" />
      <NavigationItem label="Explore" />
    </ul>
  );
}
