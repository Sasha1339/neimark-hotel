import {FC, forwardRef, RefObject, useContext, useEffect, useRef, useState} from "react";
import styles from "./SearchComponent.module.css";
import DatePicker from "react-datepicker";
import {Button} from "@components/Button/Button";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";

type Props = {
}

export const SearchComponent: FC<Props> = () => {

  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className={styles.main}>
      <div className={styles.item}>  <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        monthsShown={2}
        minDate={new Date()}
        dateFormat="dd.MM.yyyy"
        placeholderText="Заезд - Выезд"
        className={styles.hotel_date_range}
        calendarClassName={styles.hotel_calendar}
        popperPlacement="bottom-start"
        showPopperArrow={false}
        customInput={<CustomInput />}
      /></div>
      <div className={styles.item}></div>
      <div className={styles.item}>
        <ButtonBorder title={'Найти номера'} onClick={() => {}} />
      </div>
    </div>
  )

}

const CustomInput = forwardRef<HTMLButtonElement, any>(({ value, onClick }, ref) => (
  <button className={styles.custom_date_input} onClick={onClick} ref={ref}>
    <span className={styles.calendar_icon}>📅</span>
    {value || "Выберите даты"}
    <span className={styles.arrow_icon}>▼</span>
  </button>
));