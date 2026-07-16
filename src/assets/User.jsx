import { useEffect, useState } from "react";

const User = ({ username }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const getUser = async () => {

        if (!username) return;

        setLoading(true);

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        getUser();
    }, [username]);

    if (!username) {
        return (
            <div className="alert alert-info text-center shadow-sm rounded-3">
                🔍 Search a GitHub user to view profile details.
            </div>
        );
    }

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status"></div>
                <p className="mt-3 fw-semibold">Loading...</p>
            </div>
        );
    }
    if (user.message === "Not Found") {
        return (
            <div className="alert alert-danger text-center shadow-sm">
                ❌ User not found.
            </div>
        );
    }
    return (
        <div className="d-flex justify-content-center">
            <div
                className="card shadow-lg border-0 rounded-4 overflow-hidden"
                style={{ maxWidth: "450px" }}
            >
                <div className="bg-primary text-center p-4">
                    <img
                        src={user.avatar_url}
                        alt="Profile"
                        className="rounded-circle border border-4 border-white shadow"
                        width="140"
                        height="140"
                    />
                </div>
                <div className="card-body text-center">
                    <h3 className="fw-bold mb-1">
                        {user.name}
                    </h3>
                    <h6 className="text-muted mb-4">
                        @{user.login}
                    </h6>
                    <div className="row text-center mb-4">
                        <div className="col">
                            <h5 className="fw-bold text-primary">
                                {user.followers}
                            </h5>
                            <small>Followers</small>
                        </div>
                        <div className="col">
                            <h5 className="fw-bold text-success">
                                {user.following}
                            </h5>
                            <small>Following</small>
                        </div>
                        <div className="col">
                            <h5 className="fw-bold text-danger">
                                {user.public_repos}
                            </h5>
                            <small>Repos</small>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush text-start mb-4">
                        <li className="list-group-item">
                            <strong>Name :</strong> {user.name || "N/A"}
                        </li>
                        <li className="list-group-item">
                            <strong>Username :</strong> {user.login}
                        </li>
                        <li className="list-group-item">
                            <strong>Company :</strong> {user.company || "N/A"}
                        </li>
                        <li className="list-group-item">
                            <strong>Location :</strong> {user.location || "N/A"}
                        </li>
                        <li className="list-group-item">
                            <strong>Bio :</strong> {user.bio || "No bio available"}
                        </li>
                    </ul>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-lg w-100 rounded-pill"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default User;