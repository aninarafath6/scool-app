import Image from "@next/image";

function Logo({ size = "md", src, w = 130, h = 70 }) {
  return (
    <div className={size == "md" ? "hidden md:block" : "md:hidden block "}>
      <Image
        src={src}
        alt="Picture of the author"
        width={w}
        height={h}
        className="w-auto h-auto "
      />
    </div>
  );
}

export default function LogoWrapper() {
  return (
    <>
      <Logo src="/logo-md.png" size="md" />
      <Logo src="/logo-sm.png" size="sm" w={50} h={48} />
    </>
  );
}
