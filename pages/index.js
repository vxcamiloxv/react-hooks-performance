import React from 'react';
import Film from '../components/CharacterFilm';
import Species from '../components/CharacterSpecies';

export const getStaticProps = async () => {
  const url = 'https://swapi.dev/api/people/?page=1';
  const res = await fetch(url);
  const characters = await res.json()
  return {
    props: {
      characters,
    },
  }
};

function Main(props) {
  console.log('.'.repeat(80))
  console.log('props', props)
  console.log('.'.repeat(80))

  return (
    <>
      <Film
        id="1"
        title="Episode IV: A New Hope"
        description="It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
        director="George Lucas"
        producer="Gary Kurtz, Rick McCallum"
        releaseDate="05-25-1977"
      />

      <Species
        id="1"
        name="Human"
        classification="Mammal"
        designation="Sentient"
        averageLifespan="120 years"
        averageHeight="180cm"
        language="Galactic Basic"
        skinColors="Caucasian, Black, Asian, Hispanic"
        hairColors="Blonde, Brown, Black, Red"
        eyeColors="Brown, Blue, Green, Hazel, Grey, Amber"
        homeWorld="Earth"
      />
    </>
  );
}

export default Main;
