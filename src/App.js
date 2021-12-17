import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";
import { GET_USERS, CREATE_USERS } from "./querys/index";

function App() {
  const [createUser, { data: userData, loading: loadingUserData }] =
    useMutation(CREATE_USERS);

  const teste = () => {
    createUser({
      variables: {
        firstName: "Jão",
        lastName: "Silva",
        email: "email8@email.com",
        password: "123456",
        role: "A",
      },
    })
      .then(() => {
        console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsers = useQuery(GET_USERS);

  if (getUsers.loading) return <p>Loading...</p>;
  if (getUsers.error) return <p>Error :${getUsers.error}</p>;

  console.log(getUsers.data);
  return (
    <div className="App">
      {getUsers.data.users.map((user) => (
        <>
          <p key={user.userId}>{user.firstName}</p>
        </>
      ))}
      <button onClick={teste}>Create user</button>
    </div>
  );
}

export default App;
