# Release process

Releasing new versions of fabric-ledger-protos for Golang, Node.js and Rust is currently a manual process, although the artifacts required are generated automatically and published for each build.

## Publish fabric-ledger-protos-go

Download the `GoLib` artifact from the [build](https://dev.azure.com/hyperledgendary/Wasm/_build/latest?definitionId=5&branchName=master)

Use the contents to update the [fabric-ledger-protos-go](https://github.com/hyperledgendary/fabric-ledger-protos-go) repository with the latest generated code

Create a new [fabric-ledger-protos-go release](https://github.com/hyperledgendary/fabric-ledger-protos-go/releases) 

## Publish fabric-ledger-protos-node

Download the `NodeLib` artifact from the [build](https://dev.azure.com/hyperledgendary/Wasm/_build/latest?definitionId=5&branchName=master)

Use the contents to publish a new version of the [fabric-ledger-protos node module](https://www.npmjs.com/package/@hyperledgendary/fabric-ledger-protos) by following the instructions for [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages), e.g.

```
npm publish --access public
```

## Publish fabric-ledger-protos-rust

Download the `RustLib` artifact from the [build](https://dev.azure.com/hyperledgendary/Wasm/_build/latest?definitionId=5&branchName=master)

Use the contents to publish a new version of the [fabric_ledger_protos crate](https://crates.io/crates/fabric_ledger_protos) by following the instructions for [Publishing on crates.io](https://doc.rust-lang.org/cargo/reference/publishing.html), e.g.

```
cargo publish
```

## Update version

Prepare for the next release by updating the version, e.g. [Bump version to 0.8.0](https://github.com/hyperledgendary/fabric-ledger-protos/pull/36)
