import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';

import { Cart } from '../../components/Cart';

export const CartPage: React.FC = () => {
    return (
        <Layout
            stickyItem={
                <Button color="green" route="/checkout">
                    Checkout
                </Button>
            }
        >
            <Cart />
        </Layout>
    );
};
