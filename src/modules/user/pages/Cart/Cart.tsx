import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import { useUser } from '@/hooks/useUser';

import { Cart } from '../../components/Cart';

export const CartPage: React.FC = () => {
    const { cart } = useUser();

    return (
        <Layout
            stickyItem={
                cart.quantity ? (
                    <Button color="green" route="/checkout">
                        Checkout
                    </Button>
                ) : null
            }
        >
            <Cart />
        </Layout>
    );
};
