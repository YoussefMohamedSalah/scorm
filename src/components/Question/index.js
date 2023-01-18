/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Text from './Text';
import Choose from './Choose';
import Match from './Match';
import DropDown from './DropDown';

function Question(props) {
  switch (props.questionType) {
    case 'RadioButtons':
      return <Choose {...props} />;
    case 'DropDown':
      return <DropDown {...props} />;
    case 'Match':
      return <Match {...props} />;
    default:
      return (
        <Text
          title={props.title}
          handleNextSlide={props.handleNextSlide}
          setError={props.setError}
          setConfirm={props.setConfirm}
        />
      );
  }
}

export default Question;
