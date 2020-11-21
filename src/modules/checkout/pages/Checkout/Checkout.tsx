import { Layout } from '@/components/Layout';
import { useCart } from '@/hooks/useCart';
import { Summary } from '@/modules/user/components/Summary';
import { addOrder } from '@/modules/user/services/order';
import { useState } from 'react';
import { Form } from '../../components/Form';

export const CheckoutPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const { cart } = useCart();

    const handleSubmit = async () => {
        const data = await addOrder(cart);
        data && setSubmitted(true);
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
