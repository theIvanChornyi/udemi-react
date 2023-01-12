import AppFilter from 'components/app-filter/app-filter';
import AppInfo from 'components/app-info/app-info';
import EmployeesAddForm from 'components/employees-add-form/employees-add-form';
import EmployeesList from 'components/employees-list/employees-list';
import SearchPanel from 'components/search-panel/search-panel';
import { Component } from 'react';
import style from './app.module.css';

const data = [
  { id: 1, name: 'Ivan', salary: 1000, increase: false },
  { id: 2, name: 'Olga', salary: 800, increase: false },
  { id: 3, name: 'Viktoria', salary: 650, increase: false },
];

class App extends Component {
  state = { employees: data };

  onHandleDeleteEmployees = id => {
    this.setState(({ employees }) => ({
      employees: employees.filter(item => item.id !== id),
    }));
  };

  render() {
    return (
      <div className={style.app}>
        <AppInfo />
        <div className={style.searchPanel}>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          onDelete={this.onHandleDeleteEmployees}
          emploees={this.state.employees}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}
export default App;
