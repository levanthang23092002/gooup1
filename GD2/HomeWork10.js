const { v4: uuidv4 } = require('uuid');

const orderIds = new Set();
const orderDetails = new Map();

// Hàm để kiểm tra xem order có tất cả productQuantity bằng 0 hay không
function allProductsZeroQuantity(products) {
  return products.every(product => product.productQuantity === 0);
}

// Hàm thêm order mới
function addOrder(products) {
  if (products.length === 0) {
    console.log('Order must have at least 1 product.');
    return;
  }

  const orderId = uuidv4();

  orderIds.add(orderId);
  orderDetails.set(orderId, products);

  console.log('đã thêm order.');
}
// hàm read order by orderid
function readOrder(orderId) {
    if (orderIds.has(orderId)) {
        const products = orderDetails.get(orderId);
        console.log(products) ;
    } else {
        console.log('Không tìm thấy id :'+ orderId);
    }
}

// Hàm cập nhật order
function updateOrder(orderId, products) {
  if (!orderIds.has(orderId)) {
    console.log('Không tìm thấy');
    return;
  }

  if (products.length === 0) {
    console.log('order này sẽ đc xóa');
    return;
  }

  orderDetails.set(orderId, products);

  // Kiểm tra nếu tất cả productQuantity bằng 0 thì xoá order tương ứng
  if (allProductsZeroQuantity(products)) {
    deleteOrder(orderId);
    console.log('Order deleted due to all products having zero quantity.');
  } else {
    console.log('Order updated successfully.');
  }
}

// Hàm xoá order
function deleteOrder(orderId) {
  if (!orderIds.has(orderId)) {
    console.log('Order not found.');
    return;
  }

  orderIds.delete(orderId);
  orderDetails.delete(orderId);

  console.log('Order deleted successfully.');
}

// Hàm tính tổng giá trị price x productQuantity lớn nhất
function calculateMaxOrderValue() {
    let maxOrderValue = 0;
  
    for (const products of orderDetails.values()) {
      for (const product of products) {
        const orderValue = product.productQuantity * product.price;
        if (orderValue > maxOrderValue) {
          maxOrderValue = orderValue;
        }
      }
    }
  
    return maxOrderValue;
  }

// Hàm in ra danh sách orderIds
function printOrderIds() {
  console.log('List of Order Ids:');
  orderIds.forEach(orderId => {
    console.log(orderId);
  });
}


// Thêm order mới
const products1 = [
    { productId: 1, productQuantity: 2, productName: 'áo', price: 15.99 },
    { productId: 2, productQuantity: 3, productName: 'quần', price: 9.99 }
  ];
  const products2 = [
    { productId: 1, productQuantity: 4, productName: 'áo', price: 15.99 },
    { productId: 2, productQuantity: 5, productName: 'quần', price: 9.99 }
  ];
  addOrder(products1);
  addOrder(products2);
  



  // Lấy orderId của order vừa thêm
  const orderIdToUpdate1 = Array.from(orderIds)[0];
  const orderIdToUpdate2 = Array.from(orderIds)[1];
  readOrder(orderIdToUpdate1)



  // Cập nhật order bằng orderId
  const products3 = [
    { productId: 3, productQuantity: 3, productName: 'mũ', price: 12.99 },
    { productId: 4, productQuantity: 0, productName: 'kính', price: 8.99 }
  ];


  // updateOrder(orderIdToUpdate1, products3);
  // readOrder(orderIdToUpdate1)

  // // delete orderId bằng id
  deleteOrder(orderIdToUpdate1);

  readOrder(orderIdToUpdate1)
  // // In ra danh sách orderIds
  printOrderIds();
  
  // // Tính tổng giá trị lớn nhất
  const maxOrderValue = calculateMaxOrderValue();
  console.log('Max Order Value:', maxOrderValue);