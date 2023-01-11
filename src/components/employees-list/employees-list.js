import style from './employees-list.module.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = () => {
  return (
    <ul className={style.appList}>
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  );
};

export default EmployeesList;
