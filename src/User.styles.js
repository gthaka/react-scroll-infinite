import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: white;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
  background: blue;
  /* background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  */
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  width: 80%;
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
