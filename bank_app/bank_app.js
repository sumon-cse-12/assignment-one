class BankAccount {
  constructor(account_number, owner_name, balance) {
    this.accountNumber = account_number;
    this.ownerName = owner_name;
    this.balance = balance;

    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance} \n`);
  }

  getBalance() {
    return this.balance;
  }


  deposit(deposit_amount) {
    if (deposit_amount > 0) {
      this.balance += deposit_amount;
      console.log(`$${deposit_amount} deposited to ${this.accountNumber}.`);
    } else {
      console.log("Invalid amount. Please enter a positive amount.");
    }
  }

  withdraw(withdraw_amount) {
    if (this.balance < withdraw_amount) {
      console.log("Insufficient funds");
    } else {
        this.balance -= withdraw_amount;
      console.log(`Withdrawn Amount : $${withdraw_amount} \n`);
    }
  }

  displayAccountInfo() {
    console.log(`Account Number : ${this.accountNumber}`);
    console.log(`Owner Name : ${this.ownerName}`);
    console.log(`Balance : $${this.getBalance()} \n`);
  }
}

console.log("Account Information \n");
const bank_account_obj_one = new BankAccount("101", "Alex Smith", 100);
const bank_account_obj_two = new BankAccount("102", "Mark", 15000);

console.log('Deposit and Withdraw Information \n');

bank_account_obj_one.deposit(50);

bank_account_obj_one.withdraw(100);

bank_account_obj_two.deposit(500);

bank_account_obj_two.withdraw(2000);

console.log('Updated Information \n');

bank_account_obj_one.displayAccountInfo();

bank_account_obj_two.displayAccountInfo();
