/*
 * SPDX-License-Identifier: Apache-2.0
 */

fn main() {
    prost_build::compile_protos(&["../protos/ledger_messages.proto","../protos/contract_messages.proto"],
                                &["../protos"]).unwrap();
}