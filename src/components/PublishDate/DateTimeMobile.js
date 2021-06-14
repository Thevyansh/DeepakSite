import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format, getDate, getTime, toDate } from 'date-fns';
import { db, timestamp } from '../../firebase/firebase';

const StyledDateTime = styled.input`
  background: ${(props) => props.theme.gray2};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  border-radius: 0.75rem;
  border: none;
  outline: none;
  z-index: 100;
  &::-webkit-calendar-picker-indicator {
    filter: invert(${(props) => (props.theme.isDark ? 1 : 0)});
    cursor: pointer;
  }
`;
const DateTimeMobile = ({ name, date, setDate, minDate }) => {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');

  useEffect(() => {
    setValue(format(date, "yyyy-MM-dd'T'hh:mm"));
  }, [date]);

  useEffect(() => {
    setMin(format(minDate, "yyyy-MM-dd'T'hh:mm"));
  }, [minDate]);

  return (
    <>
      <StyledDateTime
        type="datetime-local"
        id={name}
        name={name}
        value={value}
        min={min}
        max="2099-12-31T00:00"
        onChange={(e) => {
          setDate(e.target.valueAsNumber);
        }}
      />
    </>
  );
};

export default DateTimeMobile;
