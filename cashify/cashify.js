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
    let articleInfo2 = document.querySelector('.articleinfo2');
    let articleInfo3 = document.querySelector('.articleinfo3');
    let paymentContainer = document.querySelector('.payment-container')
    let articleNewName = document.querySelector('.articlename');
    let articleNewName2 = document.querySelector('.articlename2');
    let articleNewName3 = document.querySelector('.articlename3');

    let isButtonClicked = '';

    let varukorg = document.querySelector('.varukorg');
    let paymentMethodsContainer = document.querySelector('.payment-methods-container');

    let articlesAdded = document.querySelector('.articles-added');
    
    // let priceOfArticle1 = document.querySelector('p.price1');
    // priceOfArticle1 = priceOfArticle1.innerText.replace(/\D/g, "");
    // priceOfArticle1 = parseInt(priceOfArticle1);

    // let priceOfArticle2 = document.querySelector('p.price2');
    // priceOfArticle2 = priceOfArticle2.innerText.replace(/\D/g, "");
    // priceOfArticle2 = parseInt(priceOfArticle2);

    // let priceOfArticle3 = document.querySelector('p.price3');
    // priceOfArticle3 = priceOfArticle3.innerText.replace(/\D/g, "");
    // priceOfArticle3 = parseInt(priceOfArticle3);

    // let totalPriceElement = document.querySelector('p.total-amount');
    let paymentObject = [];
    let totalPrice = 0;

    articleClick.forEach(articleClick => {
        articleClick.addEventListener('click', () => {
            
            if (paymentObject.some((e)=>e?.article == articleClick.getAttribute('data-article-name'))) {
                const index = paymentObject.findIndex((e)=>e?.article == articleClick.getAttribute('data-article-name'))
                paymentObject[index].price += 100;
            } else {
                paymentObject.push({'article':articleClick.getAttribute('data-article-name'), 'price':100})
            }
            console.log(paymentObject)
            
            // let totalPrice = parseInt(totalPriceElement.innerText);

            paymentContainer.innerHTML=""
            paymentContainer.insertAdjacentHTML("afterbegin", `
            <div class="varukorg">
                <button class="park-receipt" id="p-button">P</button>
                <p>Varukorg (<span class="articles-added">${paymentObject.length}</span>)</p>
                <button onclick="bigTrashBinButton()" class="trashbin">
                    <img src="trashbin.png" alt="">
                </button>
            </div>
            <div class="scroll-container">
            </div>
            `)
            let scrollContainer = document.querySelector('.scroll-container');
        paymentObject.map((e)=>{
            scrollContainer.insertAdjacentHTML('beforeend', `
            <div>
                <div class="articleinfo">
                    <div class="articleandprice">
                        <p class="articlename">${e.article}</p>
                        <p class="price1">${e.price}<span>kr</span></p>
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
                            <button class="article-trashbin1">
                                <img src="trashbin.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `)
            console.log(totalPrice);
        })

        paymentContainer.insertAdjacentHTML('beforeend', `
        <div class="payment-methods-container">
            <div class="total-amount-container">
                <p class="total-text">Totalt</p>
                <p class="total-amount">${paymentObject.reduce((accumulator, paymentObject) => accumulator + (paymentObject.price || 0),0)}</p><p>kr</p>
            </div>
            <div class="payment-buttons-container">
                <button class="swish-button">Swish</button>
                <button class="kort-button">Kort</button>
            </div>
        </div>`)

        

        // paymentObject.map((e)=> {
        //     paymentContainer.insertAdjacentHTML('afterbegin', `
        //     <div class="payment-methods-container">
        //         <div class="total-amount-container">
        //             <p class="total-text">Totalt</p>
        //             <p class="total-amount">${totalPrice += e.price}</p><p>kr</p>
        //         </div>
        //         <div class="payment-buttons-container">
        //             <button class="swish-button">Swish</button>
        //             <button class="kort-button">Kort</button>
        //         </div>
        //     </div>`)
        // })

           
            console.log(paymentContainer)
            // else if (isButtonClicked === 2 && totalPrice < 300) {
            //     let articleName2 = articleClick.getAttribute('data-article-name');
            //     articleNewName2.innerText = articleName2;
            //     articleInfo2.style.display = 'flex';
            //     varukorg.style.display = 'flex';

            //     totalPrice += priceOfArticle2;
            //     totalPriceElement.innerText = totalPrice;

            // } else if (isButtonClicked === 3 && totalPrice < 300) {
            //     let articleName3 = articleClick.getAttribute('data-article-name');
            //     articleNewName3.innerText = articleName3;
            //     articleInfo3.style.display = 'flex';
            //     varukorg.style.display = 'flex';

            //     totalPrice += priceOfArticle3;
            //     totalPriceElement.innerText = totalPrice;
            // }
            console.log(isButtonClicked);
        });
    });
    function bigTrashBinButton () {
        paymentObject = [];
        paymentContainer.innerHTML=""
    }
    



