import { useState } from "react";
import { useEffect } from "react";
/* import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext" */

const Login = () => {

  /* const { login } = useContext(AuthContext); */

  const [userState, setUserState] = useState([]);

  const url = "http://localhost:3001/UsersInfo";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUserState(data);
      } catch (error) {

      }
    }

    fetchUserData()
    console.log(fetchUserData())
  }, [url])

  console.log(userState);



  return (
    <>
      <div>
        {userState.map((user) => (
          <div key={user.id}>
            <div>
              <p>
                {user.email}
              </p>
              <p>
                {user.password}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>

  )



}

export default Login