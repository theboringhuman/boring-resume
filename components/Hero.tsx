import styled from '@emotion/styled';
import Image from 'next/image';
import profilePic from '../public/static/images/DP.jpg'
import { Container } from './Container';

const StyleHeroContainer = styled(Container)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 4em;
  #user-name {
    font-size: 48px;
    line-height: 1em;
  }
  #bio, a {
    font-weight: 300;
  }
  #email {
    color: var(__mainTextColor);
  }
  @media (max-width:600px) {
    gap: 1em;
    flex-direction: column;
  }
`;

const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width:600px) {
    width: 200px;
    height: 200px;
  }
`


export const HeroComponent = () => {
  return (
    <StyleHeroContainer className=''>
      <StyledImage
        className=''
        src={profilePic}
        alt="Picture of the author"
        width={200}
        height={200}
      />

      <div>
        <h1 id="user-name">Shashank Rawat</h1>
        <p id="bio">Senior software engineer at <a href="https://www.condenast.com/" target="_blank" rel="noreferrer" >Condenast</a>, part time Gamer, and a home cook in training. </p>
        <p id="email">👉 <a href="mailto: shashank17nov@gmail.com">shashank17nov@gmail.com</a></p>
      </div>
    </StyleHeroContainer>
  )
}