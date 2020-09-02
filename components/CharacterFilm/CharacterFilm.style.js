import { css } from 'styled-components';

export default {
  container: css`
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    padding: 6px 6px;
    position: relative;
    transition: all .5s;
    width: 360px;

    &:after, &:before {
      border : 0px solid #fff;
      content: "";
      height: 10px;
      position: absolute;
      transition: all .5s;
      width: 10px;
    }

    &:after {
      border-left: 5px solid black;
      border-top: 5px solid black;
      left: 0;
      top: 0;
    }

    &:before {
      border-bottom: 5px solid black;
      border-right: 5px solid black;
      bottom: 0;
      right: 0;
    }

    &:hover {
      border-bottom-left-radius: 0px;
      border-top-right-radius: 0px;

      & .figure {
        background: #1abc9c;

        & .image {
          opacity: .2;
        }
      }

      & .section {
        bottom: 0;
        opacity: 1;
      }

      &:before, &:after {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
      }
    }

    & .figure {
      display: flex;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    & .image {
      width: 100%;
    }

    & .section {
      box-sizing: border-box;
      bottom: 100px;
      color: black;
      height: 100%;
      margin: 0;
      left: 0px;
      opacity: 0;
      padding: 12px 12px;
      position: absolute;
      transition: .3s ease-in-out;
      width: 100%;

      & .title {
        font-size: 1em;
        font-weight: 700;
        padding-bottom: 2px;
        text-align: center;
      }

      & .sub {
        color: #262626;
        font-size: .9em;
        font-weight: 600;
        line-height: 0.5;
        margin: 12px 0 12px;
      }s

      & .text {
        font-size: .8em;
      }
    }
  `
};
