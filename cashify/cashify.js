let activeButton = null;

    function toggleActive(button) {
        if (activeButton !== null) {
            activeButton.classList.remove('active');
        }
        activeButton = button;
        activeButton.classList.add('active');
    }
    
    let articleClick = document.querySelectorAll('.article-row1 button, .article-row2 button, .article-row3 button');
    
    let articleInfo = document.querySelector('.articleinfo');
    let articleNewName = document.querySelector('.articlename');
    let paymentContainer = document.querySelector('.payment-container');

    let varukorg = document.querySelector('.varukorg');
    let paymentMethodsContainer = document.querySelector('.payment-methods-container');

    let articlesAdded = document.querySelector('.articles-added');
    let totalPrice = 0;
    let scrollContainer;
    let paymentObject = [];

    articleClick.forEach(articleClick => {
        articleClick.addEventListener('click', () => {
            
            if (paymentObject.some((e)=>e?.article == articleClick.getAttribute('data-article-name'))) {
                const index = paymentObject.findIndex((e)=>e?.article == articleClick.getAttribute('data-article-name'))
                paymentObject[index].price += 100;
            } else {
                paymentObject.push({'article':articleClick.getAttribute('data-article-name'), 'price':100})
            }

            paymentContainer.innerHTML=""
            paymentContainer.insertAdjacentHTML("afterbegin", `
            <div class="varukorg">
                <button class="park-receipt" id="p-button" onclick="parkReceiptButton()">P</button>
                <p>Varukorg (<span class="articles-added">${paymentObject.length}</span>)</p>
                <button onclick="bigTrashbinButton()" class="trashbin">
                    <img src="trashbin.png" alt="">
                </button>
            </div>
            <div class="scroll-container">
            </div>`)

            updateScrollContainer();
            
        paymentObject.map((e, index)=>{
            scrollContainer.insertAdjacentHTML('beforeend',`
                <div class="articleinfo">
                    <div class="articleandprice">
                        <p class="articlename">${e.article}</p>
                        <p class="price">${e.price}<span>kr</span></p>
                    </div>
                    <div class="editarticle">
                        <div class="plus-minus-signs">
                            <button>-</button>
                            <button>+</button>
                        </div>
                        <div class="trashbin-pen">
                            <button>
                                <img src="pen-pic.png" alt="">
                            </button>
                            <button onclick="removeArticle(${index})" class="article-trashbin">
                                <img src="trashbin.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>`)
        })
        paymentContainer.insertAdjacentHTML('beforeend', `
        <div class="payment-methods-container">
            <div class="total-amount-container">
                <p class="total-text">Totalt</p>
                <p class="total-amount">${totalPrice = paymentObject.reduce((accumulator, paymentObject) => accumulator + (paymentObject.price || 0),0)}</p><p>kr</p>
            </div>
            <div class="payment-buttons-container">
                <button class="swish-button">Swish</button>
                <button class="kort-button">Kort</button>
            </div>
        </div>`)
        });
    });

    function updateScrollContainer () {
        scrollContainer = document.querySelector('.scroll-container');
    }


    function bigTrashbinButton () {
        clearPaymentContainer ();
    }

    function clearPaymentContainer () {
        paymentObject = [];
        paymentContainer.innerHTML="";
        paymentContainer.insertAdjacentHTML('beforeend', `
        <div class="cashify-logo"><img src="cashify logga.png"></div>
        `);
    }

    function removeArticle(index) {
        // Remove the element at the specified index
        let removedArticle = paymentObject.splice(index, 1)[0];
    
        // Update the UI
        updateUI();

        if (paymentObject.length === 0) {
            clearPaymentContainer ();
        }
    }
    
    function updateUI() {
        paymentContainer.innerHTML = "";
        paymentContainer.insertAdjacentHTML("afterbegin", `
            <div class="varukorg">
                <button class="park-receipt" id="p-button" onclick="parkReceiptButton()">P</button>
                <p>Varukorg (<span class="articles-added">${paymentObject.length}</span>)</p>
                <button onclick="bigTrashbinButton()" class="trashbin">
                    <img src="trashbin.png" alt="">
                </button>
            </div>
            <div class="scroll-container">
            </div>`);
    
        updateScrollContainer();
    
        paymentObject.forEach((e, index) => {
            scrollContainer.insertAdjacentHTML('beforeend', `
                <div class="articleinfo">
                    <div class="articleandprice">
                        <p class="articlename">${e.article}</p>
                        <p class="price">${e.price}<span>kr</span></p>
                    </div>
                    <div class="editarticle">
                        <div class="plus-minus-signs">
                            <button>-</button>
                            <button>+</button>
                        </div>
                        <div class="trashbin-pen">
                            <button>
                                <img src="pen-pic.png" alt="">
                            </button>
                            <button onclick="removeArticle(${index})" class="article-trashbin">
                                <img src="trashbin.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>`);
        });
    
        paymentContainer.insertAdjacentHTML('beforeend', `
            <div class="payment-methods-container">
                <div class="total-amount-container">
                    <p class="total-text">Totalt</p>
                    <p class="total-amount">${totalPrice = paymentObject.reduce((accumulator, paymentObject) => accumulator + (paymentObject.price || 0), 0)}</p><p>kr</p>
                </div>
                <div class="payment-buttons-container">
                    <button class="swish-button">Swish</button>
                    <button class="kort-button">Kort</button>
                </div>
            </div>`);
    }


