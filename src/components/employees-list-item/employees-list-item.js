import { clsx } from 'clsx';

import style from './employees-list-item.module.css';

const EmployeesListItem = () => {
  return (
    <li className={clsx(style.listGroupItem, 'd-flex justify-content-between')}>
      <span className={style.listGroupItemLabel}>John Smith</span>
      <input
        type="text"
        className={style.listGroupItemInput}
        defaultValue="1000$"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
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
        <i className={clsx('fas fa-star', style.star, 'like')}></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
