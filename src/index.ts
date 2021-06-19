import * as Crypto from "crypto-js";

class Block {
public index: number;
    // static 함수 자바처럼 클래스를 선언하지 않고 바로 부를 수 있음.
    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
        ): string => Crypto.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
    
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "123432432", "", "Hello", 123456)

let blockchain: [Block] = [genesisBlock];

// console.log(blockchain);

// 블록체인 배열
const getBlockchain = () : Block[] => blockchain;

// console.log(getBlockchain());
// 블록체인 안에서 가장 최근 것
// const getLatestBlock = () : Block => getBlockchain[blockchain.length - 1];
const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
    const previosBlock: Block = getLatestBlock();
    const newIndex: number = previosBlock.index + 1;
    const newTimeStamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previosBlock.hash,
        newTimeStamp,
        data
    );
    const newBlock: Block = new Block(
        newIndex, 
        newHash,
        previosBlock.hash,
        data,
        newTimeStamp
    );

    addBlock(newBlock);

    return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye "));

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
};

const addBlock = (candidateBlock: Block) : void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock)
    }
};

createNewBlock("second block")
createNewBlock("third block")
createNewBlock("fourth block")

console.log(blockchain);
export {};
