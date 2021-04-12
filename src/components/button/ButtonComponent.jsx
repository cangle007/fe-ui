import React from 'react';
import cn from 'classnames';
import css from './Button.module.scss';

export default function ButtonComponent(props) {
  const { color, size, children, disabled, block, loading } = props;
  const classes = cn(
    css.root,
    { [css[color]]: color },
    { [css[size]]: size },
    { [css.block]: block },
    { [css.loading]: loading }
  );

  return (
    <div className={css['button-container']}>
      <button className={classes} disabled={disabled}>
        {children}
      </button>
      <h1>i am h1</h1>
    </div>
  );
}
