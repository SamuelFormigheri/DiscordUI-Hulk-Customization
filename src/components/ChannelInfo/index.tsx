import React from 'react';

import { Container, HashTagIcon, Title, Separator, Description } from './styles';


const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />
      <Title>Chat Livre</Title>
      <Separator/>
      <Description>Canal aberto para conversar</Description>
    </Container>
  );
};

export default ChannelInfo;
