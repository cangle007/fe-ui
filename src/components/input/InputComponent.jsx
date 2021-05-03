import React from 'react';
import cn from 'classnames';
import css from './Input.scss';
import searchIcon from '../../assets/searchIcon.svg';

export default function InputComponent({
  label,
  placeholder,
  inputErrorMsg,
  helpfulMsg,
}) {
  const classes = cn(css.root, {});

  return (
    <div className={classes}>
      <label className={css.inputLabel}>{label}</label>
      <input placeholder={placeholder} type='text' name='' id='' disabled={false} />
      {inputErrorMsg && <p className={css.inputErrorMsg}>{inputErrorMsg}</p>}
      {helpfulMsg && <p className={css.helpfulMsg}>{helpfulMsg}</p>}
    </div>
  );
}
