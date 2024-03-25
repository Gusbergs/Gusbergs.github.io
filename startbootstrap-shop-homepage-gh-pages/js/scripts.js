/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/**
 * a. Namnet är minst 2 tecken och max 50 tecken
b. E-postadressen måste innehålla @ och max 50 tecken
c. Telefonnummer får innehålla siffror, bindestreck och parenteser. Max 50 tecken.
d. Leveransadress enligt svensk standard:
i. Gatuadress: Min 2 tecken och Max 50 tecken
ii. Postnummer: Exakt 5 siffror
iii. Ort: Min 2 tecken och Max 50 tecken
 */

function checkFunc() {
    event.preventDefault();

    /**
     * 
     * Checking Name here
     *  Namnet är minst 2 tecken och max 50 tecken
     */
        const nameInput = document.getElementById('name');
        const name = nameInput.value;
    
        if (name.length >= 2 && name.length <= 50) {
            document.getElementById('nameError').innerHTML = '';
            console.log(name);
        } else {
            document.getElementById('nameError').innerHTML = `
            <div class="alert alert-danger my-2">Du måste ange mellan 2-50 bokstäver</div>`;
            return;
        }
    /**
     * 
     * Checking Number here
     * Telefonnummer får innehålla siffror, bindestreck och parenteser. Max 50 tecken.
     */
        const numberInput = document.getElementById('phone').value;
    
        if (numberInput.length >=10 && numberInput.length <= 50) {
            document.getElementById('numberError').innerHTML = '';
            console.log(numberInput);
        } else {
            document.getElementById('numberError').innerHTML = `
            <div class="alert alert-danger my-2">Du måste ange mellan 10-50 tecken</div>`;
            return;
        }
    
     /**
     * 
     * Checking E-postadress
     * E-postadressen måste innehålla @ och max 50 tecken
     * 
     */
        const emailInput = document.getElementById('email').value;
    
        if (emailInput.length >=10 && emailInput.length <= 50 && emailInput.includes('@')) {
            document.getElementById('emailError').innerHTML = ''; 
            console.log(emailInput);
        } else {
            document.getElementById('emailError').innerHTML = `
            <div class="alert alert-danger my-2">E-postadressen måste innehålla @ och max 50 tecken</div>`;
            return;
        }
    
    /**
     * 
     * Checking address
     * Gatuadress: Min 2 tecken och Max 50 tecken
     * 
     */
        const addressInput = document.getElementById('address').value;
    
        if (addressInput.length >=2 && addressInput.length <= 50) {
            document.getElementById('addressError').innerHTML = ''; 
            console.log(addressInput);
        } else {
            document.getElementById('addressError').innerHTML = `
            <div class="alert alert-danger my-2">Addressen måste innehålla mellan 2-50 tecken</div>`;
            return;
        }
    
    /**
     * 
     * Checking Zip
     * Postnummer: Exakt 5 siffror
     * 
     */
    const zipInput = document.getElementById('zip').value;
    
    if (zipInput.length == 5) {
        document.getElementById('zipError').innerHTML = ''; 
        console.log(zipInput);
    } else {
        document.getElementById('zipError').innerHTML = `
        <div class="alert alert-danger my-2">Postnummer måste innehåla exakt 5 siffror</div>`;
        return;
    }
    
    /**
     * 
     * Checking locality
     * Ort: Min 2 tecken och Max 50 tecken
     * 
     */
    const localityInput = document.getElementById('locality').value;
    
    if (localityInput.length >= 2 && localityInput.length <= 50) {
        document.getElementById('localityError').innerHTML = ''; 
        console.log(localityInput);
        document.getElementById('contactForm').submit();
    } else {
        document.getElementById('localityError').innerHTML = `
        <div class="alert alert-danger my-2">Du måste ange mellan 2-50 tecken</div>`;
        return;
    }

    function bekräftelse(){

    }

    }
    