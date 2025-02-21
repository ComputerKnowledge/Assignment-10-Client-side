import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Auth } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";

const DetailsCampaign = () => {
  // const [donateAble, setDonateAble] = useState(true);
  const { user } = useContext(Auth);
  const Usr = user.email;
  const data = useLoaderData();
  const { title, type, description, amount, date, email, name, thumbnail } =
    data;
  const currentDate = new Date().getTime() - 86400000;
  const expireDate = new Date(date).getTime();
  // if (currentDate > expireDate) {
  //   setDonateAble(false);
  // }

  // console.log(currentDate, expireDate);

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
        thumbnail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have donated successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div>
      <h3 className="text-2xl">campaign details</h3>
      <p>The title of the campaign is :{title}</p>
      <p>The types of campaign is : {type}</p>
      <p>A little description about the campaign:</p>
      <p>{description}</p>
      <p>Minimum donated amount is : ${amount}</p>
      <p>Last date to contribute : {date}</p>
      <p>Contact in this main to know more : {email}</p>
      <p>The owner of this campaign is : {name}</p>
      {currentDate <= expireDate ? (
        <button onClick={handleDonate} className="btn btn-primary btn-outline">
          donate ${amount}
        </button>
      ) : (
        "Sorry, you will no longer contribute to the campaign. "
      )}
    </div>
  );
};

export default DetailsCampaign;
