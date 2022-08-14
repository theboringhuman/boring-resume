import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Header,
  HeroComponent,
  SocialComponent,
  SkillsComponent,
  TechStackComponent,
  // WorkComponent,
  // ProjectsComponent
} from '../components';

const StyleMain = styled.main`
  margin-top: 6rem;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shashank Rawat</title>
        <meta name="description" content="Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyleMain>
        <HeroComponent />
        <SocialComponent />
        <SkillsComponent />
        <TechStackComponent />
        {/* <WorkComponent />
        <ProjectsComponent /> */}
      </StyleMain>
    </div>
  )
}

export default Home
