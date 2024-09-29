import React from "react";
import styled from "styled-components";

const UserWrapper = styled.div`
  min-width: 430px;
  background-color: ${(props) => props.backgroundcolor};
  margin: 5px 5px;
  padding: 7px;
  border: 3px dotted rgb(8, 0, 255);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserImg = styled.img`
  margin-top: 3px;
  width: 200px;
`;

function UserStyledComponents({ info }) {
  return (
    <UserWrapper backgroundcolor="rgb(225, 122, 194)">
      <h1>{`${info.name.first} ${info.name.last}`}</h1>
      <UserImg alt="user " src={info.picture.medium} />
      <p>
        <b>Email:</b> {info.email}
      </p>
      <p>
        <b>Phone:</b> {info.phone}
      </p>
    </UserWrapper>
  );
}

export default UserStyledComponents;
