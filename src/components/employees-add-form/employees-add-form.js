import { clsx } from 'clsx';

import style from './employees-add-form.module.css';

const EmployeesAddForm = () => {
  return (
    <div className={style.appAddForm}>
      <h3>Добавьте нового сотрудника</h3>
      <form className={clsx(style.addForm, 'd-flex')}>
        <input
          type="text"
          className={clsx('form-control new-post-label', style.addFormInput)}
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          className={clsx('form-control new-post-label', style.addFormInput)}
          placeholder="З/П в $?"
        />
        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
