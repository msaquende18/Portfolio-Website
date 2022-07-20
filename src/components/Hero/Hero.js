import React from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi There, My name is Marcelino Saquende, I am Full Stack Developer, I have excellent programming skills, strong problem-solving skills, and a passion for developing and improving applications utilizing cutting edge technologies.
        </SectionText>
        <Button onClick={props.handleClick} >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;