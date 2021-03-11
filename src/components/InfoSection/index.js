import React from 'react'
import {InfoContainer,  InfoWrapper, InfoRow ,TopLine, Column1, Column2,TextWrapper,Heading,Subtitle,BtnWrap,ImgWrap,Img} from './InfoElements';
import {Button} from '../ButtonElement';

const InfoSection = ({lightBg,id,imgStart,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart} >
                      <Column1>
                      <TextWrapper>
                          <TopLine><b>Premium Bank</b></TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 0 : 1}
                              dark={dark ? 0 : 1}
                              dark2={dark2 ? 0 : 1}
                              >{buttonLabel}</Button>
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
