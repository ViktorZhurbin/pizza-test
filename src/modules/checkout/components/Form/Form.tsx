import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { phoneRegex } from '@/constants';
import { Input } from '@/components/Form/Input';
import styles from './Form.module.css';
import { Button } from '@/components/Button';
import { useUser } from '@/hooks/useUser';

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    phone: yup
        .string()
        .matches(phoneRegex, "This doesn't look like a valid phone")
        .required('Phone is required'),
    address: yup.string().required('Address is required'),
});

type Inputs = yup.InferType<typeof schema>;

type Props = {
    onSubmit(): void;
};

export const Form: React.FC<Props> = ({ onSubmit }) => {
    const { name } = useUser();
    const { register, handleSubmit, errors } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    return (
        <section className={styles.section}>
            <>
                <h1>Delivery Details</h1>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name="name"
                        placeholder="Name"
                        register={register}
                        error={errors.name}
                        defaultValue={name}
                    />
                    <Input
                        name="address"
                        placeholder="Address"
                        register={register}
                        error={errors.address}
                    />

                    <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        register={register}
                        error={errors.phone}
                    />

                    <Button type="submit" className={styles.button}>
                        Order
                    </Button>
                </form>
            </>
        </section>
    );
};
