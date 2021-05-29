import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 50px;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    padding: 25px 10px;
  }
  .ant-row {
    width: 100%;
  }
  .ant-col {
    padding: 0 20px;
    @media (max-width: 990px) {
      margin-bottom: 30px;
    }
  }
  .ant-input-number {
    width: 350px;
    align-items :Center;
  }

  .input-box {
    height: 48px;
    width: 350px;
    border-radius: 6px;
    border:solid;
  }
  .button{
    height: 48px;
    border-radius: 6px;
    border:Solid;

    
  }
  .button-box {
    display: flex;
    width: 300px;
    
    .ant-btn {
      padding: 0 50px;
    }
  }
`;
