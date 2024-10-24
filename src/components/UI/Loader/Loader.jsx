import { LoaderDivWrapper } from "./Loader.styled";
import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderDivWrapper>
      <Audio
        height="100"
        width="100"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        color="#f72585"
      />
      ;
    </LoaderDivWrapper>
  );
}
