import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "./querys/index";

function App() {
  // const createMutation = useQuery(CREATE_USERS, {
  //   variables: {
  //     firstName: "Jão",
  //     lastName: "Silva",
  //     email: "email@email.com",
  //     password: "123456",
  //     role: "admin",
  //   },
  // });
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :${error}</p>;

  console.log(data);
  return (
    <div className="App">
      {data.users.map((user) => (
        <>
          <p key={user.userId}>{user.firstName}</p>
        </>
      ))}
      {/* <button onClick={createMutation}>Create user</button> */}
    </div>
  );
}

export default App;
