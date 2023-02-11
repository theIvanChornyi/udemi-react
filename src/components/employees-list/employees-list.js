import style from './employees-list.module.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({
  emploees,
  onDelete,
  onHandleToogle,
  onHandleChangeSallary,
}) => {
  return (
    <ul className={style.appList}>
      {emploees.map(item => (
        <EmployeesListItem
          key={item.id}
          onDelete={onDelete}
          onHandleToogle={onHandleToogle}
          onHandleChangeSallary={onHandleChangeSallary}
          {...item}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
