import { Layout } from '@/components/Layout';
import { useUser } from '@/hooks/useUser';
import { Summary } from '@/modules/user/components/Summary';
import { CART_KEY } from '@/modules/user/constants';
import { addOrder } from '@/modules/user/services';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { Form } from '../../components/Form';

import styles from './Checkout.module.css';

export const CheckoutPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [session] = useSession();
    const { cart, mutate } = useUser();

    const handleSubmit = async () => {
        if (session) {
            await addOrder(cart.items);
            mutate();
        } else {
            localStorage.removeItem(CART_KEY);
        }
        setSubmitted(true);
    };

    return (
        <Layout>
            {submitted ? (
                <p className={styles.submitted}>
                    We already started cooking your pizzas. Delivery service
                    will contact you soon!
                </p>
            ) : (
                <>
                    <Form onSubmit={handleSubmit} />
                    <Summary />
                </>
            )}
        </Layout>
    );
};
