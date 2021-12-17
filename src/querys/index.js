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
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        role: $role
      }
    ) {
      userId
      firstName
      lastName
      email
      role
    }
  }
`;
export { GET_USERS, CREATE_USERS };
