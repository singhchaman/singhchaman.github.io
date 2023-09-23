import React from 'react';
import './List.css';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

import {
  ProjObjOne,
  ProjObjTwo,
  ProjObjThree,
  ProjObjFour,
  ProjObjFive,
  SocialObjOne,
  SocialObjTwo,
  SocialObjThree,
  SocialObjFour,
  ArticObjOne,
  ArticObjTwo,
  ArticObjThree,
  // ArticObjFour
} from './Data';

export const List = ({ type }) => {
  const dataObjs = {
    proj: [ProjObjOne, ProjObjTwo, ProjObjThree, ProjObjFour, ProjObjFive],
    social: [SocialObjOne, SocialObjTwo, SocialObjThree, SocialObjFour],
    article: [ArticObjOne, ArticObjTwo, ArticObjThree],
  };

  const renderButtons = () => {
    const buttons = [];
    for (const dataObj of dataObjs[type]) {
      buttons.push(
        <Link key={dataObj.link} to={{ pathname: dataObj.link }} target="_blank">
          <Button big fontBig primary={true} >
            {dataObj.title}
          </Button>
        </Link>
      );
    }
    return buttons;
  };

  return (
    <div  className={`btn-group`}>
      {renderButtons()}
    </div>
  );
};
