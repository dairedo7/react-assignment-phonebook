import { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    nameToFilter: PropTypes.string.isRequired,
    updateFilter: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);

    this.props.updateFilter(value);
  };

  render() {
    const { nameToFilter } = this.props;

    return (
      <>
        <p className={styles.filter__title}>Find contacts by name</p>
        <input
          className={styles.filter__field}
          type="text"
          name="name"
          value={nameToFilter}
          placeholder="Enter the name..."
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default Filter;
