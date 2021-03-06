/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.exportSymbol('proto.sagittarius.media.v1.GetInfoRequest', null, global);
goog.exportSymbol('proto.sagittarius.media.v1.Info', null, global);
goog.exportSymbol('proto.sagittarius.media.v1.TrackInfo', null, global);
goog.exportSymbol('proto.sagittarius.media.v1.TrackInfo.Type', null, global);
goog.exportSymbol('proto.sagittarius.media.v1.UpdateInfoRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sagittarius.media.v1.Info = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sagittarius.media.v1.Info.repeatedFields_, null);
};
goog.inherits(proto.sagittarius.media.v1.Info, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sagittarius.media.v1.Info.displayName = 'proto.sagittarius.media.v1.Info';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sagittarius.media.v1.Info.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sagittarius.media.v1.Info.prototype.toObject = function(opt_includeInstance) {
  return proto.sagittarius.media.v1.Info.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sagittarius.media.v1.Info} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.Info.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tracksList: jspb.Message.toObjectList(msg.getTracksList(),
    proto.sagittarius.media.v1.TrackInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sagittarius.media.v1.Info}
 */
proto.sagittarius.media.v1.Info.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sagittarius.media.v1.Info;
  return proto.sagittarius.media.v1.Info.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sagittarius.media.v1.Info} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sagittarius.media.v1.Info}
 */
proto.sagittarius.media.v1.Info.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaHash(value);
      break;
    case 2:
      var value = new proto.sagittarius.media.v1.TrackInfo;
      reader.readMessage(value,proto.sagittarius.media.v1.TrackInfo.deserializeBinaryFromReader);
      msg.addTracks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sagittarius.media.v1.Info.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sagittarius.media.v1.Info.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sagittarius.media.v1.Info} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.Info.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTracksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sagittarius.media.v1.TrackInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string media_hash = 1;
 * @return {string}
 */
proto.sagittarius.media.v1.Info.prototype.getMediaHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sagittarius.media.v1.Info.prototype.setMediaHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated TrackInfo tracks = 2;
 * @return {!Array.<!proto.sagittarius.media.v1.TrackInfo>}
 */
proto.sagittarius.media.v1.Info.prototype.getTracksList = function() {
  return /** @type{!Array.<!proto.sagittarius.media.v1.TrackInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sagittarius.media.v1.TrackInfo, 2));
};


/** @param {!Array.<!proto.sagittarius.media.v1.TrackInfo>} value */
proto.sagittarius.media.v1.Info.prototype.setTracksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sagittarius.media.v1.TrackInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sagittarius.media.v1.TrackInfo}
 */
proto.sagittarius.media.v1.Info.prototype.addTracks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sagittarius.media.v1.TrackInfo, opt_index);
};


proto.sagittarius.media.v1.Info.prototype.clearTracksList = function() {
  this.setTracksList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sagittarius.media.v1.TrackInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sagittarius.media.v1.TrackInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sagittarius.media.v1.TrackInfo.displayName = 'proto.sagittarius.media.v1.TrackInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sagittarius.media.v1.TrackInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sagittarius.media.v1.TrackInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sagittarius.media.v1.TrackInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.TrackInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    types: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sagittarius.media.v1.TrackInfo}
 */
proto.sagittarius.media.v1.TrackInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sagittarius.media.v1.TrackInfo;
  return proto.sagittarius.media.v1.TrackInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sagittarius.media.v1.TrackInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sagittarius.media.v1.TrackInfo}
 */
proto.sagittarius.media.v1.TrackInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sagittarius.media.v1.TrackInfo.Type} */ (reader.readEnum());
      msg.setTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sagittarius.media.v1.TrackInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sagittarius.media.v1.TrackInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sagittarius.media.v1.TrackInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.TrackInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypes();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sagittarius.media.v1.TrackInfo.Type = {
  VIDEO: 0,
  AUDIO: 1,
  TEXT: 2,
  OTHER: 3
};

/**
 * optional Type types = 1;
 * @return {!proto.sagittarius.media.v1.TrackInfo.Type}
 */
proto.sagittarius.media.v1.TrackInfo.prototype.getTypes = function() {
  return /** @type {!proto.sagittarius.media.v1.TrackInfo.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.sagittarius.media.v1.TrackInfo.Type} value */
proto.sagittarius.media.v1.TrackInfo.prototype.setTypes = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sagittarius.media.v1.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sagittarius.media.v1.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sagittarius.media.v1.GetInfoRequest.displayName = 'proto.sagittarius.media.v1.GetInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sagittarius.media.v1.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sagittarius.media.v1.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sagittarius.media.v1.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaHash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sagittarius.media.v1.GetInfoRequest}
 */
proto.sagittarius.media.v1.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sagittarius.media.v1.GetInfoRequest;
  return proto.sagittarius.media.v1.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sagittarius.media.v1.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sagittarius.media.v1.GetInfoRequest}
 */
proto.sagittarius.media.v1.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sagittarius.media.v1.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sagittarius.media.v1.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sagittarius.media.v1.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string media_hash = 1;
 * @return {string}
 */
proto.sagittarius.media.v1.GetInfoRequest.prototype.getMediaHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sagittarius.media.v1.GetInfoRequest.prototype.setMediaHash = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sagittarius.media.v1.UpdateInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sagittarius.media.v1.UpdateInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sagittarius.media.v1.UpdateInfoRequest.displayName = 'proto.sagittarius.media.v1.UpdateInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sagittarius.media.v1.UpdateInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sagittarius.media.v1.UpdateInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.UpdateInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: (f = msg.getInfo()) && proto.sagittarius.media.v1.Info.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sagittarius.media.v1.UpdateInfoRequest}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sagittarius.media.v1.UpdateInfoRequest;
  return proto.sagittarius.media.v1.UpdateInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sagittarius.media.v1.UpdateInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sagittarius.media.v1.UpdateInfoRequest}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaHash(value);
      break;
    case 2:
      var value = new proto.sagittarius.media.v1.Info;
      reader.readMessage(value,proto.sagittarius.media.v1.Info.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sagittarius.media.v1.UpdateInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sagittarius.media.v1.UpdateInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sagittarius.media.v1.UpdateInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sagittarius.media.v1.Info.serializeBinaryToWriter
    );
  }
};


/**
 * optional string media_hash = 1;
 * @return {string}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.getMediaHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.setMediaHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Info info = 2;
 * @return {?proto.sagittarius.media.v1.Info}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.getInfo = function() {
  return /** @type{?proto.sagittarius.media.v1.Info} */ (
    jspb.Message.getWrapperField(this, proto.sagittarius.media.v1.Info, 2));
};


/** @param {?proto.sagittarius.media.v1.Info|undefined} value */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.sagittarius.media.v1.UpdateInfoRequest.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.sagittarius.media.v1.UpdateInfoRequest.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.sagittarius.media.v1);
