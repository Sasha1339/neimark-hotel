import {ChangeEvent, FC, FocusEvent, forwardRef, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./SearchComponent.module.css";
import DatePicker, {registerLocale} from "react-datepicker";
import {Button} from "@components/Button/Button";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";
import { ru } from 'date-fns/locale'
import '@/styles/style.css'
import {useAppDispatch, useAppSelector} from "@/hooks/useAppDispatch";
import {searchActions, searchSelectors} from "@/services/search";
import {useNavigate} from "react-router-dom";
import {newDate} from "react-datepicker/dist/date_utils";


type Props = {
}




export const SearchComponent: FC<Props> = () => {

  const filters = useAppSelector(searchSelectors.filters);
  const isFilterValid = useAppSelector(searchSelectors.isFiltersValid);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate =useNavigate();

  useEffect(() => {
    if (filters.people && inputRef.current) {
      inputRef.current.value = filters.people + ' чел.';
    }
  }, []);


  const onFocus = (event: FocusEvent<HTMLInputElement, EventTarget>) => {
    event.target.value = event.target.value.replace(' чел.', '')
  }

  const onBlur = (event: FocusEvent<HTMLInputElement, EventTarget>) => {
    event.target.value = event.target.value + ' чел.'
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    dispatch(searchActions.setPeople(Number(value)))
    e.target.value = value;
  };

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
      <div className={styles.item}><DatePicker
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
      <div className={styles.item}><DatePicker
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
      <div className={styles.item}>
        <input ref={inputRef} className={styles.input_item} placeholder={'Количество человек'} type="text" onChange={handleInputChange} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className={styles.item}>
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