let menuButtonClick = document.querySelector('.menu');
let articleContainer = document.querySelector('.article-container');
let menuContainer = document.querySelector('.menu-container')

    menuButtonClick.addEventListener('click', () => {
        articleContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
        functionsContainer.style.display = 'none';
        getReceiptContainer.style.display = 'none';
    });


let pressXs = document.querySelectorAll('.close-menu');

pressXs.forEach(pressX => {

    pressX.addEventListener('click', () => {
        articleContainer.style.display = '';
        menuContainer.style.display = 'none';
        functionsContainer.style.display = 'none';
        getReceiptContainer.style.display = 'none';
        });
    });


let pressKassaText = document.querySelector('.kassa');

    pressKassaText.addEventListener('click', () => {
        articleContainer.style.display = '';
        menuContainer.style.display = 'none';
        functionsContainer.style.display = 'none';
        getReceiptContainer.style.display = 'none';
    });


let pressFunctionsText = document.querySelector('.functions');
let functionsContainer = document.querySelector('.functions-container');

    pressFunctionsText.addEventListener('click', () => {
        articleContainer.style.display = 'none';
        functionsContainer.style.display = 'flex';
        menuContainer.style.display = 'none';
        getReceiptContainer.style.display = 'none';
    })


let xRapportBtn = document.querySelector('.x-rapport-button');
let xRapportContainer = document.querySelector('.x-rapport-container');

let cashifyContainer = document.querySelector('.cashify');

    xRapportBtn.addEventListener('click', () => {
        xRapportContainer.classList.add('visible');
        cashifyContainer.classList.add('visible');
    })


let printXrapport = document.querySelector('.skrivut-button');
let pleaseWait = document.querySelector('.vänligen-vänta-container');

    printXrapport.addEventListener('click', () => {
        xRapportContainer.classList.remove('visible');
        pleaseWait.classList.add('visible');
        setTimeout(() => {
            pleaseWait.classList.remove('visible');

            cashifyContainer.classList.remove('visible');
        }, 1500)
    })


let mailXrapport = document.querySelector('.maila-button');
let mailXrapportContainer = document.querySelector('.mail-xrapport-container');

    mailXrapport.addEventListener('click', () => {
        mailXrapportContainer.classList.add('visible');
        xRapportContainer.classList.remove('visible');

    })

let avbrytMail = document.querySelector('.avbryt-mail-button');

    avbrytMail.addEventListener('click', () => {
        mailXrapportContainer.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
    })


let avbrytXBtn = document.querySelector('.avbryt-xrapport-button');

    avbrytXBtn.addEventListener('click', () => {
        xRapportContainer.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
    })


let zRapportBtn = document.querySelector('.dagsavslut-button');
let zRapportContainer = document.querySelector('.z-rapport-container');

    zRapportBtn.addEventListener('click', () => {
        zRapportContainer.classList.add('visible');
        cashifyContainer.classList.add('visible');
    })


let avbrytZBtn = document.querySelector('.avbryt-zrapport-button');

    avbrytZBtn.addEventListener('click', () => {
        zRapportContainer.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
    })


let okBtn = document.querySelector('.ok-button');
let zRapportCreated = document.querySelector('.zrapport-created-container');

    okBtn.addEventListener('click', () => {
        zRapportContainer.classList.remove('visible');
        pleaseWait.classList.add('visible');
        setTimeout(() => {
            pleaseWait.classList.remove('visible');

            zRapportCreated.classList.add('visible');

        setTimeout(() => {
            zRapportCreated.classList.remove('visible');
            cashifyContainer.classList.remove('visible');
            
        }, 1500);
        }, 1500);
        
    });


let logOutBtn = document.querySelector('.logout');

    logOutBtn.addEventListener('click', () => {
        cashifyContainer.classList.add('show');
        loginContainer.classList.remove('hide');
    })
    

let digitBtns = document.querySelectorAll('.digits-container button');
let hiddenPassword = document.querySelector('.login-container h2');
let currentPassword = '';

    digitBtns.forEach(digitBtn => {
        digitBtn.addEventListener('click', () => {
            if (currentPassword.length < 4) {
                currentPassword += digitBtn.innerText;
                hiddenPassword.innerText = digitBtn.innerText;
                hiddenPassword.innerText = '•'.repeat(currentPassword.length)
            }
            
        })
    })

