import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace contract. */
export namespace contract {

    /** Properties of a GetMetadataRequest. */
    interface IGetMetadataRequest {
    }

    /** Represents a GetMetadataRequest. */
    class GetMetadataRequest implements IGetMetadataRequest {

        /**
         * Constructs a new GetMetadataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IGetMetadataRequest);

        /**
         * Creates a new GetMetadataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMetadataRequest instance
         */
        public static create(properties?: contract.IGetMetadataRequest): contract.GetMetadataRequest;

        /**
         * Encodes the specified GetMetadataRequest message. Does not implicitly {@link contract.GetMetadataRequest.verify|verify} messages.
         * @param message GetMetadataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IGetMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMetadataRequest message, length delimited. Does not implicitly {@link contract.GetMetadataRequest.verify|verify} messages.
         * @param message GetMetadataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IGetMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMetadataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMetadataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.GetMetadataRequest;

        /**
         * Decodes a GetMetadataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMetadataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.GetMetadataRequest;

        /**
         * Verifies a GetMetadataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMetadataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMetadataRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.GetMetadataRequest;

        /**
         * Creates a plain object from a GetMetadataRequest message. Also converts values to other types if specified.
         * @param message GetMetadataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.GetMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMetadataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMetadataResponse. */
    interface IGetMetadataResponse {

        /** GetMetadataResponse payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a GetMetadataResponse. */
    class GetMetadataResponse implements IGetMetadataResponse {

        /**
         * Constructs a new GetMetadataResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IGetMetadataResponse);

        /** GetMetadataResponse payload. */
        public payload: Uint8Array;

        /**
         * Creates a new GetMetadataResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMetadataResponse instance
         */
        public static create(properties?: contract.IGetMetadataResponse): contract.GetMetadataResponse;

        /**
         * Encodes the specified GetMetadataResponse message. Does not implicitly {@link contract.GetMetadataResponse.verify|verify} messages.
         * @param message GetMetadataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IGetMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMetadataResponse message, length delimited. Does not implicitly {@link contract.GetMetadataResponse.verify|verify} messages.
         * @param message GetMetadataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IGetMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMetadataResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMetadataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.GetMetadataResponse;

        /**
         * Decodes a GetMetadataResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMetadataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.GetMetadataResponse;

        /**
         * Verifies a GetMetadataResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMetadataResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMetadataResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.GetMetadataResponse;

        /**
         * Creates a plain object from a GetMetadataResponse message. Also converts values to other types if specified.
         * @param message GetMetadataResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.GetMetadataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMetadataResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InvokeTransactionRequest. */
    interface IInvokeTransactionRequest {

        /** InvokeTransactionRequest channelId */
        channelId?: (string|null);

        /** InvokeTransactionRequest transactionId */
        transactionId?: (string|null);

        /** InvokeTransactionRequest transactionName */
        transactionName?: (string|null);

        /** InvokeTransactionRequest payload */
        payload?: (Uint8Array|null);
    }

    /** Represents an InvokeTransactionRequest. */
    class InvokeTransactionRequest implements IInvokeTransactionRequest {

        /**
         * Constructs a new InvokeTransactionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IInvokeTransactionRequest);

        /** InvokeTransactionRequest channelId. */
        public channelId: string;

        /** InvokeTransactionRequest transactionId. */
        public transactionId: string;

        /** InvokeTransactionRequest transactionName. */
        public transactionName: string;

        /** InvokeTransactionRequest payload. */
        public payload: Uint8Array;

        /**
         * Creates a new InvokeTransactionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InvokeTransactionRequest instance
         */
        public static create(properties?: contract.IInvokeTransactionRequest): contract.InvokeTransactionRequest;

        /**
         * Encodes the specified InvokeTransactionRequest message. Does not implicitly {@link contract.InvokeTransactionRequest.verify|verify} messages.
         * @param message InvokeTransactionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IInvokeTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InvokeTransactionRequest message, length delimited. Does not implicitly {@link contract.InvokeTransactionRequest.verify|verify} messages.
         * @param message InvokeTransactionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IInvokeTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InvokeTransactionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InvokeTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.InvokeTransactionRequest;

        /**
         * Decodes an InvokeTransactionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InvokeTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.InvokeTransactionRequest;

        /**
         * Verifies an InvokeTransactionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InvokeTransactionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InvokeTransactionRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.InvokeTransactionRequest;

        /**
         * Creates a plain object from an InvokeTransactionRequest message. Also converts values to other types if specified.
         * @param message InvokeTransactionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.InvokeTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InvokeTransactionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InvokeTransactionResponse. */
    interface IInvokeTransactionResponse {

        /** InvokeTransactionResponse payload */
        payload?: (Uint8Array|null);
    }

    /** Represents an InvokeTransactionResponse. */
    class InvokeTransactionResponse implements IInvokeTransactionResponse {

        /**
         * Constructs a new InvokeTransactionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IInvokeTransactionResponse);

        /** InvokeTransactionResponse payload. */
        public payload: Uint8Array;

