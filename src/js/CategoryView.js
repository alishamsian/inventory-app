// title , description => {} => savedCategory

import Storage from './Storage.js';

const categoryTitle = document.querySelector("#category-title");
const categryDescription = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");

class CategoryView {
  constructor() {
    addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    this.categories = [];
  }
  addNewCategory(e) {
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categryDescription.value;
    console.log(title, description);

    if (!title || !description) return;

    Storage.saveCategory({ title, description });
    this.categories = Storage.getAllCategories();

    this.createCategoriesList();

    categoryTitle.value = "";
    categryDescription.value = "";
  }
  setApp() {
    this.categories = Storage.getAllCategories();
  }

  createCategoriesList() {
    let result = `<option class="bg-slate-500 text-slate-300" value="React">
        React
      </option>`;
    this.categories.forEach((category) => {
      result += `<option class="bg-slate-500 text-slate-300" value="${category.id}">${category.title}</option>`;
    });
    document.getElementById("product-category").innerHTML = result;
  }
}

export default new CategoryView();
