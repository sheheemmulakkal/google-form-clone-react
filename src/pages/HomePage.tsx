import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Link to={"/admin/create-form"}>
        <button>Create form</button>
      </Link>
    </div>
  );
}

export default HomePage;
