
// The default product-type 
const productSpecsData = document.querySelector('.product-specs');
const productType = document.querySelector('#productType');

const dvdSize = document.createElement('div');
const labelDVD = document.createElement('label');
const inputDVD = document.createElement('input');
const productSpecControlDVD = document.createElement('span');
const productSpecControlBook = document.createElement('span');
const productSpecControlHeight = document.createElement('span');
const productSpecControlWidth = document.createElement('span');
const productSpecControlLength = document.createElement('span');


if (productType.value == 'dvd') {
    labelDVD.textContent = 'Size(MB)';
    inputDVD.setAttribute('type','text');
    inputDVD.setAttribute('placeholder','Size of the DVD-disc');
    inputDVD.setAttribute('id','size');
    inputDVD.setAttribute('autocomplete','off');
    dvdSize.setAttribute('class','dvd-size');
    dvdSize.setAttribute('id','specs');
    productSpecControlDVD.setAttribute('class','dvd-message');
}

dvdSize.appendChild(labelDVD);
dvdSize.appendChild(inputDVD);
dvdSize.appendChild(productSpecControlDVD);
productSpecsData.append(dvdSize);

// Change the product type
productType.addEventListener('change', function(e){

    const productSpecs = document.querySelectorAll('#specs');
    if (productType.value == 'book') {

        if (productSpecs.length == 1) {
            productSpecs[0].remove();
        }
        else {
            productSpecs[0].remove();
            productSpecs[1].remove();
            productSpecs[2].remove();
        }

        const bookWeight = document.createElement('div');
        const labelWeight = document.createElement('label');
        const inputWeight= document.createElement('input');

        labelWeight.textContent = 'Weight(KG)';
        inputWeight.setAttribute('type','text');
        inputWeight.setAttribute('placeholder','Weight of the book');
        inputWeight.setAttribute('id','weight');
        inputWeight.setAttribute('autocomplete','off');
        bookWeight.setAttribute('class','book-weight');
        bookWeight.setAttribute('id','specs');
        productSpecControlBook.setAttribute('class','book-message');

        bookWeight.appendChild(labelWeight);
        bookWeight.appendChild(inputWeight);
        bookWeight.appendChild(productSpecControlBook);
        productSpecsData.appendChild(bookWeight);


    }

    else if (productType.value == 'furniture') {

        productSpecs[0].remove();

        const furnitureHeight = document.createElement('div');
        const heightLabel = document.createElement('label');
        const heightInput = document.createElement('input');

        const furnitureLength = document.createElement('div');
        const lengthLabel = document.createElement('label');
        const lengthInput = document.createElement('input');
        

        const furnitureWidth = document.createElement('div');
        const widthLabel = document.createElement('label');
        const widthInput = document.createElement('input');

        heightLabel.textContent = 'Height(CM)';
        heightInput.setAttribute('type','text');
        heightInput.setAttribute('placeholder','Height of the furniture');
        heightInput.setAttribute('id','height');
        heightInput.setAttribute('autocomplete','off');
        productSpecControlHeight.setAttribute('class','furniture-message');

        furnitureHeight.setAttribute('class', 'furniture-height');
        furnitureHeight.setAttribute('id', 'specs');

        widthLabel.textContent = 'Width(CM)';
        widthInput.setAttribute('type','text');
        widthInput.setAttribute('placeholder','Width of the furniture');
        widthInput.setAttribute('id','width');
        widthInput.setAttribute('autocomplete','off');
        productSpecControlWidth.setAttribute('class','furniture-message');
       
        furnitureWidth.setAttribute('class', 'furniture-width');
        furnitureWidth.setAttribute('id', 'specs');

        lengthLabel.textContent = 'Length(CM)';
        lengthInput.setAttribute('type','text');
        lengthInput.setAttribute('placeholder','Length of the furniture');
        lengthInput.setAttribute('id','length');
        lengthInput.setAttribute('autocomplete','off');
        productSpecControlLength.setAttribute('class','furniture-message');
        
        furnitureLength.setAttribute('class', 'furniture-length');
        furnitureLength.setAttribute('id', 'specs');

        furnitureHeight.appendChild(heightLabel);
        furnitureHeight.appendChild(heightInput);
        furnitureHeight.appendChild(productSpecControlHeight);
        productSpecsData.appendChild(furnitureHeight);

        furnitureWidth.appendChild(widthLabel);
        furnitureWidth.appendChild(widthInput);
        furnitureWidth.appendChild(productSpecControlWidth);
        productSpecsData.appendChild(furnitureWidth);

        furnitureLength.appendChild(lengthLabel);
        furnitureLength.appendChild(lengthInput);
        furnitureLength.appendChild(productSpecControlLength);
        productSpecsData.appendChild(furnitureLength);
        
    }
    else {
        
        if (productSpecs.length == 1) {
            productSpecs[0].remove();
        }
        else {
            productSpecs[0].remove();
            productSpecs[1].remove();
            productSpecs[2].remove();
        }

        labelDVD.textContent = 'Size(MB)';
        inputDVD.setAttribute('type','text');
        inputDVD.setAttribute('placeholder','Size of the DVD-disc');
        inputDVD.setAttribute('id','size');
        dvdSize.setAttribute('class','dvd-size');
        dvdSize.setAttribute('id','specs');

        dvdSize.appendChild(labelDVD);
        dvdSize.appendChild(inputDVD);
        dvdSize.appendChild(productSpecControlDVD);
        productSpecsData.append(dvdSize);        

    }
});

