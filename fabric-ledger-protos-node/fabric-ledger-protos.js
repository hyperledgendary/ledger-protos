/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            protobuf.Empty = (function() {
    
                /**
                 * Properties of an Empty.
                 * @memberof google.protobuf
                 * @interface IEmpty
                 */
    
                /**
                 * Constructs a new Empty.
                 * @memberof google.protobuf
                 * @classdesc Represents an Empty.
                 * @implements IEmpty
                 * @constructor
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 */
                function Empty(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 * @returns {google.protobuf.Empty} Empty instance
                 */
                Empty.create = function create(properties) {
                    return new Empty(properties);
                };
    
                /**
                 * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
    
                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };
    
                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Empty} Empty
                 */
                Empty.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Empty)
                        return object;
                    return new $root.google.protobuf.Empty();
                };
    
                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function toObject() {
                    return {};
                };
    
                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Empty;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.contract = (function() {
    
        /**
         * Namespace contract.
         * @exports contract
         * @namespace
         */
        var contract = {};
    
        contract.GetMetadataRequest = (function() {
    
            /**
             * Properties of a GetMetadataRequest.
             * @memberof contract
             * @interface IGetMetadataRequest
             */
    
            /**
             * Constructs a new GetMetadataRequest.
             * @memberof contract
             * @classdesc Represents a GetMetadataRequest.
             * @implements IGetMetadataRequest
             * @constructor
             * @param {contract.IGetMetadataRequest=} [properties] Properties to set
             */
            function GetMetadataRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new GetMetadataRequest instance using the specified properties.
             * @function create
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {contract.IGetMetadataRequest=} [properties] Properties to set
             * @returns {contract.GetMetadataRequest} GetMetadataRequest instance
             */
            GetMetadataRequest.create = function create(properties) {
                return new GetMetadataRequest(properties);
            };
    
            /**
             * Encodes the specified GetMetadataRequest message. Does not implicitly {@link contract.GetMetadataRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {contract.IGetMetadataRequest} message GetMetadataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMetadataRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified GetMetadataRequest message, length delimited. Does not implicitly {@link contract.GetMetadataRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {contract.IGetMetadataRequest} message GetMetadataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMetadataRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetMetadataRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.GetMetadataRequest} GetMetadataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMetadataRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.GetMetadataRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetMetadataRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.GetMetadataRequest} GetMetadataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMetadataRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetMetadataRequest message.
             * @function verify
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMetadataRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a GetMetadataRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.GetMetadataRequest} GetMetadataRequest
             */
            GetMetadataRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.GetMetadataRequest)
                    return object;
                return new $root.contract.GetMetadataRequest();
            };
    
            /**
             * Creates a plain object from a GetMetadataRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.GetMetadataRequest
             * @static
             * @param {contract.GetMetadataRequest} message GetMetadataRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMetadataRequest.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this GetMetadataRequest to JSON.
             * @function toJSON
             * @memberof contract.GetMetadataRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMetadataRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetMetadataRequest;
        })();
    
        contract.GetMetadataResponse = (function() {
    
            /**
             * Properties of a GetMetadataResponse.
             * @memberof contract
             * @interface IGetMetadataResponse
             * @property {Uint8Array|null} [payload] GetMetadataResponse payload
             */
    
            /**
             * Constructs a new GetMetadataResponse.
             * @memberof contract
             * @classdesc Represents a GetMetadataResponse.
             * @implements IGetMetadataResponse
             * @constructor
             * @param {contract.IGetMetadataResponse=} [properties] Properties to set
             */
            function GetMetadataResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetMetadataResponse payload.
             * @member {Uint8Array} payload
             * @memberof contract.GetMetadataResponse
             * @instance
             */
            GetMetadataResponse.prototype.payload = $util.newBuffer([]);
    
            /**
             * Creates a new GetMetadataResponse instance using the specified properties.
             * @function create
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {contract.IGetMetadataResponse=} [properties] Properties to set
             * @returns {contract.GetMetadataResponse} GetMetadataResponse instance
             */
            GetMetadataResponse.create = function create(properties) {
                return new GetMetadataResponse(properties);
            };
    
            /**
             * Encodes the specified GetMetadataResponse message. Does not implicitly {@link contract.GetMetadataResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {contract.IGetMetadataResponse} message GetMetadataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMetadataResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload);
                return writer;
            };
    
            /**
             * Encodes the specified GetMetadataResponse message, length delimited. Does not implicitly {@link contract.GetMetadataResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {contract.IGetMetadataResponse} message GetMetadataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMetadataResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetMetadataResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.GetMetadataResponse} GetMetadataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMetadataResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.GetMetadataResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetMetadataResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.GetMetadataResponse} GetMetadataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMetadataResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetMetadataResponse message.
             * @function verify
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMetadataResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                return null;
            };
    
            /**
             * Creates a GetMetadataResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.GetMetadataResponse} GetMetadataResponse
             */
            GetMetadataResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.GetMetadataResponse)
                    return object;
                var message = new $root.contract.GetMetadataResponse();
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length)
                        message.payload = object.payload;
                return message;
            };
    
            /**
             * Creates a plain object from a GetMetadataResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.GetMetadataResponse
             * @static
             * @param {contract.GetMetadataResponse} message GetMetadataResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMetadataResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.payload = "";
                    else {
                        object.payload = [];
                        if (options.bytes !== Array)
                            object.payload = $util.newBuffer(object.payload);
                    }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                return object;
            };
    
            /**
             * Converts this GetMetadataResponse to JSON.
             * @function toJSON
             * @memberof contract.GetMetadataResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMetadataResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetMetadataResponse;
        })();
    
        contract.InvokeTransactionRequest = (function() {
    
            /**
             * Properties of an InvokeTransactionRequest.
             * @memberof contract
             * @interface IInvokeTransactionRequest
             * @property {string|null} [channelId] InvokeTransactionRequest channelId
             * @property {string|null} [transactionId] InvokeTransactionRequest transactionId
             * @property {string|null} [transactionName] InvokeTransactionRequest transactionName
             * @property {Uint8Array|null} [payload] InvokeTransactionRequest payload
             */
    
            /**
             * Constructs a new InvokeTransactionRequest.
             * @memberof contract
             * @classdesc Represents an InvokeTransactionRequest.
             * @implements IInvokeTransactionRequest
             * @constructor
             * @param {contract.IInvokeTransactionRequest=} [properties] Properties to set
             */
            function InvokeTransactionRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InvokeTransactionRequest channelId.
             * @member {string} channelId
             * @memberof contract.InvokeTransactionRequest
             * @instance
             */
            InvokeTransactionRequest.prototype.channelId = "";
    
            /**
             * InvokeTransactionRequest transactionId.
             * @member {string} transactionId
             * @memberof contract.InvokeTransactionRequest
             * @instance
             */
            InvokeTransactionRequest.prototype.transactionId = "";
    
            /**
             * InvokeTransactionRequest transactionName.
             * @member {string} transactionName
             * @memberof contract.InvokeTransactionRequest
             * @instance
             */
            InvokeTransactionRequest.prototype.transactionName = "";
    
            /**
             * InvokeTransactionRequest payload.
             * @member {Uint8Array} payload
             * @memberof contract.InvokeTransactionRequest
             * @instance
             */
            InvokeTransactionRequest.prototype.payload = $util.newBuffer([]);
    
            /**
             * Creates a new InvokeTransactionRequest instance using the specified properties.
             * @function create
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {contract.IInvokeTransactionRequest=} [properties] Properties to set
             * @returns {contract.InvokeTransactionRequest} InvokeTransactionRequest instance
             */
            InvokeTransactionRequest.create = function create(properties) {
                return new InvokeTransactionRequest(properties);
            };
    
            /**
             * Encodes the specified InvokeTransactionRequest message. Does not implicitly {@link contract.InvokeTransactionRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {contract.IInvokeTransactionRequest} message InvokeTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvokeTransactionRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.transactionId);
                if (message.transactionName != null && Object.hasOwnProperty.call(message, "transactionName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.transactionName);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
                return writer;
            };
    
            /**
             * Encodes the specified InvokeTransactionRequest message, length delimited. Does not implicitly {@link contract.InvokeTransactionRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {contract.IInvokeTransactionRequest} message InvokeTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvokeTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an InvokeTransactionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.InvokeTransactionRequest} InvokeTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvokeTransactionRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.InvokeTransactionRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channelId = reader.string();
                        break;
                    case 2:
                        message.transactionId = reader.string();
                        break;
                    case 3:
                        message.transactionName = reader.string();
                        break;
                    case 4:
                        message.payload = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an InvokeTransactionRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.InvokeTransactionRequest} InvokeTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvokeTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an InvokeTransactionRequest message.
             * @function verify
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InvokeTransactionRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channelId != null && message.hasOwnProperty("channelId"))
                    if (!$util.isString(message.channelId))
                        return "channelId: string expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.transactionName != null && message.hasOwnProperty("transactionName"))
                    if (!$util.isString(message.transactionName))
                        return "transactionName: string expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                return null;
            };
    
            /**
             * Creates an InvokeTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.InvokeTransactionRequest} InvokeTransactionRequest
             */
            InvokeTransactionRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.InvokeTransactionRequest)
                    return object;
                var message = new $root.contract.InvokeTransactionRequest();
                if (object.channelId != null)
                    message.channelId = String(object.channelId);
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.transactionName != null)
                    message.transactionName = String(object.transactionName);
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length)
                        message.payload = object.payload;
                return message;
            };
    
            /**
             * Creates a plain object from an InvokeTransactionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.InvokeTransactionRequest
             * @static
             * @param {contract.InvokeTransactionRequest} message InvokeTransactionRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InvokeTransactionRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.channelId = "";
                    object.transactionId = "";
                    object.transactionName = "";
                    if (options.bytes === String)
                        object.payload = "";
                    else {
                        object.payload = [];
                        if (options.bytes !== Array)
                            object.payload = $util.newBuffer(object.payload);
                    }
                }
                if (message.channelId != null && message.hasOwnProperty("channelId"))
                    object.channelId = message.channelId;
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.transactionName != null && message.hasOwnProperty("transactionName"))
                    object.transactionName = message.transactionName;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                return object;
            };
    
            /**
             * Converts this InvokeTransactionRequest to JSON.
             * @function toJSON
             * @memberof contract.InvokeTransactionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InvokeTransactionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return InvokeTransactionRequest;
        })();
    
        contract.InvokeTransactionResponse = (function() {
    
            /**
             * Properties of an InvokeTransactionResponse.
             * @memberof contract
             * @interface IInvokeTransactionResponse
             * @property {Uint8Array|null} [payload] InvokeTransactionResponse payload
             */
    
            /**
             * Constructs a new InvokeTransactionResponse.
             * @memberof contract
             * @classdesc Represents an InvokeTransactionResponse.
             * @implements IInvokeTransactionResponse
             * @constructor
             * @param {contract.IInvokeTransactionResponse=} [properties] Properties to set
             */
            function InvokeTransactionResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InvokeTransactionResponse payload.
             * @member {Uint8Array} payload
             * @memberof contract.InvokeTransactionResponse
             * @instance
             */
            InvokeTransactionResponse.prototype.payload = $util.newBuffer([]);
    
            /**
             * Creates a new InvokeTransactionResponse instance using the specified properties.
             * @function create
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {contract.IInvokeTransactionResponse=} [properties] Properties to set
             * @returns {contract.InvokeTransactionResponse} InvokeTransactionResponse instance
             */
            InvokeTransactionResponse.create = function create(properties) {
                return new InvokeTransactionResponse(properties);
            };
    
            /**
             * Encodes the specified InvokeTransactionResponse message. Does not implicitly {@link contract.InvokeTransactionResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {contract.IInvokeTransactionResponse} message InvokeTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvokeTransactionResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload);
                return writer;
            };
    
            /**
             * Encodes the specified InvokeTransactionResponse message, length delimited. Does not implicitly {@link contract.InvokeTransactionResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {contract.IInvokeTransactionResponse} message InvokeTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvokeTransactionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an InvokeTransactionResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.InvokeTransactionResponse} InvokeTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvokeTransactionResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.InvokeTransactionResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an InvokeTransactionResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.InvokeTransactionResponse} InvokeTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvokeTransactionResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an InvokeTransactionResponse message.
             * @function verify
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InvokeTransactionResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                return null;
            };
    
            /**
             * Creates an InvokeTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.InvokeTransactionResponse} InvokeTransactionResponse
             */
            InvokeTransactionResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.InvokeTransactionResponse)
                    return object;
                var message = new $root.contract.InvokeTransactionResponse();
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length)
                        message.payload = object.payload;
                return message;
            };
    
            /**
             * Creates a plain object from an InvokeTransactionResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.InvokeTransactionResponse
             * @static
             * @param {contract.InvokeTransactionResponse} message InvokeTransactionResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InvokeTransactionResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.payload = "";
                    else {
                        object.payload = [];
                        if (options.bytes !== Array)
                            object.payload = $util.newBuffer(object.payload);
                    }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                return object;
            };
    
            /**
             * Converts this InvokeTransactionResponse to JSON.
             * @function toJSON
             * @memberof contract.InvokeTransactionResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InvokeTransactionResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return InvokeTransactionResponse;
        })();
    
        contract.RegisterPeerRequest = (function() {
    
            /**
             * Properties of a RegisterPeerRequest.
             * @memberof contract
             * @interface IRegisterPeerRequest
             * @property {string|null} [peerAddress] RegisterPeerRequest peerAddress
             * @property {string|null} [peerPort] RegisterPeerRequest peerPort
             */
    
            /**
             * Constructs a new RegisterPeerRequest.
             * @memberof contract
             * @classdesc Represents a RegisterPeerRequest.
             * @implements IRegisterPeerRequest
             * @constructor
             * @param {contract.IRegisterPeerRequest=} [properties] Properties to set
             */
            function RegisterPeerRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RegisterPeerRequest peerAddress.
             * @member {string} peerAddress
             * @memberof contract.RegisterPeerRequest
             * @instance
             */
            RegisterPeerRequest.prototype.peerAddress = "";
    
            /**
             * RegisterPeerRequest peerPort.
             * @member {string} peerPort
             * @memberof contract.RegisterPeerRequest
             * @instance
             */
            RegisterPeerRequest.prototype.peerPort = "";
    
            /**
             * Creates a new RegisterPeerRequest instance using the specified properties.
             * @function create
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {contract.IRegisterPeerRequest=} [properties] Properties to set
             * @returns {contract.RegisterPeerRequest} RegisterPeerRequest instance
             */
            RegisterPeerRequest.create = function create(properties) {
                return new RegisterPeerRequest(properties);
            };
    
            /**
             * Encodes the specified RegisterPeerRequest message. Does not implicitly {@link contract.RegisterPeerRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {contract.IRegisterPeerRequest} message RegisterPeerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterPeerRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.peerAddress != null && Object.hasOwnProperty.call(message, "peerAddress"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.peerAddress);
                if (message.peerPort != null && Object.hasOwnProperty.call(message, "peerPort"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.peerPort);
                return writer;
            };
    
            /**
             * Encodes the specified RegisterPeerRequest message, length delimited. Does not implicitly {@link contract.RegisterPeerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {contract.IRegisterPeerRequest} message RegisterPeerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterPeerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegisterPeerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.RegisterPeerRequest} RegisterPeerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterPeerRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.RegisterPeerRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.peerAddress = reader.string();
                        break;
                    case 2:
                        message.peerPort = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegisterPeerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.RegisterPeerRequest} RegisterPeerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterPeerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegisterPeerRequest message.
             * @function verify
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterPeerRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.peerAddress != null && message.hasOwnProperty("peerAddress"))
                    if (!$util.isString(message.peerAddress))
                        return "peerAddress: string expected";
                if (message.peerPort != null && message.hasOwnProperty("peerPort"))
                    if (!$util.isString(message.peerPort))
                        return "peerPort: string expected";
                return null;
            };
    
            /**
             * Creates a RegisterPeerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.RegisterPeerRequest} RegisterPeerRequest
             */
            RegisterPeerRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.RegisterPeerRequest)
                    return object;
                var message = new $root.contract.RegisterPeerRequest();
                if (object.peerAddress != null)
                    message.peerAddress = String(object.peerAddress);
                if (object.peerPort != null)
                    message.peerPort = String(object.peerPort);
                return message;
            };
    
            /**
             * Creates a plain object from a RegisterPeerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.RegisterPeerRequest
             * @static
             * @param {contract.RegisterPeerRequest} message RegisterPeerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterPeerRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.peerAddress = "";
                    object.peerPort = "";
                }
                if (message.peerAddress != null && message.hasOwnProperty("peerAddress"))
                    object.peerAddress = message.peerAddress;
                if (message.peerPort != null && message.hasOwnProperty("peerPort"))
                    object.peerPort = message.peerPort;
                return object;
            };
    
            /**
             * Converts this RegisterPeerRequest to JSON.
             * @function toJSON
             * @memberof contract.RegisterPeerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterPeerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegisterPeerRequest;
        })();
    
        contract.RegisterPeerResponse = (function() {
    
            /**
             * Properties of a RegisterPeerResponse.
             * @memberof contract
             * @interface IRegisterPeerResponse
             */
    
            /**
             * Constructs a new RegisterPeerResponse.
             * @memberof contract
             * @classdesc Represents a RegisterPeerResponse.
             * @implements IRegisterPeerResponse
             * @constructor
             * @param {contract.IRegisterPeerResponse=} [properties] Properties to set
             */
            function RegisterPeerResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new RegisterPeerResponse instance using the specified properties.
             * @function create
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {contract.IRegisterPeerResponse=} [properties] Properties to set
             * @returns {contract.RegisterPeerResponse} RegisterPeerResponse instance
             */
            RegisterPeerResponse.create = function create(properties) {
                return new RegisterPeerResponse(properties);
            };
    
            /**
             * Encodes the specified RegisterPeerResponse message. Does not implicitly {@link contract.RegisterPeerResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {contract.IRegisterPeerResponse} message RegisterPeerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterPeerResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified RegisterPeerResponse message, length delimited. Does not implicitly {@link contract.RegisterPeerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {contract.IRegisterPeerResponse} message RegisterPeerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterPeerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegisterPeerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.RegisterPeerResponse} RegisterPeerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterPeerResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.RegisterPeerResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegisterPeerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.RegisterPeerResponse} RegisterPeerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterPeerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegisterPeerResponse message.
             * @function verify
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterPeerResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a RegisterPeerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.RegisterPeerResponse} RegisterPeerResponse
             */
            RegisterPeerResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.RegisterPeerResponse)
                    return object;
                return new $root.contract.RegisterPeerResponse();
            };
    
            /**
             * Creates a plain object from a RegisterPeerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.RegisterPeerResponse
             * @static
             * @param {contract.RegisterPeerResponse} message RegisterPeerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterPeerResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this RegisterPeerResponse to JSON.
             * @function toJSON
             * @memberof contract.RegisterPeerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterPeerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegisterPeerResponse;
        })();
    
        contract.State = (function() {
    
            /**
             * Properties of a State.
             * @memberof contract
             * @interface IState
             * @property {string|null} [key] State key
             * @property {Uint8Array|null} [value] State value
             */
    
            /**
             * Constructs a new State.
             * @memberof contract
             * @classdesc Represents a State.
             * @implements IState
             * @constructor
             * @param {contract.IState=} [properties] Properties to set
             */
            function State(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * State key.
             * @member {string} key
             * @memberof contract.State
             * @instance
             */
            State.prototype.key = "";
    
            /**
             * State value.
             * @member {Uint8Array} value
             * @memberof contract.State
             * @instance
             */
            State.prototype.value = $util.newBuffer([]);
    
            /**
             * Creates a new State instance using the specified properties.
             * @function create
             * @memberof contract.State
             * @static
             * @param {contract.IState=} [properties] Properties to set
             * @returns {contract.State} State instance
             */
            State.create = function create(properties) {
                return new State(properties);
            };
    
            /**
             * Encodes the specified State message. Does not implicitly {@link contract.State.verify|verify} messages.
             * @function encode
             * @memberof contract.State
             * @static
             * @param {contract.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link contract.State.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.State
             * @static
             * @param {contract.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a State message from the specified reader or buffer.
             * @function decode
             * @memberof contract.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.State} State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            State.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.State();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.State} State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            State.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a State message.
             * @function verify
             * @memberof contract.State
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            State.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };
    
            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.State
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.State} State
             */
            State.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.State)
                    return object;
                var message = new $root.contract.State();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };
    
            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.State
             * @static
             * @param {contract.State} message State
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            State.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };
    
            /**
             * Converts this State to JSON.
             * @function toJSON
             * @memberof contract.State
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            State.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return State;
        })();
    
        contract.StateHistory = (function() {
    
            /**
             * Properties of a StateHistory.
             * @memberof contract
             * @interface IStateHistory
             * @property {string|null} [key] StateHistory key
             * @property {Uint8Array|null} [value] StateHistory value
             * @property {string|null} [transactionId] StateHistory transactionId
             * @property {google.protobuf.ITimestamp|null} [timestamp] StateHistory timestamp
             * @property {boolean|null} [isDelete] StateHistory isDelete
             */
    
            /**
             * Constructs a new StateHistory.
             * @memberof contract
             * @classdesc Represents a StateHistory.
             * @implements IStateHistory
             * @constructor
             * @param {contract.IStateHistory=} [properties] Properties to set
             */
            function StateHistory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StateHistory key.
             * @member {string} key
             * @memberof contract.StateHistory
             * @instance
             */
            StateHistory.prototype.key = "";
    
            /**
             * StateHistory value.
             * @member {Uint8Array} value
             * @memberof contract.StateHistory
             * @instance
             */
            StateHistory.prototype.value = $util.newBuffer([]);
    
            /**
             * StateHistory transactionId.
             * @member {string} transactionId
             * @memberof contract.StateHistory
             * @instance
             */
            StateHistory.prototype.transactionId = "";
    
            /**
             * StateHistory timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof contract.StateHistory
             * @instance
             */
            StateHistory.prototype.timestamp = null;
    
            /**
             * StateHistory isDelete.
             * @member {boolean} isDelete
             * @memberof contract.StateHistory
             * @instance
             */
            StateHistory.prototype.isDelete = false;
    
            /**
             * Creates a new StateHistory instance using the specified properties.
             * @function create
             * @memberof contract.StateHistory
             * @static
             * @param {contract.IStateHistory=} [properties] Properties to set
             * @returns {contract.StateHistory} StateHistory instance
             */
            StateHistory.create = function create(properties) {
                return new StateHistory(properties);
            };
    
            /**
             * Encodes the specified StateHistory message. Does not implicitly {@link contract.StateHistory.verify|verify} messages.
             * @function encode
             * @memberof contract.StateHistory
             * @static
             * @param {contract.IStateHistory} message StateHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StateHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.transactionId);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.isDelete != null && Object.hasOwnProperty.call(message, "isDelete"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isDelete);
                return writer;
            };
    
            /**
             * Encodes the specified StateHistory message, length delimited. Does not implicitly {@link contract.StateHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.StateHistory
             * @static
             * @param {contract.IStateHistory} message StateHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StateHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StateHistory message from the specified reader or buffer.
             * @function decode
             * @memberof contract.StateHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.StateHistory} StateHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StateHistory.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.StateHistory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    case 3:
                        message.transactionId = reader.string();
                        break;
                    case 4:
                        message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.isDelete = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StateHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.StateHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.StateHistory} StateHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StateHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StateHistory message.
             * @function verify
             * @memberof contract.StateHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StateHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.isDelete != null && message.hasOwnProperty("isDelete"))
                    if (typeof message.isDelete !== "boolean")
                        return "isDelete: boolean expected";
                return null;
            };
    
            /**
             * Creates a StateHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.StateHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.StateHistory} StateHistory
             */
            StateHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.StateHistory)
                    return object;
                var message = new $root.contract.StateHistory();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".contract.StateHistory.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                if (object.isDelete != null)
                    message.isDelete = Boolean(object.isDelete);
                return message;
            };
    
            /**
             * Creates a plain object from a StateHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.StateHistory
             * @static
             * @param {contract.StateHistory} message StateHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StateHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                    object.transactionId = "";
                    object.timestamp = null;
                    object.isDelete = false;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                if (message.isDelete != null && message.hasOwnProperty("isDelete"))
                    object.isDelete = message.isDelete;
                return object;
            };
    
            /**
             * Converts this StateHistory to JSON.
             * @function toJSON
             * @memberof contract.StateHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StateHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StateHistory;
        })();
    
        contract.KeyRangeQuery = (function() {
    
            /**
             * Properties of a KeyRangeQuery.
             * @memberof contract
             * @interface IKeyRangeQuery
             * @property {string|null} [startKey] KeyRangeQuery startKey
             * @property {string|null} [endKey] KeyRangeQuery endKey
             */
    
            /**
             * Constructs a new KeyRangeQuery.
             * @memberof contract
             * @classdesc Represents a KeyRangeQuery.
             * @implements IKeyRangeQuery
             * @constructor
             * @param {contract.IKeyRangeQuery=} [properties] Properties to set
             */
            function KeyRangeQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * KeyRangeQuery startKey.
             * @member {string} startKey
             * @memberof contract.KeyRangeQuery
             * @instance
             */
            KeyRangeQuery.prototype.startKey = "";
    
            /**
             * KeyRangeQuery endKey.
             * @member {string} endKey
             * @memberof contract.KeyRangeQuery
             * @instance
             */
            KeyRangeQuery.prototype.endKey = "";
    
            /**
             * Creates a new KeyRangeQuery instance using the specified properties.
             * @function create
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {contract.IKeyRangeQuery=} [properties] Properties to set
             * @returns {contract.KeyRangeQuery} KeyRangeQuery instance
             */
            KeyRangeQuery.create = function create(properties) {
                return new KeyRangeQuery(properties);
            };
    
            /**
             * Encodes the specified KeyRangeQuery message. Does not implicitly {@link contract.KeyRangeQuery.verify|verify} messages.
             * @function encode
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {contract.IKeyRangeQuery} message KeyRangeQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyRangeQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startKey != null && Object.hasOwnProperty.call(message, "startKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.startKey);
                if (message.endKey != null && Object.hasOwnProperty.call(message, "endKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.endKey);
                return writer;
            };
    
            /**
             * Encodes the specified KeyRangeQuery message, length delimited. Does not implicitly {@link contract.KeyRangeQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {contract.IKeyRangeQuery} message KeyRangeQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyRangeQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a KeyRangeQuery message from the specified reader or buffer.
             * @function decode
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.KeyRangeQuery} KeyRangeQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyRangeQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.KeyRangeQuery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.startKey = reader.string();
                        break;
                    case 2:
                        message.endKey = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a KeyRangeQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.KeyRangeQuery} KeyRangeQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyRangeQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a KeyRangeQuery message.
             * @function verify
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KeyRangeQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startKey != null && message.hasOwnProperty("startKey"))
                    if (!$util.isString(message.startKey))
                        return "startKey: string expected";
                if (message.endKey != null && message.hasOwnProperty("endKey"))
                    if (!$util.isString(message.endKey))
                        return "endKey: string expected";
                return null;
            };
    
            /**
             * Creates a KeyRangeQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.KeyRangeQuery} KeyRangeQuery
             */
            KeyRangeQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.KeyRangeQuery)
                    return object;
                var message = new $root.contract.KeyRangeQuery();
                if (object.startKey != null)
                    message.startKey = String(object.startKey);
                if (object.endKey != null)
                    message.endKey = String(object.endKey);
                return message;
            };
    
            /**
             * Creates a plain object from a KeyRangeQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.KeyRangeQuery
             * @static
             * @param {contract.KeyRangeQuery} message KeyRangeQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KeyRangeQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.startKey = "";
                    object.endKey = "";
                }
                if (message.startKey != null && message.hasOwnProperty("startKey"))
                    object.startKey = message.startKey;
                if (message.endKey != null && message.hasOwnProperty("endKey"))
                    object.endKey = message.endKey;
                return object;
            };
    
            /**
             * Converts this KeyRangeQuery to JSON.
             * @function toJSON
             * @memberof contract.KeyRangeQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KeyRangeQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return KeyRangeQuery;
        })();
    
        contract.PartialKeyQuery = (function() {
    
            /**
             * Properties of a PartialKeyQuery.
             * @memberof contract
             * @interface IPartialKeyQuery
             */
    
            /**
             * Constructs a new PartialKeyQuery.
             * @memberof contract
             * @classdesc Represents a PartialKeyQuery.
             * @implements IPartialKeyQuery
             * @constructor
             * @param {contract.IPartialKeyQuery=} [properties] Properties to set
             */
            function PartialKeyQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new PartialKeyQuery instance using the specified properties.
             * @function create
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {contract.IPartialKeyQuery=} [properties] Properties to set
             * @returns {contract.PartialKeyQuery} PartialKeyQuery instance
             */
            PartialKeyQuery.create = function create(properties) {
                return new PartialKeyQuery(properties);
            };
    
            /**
             * Encodes the specified PartialKeyQuery message. Does not implicitly {@link contract.PartialKeyQuery.verify|verify} messages.
             * @function encode
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {contract.IPartialKeyQuery} message PartialKeyQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PartialKeyQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified PartialKeyQuery message, length delimited. Does not implicitly {@link contract.PartialKeyQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {contract.IPartialKeyQuery} message PartialKeyQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PartialKeyQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PartialKeyQuery message from the specified reader or buffer.
             * @function decode
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.PartialKeyQuery} PartialKeyQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PartialKeyQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.PartialKeyQuery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PartialKeyQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.PartialKeyQuery} PartialKeyQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PartialKeyQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PartialKeyQuery message.
             * @function verify
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PartialKeyQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a PartialKeyQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.PartialKeyQuery} PartialKeyQuery
             */
            PartialKeyQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.PartialKeyQuery)
                    return object;
                return new $root.contract.PartialKeyQuery();
            };
    
            /**
             * Creates a plain object from a PartialKeyQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.PartialKeyQuery
             * @static
             * @param {contract.PartialKeyQuery} message PartialKeyQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PartialKeyQuery.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this PartialKeyQuery to JSON.
             * @function toJSON
             * @memberof contract.PartialKeyQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PartialKeyQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PartialKeyQuery;
        })();
    
        contract.FromKeyQuery = (function() {
    
            /**
             * Properties of a FromKeyQuery.
             * @memberof contract
             * @interface IFromKeyQuery
             */
    
            /**
             * Constructs a new FromKeyQuery.
             * @memberof contract
             * @classdesc Represents a FromKeyQuery.
             * @implements IFromKeyQuery
             * @constructor
             * @param {contract.IFromKeyQuery=} [properties] Properties to set
             */
            function FromKeyQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new FromKeyQuery instance using the specified properties.
             * @function create
             * @memberof contract.FromKeyQuery
             * @static
             * @param {contract.IFromKeyQuery=} [properties] Properties to set
             * @returns {contract.FromKeyQuery} FromKeyQuery instance
             */
            FromKeyQuery.create = function create(properties) {
                return new FromKeyQuery(properties);
            };
    
            /**
             * Encodes the specified FromKeyQuery message. Does not implicitly {@link contract.FromKeyQuery.verify|verify} messages.
             * @function encode
             * @memberof contract.FromKeyQuery
             * @static
             * @param {contract.IFromKeyQuery} message FromKeyQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FromKeyQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified FromKeyQuery message, length delimited. Does not implicitly {@link contract.FromKeyQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.FromKeyQuery
             * @static
             * @param {contract.IFromKeyQuery} message FromKeyQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FromKeyQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FromKeyQuery message from the specified reader or buffer.
             * @function decode
             * @memberof contract.FromKeyQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.FromKeyQuery} FromKeyQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FromKeyQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.FromKeyQuery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FromKeyQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.FromKeyQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.FromKeyQuery} FromKeyQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FromKeyQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FromKeyQuery message.
             * @function verify
             * @memberof contract.FromKeyQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FromKeyQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a FromKeyQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.FromKeyQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.FromKeyQuery} FromKeyQuery
             */
            FromKeyQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.FromKeyQuery)
                    return object;
                return new $root.contract.FromKeyQuery();
            };
    
            /**
             * Creates a plain object from a FromKeyQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.FromKeyQuery
             * @static
             * @param {contract.FromKeyQuery} message FromKeyQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FromKeyQuery.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this FromKeyQuery to JSON.
             * @function toJSON
             * @memberof contract.FromKeyQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FromKeyQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FromKeyQuery;
        })();
    
        contract.ToKeyQuery = (function() {
    
            /**
             * Properties of a ToKeyQuery.
             * @memberof contract
             * @interface IToKeyQuery
             */
    
            /**
             * Constructs a new ToKeyQuery.
             * @memberof contract
             * @classdesc Represents a ToKeyQuery.
             * @implements IToKeyQuery
             * @constructor
             * @param {contract.IToKeyQuery=} [properties] Properties to set
             */
            function ToKeyQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new ToKeyQuery instance using the specified properties.
             * @function create
             * @memberof contract.ToKeyQuery
             * @static
             * @param {contract.IToKeyQuery=} [properties] Properties to set
             * @returns {contract.ToKeyQuery} ToKeyQuery instance
             */
            ToKeyQuery.create = function create(properties) {
                return new ToKeyQuery(properties);
            };
    
            /**
             * Encodes the specified ToKeyQuery message. Does not implicitly {@link contract.ToKeyQuery.verify|verify} messages.
             * @function encode
             * @memberof contract.ToKeyQuery
             * @static
             * @param {contract.IToKeyQuery} message ToKeyQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ToKeyQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified ToKeyQuery message, length delimited. Does not implicitly {@link contract.ToKeyQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.ToKeyQuery
             * @static
             * @param {contract.IToKeyQuery} message ToKeyQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ToKeyQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ToKeyQuery message from the specified reader or buffer.
             * @function decode
             * @memberof contract.ToKeyQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.ToKeyQuery} ToKeyQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ToKeyQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.ToKeyQuery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ToKeyQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.ToKeyQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.ToKeyQuery} ToKeyQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ToKeyQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ToKeyQuery message.
             * @function verify
             * @memberof contract.ToKeyQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ToKeyQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a ToKeyQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.ToKeyQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.ToKeyQuery} ToKeyQuery
             */
            ToKeyQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.ToKeyQuery)
                    return object;
                return new $root.contract.ToKeyQuery();
            };
    
            /**
             * Creates a plain object from a ToKeyQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.ToKeyQuery
             * @static
             * @param {contract.ToKeyQuery} message ToKeyQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ToKeyQuery.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this ToKeyQuery to JSON.
             * @function toJSON
             * @memberof contract.ToKeyQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ToKeyQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ToKeyQuery;
        })();
    
        contract.CreateStateRequest = (function() {
    
            /**
             * Properties of a CreateStateRequest.
             * @memberof contract
             * @interface ICreateStateRequest
             * @property {string|null} [transactionId] CreateStateRequest transactionId
             * @property {contract.IState|null} [state] CreateStateRequest state
             */
    
            /**
             * Constructs a new CreateStateRequest.
             * @memberof contract
             * @classdesc Represents a CreateStateRequest.
             * @implements ICreateStateRequest
             * @constructor
             * @param {contract.ICreateStateRequest=} [properties] Properties to set
             */
            function CreateStateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CreateStateRequest transactionId.
             * @member {string} transactionId
             * @memberof contract.CreateStateRequest
             * @instance
             */
            CreateStateRequest.prototype.transactionId = "";
    
            /**
             * CreateStateRequest state.
             * @member {contract.IState|null|undefined} state
             * @memberof contract.CreateStateRequest
             * @instance
             */
            CreateStateRequest.prototype.state = null;
    
            /**
             * Creates a new CreateStateRequest instance using the specified properties.
             * @function create
             * @memberof contract.CreateStateRequest
             * @static
             * @param {contract.ICreateStateRequest=} [properties] Properties to set
             * @returns {contract.CreateStateRequest} CreateStateRequest instance
             */
            CreateStateRequest.create = function create(properties) {
                return new CreateStateRequest(properties);
            };
    
            /**
             * Encodes the specified CreateStateRequest message. Does not implicitly {@link contract.CreateStateRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.CreateStateRequest
             * @static
             * @param {contract.ICreateStateRequest} message CreateStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateStateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    $root.contract.State.encode(message.state, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified CreateStateRequest message, length delimited. Does not implicitly {@link contract.CreateStateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.CreateStateRequest
             * @static
             * @param {contract.ICreateStateRequest} message CreateStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreateStateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.CreateStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.CreateStateRequest} CreateStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateStateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.CreateStateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    case 2:
                        message.state = $root.contract.State.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CreateStateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.CreateStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.CreateStateRequest} CreateStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateStateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreateStateRequest message.
             * @function verify
             * @memberof contract.CreateStateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateStateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.state != null && message.hasOwnProperty("state")) {
                    var error = $root.contract.State.verify(message.state);
                    if (error)
                        return "state." + error;
                }
                return null;
            };
    
            /**
             * Creates a CreateStateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.CreateStateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.CreateStateRequest} CreateStateRequest
             */
            CreateStateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.CreateStateRequest)
                    return object;
                var message = new $root.contract.CreateStateRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.state != null) {
                    if (typeof object.state !== "object")
                        throw TypeError(".contract.CreateStateRequest.state: object expected");
                    message.state = $root.contract.State.fromObject(object.state);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CreateStateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.CreateStateRequest
             * @static
             * @param {contract.CreateStateRequest} message CreateStateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateStateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.transactionId = "";
                    object.state = null;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = $root.contract.State.toObject(message.state, options);
                return object;
            };
    
            /**
             * Converts this CreateStateRequest to JSON.
             * @function toJSON
             * @memberof contract.CreateStateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateStateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CreateStateRequest;
        })();
    
        contract.CreateStateResponse = (function() {
    
            /**
             * Properties of a CreateStateResponse.
             * @memberof contract
             * @interface ICreateStateResponse
             */
    
            /**
             * Constructs a new CreateStateResponse.
             * @memberof contract
             * @classdesc Represents a CreateStateResponse.
             * @implements ICreateStateResponse
             * @constructor
             * @param {contract.ICreateStateResponse=} [properties] Properties to set
             */
            function CreateStateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new CreateStateResponse instance using the specified properties.
             * @function create
             * @memberof contract.CreateStateResponse
             * @static
             * @param {contract.ICreateStateResponse=} [properties] Properties to set
             * @returns {contract.CreateStateResponse} CreateStateResponse instance
             */
            CreateStateResponse.create = function create(properties) {
                return new CreateStateResponse(properties);
            };
    
            /**
             * Encodes the specified CreateStateResponse message. Does not implicitly {@link contract.CreateStateResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.CreateStateResponse
             * @static
             * @param {contract.ICreateStateResponse} message CreateStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateStateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified CreateStateResponse message, length delimited. Does not implicitly {@link contract.CreateStateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.CreateStateResponse
             * @static
             * @param {contract.ICreateStateResponse} message CreateStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreateStateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.CreateStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.CreateStateResponse} CreateStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateStateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.CreateStateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CreateStateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.CreateStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.CreateStateResponse} CreateStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateStateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreateStateResponse message.
             * @function verify
             * @memberof contract.CreateStateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateStateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a CreateStateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.CreateStateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.CreateStateResponse} CreateStateResponse
             */
            CreateStateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.CreateStateResponse)
                    return object;
                return new $root.contract.CreateStateResponse();
            };
    
            /**
             * Creates a plain object from a CreateStateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.CreateStateResponse
             * @static
             * @param {contract.CreateStateResponse} message CreateStateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateStateResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this CreateStateResponse to JSON.
             * @function toJSON
             * @memberof contract.CreateStateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateStateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CreateStateResponse;
        })();
    
        contract.ReadStateRequest = (function() {
    
            /**
             * Properties of a ReadStateRequest.
             * @memberof contract
             * @interface IReadStateRequest
             * @property {string|null} [transactionId] ReadStateRequest transactionId
             * @property {string|null} [stateKey] ReadStateRequest stateKey
             */
    
            /**
             * Constructs a new ReadStateRequest.
             * @memberof contract
             * @classdesc Represents a ReadStateRequest.
             * @implements IReadStateRequest
             * @constructor
             * @param {contract.IReadStateRequest=} [properties] Properties to set
             */
            function ReadStateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReadStateRequest transactionId.
             * @member {string} transactionId
             * @memberof contract.ReadStateRequest
             * @instance
             */
            ReadStateRequest.prototype.transactionId = "";
    
            /**
             * ReadStateRequest stateKey.
             * @member {string} stateKey
             * @memberof contract.ReadStateRequest
             * @instance
             */
            ReadStateRequest.prototype.stateKey = "";
    
            /**
             * Creates a new ReadStateRequest instance using the specified properties.
             * @function create
             * @memberof contract.ReadStateRequest
             * @static
             * @param {contract.IReadStateRequest=} [properties] Properties to set
             * @returns {contract.ReadStateRequest} ReadStateRequest instance
             */
            ReadStateRequest.create = function create(properties) {
                return new ReadStateRequest(properties);
            };
    
            /**
             * Encodes the specified ReadStateRequest message. Does not implicitly {@link contract.ReadStateRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.ReadStateRequest
             * @static
             * @param {contract.IReadStateRequest} message ReadStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                if (message.stateKey != null && Object.hasOwnProperty.call(message, "stateKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.stateKey);
                return writer;
            };
    
            /**
             * Encodes the specified ReadStateRequest message, length delimited. Does not implicitly {@link contract.ReadStateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.ReadStateRequest
             * @static
             * @param {contract.IReadStateRequest} message ReadStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReadStateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.ReadStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.ReadStateRequest} ReadStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.ReadStateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    case 2:
                        message.stateKey = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ReadStateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.ReadStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.ReadStateRequest} ReadStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReadStateRequest message.
             * @function verify
             * @memberof contract.ReadStateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadStateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.stateKey != null && message.hasOwnProperty("stateKey"))
                    if (!$util.isString(message.stateKey))
                        return "stateKey: string expected";
                return null;
            };
    
            /**
             * Creates a ReadStateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.ReadStateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.ReadStateRequest} ReadStateRequest
             */
            ReadStateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.ReadStateRequest)
                    return object;
                var message = new $root.contract.ReadStateRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.stateKey != null)
                    message.stateKey = String(object.stateKey);
                return message;
            };
    
            /**
             * Creates a plain object from a ReadStateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.ReadStateRequest
             * @static
             * @param {contract.ReadStateRequest} message ReadStateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadStateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.transactionId = "";
                    object.stateKey = "";
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.stateKey != null && message.hasOwnProperty("stateKey"))
                    object.stateKey = message.stateKey;
                return object;
            };
    
            /**
             * Converts this ReadStateRequest to JSON.
             * @function toJSON
             * @memberof contract.ReadStateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadStateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ReadStateRequest;
        })();
    
        contract.ReadStateResponse = (function() {
    
            /**
             * Properties of a ReadStateResponse.
             * @memberof contract
             * @interface IReadStateResponse
             * @property {contract.IState|null} [state] ReadStateResponse state
             */
    
            /**
             * Constructs a new ReadStateResponse.
             * @memberof contract
             * @classdesc Represents a ReadStateResponse.
             * @implements IReadStateResponse
             * @constructor
             * @param {contract.IReadStateResponse=} [properties] Properties to set
             */
            function ReadStateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReadStateResponse state.
             * @member {contract.IState|null|undefined} state
             * @memberof contract.ReadStateResponse
             * @instance
             */
            ReadStateResponse.prototype.state = null;
    
            /**
             * Creates a new ReadStateResponse instance using the specified properties.
             * @function create
             * @memberof contract.ReadStateResponse
             * @static
             * @param {contract.IReadStateResponse=} [properties] Properties to set
             * @returns {contract.ReadStateResponse} ReadStateResponse instance
             */
            ReadStateResponse.create = function create(properties) {
                return new ReadStateResponse(properties);
            };
    
            /**
             * Encodes the specified ReadStateResponse message. Does not implicitly {@link contract.ReadStateResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.ReadStateResponse
             * @static
             * @param {contract.IReadStateResponse} message ReadStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    $root.contract.State.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ReadStateResponse message, length delimited. Does not implicitly {@link contract.ReadStateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.ReadStateResponse
             * @static
             * @param {contract.IReadStateResponse} message ReadStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReadStateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.ReadStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.ReadStateResponse} ReadStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.ReadStateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.state = $root.contract.State.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ReadStateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.ReadStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.ReadStateResponse} ReadStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReadStateResponse message.
             * @function verify
             * @memberof contract.ReadStateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadStateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.state != null && message.hasOwnProperty("state")) {
                    var error = $root.contract.State.verify(message.state);
                    if (error)
                        return "state." + error;
                }
                return null;
            };
    
            /**
             * Creates a ReadStateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.ReadStateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.ReadStateResponse} ReadStateResponse
             */
            ReadStateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.ReadStateResponse)
                    return object;
                var message = new $root.contract.ReadStateResponse();
                if (object.state != null) {
                    if (typeof object.state !== "object")
                        throw TypeError(".contract.ReadStateResponse.state: object expected");
                    message.state = $root.contract.State.fromObject(object.state);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ReadStateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.ReadStateResponse
             * @static
             * @param {contract.ReadStateResponse} message ReadStateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadStateResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.state = null;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = $root.contract.State.toObject(message.state, options);
                return object;
            };
    
            /**
             * Converts this ReadStateResponse to JSON.
             * @function toJSON
             * @memberof contract.ReadStateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadStateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ReadStateResponse;
        })();
    
        contract.UpdateStateRequest = (function() {
    
            /**
             * Properties of an UpdateStateRequest.
             * @memberof contract
             * @interface IUpdateStateRequest
             * @property {string|null} [transactionId] UpdateStateRequest transactionId
             * @property {contract.IState|null} [state] UpdateStateRequest state
             */
    
            /**
             * Constructs a new UpdateStateRequest.
             * @memberof contract
             * @classdesc Represents an UpdateStateRequest.
             * @implements IUpdateStateRequest
             * @constructor
             * @param {contract.IUpdateStateRequest=} [properties] Properties to set
             */
            function UpdateStateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpdateStateRequest transactionId.
             * @member {string} transactionId
             * @memberof contract.UpdateStateRequest
             * @instance
             */
            UpdateStateRequest.prototype.transactionId = "";
    
            /**
             * UpdateStateRequest state.
             * @member {contract.IState|null|undefined} state
             * @memberof contract.UpdateStateRequest
             * @instance
             */
            UpdateStateRequest.prototype.state = null;
    
            /**
             * Creates a new UpdateStateRequest instance using the specified properties.
             * @function create
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {contract.IUpdateStateRequest=} [properties] Properties to set
             * @returns {contract.UpdateStateRequest} UpdateStateRequest instance
             */
            UpdateStateRequest.create = function create(properties) {
                return new UpdateStateRequest(properties);
            };
    
            /**
             * Encodes the specified UpdateStateRequest message. Does not implicitly {@link contract.UpdateStateRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {contract.IUpdateStateRequest} message UpdateStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateStateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    $root.contract.State.encode(message.state, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UpdateStateRequest message, length delimited. Does not implicitly {@link contract.UpdateStateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {contract.IUpdateStateRequest} message UpdateStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateStateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.UpdateStateRequest} UpdateStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateStateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.UpdateStateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    case 2:
                        message.state = $root.contract.State.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpdateStateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.UpdateStateRequest} UpdateStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateStateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateStateRequest message.
             * @function verify
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateStateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.state != null && message.hasOwnProperty("state")) {
                    var error = $root.contract.State.verify(message.state);
                    if (error)
                        return "state." + error;
                }
                return null;
            };
    
            /**
             * Creates an UpdateStateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.UpdateStateRequest} UpdateStateRequest
             */
            UpdateStateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.UpdateStateRequest)
                    return object;
                var message = new $root.contract.UpdateStateRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.state != null) {
                    if (typeof object.state !== "object")
                        throw TypeError(".contract.UpdateStateRequest.state: object expected");
                    message.state = $root.contract.State.fromObject(object.state);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an UpdateStateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.UpdateStateRequest
             * @static
             * @param {contract.UpdateStateRequest} message UpdateStateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateStateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.transactionId = "";
                    object.state = null;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = $root.contract.State.toObject(message.state, options);
                return object;
            };
    
            /**
             * Converts this UpdateStateRequest to JSON.
             * @function toJSON
             * @memberof contract.UpdateStateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateStateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UpdateStateRequest;
        })();
    
        contract.UpdateStateResponse = (function() {
    
            /**
             * Properties of an UpdateStateResponse.
             * @memberof contract
             * @interface IUpdateStateResponse
             */
    
            /**
             * Constructs a new UpdateStateResponse.
             * @memberof contract
             * @classdesc Represents an UpdateStateResponse.
             * @implements IUpdateStateResponse
             * @constructor
             * @param {contract.IUpdateStateResponse=} [properties] Properties to set
             */
            function UpdateStateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new UpdateStateResponse instance using the specified properties.
             * @function create
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {contract.IUpdateStateResponse=} [properties] Properties to set
             * @returns {contract.UpdateStateResponse} UpdateStateResponse instance
             */
            UpdateStateResponse.create = function create(properties) {
                return new UpdateStateResponse(properties);
            };
    
            /**
             * Encodes the specified UpdateStateResponse message. Does not implicitly {@link contract.UpdateStateResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {contract.IUpdateStateResponse} message UpdateStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateStateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified UpdateStateResponse message, length delimited. Does not implicitly {@link contract.UpdateStateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {contract.IUpdateStateResponse} message UpdateStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateStateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.UpdateStateResponse} UpdateStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateStateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.UpdateStateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpdateStateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.UpdateStateResponse} UpdateStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateStateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateStateResponse message.
             * @function verify
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateStateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates an UpdateStateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.UpdateStateResponse} UpdateStateResponse
             */
            UpdateStateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.UpdateStateResponse)
                    return object;
                return new $root.contract.UpdateStateResponse();
            };
    
            /**
             * Creates a plain object from an UpdateStateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.UpdateStateResponse
             * @static
             * @param {contract.UpdateStateResponse} message UpdateStateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateStateResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this UpdateStateResponse to JSON.
             * @function toJSON
             * @memberof contract.UpdateStateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateStateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UpdateStateResponse;
        })();
    
        contract.DeleteStateRequest = (function() {
    
            /**
             * Properties of a DeleteStateRequest.
             * @memberof contract
             * @interface IDeleteStateRequest
             * @property {string|null} [transactionId] DeleteStateRequest transactionId
             * @property {string|null} [stateKey] DeleteStateRequest stateKey
             */
    
            /**
             * Constructs a new DeleteStateRequest.
             * @memberof contract
             * @classdesc Represents a DeleteStateRequest.
             * @implements IDeleteStateRequest
             * @constructor
             * @param {contract.IDeleteStateRequest=} [properties] Properties to set
             */
            function DeleteStateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeleteStateRequest transactionId.
             * @member {string} transactionId
             * @memberof contract.DeleteStateRequest
             * @instance
             */
            DeleteStateRequest.prototype.transactionId = "";
    
            /**
             * DeleteStateRequest stateKey.
             * @member {string} stateKey
             * @memberof contract.DeleteStateRequest
             * @instance
             */
            DeleteStateRequest.prototype.stateKey = "";
    
            /**
             * Creates a new DeleteStateRequest instance using the specified properties.
             * @function create
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {contract.IDeleteStateRequest=} [properties] Properties to set
             * @returns {contract.DeleteStateRequest} DeleteStateRequest instance
             */
            DeleteStateRequest.create = function create(properties) {
                return new DeleteStateRequest(properties);
            };
    
            /**
             * Encodes the specified DeleteStateRequest message. Does not implicitly {@link contract.DeleteStateRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {contract.IDeleteStateRequest} message DeleteStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                if (message.stateKey != null && Object.hasOwnProperty.call(message, "stateKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.stateKey);
                return writer;
            };
    
            /**
             * Encodes the specified DeleteStateRequest message, length delimited. Does not implicitly {@link contract.DeleteStateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {contract.IDeleteStateRequest} message DeleteStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteStateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.DeleteStateRequest} DeleteStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.DeleteStateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    case 2:
                        message.stateKey = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeleteStateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.DeleteStateRequest} DeleteStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteStateRequest message.
             * @function verify
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteStateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.stateKey != null && message.hasOwnProperty("stateKey"))
                    if (!$util.isString(message.stateKey))
                        return "stateKey: string expected";
                return null;
            };
    
            /**
             * Creates a DeleteStateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.DeleteStateRequest} DeleteStateRequest
             */
            DeleteStateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.DeleteStateRequest)
                    return object;
                var message = new $root.contract.DeleteStateRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.stateKey != null)
                    message.stateKey = String(object.stateKey);
                return message;
            };
    
            /**
             * Creates a plain object from a DeleteStateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.DeleteStateRequest
             * @static
             * @param {contract.DeleteStateRequest} message DeleteStateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteStateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.transactionId = "";
                    object.stateKey = "";
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.stateKey != null && message.hasOwnProperty("stateKey"))
                    object.stateKey = message.stateKey;
                return object;
            };
    
            /**
             * Converts this DeleteStateRequest to JSON.
             * @function toJSON
             * @memberof contract.DeleteStateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteStateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeleteStateRequest;
        })();
    
        contract.DeleteStateResponse = (function() {
    
            /**
             * Properties of a DeleteStateResponse.
             * @memberof contract
             * @interface IDeleteStateResponse
             */
    
            /**
             * Constructs a new DeleteStateResponse.
             * @memberof contract
             * @classdesc Represents a DeleteStateResponse.
             * @implements IDeleteStateResponse
             * @constructor
             * @param {contract.IDeleteStateResponse=} [properties] Properties to set
             */
            function DeleteStateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new DeleteStateResponse instance using the specified properties.
             * @function create
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {contract.IDeleteStateResponse=} [properties] Properties to set
             * @returns {contract.DeleteStateResponse} DeleteStateResponse instance
             */
            DeleteStateResponse.create = function create(properties) {
                return new DeleteStateResponse(properties);
            };
    
            /**
             * Encodes the specified DeleteStateResponse message. Does not implicitly {@link contract.DeleteStateResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {contract.IDeleteStateResponse} message DeleteStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified DeleteStateResponse message, length delimited. Does not implicitly {@link contract.DeleteStateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {contract.IDeleteStateResponse} message DeleteStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteStateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.DeleteStateResponse} DeleteStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.DeleteStateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeleteStateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.DeleteStateResponse} DeleteStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteStateResponse message.
             * @function verify
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteStateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a DeleteStateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.DeleteStateResponse} DeleteStateResponse
             */
            DeleteStateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.DeleteStateResponse)
                    return object;
                return new $root.contract.DeleteStateResponse();
            };
    
            /**
             * Creates a plain object from a DeleteStateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.DeleteStateResponse
             * @static
             * @param {contract.DeleteStateResponse} message DeleteStateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteStateResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this DeleteStateResponse to JSON.
             * @function toJSON
             * @memberof contract.DeleteStateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteStateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeleteStateResponse;
        })();
    
        contract.ExistsStateRequest = (function() {
    
            /**
             * Properties of an ExistsStateRequest.
             * @memberof contract
             * @interface IExistsStateRequest
             * @property {string|null} [transactionId] ExistsStateRequest transactionId
             * @property {string|null} [stateKey] ExistsStateRequest stateKey
             */
    
            /**
             * Constructs a new ExistsStateRequest.
             * @memberof contract
             * @classdesc Represents an ExistsStateRequest.
             * @implements IExistsStateRequest
             * @constructor
             * @param {contract.IExistsStateRequest=} [properties] Properties to set
             */
            function ExistsStateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExistsStateRequest transactionId.
             * @member {string} transactionId
             * @memberof contract.ExistsStateRequest
             * @instance
             */
            ExistsStateRequest.prototype.transactionId = "";
    
            /**
             * ExistsStateRequest stateKey.
             * @member {string} stateKey
             * @memberof contract.ExistsStateRequest
             * @instance
             */
            ExistsStateRequest.prototype.stateKey = "";
    
            /**
             * Creates a new ExistsStateRequest instance using the specified properties.
             * @function create
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {contract.IExistsStateRequest=} [properties] Properties to set
             * @returns {contract.ExistsStateRequest} ExistsStateRequest instance
             */
            ExistsStateRequest.create = function create(properties) {
                return new ExistsStateRequest(properties);
            };
    
            /**
             * Encodes the specified ExistsStateRequest message. Does not implicitly {@link contract.ExistsStateRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {contract.IExistsStateRequest} message ExistsStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExistsStateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                if (message.stateKey != null && Object.hasOwnProperty.call(message, "stateKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.stateKey);
                return writer;
            };
    
            /**
             * Encodes the specified ExistsStateRequest message, length delimited. Does not implicitly {@link contract.ExistsStateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {contract.IExistsStateRequest} message ExistsStateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExistsStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExistsStateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.ExistsStateRequest} ExistsStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExistsStateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.ExistsStateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    case 2:
                        message.stateKey = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ExistsStateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.ExistsStateRequest} ExistsStateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExistsStateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExistsStateRequest message.
             * @function verify
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExistsStateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.stateKey != null && message.hasOwnProperty("stateKey"))
                    if (!$util.isString(message.stateKey))
                        return "stateKey: string expected";
                return null;
            };
    
            /**
             * Creates an ExistsStateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.ExistsStateRequest} ExistsStateRequest
             */
            ExistsStateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.ExistsStateRequest)
                    return object;
                var message = new $root.contract.ExistsStateRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                if (object.stateKey != null)
                    message.stateKey = String(object.stateKey);
                return message;
            };
    
            /**
             * Creates a plain object from an ExistsStateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.ExistsStateRequest
             * @static
             * @param {contract.ExistsStateRequest} message ExistsStateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExistsStateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.transactionId = "";
                    object.stateKey = "";
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.stateKey != null && message.hasOwnProperty("stateKey"))
                    object.stateKey = message.stateKey;
                return object;
            };
    
            /**
             * Converts this ExistsStateRequest to JSON.
             * @function toJSON
             * @memberof contract.ExistsStateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExistsStateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExistsStateRequest;
        })();
    
        contract.ExistsStateResponse = (function() {
    
            /**
             * Properties of an ExistsStateResponse.
             * @memberof contract
             * @interface IExistsStateResponse
             * @property {boolean|null} [exists] ExistsStateResponse exists
             */
    
            /**
             * Constructs a new ExistsStateResponse.
             * @memberof contract
             * @classdesc Represents an ExistsStateResponse.
             * @implements IExistsStateResponse
             * @constructor
             * @param {contract.IExistsStateResponse=} [properties] Properties to set
             */
            function ExistsStateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExistsStateResponse exists.
             * @member {boolean} exists
             * @memberof contract.ExistsStateResponse
             * @instance
             */
            ExistsStateResponse.prototype.exists = false;
    
            /**
             * Creates a new ExistsStateResponse instance using the specified properties.
             * @function create
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {contract.IExistsStateResponse=} [properties] Properties to set
             * @returns {contract.ExistsStateResponse} ExistsStateResponse instance
             */
            ExistsStateResponse.create = function create(properties) {
                return new ExistsStateResponse(properties);
            };
    
            /**
             * Encodes the specified ExistsStateResponse message. Does not implicitly {@link contract.ExistsStateResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {contract.IExistsStateResponse} message ExistsStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExistsStateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.exists != null && Object.hasOwnProperty.call(message, "exists"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.exists);
                return writer;
            };
    
            /**
             * Encodes the specified ExistsStateResponse message, length delimited. Does not implicitly {@link contract.ExistsStateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {contract.IExistsStateResponse} message ExistsStateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExistsStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExistsStateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.ExistsStateResponse} ExistsStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExistsStateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.ExistsStateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.exists = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ExistsStateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.ExistsStateResponse} ExistsStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExistsStateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExistsStateResponse message.
             * @function verify
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExistsStateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.exists != null && message.hasOwnProperty("exists"))
                    if (typeof message.exists !== "boolean")
                        return "exists: boolean expected";
                return null;
            };
    
            /**
             * Creates an ExistsStateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.ExistsStateResponse} ExistsStateResponse
             */
            ExistsStateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.ExistsStateResponse)
                    return object;
                var message = new $root.contract.ExistsStateResponse();
                if (object.exists != null)
                    message.exists = Boolean(object.exists);
                return message;
            };
    
            /**
             * Creates a plain object from an ExistsStateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.ExistsStateResponse
             * @static
             * @param {contract.ExistsStateResponse} message ExistsStateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExistsStateResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.exists = false;
                if (message.exists != null && message.hasOwnProperty("exists"))
                    object.exists = message.exists;
                return object;
            };
    
            /**
             * Converts this ExistsStateResponse to JSON.
             * @function toJSON
             * @memberof contract.ExistsStateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExistsStateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExistsStateResponse;
        })();
    
        contract.GetStatesRequest = (function() {
    
            /**
             * Properties of a GetStatesRequest.
             * @memberof contract
             * @interface IGetStatesRequest
             * @property {contract.IKeyRangeQuery|null} [byKeyRange] GetStatesRequest byKeyRange
             * @property {contract.IPartialKeyQuery|null} [byPartialKey] GetStatesRequest byPartialKey
             * @property {contract.IFromKeyQuery|null} [byFromKey] GetStatesRequest byFromKey
             * @property {contract.IToKeyQuery|null} [byToKey] GetStatesRequest byToKey
             */
    
            /**
             * Constructs a new GetStatesRequest.
             * @memberof contract
             * @classdesc Represents a GetStatesRequest.
             * @implements IGetStatesRequest
             * @constructor
             * @param {contract.IGetStatesRequest=} [properties] Properties to set
             */
            function GetStatesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetStatesRequest byKeyRange.
             * @member {contract.IKeyRangeQuery|null|undefined} byKeyRange
             * @memberof contract.GetStatesRequest
             * @instance
             */
            GetStatesRequest.prototype.byKeyRange = null;
    
            /**
             * GetStatesRequest byPartialKey.
             * @member {contract.IPartialKeyQuery|null|undefined} byPartialKey
             * @memberof contract.GetStatesRequest
             * @instance
             */
            GetStatesRequest.prototype.byPartialKey = null;
    
            /**
             * GetStatesRequest byFromKey.
             * @member {contract.IFromKeyQuery|null|undefined} byFromKey
             * @memberof contract.GetStatesRequest
             * @instance
             */
            GetStatesRequest.prototype.byFromKey = null;
    
            /**
             * GetStatesRequest byToKey.
             * @member {contract.IToKeyQuery|null|undefined} byToKey
             * @memberof contract.GetStatesRequest
             * @instance
             */
            GetStatesRequest.prototype.byToKey = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * GetStatesRequest query.
             * @member {"byKeyRange"|"byPartialKey"|"byFromKey"|"byToKey"|undefined} query
             * @memberof contract.GetStatesRequest
             * @instance
             */
            Object.defineProperty(GetStatesRequest.prototype, "query", {
                get: $util.oneOfGetter($oneOfFields = ["byKeyRange", "byPartialKey", "byFromKey", "byToKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new GetStatesRequest instance using the specified properties.
             * @function create
             * @memberof contract.GetStatesRequest
             * @static
             * @param {contract.IGetStatesRequest=} [properties] Properties to set
             * @returns {contract.GetStatesRequest} GetStatesRequest instance
             */
            GetStatesRequest.create = function create(properties) {
                return new GetStatesRequest(properties);
            };
    
            /**
             * Encodes the specified GetStatesRequest message. Does not implicitly {@link contract.GetStatesRequest.verify|verify} messages.
             * @function encode
             * @memberof contract.GetStatesRequest
             * @static
             * @param {contract.IGetStatesRequest} message GetStatesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStatesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.byKeyRange != null && Object.hasOwnProperty.call(message, "byKeyRange"))
                    $root.contract.KeyRangeQuery.encode(message.byKeyRange, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.byPartialKey != null && Object.hasOwnProperty.call(message, "byPartialKey"))
                    $root.contract.PartialKeyQuery.encode(message.byPartialKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.byFromKey != null && Object.hasOwnProperty.call(message, "byFromKey"))
                    $root.contract.FromKeyQuery.encode(message.byFromKey, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.byToKey != null && Object.hasOwnProperty.call(message, "byToKey"))
                    $root.contract.ToKeyQuery.encode(message.byToKey, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GetStatesRequest message, length delimited. Does not implicitly {@link contract.GetStatesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.GetStatesRequest
             * @static
             * @param {contract.IGetStatesRequest} message GetStatesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStatesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetStatesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contract.GetStatesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.GetStatesRequest} GetStatesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStatesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.GetStatesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.byKeyRange = $root.contract.KeyRangeQuery.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.byPartialKey = $root.contract.PartialKeyQuery.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.byFromKey = $root.contract.FromKeyQuery.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.byToKey = $root.contract.ToKeyQuery.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetStatesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.GetStatesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.GetStatesRequest} GetStatesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStatesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetStatesRequest message.
             * @function verify
             * @memberof contract.GetStatesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetStatesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.byKeyRange != null && message.hasOwnProperty("byKeyRange")) {
                    properties.query = 1;
                    {
                        var error = $root.contract.KeyRangeQuery.verify(message.byKeyRange);
                        if (error)
                            return "byKeyRange." + error;
                    }
                }
                if (message.byPartialKey != null && message.hasOwnProperty("byPartialKey")) {
                    if (properties.query === 1)
                        return "query: multiple values";
                    properties.query = 1;
                    {
                        var error = $root.contract.PartialKeyQuery.verify(message.byPartialKey);
                        if (error)
                            return "byPartialKey." + error;
                    }
                }
                if (message.byFromKey != null && message.hasOwnProperty("byFromKey")) {
                    if (properties.query === 1)
                        return "query: multiple values";
                    properties.query = 1;
                    {
                        var error = $root.contract.FromKeyQuery.verify(message.byFromKey);
                        if (error)
                            return "byFromKey." + error;
                    }
                }
                if (message.byToKey != null && message.hasOwnProperty("byToKey")) {
                    if (properties.query === 1)
                        return "query: multiple values";
                    properties.query = 1;
                    {
                        var error = $root.contract.ToKeyQuery.verify(message.byToKey);
                        if (error)
                            return "byToKey." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a GetStatesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.GetStatesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.GetStatesRequest} GetStatesRequest
             */
            GetStatesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.GetStatesRequest)
                    return object;
                var message = new $root.contract.GetStatesRequest();
                if (object.byKeyRange != null) {
                    if (typeof object.byKeyRange !== "object")
                        throw TypeError(".contract.GetStatesRequest.byKeyRange: object expected");
                    message.byKeyRange = $root.contract.KeyRangeQuery.fromObject(object.byKeyRange);
                }
                if (object.byPartialKey != null) {
                    if (typeof object.byPartialKey !== "object")
                        throw TypeError(".contract.GetStatesRequest.byPartialKey: object expected");
                    message.byPartialKey = $root.contract.PartialKeyQuery.fromObject(object.byPartialKey);
                }
                if (object.byFromKey != null) {
                    if (typeof object.byFromKey !== "object")
                        throw TypeError(".contract.GetStatesRequest.byFromKey: object expected");
                    message.byFromKey = $root.contract.FromKeyQuery.fromObject(object.byFromKey);
                }
                if (object.byToKey != null) {
                    if (typeof object.byToKey !== "object")
                        throw TypeError(".contract.GetStatesRequest.byToKey: object expected");
                    message.byToKey = $root.contract.ToKeyQuery.fromObject(object.byToKey);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetStatesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.GetStatesRequest
             * @static
             * @param {contract.GetStatesRequest} message GetStatesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetStatesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.byKeyRange != null && message.hasOwnProperty("byKeyRange")) {
                    object.byKeyRange = $root.contract.KeyRangeQuery.toObject(message.byKeyRange, options);
                    if (options.oneofs)
                        object.query = "byKeyRange";
                }
                if (message.byPartialKey != null && message.hasOwnProperty("byPartialKey")) {
                    object.byPartialKey = $root.contract.PartialKeyQuery.toObject(message.byPartialKey, options);
                    if (options.oneofs)
                        object.query = "byPartialKey";
                }
                if (message.byFromKey != null && message.hasOwnProperty("byFromKey")) {
                    object.byFromKey = $root.contract.FromKeyQuery.toObject(message.byFromKey, options);
                    if (options.oneofs)
                        object.query = "byFromKey";
                }
                if (message.byToKey != null && message.hasOwnProperty("byToKey")) {
                    object.byToKey = $root.contract.ToKeyQuery.toObject(message.byToKey, options);
                    if (options.oneofs)
                        object.query = "byToKey";
                }
                return object;
            };
    
            /**
             * Converts this GetStatesRequest to JSON.
             * @function toJSON
             * @memberof contract.GetStatesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetStatesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetStatesRequest;
        })();
    
        contract.GetStatesResponse = (function() {
    
            /**
             * Properties of a GetStatesResponse.
             * @memberof contract
             * @interface IGetStatesResponse
             * @property {contract.IState|null} [state] GetStatesResponse state
             */
    
            /**
             * Constructs a new GetStatesResponse.
             * @memberof contract
             * @classdesc Represents a GetStatesResponse.
             * @implements IGetStatesResponse
             * @constructor
             * @param {contract.IGetStatesResponse=} [properties] Properties to set
             */
            function GetStatesResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetStatesResponse state.
             * @member {contract.IState|null|undefined} state
             * @memberof contract.GetStatesResponse
             * @instance
             */
            GetStatesResponse.prototype.state = null;
    
            /**
             * Creates a new GetStatesResponse instance using the specified properties.
             * @function create
             * @memberof contract.GetStatesResponse
             * @static
             * @param {contract.IGetStatesResponse=} [properties] Properties to set
             * @returns {contract.GetStatesResponse} GetStatesResponse instance
             */
            GetStatesResponse.create = function create(properties) {
                return new GetStatesResponse(properties);
            };
    
            /**
             * Encodes the specified GetStatesResponse message. Does not implicitly {@link contract.GetStatesResponse.verify|verify} messages.
             * @function encode
             * @memberof contract.GetStatesResponse
             * @static
             * @param {contract.IGetStatesResponse} message GetStatesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStatesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    $root.contract.State.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GetStatesResponse message, length delimited. Does not implicitly {@link contract.GetStatesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contract.GetStatesResponse
             * @static
             * @param {contract.IGetStatesResponse} message GetStatesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStatesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetStatesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contract.GetStatesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contract.GetStatesResponse} GetStatesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStatesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contract.GetStatesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.state = $root.contract.State.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetStatesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contract.GetStatesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contract.GetStatesResponse} GetStatesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStatesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetStatesResponse message.
             * @function verify
             * @memberof contract.GetStatesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetStatesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.state != null && message.hasOwnProperty("state")) {
                    var error = $root.contract.State.verify(message.state);
                    if (error)
                        return "state." + error;
                }
                return null;
            };
    
            /**
             * Creates a GetStatesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contract.GetStatesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contract.GetStatesResponse} GetStatesResponse
             */
            GetStatesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contract.GetStatesResponse)
                    return object;
                var message = new $root.contract.GetStatesResponse();
                if (object.state != null) {
                    if (typeof object.state !== "object")
                        throw TypeError(".contract.GetStatesResponse.state: object expected");
                    message.state = $root.contract.State.fromObject(object.state);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetStatesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contract.GetStatesResponse
             * @static
             * @param {contract.GetStatesResponse} message GetStatesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetStatesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.state = null;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = $root.contract.State.toObject(message.state, options);
                return object;
            };
    
            /**
             * Converts this GetStatesResponse to JSON.
             * @function toJSON
             * @memberof contract.GetStatesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetStatesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetStatesResponse;
        })();
    
        contract.LedgerService = (function() {
    
            /**
             * Constructs a new LedgerService service.
             * @memberof contract
             * @classdesc Represents a LedgerService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function LedgerService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (LedgerService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LedgerService;
    
            /**
             * Creates new LedgerService service using the specified rpc implementation.
             * @function create
             * @memberof contract.LedgerService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {LedgerService} RPC service. Useful where requests and/or responses are streamed.
             */
            LedgerService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link contract.LedgerService#createState}.
             * @memberof contract.LedgerService
             * @typedef CreateStateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.CreateStateResponse} [response] CreateStateResponse
             */
    
            /**
             * Calls CreateState.
             * @function createState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.ICreateStateRequest} request CreateStateRequest message or plain object
             * @param {contract.LedgerService.CreateStateCallback} callback Node-style callback called with the error, if any, and CreateStateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LedgerService.prototype.createState = function createState(request, callback) {
                return this.rpcCall(createState, $root.contract.CreateStateRequest, $root.contract.CreateStateResponse, request, callback);
            }, "name", { value: "CreateState" });
    
            /**
             * Calls CreateState.
             * @function createState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.ICreateStateRequest} request CreateStateRequest message or plain object
             * @returns {Promise<contract.CreateStateResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.LedgerService#readState}.
             * @memberof contract.LedgerService
             * @typedef ReadStateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.ReadStateResponse} [response] ReadStateResponse
             */
    
            /**
             * Calls ReadState.
             * @function readState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IReadStateRequest} request ReadStateRequest message or plain object
             * @param {contract.LedgerService.ReadStateCallback} callback Node-style callback called with the error, if any, and ReadStateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LedgerService.prototype.readState = function readState(request, callback) {
                return this.rpcCall(readState, $root.contract.ReadStateRequest, $root.contract.ReadStateResponse, request, callback);
            }, "name", { value: "ReadState" });
    
            /**
             * Calls ReadState.
             * @function readState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IReadStateRequest} request ReadStateRequest message or plain object
             * @returns {Promise<contract.ReadStateResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.LedgerService#updateState}.
             * @memberof contract.LedgerService
             * @typedef UpdateStateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.UpdateStateResponse} [response] UpdateStateResponse
             */
    
            /**
             * Calls UpdateState.
             * @function updateState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IUpdateStateRequest} request UpdateStateRequest message or plain object
             * @param {contract.LedgerService.UpdateStateCallback} callback Node-style callback called with the error, if any, and UpdateStateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LedgerService.prototype.updateState = function updateState(request, callback) {
                return this.rpcCall(updateState, $root.contract.UpdateStateRequest, $root.contract.UpdateStateResponse, request, callback);
            }, "name", { value: "UpdateState" });
    
            /**
             * Calls UpdateState.
             * @function updateState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IUpdateStateRequest} request UpdateStateRequest message or plain object
             * @returns {Promise<contract.UpdateStateResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.LedgerService#deleteState}.
             * @memberof contract.LedgerService
             * @typedef DeleteStateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.DeleteStateResponse} [response] DeleteStateResponse
             */
    
            /**
             * Calls DeleteState.
             * @function deleteState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IDeleteStateRequest} request DeleteStateRequest message or plain object
             * @param {contract.LedgerService.DeleteStateCallback} callback Node-style callback called with the error, if any, and DeleteStateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LedgerService.prototype.deleteState = function deleteState(request, callback) {
                return this.rpcCall(deleteState, $root.contract.DeleteStateRequest, $root.contract.DeleteStateResponse, request, callback);
            }, "name", { value: "DeleteState" });
    
            /**
             * Calls DeleteState.
             * @function deleteState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IDeleteStateRequest} request DeleteStateRequest message or plain object
             * @returns {Promise<contract.DeleteStateResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.LedgerService#existsState}.
             * @memberof contract.LedgerService
             * @typedef ExistsStateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.ExistsStateResponse} [response] ExistsStateResponse
             */
    
            /**
             * Calls ExistsState.
             * @function existsState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IExistsStateRequest} request ExistsStateRequest message or plain object
             * @param {contract.LedgerService.ExistsStateCallback} callback Node-style callback called with the error, if any, and ExistsStateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LedgerService.prototype.existsState = function existsState(request, callback) {
                return this.rpcCall(existsState, $root.contract.ExistsStateRequest, $root.contract.ExistsStateResponse, request, callback);
            }, "name", { value: "ExistsState" });
    
            /**
             * Calls ExistsState.
             * @function existsState
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IExistsStateRequest} request ExistsStateRequest message or plain object
             * @returns {Promise<contract.ExistsStateResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.LedgerService#getStates}.
             * @memberof contract.LedgerService
             * @typedef GetStatesCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.GetStatesResponse} [response] GetStatesResponse
             */
    
            /**
             * Calls GetStates.
             * @function getStates
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IGetStatesRequest} request GetStatesRequest message or plain object
             * @param {contract.LedgerService.GetStatesCallback} callback Node-style callback called with the error, if any, and GetStatesResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LedgerService.prototype.getStates = function getStates(request, callback) {
                return this.rpcCall(getStates, $root.contract.GetStatesRequest, $root.contract.GetStatesResponse, request, callback);
            }, "name", { value: "GetStates" });
    
            /**
             * Calls GetStates.
             * @function getStates
             * @memberof contract.LedgerService
             * @instance
             * @param {contract.IGetStatesRequest} request GetStatesRequest message or plain object
             * @returns {Promise<contract.GetStatesResponse>} Promise
             * @variation 2
             */
    
            return LedgerService;
        })();
    
        contract.ContractService = (function() {
    
            /**
             * Constructs a new ContractService service.
             * @memberof contract
             * @classdesc Represents a ContractService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ContractService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (ContractService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ContractService;
    
            /**
             * Creates new ContractService service using the specified rpc implementation.
             * @function create
             * @memberof contract.ContractService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {ContractService} RPC service. Useful where requests and/or responses are streamed.
             */
            ContractService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link contract.ContractService#getMetadata}.
             * @memberof contract.ContractService
             * @typedef GetMetadataCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.GetMetadataResponse} [response] GetMetadataResponse
             */
    
            /**
             * Calls GetMetadata.
             * @function getMetadata
             * @memberof contract.ContractService
             * @instance
             * @param {contract.IGetMetadataRequest} request GetMetadataRequest message or plain object
             * @param {contract.ContractService.GetMetadataCallback} callback Node-style callback called with the error, if any, and GetMetadataResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractService.prototype.getMetadata = function getMetadata(request, callback) {
                return this.rpcCall(getMetadata, $root.contract.GetMetadataRequest, $root.contract.GetMetadataResponse, request, callback);
            }, "name", { value: "GetMetadata" });
    
            /**
             * Calls GetMetadata.
             * @function getMetadata
             * @memberof contract.ContractService
             * @instance
             * @param {contract.IGetMetadataRequest} request GetMetadataRequest message or plain object
             * @returns {Promise<contract.GetMetadataResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.ContractService#invokeTransaction}.
             * @memberof contract.ContractService
             * @typedef InvokeTransactionCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.InvokeTransactionResponse} [response] InvokeTransactionResponse
             */
    
            /**
             * Calls InvokeTransaction.
             * @function invokeTransaction
             * @memberof contract.ContractService
             * @instance
             * @param {contract.IInvokeTransactionRequest} request InvokeTransactionRequest message or plain object
             * @param {contract.ContractService.InvokeTransactionCallback} callback Node-style callback called with the error, if any, and InvokeTransactionResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractService.prototype.invokeTransaction = function invokeTransaction(request, callback) {
                return this.rpcCall(invokeTransaction, $root.contract.InvokeTransactionRequest, $root.contract.InvokeTransactionResponse, request, callback);
            }, "name", { value: "InvokeTransaction" });
    
            /**
             * Calls InvokeTransaction.
             * @function invokeTransaction
             * @memberof contract.ContractService
             * @instance
             * @param {contract.IInvokeTransactionRequest} request InvokeTransactionRequest message or plain object
             * @returns {Promise<contract.InvokeTransactionResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contract.ContractService#registerPeer}.
             * @memberof contract.ContractService
             * @typedef RegisterPeerCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contract.RegisterPeerResponse} [response] RegisterPeerResponse
             */
    
            /**
             * Calls RegisterPeer.
             * @function registerPeer
             * @memberof contract.ContractService
             * @instance
             * @param {contract.IRegisterPeerRequest} request RegisterPeerRequest message or plain object
             * @param {contract.ContractService.RegisterPeerCallback} callback Node-style callback called with the error, if any, and RegisterPeerResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractService.prototype.registerPeer = function registerPeer(request, callback) {
                return this.rpcCall(registerPeer, $root.contract.RegisterPeerRequest, $root.contract.RegisterPeerResponse, request, callback);
            }, "name", { value: "RegisterPeer" });
    
            /**
             * Calls RegisterPeer.
             * @function registerPeer
             * @memberof contract.ContractService
             * @instance
             * @param {contract.IRegisterPeerRequest} request RegisterPeerRequest message or plain object
             * @returns {Promise<contract.RegisterPeerResponse>} Promise
             * @variation 2
             */
    
            return ContractService;
        })();
    
        return contract;
    })();

    return $root;
});
