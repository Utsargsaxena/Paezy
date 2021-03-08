import React from 'react'
import {InfoContainer,  InfoWrapper, InfoRow , Column1, Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img} from './InfoElements';
import {Button} from '../ButtonElement'
const InfoSection = ({lightBg,lightText,id,imgStart,headline,darkText,description,buttonlabel,img,alt}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{TopLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button to='home'>{buttonlabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                       <ImgWrap>
                       <Img src={img} alt={alt}/>
                       </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    );
};

export default InfoSection
