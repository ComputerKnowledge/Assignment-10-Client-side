import { useContext } from "react";
import { AssetContext } from "../authprovider/AuthProvider";

const Test1 = () => {
  const asset = useContext(AssetContext);
  console.log(asset);
  return <div>hello world1</div>;
};

export default Test1;
