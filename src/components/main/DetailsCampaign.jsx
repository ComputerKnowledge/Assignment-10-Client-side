import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Auth } from "../../authprovider/AuthProvider";

const DetailsCampaign = () => {
  // const [donateAble, setDonateAble] = useState(true);
  const { user } = useContext(Auth);
  const Usr = user.email;
  const data = useLoaderData();
  const { title, type, description, amount, date, email, name } = data;
  const currentDate = new Date().getTime() - 86400000;
  const expireDate = new Date(date).getTime();
  // if (currentDate > expireDate) {
  //   setDonateAble(false);
  // }

  console.log(currentDate, expireDate);

  const handleDonate = () => {
    fetch("http://localhost:5000/donations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        type,
        description,
        amount,
        date,
        email,
        name,
        Usr,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h3>This is the campaign details page.</h3>
      <p>{title}</p>
      <p>{type}</p>
      <p>{description}</p>
      <p>{amount}</p>
      <p>{date}</p>
      <p>{email}</p>
      <p>{name}</p>
      {currentDate <= expireDate && (
        <button onClick={handleDonate} className="btn btn-primary btn-outline">
          donate ${amount}
        </button>
      )}
    </div>
  );
};

export default DetailsCampaign;
