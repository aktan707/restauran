document.addEventListener("DOMContentLoaded", function() {
    const allCategoryBtn = document.querySelector('.menu2');
    const dinnerBtn = document.querySelectorAll('.menu1')[0];
    const lunchBtn = document.querySelectorAll('.menu1')[1];
    const dessertBtn = document.querySelectorAll('.menu1')[2];
    const drinkBtn = document.querySelectorAll('.menu1')[3];

    const products = document.querySelectorAll('.products');

    allCategoryBtn.addEventListener('click', () => {
        products.forEach(product => product.style.display = 'block');
    });

    dinnerBtn.addEventListener('click', () => {
        filterProducts('Dinner');
    });

    lunchBtn.addEventListener('click', () => {
        filterProducts('Lunch');
    });

    dessertBtn.addEventListener('click', () => {
        filterProducts('Dessert');
    });

    drinkBtn.addEventListener('click', () => {
        filterProducts('Drink');
    });

    function filterProducts(category) {
        products.forEach(product => {
            if (product.querySelector('h4').innerText.includes(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});



