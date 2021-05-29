import React, { useState } from 'react';
import styled from 'styled-components';


const Styling = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  background: black;
  h1 {
    margin: 0;
    color: #fff;
  }
  .assign {
    margin-left: auto;
    color:white;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
  }
`;

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <Styling>
  
      <div><h1>Bright Money</h1></div>
      {/* <div className="assign"><h1>Assignment</h1></div> */}
    </Styling>
  );
}
