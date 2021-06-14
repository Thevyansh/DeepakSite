/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { createRef, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import { format, getDate, getTime, toDate } from 'date-fns';
import {
  getDateStringFromTimestamp,
  getMonthDetails,
  monthMap,
} from './DateUtils';

const StyledDateTime = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  position: relative;
`;

const StyledInput = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  overflow: hidden;

  input:focus {
    outline: none;
  }
  input {
    background: #f5f5f5;
    border: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 11px;
    cursor: pointer;
    padding: 1rem;
    border-radius: 20px;
  }
  input::-webkit-calendar-picker-indicator {
    display: none;
  }
`;
const StyledDatePicker = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  width: 300px;
  min-height: 350px;
  background: ${({ theme }) => theme.background};
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.highlight};
  overflow: hidden;
  padding: 25px 30px;
  .mdpc-head {
    float: left;
    width: 100%;
    height: 53px;
  }
  .mdpc-body {
    float: left;
    width: 100%;
    margin-top: 20px;
  }

  /**
 * Controls
 */

  .mdpch-button {
    float: left;
    width: 45px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }
  .mdpchb-inner:hover > span {
    border-color: #555 !important;
  }
  .mdpchb-inner:hover {
    cursor: pointer;
    background: #eee;
  }
  .mdpchb-inner {
    float: left;
    height: 35px;
    width: 35px;
    background: #f4f4f4;
    border-radius: 100%;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -17px;
    margin-top: -17px;
  }

  .mdpchbi-right-arrows:after,
  .mdpchbi-left-arrows:after,
  .mdpchbi-right-arrow,
  .mdpchbi-right-arrows,
  .mdpchbi-left-arrow,
  .mdpchbi-left-arrows {
    display: block;
    float: left;
    width: 6px;
    height: 6px;
    border-left: 2px solid #888;
    border-bottom: 2px solid #888;
    position: absolute;
  }
  .mdpchbi-right-arrow,
  .mdpchbi-right-arrows,
  .mdpchbi-left-arrow,
  .mdpchbi-left-arrows {
    transform: rotate(45deg);
    left: 50%;
    top: 50%;
    margin-left: -2px;
    margin-top: -4px;
  }
  .mdpchbi-right-arrows,
  .mdpchbi-right-arrow {
    transform: rotate(225deg);
    margin-left: -4px;
  }
  .mdpchbi-right-arrows:after,
  .mdpchbi-left-arrows:after {
    content: '';
  }

  .mdpchbi-left-arrows {
    margin-left: -5px;
  }
  .mdpchbi-right-arrows {
    margin-left: -2px;
  }
  .mdpchbi-right-arrows:after,
  .mdpchbi-left-arrows:after {
    left: 3px;
    top: -5px;
  }

  .mdpch-container {
    float: left;
    width: 120px;
    height: 100%;
  }
  .mdpchc-year {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 27px;
    color: #666;
    font-weight: 200px;
    text-align: center;
  }
  .mdpchc-month {
    float: left;
    width: 100%;
    height: 15px;
    font-size: 13px;
    color: #666;
    font-weight: 200px;
    text-align: center;
  }

  /**
 *  Calendar
 */
  .cc-month,
  .cc-head,
  .cch-name,
  .cc-body,
  .cdc-day span,
  .cdc-day,
  .c-day-container,
  .c-container {
    position: relative;
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .c-container {
    width: 100%;
    height: 100%;
  }

  .cc-month {
    height: 30px;
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    line-height: 30px;
    color: #666;
  }
  .cc-head {
    height: 30px;
    width: 100%;
    margin-top: 10px;
  }
  .cch-name {
    width: 14.285%;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #666;
    font-size: 9px;
    text-align: center;
  }
  .cc-body {
    height: 270px;
    width: 100%;
  }
  .c-day-container {
    width: 14.285%;
    height: 16.6666%;
  }
  .cdc-day {
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
    text-align: center;
  }
  .cdc-day span {
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
  }

  .cdc-day span:hover {
    cursor: pointer;
    background: #eee;
  }
  .cdc-day span {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    left: 50%;
    top: 50%;
    font-weight: 400;
    border-radius: 100%;
    line-height: 30px;
  }
  .c-day-container.disabled {
    pointer-events: none;
  }

  .c-day-container.disabled .cdc-day span {
    color: #ddd;
  }
  .c-day-container.disabled .cdc-day span {
    background: #fff !important;
  }
  .c-day-container.highlight .cdc-day span {
    background: #efdbca;
  }
  .c-day-container.highlight-green .cdc-day span {
    background: #d4e2cb;
  }
`;
const date = new Date();
const oneDay = 60 * 60 * 24 * 1000;
const todayTimestamp =
  date.getTime() -
  (date.getTime() % oneDay) +
  date.getTimezoneOffset() * 1000 * 60;

const initialState = {
  todayTimestamp, // or todayTimestamp, for short
  year: date.getFullYear(),
  month: date.getMonth(),
  selectedDay: todayTimestamp,
  monthDetails: getMonthDetails(date.getFullYear(), date.getMonth()),
};

const reducer = (state, action) => {
  // eslint-disable-next-line no-prototype-builtins
  if (state.hasOwnProperty(action.type)) {
    return {
      ...state,
      [`${action.type}`]: action.value,
    };
  }

  console.log(`Unknown key in state: ${action.type}`);
};

const DateTime = (props) => {
  const el = useRef(null);
  const inputRef = createRef();
  // const minDate = format(new Date(), 'yyyy-MM-dd hh:mm');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addBackDrop = (e) => {
    if (showDatePicker && el && !el.current.contains(e.target)) {
      setShowDatePicker(false);
    }
  };
  const setDateToInput = (timestamp) => {
    const dateString = getDateStringFromTimestamp(timestamp);
    inputRef.current.value = dateString;
  };
  const isCurrentDay = (day) => day.timestamp === todayTimestamp;
  const isSelectedDay = (day) => day.timestamp === state.selectedDay;
  const getMonthStr = (month) =>
    monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

  const onDateClick = (day) => {
    dispatch({ type: 'selectedDay', value: day.timestamp });
    setDateToInput(day.timestamp);

    /** Pass data to parent */
    // props.onChange(day.timestamp);
  };

  const setYear = (offset) => {
    const year = state.year + offset;
    dispatch({ type: 'year', value: year });
    dispatch({
      type: 'monthDetails',
      value: getMonthDetails(year, state.month),
    });
  };

  const setMonth = (offset) => {
    let { year } = state;
    let month = state.month + offset;
    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }

    dispatch({ type: 'year', value: year });
    dispatch({ type: 'month', value: month });
    dispatch({ type: 'monthDetails', value: getMonthDetails(year, month) });
  };

  const setDate = (dateData) => {
    const selectedDay = new Date(
      dateData.year,
      dateData.month - 1,
      dateData.date
    ).getTime();
    dispatch({ type: 'selectedDay', value: selectedDay });

    /** Pass data to parent */
    // props.onChange(selectedDay);
  };

  const getDateFromDateString = (dateValue) => {
    const dateData = dateValue.split('-').map((d) => parseInt(d, 10));

    if (dateData.length < 3) {
      return null;
    }

    const year = dateData[0];
    const month = dateData[1];
    const date = dateData[2];
    return { year, month, date };
  };

  const updateDateFromInput = () => {
    const dateValue = inputRef.current.value;
    const dateData = getDateFromDateString(dateValue);

    if (dateData !== null) {
      setDate(dateData);
      dispatch({ type: 'year', value: dateData.year });
      dispatch({ type: 'month', value: dateData.month - 1 });
      dispatch({
        type: 'monthDetails',
        value: getMonthDetails(dateData.year, dateData.month - 1),
      });
    }
  };

  const daysMarkup = state.monthDetails.map((day, index) => (
    <div
      className={`c-day-container ${day.month !== 0 ? ' disabled' : ''}${
        isCurrentDay(day) ? ' highlight' : ''
      }${isSelectedDay(day) ? ' highlight-green' : ''}`}
      key={index}
    >
      <div className="cdc-day">
        <span onClick={() => onDateClick(day)}>{day.date}</span>
      </div>
    </div>
  ));

  const calendarMarkup = (
    <div className="c-container">
      <div className="cc-head">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => (
          <div key={i} className="cch-name">
            {d}
          </div>
        ))}
      </div>
      <div className="cc-body">{daysMarkup}</div>
    </div>
  );

  return (
    <>
      <StyledDateTime ref={el}>
        <StyledInput onClick={() => setShowDatePicker(true)}>
          <input
            type="textarea"
            ref={inputRef}
            value={state.selectedDay}
            onChange={updateDateFromInput}
          />
        </StyledInput>
        {showDatePicker ? (
          <StyledDatePicker>
            <div className="mdpc-head">
              <div className="mdpch-button">
                <div className="mdpchb-inner" onClick={() => setYear(-1)}>
                  <span className="mdpchbi-left-arrows" />
                </div>
              </div>
              <div className="mdpch-button">
                <div className="mdpchb-inner" onClick={() => setMonth(-1)}>
                  <span className="mdpchbi-left-arrow" />
                </div>
              </div>
              <div className="mdpch-container">
                <div className="mdpchc-year">{state.year}</div>
                <div className="mdpchc-month">{getMonthStr(state.month)}</div>
              </div>
              <div className="mdpch-button">
                <div className="mdpchb-inner" onClick={() => setMonth(1)}>
                  <span className="mdpchbi-right-arrow" />
                </div>
              </div>
              <div className="mdpch-button" onClick={() => setYear(1)}>
                <div className="mdpchb-inner">
                  <span className="mdpchbi-right-arrows" />
                </div>
              </div>
            </div>
            <div className="mdpc-body">{calendarMarkup}</div>
          </StyledDatePicker>
        ) : (
          ''
        )}
      </StyledDateTime>
    </>
  );
};

export default DateTime;
