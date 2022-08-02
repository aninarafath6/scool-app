export default function LoginButton({ size = "sm" }) {
  return (
    <div className={`${size == "lg" ? "invisible lg:visible" : ""} `}>
      <button
        className={`${
          size == "lg" ? "rounded-full" : "rounded-md w-full md:w-1/2"
        } bg-black px-7 text-white p-2  hover:bg-zinc-800  `}
      >
        Sign in
      </button>
    </div>
  );
}
