import { createProducts, deleteManyProducts } from '../../services';
import { generateNFakeProducts } from '../../utils';
import styles from './Admin.module.css';

export const Admin: React.FC = () => {
    const fillDb = () => createProducts(generateNFakeProducts(10));
    const clearDb = async () => {
        await deleteManyProducts({});
    };
    const repopulateDb = async () => {
        await clearDb();
        fillDb();
    };

    return (
        <>
            <div className={styles.container}>
                <h1>Admin Controls</h1>
                <h2 className={styles.title}>Products</h2>
                <div className={styles.btnContainer}>
                    <button
                        color="green"
                        className={styles.btn}
                        onClick={fillDb}
                    >
                        Fake
                    </button>

                    <button
                        className={styles.btn}
                        color="red"
                        onClick={clearDb}
                    >
                        Delete All
                    </button>

                    <button className={styles.btn} onClick={repopulateDb}>
                        Delete & Fake
                    </button>
                </div>
            </div>
        </>
    );
};
