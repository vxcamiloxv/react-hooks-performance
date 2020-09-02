import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Styles from './CharacterFilm.style';

const Container = styled.div`${Styles.container}`;

const IMAGE_PATH = 'https://starwars-visualguide.com/assets/img/films/';
const IMAGE_EXT = '.jpg';

const characterFilm = ({
  id, title, description, director, producer, releaseDate
}) => {
  const imageUrl = `${IMAGE_PATH}${id}${IMAGE_EXT}`;

  return (
    <>
      <Container>
        <figure class="figure">
          <img class="image" src={imageUrl} alt={title} />
        </figure>
        <div class="section">
          <h2 class="title">{title}</h2>
          <div>
            <h3 class="sub">Date Created</h3>
            <div class="text">{releaseDate}</div>
          </div>
          <div>
            <h3 class="sub">Director</h3>
            <div class="text">{director}</div>
          </div>
          <div>
            <h3 class="sub">Producer(s)</h3>
            <div class="text">{producer}</div>
          </div>
          <div>
            <h3 class="sub">Opening Crawl</h3>
            <div class="text">{description}</div>
          </div>
        </div>
      </Container>
    </>
  );
};

characterFilm.defaultProps = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default characterFilm;