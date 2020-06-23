import React from 'react';

import Hulk from '../../assets/Hulk.jpg';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';


const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar><img src={Hulk} alt="Hulk" /></Avatar>
        <UserData>            
            <strong>Bruce Benner</strong>
            <span>#1962</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
