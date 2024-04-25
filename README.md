# duckDB-wasm-web demo

A demo built with vite + react that calls a locally compiled duckdb-wasm.

## quick start

Build from source

```
git clone https://github.com/duckdb/duckdb-wasm.git
cd duckdb-wasm
git submodule init
git submodule update
make
```

Move your compiled duckdb-wasm file to the project root directory

```
.
├── README.md
├── duckdb-wasm [+]
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Run the project

```
npm i
npm run dev
```