        /**
         * Creates a new InvokeTransactionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InvokeTransactionResponse instance
         */
        public static create(properties?: contract.IInvokeTransactionResponse): contract.InvokeTransactionResponse;

        /**
         * Encodes the specified InvokeTransactionResponse message. Does not implicitly {@link contract.InvokeTransactionResponse.verify|verify} messages.
         * @param message InvokeTransactionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IInvokeTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InvokeTransactionResponse message, length delimited. Does not implicitly {@link contract.InvokeTransactionResponse.verify|verify} messages.
         * @param message InvokeTransactionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IInvokeTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InvokeTransactionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InvokeTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.InvokeTransactionResponse;

        /**
         * Decodes an InvokeTransactionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InvokeTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.InvokeTransactionResponse;

        /**
         * Verifies an InvokeTransactionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InvokeTransactionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InvokeTransactionResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.InvokeTransactionResponse;

        /**
         * Creates a plain object from an InvokeTransactionResponse message. Also converts values to other types if specified.
         * @param message InvokeTransactionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.InvokeTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InvokeTransactionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterPeerRequest. */
    interface IRegisterPeerRequest {

        /** RegisterPeerRequest peerAddress */
        peerAddress?: (string|null);

        /** RegisterPeerRequest peerPort */
        peerPort?: (string|null);
    }

    /** Represents a RegisterPeerRequest. */
    class RegisterPeerRequest implements IRegisterPeerRequest {

        /**
         * Constructs a new RegisterPeerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IRegisterPeerRequest);

        /** RegisterPeerRequest peerAddress. */
        public peerAddress: string;

        /** RegisterPeerRequest peerPort. */
        public peerPort: string;

        /**
         * Creates a new RegisterPeerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPeerRequest instance
         */
        public static create(properties?: contract.IRegisterPeerRequest): contract.RegisterPeerRequest;

        /**
         * Encodes the specified RegisterPeerRequest message. Does not implicitly {@link contract.RegisterPeerRequest.verify|verify} messages.
         * @param message RegisterPeerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IRegisterPeerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPeerRequest message, length delimited. Does not implicitly {@link contract.RegisterPeerRequest.verify|verify} messages.
         * @param message RegisterPeerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IRegisterPeerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPeerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPeerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.RegisterPeerRequest;

        /**
         * Decodes a RegisterPeerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPeerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.RegisterPeerRequest;

        /**
         * Verifies a RegisterPeerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPeerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPeerRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.RegisterPeerRequest;

        /**
         * Creates a plain object from a RegisterPeerRequest message. Also converts values to other types if specified.
         * @param message RegisterPeerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.RegisterPeerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPeerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterPeerResponse. */
    interface IRegisterPeerResponse {
    }

    /** Represents a RegisterPeerResponse. */
    class RegisterPeerResponse implements IRegisterPeerResponse {

        /**
         * Constructs a new RegisterPeerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IRegisterPeerResponse);

        /**
         * Creates a new RegisterPeerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPeerResponse instance
         */
        public static create(properties?: contract.IRegisterPeerResponse): contract.RegisterPeerResponse;

        /**
         * Encodes the specified RegisterPeerResponse message. Does not implicitly {@link contract.RegisterPeerResponse.verify|verify} messages.
         * @param message RegisterPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IRegisterPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPeerResponse message, length delimited. Does not implicitly {@link contract.RegisterPeerResponse.verify|verify} messages.
         * @param message RegisterPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IRegisterPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPeerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.RegisterPeerResponse;

        /**
         * Decodes a RegisterPeerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.RegisterPeerResponse;

        /**
         * Verifies a RegisterPeerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPeerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPeerResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.RegisterPeerResponse;

        /**
         * Creates a plain object from a RegisterPeerResponse message. Also converts values to other types if specified.
         * @param message RegisterPeerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.RegisterPeerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPeerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a State. */
    interface IState {

        /** State key */
        key?: (string|null);

        /** State value */
        value?: (Uint8Array|null);
    }

    /** Represents a State. */
    class State implements IState {

        /**
         * Constructs a new State.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IState);

        /** State key. */
        public key: string;

        /** State value. */
        public value: Uint8Array;

        /**
         * Creates a new State instance using the specified properties.
         * @param [properties] Properties to set
         * @returns State instance
         */
        public static create(properties?: contract.IState): contract.State;

        /**
         * Encodes the specified State message. Does not implicitly {@link contract.State.verify|verify} messages.
         * @param message State message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified State message, length delimited. Does not implicitly {@link contract.State.verify|verify} messages.
         * @param message State message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a State message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.State;

        /**
         * Decodes a State message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.State;

        /**
         * Verifies a State message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a State message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns State
         */
        public static fromObject(object: { [k: string]: any }): contract.State;

        /**
         * Creates a plain object from a State message. Also converts values to other types if specified.
         * @param message State
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this State to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateHistory. */
    interface IStateHistory {

        /** StateHistory key */
        key?: (string|null);

