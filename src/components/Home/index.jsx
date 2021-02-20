import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Card from "../common/Cards";
import { DisplayCards, Main, Message } from "../common/CommonStyles";

const Home = () => {
  const { data, error } = useContext(DataContext);
  return (
    <Main>
      <DisplayCards>
        {data ? (
          data.map(({ name, id }) => <Card name={name} key={id} id={id} />)
        ) : (
          <Message>Loading....</Message>
        )}
        {error && JSON.stringify(error)}
      </DisplayCards>
    </Main>
  );
};

export default Home;
