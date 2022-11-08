import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2+"+", text: 'Open Source Projects'},
  { number: 8+"+", text: 'projects  with Reactjs & React Native', },
  { number: 4+"+", text: 'projects  with Angular', },
  { number: 3+"+", text: 'projects  with Python', }
];

const Acomplishments = () => (
 <Section>
  <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) =>  (

        <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>

        </Box>
  ))}
    </Boxes>
 </Section>
);

export default Acomplishments;
