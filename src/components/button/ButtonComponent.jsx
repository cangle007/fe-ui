import React from 'react';
import cn from 'classnames';
import css from './Button.scss';

export default function ButtonComponent(props) {
  const { color, size, children, disabled, block, loading } = props;
  const classes = cn('root', {
    [color]: color,
    [size]: size,
    block: block,
    loading: loading,
  });

  return (
    <div className='button-container'>
      <button className={classes} disabled={disabled}>
        {children}
      </button>
      <h1>i am h1</h1>
    </div>
  );
}
