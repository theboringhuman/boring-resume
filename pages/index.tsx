import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Header
} from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shashank Rawat</title>
        <meta name="description" content="Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container__main">
        <Header />
        {/* <HeroComponent />
        <SocialComponent />
        <SkillsComponent />
        <TechStackComponent />
        <WorkComponent />
        <ProjectsComponent /> */}
      </div>
    </div>
  )
}

export default Home
