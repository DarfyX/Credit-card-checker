// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Luhn Algorithm to validate card numbers
const validateCred = card => {
    let sumOfDigits = 0;
    for (let i = card.length - 1; i >= 0; i--) { // loops through the card digits from right to left
        let currDigit = card[i]
        if ((card.length - 1 - i) % 2 === 1) { // condition for odd indices
            currDigit *= 2;
            if (currDigit > 9) {
                currDigit -= 9;
            }
        }
        sumOfDigits += currDigit;
    }
    return sumOfDigits % 10 === 0;
}
// test functions
// console.log(validateCred(valid1));
// console.log(validateCred(invalid1));

const findInvalidCards = cardsArr => {
    const invalidCards = [];

    for (let i = 0; i < cardsArr.length; i++) {
        let currCard = cardsArr[i];
        if (!validateCred(currCard)) { 
            invalidCards.push(currCard);
        }
    }
    return invalidCards;
}
// test functions
// console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));
// console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]));
// console.log(findInvalidCards(batch));

const invalidCardsCompanies = invalidCardsArr => {
    const companies = [];
    const companiesData = [
        {name: "Amex", id: 3},
        {name: "Visa", id: 4},
        {name: "MasterCard", id: 5},
        {name: "Discover", id: 6}
    ];   

    for (let i = 0; i < invalidCardsArr.length; i++) {
        let currCard = invalidCardsArr[i];
        switch (currCard[0]) {
          case companiesData[0].id:
            if (!companies.includes(companiesData[0].name)) {
                companies.push(companiesData[0].name)
            }
            break;
          case companiesData[1].id:
              if (!companies.includes(companiesData[1].name)) {
                  companies.push(companiesData[1].name)
              }
              break;
          case companiesData[2].id:
            if (!companies.includes(companiesData[2].name)) {
                companies.push(companiesData[2].name)
            }
            break;
          case companiesData[3].id:
            if (!companies.includes(companiesData[3].name)) {
                companies.push(companiesData[3].name)
            }
            break;
          default:
              console.log("Company not found");
        }
    return companies;
    }
}

// test functions
console.log(invalidCardsCompanies([invalid1])); // Should print['visa']
console.log(invalidCardsCompanies([invalid2])); // Should print ['mastercard']
console.log(invalidCardsCompanies(batch)); // Find out which companies have mailed out invalid cards