import { useEffect } from "react";
import { useState } from "react";

const User = ({ username }) => {

    let [user, setUser] = useState({});
    let getUser = async () => {
        await fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(response => setUser(response))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getUser();
    }, [username])
    return (
        <>
            {username ? (
                <div className="container">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={user.avatar_url} className="card-img-top" alt="Userimage" />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">UserName:&nbsp;{user.login}</li>
                            <li className="list-group-item">Name:&nbsp;{user.name}</li>
                        </ul>
                        <div className="card-body">
                            <a
                                href={user.html_url}
                                className="btn btn-success"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                </div>
            ) :
                (<h1>No User Found</h1>)
            }
        </>
    )
}

export default User;
