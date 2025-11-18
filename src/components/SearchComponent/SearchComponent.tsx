import {ChangeEvent, FC, FocusEvent, forwardRef, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./SearchComponent.module.css";
import DatePicker, {registerLocale} from "react-datepicker";
import {Button} from "@components/Button/Button";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";
import { ru } from 'date-fns/locale'
import '@/styles/style.css'


type Props = {
}




export const SearchComponent: FC<Props> = () => {

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log("Start date:", startDate, "End date:", endDate);
  }, [startDate, endDate]);

  const onFocus = (event: FocusEvent<HTMLInputElement, EventTarget>) => {
    event.target.value = event.target.value.replace(' чел.', '')
  }

  const onBlur = (event: FocusEvent<HTMLInputElement, EventTarget>) => {
    event.target.value = event.target.value + ' чел.'
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && startDate && date < startDate) {
      return;
    }
    setEndDate(date);
  };

  return (
    <div className={styles.main}>
      <div className={styles.item}><DatePicker
        locale={ru}
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        isClearable={false}
        monthsShown={1}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
        showPopperArrow={false}
        previousMonthButtonLabel="< Предыдущий"
        nextMonthButtonLabel="Следующий >"
        customInput={<CustomInputStart/>}
      /></div>
      <div className={styles.item}><DatePicker
        locale={ru}
        selected={endDate}
        selectsEnd
        onChange={handleEndDateChange}
        isClearable={false}
        monthsShown={1}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        dateFormat="dd.MM.yyyy"
        popperPlacement="bottom-start"
        showPopperArrow={false}
        previousMonthButtonLabel="< Предыдущий"
        nextMonthButtonLabel="Следующий >"
        customInput={<CustomInputEnd />}
      /></div>
      <div className={styles.item}>
        <input className={styles.input_item} type="text" onChange={handleInputChange} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className={styles.item}>
        <ButtonBorder className={styles.button} title={'Найти номера'} onClick={() => {
        }}/>
      </div>
    </div>
  )

}

const CustomInputStart = forwardRef<HTMLButtonElement, any>(({value, onClick, title}, ref) => (
  <button className={styles.custom_date_input} onClick={onClick} ref={ref}>
    {value || 'Дата заезда'}
    <span className={styles.arrow_icon}>▼</span>
  </button>
));

const CustomInputEnd = forwardRef<HTMLButtonElement, {value?: string, onClick?: () => void, title?: string}>(({value, onClick, title}, ref) => (
  <button className={styles.custom_date_input} onClick={onClick} ref={ref}>
    {value || 'Дата выездa'}
    <span className={styles.arrow_icon}>▼</span>
  </button>
))