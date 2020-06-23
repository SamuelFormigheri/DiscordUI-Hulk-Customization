import React, {useRef, useEffect} from 'react';

import Hawkeye from '../../assets/Hawkeye.jpg';
import Loki from '../../assets/Loki.jpg';
import MariaHill from '../../assets/MariaHill.jpg';
import NatashaRomanoff from '../../assets/NatashaRomanoff.jpg';
import NickFury from '../../assets/NickFury.jpg';
import SteveRogers from '../../assets/SteveRogers.jpg';
import Thor from '../../assets/Thor.jpg';
import TonyStark from '../../assets/TonyStark.jpeg';
import Ultron from '../../assets/Ultron.png';

import ChannelMessage, {Mention} from '../ChannelMessages';

import { Container, Messages,InputWrapper,Input,InputIcon } from './styles';


const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
        <Messages>
          <ChannelMessage author = "Clint Barton" date="10/06/2020" content="Chamado da Shield." imgSrc={Hawkeye}/>
          <ChannelMessage author = "Loki" date="11/06/2020" content="Sua aberração. Acha que pode bater em mim e sair impune?" imgSrc={Loki}/>
          <ChannelMessage author = "Maria Hill" date="11/06/2020" content="Nick Fury está lhe procurando." imgSrc={MariaHill}/>
          <ChannelMessage author = "Natasha Romanoff" date="12/06/2020" content={
            <>
            <Mention>@Bruce Benner</Mention>. Tem algo que eu preciso lhe falar. Eu te amo.
          </>
          } hasMention imgSrc={NatashaRomanoff}/>
          <ChannelMessage author = "Nick Fury" date="12/06/2020" content="Preciso de você aqui." imgSrc={NickFury}/>
          <ChannelMessage author = "Nick Fury" date="13/06/2020" content="É URGENTE, você precisa estar aqui. JÁ." imgSrc={NickFury}/>
          <ChannelMessage author = "Natasha Romanoff" date="14/06/2020" content="<3 <3 <3 <3 <3 <3" imgSrc={NatashaRomanoff}/>
          <ChannelMessage author = "Steve Rogers" date="15/06/2020" content="Nick Fury está louco atrás de você." imgSrc={SteveRogers}/>
          <ChannelMessage author = "Thor" date="16/06/2020" content="Onde você está?" imgSrc={Thor}/>
          <ChannelMessage author = "Tony Stark" date="17/06/2020" content="Verdinho, vê se aparece aí verdinho." imgSrc={TonyStark}/>
          <ChannelMessage author = "Nick Fury" date="18/06/2020" content="Ultron está a caminho, precisamos de você." imgSrc={NickFury}/>
          <ChannelMessage author = "Ultron" date="22/06/2020" content={
            <>
              <Mention>@Bruce Benner</Mention>, você é o próximo, você será esmagado até o último dos ossos!
            </>
          } hasMention isBot imgSrc={Ultron}/>
        </Messages>
        <InputWrapper>
          <Input type="text" placeholder="Conversar em # chat-livre"/>
          <InputIcon />
        </InputWrapper>
    </Container>
  );
};

export default ChannelData;
