import React, { Fragment } from 'react';
import styles from './Button.module.css';

const Button = ({
  color,
  white,
  big,
  fullWidth,
  rounded,
  className,
  loading,
  children,
  lighter,
  DomElement,
  ...otherProps
}) => {
  const style = {};

  if (color) {
    style['--current-color'] = `var(--color-${color})`;
    style['--current-color-lighter'] = `var(--color-${color}-lighter)`;
    style['--current-color-darker'] = `var(--color-${color}-darker)`;
  }

  let classNameAct = styles.button;
  if (white) {
    classNameAct += ' ' + styles.buttonWhite;
  }
  if (big) {
    classNameAct += ' ' + styles.buttonBig;
  }
  if (fullWidth) {
    classNameAct += ' ' + styles.buttonFullWidth;
  }
  if (rounded) {
    classNameAct += ' ' + styles.rounded;
  }
  if (className) {
    classNameAct += ' ' + className;
  }
  if (lighter) {
    style['--current-color'] = `var(--color-${color}-light)`;
  }

  DomElement = DomElement || 'button';

  return (
    <DomElement className={classNameAct} style={style} {...otherProps}>
      {loading && (
        <Fragment>
          <img src='/loading.svg' className={styles.loadingIcon} width={18} />{' '}
          Loading
        </Fragment>
      )}
      {!loading && children}
    </DomElement>
  );
};

export default Button;
