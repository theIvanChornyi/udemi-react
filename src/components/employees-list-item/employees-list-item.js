import { clsx } from 'clsx';
import style from './employees-list-item.module.css';

export const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  id,
  increase,
  like,
  onHandleToogle,
}) => {
  return (
    <li
      className={clsx(
        style.listGroupItem,
        increase && style.increase,
        'd-flex justify-content-between'
      )}
    >
      <span
        onClick={e =>
          onHandleToogle(id, e.currentTarget.getAttribute('data-type'))
        }
        data-type="like"
        className={style.listGroupItemLabel}
      >
        {name}
      </span>
      <input
        type="text"
        className={clsx(style.listGroupItemInput)}
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={e =>
            onHandleToogle(id, e.currentTarget.getAttribute('data-type'))
          }
          data-type="increase"
          type="button"
          className={clsx(style.listGroupItemButtonCookie, 'btn-sm')}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          onClick={() => onDelete(id)}
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
};

export default EmployeesListItem;
