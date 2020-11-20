import cx from 'classnames';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './Input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    error: FieldError;
    register: any;
};

export const Input: React.FC<Props> = ({ error, register, ...props }) => {
    return (
        <>
            <input
                className={cx(styles.input, {
                    [styles.error]: Boolean(error),
                })}
                ref={register}
                {...props}
            />
            <span className={styles.errorMessage}>{error?.message}</span>
        </>
    );
};
