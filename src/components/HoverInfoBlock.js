import PropTypes from 'prop-types';

const HoverInfoBlock = ({ children }) => (
  <div className="hover-squares-list">
    <h1>Hover squares</h1>
    <ul>
      { children }
    </ul>
  </div>
);

HoverInfoBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HoverInfoBlock;
