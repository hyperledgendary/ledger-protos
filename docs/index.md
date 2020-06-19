---
layout: home
---

Prototype gRPC contract and ledger APIs, loosely based on the Hyperledger Fabric [Ledger API RFC](https://github.com/hyperledger/fabric-rfcs/pull/16).

The messages are currently being used to serialise data between waPC host and guest in the [Wasm Smart Contract RFC](https://github.com/hyperledger/fabric-rfcs/pull/28) prototype.

## Download

Pregenerated libraries are available for Go, Node.js, and Rust

### Go

```
get -u github.com/hyperledgendary/fabric-ledger-protos-go
```

### Node.js

```
npm install @hyperledgendary/fabric-ledger-protos
```

### Rust

Cargo.toml: `fabric_ledger_protos = "0.4.0"`

## Documentation

- [Go](https://pkg.go.dev/github.com/hyperledgendary/fabric-ledger-protos-go?tab=doc)
- [Rust](https://docs.rs/fabric_ledger_protos/0.4.0/fabric_ledger_protos/)
