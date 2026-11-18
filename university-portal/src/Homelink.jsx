import { Link } from "react-router";
import homeLogo from "../assets/home-svgrepo-com.svg";

export default function HomeLink() {
  return (
    <Link to="/" className="homeLink" aria-label="Back to home">
      <img src={homeLogo} alt="Home logo" />
    </Link>
  );
}