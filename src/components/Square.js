import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Square = ({ onMouseEnterCustom, isActive }) => {
  const [isBlue, setIsBlue] = useState(isActive);
  const [gap, setGap] = useState(false);

  useEffect(() => {
    if (gap) {
      setIsBlue(!isActive);
    }
  }, [isActive]);

  return (
    <div
      className={classNames('main-square', {'main-square--blue': isBlue})}
      onMouseEnter={() => {
        onMouseEnterCustom();
        setGap(true);
      }}
    />
  );
};

Square.propTypes = {
  onMouseEnterCustom: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Square;
