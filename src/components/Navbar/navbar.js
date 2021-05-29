import React, { useState } from 'react';
import styled from 'styled-components';
import BillModal from '../BillModal';

const Wrapper = styled.div`
  padding: 25px 50px;
  display: flex;
  align-items: center;
  background: black;
  h1 {
    margin: 0;
    color: #fff;
  }
  .due-bill {
    margin-left: auto;
    background: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
  }
`;

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper>
      {/* <BillModal visible={visible} setVisible={setVisible} /> */}
      <h1>Bright Money</h1>
     
      <BillModal visible={visible} setVisible={setVisible} />
      <div className='due-bill' onClick={() => setVisible(true)}>
       Pay Bill
      </div>
    </Wrapper>
  );
}