        /** StateHistory value */
        value?: (Uint8Array|null);

        /** StateHistory transactionId */
        transactionId?: (string|null);

        /** StateHistory timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** StateHistory isDelete */
        isDelete?: (boolean|null);
    }

    /** Represents a StateHistory. */
    class StateHistory implements IStateHistory {

        /**
         * Constructs a new StateHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IStateHistory);

        /** StateHistory key. */
        public key: string;

        /** StateHistory value. */
        public value: Uint8Array;

        /** StateHistory transactionId. */
        public transactionId: string;

        /** StateHistory timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** StateHistory isDelete. */
        public isDelete: boolean;

        /**
         * Creates a new StateHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateHistory instance
         */
        public static create(properties?: contract.IStateHistory): contract.StateHistory;

        /**
         * Encodes the specified StateHistory message. Does not implicitly {@link contract.StateHistory.verify|verify} messages.
         * @param message StateHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IStateHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateHistory message, length delimited. Does not implicitly {@link contract.StateHistory.verify|verify} messages.
         * @param message StateHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IStateHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.StateHistory;

        /**
         * Decodes a StateHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.StateHistory;

        /**
         * Verifies a StateHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateHistory
         */
        public static fromObject(object: { [k: string]: any }): contract.StateHistory;

        /**
         * Creates a plain object from a StateHistory message. Also converts values to other types if specified.
         * @param message StateHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.StateHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeyRangeQuery. */
    interface IKeyRangeQuery {

        /** KeyRangeQuery startKey */
        startKey?: (string|null);

        /** KeyRangeQuery endKey */
        endKey?: (string|null);
    }

    /** Represents a KeyRangeQuery. */
    class KeyRangeQuery implements IKeyRangeQuery {

        /**
         * Constructs a new KeyRangeQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IKeyRangeQuery);

        /** KeyRangeQuery startKey. */
        public startKey: string;

        /** KeyRangeQuery endKey. */
        public endKey: string;

        /**
         * Creates a new KeyRangeQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyRangeQuery instance
         */
        public static create(properties?: contract.IKeyRangeQuery): contract.KeyRangeQuery;

        /**
         * Encodes the specified KeyRangeQuery message. Does not implicitly {@link contract.KeyRangeQuery.verify|verify} messages.
         * @param message KeyRangeQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IKeyRangeQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyRangeQuery message, length delimited. Does not implicitly {@link contract.KeyRangeQuery.verify|verify} messages.
         * @param message KeyRangeQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IKeyRangeQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyRangeQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyRangeQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.KeyRangeQuery;

        /**
         * Decodes a KeyRangeQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyRangeQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.KeyRangeQuery;

        /**
         * Verifies a KeyRangeQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyRangeQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyRangeQuery
         */
        public static fromObject(object: { [k: string]: any }): contract.KeyRangeQuery;

        /**
         * Creates a plain object from a KeyRangeQuery message. Also converts values to other types if specified.
         * @param message KeyRangeQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.KeyRangeQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyRangeQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PartialKeyQuery. */
    interface IPartialKeyQuery {
    }

    /** Represents a PartialKeyQuery. */
    class PartialKeyQuery implements IPartialKeyQuery {

        /**
         * Constructs a new PartialKeyQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IPartialKeyQuery);

        /**
         * Creates a new PartialKeyQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialKeyQuery instance
         */
        public static create(properties?: contract.IPartialKeyQuery): contract.PartialKeyQuery;

        /**
         * Encodes the specified PartialKeyQuery message. Does not implicitly {@link contract.PartialKeyQuery.verify|verify} messages.
         * @param message PartialKeyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IPartialKeyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialKeyQuery message, length delimited. Does not implicitly {@link contract.PartialKeyQuery.verify|verify} messages.
         * @param message PartialKeyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IPartialKeyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialKeyQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartialKeyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.PartialKeyQuery;

        /**
         * Decodes a PartialKeyQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartialKeyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.PartialKeyQuery;

        /**
         * Verifies a PartialKeyQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartialKeyQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartialKeyQuery
         */
        public static fromObject(object: { [k: string]: any }): contract.PartialKeyQuery;

        /**
         * Creates a plain object from a PartialKeyQuery message. Also converts values to other types if specified.
         * @param message PartialKeyQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.PartialKeyQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartialKeyQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FromKeyQuery. */
    interface IFromKeyQuery {
    }

    /** Represents a FromKeyQuery. */
    class FromKeyQuery implements IFromKeyQuery {

        /**
         * Constructs a new FromKeyQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IFromKeyQuery);

        /**
         * Creates a new FromKeyQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FromKeyQuery instance
         */
        public static create(properties?: contract.IFromKeyQuery): contract.FromKeyQuery;

