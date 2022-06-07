import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  width: 80%;
  height: fit-content;
  .loading {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgb(211,211,211);
    z-index: 44;
    overflow: hidden;
    border-radius: 5px;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
`;

export const Img = styled.img`
  width:100%
`;

export const Name = styled.h4`
margin-left: 10px;
`;

export const Email = styled.p`
  margin-left: 10px;
`;
