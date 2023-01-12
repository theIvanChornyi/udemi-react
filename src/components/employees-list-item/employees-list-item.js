import { clsx } from 'clsx';
import { Component } from 'react';

import style from './employees-list-item.module.css';

class EmployeesListItem extends Component {
  state = { increase: this.props.increase, like: false };

  handleIncrease = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };
  handleLike = () => {
    this.setState(({ like }) => ({ like: !like }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;

    return (
      <li
        className={clsx(
          style.listGroupItem,
          increase && style.increase,
          'd-flex justify-content-between'
        )}
      >
        <span onClick={this.handleLike} className={style.listGroupItemLabel}>
          {name}
        </span>
        <input
          type="text"
          className={clsx(style.listGroupItemInput)}
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.handleIncrease}
            type="button"
            className={clsx(style.listGroupItemButtonCookie, 'btn-sm')}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className={clsx(style.listGroupItemButtonTrash, 'btn-sm')}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i
            className={clsx(
              'fas fa-star',
              style.star,
              'like',
              like && style.like
            )}
          ></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