        /**
         * Encodes the specified FromKeyQuery message. Does not implicitly {@link contract.FromKeyQuery.verify|verify} messages.
         * @param message FromKeyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IFromKeyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FromKeyQuery message, length delimited. Does not implicitly {@link contract.FromKeyQuery.verify|verify} messages.
         * @param message FromKeyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IFromKeyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FromKeyQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FromKeyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.FromKeyQuery;

        /**
         * Decodes a FromKeyQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FromKeyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.FromKeyQuery;

        /**
         * Verifies a FromKeyQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FromKeyQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FromKeyQuery
         */
        public static fromObject(object: { [k: string]: any }): contract.FromKeyQuery;

        /**
         * Creates a plain object from a FromKeyQuery message. Also converts values to other types if specified.
         * @param message FromKeyQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.FromKeyQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FromKeyQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ToKeyQuery. */
    interface IToKeyQuery {
    }

    /** Represents a ToKeyQuery. */
    class ToKeyQuery implements IToKeyQuery {

        /**
         * Constructs a new ToKeyQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IToKeyQuery);

        /**
         * Creates a new ToKeyQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToKeyQuery instance
         */
        public static create(properties?: contract.IToKeyQuery): contract.ToKeyQuery;

        /**
         * Encodes the specified ToKeyQuery message. Does not implicitly {@link contract.ToKeyQuery.verify|verify} messages.
         * @param message ToKeyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IToKeyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToKeyQuery message, length delimited. Does not implicitly {@link contract.ToKeyQuery.verify|verify} messages.
         * @param message ToKeyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IToKeyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToKeyQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToKeyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.ToKeyQuery;

        /**
         * Decodes a ToKeyQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToKeyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.ToKeyQuery;

        /**
         * Verifies a ToKeyQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToKeyQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToKeyQuery
         */
        public static fromObject(object: { [k: string]: any }): contract.ToKeyQuery;

        /**
         * Creates a plain object from a ToKeyQuery message. Also converts values to other types if specified.
         * @param message ToKeyQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.ToKeyQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToKeyQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateStateRequest. */
    interface ICreateStateRequest {

        /** CreateStateRequest transactionId */
        transactionId?: (string|null);

        /** CreateStateRequest state */
        state?: (contract.IState|null);
    }

    /** Represents a CreateStateRequest. */
    class CreateStateRequest implements ICreateStateRequest {

        /**
         * Constructs a new CreateStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.ICreateStateRequest);

        /** CreateStateRequest transactionId. */
        public transactionId: string;

        /** CreateStateRequest state. */
        public state?: (contract.IState|null);

        /**
         * Creates a new CreateStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateStateRequest instance
         */
        public static create(properties?: contract.ICreateStateRequest): contract.CreateStateRequest;

        /**
         * Encodes the specified CreateStateRequest message. Does not implicitly {@link contract.CreateStateRequest.verify|verify} messages.
         * @param message CreateStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.ICreateStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateStateRequest message, length delimited. Does not implicitly {@link contract.CreateStateRequest.verify|verify} messages.
         * @param message CreateStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.ICreateStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.CreateStateRequest;

        /**
         * Decodes a CreateStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.CreateStateRequest;

        /**
         * Verifies a CreateStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateStateRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.CreateStateRequest;

        /**
         * Creates a plain object from a CreateStateRequest message. Also converts values to other types if specified.
         * @param message CreateStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.CreateStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateStateResponse. */
    interface ICreateStateResponse {
    }

    /** Represents a CreateStateResponse. */
    class CreateStateResponse implements ICreateStateResponse {

        /**
         * Constructs a new CreateStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.ICreateStateResponse);

        /**
         * Creates a new CreateStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateStateResponse instance
         */
        public static create(properties?: contract.ICreateStateResponse): contract.CreateStateResponse;

        /**
         * Encodes the specified CreateStateResponse message. Does not implicitly {@link contract.CreateStateResponse.verify|verify} messages.
         * @param message CreateStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.ICreateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateStateResponse message, length delimited. Does not implicitly {@link contract.CreateStateResponse.verify|verify} messages.
         * @param message CreateStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.ICreateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.CreateStateResponse;

        /**
         * Decodes a CreateStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.CreateStateResponse;

        /**
         * Verifies a CreateStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateStateResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.CreateStateResponse;

        /**
         * Creates a plain object from a CreateStateResponse message. Also converts values to other types if specified.
         * @param message CreateStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.CreateStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadStateRequest. */
    interface IReadStateRequest {

        /** ReadStateRequest transactionId */
        transactionId?: (string|null);

        /** ReadStateRequest stateKey */
        stateKey?: (string|null);
    }

    /** Represents a ReadStateRequest. */
    class ReadStateRequest implements IReadStateRequest {

        /**
         * Constructs a new ReadStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IReadStateRequest);

        /** ReadStateRequest transactionId. */
        public transactionId: string;

        /** ReadStateRequest stateKey. */
        public stateKey: string;

        /**
         * Creates a new ReadStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadStateRequest instance
         */
        public static create(properties?: contract.IReadStateRequest): contract.ReadStateRequest;

