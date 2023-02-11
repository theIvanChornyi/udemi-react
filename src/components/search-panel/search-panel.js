import { Component } from 'react';

class SearchPanel extends Component {
  state = { filter: '' };

  onHandleChange = e => {
    const filter = e.target.value.toLowerCase();
    this.setState({ filter });
    this.props.onInputFilter(filter);
  };

  render() {
    return (
      <input
        onChange={this.onHandleChange}
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
    );
  }
}

export default SearchPanel;
