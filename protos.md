# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [common_messages.proto](#common_messages.proto)
    - [TransactionContext](#contract.TransactionContext)
  
- [contract_messages.proto](#contract_messages.proto)
    - [InvokeTransactionRequest](#contract.InvokeTransactionRequest)
    - [InvokeTransactionRequest.TransientArgsEntry](#contract.InvokeTransactionRequest.TransientArgsEntry)
    - [InvokeTransactionResponse](#contract.InvokeTransactionResponse)
  
- [contract_services.proto](#contract_services.proto)
    - [ContractService](#contract.ContractService)
  
- [ledger_messages.proto](#ledger_messages.proto)
    - [Collection](#contract.Collection)
    - [CreateStateRequest](#contract.CreateStateRequest)
    - [CreateStateResponse](#contract.CreateStateResponse)
    - [EndorsementPolicy](#contract.EndorsementPolicy)
    - [EndorsementPrincipal](#contract.EndorsementPrincipal)
    - [EndorsementRule](#contract.EndorsementRule)
    - [ExistsStateRequest](#contract.ExistsStateRequest)
    - [ExistsStateResponse](#contract.ExistsStateResponse)
    - [GetEndorsementPolicyRequest](#contract.GetEndorsementPolicyRequest)
    - [GetEndorsementPolicyResponse](#contract.GetEndorsementPolicyResponse)
    - [GetHashRequest](#contract.GetHashRequest)
    - [GetHashResponse](#contract.GetHashResponse)
    - [GetStatesRequest](#contract.GetStatesRequest)
    - [GetStatesResponse](#contract.GetStatesResponse)
    - [KeyRangeQuery](#contract.KeyRangeQuery)
    - [ReadStateRequest](#contract.ReadStateRequest)
    - [ReadStateResponse](#contract.ReadStateResponse)
    - [RichQuery](#contract.RichQuery)
    - [SetEndorsementPolicyRequest](#contract.SetEndorsementPolicyRequest)
    - [SetEndorsementPolicyResponse](#contract.SetEndorsementPolicyResponse)
    - [State](#contract.State)
    - [UpdateStateRequest](#contract.UpdateStateRequest)
    - [UpdateStateResponse](#contract.UpdateStateResponse)
  
    - [EndorsementPrincipal.Role](#contract.EndorsementPrincipal.Role)
  
- [ledger_services.proto](#ledger_services.proto)
    - [LedgerService](#contract.LedgerService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="common_messages.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common_messages.proto
Common messages.


<a name="contract.TransactionContext"></a>

### TransactionContext
Provides the context necessary for interacting with the ledger.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel_id | [string](#string) |  | The channel which the transaction is on |
| transaction_id | [string](#string) |  | Identifier for the transaction. |





 

 

 

 



<a name="contract_messages.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## contract_messages.proto
Contract related messages.


<a name="contract.InvokeTransactionRequest"></a>

### InvokeTransactionRequest
Request message for an InvokeTransaction call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context the transaction will be invoked with. |
| transaction_name | [string](#string) |  | The name of the transaction to invoke. |
| args | [bytes](#bytes) | repeated | Input parameters for the transaction. |
| transient_args | [InvokeTransactionRequest.TransientArgsEntry](#contract.InvokeTransactionRequest.TransientArgsEntry) | repeated | Transient data for the transaction. |






<a name="contract.InvokeTransactionRequest.TransientArgsEntry"></a>

### InvokeTransactionRequest.TransientArgsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bytes](#bytes) |  |  |






<a name="contract.InvokeTransactionResponse"></a>

### InvokeTransactionResponse
Response message from an InvokeTransaction request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [bytes](#bytes) |  | Result data from the transaction. |





 

 

 

 



<a name="contract_services.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## contract_services.proto
Contract related services.

Services are not currently generated however they document what operations are exposed
via waPC in the Wasm tech preview.

 

 

 


<a name="contract.ContractService"></a>

### ContractService
Service for handling calls from peer to contract.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| InvokeTransaction | [InvokeTransactionRequest](#contract.InvokeTransactionRequest) | [InvokeTransactionResponse](#contract.InvokeTransactionResponse) | Used to invoke the transaction specified in InvokeTransactionRequest. Returns an InvokeTransactionResponse with the results. |

 



<a name="ledger_messages.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ledger_messages.proto
Ledger related messages.


<a name="contract.Collection"></a>

### Collection
A collection is a set of states, with each state holding a business object or data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Private collections are identified by name. The default, world state collection, has no name. |






<a name="contract.CreateStateRequest"></a>

### CreateStateRequest
Request message for a CreateState call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  | The collection the state should be created in. |
| state | [State](#contract.State) |  | The new state. |






<a name="contract.CreateStateResponse"></a>

### CreateStateResponse
Response message from a CreateState call.






<a name="contract.EndorsementPolicy"></a>

### EndorsementPolicy



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rule | [EndorsementRule](#contract.EndorsementRule) |  |  |






<a name="contract.EndorsementPrincipal"></a>

### EndorsementPrincipal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msp_id | [string](#string) |  |  |
| role | [EndorsementPrincipal.Role](#contract.EndorsementPrincipal.Role) |  |  |






<a name="contract.EndorsementRule"></a>

### EndorsementRule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_endorsements | [int32](#int32) |  |  |
| principals | [EndorsementPrincipal](#contract.EndorsementPrincipal) | repeated |  |
| rules | [EndorsementRule](#contract.EndorsementRule) | repeated |  |






<a name="contract.ExistsStateRequest"></a>

### ExistsStateRequest
Request message for an ExistsState call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  | The collection to check for the specified state key. |
| state_key | [string](#string) |  | Key of the state to check. |






<a name="contract.ExistsStateResponse"></a>

### ExistsStateResponse
Response message from a ExistsState call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exists | [bool](#bool) |  | True if the specified state exists, and false otherwise. |






<a name="contract.GetEndorsementPolicyRequest"></a>

### GetEndorsementPolicyRequest
Request message for a GetEndorsementPolicy call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  |  |
| state_key | [string](#string) |  |  |






<a name="contract.GetEndorsementPolicyResponse"></a>

### GetEndorsementPolicyResponse
Response message from a GetEndorsementPolicy call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| policy | [EndorsementPolicy](#contract.EndorsementPolicy) |  |  |






<a name="contract.GetHashRequest"></a>

### GetHashRequest
Request message for a GetHash call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  | The collection the state hash should be read from. |
| state_key | [string](#string) |  | Key of the state to hash. |






<a name="contract.GetHashResponse"></a>

### GetHashResponse
Response message from a GetHash call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | Hash of the requested state. |






<a name="contract.GetStatesRequest"></a>

### GetStatesRequest
Request message for a GetStates call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  | The collection the states should be queried in. |
| by_key_range | [KeyRangeQuery](#contract.KeyRangeQuery) |  |  |
| by_rich_query | [RichQuery](#contract.RichQuery) |  |  |






<a name="contract.GetStatesResponse"></a>

### GetStatesResponse
Response message from a GetStates call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| states | [State](#contract.State) | repeated | The requested states. |






<a name="contract.KeyRangeQuery"></a>

### KeyRangeQuery
Defines a key based query for a GetStatesRequest request.
Open ended range queries are supported if the start key and/or end key are not provided.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start_key | [string](#string) |  | Start key |
| end_key | [string](#string) |  | End key |
| page_size | [int32](#int32) |  | Page size |






<a name="contract.ReadStateRequest"></a>

### ReadStateRequest
Request message for a ReadState call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  | The collection the state should be read from. |
| state_key | [string](#string) |  | Key of the state to read. |






<a name="contract.ReadStateResponse"></a>

### ReadStateResponse
Response message from a ReadState call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [State](#contract.State) |  | The requested state. |






<a name="contract.RichQuery"></a>

### RichQuery
Defines a rich query for a GetStatesRequest request.






<a name="contract.SetEndorsementPolicyRequest"></a>

### SetEndorsementPolicyRequest
Request message for a SetEndorsementPolicy call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  |  |
| state_key | [string](#string) |  |  |
| policy | [EndorsementPolicy](#contract.EndorsementPolicy) |  |  |






<a name="contract.SetEndorsementPolicyResponse"></a>

### SetEndorsementPolicyResponse
Response message from a SetEndorsementPolicy call.






<a name="contract.State"></a>

### State
A state holds the value of a business object or data, addressed by a key.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  | Key |
| value | [bytes](#bytes) |  | Value |






<a name="contract.UpdateStateRequest"></a>

### UpdateStateRequest
Request message for an UpdateState call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [TransactionContext](#contract.TransactionContext) |  | Context of the current transaction. |
| collection | [Collection](#contract.Collection) |  | The collection the state should be updated in. |
| state | [State](#contract.State) |  | The updated state. |






<a name="contract.UpdateStateResponse"></a>

### UpdateStateResponse
Response message from an UpdateState call.





 


<a name="contract.EndorsementPrincipal.Role"></a>

### EndorsementPrincipal.Role


| Name | Number | Description |
| ---- | ------ | ----------- |
| MEMBER | 0 |  |
| ADMIN | 1 |  |
| CLIENT | 2 |  |
| PEER | 3 |  |


 

 

 



<a name="ledger_services.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ledger_services.proto
Ledger related services.

Services are not currently generated however they document what operations are exposed
via waPC in the Wasm tech preview.

 

 

 


<a name="contract.LedgerService"></a>

### LedgerService
Service for handling ledger calls from a smart contract.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateState | [CreateStateRequest](#contract.CreateStateRequest) | [CreateStateResponse](#contract.CreateStateResponse) | Create a new state in the ledger if it does not exist already. |
| ReadState | [ReadStateRequest](#contract.ReadStateRequest) | [ReadStateResponse](#contract.ReadStateResponse) | Read a state from the ledger. |
| UpdateState | [UpdateStateRequest](#contract.UpdateStateRequest) | [UpdateStateResponse](#contract.UpdateStateResponse) | Update an existing state in the ledger. |
| ExistsState | [ExistsStateRequest](#contract.ExistsStateRequest) | [ExistsStateResponse](#contract.ExistsStateResponse) | Check whether a state exists in the ledger. |
| GetStates | [GetStatesRequest](#contract.GetStatesRequest) | [GetStatesResponse](#contract.GetStatesResponse) stream | Read multiple states from the ledger. |
| GetHash | [GetHashRequest](#contract.GetHashRequest) | [GetHashResponse](#contract.GetHashResponse) | Get the hash of a state in the ledger. |
| GetEndorsementPolicy | [GetEndorsementPolicyRequest](#contract.GetEndorsementPolicyRequest) | [GetEndorsementPolicyResponse](#contract.GetEndorsementPolicyResponse) stream | Get the endorsement policy for a state in the ledger. |
| SetEndorsementPolicy | [SetEndorsementPolicyRequest](#contract.SetEndorsementPolicyRequest) | [SetEndorsementPolicyResponse](#contract.SetEndorsementPolicyResponse) stream | Set the endorsement policy for a state in the ledger. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