        /**
         * Encodes the specified ReadStateRequest message. Does not implicitly {@link contract.ReadStateRequest.verify|verify} messages.
         * @param message ReadStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IReadStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadStateRequest message, length delimited. Does not implicitly {@link contract.ReadStateRequest.verify|verify} messages.
         * @param message ReadStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IReadStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.ReadStateRequest;

        /**
         * Decodes a ReadStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.ReadStateRequest;

        /**
         * Verifies a ReadStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadStateRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.ReadStateRequest;

        /**
         * Creates a plain object from a ReadStateRequest message. Also converts values to other types if specified.
         * @param message ReadStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.ReadStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadStateResponse. */
    interface IReadStateResponse {

        /** ReadStateResponse state */
        state?: (contract.IState|null);
    }

    /** Represents a ReadStateResponse. */
    class ReadStateResponse implements IReadStateResponse {

        /**
         * Constructs a new ReadStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IReadStateResponse);

        /** ReadStateResponse state. */
        public state?: (contract.IState|null);

        /**
         * Creates a new ReadStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadStateResponse instance
         */
        public static create(properties?: contract.IReadStateResponse): contract.ReadStateResponse;

        /**
         * Encodes the specified ReadStateResponse message. Does not implicitly {@link contract.ReadStateResponse.verify|verify} messages.
         * @param message ReadStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IReadStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadStateResponse message, length delimited. Does not implicitly {@link contract.ReadStateResponse.verify|verify} messages.
         * @param message ReadStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IReadStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.ReadStateResponse;

        /**
         * Decodes a ReadStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.ReadStateResponse;

        /**
         * Verifies a ReadStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadStateResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.ReadStateResponse;

        /**
         * Creates a plain object from a ReadStateResponse message. Also converts values to other types if specified.
         * @param message ReadStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.ReadStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateStateRequest. */
    interface IUpdateStateRequest {

        /** UpdateStateRequest transactionId */
        transactionId?: (string|null);

        /** UpdateStateRequest state */
        state?: (contract.IState|null);
    }

    /** Represents an UpdateStateRequest. */
    class UpdateStateRequest implements IUpdateStateRequest {

        /**
         * Constructs a new UpdateStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IUpdateStateRequest);

        /** UpdateStateRequest transactionId. */
        public transactionId: string;

        /** UpdateStateRequest state. */
        public state?: (contract.IState|null);

        /**
         * Creates a new UpdateStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateStateRequest instance
         */
        public static create(properties?: contract.IUpdateStateRequest): contract.UpdateStateRequest;

        /**
         * Encodes the specified UpdateStateRequest message. Does not implicitly {@link contract.UpdateStateRequest.verify|verify} messages.
         * @param message UpdateStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IUpdateStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateStateRequest message, length delimited. Does not implicitly {@link contract.UpdateStateRequest.verify|verify} messages.
         * @param message UpdateStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IUpdateStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.UpdateStateRequest;

        /**
         * Decodes an UpdateStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.UpdateStateRequest;

        /**
         * Verifies an UpdateStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateStateRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.UpdateStateRequest;

        /**
         * Creates a plain object from an UpdateStateRequest message. Also converts values to other types if specified.
         * @param message UpdateStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.UpdateStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateStateResponse. */
    interface IUpdateStateResponse {
    }

    /** Represents an UpdateStateResponse. */
    class UpdateStateResponse implements IUpdateStateResponse {

        /**
         * Constructs a new UpdateStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IUpdateStateResponse);

        /**
         * Creates a new UpdateStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateStateResponse instance
         */
        public static create(properties?: contract.IUpdateStateResponse): contract.UpdateStateResponse;

        /**
         * Encodes the specified UpdateStateResponse message. Does not implicitly {@link contract.UpdateStateResponse.verify|verify} messages.
         * @param message UpdateStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IUpdateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateStateResponse message, length delimited. Does not implicitly {@link contract.UpdateStateResponse.verify|verify} messages.
         * @param message UpdateStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IUpdateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.UpdateStateResponse;

        /**
         * Decodes an UpdateStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.UpdateStateResponse;

        /**
         * Verifies an UpdateStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateStateResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.UpdateStateResponse;

        /**
         * Creates a plain object from an UpdateStateResponse message. Also converts values to other types if specified.
         * @param message UpdateStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.UpdateStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteStateRequest. */
    interface IDeleteStateRequest {

        /** DeleteStateRequest transactionId */
        transactionId?: (string|null);

        /** DeleteStateRequest stateKey */
        stateKey?: (string|null);
    }

    /** Represents a DeleteStateRequest. */
    class DeleteStateRequest implements IDeleteStateRequest {

        /**
         * Constructs a new DeleteStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IDeleteStateRequest);

        /** DeleteStateRequest transactionId. */
        public transactionId: string;

        /** DeleteStateRequest stateKey. */
        public stateKey: string;

