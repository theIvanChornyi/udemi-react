import style from './app-filter.module.css';
const AppFilter = () => {
  return (
    <div className={style.btnGroup}>
      <button type="button" className="btn btn-light">
        Все сотрудники
      </button>
      <button type="button" className="btn btn-outline-light">
        На повышение
      </button>
      <button type="button" className="btn btn-outline-light">
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
