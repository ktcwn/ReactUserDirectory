import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}
        phone={friends[0].phone}
        email={friends[0].email}
        dob={friends[0].dob}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        phone={friends[1].phone}
        email={friends[1].email}
        dob={friends[1].dob}
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        phone={friends[2].phone}
        email={friends[2].email}
        dob={friends[2].dob}
      />
    </Wrapper>
  );
}

export default App;