// function removeAllArticles() {
//     articleInfo.style.display = 'none';
//     articleInfo2.style.display = 'none';
//     articleInfo3.style.display = 'none';
//     varukorg.style.display = 'none';
//     isButtonClicked = 0;
//     paymentMethodsContainer.classList.remove('show');
//     totalPrice = 0;
//     totalPriceElement.innerText = totalPrice;
//     console.log(isButtonClicked);
// }


//     let removeArticle1 = document.querySelector('.article-trashbin1');

//     removeArticle1.addEventListener('click', () => {
//         articleInfo.style.display = 'none';
//         isButtonClicked--;
//         articlesAdded.innerText = isButtonClicked;

//         let totalPrice = parseInt(totalPriceElement.innerText);
//         totalPrice = totalPrice - priceOfArticle1;
//         totalPriceElement.innerText = totalPrice;

//         if (isButtonClicked === 0) {
//             varukorg.style.display = '';
//             paymentMethodsContainer.classList.remove('show');
//         }
//         console.log(isButtonClicked);
//     })

//     let removeArticle2 = document.querySelector('.article-trashbin2');

//     removeArticle2.addEventListener('click', () => {
//         articleInfo2.style.display = 'none';
//         isButtonClicked--;
//         articlesAdded.innerText = isButtonClicked;

//         let totalPrice = parseInt(totalPriceElement.innerText);
//         totalPrice = totalPrice - priceOfArticle2;
//         totalPriceElement.innerText = totalPrice;
        
//         if (isButtonClicked === 0) {
//             varukorg.style.display = '';
//             paymentMethodsContainer.classList.remove('show');
//         }
        
//         console.log(isButtonClicked);
//     })

//     let removeArticle3 = document.querySelector('.article-trashbin3');

//     removeArticle3.addEventListener('click', () => {
//         articleInfo3.style.display = 'none';
//         isButtonClicked--;
//         articlesAdded.innerText = isButtonClicked;

//         let totalPrice = parseInt(totalPriceElement.innerText);
//         totalPrice = totalPrice - priceOfArticle3;
//         totalPriceElement.innerText = totalPrice;
        
//         if (isButtonClicked === 0) {
//             varukorg.style.display = '';
//             paymentMethodsContainer.classList.remove('show');
//         }
//         console.log(isButtonClicked);
//     })



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

    
let parkReceiptButtons = document.querySelectorAll('.park-receipt');
let parkReceiptPopup = document.querySelector('.parkreceipt-popup');
let noArticlesFound = document.querySelector('.no-articles-found-popup');

    parkReceiptButtons.forEach(parkReceiptButton => {
        parkReceiptButton.addEventListener('click', () => {
            
            if (varukorg.style.display !== 'flex') {
                cashifyContainer.classList.add('visible');
                noArticlesFound.classList.add('visible');
            } else {
                cashifyContainer.classList.add('visible');
                parkReceiptPopup.classList.add('visible');
            }
        })
    })


let noArticlesOkBtn = document.querySelector('.no-articles-ok');

    noArticlesOkBtn.addEventListener('click', () => {
        noArticlesFound.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
    })


let cancelParkReceiptBtn = document.querySelector('.avbryt-parkreceipt-button');
let parkReceiptInput = document.querySelector('.parkreceipt-popup input')

    cancelParkReceiptBtn.addEventListener('click', () => {
        parkReceiptPopup.classList.remove('visible');
        cashifyContainer.classList.remove('visible');
        parkReceiptInput.value = '';
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

let parkedReceiptComment1 = document.querySelector('p.p-comment1');
let parkedReceiptArticle1_1 = document.querySelector('p.p-articlename1-1');
let parkedReceiptArticle1_2 = document.querySelector('p.p-articlename1-2');
let parkedReceiptArticle1_3 = document.querySelector('p.p-articlename1-3');

    confirmParkBtn.addEventListener('click', () => {
        parkReceiptPopup.classList.remove('visible');
        cashifyContainer.classList.remove('visible');

        if (parkReceiptInput.value == '') {
            parkedReceiptComment1.innerText = 'Kvitto #'
            parkedReceiptArticle1_1.innerText = articleNewName.innerText;
        } else {
            parkedReceiptComment1.innerText = parkReceiptInput.value
            parkedReceiptArticle1_1.innerText = articleNewName.innerText;
        }


        parkReceiptInput.value = '';
        removeAllArticles();
    })
