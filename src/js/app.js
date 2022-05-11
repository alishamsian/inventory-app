const products = [
  {
    id: 1,
    title: "React JS",
    category: "frontend",
    createdAt: "2019-01-01-01T10:00:00.889Z",
  },
  {
    id: 2,
    title: "Node JS",
    category: "backend",
    createdAt: "2019-01-01-01T10:00:00.889Z",
  },
  {
    id: 3,
    title: "Angular JS",
    category: "frontend",
    createdAt: "2019-01-01-01T10:00:00.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "Frontend is the part",
    createdAt: "2019-01-01T10:00:00.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "Backend is the part",
    createdAt: "2019-01-01T10:00:00.889Z",
  },
];

class Storage {
  // add new category
  // save category
  // getAllCategories

  static getAllCategories() {
    // products , categories => lpcalStorage
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];

    //    sort => نزولی
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();

    // edit => ...save
    // new => ...save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      // new
      categoryToSave.id = new Data().getItem();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const sortedProducts = savedProducts.sort((a, b) => {
        return new Date(a.updated) - new Date(b.updated) ? -1 : 1;
    });
    return sortedProducts;
  }
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    const existedItem = savedProducts.find((p) => p.id === productToSave.id);
    if (existedItem) {
        existedItem.title = productToSave.title;
        existedItem.category = productToSave.category;
        existedItem.quantity = productToSave.quantity;
    } else {
        // new
        productToSave.id = new Data().getItem();
        productToSave.createdAt = new Date().toISOString();
        savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
}
