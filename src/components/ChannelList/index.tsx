import React from 'react';

import { Container,Category,AddCategoryIcon, Separator } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon/>
      </Category>
      <Separator />
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="shield" />
    </Container>
  );
};

export default ChannelList;
