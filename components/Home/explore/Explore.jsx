import Button from "@components/common/Button";
import Paragraph from "@components/common/Paragraph";
import Spacer from "@components/common/Spacer";
import React from "react";
import Lottie from "react-lottie";
import animationData from "public/icons/Explore/explore 2.json";

function Explore() {
  const [animation, setAnimation] = React.useState(false);
  // lottie animation options
  const animationOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex height-full flex-row">
      <div className=" w-full  lg:p-5">
        <h1 className="font-bold text-5xl mb-2">Learn Like a Pro</h1>
        <Paragraph>
          You can learn literally anything with our custom-made roadmaps. Which
          guides you through the steps to success.
        </Paragraph>
        <Spacer height={0.25} type={"rem"} />
        <Paragraph>You&apos;ll have us by your side 😉</Paragraph>
        <Spacer height={1.25} type={"rem"} />
        <Button
          onMouseEnter={() => setAnimation(true)}
          onMouseLeave={() => setAnimation(false)}
        >
          <Lottie
            options={animationOptions}
            height={25}
            width={25}
            direction={animation ? 1 : -1}
          />
          <Spacer width={0.25} type={"rem"} />
          Explore our Maps
        </Button>
      </div>
      <div className=" w-full ">
        <h1 className="font-bold">Learn Like a Pro</h1>
        <div className="w-36 h-30 bg-red-50"></div>
      </div>
    </div>
  );
}

export default Explore;