        /**
         * Creates a new DeleteStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteStateRequest instance
         */
        public static create(properties?: contract.IDeleteStateRequest): contract.DeleteStateRequest;

        /**
         * Encodes the specified DeleteStateRequest message. Does not implicitly {@link contract.DeleteStateRequest.verify|verify} messages.
         * @param message DeleteStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IDeleteStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteStateRequest message, length delimited. Does not implicitly {@link contract.DeleteStateRequest.verify|verify} messages.
         * @param message DeleteStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IDeleteStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.DeleteStateRequest;

        /**
         * Decodes a DeleteStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.DeleteStateRequest;

        /**
         * Verifies a DeleteStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteStateRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.DeleteStateRequest;

        /**
         * Creates a plain object from a DeleteStateRequest message. Also converts values to other types if specified.
         * @param message DeleteStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.DeleteStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteStateResponse. */
    interface IDeleteStateResponse {
    }

    /** Represents a DeleteStateResponse. */
    class DeleteStateResponse implements IDeleteStateResponse {

        /**
         * Constructs a new DeleteStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IDeleteStateResponse);

        /**
         * Creates a new DeleteStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteStateResponse instance
         */
        public static create(properties?: contract.IDeleteStateResponse): contract.DeleteStateResponse;

        /**
         * Encodes the specified DeleteStateResponse message. Does not implicitly {@link contract.DeleteStateResponse.verify|verify} messages.
         * @param message DeleteStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IDeleteStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteStateResponse message, length delimited. Does not implicitly {@link contract.DeleteStateResponse.verify|verify} messages.
         * @param message DeleteStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IDeleteStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.DeleteStateResponse;

        /**
         * Decodes a DeleteStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.DeleteStateResponse;

        /**
         * Verifies a DeleteStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteStateResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.DeleteStateResponse;

        /**
         * Creates a plain object from a DeleteStateResponse message. Also converts values to other types if specified.
         * @param message DeleteStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.DeleteStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExistsStateRequest. */
    interface IExistsStateRequest {

        /** ExistsStateRequest transactionId */
        transactionId?: (string|null);

        /** ExistsStateRequest stateKey */
        stateKey?: (string|null);
    }

    /** Represents an ExistsStateRequest. */
    class ExistsStateRequest implements IExistsStateRequest {

        /**
         * Constructs a new ExistsStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IExistsStateRequest);

        /** ExistsStateRequest transactionId. */
        public transactionId: string;

        /** ExistsStateRequest stateKey. */
        public stateKey: string;

        /**
         * Creates a new ExistsStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExistsStateRequest instance
         */
        public static create(properties?: contract.IExistsStateRequest): contract.ExistsStateRequest;

        /**
         * Encodes the specified ExistsStateRequest message. Does not implicitly {@link contract.ExistsStateRequest.verify|verify} messages.
         * @param message ExistsStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IExistsStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExistsStateRequest message, length delimited. Does not implicitly {@link contract.ExistsStateRequest.verify|verify} messages.
         * @param message ExistsStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IExistsStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExistsStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExistsStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.ExistsStateRequest;

        /**
         * Decodes an ExistsStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExistsStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.ExistsStateRequest;

        /**
         * Verifies an ExistsStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExistsStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExistsStateRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.ExistsStateRequest;

        /**
         * Creates a plain object from an ExistsStateRequest message. Also converts values to other types if specified.
         * @param message ExistsStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.ExistsStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExistsStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExistsStateResponse. */
    interface IExistsStateResponse {

        /** ExistsStateResponse exists */
        exists?: (boolean|null);
    }

    /** Represents an ExistsStateResponse. */
    class ExistsStateResponse implements IExistsStateResponse {

        /**
         * Constructs a new ExistsStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IExistsStateResponse);

        /** ExistsStateResponse exists. */
        public exists: boolean;

        /**
         * Creates a new ExistsStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExistsStateResponse instance
         */
        public static create(properties?: contract.IExistsStateResponse): contract.ExistsStateResponse;

        /**
         * Encodes the specified ExistsStateResponse message. Does not implicitly {@link contract.ExistsStateResponse.verify|verify} messages.
         * @param message ExistsStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IExistsStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExistsStateResponse message, length delimited. Does not implicitly {@link contract.ExistsStateResponse.verify|verify} messages.
         * @param message ExistsStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IExistsStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExistsStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExistsStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.ExistsStateResponse;

        /**
         * Decodes an ExistsStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExistsStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.ExistsStateResponse;

        /**
         * Verifies an ExistsStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExistsStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExistsStateResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.ExistsStateResponse;

        /**
         * Creates a plain object from an ExistsStateResponse message. Also converts values to other types if specified.
         * @param message ExistsStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.ExistsStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExistsStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStatesRequest. */
    interface IGetStatesRequest {

        /** GetStatesRequest byKeyRange */
        byKeyRange?: (contract.IKeyRangeQuery|null);

