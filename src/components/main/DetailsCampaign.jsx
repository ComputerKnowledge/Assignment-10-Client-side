import { useLoaderData } from "react-router-dom";

const DetailsCampaign = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3>This is the campaign details page.</h3>
    </div>
  );
};

export default DetailsCampaign;
