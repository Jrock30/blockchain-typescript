# TypeScript Make Block-Chain
## Softerware
 - yarn init
 - yarn global add typescript
 
 - - -
 ## tsconfig.json
 <pre>
 {
    "compilerOptions": {
        "module": "commonjs", // 모듈
        "target": "ES2015",   // ES6 컴파일
        "sourceMap": true     // true
    },
    "include": ["index.ts"],    // 컴파일 과정에서 포함할 파일의 배열
    "exclude": ["node_modules"] // node_modules 제외
}

 </pre>
 - - -
## RUN
- tsc -> ts 파일에 있는 코드를 컴파일 해서 .ts -> .js, .js.map 으로 만들어줌 (즉 typescript 를 javascript로 컴파일)
- yarn start (tsc, node index.js)
