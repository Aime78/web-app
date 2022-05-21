
// The default product-type 
const productSpecs = document.querySelector('.product-specs');
const productType = document.querySelector('#productType');

const label = document.createElement('label');
const input = document.createElement('input');
const dvdSizeControl = document.createElement('span');

if (productType.value == 'dvd') {
    label.textContent = 'Size(MB)';
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Size of the DVD-disc');
    input.setAttribute('id','size');
}

productSpecs.appendChild(label);
productSpecs.appendChild(input);
productSpecs.appendChild(dvdSizeControl);

// Change the product type
productType.addEventListener('change', function(e){

    if (productType.value == 'book') {
        const furnitureSpecs = document.querySelectorAll('.product-type');
        if(furnitureSpecs.length != 0) {
            furnitureSpecs[0].remove();
            furnitureSpecs[1].remove();
        }
        label.textContent = 'Weight(KG)';
        input.setAttribute('type','text');
        input.setAttribute('placeholder','Weight of the book');
        input.setAttribute('id','weight');
    }

    else if (productType.value == 'furniture') {
        const divHeight = document.createElement('div');
        const labelLength = document.createElement('label');
        const inputLength = document.createElement('input');
        const divLength = document.createElement('div');

        const labelWidth = document.createElement('label');
        const inputWidth = document.createElement('input');
        const divWidth = document.createElement('div');

        label.textContent = 'Height(CM)';
        input.setAttribute('type','text');
        input.setAttribute('placeholder','Height of the furniture');
        input.setAttribute('id','height');
        //divHeight.setAttribute('class', 'product-input');

        labelWidth.textContent = 'Width(CM)';
        inputWidth.setAttribute('type','text');
        inputWidth.setAttribute('placeholder','Width of the furniture');
        inputWidth.setAttribute('id','width');
        divWidth.setAttribute('class', 'product-type');

        labelLength.textContent = 'Length(CM)';
        inputLength.setAttribute('type','text');
        inputLength.setAttribute('placeholder','Length of the furniture');
        inputLength.setAttribute('id','length');
        divLength.setAttribute('class', 'product-type');

        divHeight.appendChild(label);
        divHeight.appendChild(input);
        productSpecs.appendChild(divHeight);

        divWidth.appendChild(labelWidth);
        divWidth.appendChild(inputWidth);
        productSpecs.appendChild(divWidth);
        
        divLength.appendChild(labelLength);
        divLength.appendChild(inputLength);
        productSpecs.appendChild(divLength);
        
    }
    else {
        const furnitureSpecs = document.querySelectorAll('.product-type');
        if(furnitureSpecs.length != 0) {
            furnitureSpecs[0].remove();
            furnitureSpecs[1].remove();
        }
        label.textContent = 'Size(MB)';
        input.setAttribute('type','text');
        input.setAttribute('placeholder','Size of the DVD-disc');
        input.setAttribute('id','size');

    }
})

// Check that empty fields are submitted 
const inputs = Array.from(document.querySelectorAll('input'));
const form = document.querySelector('#product_form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    
    const skuControl = document.querySelector('.sku-control');
    const nameControl = document.querySelector('.name-control');
    const priceControl = document.querySelector('.price-control');

    if(inputs[0].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        skuControl.textContent = 'Please provide the sku of the product';
        e.preventDefault();
    }
    else if(inputs[1].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        nameControl.textContent = 'Please provide the name of the product';
        e.preventDefault();
    }
    else if(inputs[2].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        priceControl.textContent = 'Please provide the price of the product';
        e.preventDefault();
    }
    else if(inputs[3].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        dvdSizeControl.textContent = 'Please provide the size of the DVD-disc';
        e.preventDefault();
    }

    
});

