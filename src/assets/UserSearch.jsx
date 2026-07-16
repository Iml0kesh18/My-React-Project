import { useState } from "react";
import User from "./User";

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    setSearch(username);
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="text-center fw-bold text-primary mb-2">
                GitHub User Search
              </h2>
              <p className="text-center text-muted mb-4">
                Search any GitHub profile instantly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-group input-group-lg shadow-lg rounded-pill overflow-hidden border border-2 border-primary">
                  <span className="input-group-text bg-white border-0 ps-4">
                    <i className="bi bi-search text-primary fs-4"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none py-3"
                    placeholder="Search GitHub Username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn text-white px-5 fw-bold"
                    style={{
                      background: "linear-gradient(90deg,#4f46e5,#06b6d4)",
                      border: "none"
                    }}
                  >
                    <i className="bi bi-search me-2"></i>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-5">
            <User username={search} />
            <footer className="bg-dark text-white text-center py-3 rounded-4 shadow mt-5">
              <p className="mb-0">
                © 2026 GitHub User Search | : Lokesh Patil
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;