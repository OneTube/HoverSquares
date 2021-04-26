import { useState, useEffect, useMemo } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const ModePicker = ({ getCount }) => {
  const [mode, setMode] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [gap, setGap] = useState(false);

  useEffect(() => {
    if(!gap) {
      async function getMode () {
        const response = await fetch('https://demo1030918.mockable.io/');
        response.json().then(json => {
          const arr =  [];
          for (let value of Object.keys(json)) {
            arr.push(json[value]['field']);
          }
          setMode([...arr]);
        });
      }
      getMode();
    }
    setGap(true);
  }, [selectedMode, gap]);

  const onTrigger = (event) => {
    event.preventDefault();
    getCount(selectedMode);
  };

  const changeSelect = (e) => {
    setSelectedMode(+e.target.value);
  };

  const modeOption = useMemo(() => mode.map(number => (
    <option
      key={uuid()}
      value={number}
    >
      {number}
    </option>
  )),[mode]);

  return (
    <div className="main-mode-picker-wrap">
      <form onSubmit={(event) => onTrigger(event)}>
        <select
          onChange={(e) => changeSelect(e)}
          name=""
          id=""
        >
          { modeOption }
        </select>
        <button className="main-btn">
          start
        </button>
      </form>
    </div>
  );
};

ModePicker.propTypes = {
  getCount: PropTypes.func.isRequired,
};

export default ModePicker;
