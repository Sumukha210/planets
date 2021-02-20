import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Card from "../common/Cards";
import { DisplayCards, Main, Message } from "../common/CommonStyles";

const Favorite = () => {
  const { favData } = useContext(DataContext);

  return (
    <Main>
      <DisplayCards>
        {favData
          ? favData.map(({ name, id }) => <Card name={name} key={id} id={id} />)
          : "Loading...."}
        {!favData.length && <Message>No favorites are added...</Message>}
      </DisplayCards>
    </Main>
  );
};

export default Favorite;
