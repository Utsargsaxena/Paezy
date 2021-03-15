import React from 'react'
import { FooterLinksContainer } from './FooterElements'
import{
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Suppport</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink> 
                    </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}
  
export default Footer
