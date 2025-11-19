import styles from './SearchPageComponent.module.css';
import {ChangeEvent, FC, FocusEvent, useContext, useEffect, useRef, useState} from "react";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";
import {HeaderContext} from "@/providers/HeaderContext";
import {NavigationContext} from "@/providers/NavigationContext";
import {TabContext} from "@/providers/TabContext";
import {useLocation} from "react-router-dom";
import DatePicker from "react-datepicker";
import {ru} from "date-fns/locale";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppDispatch";
import {searchActions, searchSelectors} from "@/services/search";
import {CustomInputEnd, CustomInputStart} from "@components/SearchComponent/SearchComponent";
import {RoomCardComponent} from "@components/RoomCardComponent/RoomCardComponent";


type Props = {

}

export const SearchPageComponent: FC<Props> = ({...props}) => {

  const headerContext = useContext(HeaderContext);
  const navigationContext = useContext(NavigationContext);
  const tabContext = useContext(TabContext);
  const filters = useAppSelector(searchSelectors.filters);
  const isFiltersValid = useAppSelector(searchSelectors.isFiltersValid);

  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    headerContext[1]('search');
    navigationContext[1]('home');
    if (!location.state) {
      tabContext[1]('home');
    }
  }, []);

  const handleStartDateChange = (date: Date | null) => {
    dispatch(searchActions.setDateStart(date?.toISOString() ?? null))
    if (date && filters.dateEnd && date > new Date(filters.dateEnd)) {
      dispatch(searchActions.setDateEnd(null))
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && filters.dateStart && date < new Date(filters.dateStart)) {
      return;
    }
    dispatch(searchActions.setDateEnd(date?.toISOString() ?? null))
  };

  return (
    <main className={styles.main}>
      <div className={styles.filters}>
        <div className={styles.item_date_start}>
          <p className={styles.description_filter}>Дата заезда:</p>
          <DatePicker
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
        <div className={styles.item_date}>
          <p className={styles.description_filter}>Дата выезда:</p>
          <DatePicker
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
            customInput={<CustomInputEnd/>}
          /></div>
        <div className={styles.item}>
          <div></div>
          <ButtonBorder className={styles.button} title={'Найти номера'} disabled={!isFiltersValid} onClick={() => {}}/>

        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.list}>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
          <hr/>

          <RoomCardComponent/>
          <hr/>
          <RoomCardComponent/>
        </div>

      </div>
    </main>
  )

}