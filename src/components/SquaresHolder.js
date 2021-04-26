import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import uuid from 'react-uuid';
import HoverInfoBlock from './HoverInfoBlock';
import HoverInfoItem from './HoverInfoItem';

const SquaresHolder = ({ squareCount }) => {


  const [squareArr, setSquareArr] = useState([]);
  const [hoverList, sethHoverList] = useState([]);

  useEffect(() => {
    const squareCountArr = new Array(squareCount);
    for (let i = 0; i < squareCount; i++) {
      squareCountArr[i] = new Array(squareCount);
      for (let j = 0; j < squareCount; j++) {
        squareCountArr[i][j] = {id: `${i}${j}`, row: i+1, col: j+1, state: false};
      }
    }
    setSquareArr(squareCountArr);
    sethHoverList([]);
  }, [squareCount]);

  return (
    <div>
      <div className="main-square-wrap" style={{ width: squareCount*50+'px' }}>
        {squareArr.map((item, index) => (
          item.map((innerItem, innerIndex) => (
            <Square
              key={uuid()}
              isActive={innerItem['state']}
              onMouseEnterCustom={() => {
                const newArrCount = [...squareArr];
                newArrCount[index][innerIndex]['state'] = !newArrCount[index][innerIndex]['state'];
                setSquareArr(newArrCount);
                if (newArrCount[index][innerIndex]['state']) {
                  sethHoverList([...hoverList, {id: innerItem['id'], row: innerItem['row'], col: innerItem['col']}]);
                }
                else {
                  const ReNewArrCount = hoverList.filter((item) => item['id'] !== newArrCount[index][innerIndex]['id']);
                  sethHoverList(ReNewArrCount);
                }
              }}
            />
          ))
        ))}
      </div>
      <HoverInfoBlock>
        {hoverList.map((item) => (
          <HoverInfoItem key={uuid()} item={item} />
        ))}
      </HoverInfoBlock>
    </div>
  );
};

SquaresHolder.propTypes = {
  squareCount: PropTypes.number.isRequired,
};

export default SquaresHolder;
