export const store = {
  name: 'TechShop',
  products: [
    {
      id: 1,
      name: 'Laptop',
      details: {
        brand: 'Dell',
      },
      getPrice: () => 1200,
    },
    {
      id: 2,
      name: 'Smartphone',
      details: {
        brand: 'Samsung',
        specifications: {
          processor: 'Snapdragon 888',
          memory: '8GB',
          storage: '256GB',
        },
      },
      getPrice: () => 800,
    },
    {
      id: 3,
      name: 'Headphones',
    },
  ],
};
