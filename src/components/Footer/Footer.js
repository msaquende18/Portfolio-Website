import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
      <LinkList>
         <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+244 939181313">+244 939181313</LinkItem>
         </LinkColumn>
         <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:msaquende@gmail.com">msaquende@gmail.com</LinkItem>
         </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright ©2021 | This template is made <i className='fa fa-heart'></i> by Marcelino Saquende</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/marcelo-newman/marcelo-newman">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/marcelino-saquende-3b1a29176/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/marcelino_saquende.dev/">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
    </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
