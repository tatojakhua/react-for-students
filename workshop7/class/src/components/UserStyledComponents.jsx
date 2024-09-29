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

function UserStyledComponents({ info }) {
  return (
    <UserWrapper backgroundcolor="rgb(225, 122, 194)">
      <h1>users</h1>
    </UserWrapper>
  );
}

export default UserStyledComponents;
