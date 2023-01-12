import AppFilter from 'components/app-filter/app-filter';
import AppInfo from 'components/app-info/app-info';
import EmployeesAddForm from 'components/employees-add-form/employees-add-form';
import EmployeesList from 'components/employees-list/employees-list';
import SearchPanel from 'components/search-panel/search-panel';
import style from './app.module.css';
const App = () => {
  const data = [
    { id: 1, name: 'Ivan', salary: 1000, increase: false },
    { id: 2, name: 'Olga', salary: 800, increase: false },
    { id: 3, name: 'Viktoria', salary: 650, increase: false },
  ];

  return (
    <div className={style.app}>
      <AppInfo />
      <div className={style.searchPanel}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList emploees={data} />
      <EmployeesAddForm />
    </div>
  );
};
export default App;
