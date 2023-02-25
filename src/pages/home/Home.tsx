import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>hello world</h1>
      <button>
        <Link to="/auth">Auth</Link>
      </button>
    </>
  );
};
export default Home;
