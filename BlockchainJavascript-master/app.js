
let Block = require('./models/block')
let Transaction = require('./models/transaction')
let Blockchain = require('./models/blockchain')

// create genesis block

let genesisBlock = new Block()
let candidate1 = new Blockchain(genesisBlock)
let candidate2= new Blockchain(genesisBlock)
let candidate3 = new Blockchain(genesisBlock)
let candidate4 = new Blockchain(genesisBlock)
// create a transaction
 
function can1()
{

}

function can2()
{
    
}


function can3()
{
    
}


function can4()
{
    
}

function generateHash()
{
    let transaction = new Transaction(voteid,1)
}

let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block)

console.log(blockchain)

