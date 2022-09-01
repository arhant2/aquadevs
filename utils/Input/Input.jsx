import styles from './Input.module.css';

const Input = ({
  id,
  label,
  isTextArea,
  placeholder,
  type,
  errorMessage,
  ...otherProps
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      {isTextArea && (
        <textarea className={styles.input} id={id} rows={3} {...otherProps} />
      )}

      {!isTextArea && (
        <input
          className={`${styles.input} ${
            errorMessage ? styles.input__error : ''
          }`}
          id={id}
          type={type || 'text'}
          {...otherProps}
        />
      )}

      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default Input;
