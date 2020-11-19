import faker from 'faker/locale/de';
import { Product } from '../../components/Product';
import { ProductType } from '../../typings';
import { Layout } from '../../../../components/Layout';
import styles from './Home.module.css';

const generateNFakePizzas = (n: number): ProductType[] => {
  faker.seed(123);

  return [...Array(n).keys()].map(() => ({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.random.number({ min: 9, max: 100 }),
    image: `/images/pizza.jpg`,
  }));
};

const mockData = generateNFakePizzas(10);

export const Home = () => {
  return (
    <Layout title="Best pizza in town">
      <main className={styles.main}>
        {mockData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
    </Layout>
  );
};
