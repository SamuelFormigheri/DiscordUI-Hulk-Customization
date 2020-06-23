import React from 'react';

import Hulk from '../../assets/Hulk.jpg';
import Hawkeye from '../../assets/Hawkeye.jpg';
import Loki from '../../assets/Loki.jpg';
import MariaHill from '../../assets/MariaHill.jpg';
import NatashaRomanoff from '../../assets/NatashaRomanoff.jpg';
import NickFury from '../../assets/NickFury.jpg';
import SteveRogers from '../../assets/SteveRogers.jpg';
import Thor from '../../assets/Thor.jpg';
import TonyStark from '../../assets/TonyStark.jpeg';
import Ultron from '../../assets/Ultron.png';


import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  imgSrc: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, imgSrc }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}><img src={imgSrc} alt="imgSrc" /></Avatar>
      
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};
const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Bruce Benner" imgSrc={Hulk}/>
      <Role>Offline - 9</Role>

      <UserRow nickname="Clint Barton" imgSrc={Hawkeye}/>
      <UserRow nickname="Loki" imgSrc={Loki}/>
      <UserRow nickname="Maria Hill" imgSrc={MariaHill}/>
      <UserRow nickname="Natasha Romanoff" imgSrc={NatashaRomanoff}/> 
      <UserRow nickname="Nick Fury" imgSrc={NickFury}/>    
      <UserRow nickname="Steve Rogers" imgSrc={SteveRogers}/>
      <UserRow nickname="Thor" imgSrc={Thor}/>
      <UserRow nickname="Tony Stark" imgSrc={TonyStark}/>
      <UserRow nickname="Ultron" isBot imgSrc={Ultron}/>
    </Container>
  );
};

export default UserList;
