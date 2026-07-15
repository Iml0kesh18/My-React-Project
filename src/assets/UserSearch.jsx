import { useState } from "react";
import User from "./User";

const UserSearch = () => {
  let [username, setUsername] = useState("");
  let [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    setSearch(username);
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">
            GitHub User 
          </h2>
          <form onSubmit={handleSubmit} className="input-group mb-4">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter GitHub Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <button className="btn btn-primary w-100" type="submit" > search</button>
          </form>
          <User username={search} />
        </div>
      </div>
    </div>
  );
};

export default UserSearch;