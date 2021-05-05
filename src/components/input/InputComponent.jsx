import React from 'react';
import cn from 'classnames';
import css from './Input.scss';

export default function InputComponent({
  icon,
  label,
  placeholder,
  iconPosition,
  inputErrorMsg,
  helpfulMsg,
}) {
  const classes = cn(css.root, [css[`${iconPosition}Icon`]]);
  const inputClasses = cn(css.inputItem);

  return (
    <div className={classes}>
      <label className={css.inputLabel}>{label}</label>
      <div className={inputClasses}>
        <input placeholder={placeholder} type='text' name='' id='' disabled={false} />
        {icon && <img className={css.iconImg} src={icon.type} />}
      </div>
      {inputErrorMsg && <p className={css.inputErrorMsg}>{inputErrorMsg}</p>}
      {helpfulMsg && <p className={css.helpfulMsg}>{helpfulMsg}</p>}
    </div>
  );
}
