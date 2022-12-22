import { useReactive } from '../instance';

export default {
  name: "App",

  template: "<div>{{ product.id }}</div>",

  setup() {
    console.log("from App:setup");
    const product = useReactive({ id: 1, name: "cake", address: { line1: 'Bac Lieu', line2: 'Ho chi minh' } });
    console.log('product', product);
    // console.log('product.address', product.address);

    product.address.line1 = 'Da Lat';

    return {
      product,
    };
  },
};
