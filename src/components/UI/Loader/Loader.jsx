import { LoaderDivWrapper } from "./Loader.styled";
import { RotatingLines, Hourglass } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderDivWrapper>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
      {/* <RotatingLines
        strokeColor="#a2d2ff"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /> */}
    </LoaderDivWrapper>
  );
}
