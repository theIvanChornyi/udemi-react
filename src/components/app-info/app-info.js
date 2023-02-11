import style from './app-info.module.css';

const AppInfo = ({ employees, employeesIncrease }) => {
  console.log(employeesIncrease);
  return (
    <div className={style.appInfo}>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {employeesIncrease}</h2>
    </div>
  );
};

export default AppInfo;
