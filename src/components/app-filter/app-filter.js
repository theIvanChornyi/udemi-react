import clsx from 'clsx';
import { Component } from 'react';
import style from './app-filter.module.css';

const buttons = [
  { name: 'all', title: 'Все сотрудники' },
  { name: 'increese', title: 'На повышение' },
  { name: 'rich', title: 'З/П больше 1000$' },
];
class AppFilter extends Component {
  onChangeGroup = name => {
    this.props.onChangeTab(name);
  };

  createBtns = () => {
    return buttons.map(({ name, title }) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() => this.onChangeGroup(name)}
          className={clsx(
            'btn',
            this.props.selector === name ? 'btn-light' : 'btn-outline-light'
          )}
        >
          {title}
        </button>
      );
    });
  };

  render() {
    return <div className={style.btnGroup}>{this.createBtns()}</div>;
  }
}

export default AppFilter;