let clearPasswordBtn = document.querySelector('.login-clear-button');

    clearPasswordBtn.addEventListener('click', () => {
        currentPassword = '';
        hiddenPassword.innerText = '';
    })

let loginOkBtn = document.querySelector('.login-ok-button');
let loginContainer = document.querySelector('.login-container');

    loginOkBtn.addEventListener('click', () => {
        if (currentPassword === '1') {
            cashifyContainer.classList.add('show');
            loginContainer.classList.add('hide');
            hiddenPassword.innerText = '';
            currentPassword = '';
        } else {
            hiddenPassword.innerText = 'Fel kod';
            currentPassword = '';
        }
    })


let parkReceiptPopup = document.querySelector('.parkreceipt-popup');
let noArticlesFound = document.querySelector('.no-articles-found-popup');


function parkReceiptButton() {
    if (paymentObject.length === 0) {
        cashifyContainer.classList.add('visible');
        noArticlesFound.classList.add('visible');
    } else {
        cashifyContainer.classList.add('visible');
        parkReceiptPopup.classList.add('visible');
    }
}


let noArticlesOkBtn = document.querySelector('.no-articles-ok');

    noArticlesOkBtn.addEventListener('click', () => {
        noArticlesFound.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
    })


let cancelParkReceiptBtn = document.querySelector('.avbryt-parkreceipt-button');
let comment = document.querySelector('.parkreceipt-popup input')

    cancelParkReceiptBtn.addEventListener('click', () => {
        parkReceiptPopup.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
        comment.value = '';
    })


let getReceiptButtons = document.querySelectorAll('.get-receipt');
let getReceiptContainer = document.querySelector('.getreceipt-container');

    getReceiptButtons.forEach(getReceiptButton => {
        getReceiptButton.addEventListener('click', () => {
            articleContainer.style.display = 'none';
            getReceiptContainer.style.display = 'flex';
            functionsContainer.style.display = 'none';
            menuContainer.style.display = 'none';
        })
    })


let confirmParkBtn = document.querySelector('.confirm-parkreceipt-button');
let pScrollContainer = document.querySelector('.p-scroll-container')
let parkedReceiptsObject = [];
let saveReceiptObject = [];
        confirmParkBtn.addEventListener('click', () => {

            parkReceiptPopup.classList.remove('visible');
            cashifyContainer.classList.remove('visible');
            
            parkedReceiptsObject.push(paymentObject);
            saveReceiptObject.push(paymentObject);
            // paymentObject.forEach(obj => {
            //     saveReceiptObject.push(obj);
            // });


            parkedReceiptsObject.map((e,index)=>{
                pScrollContainer.insertAdjacentHTML('beforeend', `
                <div onclick="parkedReceiptClick(${index})" class="parked-receipt">
                    <p class="p-comment">${(comment.value === '' ? 'Kvitto #' : `${comment.value}`)}</p>
                    <p class="p-articlename1">${e[0].article}</p>
                    <p class="p-articlename2">${(e[1]?.article === undefined) ? '' : `${e[1].article}`}</p>
                    <p class="p-articlename3">${(paymentObject.length >= 3 ? `+${paymentObject.length - 2}` : '')}</p>
                    <p class="p-price">${totalPrice} kr</p>
                </div>`)
            })
            
            parkedReceiptsObject = [];
            clearPaymentContainer();
            comment.value = '';
            console.log(saveReceiptObject);
            
        })
    

    function parkedReceiptClick(index) {
        updateParkedReceiptUI();
        
        
        // Assuming saveReceiptObject is an array of arrays
        const selectedArray = saveReceiptObject[index];

        // Flatten the selected array
        const flattenedArray = selectedArray.flat();

        // Update paymentObject with the flattened array
        paymentObject = flattenedArray;
        console.log(paymentObject)
        
        updateUI();
        
        
        articleContainer.style.display = '';
        getReceiptContainer.style.display = 'none';
        
    }


    function updateParkedReceiptUI() {
        pScrollContainer.innerHTML = "";
        paymentObject.map((e,index)=>{
            pScrollContainer.insertAdjacentHTML('beforeend', `
            <div onclick="parkedReceiptClick(${index})" class="parked-receipt">
                <p class="p-comment">${(comment.value === '' ? 'Kvitto #' : `${comment.value}`)}</p>
                <p class="p-articlename1">${e[0].article}</p>
                <p class="p-articlename2">${(e[1]?.article === undefined) ? '' : `${e[1].article}`}</p>
                <p class="p-articlename3">${(paymentObject.length >= 3 ? `+${paymentObject.length - 2}` : '')}</p>
                <p class="p-price">${totalPrice} kr</p>
            </div>`)
        })
        console.log(paymentObject)
    }
        