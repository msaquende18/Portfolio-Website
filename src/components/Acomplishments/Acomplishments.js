import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Open Source Projects'},
  { number: 8, text: 'projects  with React', },
  { number: 4, text: 'projects  with React Native', },
  { number: 10, text: 'projects  with Django', }
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