        /** GetStatesRequest byPartialKey */
        byPartialKey?: (contract.IPartialKeyQuery|null);

        /** GetStatesRequest byFromKey */
        byFromKey?: (contract.IFromKeyQuery|null);

        /** GetStatesRequest byToKey */
        byToKey?: (contract.IToKeyQuery|null);
    }

    /** Represents a GetStatesRequest. */
    class GetStatesRequest implements IGetStatesRequest {

        /**
         * Constructs a new GetStatesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IGetStatesRequest);

        /** GetStatesRequest byKeyRange. */
        public byKeyRange?: (contract.IKeyRangeQuery|null);

        /** GetStatesRequest byPartialKey. */
        public byPartialKey?: (contract.IPartialKeyQuery|null);

        /** GetStatesRequest byFromKey. */
        public byFromKey?: (contract.IFromKeyQuery|null);

        /** GetStatesRequest byToKey. */
        public byToKey?: (contract.IToKeyQuery|null);

        /** GetStatesRequest query. */
        public query?: ("byKeyRange"|"byPartialKey"|"byFromKey"|"byToKey");

        /**
         * Creates a new GetStatesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStatesRequest instance
         */
        public static create(properties?: contract.IGetStatesRequest): contract.GetStatesRequest;

        /**
         * Encodes the specified GetStatesRequest message. Does not implicitly {@link contract.GetStatesRequest.verify|verify} messages.
         * @param message GetStatesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IGetStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStatesRequest message, length delimited. Does not implicitly {@link contract.GetStatesRequest.verify|verify} messages.
         * @param message GetStatesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IGetStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStatesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.GetStatesRequest;

        /**
         * Decodes a GetStatesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.GetStatesRequest;

        /**
         * Verifies a GetStatesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStatesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStatesRequest
         */
        public static fromObject(object: { [k: string]: any }): contract.GetStatesRequest;

        /**
         * Creates a plain object from a GetStatesRequest message. Also converts values to other types if specified.
         * @param message GetStatesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.GetStatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStatesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStatesResponse. */
    interface IGetStatesResponse {

        /** GetStatesResponse state */
        state?: (contract.IState|null);
    }

    /** Represents a GetStatesResponse. */
    class GetStatesResponse implements IGetStatesResponse {

        /**
         * Constructs a new GetStatesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contract.IGetStatesResponse);

        /** GetStatesResponse state. */
        public state?: (contract.IState|null);

        /**
         * Creates a new GetStatesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStatesResponse instance
         */
        public static create(properties?: contract.IGetStatesResponse): contract.GetStatesResponse;

        /**
         * Encodes the specified GetStatesResponse message. Does not implicitly {@link contract.GetStatesResponse.verify|verify} messages.
         * @param message GetStatesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contract.IGetStatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStatesResponse message, length delimited. Does not implicitly {@link contract.GetStatesResponse.verify|verify} messages.
         * @param message GetStatesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contract.IGetStatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStatesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStatesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contract.GetStatesResponse;

        /**
         * Decodes a GetStatesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStatesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contract.GetStatesResponse;

        /**
         * Verifies a GetStatesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStatesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStatesResponse
         */
        public static fromObject(object: { [k: string]: any }): contract.GetStatesResponse;

        /**
         * Creates a plain object from a GetStatesResponse message. Also converts values to other types if specified.
         * @param message GetStatesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contract.GetStatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStatesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a LedgerService */
    class LedgerService extends $protobuf.rpc.Service {

        /**
         * Constructs a new LedgerService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new LedgerService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LedgerService;

        /**
         * Calls CreateState.
         * @param request CreateStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateStateResponse
         */
        public createState(request: contract.ICreateStateRequest, callback: contract.LedgerService.CreateStateCallback): void;

        /**
         * Calls CreateState.
         * @param request CreateStateRequest message or plain object
         * @returns Promise
         */
        public createState(request: contract.ICreateStateRequest): Promise<contract.CreateStateResponse>;

        /**
         * Calls ReadState.
         * @param request ReadStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ReadStateResponse
         */
        public readState(request: contract.IReadStateRequest, callback: contract.LedgerService.ReadStateCallback): void;

        /**
         * Calls ReadState.
         * @param request ReadStateRequest message or plain object
         * @returns Promise
         */
        public readState(request: contract.IReadStateRequest): Promise<contract.ReadStateResponse>;

        /**
         * Calls UpdateState.
         * @param request UpdateStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateStateResponse
         */
        public updateState(request: contract.IUpdateStateRequest, callback: contract.LedgerService.UpdateStateCallback): void;

        /**
         * Calls UpdateState.
         * @param request UpdateStateRequest message or plain object
         * @returns Promise
         */
        public updateState(request: contract.IUpdateStateRequest): Promise<contract.UpdateStateResponse>;

        /**
         * Calls DeleteState.
         * @param request DeleteStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteStateResponse
         */
        public deleteState(request: contract.IDeleteStateRequest, callback: contract.LedgerService.DeleteStateCallback): void;

