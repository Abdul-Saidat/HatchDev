// ASSIGNMENT...
// overdraft
// transfer between banks
// airtime, data, utilities
// unique identity
// interest
// transaction history
// cashback
// spend and save

class Bank {
    private balance: number = 100
    
    // protected balance: number = 100

   credit(val: number) {
    this.balance += val
   }

   transfer(acct: number) {

   }

   spend_and_save(amount: number) {

   }

   get_balance() {
    console.log(`${bank.balance} USD`)
   }

    // getter
    // get_balance() {
    //     console.log(this.balance)
    // }
}



let bank = new Bank()
bank.credit(10)
bank.get_balance()

// bank.get_balance()
// console.log(bank.balance);
