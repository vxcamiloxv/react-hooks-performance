import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Styles from './CharacterSpecies.style';

const Container = styled.div`${Styles.container}`;

const IMAGE_PATH = 'https://starwars-visualguide.com/assets/img/species/';
const IMAGE_EXT = '.jpg';

const characterSpecies = ({
  id, name, classification, designation, averageLifespan, averageHeight, language, skinColors, hairColors, eyeColors, homeWorld
}) => {
  const imageUrl = `${IMAGE_PATH}${id}${IMAGE_EXT}`;

  return (
    <>
      <Container>
        <figure class="figure">
          <img class="image" src={imageUrl} alt={name} />
        </figure>
        <div class="section">
          <h2 class="title">{name}</h2>
          <div>
            <h3 class="sub">Classification</h3>
            <div class="text">{classification}</div>
          </div>
          <div>
            <h3 class="sub">Designation</h3>
            <div class="text">{designation}</div>
          </div>
          <div>
            <h3 class="sub">Avg Lifespan</h3>
            <div class="text">{averageLifespan}</div>
          </div>
          <div>
            <h3 class="sub">Avg Height</h3>
            <div class="text">{averageHeight}</div>
          </div>
          <div>
            <h3 class="sub">Language</h3>
            <div class="text">{language}</div>
          </div>
          <div>
            <h3 class="sub">Skin Color(s)</h3>
            <div class="text">{skinColors}</div>
          </div>
          <div>
            <h3 class="sub">Hair Color(s)</h3>
            <div class="text">{hairColors}</div>
          </div>
          <div>
            <h3 class="sub">Eye Color(s)</h3>
            <div class="text">{eyeColors}</div>
          </div>
          <div>
            <h3 class="sub">Home World</h3>
            <div class="text">{homeWorld}</div>
          </div>
        </div>
      </Container>
    </>
  );


};

characterSpecies.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  classification: PropTypes.string,
  designation: PropTypes.string,
  averageHeight: PropTypes.string,
  skinColors: PropTypes.string,
  hairColors: PropTypes.string,
  eyeColors: PropTypes.string,
  averageLifespan: PropTypes.string,
  homeWorld: PropTypes.string,
  language: PropTypes.string,
};

export default characterSpecies;