        /**
         * Calls DeleteState.
         * @param request DeleteStateRequest message or plain object
         * @returns Promise
         */
        public deleteState(request: contract.IDeleteStateRequest): Promise<contract.DeleteStateResponse>;

        /**
         * Calls ExistsState.
         * @param request ExistsStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ExistsStateResponse
         */
        public existsState(request: contract.IExistsStateRequest, callback: contract.LedgerService.ExistsStateCallback): void;

        /**
         * Calls ExistsState.
         * @param request ExistsStateRequest message or plain object
         * @returns Promise
         */
        public existsState(request: contract.IExistsStateRequest): Promise<contract.ExistsStateResponse>;

        /**
         * Calls GetStates.
         * @param request GetStatesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetStatesResponse
         */
        public getStates(request: contract.IGetStatesRequest, callback: contract.LedgerService.GetStatesCallback): void;

        /**
         * Calls GetStates.
         * @param request GetStatesRequest message or plain object
         * @returns Promise
         */
        public getStates(request: contract.IGetStatesRequest): Promise<contract.GetStatesResponse>;
    }

    namespace LedgerService {

        /**
         * Callback as used by {@link contract.LedgerService#createState}.
         * @param error Error, if any
         * @param [response] CreateStateResponse
         */
        type CreateStateCallback = (error: (Error|null), response?: contract.CreateStateResponse) => void;

        /**
         * Callback as used by {@link contract.LedgerService#readState}.
         * @param error Error, if any
         * @param [response] ReadStateResponse
         */
        type ReadStateCallback = (error: (Error|null), response?: contract.ReadStateResponse) => void;

        /**
         * Callback as used by {@link contract.LedgerService#updateState}.
         * @param error Error, if any
         * @param [response] UpdateStateResponse
         */
        type UpdateStateCallback = (error: (Error|null), response?: contract.UpdateStateResponse) => void;

        /**
         * Callback as used by {@link contract.LedgerService#deleteState}.
         * @param error Error, if any
         * @param [response] DeleteStateResponse
         */
        type DeleteStateCallback = (error: (Error|null), response?: contract.DeleteStateResponse) => void;

        /**
         * Callback as used by {@link contract.LedgerService#existsState}.
         * @param error Error, if any
         * @param [response] ExistsStateResponse
         */
        type ExistsStateCallback = (error: (Error|null), response?: contract.ExistsStateResponse) => void;

        /**
         * Callback as used by {@link contract.LedgerService#getStates}.
         * @param error Error, if any
         * @param [response] GetStatesResponse
         */
        type GetStatesCallback = (error: (Error|null), response?: contract.GetStatesResponse) => void;
    }

    /** Represents a ContractService */
    class ContractService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ContractService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ContractService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ContractService;

        /**
         * Calls GetMetadata.
         * @param request GetMetadataRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetMetadataResponse
         */
        public getMetadata(request: contract.IGetMetadataRequest, callback: contract.ContractService.GetMetadataCallback): void;

        /**
         * Calls GetMetadata.
         * @param request GetMetadataRequest message or plain object
         * @returns Promise
         */
        public getMetadata(request: contract.IGetMetadataRequest): Promise<contract.GetMetadataResponse>;

        /**
         * Calls InvokeTransaction.
         * @param request InvokeTransactionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InvokeTransactionResponse
         */
        public invokeTransaction(request: contract.IInvokeTransactionRequest, callback: contract.ContractService.InvokeTransactionCallback): void;

        /**
         * Calls InvokeTransaction.
         * @param request InvokeTransactionRequest message or plain object
         * @returns Promise
         */
        public invokeTransaction(request: contract.IInvokeTransactionRequest): Promise<contract.InvokeTransactionResponse>;

        /**
         * Calls RegisterPeer.
         * @param request RegisterPeerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RegisterPeerResponse
         */
        public registerPeer(request: contract.IRegisterPeerRequest, callback: contract.ContractService.RegisterPeerCallback): void;

        /**
         * Calls RegisterPeer.
         * @param request RegisterPeerRequest message or plain object
         * @returns Promise
         */
        public registerPeer(request: contract.IRegisterPeerRequest): Promise<contract.RegisterPeerResponse>;
    }

    namespace ContractService {

        /**
         * Callback as used by {@link contract.ContractService#getMetadata}.
         * @param error Error, if any
         * @param [response] GetMetadataResponse
         */
        type GetMetadataCallback = (error: (Error|null), response?: contract.GetMetadataResponse) => void;

        /**
         * Callback as used by {@link contract.ContractService#invokeTransaction}.
         * @param error Error, if any
         * @param [response] InvokeTransactionResponse
         */
        type InvokeTransactionCallback = (error: (Error|null), response?: contract.InvokeTransactionResponse) => void;

        /**
         * Callback as used by {@link contract.ContractService#registerPeer}.
         * @param error Error, if any
         * @param [response] RegisterPeerResponse
         */
        type RegisterPeerCallback = (error: (Error|null), response?: contract.RegisterPeerResponse) => void;
    }
}
