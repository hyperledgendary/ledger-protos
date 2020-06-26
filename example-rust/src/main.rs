/*
 * SPDX-License-Identifier: Apache-2.0
 */

use std::env;
use std::io::{self, Read, Write};
use std::fs::File;
use std::path::PathBuf;
use protobuf::{self, Message};
use fabric_ledger_protos::common_messages::{TransactionContext};
use fabric_ledger_protos::ledger_messages::{CreateStateRequest,ReadStateRequest,State};

fn example_create_state_request(bytes: Option<Vec<u8>>) -> Vec<u8> {
    match bytes {
        Some(b) => {
            let req: CreateStateRequest = protobuf::parse_from_bytes(&b).unwrap();

            let context = req.get_context();
            let transaction_id = context.get_transaction_id();

            let state = req.get_state();
            let key = state.get_key();
            let value = state.get_value();

            // std::fmt::Display is not implemented so hack together some output
            let summary = format!("context/transaction_id: {}\nstate/key: {}\nstate/value (length): {}\n", transaction_id, key, value.len());
            summary.as_bytes().to_vec()
        },
        None => {
            let data: Vec<u8> = b"Example data".to_vec();

            let mut state = State::new();
            state.set_key("Example key".to_string());
            state.set_value(data);
        
            let mut context = TransactionContext::new();
            context.set_transaction_id("Example txn ID".to_string());
        
            let mut req = CreateStateRequest::new();
            req.set_context(context);
            req.set_state(state);
        
            req.write_to_bytes().unwrap()
        }
    }
}

fn example_read_state_request(bytes: Option<Vec<u8>>) -> Vec<u8> {
    match bytes {
        Some(b) => {
            let req: ReadStateRequest = protobuf::parse_from_bytes(&b).unwrap();

            let context = req.get_context();
            let transaction_id = context.get_transaction_id();

            let key = req.get_state_key();

            // std::fmt::Display is not implemented so hack together some output
            let summary = format!("context/transaction_id: {}\nstate/key: {}\n", transaction_id, key);
            summary.as_bytes().to_vec()
        },
        None => {    
            let _data: Vec<u8> = b"Example data".to_vec();

            let mut context = TransactionContext::new();
            context.set_transaction_id("Example txn ID".to_string());

            let mut req = ReadStateRequest::new();
            req.set_context(context);
            req.set_state_key("Example key".to_string());

            req.write_to_bytes().unwrap()
        }
    }
}

fn read_file(filename: Option<String>) -> Option<Vec<u8>> {
    match filename {
        Some(f) => {
            let path = PathBuf::from(f.as_str());
            let mut buffer = Vec::new();
            let mut file = File::open(path).unwrap();
            file.read_to_end(&mut buffer).expect("Error reading file");

            Some(buffer)
        },
        None => None,
    }
}

fn main() -> std::io::Result<()> {
    let msg = env::args().nth(1).expect("specify message, e.g. CreateStateRequest");
    let filename = env::args().nth(2);

    let contents = read_file(filename);

    let buffer = match msg.as_str() {
        "CreateStateRequest" => example_create_state_request(contents),
        "ReadStateRequest" => example_read_state_request(contents),
        _ => panic!("unknown message specified"),
    };

    io::stdout().write_all(&buffer)?;

    Ok(())
}
