import React, { Component } from "react";
import { ApolloProvider, Query } from "react-apollo";
import client from "./client";
import { gql } from "graphql-tag";

const ME = gql`
  query me {
    user(login: "nakayamaron-dev") {
      name
      avatarUrl
    }
  }
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Hello GraphQL</div>

        <Query query={ME}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return <div>{data.user.name}</div>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
