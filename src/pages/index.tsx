import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'
import { CountdownProviders } from "../context/Countdown.Context";
import React from 'react';
import { ChallengesProvider } from '../context/ChallengesContext';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  console.log(props)

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >

      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProviders>
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProviders>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}