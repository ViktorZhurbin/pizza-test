import { Layout } from '@/components/Layout';
import { useCart } from '@/hooks/useCart';
import { Summary } from '@/modules/user/components/Summary';
import { CART_KEY } from '@/modules/user/constants';
import { addOrder } from '@/modules/user/services/order';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { Form } from '../../components/Form';

export const CheckoutPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [session] = useSession();
    const { cart } = useCart();

    const handleSubmit = async () => {
        if (session) {
            await addOrder(cart);
        }
        localStorage.removeItem(CART_KEY);
        setSubmitted(true);
    };

    return (
        <Layout noHeader>
            {submitted ? (
                <p>
                    We already started cooking your pizzas. Delivery service
                    will contact you soon!
                </p>
            ) : (
                <>
                    <Form onSubmit={handleSubmit} />
                    {cart && <Summary cart={cart} />}
                </>
            )}
        </Layout>
    );
};
