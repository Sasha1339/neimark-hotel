import {ChangeEvent, FC, FocusEvent, forwardRef, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./SearchComponent.module.css";
import DatePicker, {registerLocale} from "react-datepicker";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";
import { ru } from 'date-fns/locale'
import '@/styles/style.css'
import {useAppDispatch, useAppSelector} from "@/hooks/useAppDispatch";
import {searchActions, searchSelectors} from "@/services/search";
import {useNavigate} from "react-router-dom";


type Props = {
}




export const SearchComponent: FC<Props> = () => {

  const filters = useAppSelector(searchSelectors.filters);
  const isFilterValid = useAppSelector(searchSelectors.isFiltersValid);
  const dispatch = useAppDispatch();
  const navigate =useNavigate();


  const handleStartDateChange = (date: Date | null) => {
    dispatch(searchActions.setDateStart(date?.toISOString() ?? null))
    if (date && filters.dateEnd && date > new Date(filters.dateEnd)) {
      dispatch(searchActions.setDateEnd(null))
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && filters.dateStart && date <  new Date(filters.dateStart)) {
      return;
    }
    dispatch(searchActions.setDateEnd(date?.toISOString() ?? null))
  };

  return (
    <div className={styles.main}>
      <div className={styles.item} style={{position: 'relative', zIndex: 10}}><DatePicker
        locale={ru}
        selected={filters.dateStart ? new Date(filters.dateStart) : null}
        onChange={handleStartDateChange}
        selectsStart
        isClearable={false}
        monthsShown={1}
        minDate={new Date()}
        startDate={filters.dateStart ? new Date(filters.dateStart) : null}
        endDate={filters.dateEnd ? new Date(filters.dateEnd) : null}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
        showPopperArrow={false}
        previousMonthButtonLabel="< Предыдущий"
        nextMonthButtonLabel="Следующий >"
        customInput={<CustomInputStart/>}
      /></div>
      <div className={styles.item} style={{position: 'relative', zIndex: 10}}><DatePicker
        locale={ru}
        selected={filters.dateEnd ? new Date(filters.dateEnd) : null}
        selectsEnd
        onChange={handleEndDateChange}
        isClearable={false}
        monthsShown={1}
        startDate={filters.dateStart ? new Date(filters.dateStart) : null}
        endDate={filters.dateEnd ? new Date(filters.dateEnd) : null}
        minDate={new Date()}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
        showPopperArrow={false}
        previousMonthButtonLabel="< Предыдущий"
        nextMonthButtonLabel="Следующий >"
        customInput={<CustomInputEnd />}
      /></div>
      <div className={`${styles.item} ${styles.item_button}`}>
        <ButtonBorder className={styles.button} title={'Найти номера'} disabled={!isFilterValid} onClick={() => navigate('/search')}/>
      </div>
    </div>
  )

}

export const CustomInputStart = forwardRef<HTMLButtonElement, any>(({value, onClick, title}, ref) => (
  <button className={styles.custom_date_input} onClick={onClick} ref={ref}>
    {value || 'Выберите дату заезда'}
    <span className={styles.arrow_icon}>▼</span>
  </button>
));

export const CustomInputEnd = forwardRef<HTMLButtonElement, {value?: string, onClick?: () => void, title?: string}>(({value, onClick, title}, ref) => (
  <button className={styles.custom_date_input} onClick={onClick} ref={ref}>
    {value || 'Выберите дату выездa'}
    <span className={styles.arrow_icon}>▼</span>
  </button>
))