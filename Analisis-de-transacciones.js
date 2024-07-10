// Exercise: Transaction analysis

const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50},
    { id: 2, description: 'Salary', amount: 2000},
    { id: 3, description: 'Utility Bill Payment', amount: -100},
    { id: 4, description: 'Online Purchase', amount: -30},
    { id: 5, description: 'Refund', amount: -50},

]

// 1. Calculate Total Balance
    const totalBalance = transactions.reduce((acc, transactions) => acc + transactions.amount, 0);
    console.log('Total Balance: ', totalBalance);

// 2. Largest Transaction (income or Expense)
    const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
        return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction

    }, transactions[0])
    console.log('Largest Transaction: ', largestTransaction);

// 3. Filter Purchase Transactions
    const purchaseTransaction = transactions.filter(transaction => transaction.amount < 0);
    console.log('Purchase Transactions', purchaseTransaction);

// 4. Find a Transaction by Description
    const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase');
    console.log('Specific Transation: ', specificTransaction);

// 5. Find the index of a Transaction by Amount
    const indexTransactionWithAmount = transactions.find(transaction => transaction.amount === -100);
    console.log('index of a Transaction by Amount (-100): ', indexTransactionWithAmount);

// 6. Update transaction Descriptions
    transactions.forEach(transactions => {
        if (transactions.amount < 0){
            transactions.description = `Expense: ${transactions.description}`;
        } else {
            transactions.description = `Income: ${transactions.description}`;
        }
    })

    console.log('Updated transaction descriptions: ', transactions);