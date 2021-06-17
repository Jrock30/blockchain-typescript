import * as Crypto from "crypto-js";

class Block {
public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // static 함수 자바처럼 클래스를 선언하지 않고 바로 부를 수 있음.
    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
        ): string => Crypto.SHA256(index + previousHash + timestamp + data).toString();

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

console.log(blockchain);

// 블록체인 배열
const getBlockchain = () : Block[] => blockchain;

console.log(getBlockchain());
// 블록체인 안에서 가장 최근 것
const getLatestBlock = () : Block => getBlockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);


export {};
