import React, { useState, useEffect } from 'react';
import { Input, InputNumber, Button, Row, Col, message } from 'antd';
import { Wrapper } from './style';
import { addBill } from '../../redux/action';
import { connect } from 'react-redux';
//localstorage getitems
// const getLocalItems=()=>{
//   let list=localStorage.getItem('lists');
//   console.log(list);
//   if(list){
//     return JSON.parse(localStorage.getItem('lists'));
//   }
//   else{
//     return [];
//   }
// }
///////


function Index({ addBill, billList }) {
  const [newBill, setNewBill] = useState({
    id: null,
    description: '',
    category: '',
    amount: null,
    date: new Date().toISOString().slice(0, 10),
  });
    

  ///local storage
  useEffect(()=>{
    console.log("Newbill");
    localStorage.setItem('lists',JSON.stringify(newBill))
  },[newBill]);
  useEffect(()=>{
    
    localStorage.setItem('Billlists',JSON.stringify(billList))
    console.log(localStorage.getItem('Billlists'));
  },[billList]);

  const handleChange = (field) => (e) => {
    setNewBill((prevState) => ({ ...prevState, [field]: field === 'amount' ? e : e.target.value }));
  };

  const handleAdd = () => {
    addBill({ ...newBill, id: billList.length + 1 });
    message.success('Added data successfully!');
    setNewBill((prevState) => ({
      ...prevState,
      description: '',
      category: '',
      amount: null,
    }));
  };

  return (
    <Wrapper>
      <Row>
        <Col xs={20} lg={6}>
          {/* <p>Amount</p> */}
          <InputNumber
            value={newBill.amount}
            onChange={handleChange('amount')}
            className='input-box'
            placeholder="Amount"
          />
        </Col>
        <Col xs={20} lg={6}>
          {/* <p>Category</p> */}
          <Input
            value={newBill.category}
            onChange={handleChange('category')}
            className='input-box'
            placeholder="Category"
          />
        </Col>
        <Col xs={20} lg={6}>
          {/* <p>Description</p> */}
          <Input
            value={newBill.description}
            onChange={handleChange('description')}
            className='input-box'
            placeholder="Description"
          />
        </Col>
        <Col xs={20} lg={4} className='button-box'>
          <Button onClick={handleAdd} className='input-box'>
            Add
          </Button>
        </Col>
      </Row>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    billList: state,
  };
};

export default connect(mapStateToProps, {
  addBill,
})(Index);
