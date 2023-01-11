import AppFilter from 'components/app-filter/app-filter';
import AppInfo from 'components/app-info/app-info';
import EmployeesAddForm from 'components/employees-add-form/employees-add-form';
import EmployeesList from 'components/employees-list/employees-list';
import SearchPanel from 'components/search-panel/search-panel';
import style from './app.module.css';
const App = () => {
  return (
    <div className={style.app}>
      <AppInfo />
      <div className={style.searchPanel}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
};
export default App;
