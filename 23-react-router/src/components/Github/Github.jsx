import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/gitdeepaks").then((response) =>
  //       response.json().then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //     );
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-700 text-white text-3xl">
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} width={300} />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/gitdeepaks");
  return res.json();
};
