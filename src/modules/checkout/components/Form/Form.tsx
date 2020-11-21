import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { phoneRegex } from '@/constants';
import { Input } from '@/components/Form/Input';
import styles from './Form.module.css';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phone: yup
        .string()
        .matches(phoneRegex, "This doesn't look like a valid phone")
        .required('Phone is required'),
    address: yup.string().required('Address is required'),
});

type Inputs = yup.InferType<typeof schema>;

export const Form: React.FC = () => {
    const { register, handleSubmit, errors } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });
    const [submitted, setSubmitted] = useState(false);
    const onSubmit = (data: Inputs) => {
        console.log(data);
        setSubmitted(true);
    };

    return (
        <section className={styles.section}>
            {submitted ? (
                <p>
                    We already started cooking your pizzas. Delivery service
                    will contact you soon!
                </p>
            ) : (
                <>
                    <h1>Delivery Details</h1>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            name="firstName"
                            placeholder="First name"
                            register={register}
                            error={errors.firstName}
                        />
                        <Input
                            name="lastName"
                            placeholder="Last name"
                            register={register}
                            error={errors.lastName}
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

                        <input type="submit" className={styles.button} />
                    </form>
                </>
            )}
        </section>
    );
};