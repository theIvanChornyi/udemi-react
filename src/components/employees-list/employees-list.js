import style from './employees-list.module.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ emploees }) => {
  return (
    <ul className={style.appList}>
      {emploees.map(({ id, ...itemProps }) => (
        <EmployeesListItem key={id} {...itemProps} />
      ))}
    </ul>
  );
};

export default EmployeesList;
