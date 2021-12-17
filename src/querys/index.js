import { gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      userId
      firstName
      lastName
      email
      role
    }
  }
`;

const CREATE_USERS = gql`
  mutation (
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $role: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    )
  }
`;
export { GET_USERS, CREATE_USERS };
