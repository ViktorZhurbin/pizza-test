import styles from './Input.module.css';

type Props = {
    value: string;
    type?: string;
    placeholder?: string;
    name?: string;
    min?: number;
    onBlur?(): void;
    onFocus?(): void;
    onChange: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
};

export const Input: React.FC<Props> = ({
    value = '',
    placeholder = '',
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
    type = 'text',
    ...props
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            {...props}
        />
    );
};
