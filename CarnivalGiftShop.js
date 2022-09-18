const input = require('sync-input');
let tickets = 0;
const listOfGifts = [
    {Name: 'Teddy Bear', Value: 10, ID: 1},
    {Name: 'Big Red Ball', Value: 5, ID: 2},
    {Name: 'Huge Bear', Value: 50, ID: 3},
    {Name: 'Candy', Value: 8, ID: 4},
    {Name: 'Stuffed Tiger', Value: 15, ID: 5},
    {Name: 'Stuffed Dragon', Value: 30, ID: 6},
    {Name: 'Skateboard', Value: 100, ID: 7},
    {Name: 'Toy Car', Value: 25, ID: 8},
    {Name: 'Basketball', Value: 20, ID: 9},
    {Name: 'Scary Mask', Value: 75, ID: 10},
];

function greetMessage() {
    console.log('WELCOME TO THE CARNIVAL GIFT SHOP!');
    console.log('Hello friend! Thank you for visiting the carnival!');
}

function showGifts() {
    console.log('Here\'s the list of gifts:\n');
    listOfGifts.forEach(el => console.log(`${el.ID}- ${el.Name}, Cost: ${el.Value} tickets`));
}

function buyGift() {
    let giftID = parseInt(input("Enter the number of the gift you want to get: "));
    if(!listOfGifts.length) {
        console.log(`Wow! There are no gifts to buy.`);
        main();
    }
    if(isNaN(giftID)) {
        console.log(`Please enter a valid number!`)
    }
    let found = listOfGifts.find(el => el.ID === giftID);
    if(!found) {
        console.log(`There is no gift with that number!`);
        main();
    }
    if(tickets<found.value) {
        console.log(`You don't have enough tickets to buy this gift.`);
        main();
    }
    let indexOfFound = listOfGifts.findIndex(el => el.ID === giftID);
    listOfGifts.splice(indexOfFound, 1);
    console.log(`Here you go, one ${found.Name}!`);
    tickets = tickets - found.Value;
    checkTickets();
}

function checkTickets() {
    console.log(`Total tickets: ${tickets}`);
}

function addTickets() {
    let amount = parseInt(input("Enter the ticket amount: "));
    if(amount<0 || amount>1000) {
        console.log(`Please enter a valid number between 0 and 1000.`);
        main();
    }

    tickets += amount;
    checkTickets();
}

function main() {
    while (true) {
        console.log("\nWhat do you want to do?");
        console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
        let choice = Number(input(""));
        switch (choice) {
            case 1: {
                buyGift();
                break;
            }
            case 2: {
                addTickets();
                break;
            }
            case 3: {
                checkTickets();
                break;
            }
            case 4: {
                showGifts();
                break;
            }
            case 5: {
                console.log("Have a nice day!");
                process.exit(0);
                break;
            }
            default: {
                console.log(`Please enter a valid number!`);
                main();
                break;
            }

        }
    }
}

greetMessage();
showGifts();
main();