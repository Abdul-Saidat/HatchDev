// ASSIGNMENT...
// overdraft
// transfer between banks
// airtime, data, utilities
// unique identity
// interest
// transaction history
// cashback
// spend and save

// check for when the account number doesn't exist

class Transaction {
    private type: string
    private amount: number
    private remainingBalance: number
    constructor(type: string, amount: number, remainingBalance: number) {
        this.type = type
        this.amount = amount
        this.remainingBalance = remainingBalance
    }
}

class BankAccount {
    private balance: number
    // private savingsBalance: number
    private accountNumber: number
    private accountHolder: string
    private history: Array<T>
    constructor(initialBalance: number, accountNumber: number, accountHolder: string) {
        this.balance = initialBalance
        // this.savingsBalance = savingsBalance
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.history = []
    }

    check_balance() {
        return this.balance
    }

    logTransaction(type: string, amount: number) {
        const tx = new Transaction(type, amount, this.balance)
        this.history.push(tx)
    }

    deposit(amount: number) {
        if (amount <= 0) return "Amount must be positive"
        this.balance += amount
        this.logTransaction('Deposit', amount)
        return this.balance
    }

    withdraw(amount: number) {
        this.balance -= amount
        this.logTransaction('Withdrawal', amount)
        return this.balance
    }

    spendAndSave(amount: number) {
        const amountToDeduct = 10 / 100 * amount + amount
        this.withdraw(amountToDeduct)
        this.savingsBalance = 10 / 100 * amount
        return this.balance
    }

    transfer(amount: number, toAccount: BankAccount) {
        if (this.balance < amount) {
            console.log("Insufficient funds")
            return
        }
        // this.spendAndSave(amount)
        this.withdraw(amount)  // take from sender
        toAccount.deposit(amount)   // give to receiver
        console.log(`Successfully transferred $${amount} to account number:  ${toAccount.accountNumber}`)
    }

    getTransactionHistory() {
        return [...this.history]
    }
}

const accountA = new BankAccount(200, 1230003030, 'Alli')
const accountB = new BankAccount(150, 3446708567, 'Bob')

console.log(accountA.deposit(800))
// console.log(accountA.spendAndSave(100))
console.log(accountA.transfer(100, accountB))
// console.log(accountB.getTransactionHistory())
console.log(accountA.check_balance())
console.log(accountB.check_balance())
