import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
   <SectionDivider />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a range of technologies in the web development world.
     From Front-End To Back-end.
   </SectionText>
   <List>
    <ListItem>
      <DiReact size= "3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience With <br />
          Javascript  <br />
          Typescript <br />
          Angular <br />
          React.js & React Native <br />
          Python     <br />
          C/C++     
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size= "3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience With <br />
          Nodejs <br />
          MySQL <br />
          MongoDB <br />
          GraphQL <br />
          AWS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size= "3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience With <br />
          Figma <br />
          Photoshop 
        </ListParagraph>
      </ListContainer>
    </ListItem>
   </List>
  </Section>
);

export default Technologies;
