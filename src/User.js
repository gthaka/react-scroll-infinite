import React from 'react';
// Styles
import { Card, Img, Name, Email } from './User.styles';

const User = ({ user }) => (
        <Card>
            <Img src={user.picture.large} alt={user.name.first} />
            <Name>{`${user.name.title} ${user.name.first} ${user.name.last} `}</Name>
            <Email>{user.email}</Email>
        </Card>
    );

export default User;
