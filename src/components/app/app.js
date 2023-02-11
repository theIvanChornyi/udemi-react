import AppFilter from 'components/app-filter/app-filter';
import AppInfo from 'components/app-info/app-info';
import EmployeesAddForm from 'components/employees-add-form/employees-add-form';
import EmployeesList from 'components/employees-list/employees-list';
import SearchPanel from 'components/search-panel/search-panel';
import { Component } from 'react';
import style from './app.module.css';

import { v4 } from 'uuid';

const data = [
  { id: 1, name: 'Ivan', salary: 1000, increase: false, like: false },
  { id: 2, name: 'Olga', salary: 800, increase: false, like: false },
  { id: 3, name: 'Viktoria', salary: 650, increase: false, like: false },
];

class App extends Component {
  state = { employees: data, filter: '', selector: 'all' };

  onHandleAddEmployees = ({ salary, name }) => {
    if (salary <= 0 || name.length < 3) return;

    this.setState(({ employees }) => ({
      employees: [
        ...employees,
        { id: v4(), name, salary, increase: false, like: false },
      ],
    }));
  };

  onHandleChangeSallary = (id, salary) => {
    this.setState(({ employees }) => ({
      employees: [...employees].map(item => {
        if (item.id === id) {
          return { ...item, salary };
        } else {
          return item;
        }
      }),
    }));
  };

  onHandleDeleteEmployees = id => {
    this.setState(({ employees }) => ({
      employees: employees.filter(item => item.id !== id),
    }));
  };

  onChangeTab = selector => {
    this.setState({ selector });
  };

  onInputFilter = filter => {
    this.setState({ filter });
  };

  onHandleToogle = (id, prop) => {
    this.setState(({ employees }) => ({
      employees: [
        ...employees.map(item => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          }
          return item;
        }),
      ],
    }));
  };

  render() {
    const { employees, filter, selector } = this.state;
    const employeesNum = employees.length;
    const employeesIncreaseNum = employees.filter(
      ({ increase }) => increase
    ).length;

    const visibleData = employees
      .filter(item => {
        switch (this.state.selector) {
          case 'increese':
            return item.increase;
          case 'rich':
            return item.salary > 1000;
          default:
            return true;
        }
      })
      .filter(({ name }) => name.toLowerCase().includes(filter));

    return (
      <div className={style.app}>
        <AppInfo
          employees={employeesNum}
          employeesIncrease={employeesIncreaseNum}
        />
        <div className={style.searchPanel}>
          <SearchPanel onInputFilter={this.onInputFilter} />
          <AppFilter selector={selector} onChangeTab={this.onChangeTab} />
        </div>
        <EmployeesList
          onDelete={this.onHandleDeleteEmployees}
          onHandleToogle={this.onHandleToogle}
          emploees={visibleData}
          onHandleChangeSallary={this.onHandleChangeSallary}
        />
        <EmployeesAddForm onHandleAddEmployees={this.onHandleAddEmployees} />
      </div>
    );
  }
}
export default App;
