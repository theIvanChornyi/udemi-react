import { clsx } from 'clsx';
import { Component } from 'react';

import style from './employees-add-form.module.css';

class EmployeesAddForm extends Component {
  state = {
    name: '',
    salary: 0,
  };
  onInputChange = e => {
    const { name: inputName, value } = e.target;
    this.setState({ [inputName]: value });
  };

  render() {
    const { onHandleAddEmployees } = this.props;

    return (
      <div className={style.appAddForm}>
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            onHandleAddEmployees({ ...this.state });
            e.target.reset();
          }}
          className={clsx(style.addForm, 'd-flex')}
        >
          <input
            onChange={this.onInputChange}
            minLength={3}
            required
            type="text"
            name="name"
            className={clsx('form-control new-post-label', style.addFormInput)}
            placeholder="Как его зовут?"
          />
          <input
            onChange={this.onInputChange}
            type="number"
            required
            min={1}
            name="salary"
            className={clsx('form-control new-post-label', style.addFormInput)}
            placeholder="З/П в $?"
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
