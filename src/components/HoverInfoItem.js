import PropTypes from 'prop-types';

const HoverInfoItem = ({ item }) => (
  <li>{`row: ${item['row']} col: ${item['col']}`}</li>
);

HoverInfoItem.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default HoverInfoItem;
