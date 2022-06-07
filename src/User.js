import React from 'react';
// Styles
import { Wrapper, Card, Img, Name, Email } from './User.styles';

const User = ({ user }) => (
    // <Wrapper>
        <Card>
            <Img src={user.picture.large} alt={user.name.first} />
            <Name>{`${user.name.title} ${user.name.first} ${user.name.last} `}</Name>
            <Email>{user.email}</Email>
        </Card>
    // </Wrapper>
    );

export default User;
