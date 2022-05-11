import CategoryView from './CategoryView.js';

document.addEventListener("DOMContentLoaded", () => {
    // setapp => categories : OK
    CategoryView.setApp();
    console.log(CategoryView);

    // create Categories options
    CategoryView.createCategoriesList();
})