// Check that empty fields are submitted 
const inputs = Array.from(document.querySelectorAll('input'));
const form = document.querySelector('#product_form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    
    const skuControl = document.querySelector('.sku-control');
    const nameControl = document.querySelector('.name-control');
    const priceControl = document.querySelector('.price-control');
    const messageQuit = Array.from(document.querySelectorAll('span'));
    messageQuit.forEach(message => message.textContent = '');

    const productSpecs = document.querySelectorAll('#specs');
    const productSpecsInput = document.querySelectorAll('#specs > input');
    console.log(productSpecsInput[0]);
    e.preventDefault();

    // Check that all the fields are not empty
    if(inputs[0].value == '' && inputs[1].value == '' && inputs[2].value == '' && inputs[3].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        skuControl.textContent = 'Please provide the sku of the product';
        nameControl.textContent = 'Please provide the name of the product';
        priceControl.textContent = 'Please provide the price of the product';
    }

    if (productSpecs.length == 1) {
        if (productSpecsInput[0].value == '' && productSpecsInput[0].getAttribute('id') == 'size') {
            productSpecControlDVD.textContent = 'Please provide the size of the DVD-disc';
            e.preventDefault();
        }
        else if (productSpecsInput[0].value == '' && productSpecsInput[0].getAttribute('id') == 'weight'){
            productSpecControlBook.textContent = 'Please provide the weight of the Book';
            e.preventDefault();
        }
    }
    else {
        
        if (productSpecsInput[0].value == '' && productSpecsInput[0].getAttribute('id') == 'height') {
            productSpecControlHeight.textContent = 'Please provide the height of the furniture';
            e.preventDefault();
        }
        if (productSpecsInput[1].value == '' && productSpecsInput[1].getAttribute('id') == 'width') {
            productSpecControlWidth.textContent = 'Please provide the width of the furniture';
            e.preventDefault();
        }
        if (productSpecsInput[2].value == '' && productSpecsInput[2].getAttribute('id') == 'length') {
            productSpecControlLength.textContent = 'Please provide the length of the furniture';
            e.preventDefault();
        }
    } 
    
    // Check that a particular field is not empty
    if(inputs[0].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        skuControl.textContent = 'Please provide the sku of the product';
        e.preventDefault();
    }
    if(inputs[1].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        nameControl.textContent = 'Please provide the name of the product';
        e.preventDefault();
    }
    if(inputs[2].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        priceControl.textContent = 'Please provide the price of the product';
        e.preventDefault();
    }
    if(inputs[3].value == '') {
        errorMessage.textContent = 'Please submit all required data';
        productSpecControlDVD.textContent = 'Please provide the size of the DVD-disc';
        e.preventDefault();
    }
    
});

