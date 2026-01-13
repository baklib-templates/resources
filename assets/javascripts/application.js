(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/es-errors/type.js
  var require_type = __commonJS({
    "node_modules/es-errors/type.js"(exports, module) {
      "use strict";
      module.exports = TypeError;
    }
  });

  // (disabled):node_modules/object-inspect/util.inspect
  var require_util = __commonJS({
    "(disabled):node_modules/object-inspect/util.inspect"() {
    }
  });

  // node_modules/object-inspect/index.js
  var require_object_inspect = __commonJS({
    "node_modules/object-inspect/index.js"(exports, module) {
      var hasMap = typeof Map === "function" && Map.prototype;
      var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
      var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
      var mapForEach = hasMap && Map.prototype.forEach;
      var hasSet = typeof Set === "function" && Set.prototype;
      var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
      var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
      var setForEach = hasSet && Set.prototype.forEach;
      var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
      var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
      var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
      var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
      var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
      var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
      var booleanValueOf = Boolean.prototype.valueOf;
      var objectToString3 = Object.prototype.toString;
      var functionToString = Function.prototype.toString;
      var $match = String.prototype.match;
      var $slice = String.prototype.slice;
      var $replace = String.prototype.replace;
      var $toUpperCase = String.prototype.toUpperCase;
      var $toLowerCase = String.prototype.toLowerCase;
      var $test = RegExp.prototype.test;
      var $concat = Array.prototype.concat;
      var $join = Array.prototype.join;
      var $arrSlice = Array.prototype.slice;
      var $floor = Math.floor;
      var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
      var gOPS = Object.getOwnPropertySymbols;
      var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
      var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
      var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
        return O.__proto__;
      } : null);
      function addNumericSeparator(num, str) {
        if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
          return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === "number") {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var utilInspect = require_util();
      var inspectCustom = utilInspect.custom;
      var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
      var quotes = {
        __proto__: null,
        "double": '"',
        single: "'"
      };
      var quoteREs = {
        __proto__: null,
        "double": /(["\\])/g,
        single: /(['\\])/g
      };
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (has2(opts, "quoteStyle") && !has2(quotes, opts.quoteStyle)) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (has2(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has2(opts, "customInspect") ? opts.customInspect : true;
        if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (has2(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has2(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;
        if (typeof obj === "undefined") {
          return "undefined";
        }
        if (obj === null) {
          return "null";
        }
        if (typeof obj === "boolean") {
          return obj ? "true" : "false";
        }
        if (typeof obj === "string") {
          return inspectString(obj, opts);
        }
        if (typeof obj === "number") {
          if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === "bigint") {
          var bigIntStr = String(obj) + "n";
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }
        var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
        if (typeof depth === "undefined") {
          depth = 0;
        }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
          return isArray3(obj) ? "[Array]" : "[Object]";
        }
        var indent = getIndent(opts, depth);
        if (typeof seen === "undefined") {
          seen = [];
        } else if (indexOf(seen, obj) >= 0) {
          return "[Circular]";
        }
        function inspect(value, from, noIndent) {
          if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
          }
          if (noIndent) {
            var newOpts = {
              depth: opts.depth
            };
            if (has2(opts, "quoteStyle")) {
              newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if (typeof obj === "function" && !isRegExp(obj)) {
          var name = nameOf(obj);
          var keys = arrObjKeys(obj, inspect);
          return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
        }
        if (isSymbol2(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
          return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement3(obj)) {
          var s = "<" + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
            s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
          }
          s += ">";
          if (obj.childNodes && obj.childNodes.length) {
            s += "...";
          }
          s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
          return s;
        }
        if (isArray3(obj)) {
          if (obj.length === 0) {
            return "[]";
          }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
          }
          return "[ " + $join.call(xs, ", ") + " ]";
        }
        if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
          }
          if (parts.length === 0) {
            return "[" + String(obj) + "]";
          }
          return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if (typeof obj === "object" && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
          }
        }
        if (isMap2(obj)) {
          var mapParts = [];
          if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
          }
          return collectionOf("Map", mapSize.call(obj), mapParts, indent);
        }
        if (isSet(obj)) {
          var setParts = [];
          if (setForEach) {
            setForEach.call(obj, function(value) {
              setParts.push(inspect(value, obj));
            });
          }
          return collectionOf("Set", setSize.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
          return weakCollectionOf("WeakMap");
        }
        if (isWeakSet(obj)) {
          return weakCollectionOf("WeakSet");
        }
        if (isWeakRef(obj)) {
          return weakCollectionOf("WeakRef");
        }
        if (isNumber(obj)) {
          return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean(obj)) {
          return markBoxed(booleanValueOf.call(obj));
        }
        if (isString2(obj)) {
          return markBoxed(inspect(String(obj)));
        }
        if (typeof window !== "undefined" && obj === window) {
          return "{ [object Window] }";
        }
        if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
          return "{ [object globalThis] }";
        }
        if (!isDate(obj) && !isRegExp(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? "" : "null prototype";
          var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
          var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
          var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
          if (ys.length === 0) {
            return tag + "{}";
          }
          if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
          }
          return tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      function wrapQuotes(s, defaultStyle, opts) {
        var style = opts.quoteStyle || defaultStyle;
        var quoteChar = quotes[style];
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, "&quot;");
      }
      function canTrustToString(obj) {
        return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
      }
      function isArray3(obj) {
        return toStr(obj) === "[object Array]" && canTrustToString(obj);
      }
      function isDate(obj) {
        return toStr(obj) === "[object Date]" && canTrustToString(obj);
      }
      function isRegExp(obj) {
        return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
      }
      function isError(obj) {
        return toStr(obj) === "[object Error]" && canTrustToString(obj);
      }
      function isString2(obj) {
        return toStr(obj) === "[object String]" && canTrustToString(obj);
      }
      function isNumber(obj) {
        return toStr(obj) === "[object Number]" && canTrustToString(obj);
      }
      function isBoolean(obj) {
        return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
      }
      function isSymbol2(obj) {
        if (hasShammedSymbols) {
          return obj && typeof obj === "object" && obj instanceof Symbol;
        }
        if (typeof obj === "symbol") {
          return true;
        }
        if (!obj || typeof obj !== "object" || !symToString) {
          return false;
        }
        try {
          symToString.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isBigInt(obj) {
        if (!obj || typeof obj !== "object" || !bigIntValueOf) {
          return false;
        }
        try {
          bigIntValueOf.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      var hasOwn2 = Object.prototype.hasOwnProperty || function(key) {
        return key in this;
      };
      function has2(obj, key) {
        return hasOwn2.call(obj, key);
      }
      function toStr(obj) {
        return objectToString3.call(obj);
      }
      function nameOf(f) {
        if (f.name) {
          return f.name;
        }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) {
          return m[1];
        }
        return null;
      }
      function indexOf(xs, x) {
        if (xs.indexOf) {
          return xs.indexOf(x);
        }
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) {
            return i;
          }
        }
        return -1;
      }
      function isMap2(x) {
        if (!mapSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          mapSize.call(x);
          try {
            setSize.call(x);
          } catch (s) {
            return true;
          }
          return x instanceof Map;
        } catch (e) {
        }
        return false;
      }
      function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakMapHas.call(x, weakMapHas);
          try {
            weakSetHas.call(x, weakSetHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakMap;
        } catch (e) {
        }
        return false;
      }
      function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakRefDeref.call(x);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isSet(x) {
        if (!setSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          setSize.call(x);
          try {
            mapSize.call(x);
          } catch (m) {
            return true;
          }
          return x instanceof Set;
        } catch (e) {
        }
        return false;
      }
      function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakSetHas.call(x, weakSetHas);
          try {
            weakMapHas.call(x, weakMapHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakSet;
        } catch (e) {
        }
        return false;
      }
      function isElement3(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
          return true;
        }
        return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        var quoteRE = quoteREs[opts.quoteStyle || "single"];
        quoteRE.lastIndex = 0;
        var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s, "single", opts);
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0);
        var x = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[n];
        if (x) {
          return "\\" + x;
        }
        return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size2, entries, indent) {
        var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
        return type + " (" + size2 + ") {" + joinedEntries + "}";
      }
      function singleLineValues(xs) {
        for (var i = 0; i < xs.length; i++) {
          if (indexOf(xs[i], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }
      function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === "	") {
          baseIndent = "	";
        } else if (typeof opts.indent === "number" && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), " ");
        } else {
          return null;
        }
        return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
        };
      }
      function indentedJoin(xs, indent) {
        if (xs.length === 0) {
          return "";
        }
        var lineJoiner = "\n" + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray3(obj);
        var xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
            xs[i] = has2(obj, i) ? inspect(obj[i], obj) : "";
          }
        }
        var syms = typeof gOPS === "function" ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
            symMap["$" + syms[k]] = syms[k];
          }
        }
        for (var key in obj) {
          if (!has2(obj, key)) {
            continue;
          }
          if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
          }
          if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue;
          } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
          } else {
            xs.push(key + ": " + inspect(obj[key], obj));
          }
        }
        if (typeof gOPS === "function") {
          for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
              xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
          }
        }
        return xs;
      }
    }
  });

  // node_modules/side-channel-list/index.js
  var require_side_channel_list = __commonJS({
    "node_modules/side-channel-list/index.js"(exports, module) {
      "use strict";
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var listGetNode = function(list, key, isDelete) {
        var prev = list;
        var curr;
        for (; (curr = prev.next) != null; prev = curr) {
          if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
              curr.next = /** @type {NonNullable<typeof list.next>} */
              list.next;
              list.next = curr;
            }
            return curr;
          }
        }
      };
      var listGet = function(objects, key) {
        if (!objects) {
          return void 0;
        }
        var node = listGetNode(objects, key);
        return node && node.value;
      };
      var listSet = function(objects, key, value) {
        var node = listGetNode(objects, key);
        if (node) {
          node.value = value;
        } else {
          objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
          {
            // eslint-disable-line no-param-reassign, no-extra-parens
            key,
            next: objects.next,
            value
          };
        }
      };
      var listHas = function(objects, key) {
        if (!objects) {
          return false;
        }
        return !!listGetNode(objects, key);
      };
      var listDelete = function(objects, key) {
        if (objects) {
          return listGetNode(objects, key, true);
        }
      };
      module.exports = function getSideChannelList() {
        var $o;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
              $o = void 0;
            }
            return !!deletedNode;
          },
          get: function(key) {
            return listGet($o, key);
          },
          has: function(key) {
            return listHas($o, key);
          },
          set: function(key, value) {
            if (!$o) {
              $o = {
                next: void 0
              };
            }
            listSet(
              /** @type {NonNullable<typeof $o>} */
              $o,
              key,
              value
            );
          }
        };
        return channel;
      };
    }
  });

  // node_modules/es-object-atoms/index.js
  var require_es_object_atoms = __commonJS({
    "node_modules/es-object-atoms/index.js"(exports, module) {
      "use strict";
      module.exports = Object;
    }
  });

  // node_modules/es-errors/index.js
  var require_es_errors = __commonJS({
    "node_modules/es-errors/index.js"(exports, module) {
      "use strict";
      module.exports = Error;
    }
  });

  // node_modules/es-errors/eval.js
  var require_eval = __commonJS({
    "node_modules/es-errors/eval.js"(exports, module) {
      "use strict";
      module.exports = EvalError;
    }
  });

  // node_modules/es-errors/range.js
  var require_range = __commonJS({
    "node_modules/es-errors/range.js"(exports, module) {
      "use strict";
      module.exports = RangeError;
    }
  });

  // node_modules/es-errors/ref.js
  var require_ref = __commonJS({
    "node_modules/es-errors/ref.js"(exports, module) {
      "use strict";
      module.exports = ReferenceError;
    }
  });

  // node_modules/es-errors/syntax.js
  var require_syntax = __commonJS({
    "node_modules/es-errors/syntax.js"(exports, module) {
      "use strict";
      module.exports = SyntaxError;
    }
  });

  // node_modules/es-errors/uri.js
  var require_uri = __commonJS({
    "node_modules/es-errors/uri.js"(exports, module) {
      "use strict";
      module.exports = URIError;
    }
  });

  // node_modules/math-intrinsics/abs.js
  var require_abs = __commonJS({
    "node_modules/math-intrinsics/abs.js"(exports, module) {
      "use strict";
      module.exports = Math.abs;
    }
  });

  // node_modules/math-intrinsics/floor.js
  var require_floor = __commonJS({
    "node_modules/math-intrinsics/floor.js"(exports, module) {
      "use strict";
      module.exports = Math.floor;
    }
  });

  // node_modules/math-intrinsics/max.js
  var require_max = __commonJS({
    "node_modules/math-intrinsics/max.js"(exports, module) {
      "use strict";
      module.exports = Math.max;
    }
  });

  // node_modules/math-intrinsics/min.js
  var require_min = __commonJS({
    "node_modules/math-intrinsics/min.js"(exports, module) {
      "use strict";
      module.exports = Math.min;
    }
  });

  // node_modules/math-intrinsics/pow.js
  var require_pow = __commonJS({
    "node_modules/math-intrinsics/pow.js"(exports, module) {
      "use strict";
      module.exports = Math.pow;
    }
  });

  // node_modules/math-intrinsics/round.js
  var require_round = __commonJS({
    "node_modules/math-intrinsics/round.js"(exports, module) {
      "use strict";
      module.exports = Math.round;
    }
  });

  // node_modules/math-intrinsics/isNaN.js
  var require_isNaN = __commonJS({
    "node_modules/math-intrinsics/isNaN.js"(exports, module) {
      "use strict";
      module.exports = Number.isNaN || function isNaN2(a) {
        return a !== a;
      };
    }
  });

  // node_modules/math-intrinsics/sign.js
  var require_sign = __commonJS({
    "node_modules/math-intrinsics/sign.js"(exports, module) {
      "use strict";
      var $isNaN = require_isNaN();
      module.exports = function sign(number) {
        if ($isNaN(number) || number === 0) {
          return number;
        }
        return number < 0 ? -1 : 1;
      };
    }
  });

  // node_modules/gopd/gOPD.js
  var require_gOPD = __commonJS({
    "node_modules/gopd/gOPD.js"(exports, module) {
      "use strict";
      module.exports = Object.getOwnPropertyDescriptor;
    }
  });

  // node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "node_modules/gopd/index.js"(exports, module) {
      "use strict";
      var $gOPD = require_gOPD();
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/es-define-property/index.js
  var require_es_define_property = __commonJS({
    "node_modules/es-define-property/index.js"(exports, module) {
      "use strict";
      var $defineProperty = Object.defineProperty || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (var _ in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = (
            /** @type {PropertyDescriptor} */
            Object.getOwnPropertyDescriptor(obj, sym)
          );
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/get-proto/Reflect.getPrototypeOf.js
  var require_Reflect_getPrototypeOf = __commonJS({
    "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
      "use strict";
      module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
    }
  });

  // node_modules/get-proto/Object.getPrototypeOf.js
  var require_Object_getPrototypeOf = __commonJS({
    "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
      "use strict";
      var $Object = require_es_object_atoms();
      module.exports = $Object.getPrototypeOf || null;
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var toStr = Object.prototype.toString;
      var max2 = Math.max;
      var funcType = "[object Function]";
      var concatty = function concatty2(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy2(arrLike, offset2) {
        var arr = [];
        for (var i = offset2 || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function(arr, joiner) {
        var str = "";
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind3(that) {
        var target = this;
        if (typeof target !== "function" || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              concatty(args, arguments)
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(
            that,
            concatty(args, arguments)
          );
        };
        var boundLength = max2(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = "$" + i;
        }
        bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/call-bind-apply-helpers/functionCall.js
  var require_functionCall = __commonJS({
    "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
      "use strict";
      module.exports = Function.prototype.call;
    }
  });

  // node_modules/call-bind-apply-helpers/functionApply.js
  var require_functionApply = __commonJS({
    "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
      "use strict";
      module.exports = Function.prototype.apply;
    }
  });

  // node_modules/call-bind-apply-helpers/reflectApply.js
  var require_reflectApply = __commonJS({
    "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
      "use strict";
      module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
    }
  });

  // node_modules/call-bind-apply-helpers/actualApply.js
  var require_actualApply = __commonJS({
    "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
      "use strict";
      var bind3 = require_function_bind();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var $reflectApply = require_reflectApply();
      module.exports = $reflectApply || bind3.call($call, $apply);
    }
  });

  // node_modules/call-bind-apply-helpers/index.js
  var require_call_bind_apply_helpers = __commonJS({
    "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
      "use strict";
      var bind3 = require_function_bind();
      var $TypeError = require_type();
      var $call = require_functionCall();
      var $actualApply = require_actualApply();
      module.exports = function callBindBasic(args) {
        if (args.length < 1 || typeof args[0] !== "function") {
          throw new $TypeError("a function is required");
        }
        return $actualApply(bind3, $call, args);
      };
    }
  });

  // node_modules/dunder-proto/get.js
  var require_get = __commonJS({
    "node_modules/dunder-proto/get.js"(exports, module) {
      "use strict";
      var callBind = require_call_bind_apply_helpers();
      var gOPD = require_gopd();
      var hasProtoAccessor;
      try {
        hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
        [].__proto__ === Array.prototype;
      } catch (e) {
        if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
          throw e;
        }
      }
      var desc = !!hasProtoAccessor && gOPD && gOPD(
        Object.prototype,
        /** @type {keyof typeof Object.prototype} */
        "__proto__"
      );
      var $Object = Object;
      var $getPrototypeOf = $Object.getPrototypeOf;
      module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
        /** @type {import('./get')} */
        function getDunder(value) {
          return $getPrototypeOf(value == null ? value : $Object(value));
        }
      ) : false;
    }
  });

  // node_modules/get-proto/index.js
  var require_get_proto = __commonJS({
    "node_modules/get-proto/index.js"(exports, module) {
      "use strict";
      var reflectGetProto = require_Reflect_getPrototypeOf();
      var originalGetProto = require_Object_getPrototypeOf();
      var getDunderProto = require_get();
      module.exports = reflectGetProto ? function getProto2(O) {
        return reflectGetProto(O);
      } : originalGetProto ? function getProto2(O) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new TypeError("getProto: not an object");
        }
        return originalGetProto(O);
      } : getDunderProto ? function getProto2(O) {
        return getDunderProto(O);
      } : null;
    }
  });

  // node_modules/hasown/index.js
  var require_hasown = __commonJS({
    "node_modules/hasown/index.js"(exports, module) {
      "use strict";
      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind3 = require_function_bind();
      module.exports = bind3.call(call, $hasOwn);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $Object = require_es_object_atoms();
      var $Error = require_es_errors();
      var $EvalError = require_eval();
      var $RangeError = require_range();
      var $ReferenceError = require_ref();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var $URIError = require_uri();
      var abs = require_abs();
      var floor = require_floor();
      var max2 = require_max();
      var min2 = require_min();
      var pow = require_pow();
      var round2 = require_round();
      var sign = require_sign();
      var $Function = Function;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = require_gopd();
      var $defineProperty = require_es_define_property();
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? (function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      })() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto2 = require_get_proto();
      var $ObjectGPO = require_Object_getPrototypeOf();
      var $ReflectGPO = require_Reflect_getPrototypeOf();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined2 : getProto2(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto2 ? getProto2([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": $Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": $EvalError,
        "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto2 ? undefined2 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": $Object,
        "%Object.getOwnPropertyDescriptor%": $gOPD,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": $RangeError,
        "%ReferenceError%": $ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto2 ? undefined2 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": $URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        "%Function.prototype.call%": $call,
        "%Function.prototype.apply%": $apply,
        "%Object.defineProperty%": $defineProperty,
        "%Object.getPrototypeOf%": $ObjectGPO,
        "%Math.abs%": abs,
        "%Math.floor%": floor,
        "%Math.max%": max2,
        "%Math.min%": min2,
        "%Math.pow%": pow,
        "%Math.round%": round2,
        "%Math.sign%": sign,
        "%Reflect.getPrototypeOf%": $ReflectGPO
      };
      if (getProto2) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto2(getProto2(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn3 = doEval2("%AsyncGeneratorFunction%");
          if (fn3) {
            value = fn3.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto2) {
            value = getProto2(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind3 = require_function_bind();
      var hasOwn2 = require_hasown();
      var $concat = bind3.call($call, Array.prototype.concat);
      var $spliceApply = bind3.call($apply, Array.prototype.splice);
      var $replace = bind3.call($call, String.prototype.replace);
      var $strSlice = bind3.call($call, String.prototype.slice);
      var $exec = bind3.call($call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn2(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn2(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn2(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void undefined2;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn2(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/call-bound/index.js
  var require_call_bound = __commonJS({
    "node_modules/call-bound/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBindBasic = require_call_bind_apply_helpers();
      var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = (
          /** @type {(this: unknown, ...args: unknown[]) => unknown} */
          GetIntrinsic(name, !!allowMissing)
        );
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBindBasic(
            /** @type {const} */
            [intrinsic]
          );
        }
        return intrinsic;
      };
    }
  });

  // node_modules/side-channel-map/index.js
  var require_side_channel_map = __commonJS({
    "node_modules/side-channel-map/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_call_bound();
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var $Map = GetIntrinsic("%Map%", true);
      var $mapGet = callBound("Map.prototype.get", true);
      var $mapSet = callBound("Map.prototype.set", true);
      var $mapHas = callBound("Map.prototype.has", true);
      var $mapDelete = callBound("Map.prototype.delete", true);
      var $mapSize = callBound("Map.prototype.size", true);
      module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
      function getSideChannelMap() {
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($m) {
              var result = $mapDelete($m, key);
              if ($mapSize($m) === 0) {
                $m = void 0;
              }
              return result;
            }
            return false;
          },
          get: function(key) {
            if ($m) {
              return $mapGet($m, key);
            }
          },
          has: function(key) {
            if ($m) {
              return $mapHas($m, key);
            }
            return false;
          },
          set: function(key, value) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          }
        };
        return channel;
      };
    }
  });

  // node_modules/side-channel-weakmap/index.js
  var require_side_channel_weakmap = __commonJS({
    "node_modules/side-channel-weakmap/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_call_bound();
      var inspect = require_object_inspect();
      var getSideChannelMap = require_side_channel_map();
      var $TypeError = require_type();
      var $WeakMap = GetIntrinsic("%WeakMap%", true);
      var $weakMapGet = callBound("WeakMap.prototype.get", true);
      var $weakMapSet = callBound("WeakMap.prototype.set", true);
      var $weakMapHas = callBound("WeakMap.prototype.has", true);
      var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
      module.exports = $WeakMap ? (
        /** @type {Exclude<import('.'), false>} */
        function getSideChannelWeakMap() {
          var $wm;
          var $m;
          var channel = {
            assert: function(key) {
              if (!channel.has(key)) {
                throw new $TypeError("Side channel does not contain " + inspect(key));
              }
            },
            "delete": function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapDelete($wm, key);
                }
              } else if (getSideChannelMap) {
                if ($m) {
                  return $m["delete"](key);
                }
              }
              return false;
            },
            get: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapGet($wm, key);
                }
              }
              return $m && $m.get(key);
            },
            has: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapHas($wm, key);
                }
              }
              return !!$m && $m.has(key);
            },
            set: function(key, value) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) {
                  $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
              } else if (getSideChannelMap) {
                if (!$m) {
                  $m = getSideChannelMap();
                }
                $m.set(key, value);
              }
            }
          };
          return channel;
        }
      ) : getSideChannelMap;
    }
  });

  // node_modules/side-channel/index.js
  var require_side_channel = __commonJS({
    "node_modules/side-channel/index.js"(exports, module) {
      "use strict";
      var $TypeError = require_type();
      var inspect = require_object_inspect();
      var getSideChannelList = require_side_channel_list();
      var getSideChannelMap = require_side_channel_map();
      var getSideChannelWeakMap = require_side_channel_weakmap();
      var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
      module.exports = function getSideChannel() {
        var $channelData;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            return !!$channelData && $channelData["delete"](key);
          },
          get: function(key) {
            return $channelData && $channelData.get(key);
          },
          has: function(key) {
            return !!$channelData && $channelData.has(key);
          },
          set: function(key, value) {
            if (!$channelData) {
              $channelData = makeChannel();
            }
            $channelData.set(key, value);
          }
        };
        return channel;
      };
    }
  });

  // node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      var replace = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
          },
          RFC3986: function(value) {
            return String(value);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      var formats = require_formats();
      var getSideChannel = require_side_channel();
      var has2 = Object.prototype.hasOwnProperty;
      var isArray3 = Array.isArray;
      var overflowChannel = getSideChannel();
      var markOverflow = function markOverflow2(obj, maxIndex) {
        overflowChannel.set(obj, maxIndex);
        return obj;
      };
      var isOverflow = function isOverflow2(obj) {
        return overflowChannel.has(obj);
      };
      var getMaxIndex = function getMaxIndex2(obj) {
        return overflowChannel.get(obj);
      };
      var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
        overflowChannel.set(obj, maxIndex);
      };
      var hexTable = (function() {
        var array = [];
        for (var i = 0; i < 256; ++i) {
          array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
        }
        return array;
      })();
      var compactQueue = function compactQueue2(queue2) {
        while (queue2.length > 1) {
          var item = queue2.pop();
          var obj = item.obj[item.prop];
          if (isArray3(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
              if (typeof obj[j] !== "undefined") {
                compacted.push(obj[j]);
              }
            }
            item.obj[item.prop] = compacted;
          }
        }
      };
      var arrayToObject = function arrayToObject2(source, options) {
        var obj = options && options.plainObjects ? { __proto__: null } : {};
        for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
          }
        }
        return obj;
      };
      var merge = function merge2(target, source, options) {
        if (!source) {
          return target;
        }
        if (typeof source !== "object" && typeof source !== "function") {
          if (isArray3(target)) {
            target.push(source);
          } else if (target && typeof target === "object") {
            if (isOverflow(target)) {
              var newIndex = getMaxIndex(target) + 1;
              target[newIndex] = source;
              setMaxIndex(target, newIndex);
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has2.call(Object.prototype, source)) {
              target[source] = true;
            }
          } else {
            return [target, source];
          }
          return target;
        }
        if (!target || typeof target !== "object") {
          if (isOverflow(source)) {
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
            for (var m = 0; m < sourceKeys.length; m++) {
              var oldKey = parseInt(sourceKeys[m], 10);
              result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
          }
          return [target].concat(source);
        }
        var mergeTarget = target;
        if (isArray3(target) && !isArray3(source)) {
          mergeTarget = arrayToObject(target, options);
        }
        if (isArray3(target) && isArray3(source)) {
          source.forEach(function(item, i) {
            if (has2.call(target, i)) {
              var targetItem = target[i];
              if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                target[i] = merge2(targetItem, item, options);
              } else {
                target.push(item);
              }
            } else {
              target[i] = item;
            }
          });
          return target;
        }
        return Object.keys(source).reduce(function(acc, key) {
          var value = source[key];
          if (has2.call(acc, key)) {
            acc[key] = merge2(acc[key], value, options);
          } else {
            acc[key] = value;
          }
          return acc;
        }, mergeTarget);
      };
      var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function(acc, key) {
          acc[key] = source[key];
          return acc;
        }, target);
      };
      var decode = function(str, defaultDecoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      };
      var limit = 1024;
      var encode = function encode2(str, defaultEncoder, charset, kind, format) {
        if (str.length === 0) {
          return str;
        }
        var string = str;
        if (typeof str === "symbol") {
          string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string = String(str);
        }
        if (charset === "iso-8859-1") {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var j = 0; j < string.length; j += limit) {
          var segment = string.length >= limit ? string.slice(j, j + limit) : string;
          var arr = [];
          for (var i = 0; i < segment.length; ++i) {
            var c = segment.charCodeAt(i);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
              arr[arr.length] = segment.charAt(i);
              continue;
            }
            if (c < 128) {
              arr[arr.length] = hexTable[c];
              continue;
            }
            if (c < 2048) {
              arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
              continue;
            }
            if (c < 55296 || c >= 57344) {
              arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
              continue;
            }
            i += 1;
            c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
            arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
          }
          out += arr.join("");
        }
        return out;
      };
      var compact = function compact2(value) {
        var queue2 = [{ obj: { o: value }, prop: "o" }];
        var refs = [];
        for (var i = 0; i < queue2.length; ++i) {
          var item = queue2[i];
          var obj = item.obj[item.prop];
          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
              queue2.push({ obj, prop: key });
              refs.push(val);
            }
          }
        }
        compactQueue(queue2);
        return value;
      };
      var isRegExp = function isRegExp2(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer = function isBuffer2(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a, b, arrayLimit, plainObjects) {
        if (isOverflow(a)) {
          var newIndex = getMaxIndex(a) + 1;
          a[newIndex] = b;
          setMaxIndex(a, newIndex);
          return a;
        }
        var result = [].concat(a, b);
        if (result.length > arrayLimit) {
          return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
        }
        return result;
      };
      var maybeMap = function maybeMap2(val, fn3) {
        if (isArray3(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn3(val[i]));
          }
          return mapped;
        }
        return fn3(val);
      };
      module.exports = {
        arrayToObject,
        assign,
        combine,
        compact,
        decode,
        encode,
        isBuffer,
        isOverflow,
        isRegExp,
        maybeMap,
        merge
      };
    }
  });

  // node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      var getSideChannel = require_side_channel();
      var utils = require_utils();
      var formats = require_formats();
      var has2 = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix2) {
          return prefix2 + "[]";
        },
        comma: "comma",
        indices: function indices(prefix2, key) {
          return prefix2 + "[" + key + "]";
        },
        repeat: function repeat(prefix2) {
          return prefix2;
        }
      };
      var isArray3 = Array.isArray;
      var push2 = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push2.apply(arr, isArray3(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults = {
        addQueryPrefix: false,
        allowDots: false,
        allowEmptyArrays: false,
        arrayFormat: "indices",
        charset: "utf-8",
        charsetSentinel: false,
        commaRoundTrip: false,
        delimiter: "&",
        encode: true,
        encodeDotInKeys: false,
        encoder: utils.encode,
        encodeValuesOnly: false,
        filter: void 0,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
          return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
        return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
      };
      var sentinel = {};
      var stringify = function stringify2(object, prefix2, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
        var obj = object;
        var tmpSc = sideChannel;
        var step = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
          var pos = tmpSc.get(object);
          step += 1;
          if (typeof pos !== "undefined") {
            if (pos === step) {
              throw new RangeError("Cyclic object value");
            } else {
              findFlag = true;
            }
          }
          if (typeof tmpSc.get(sentinel) === "undefined") {
            step = 0;
          }
        }
        if (typeof filter === "function") {
          obj = filter(prefix2, obj);
        } else if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray3(obj)) {
          obj = utils.maybeMap(obj, function(value2) {
            if (value2 instanceof Date) {
              return serializeDate(value2);
            }
            return value2;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix2, defaults.encoder, charset, "key", format) : prefix2;
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix2 : encoder(prefix2, defaults.encoder, charset, "key", format);
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
          }
          return [formatter(prefix2) + "=" + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === "undefined") {
          return values;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray3(obj)) {
          if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
          }
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray3(filter)) {
          objKeys = filter;
        } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
        }
        var encodedPrefix = encodeDotInKeys ? String(prefix2).replace(/\./g, "%2E") : String(prefix2);
        var adjustedPrefix = commaRoundTrip && isArray3(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
        if (allowEmptyArrays && isArray3(obj) && obj.length === 0) {
          return adjustedPrefix + "[]";
        }
        for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
          if (skipNulls && value === null) {
            continue;
          }
          var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
          var keyPrefix = isArray3(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
          sideChannel.set(object, step);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values, stringify2(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            allowEmptyArrays,
            strictNullHandling,
            skipNulls,
            encodeDotInKeys,
            generateArrayPrefix === "comma" && encodeValuesOnly && isArray3(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
          ));
        }
        return values;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults;
        }
        if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        }
        if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
          throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset = opts.charset || defaults.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has2.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format = opts.format;
        }
        var formatter = formats.formatters[format];
        var filter = defaults.filter;
        if (typeof opts.filter === "function" || isArray3(opts.filter)) {
          filter = opts.filter;
        }
        var arrayFormat;
        if (opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if ("indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = defaults.arrayFormat;
        }
        if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        }
        var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
          arrayFormat,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
          commaRoundTrip: !!opts.commaRoundTrip,
          delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
          encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter,
          format,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
        };
      };
      module.exports = function(object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);
        var objKeys;
        var filter;
        if (typeof options.filter === "function") {
          filter = options.filter;
          obj = filter("", obj);
        } else if (isArray3(options.filter)) {
          filter = options.filter;
          objKeys = filter;
        }
        var keys = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
        var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options.sort) {
          objKeys.sort(options.sort);
        }
        var sideChannel = getSideChannel();
        for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
          var value = obj[key];
          if (options.skipNulls && value === null) {
            continue;
          }
          pushToArray(keys, stringify(
            value,
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.allowEmptyArrays,
            options.strictNullHandling,
            options.skipNulls,
            options.encodeDotInKeys,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
          ));
        }
        var joined = keys.join(options.delimiter);
        var prefix2 = options.addQueryPrefix === true ? "?" : "";
        if (options.charsetSentinel) {
          if (options.charset === "iso-8859-1") {
            prefix2 += "utf8=%26%2310003%3B&";
          } else {
            prefix2 += "utf8=%E2%9C%93&";
          }
        }
        return joined.length > 0 ? prefix2 + joined : "";
      };
    }
  });

  // node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var has2 = Object.prototype.hasOwnProperty;
      var isArray3 = Array.isArray;
      var defaults = {
        allowDots: false,
        allowEmptyArrays: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decodeDotInKeys: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        duplicates: "combine",
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictDepth: false,
        strictNullHandling: false,
        throwOnLimitExceeded: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options, currentArrayLength) {
        if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
          return val.split(",");
        }
        if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options) {
        var obj = { __proto__: null };
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
        var parts = cleanStr.split(
          options.delimiter,
          options.throwOnLimitExceeded ? limit + 1 : limit
        );
        if (options.throwOnLimitExceeded && parts.length > limit) {
          throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
        }
        var skipIndex = -1;
        var i;
        var charset = options.charset;
        if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf("utf8=") === 0) {
              if (parts[i] === charsetSentinel) {
                charset = "utf-8";
              } else if (parts[i] === isoSentinel) {
                charset = "iso-8859-1";
              }
              skipIndex = i;
              i = parts.length;
            }
          }
        }
        for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
            continue;
          }
          var part = parts[i];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key;
          var val;
          if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
          } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            if (key !== null) {
              val = utils.maybeMap(
                parseArrayValue(
                  part.slice(pos + 1),
                  options,
                  isArray3(obj[key]) ? obj[key].length : 0
                ),
                function(encodedVal) {
                  return options.decoder(encodedVal, defaults.decoder, charset, "value");
                }
              );
            }
          }
          if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(String(val));
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray3(val) ? [val] : val;
          }
          if (key !== null) {
            var existing = has2.call(obj, key);
            if (existing && options.duplicates === "combine") {
              obj[key] = utils.combine(
                obj[key],
                val,
                options.arrayLimit,
                options.plainObjects
              );
            } else if (!existing || options.duplicates === "last") {
              obj[key] = val;
            }
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options, valuesParsed) {
        var currentArrayLength = 0;
        if (chain.length > 0 && chain[chain.length - 1] === "[]") {
          var parentKey = chain.slice(0, -1).join("");
          currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
        }
        var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
        for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];
          if (root === "[]" && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
              obj = leaf;
            } else {
              obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
                [],
                leaf,
                options.arrayLimit,
                options.plainObjects
              );
            }
          } else {
            obj = options.plainObjects ? { __proto__: null } : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === "") {
              obj = { 0: leaf };
            } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
              obj = [];
              obj[index] = leaf;
            } else if (decodedRoot !== "__proto__") {
              obj[decodedRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var splitKeyIntoSegments = function splitKeyIntoSegments2(givenKey, options) {
        var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
        if (options.depth <= 0) {
          if (!options.plainObjects && has2.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          return [key];
        }
        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;
        var segment = brackets.exec(key);
        var parent = segment ? key.slice(0, segment.index) : key;
        var keys = [];
        if (parent) {
          if (!options.plainObjects && has2.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys.push(parent);
        }
        var i = 0;
        while ((segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          var segmentContent = segment[1].slice(1, -1);
          if (!options.plainObjects && has2.call(Object.prototype, segmentContent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys.push(segment[1]);
        }
        if (segment) {
          if (options.strictDepth === true) {
            throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
          }
          keys.push("[" + key.slice(segment.index) + "]");
        }
        return keys;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var keys = splitKeyIntoSegments(givenKey, options);
        if (!keys) {
          return;
        }
        return parseObject(keys, val, options, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults;
        }
        if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        }
        if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
          throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        }
        if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
          throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
        }
        var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
        var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
        if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
          throw new TypeError("The duplicates option must be either combine, first, or last");
        }
        var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
        return {
          allowDots,
          allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
          allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
          decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
          duplicates,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
          strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
          throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
        };
      };
      module.exports = function(str, opts) {
        var options = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options.plainObjects ? { __proto__: null } : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options) : str;
        var obj = options.plainObjects ? { __proto__: null } : {};
        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
          obj = utils.merge(obj, newObj, options);
        }
        if (options.allowSparse === true) {
          return obj;
        }
        return utils.compact(obj);
      };
    }
  });

  // node_modules/qs/lib/index.js
  var require_lib = __commonJS({
    "node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      var stringify = require_stringify();
      var parse3 = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse: parse3,
        stringify
      };
    }
  });

  // node_modules/viewerjs/dist/viewer.js
  var require_viewer = __commonJS({
    "node_modules/viewerjs/dist/viewer.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Viewer = factory());
      })(exports, (function() {
        "use strict";
        function _classCallCheck(a, n) {
          if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
          }
        }
        function _createClass(e, r, t) {
          return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
            writable: false
          }), e;
        }
        function _defineProperty(e, r, t) {
          return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = t, e;
        }
        function ownKeys2(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r2) {
              return Object.getOwnPropertyDescriptor(e, r2).enumerable;
            })), t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread2(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
              _defineProperty(e, r2, t[r2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
              Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
            });
          }
          return e;
        }
        function _toPrimitive(t, r) {
          if ("object" != typeof t || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        }
        function _toPropertyKey(t) {
          var i = _toPrimitive(t, "string");
          return "symbol" == typeof i ? i : i + "";
        }
        function _typeof(o) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
            return typeof o2;
          } : function(o2) {
            return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
          }, _typeof(o);
        }
        var DEFAULTS = {
          /**
           * Enable a modal backdrop, specify `static` for a backdrop
           * which doesn't close the modal on click.
           * @type {boolean}
           */
          backdrop: true,
          /**
           * Show the button on the top-right of the viewer.
           * @type {boolean}
           */
          button: true,
          /**
           * Show the navbar.
           * @type {boolean | number}
           */
          navbar: true,
          /**
           * Specify the visibility and the content of the title.
           * @type {boolean | number | Function | Array}
           */
          title: true,
          /**
           * Show the toolbar.
           * @type {boolean | number | Object}
           */
          toolbar: true,
          /**
           * Custom class name(s) to add to the viewer's root element.
           * @type {string}
           */
          className: "",
          /**
           * Define where to put the viewer in modal mode.
           * @type {string | Element}
           */
          container: "body",
          /**
           * Filter the images for viewing. Return true if the image is viewable.
           * @type {Function}
           */
          filter: null,
          /**
           * Enable to request fullscreen when play.
           * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
           * @type {boolean|FullscreenOptions}
           */
          fullscreen: true,
          /**
           * Define the extra attributes to inherit from the original image.
           * @type {Array}
           */
          inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
          /**
           * Define the initial coverage of the viewing image.
           * @type {number}
           */
          initialCoverage: 0.9,
          /**
           * Define the initial index of the image for viewing.
           * @type {number}
           */
          initialViewIndex: 0,
          /**
           * Enable inline mode.
           * @type {boolean}
           */
          inline: false,
          /**
           * The amount of time to delay between automatically cycling an image when playing.
           * @type {number}
           */
          interval: 5e3,
          /**
           * Enable keyboard support.
           * @type {boolean}
           */
          keyboard: true,
          /**
           * Focus the viewer when initialized.
           * @type {boolean}
           */
          focus: true,
          /**
           * Indicate if show a loading spinner when load image or not.
           * @type {boolean}
           */
          loading: true,
          /**
           * Indicate if enable loop viewing or not.
           * @type {boolean}
           */
          loop: true,
          /**
           * Min width of the viewer in inline mode.
           * @type {number}
           */
          minWidth: 200,
          /**
           * Min height of the viewer in inline mode.
           * @type {number}
           */
          minHeight: 100,
          /**
           * Enable to move the image.
           * @type {boolean}
           */
          movable: true,
          /**
           * Enable to rotate the image.
           * @type {boolean}
           */
          rotatable: true,
          /**
           * Enable to scale the image.
           * @type {boolean}
           */
          scalable: true,
          /**
           * Enable to zoom the image.
           * @type {boolean}
           */
          zoomable: true,
          /**
           * Enable to zoom the current image by dragging on the touch screen.
           * @type {boolean}
           */
          zoomOnTouch: true,
          /**
           * Enable to zoom the image by wheeling mouse.
           * @type {boolean}
           */
          zoomOnWheel: true,
          /**
           * Enable to slide to the next or previous image by swiping on the touch screen.
           * @type {boolean}
           */
          slideOnTouch: true,
          /**
           * Indicate if toggle the image size between its natural size
           * and initial size when double click on the image or not.
           * @type {boolean}
           */
          toggleOnDblclick: true,
          /**
           * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
           * @type {boolean}
           */
          tooltip: true,
          /**
           * Enable CSS3 Transition for some special elements.
           * @type {boolean}
           */
          transition: true,
          /**
           * Define the CSS `z-index` value of viewer in modal mode.
           * @type {number}
           */
          zIndex: 2015,
          /**
           * Define the CSS `z-index` value of viewer in inline mode.
           * @type {number}
           */
          zIndexInline: 0,
          /**
           * Define the ratio when zoom the image by wheeling mouse.
           * @type {number}
           */
          zoomRatio: 0.1,
          /**
           * Define the min ratio of the image when zoom out.
           * @type {number}
           */
          minZoomRatio: 0.01,
          /**
           * Define the max ratio of the image when zoom in.
           * @type {number}
           */
          maxZoomRatio: 100,
          /**
           * Define where to get the original image URL for viewing.
           * @type {string | Function}
           */
          url: "src",
          /**
           * Event shortcuts.
           * @type {Function}
           */
          ready: null,
          show: null,
          shown: null,
          hide: null,
          hidden: null,
          view: null,
          viewed: null,
          move: null,
          moved: null,
          rotate: null,
          rotated: null,
          scale: null,
          scaled: null,
          zoom: null,
          zoomed: null,
          play: null,
          stop: null
        };
        var TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
        var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
        var WINDOW = IS_BROWSER ? window : {};
        var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
        var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
        var NAMESPACE = "viewer";
        var ACTION_MOVE = "move";
        var ACTION_SWITCH = "switch";
        var ACTION_ZOOM = "zoom";
        var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
        var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
        var CLASS_FADE = "".concat(NAMESPACE, "-fade");
        var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
        var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
        var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
        var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
        var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
        var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
        var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
        var CLASS_IN = "".concat(NAMESPACE, "-in");
        var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
        var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
        var CLASS_MOVE = "".concat(NAMESPACE, "-move");
        var CLASS_OPEN = "".concat(NAMESPACE, "-open");
        var CLASS_SHOW = "".concat(NAMESPACE, "-show");
        var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");
        var EVENT_CLICK = "click";
        var EVENT_DBLCLICK = "dblclick";
        var EVENT_DRAG_START = "dragstart";
        var EVENT_FOCUSIN = "focusin";
        var EVENT_KEY_DOWN = "keydown";
        var EVENT_LOAD = "load";
        var EVENT_ERROR = "error";
        var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
        var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
        var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
        var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
        var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
        var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
        var EVENT_RESIZE = "resize";
        var EVENT_TRANSITION_END = "transitionend";
        var EVENT_WHEEL = "wheel";
        var EVENT_READY = "ready";
        var EVENT_SHOW = "show";
        var EVENT_SHOWN = "shown";
        var EVENT_HIDE = "hide";
        var EVENT_HIDDEN = "hidden";
        var EVENT_VIEW = "view";
        var EVENT_VIEWED = "viewed";
        var EVENT_MOVE = "move";
        var EVENT_MOVED = "moved";
        var EVENT_ROTATE = "rotate";
        var EVENT_ROTATED = "rotated";
        var EVENT_SCALE = "scale";
        var EVENT_SCALED = "scaled";
        var EVENT_ZOOM = "zoom";
        var EVENT_ZOOMED = "zoomed";
        var EVENT_PLAY = "play";
        var EVENT_STOP = "stop";
        var DATA_ACTION = "".concat(NAMESPACE, "Action");
        var REGEXP_SPACES = /\s\s*/;
        var BUTTONS = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
        function isString2(value) {
          return typeof value === "string";
        }
        var isNaN2 = Number.isNaN || WINDOW.isNaN;
        function isNumber(value) {
          return typeof value === "number" && !isNaN2(value);
        }
        function isUndefined(value) {
          return typeof value === "undefined";
        }
        function isObject2(value) {
          return _typeof(value) === "object" && value !== null;
        }
        var hasOwnProperty3 = Object.prototype.hasOwnProperty;
        function isPlainObject(value) {
          if (!isObject2(value)) {
            return false;
          }
          try {
            var _constructor = value.constructor;
            var prototype = _constructor.prototype;
            return _constructor && prototype && hasOwnProperty3.call(prototype, "isPrototypeOf");
          } catch (error3) {
            return false;
          }
        }
        function isFunction2(value) {
          return typeof value === "function";
        }
        function forEach(data2, callback) {
          if (data2 && isFunction2(callback)) {
            if (Array.isArray(data2) || isNumber(data2.length)) {
              var length = data2.length;
              var i;
              for (i = 0; i < length; i += 1) {
                if (callback.call(data2, data2[i], i, data2) === false) {
                  break;
                }
              }
            } else if (isObject2(data2)) {
              Object.keys(data2).forEach(function(key) {
                callback.call(data2, data2[key], key, data2);
              });
            }
          }
          return data2;
        }
        var assign = Object.assign || function assign2(obj) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (isObject2(obj) && args.length > 0) {
            args.forEach(function(arg) {
              if (isObject2(arg)) {
                Object.keys(arg).forEach(function(key) {
                  obj[key] = arg[key];
                });
              }
            });
          }
          return obj;
        };
        var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
        function setStyle(element, styles) {
          var style = element.style;
          forEach(styles, function(value, property) {
            if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
              value += "px";
            }
            style[property] = value;
          });
        }
        function escapeHTMLEntities(value) {
          return isString2(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : value;
        }
        function hasClass(element, value) {
          if (!element || !value) {
            return false;
          }
          return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
        }
        function addClass(element, value) {
          if (!element || !value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              addClass(elem, value);
            });
            return;
          }
          if (element.classList) {
            element.classList.add(value);
            return;
          }
          var className = element.className.trim();
          if (!className) {
            element.className = value;
          } else if (className.indexOf(value) < 0) {
            element.className = "".concat(className, " ").concat(value);
          }
        }
        function removeClass(element, value) {
          if (!element || !value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              removeClass(elem, value);
            });
            return;
          }
          if (element.classList) {
            element.classList.remove(value);
            return;
          }
          if (element.className.indexOf(value) >= 0) {
            element.className = element.className.replace(value, "");
          }
        }
        function toggleClass(element, value, added) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              toggleClass(elem, value, added);
            });
            return;
          }
          if (added) {
            addClass(element, value);
          } else {
            removeClass(element, value);
          }
        }
        var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
        function hyphenate2(value) {
          return value.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase();
        }
        function getData(element, name) {
          if (isObject2(element[name])) {
            return element[name];
          }
          if (element.dataset) {
            return element.dataset[name];
          }
          return element.getAttribute("data-".concat(hyphenate2(name)));
        }
        function setData(element, name, data2) {
          if (isObject2(data2)) {
            element[name] = data2;
          } else if (element.dataset) {
            element.dataset[name] = data2;
          } else {
            element.setAttribute("data-".concat(hyphenate2(name)), data2);
          }
        }
        var onceSupported = (function() {
          var supported = false;
          if (IS_BROWSER) {
            var once2 = false;
            var listener = function listener2() {
            };
            var options = Object.defineProperty({}, "once", {
              get: function get3() {
                supported = true;
                return once2;
              },
              /**
               * This setter can fix a `TypeError` in strict mode
               * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
               * @param {boolean} value - The value to set
               */
              set: function set3(value) {
                once2 = value;
              }
            });
            WINDOW.addEventListener("test", listener, options);
            WINDOW.removeEventListener("test", listener, options);
          }
          return supported;
        })();
        function removeListener(element, type, listener) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var handler4 = listener;
          type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (!onceSupported) {
              var listeners = element.listeners;
              if (listeners && listeners[event] && listeners[event][listener]) {
                handler4 = listeners[event][listener];
                delete listeners[event][listener];
                if (Object.keys(listeners[event]).length === 0) {
                  delete listeners[event];
                }
                if (Object.keys(listeners).length === 0) {
                  delete element.listeners;
                }
              }
            }
            element.removeEventListener(event, handler4, options);
          });
        }
        function addListener(element, type, listener) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var _handler = listener;
          type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (options.once && !onceSupported) {
              var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
              _handler = function handler4() {
                delete listeners[event][listener];
                element.removeEventListener(event, _handler, options);
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                listener.apply(element, args);
              };
              if (!listeners[event]) {
                listeners[event] = {};
              }
              if (listeners[event][listener]) {
                element.removeEventListener(event, listeners[event][listener], options);
              }
              listeners[event][listener] = _handler;
              element.listeners = listeners;
            }
            element.addEventListener(event, _handler, options);
          });
        }
        function dispatchEvent(element, type, data2, options) {
          var event;
          if (isFunction2(Event) && isFunction2(CustomEvent)) {
            event = new CustomEvent(type, _objectSpread2({
              bubbles: true,
              cancelable: true,
              detail: data2
            }, options));
          } else {
            event = document.createEvent("CustomEvent");
            event.initCustomEvent(type, true, true, data2);
          }
          return element.dispatchEvent(event);
        }
        function getOffset(element) {
          var box = element.getBoundingClientRect();
          return {
            left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: box.top + (window.pageYOffset - document.documentElement.clientTop)
          };
        }
        function getTransforms(_ref) {
          var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
          var values = [];
          if (isNumber(translateX) && translateX !== 0) {
            values.push("translateX(".concat(translateX, "px)"));
          }
          if (isNumber(translateY) && translateY !== 0) {
            values.push("translateY(".concat(translateY, "px)"));
          }
          if (isNumber(rotate) && rotate !== 0) {
            values.push("rotate(".concat(rotate, "deg)"));
          }
          if (isNumber(scaleX) && scaleX !== 1) {
            values.push("scaleX(".concat(scaleX, ")"));
          }
          if (isNumber(scaleY) && scaleY !== 1) {
            values.push("scaleY(".concat(scaleY, ")"));
          }
          var transform = values.length ? values.join(" ") : "none";
          return {
            WebkitTransform: transform,
            msTransform: transform,
            transform
          };
        }
        function getImageNameFromURL(url) {
          return isString2(url) ? decodeURIComponent(url.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
        }
        var IS_SAFARI = WINDOW.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(WINDOW.navigator.userAgent);
        function getImageNaturalSizes(image, options, callback) {
          var newImage = document.createElement("img");
          if (image.naturalWidth && !IS_SAFARI) {
            callback(image.naturalWidth, image.naturalHeight);
            return newImage;
          }
          var body = document.body || document.documentElement;
          newImage.onload = function() {
            callback(newImage.width, newImage.height);
            if (!IS_SAFARI) {
              body.removeChild(newImage);
            }
          };
          forEach(options.inheritedAttributes, function(name) {
            var value = image.getAttribute(name);
            if (value !== null) {
              newImage.setAttribute(name, value);
            }
          });
          newImage.src = image.src;
          if (!IS_SAFARI) {
            newImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
            body.appendChild(newImage);
          }
          return newImage;
        }
        function getResponsiveClass(type) {
          switch (type) {
            case 2:
              return CLASS_HIDE_XS_DOWN;
            case 3:
              return CLASS_HIDE_SM_DOWN;
            case 4:
              return CLASS_HIDE_MD_DOWN;
            default:
              return "";
          }
        }
        function getMaxZoomRatio(pointers) {
          var pointers2 = _objectSpread2({}, pointers);
          var ratios = [];
          forEach(pointers, function(pointer, pointerId) {
            delete pointers2[pointerId];
            forEach(pointers2, function(pointer2) {
              var x1 = Math.abs(pointer.startX - pointer2.startX);
              var y1 = Math.abs(pointer.startY - pointer2.startY);
              var x2 = Math.abs(pointer.endX - pointer2.endX);
              var y2 = Math.abs(pointer.endY - pointer2.endY);
              var z1 = Math.sqrt(x1 * x1 + y1 * y1);
              var z2 = Math.sqrt(x2 * x2 + y2 * y2);
              var ratio = (z2 - z1) / z1;
              ratios.push(ratio);
            });
          });
          ratios.sort(function(a, b) {
            return Math.abs(a) < Math.abs(b);
          });
          return ratios[0];
        }
        function getPointer(_ref2, endOnly) {
          var pageX = _ref2.pageX, pageY = _ref2.pageY;
          var end2 = {
            endX: pageX,
            endY: pageY
          };
          return endOnly ? end2 : _objectSpread2({
            timeStamp: Date.now(),
            startX: pageX,
            startY: pageY
          }, end2);
        }
        function getPointersCenter(pointers) {
          var pageX = 0;
          var pageY = 0;
          var count = 0;
          forEach(pointers, function(_ref3) {
            var startX = _ref3.startX, startY = _ref3.startY;
            pageX += startX;
            pageY += startY;
            count += 1;
          });
          pageX /= count;
          pageY /= count;
          return {
            pageX,
            pageY
          };
        }
        var render4 = {
          render: function render5() {
            this.initContainer();
            this.initViewer();
            this.initList();
            this.renderViewer();
          },
          initBody: function initBody() {
            var ownerDocument = this.element.ownerDocument;
            var body = ownerDocument.body || ownerDocument.documentElement;
            this.body = body;
            this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
            this.initialBodyPaddingRight = body.style.paddingRight;
            this.initialBodyComputedPaddingRight = window.getComputedStyle(body).paddingRight;
          },
          initContainer: function initContainer() {
            this.containerData = {
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          initViewer: function initViewer() {
            var options = this.options, parent = this.parent;
            var viewerData;
            if (options.inline) {
              viewerData = {
                width: Math.max(parent.offsetWidth, options.minWidth),
                height: Math.max(parent.offsetHeight, options.minHeight)
              };
              this.parentData = viewerData;
            }
            if (this.fulled || !viewerData) {
              viewerData = this.containerData;
            }
            this.viewerData = assign({}, viewerData);
          },
          renderViewer: function renderViewer() {
            if (this.options.inline && !this.fulled) {
              setStyle(this.viewer, this.viewerData);
            }
          },
          initList: function initList() {
            var _this = this;
            var element = this.element, options = this.options, list = this.list;
            var items = [];
            list.innerHTML = "";
            forEach(this.images, function(image, index) {
              var src = image.src;
              var alt = image.alt || getImageNameFromURL(src);
              var url = _this.getImageURL(image);
              if (src || url) {
                var item = document.createElement("li");
                var img = document.createElement("img");
                forEach(options.inheritedAttributes, function(name) {
                  var value = image.getAttribute(name);
                  if (value !== null) {
                    img.setAttribute(name, value);
                  }
                });
                if (options.navbar) {
                  img.src = src || url;
                }
                img.alt = alt;
                img.setAttribute("data-original-url", url || src);
                item.setAttribute("data-index", index);
                item.setAttribute("data-viewer-action", "view");
                item.setAttribute("role", "button");
                if (options.keyboard) {
                  item.setAttribute("tabindex", 0);
                }
                item.appendChild(img);
                list.appendChild(item);
                items.push(item);
              }
            });
            this.items = items;
            forEach(items, function(item) {
              var image = item.firstElementChild;
              var onLoad;
              var onError;
              setData(image, "filled", true);
              if (options.loading) {
                addClass(item, CLASS_LOADING);
              }
              addListener(image, EVENT_LOAD, onLoad = function onLoad2(event) {
                removeListener(image, EVENT_ERROR, onError);
                if (options.loading) {
                  removeClass(item, CLASS_LOADING);
                }
                _this.loadImage(event);
              }, {
                once: true
              });
              addListener(image, EVENT_ERROR, onError = function onError2() {
                removeListener(image, EVENT_LOAD, onLoad);
                if (options.loading) {
                  removeClass(item, CLASS_LOADING);
                }
              }, {
                once: true
              });
            });
            if (options.transition) {
              addListener(element, EVENT_VIEWED, function() {
                addClass(list, CLASS_TRANSITION);
              }, {
                once: true
              });
            }
          },
          renderList: function renderList() {
            var index = this.index;
            var item = this.items[index];
            if (!item) {
              return;
            }
            var next = item.nextElementSibling;
            var gutter = parseInt(window.getComputedStyle(next || item).marginLeft, 10);
            var offsetWidth = item.offsetWidth;
            var outerWidth = offsetWidth + gutter;
            setStyle(this.list, assign({
              width: outerWidth * this.length - gutter
            }, getTransforms({
              translateX: (this.viewerData.width - offsetWidth) / 2 - outerWidth * index
            })));
          },
          resetList: function resetList() {
            var list = this.list;
            list.innerHTML = "";
            removeClass(list, CLASS_TRANSITION);
            setStyle(list, getTransforms({
              translateX: 0
            }));
          },
          initImage: function initImage(done) {
            var _this2 = this;
            var options = this.options, image = this.image, viewerData = this.viewerData;
            var footerHeight = this.footer.offsetHeight;
            var viewerWidth = viewerData.width;
            var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
            var oldImageData = this.imageData || {};
            var sizingImage;
            this.imageInitializing = {
              abort: function abort() {
                sizingImage.onload = null;
              }
            };
            sizingImage = getImageNaturalSizes(image, options, function(naturalWidth, naturalHeight) {
              var aspectRatio = naturalWidth / naturalHeight;
              var initialCoverage = Math.max(0, Math.min(1, options.initialCoverage));
              var width = viewerWidth;
              var height = viewerHeight;
              _this2.imageInitializing = false;
              if (viewerHeight * aspectRatio > viewerWidth) {
                height = viewerWidth / aspectRatio;
              } else {
                width = viewerHeight * aspectRatio;
              }
              initialCoverage = isNumber(initialCoverage) ? initialCoverage : 0.9;
              width = Math.min(width * initialCoverage, naturalWidth);
              height = Math.min(height * initialCoverage, naturalHeight);
              var left2 = (viewerWidth - width) / 2;
              var top2 = (viewerHeight - height) / 2;
              var imageData = {
                left: left2,
                top: top2,
                x: left2,
                y: top2,
                width,
                height,
                oldRatio: 1,
                ratio: width / naturalWidth,
                aspectRatio,
                naturalWidth,
                naturalHeight
              };
              var initialImageData = assign({}, imageData);
              if (options.rotatable) {
                imageData.rotate = oldImageData.rotate || 0;
                initialImageData.rotate = 0;
              }
              if (options.scalable) {
                imageData.scaleX = oldImageData.scaleX || 1;
                imageData.scaleY = oldImageData.scaleY || 1;
                initialImageData.scaleX = 1;
                initialImageData.scaleY = 1;
              }
              _this2.imageData = imageData;
              _this2.initialImageData = initialImageData;
              if (done) {
                done();
              }
            });
          },
          renderImage: function renderImage(done) {
            var _this3 = this;
            var image = this.image, imageData = this.imageData;
            setStyle(image, assign({
              width: imageData.width,
              height: imageData.height,
              // XXX: Not to use translateX/Y to avoid image shaking when zooming
              marginLeft: imageData.x,
              marginTop: imageData.y
            }, getTransforms(imageData)));
            if (done) {
              if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(image, CLASS_TRANSITION)) {
                var onTransitionEnd = function onTransitionEnd2() {
                  _this3.imageRendering = false;
                  done();
                };
                this.imageRendering = {
                  abort: function abort() {
                    removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
                  }
                };
                addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
                  once: true
                });
              } else {
                done();
              }
            }
          },
          resetImage: function resetImage() {
            var image = this.image;
            if (image) {
              if (this.viewing) {
                this.viewing.abort();
              }
              image.parentNode.removeChild(image);
              this.image = null;
              this.title.innerHTML = "";
            }
          }
        };
        var events = {
          bind: function bind3() {
            var options = this.options, viewer = this.viewer, canvas = this.canvas;
            var document2 = this.element.ownerDocument;
            addListener(viewer, EVENT_CLICK, this.onClick = this.click.bind(this));
            addListener(viewer, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
            addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
            addListener(document2, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
            addListener(document2, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
            addListener(document2, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
            addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
            if (options.zoomable && options.zoomOnWheel) {
              addListener(viewer, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
                passive: false,
                capture: true
              });
            }
            if (options.toggleOnDblclick) {
              addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
            }
          },
          unbind: function unbind() {
            var options = this.options, viewer = this.viewer, canvas = this.canvas;
            var document2 = this.element.ownerDocument;
            removeListener(viewer, EVENT_CLICK, this.onClick);
            removeListener(viewer, EVENT_DRAG_START, this.onDragStart);
            removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
            removeListener(document2, EVENT_POINTER_MOVE, this.onPointerMove);
            removeListener(document2, EVENT_POINTER_UP, this.onPointerUp);
            removeListener(document2, EVENT_KEY_DOWN, this.onKeyDown);
            removeListener(window, EVENT_RESIZE, this.onResize);
            if (options.zoomable && options.zoomOnWheel) {
              removeListener(viewer, EVENT_WHEEL, this.onWheel, {
                passive: false,
                capture: true
              });
            }
            if (options.toggleOnDblclick) {
              removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
            }
          }
        };
        var handlers = {
          click: function click(event) {
            var options = this.options, imageData = this.imageData;
            var target = event.target;
            var action = getData(target, DATA_ACTION);
            if (!action && target.localName === "img" && target.parentElement.localName === "li") {
              target = target.parentElement;
              action = getData(target, DATA_ACTION);
            }
            if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
              clearTimeout(this.clickCanvasTimeout);
            }
            switch (action) {
              case "mix":
                if (this.played) {
                  this.stop();
                } else if (options.inline) {
                  if (this.fulled) {
                    this.exit();
                  } else {
                    this.full();
                  }
                } else {
                  this.hide();
                }
                break;
              case "hide":
                if (!this.pointerMoved) {
                  this.hide();
                }
                break;
              case "view":
                this.view(getData(target, "index"));
                break;
              case "zoom-in":
                this.zoom(0.1, true);
                break;
              case "zoom-out":
                this.zoom(-0.1, true);
                break;
              case "one-to-one":
                this.toggle();
                break;
              case "reset":
                this.reset();
                break;
              case "prev":
                this.prev(options.loop);
                break;
              case "play":
                this.play(options.fullscreen);
                break;
              case "next":
                this.next(options.loop);
                break;
              case "rotate-left":
                this.rotate(-90);
                break;
              case "rotate-right":
                this.rotate(90);
                break;
              case "flip-horizontal":
                this.scaleX(-imageData.scaleX || -1);
                break;
              case "flip-vertical":
                this.scaleY(-imageData.scaleY || -1);
                break;
              default:
                if (this.played) {
                  this.stop();
                }
            }
          },
          dblclick: function dblclick(event) {
            event.preventDefault();
            if (this.viewed && event.target === this.image) {
              if (IS_TOUCH_DEVICE && event.isTrusted) {
                clearTimeout(this.doubleClickImageTimeout);
              }
              this.toggle(event.isTrusted ? event : event.detail && event.detail.originalEvent);
            }
          },
          load: function load() {
            var _this = this;
            if (this.timeout) {
              clearTimeout(this.timeout);
              this.timeout = false;
            }
            var element = this.element, options = this.options, image = this.image, index = this.index, viewerData = this.viewerData;
            removeClass(image, CLASS_INVISIBLE);
            if (options.loading) {
              removeClass(this.canvas, CLASS_LOADING);
            }
            image.style.cssText = "height:0;" + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + "max-width:none!important;position:relative;width:0;";
            this.initImage(function() {
              toggleClass(image, CLASS_MOVE, options.movable);
              toggleClass(image, CLASS_TRANSITION, options.transition);
              _this.renderImage(function() {
                _this.viewed = true;
                _this.viewing = false;
                if (isFunction2(options.viewed)) {
                  addListener(element, EVENT_VIEWED, options.viewed, {
                    once: true
                  });
                }
                dispatchEvent(element, EVENT_VIEWED, {
                  originalImage: _this.images[index],
                  index,
                  image
                }, {
                  cancelable: false
                });
              });
            });
          },
          loadImage: function loadImage(event) {
            var image = event.target;
            var parent = image.parentNode;
            var parentWidth = parent.offsetWidth || 30;
            var parentHeight = parent.offsetHeight || 50;
            var filled = !!getData(image, "filled");
            getImageNaturalSizes(image, this.options, function(naturalWidth, naturalHeight) {
              var aspectRatio = naturalWidth / naturalHeight;
              var width = parentWidth;
              var height = parentHeight;
              if (parentHeight * aspectRatio > parentWidth) {
                if (filled) {
                  width = parentHeight * aspectRatio;
                } else {
                  height = parentWidth / aspectRatio;
                }
              } else if (filled) {
                height = parentWidth / aspectRatio;
              } else {
                width = parentHeight * aspectRatio;
              }
              setStyle(image, assign({
                width,
                height
              }, getTransforms({
                translateX: (parentWidth - width) / 2,
                translateY: (parentHeight - height) / 2
              })));
            });
          },
          keydown: function keydown(event) {
            var options = this.options;
            if (!options.keyboard) {
              return;
            }
            var keyCode = event.keyCode || event.which || event.charCode;
            switch (keyCode) {
              // Enter
              case 13:
                if (this.viewer.contains(event.target)) {
                  this.click(event);
                }
                break;
            }
            if (!this.fulled) {
              return;
            }
            switch (keyCode) {
              // Escape
              case 27:
                if (this.played) {
                  this.stop();
                } else if (options.inline) {
                  if (this.fulled) {
                    this.exit();
                  }
                } else {
                  this.hide();
                }
                break;
              // Space
              case 32:
                if (this.played) {
                  this.stop();
                }
                break;
              // ArrowLeft
              case 37:
                if (this.played && this.playing) {
                  this.playing.prev();
                } else {
                  this.prev(options.loop);
                }
                break;
              // ArrowUp
              case 38:
                event.preventDefault();
                this.zoom(options.zoomRatio, true);
                break;
              // ArrowRight
              case 39:
                if (this.played && this.playing) {
                  this.playing.next();
                } else {
                  this.next(options.loop);
                }
                break;
              // ArrowDown
              case 40:
                event.preventDefault();
                this.zoom(-options.zoomRatio, true);
                break;
              // Ctrl + 0
              case 48:
              // Fall through
              // Ctrl + 1
              // eslint-disable-next-line no-fallthrough
              case 49:
                if (event.ctrlKey) {
                  event.preventDefault();
                  this.toggle();
                }
                break;
            }
          },
          dragstart: function dragstart(event) {
            if (event.target.localName === "img") {
              event.preventDefault();
            }
          },
          pointerdown: function pointerdown(event) {
            var options = this.options, pointers = this.pointers;
            var buttons = event.buttons, button = event.button;
            this.pointerMoved = false;
            if (!this.viewed || this.showing || this.viewing || this.hiding || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
            (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
              return;
            }
            event.preventDefault();
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                pointers[touch.identifier] = getPointer(touch);
              });
            } else {
              pointers[event.pointerId || 0] = getPointer(event);
            }
            var action = options.movable ? ACTION_MOVE : false;
            if (options.zoomOnTouch && options.zoomable && Object.keys(pointers).length > 1) {
              action = ACTION_ZOOM;
            } else if (options.slideOnTouch && (event.pointerType === "touch" || event.type === "touchstart") && this.isSwitchable()) {
              action = ACTION_SWITCH;
            }
            if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
              removeClass(this.image, CLASS_TRANSITION);
            }
            this.action = action;
          },
          pointermove: function pointermove(event) {
            var pointers = this.pointers, action = this.action;
            if (!this.viewed || !action) {
              return;
            }
            event.preventDefault();
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                assign(pointers[touch.identifier] || {}, getPointer(touch, true));
              });
            } else {
              assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
            }
            this.change(event);
          },
          pointerup: function pointerup(event) {
            var _this2 = this;
            var options = this.options, action = this.action, pointers = this.pointers;
            var pointer;
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                pointer = pointers[touch.identifier];
                delete pointers[touch.identifier];
              });
            } else {
              pointer = pointers[event.pointerId || 0];
              delete pointers[event.pointerId || 0];
            }
            if (!action) {
              return;
            }
            event.preventDefault();
            if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
              addClass(this.image, CLASS_TRANSITION);
            }
            this.action = false;
            if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
              clearTimeout(this.clickCanvasTimeout);
              clearTimeout(this.doubleClickImageTimeout);
              if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
                if (this.imageClicked) {
                  this.imageClicked = false;
                  this.doubleClickImageTimeout = setTimeout(function() {
                    dispatchEvent(_this2.image, EVENT_DBLCLICK, {
                      originalEvent: event
                    });
                  }, 50);
                } else {
                  this.imageClicked = true;
                  this.doubleClickImageTimeout = setTimeout(function() {
                    _this2.imageClicked = false;
                  }, 500);
                }
              } else {
                this.imageClicked = false;
                if (options.backdrop && options.backdrop !== "static" && event.target === this.canvas) {
                  this.clickCanvasTimeout = setTimeout(function() {
                    dispatchEvent(_this2.canvas, EVENT_CLICK, {
                      originalEvent: event
                    });
                  }, 50);
                }
              }
            }
          },
          resize: function resize() {
            var _this3 = this;
            if (!this.isShown || this.hiding) {
              return;
            }
            if (this.fulled) {
              this.close();
              this.initBody();
              this.open();
            }
            this.initContainer();
            this.initViewer();
            this.renderViewer();
            this.renderList();
            if (this.viewed) {
              this.initImage(function() {
                _this3.renderImage();
              });
            }
            if (this.played) {
              if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
                this.stop();
                return;
              }
              forEach(this.player.getElementsByTagName("img"), function(image) {
                addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
                  once: true
                });
                dispatchEvent(image, EVENT_LOAD);
              });
            }
          },
          wheel: function wheel(event) {
            var _this4 = this;
            if (!this.viewed) {
              return;
            }
            event.preventDefault();
            if (this.wheeling) {
              return;
            }
            this.wheeling = true;
            setTimeout(function() {
              _this4.wheeling = false;
            }, 50);
            var ratio = Number(this.options.zoomRatio) || 0.1;
            var delta = 1;
            if (event.deltaY) {
              delta = event.deltaY > 0 ? 1 : -1;
            } else if (event.wheelDelta) {
              delta = -event.wheelDelta / 120;
            } else if (event.detail) {
              delta = event.detail > 0 ? 1 : -1;
            }
            this.zoom(-delta * ratio, true, null, event);
          }
        };
        var methods = {
          /** Show the viewer (only available in modal mode)
           * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
           * @returns {Viewer} this
           */
          show: function show() {
            var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var element = this.element, options = this.options;
            if (options.inline || this.showing || this.isShown || this.showing) {
              return this;
            }
            if (!this.ready) {
              this.build();
              if (this.ready) {
                this.show(immediate);
              }
              return this;
            }
            if (isFunction2(options.show)) {
              addListener(element, EVENT_SHOW, options.show, {
                once: true
              });
            }
            if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
              return this;
            }
            if (this.hiding) {
              this.transitioning.abort();
            }
            this.showing = true;
            this.open();
            var viewer = this.viewer;
            removeClass(viewer, CLASS_HIDE);
            viewer.setAttribute("role", "dialog");
            viewer.setAttribute("aria-labelledby", this.title.id);
            viewer.setAttribute("aria-modal", true);
            viewer.removeAttribute("aria-hidden");
            if (options.transition && !immediate) {
              var shown = this.shown.bind(this);
              this.transitioning = {
                abort: function abort() {
                  removeListener(viewer, EVENT_TRANSITION_END, shown);
                  removeClass(viewer, CLASS_IN);
                }
              };
              addClass(viewer, CLASS_TRANSITION);
              viewer.initialOffsetWidth = viewer.offsetWidth;
              addListener(viewer, EVENT_TRANSITION_END, shown, {
                once: true
              });
              addClass(viewer, CLASS_IN);
            } else {
              addClass(viewer, CLASS_IN);
              this.shown();
            }
            return this;
          },
          /**
           * Hide the viewer (only available in modal mode)
           * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
           * @returns {Viewer} this
           */
          hide: function hide2() {
            var _this = this;
            var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var element = this.element, options = this.options;
            if (options.inline || this.hiding || !(this.isShown || this.showing)) {
              return this;
            }
            if (isFunction2(options.hide)) {
              addListener(element, EVENT_HIDE, options.hide, {
                once: true
              });
            }
            if (dispatchEvent(element, EVENT_HIDE) === false) {
              return this;
            }
            if (this.showing) {
              this.transitioning.abort();
            }
            this.hiding = true;
            if (this.played) {
              this.stop();
            } else if (this.viewing) {
              this.viewing.abort();
            }
            var viewer = this.viewer, image = this.image;
            var hideImmediately = function hideImmediately2() {
              removeClass(viewer, CLASS_IN);
              _this.hidden();
            };
            if (options.transition && !immediate) {
              var _onViewerTransitionEnd = function onViewerTransitionEnd(event) {
                if (event && event.target === viewer) {
                  removeListener(viewer, EVENT_TRANSITION_END, _onViewerTransitionEnd);
                  _this.hidden();
                }
              };
              var onImageTransitionEnd = function onImageTransitionEnd2() {
                if (hasClass(viewer, CLASS_TRANSITION)) {
                  addListener(viewer, EVENT_TRANSITION_END, _onViewerTransitionEnd);
                  removeClass(viewer, CLASS_IN);
                } else {
                  hideImmediately();
                }
              };
              this.transitioning = {
                abort: function abort() {
                  if (_this.viewed && hasClass(image, CLASS_TRANSITION)) {
                    removeListener(image, EVENT_TRANSITION_END, onImageTransitionEnd);
                  } else if (hasClass(viewer, CLASS_TRANSITION)) {
                    removeListener(viewer, EVENT_TRANSITION_END, _onViewerTransitionEnd);
                  }
                }
              };
              if (this.viewed && hasClass(image, CLASS_TRANSITION)) {
                addListener(image, EVENT_TRANSITION_END, onImageTransitionEnd, {
                  once: true
                });
                this.zoomTo(0, false, null, null, true);
              } else {
                onImageTransitionEnd();
              }
            } else {
              hideImmediately();
            }
            return this;
          },
          /**
           * View one of the images with image's index
           * @param {number} index - The index of the image to view.
           * @returns {Viewer} this
           */
          view: function view() {
            var _this2 = this;
            var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
            index = Number(index) || 0;
            if (this.hiding || this.played || index < 0 || index >= this.length || this.viewed && index === this.index) {
              return this;
            }
            if (!this.isShown) {
              this.index = index;
              return this.show();
            }
            if (this.viewing) {
              this.viewing.abort();
            }
            var element = this.element, options = this.options, title = this.title, canvas = this.canvas;
            var item = this.items[index];
            var img = item.querySelector("img");
            var url = getData(img, "originalUrl");
            var alt = img.getAttribute("alt");
            var image = document.createElement("img");
            forEach(options.inheritedAttributes, function(name) {
              var value = img.getAttribute(name);
              if (value !== null) {
                image.setAttribute(name, value);
              }
            });
            image.src = url;
            image.alt = alt;
            if (isFunction2(options.view)) {
              addListener(element, EVENT_VIEW, options.view, {
                once: true
              });
            }
            if (dispatchEvent(element, EVENT_VIEW, {
              originalImage: this.images[index],
              index,
              image
            }) === false || !this.isShown || this.hiding || this.played) {
              return this;
            }
            var activeItem = this.items[this.index];
            if (activeItem) {
              removeClass(activeItem, CLASS_ACTIVE);
              activeItem.removeAttribute("aria-selected");
            }
            addClass(item, CLASS_ACTIVE);
            item.setAttribute("aria-selected", true);
            if (options.focus) {
              item.focus();
            }
            this.image = image;
            this.viewed = false;
            this.index = index;
            this.imageData = {};
            addClass(image, CLASS_INVISIBLE);
            if (options.loading) {
              addClass(canvas, CLASS_LOADING);
            }
            canvas.innerHTML = "";
            canvas.appendChild(image);
            this.renderList();
            title.innerHTML = "";
            var onViewed = function onViewed2() {
              var imageData = _this2.imageData;
              var render5 = Array.isArray(options.title) ? options.title[1] : options.title;
              title.innerHTML = escapeHTMLEntities(isFunction2(render5) ? render5.call(_this2, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " \xD7 ").concat(imageData.naturalHeight, ")"));
            };
            var onLoad;
            var onError;
            addListener(element, EVENT_VIEWED, onViewed, {
              once: true
            });
            this.viewing = {
              abort: function abort() {
                removeListener(element, EVENT_VIEWED, onViewed);
                if (image.complete) {
                  if (_this2.imageRendering) {
                    _this2.imageRendering.abort();
                  } else if (_this2.imageInitializing) {
                    _this2.imageInitializing.abort();
                  }
                } else {
                  image.src = "";
                  removeListener(image, EVENT_LOAD, onLoad);
                  if (_this2.timeout) {
                    clearTimeout(_this2.timeout);
                  }
                }
              }
            };
            if (image.complete) {
              this.load();
            } else {
              addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
                removeListener(image, EVENT_ERROR, onError);
                _this2.load();
              }, {
                once: true
              });
              addListener(image, EVENT_ERROR, onError = function onError2() {
                removeListener(image, EVENT_LOAD, onLoad);
                if (_this2.timeout) {
                  clearTimeout(_this2.timeout);
                  _this2.timeout = false;
                }
                removeClass(image, CLASS_INVISIBLE);
                if (options.loading) {
                  removeClass(_this2.canvas, CLASS_LOADING);
                }
              }, {
                once: true
              });
              if (this.timeout) {
                clearTimeout(this.timeout);
              }
              this.timeout = setTimeout(function() {
                removeClass(image, CLASS_INVISIBLE);
                _this2.timeout = false;
              }, 1e3);
            }
            return this;
          },
          /**
           * View the previous image
           * @param {boolean} [loop=false] - Indicate if view the last one
           * when it is the first one at present.
           * @returns {Viewer} this
           */
          prev: function prev() {
            var loop2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var index = this.index - 1;
            if (index < 0) {
              index = loop2 ? this.length - 1 : 0;
            }
            this.view(index);
            return this;
          },
          /**
           * View the next image
           * @param {boolean} [loop=false] - Indicate if view the first one
           * when it is the last one at present.
           * @returns {Viewer} this
           */
          next: function next() {
            var loop2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var maxIndex = this.length - 1;
            var index = this.index + 1;
            if (index > maxIndex) {
              index = loop2 ? 0 : maxIndex;
            }
            this.view(index);
            return this;
          },
          /**
           * Move the image with relative offsets.
           * @param {number} x - The moving distance in the horizontal direction.
           * @param {number} [y=x] The moving distance in the vertical direction.
           * @returns {Viewer} this
           */
          move: function move(x) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
            var imageData = this.imageData;
            this.moveTo(isUndefined(x) ? x : imageData.x + Number(x), isUndefined(y) ? y : imageData.y + Number(y));
            return this;
          },
          /**
           * Move the image to an absolute point.
           * @param {number} x - The new position in the horizontal direction.
           * @param {number} [y=x] - The new position in the vertical direction.
           * @param {Event} [_originalEvent=null] - The original event if any.
           * @returns {Viewer} this
           */
          moveTo: function moveTo(x) {
            var _this3 = this;
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
            var _originalEvent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            var element = this.element, options = this.options, imageData = this.imageData;
            x = Number(x);
            y = Number(y);
            if (this.viewed && !this.played && options.movable) {
              var oldX = imageData.x;
              var oldY = imageData.y;
              var changed = false;
              if (isNumber(x)) {
                changed = true;
              } else {
                x = oldX;
              }
              if (isNumber(y)) {
                changed = true;
              } else {
                y = oldY;
              }
              if (changed) {
                if (isFunction2(options.move)) {
                  addListener(element, EVENT_MOVE, options.move, {
                    once: true
                  });
                }
                if (dispatchEvent(element, EVENT_MOVE, {
                  x,
                  y,
                  oldX,
                  oldY,
                  originalEvent: _originalEvent
                }) === false) {
                  return this;
                }
                imageData.x = x;
                imageData.y = y;
                imageData.left = x;
                imageData.top = y;
                this.moving = true;
                this.renderImage(function() {
                  _this3.moving = false;
                  if (isFunction2(options.moved)) {
                    addListener(element, EVENT_MOVED, options.moved, {
                      once: true
                    });
                  }
                  dispatchEvent(element, EVENT_MOVED, {
                    x,
                    y,
                    oldX,
                    oldY,
                    originalEvent: _originalEvent
                  }, {
                    cancelable: false
                  });
                });
              }
            }
            return this;
          },
          /**
           * Rotate the image with a relative degree.
           * @param {number} degree - The rotate degree.
           * @returns {Viewer} this
           */
          rotate: function rotate(degree) {
            this.rotateTo((this.imageData.rotate || 0) + Number(degree));
            return this;
          },
          /**
           * Rotate the image to an absolute degree.
           * @param {number} degree - The rotate degree.
           * @returns {Viewer} this
           */
          rotateTo: function rotateTo(degree) {
            var _this4 = this;
            var element = this.element, options = this.options, imageData = this.imageData;
            degree = Number(degree);
            if (isNumber(degree) && this.viewed && !this.played && options.rotatable) {
              var oldDegree = imageData.rotate;
              if (isFunction2(options.rotate)) {
                addListener(element, EVENT_ROTATE, options.rotate, {
                  once: true
                });
              }
              if (dispatchEvent(element, EVENT_ROTATE, {
                degree,
                oldDegree
              }) === false) {
                return this;
              }
              imageData.rotate = degree;
              this.rotating = true;
              this.renderImage(function() {
                _this4.rotating = false;
                if (isFunction2(options.rotated)) {
                  addListener(element, EVENT_ROTATED, options.rotated, {
                    once: true
                  });
                }
                dispatchEvent(element, EVENT_ROTATED, {
                  degree,
                  oldDegree
                }, {
                  cancelable: false
                });
              });
            }
            return this;
          },
          /**
           * Scale the image on the x-axis.
           * @param {number} scaleX - The scale ratio on the x-axis.
           * @returns {Viewer} this
           */
          scaleX: function scaleX(_scaleX) {
            this.scale(_scaleX, this.imageData.scaleY);
            return this;
          },
          /**
           * Scale the image on the y-axis.
           * @param {number} scaleY - The scale ratio on the y-axis.
           * @returns {Viewer} this
           */
          scaleY: function scaleY(_scaleY) {
            this.scale(this.imageData.scaleX, _scaleY);
            return this;
          },
          /**
           * Scale the image.
           * @param {number} scaleX - The scale ratio on the x-axis.
           * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
           * @returns {Viewer} this
           */
          scale: function scale(scaleX) {
            var _this5 = this;
            var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
            var element = this.element, options = this.options, imageData = this.imageData;
            scaleX = Number(scaleX);
            scaleY = Number(scaleY);
            if (this.viewed && !this.played && options.scalable) {
              var oldScaleX = imageData.scaleX;
              var oldScaleY = imageData.scaleY;
              var changed = false;
              if (isNumber(scaleX)) {
                changed = true;
              } else {
                scaleX = oldScaleX;
              }
              if (isNumber(scaleY)) {
                changed = true;
              } else {
                scaleY = oldScaleY;
              }
              if (changed) {
                if (isFunction2(options.scale)) {
                  addListener(element, EVENT_SCALE, options.scale, {
                    once: true
                  });
                }
                if (dispatchEvent(element, EVENT_SCALE, {
                  scaleX,
                  scaleY,
                  oldScaleX,
                  oldScaleY
                }) === false) {
                  return this;
                }
                imageData.scaleX = scaleX;
                imageData.scaleY = scaleY;
                this.scaling = true;
                this.renderImage(function() {
                  _this5.scaling = false;
                  if (isFunction2(options.scaled)) {
                    addListener(element, EVENT_SCALED, options.scaled, {
                      once: true
                    });
                  }
                  dispatchEvent(element, EVENT_SCALED, {
                    scaleX,
                    scaleY,
                    oldScaleX,
                    oldScaleY
                  }, {
                    cancelable: false
                  });
                });
              }
            }
            return this;
          },
          /**
           * Zoom the image with a relative ratio.
           * @param {number} ratio - The target ratio.
           * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
           * @param {Object} [pivot] - The pivot point coordinate for zooming.
           * @param {Event} [_originalEvent=null] - The original event if any.
           * @returns {Viewer} this
           */
          zoom: function zoom(ratio) {
            var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            var imageData = this.imageData;
            ratio = Number(ratio);
            if (ratio < 0) {
              ratio = 1 / (1 - ratio);
            } else {
              ratio = 1 + ratio;
            }
            this.zoomTo(imageData.width * ratio / imageData.naturalWidth, showTooltip, pivot, _originalEvent);
            return this;
          },
          /**
           * Zoom the image to an absolute ratio.
           * @param {number} ratio - The target ratio.
           * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
           * @param {Object} [pivot] - The pivot point coordinate for zooming.
           * @param {Event} [_originalEvent=null] - The original event if any.
           * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
           * @returns {Viewer} this
           */
          zoomTo: function zoomTo(ratio) {
            var _this6 = this;
            var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            var _zoomable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
            var element = this.element, options = this.options, pointers = this.pointers, imageData = this.imageData;
            var x = imageData.x, y = imageData.y, width = imageData.width, height = imageData.height, naturalWidth = imageData.naturalWidth, naturalHeight = imageData.naturalHeight;
            ratio = Math.max(0, ratio);
            if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
              if (!_zoomable) {
                var minZoomRatio = Math.max(0.01, options.minZoomRatio);
                var maxZoomRatio = Math.min(100, options.maxZoomRatio);
                ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
              }
              if (_originalEvent) {
                switch (_originalEvent.type) {
                  case "wheel":
                    if (options.zoomRatio >= 0.055 && ratio > 0.95 && ratio < 1.05) {
                      ratio = 1;
                    }
                    break;
                  case "pointermove":
                  case "touchmove":
                  case "mousemove":
                    if (ratio > 0.99 && ratio < 1.01) {
                      ratio = 1;
                    }
                    break;
                }
              }
              var newWidth = naturalWidth * ratio;
              var newHeight = naturalHeight * ratio;
              var offsetWidth = newWidth - width;
              var offsetHeight = newHeight - height;
              var oldRatio = imageData.ratio;
              if (isFunction2(options.zoom)) {
                addListener(element, EVENT_ZOOM, options.zoom, {
                  once: true
                });
              }
              if (dispatchEvent(element, EVENT_ZOOM, {
                ratio,
                oldRatio,
                originalEvent: _originalEvent
              }) === false) {
                return this;
              }
              this.zooming = true;
              if (_originalEvent) {
                var offset2 = getOffset(this.viewer);
                var center = pointers && Object.keys(pointers).length > 0 ? getPointersCenter(pointers) : {
                  pageX: _originalEvent.pageX,
                  pageY: _originalEvent.pageY
                };
                imageData.x -= offsetWidth * ((center.pageX - offset2.left - x) / width);
                imageData.y -= offsetHeight * ((center.pageY - offset2.top - y) / height);
              } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
                imageData.x -= offsetWidth * ((pivot.x - x) / width);
                imageData.y -= offsetHeight * ((pivot.y - y) / height);
              } else {
                imageData.x -= offsetWidth / 2;
                imageData.y -= offsetHeight / 2;
              }
              imageData.left = imageData.x;
              imageData.top = imageData.y;
              imageData.width = newWidth;
              imageData.height = newHeight;
              imageData.oldRatio = oldRatio;
              imageData.ratio = ratio;
              this.renderImage(function() {
                _this6.zooming = false;
                if (isFunction2(options.zoomed)) {
                  addListener(element, EVENT_ZOOMED, options.zoomed, {
                    once: true
                  });
                }
                dispatchEvent(element, EVENT_ZOOMED, {
                  ratio,
                  oldRatio,
                  originalEvent: _originalEvent
                }, {
                  cancelable: false
                });
              });
              if (showTooltip) {
                this.tooltip();
              }
            }
            return this;
          },
          /**
           * Play the images
           * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
           * @returns {Viewer} this
           */
          play: function play() {
            var _this7 = this;
            var fullscreen = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            if (!this.isShown || this.played) {
              return this;
            }
            var element = this.element, options = this.options;
            if (isFunction2(options.play)) {
              addListener(element, EVENT_PLAY, options.play, {
                once: true
              });
            }
            if (dispatchEvent(element, EVENT_PLAY) === false) {
              return this;
            }
            var player = this.player;
            var onLoad = this.loadImage.bind(this);
            var list = [];
            var total = 0;
            var index = 0;
            this.played = true;
            this.onLoadWhenPlay = onLoad;
            if (fullscreen) {
              this.requestFullscreen(fullscreen);
            }
            addClass(player, CLASS_SHOW);
            forEach(this.items, function(item, i) {
              var img = item.querySelector("img");
              var image = document.createElement("img");
              image.src = getData(img, "originalUrl");
              image.alt = img.getAttribute("alt");
              image.referrerPolicy = img.referrerPolicy;
              total += 1;
              addClass(image, CLASS_FADE);
              toggleClass(image, CLASS_TRANSITION, options.transition);
              if (hasClass(item, CLASS_ACTIVE)) {
                addClass(image, CLASS_IN);
                index = i;
              }
              list.push(image);
              addListener(image, EVENT_LOAD, onLoad, {
                once: true
              });
              player.appendChild(image);
            });
            if (isNumber(options.interval) && options.interval > 0) {
              var _prev = function prev() {
                clearTimeout(_this7.playing.timeout);
                removeClass(list[index], CLASS_IN);
                index -= 1;
                index = index >= 0 ? index : total - 1;
                addClass(list[index], CLASS_IN);
                _this7.playing.timeout = setTimeout(_prev, options.interval);
              };
              var _next = function next() {
                clearTimeout(_this7.playing.timeout);
                removeClass(list[index], CLASS_IN);
                index += 1;
                index = index < total ? index : 0;
                addClass(list[index], CLASS_IN);
                _this7.playing.timeout = setTimeout(_next, options.interval);
              };
              if (total > 1) {
                this.playing = {
                  prev: _prev,
                  next: _next,
                  timeout: setTimeout(_next, options.interval)
                };
              }
            }
            return this;
          },
          // Stop play
          stop: function stop2() {
            var _this8 = this;
            if (!this.played) {
              return this;
            }
            var element = this.element, options = this.options;
            if (isFunction2(options.stop)) {
              addListener(element, EVENT_STOP, options.stop, {
                once: true
              });
            }
            if (dispatchEvent(element, EVENT_STOP) === false) {
              return this;
            }
            var player = this.player;
            clearTimeout(this.playing.timeout);
            this.playing = false;
            this.played = false;
            forEach(player.getElementsByTagName("img"), function(image) {
              removeListener(image, EVENT_LOAD, _this8.onLoadWhenPlay);
            });
            removeClass(player, CLASS_SHOW);
            player.innerHTML = "";
            this.exitFullscreen();
            return this;
          },
          // Enter modal mode (only available in inline mode)
          full: function full() {
            var _this9 = this;
            var options = this.options, viewer = this.viewer, image = this.image, list = this.list;
            if (!this.isShown || this.played || this.fulled || !options.inline) {
              return this;
            }
            this.fulled = true;
            this.open();
            addClass(this.button, CLASS_FULLSCREEN_EXIT);
            if (options.transition) {
              removeClass(list, CLASS_TRANSITION);
              if (this.viewed) {
                removeClass(image, CLASS_TRANSITION);
              }
            }
            addClass(viewer, CLASS_FIXED);
            viewer.setAttribute("role", "dialog");
            viewer.setAttribute("aria-labelledby", this.title.id);
            viewer.setAttribute("aria-modal", true);
            viewer.removeAttribute("style");
            setStyle(viewer, {
              zIndex: options.zIndex
            });
            if (options.focus) {
              this.enforceFocus();
            }
            this.initContainer();
            this.viewerData = assign({}, this.containerData);
            this.renderList();
            if (this.viewed) {
              this.initImage(function() {
                _this9.renderImage(function() {
                  if (options.transition) {
                    setTimeout(function() {
                      addClass(image, CLASS_TRANSITION);
                      addClass(list, CLASS_TRANSITION);
                    }, 0);
                  }
                });
              });
            }
            return this;
          },
          // Exit modal mode (only available in inline mode)
          exit: function exit() {
            var _this10 = this;
            var options = this.options, viewer = this.viewer, image = this.image, list = this.list;
            if (!this.isShown || this.played || !this.fulled || !options.inline) {
              return this;
            }
            this.fulled = false;
            this.close();
            removeClass(this.button, CLASS_FULLSCREEN_EXIT);
            if (options.transition) {
              removeClass(list, CLASS_TRANSITION);
              if (this.viewed) {
                removeClass(image, CLASS_TRANSITION);
              }
            }
            if (options.focus) {
              this.clearEnforceFocus();
            }
            viewer.removeAttribute("role");
            viewer.removeAttribute("aria-labelledby");
            viewer.removeAttribute("aria-modal");
            removeClass(viewer, CLASS_FIXED);
            setStyle(viewer, {
              zIndex: options.zIndexInline
            });
            this.viewerData = assign({}, this.parentData);
            this.renderViewer();
            this.renderList();
            if (this.viewed) {
              this.initImage(function() {
                _this10.renderImage(function() {
                  if (options.transition) {
                    setTimeout(function() {
                      addClass(image, CLASS_TRANSITION);
                      addClass(list, CLASS_TRANSITION);
                    }, 0);
                  }
                });
              });
            }
            return this;
          },
          // Show the current ratio of the image with percentage
          tooltip: function tooltip() {
            var _this11 = this;
            var options = this.options, tooltipBox = this.tooltipBox, imageData = this.imageData;
            if (!this.viewed || this.played || !options.tooltip) {
              return this;
            }
            tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");
            if (!this.tooltipping) {
              if (options.transition) {
                if (this.fading) {
                  dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
                }
                addClass(tooltipBox, CLASS_SHOW);
                addClass(tooltipBox, CLASS_FADE);
                addClass(tooltipBox, CLASS_TRANSITION);
                tooltipBox.removeAttribute("aria-hidden");
                tooltipBox.initialOffsetWidth = tooltipBox.offsetWidth;
                addClass(tooltipBox, CLASS_IN);
              } else {
                addClass(tooltipBox, CLASS_SHOW);
                tooltipBox.removeAttribute("aria-hidden");
              }
            } else {
              clearTimeout(this.tooltipping);
            }
            this.tooltipping = setTimeout(function() {
              if (options.transition) {
                addListener(tooltipBox, EVENT_TRANSITION_END, function() {
                  removeClass(tooltipBox, CLASS_SHOW);
                  removeClass(tooltipBox, CLASS_FADE);
                  removeClass(tooltipBox, CLASS_TRANSITION);
                  tooltipBox.setAttribute("aria-hidden", true);
                  _this11.fading = false;
                }, {
                  once: true
                });
                removeClass(tooltipBox, CLASS_IN);
                _this11.fading = true;
              } else {
                removeClass(tooltipBox, CLASS_SHOW);
                tooltipBox.setAttribute("aria-hidden", true);
              }
              _this11.tooltipping = false;
            }, 1e3);
            return this;
          },
          /**
           * Toggle the image size between its current size and natural size
           * @param {Event} [_originalEvent=null] - The original event if any.
           * @returns {Viewer} this
           */
          toggle: function toggle() {
            var _originalEvent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (this.imageData.ratio === 1) {
              this.zoomTo(this.imageData.oldRatio, true, null, _originalEvent);
            } else {
              this.zoomTo(1, true, null, _originalEvent);
            }
            return this;
          },
          // Reset the image to its initial state
          reset: function reset() {
            if (this.viewed && !this.played) {
              this.imageData = assign({}, this.initialImageData);
              this.renderImage();
            }
            return this;
          },
          // Update viewer when images changed
          update: function update() {
            var _this12 = this;
            var element = this.element, options = this.options, isImg = this.isImg;
            if (isImg && !element.parentNode) {
              return this.destroy();
            }
            var images = [];
            forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
              if (isFunction2(options.filter)) {
                if (options.filter.call(_this12, image)) {
                  images.push(image);
                }
              } else if (_this12.getImageURL(image)) {
                images.push(image);
              }
            });
            if (!images.length) {
              return this;
            }
            this.images = images;
            this.length = images.length;
            if (this.ready) {
              var changedIndexes = [];
              forEach(this.items, function(item, i) {
                var img = item.querySelector("img");
                var image = images[i];
                if (image && img) {
                  if (image.src !== img.src || image.alt !== img.alt) {
                    changedIndexes.push(i);
                  }
                } else {
                  changedIndexes.push(i);
                }
              });
              setStyle(this.list, {
                width: "auto"
              });
              this.initList();
              if (this.isShown) {
                if (this.length) {
                  if (this.viewed) {
                    var changedIndex = changedIndexes.indexOf(this.index);
                    if (changedIndex >= 0) {
                      this.viewed = false;
                      this.view(Math.max(Math.min(this.index - changedIndex, this.length - 1), 0));
                    } else {
                      var activeItem = this.items[this.index];
                      addClass(activeItem, CLASS_ACTIVE);
                      activeItem.setAttribute("aria-selected", true);
                    }
                  }
                } else {
                  this.image = null;
                  this.viewed = false;
                  this.index = 0;
                  this.imageData = {};
                  this.canvas.innerHTML = "";
                  this.title.innerHTML = "";
                }
              }
            } else {
              this.build();
            }
            return this;
          },
          // Destroy the viewer
          destroy: function destroy() {
            var element = this.element, options = this.options;
            if (!element[NAMESPACE]) {
              return this;
            }
            this.destroyed = true;
            if (this.ready) {
              if (this.played) {
                this.stop();
              }
              if (options.inline) {
                if (this.fulled) {
                  this.exit();
                }
                this.unbind();
              } else if (this.isShown) {
                if (this.viewing) {
                  if (this.imageRendering) {
                    this.imageRendering.abort();
                  } else if (this.imageInitializing) {
                    this.imageInitializing.abort();
                  }
                }
                if (this.hiding) {
                  this.transitioning.abort();
                }
                this.hidden();
              } else if (this.showing) {
                this.transitioning.abort();
                this.hidden();
              }
              this.ready = false;
              this.viewer.parentNode.removeChild(this.viewer);
            } else if (options.inline) {
              if (this.delaying) {
                this.delaying.abort();
              } else if (this.initializing) {
                this.initializing.abort();
              }
            }
            if (!options.inline) {
              removeListener(element, EVENT_CLICK, this.onStart);
            }
            element[NAMESPACE] = void 0;
            return this;
          }
        };
        var others = {
          getImageURL: function getImageURL(image) {
            var url = this.options.url;
            if (isString2(url)) {
              url = image.getAttribute(url);
            } else if (isFunction2(url)) {
              url = url.call(this, image);
            } else {
              url = "";
            }
            return url;
          },
          enforceFocus: function enforceFocus() {
            var _this = this;
            this.clearEnforceFocus();
            addListener(document, EVENT_FOCUSIN, this.onFocusin = function(event) {
              var viewer = _this.viewer;
              var target = event.target;
              if (target === document || target === viewer || viewer.contains(target)) {
                return;
              }
              while (target) {
                if (target.getAttribute("tabindex") !== null || target.getAttribute("aria-modal") === "true") {
                  return;
                }
                target = target.parentElement;
              }
              viewer.focus();
            });
          },
          clearEnforceFocus: function clearEnforceFocus() {
            if (this.onFocusin) {
              removeListener(document, EVENT_FOCUSIN, this.onFocusin);
              this.onFocusin = null;
            }
          },
          open: function open() {
            var body = this.body;
            addClass(body, CLASS_OPEN);
            if (this.scrollbarWidth > 0) {
              body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
            }
          },
          close: function close() {
            var body = this.body;
            removeClass(body, CLASS_OPEN);
            if (this.scrollbarWidth > 0) {
              body.style.paddingRight = this.initialBodyPaddingRight;
            }
          },
          shown: function shown() {
            var element = this.element, options = this.options, viewer = this.viewer;
            this.fulled = true;
            this.isShown = true;
            this.render();
            this.bind();
            this.showing = false;
            if (options.focus) {
              viewer.focus();
              this.enforceFocus();
            }
            if (isFunction2(options.shown)) {
              addListener(element, EVENT_SHOWN, options.shown, {
                once: true
              });
            }
            if (dispatchEvent(element, EVENT_SHOWN) === false) {
              return;
            }
            if (this.ready && this.isShown && !this.hiding) {
              this.view(this.index);
            }
          },
          hidden: function hidden() {
            var element = this.element, options = this.options, viewer = this.viewer;
            if (options.fucus) {
              this.clearEnforceFocus();
            }
            this.close();
            this.unbind();
            addClass(viewer, CLASS_HIDE);
            viewer.removeAttribute("role");
            viewer.removeAttribute("aria-labelledby");
            viewer.removeAttribute("aria-modal");
            viewer.setAttribute("aria-hidden", true);
            this.resetList();
            this.resetImage();
            this.fulled = false;
            this.viewed = false;
            this.isShown = false;
            this.hiding = false;
            if (!this.destroyed) {
              if (isFunction2(options.hidden)) {
                addListener(element, EVENT_HIDDEN, options.hidden, {
                  once: true
                });
              }
              dispatchEvent(element, EVENT_HIDDEN, null, {
                cancelable: false
              });
            }
          },
          requestFullscreen: function requestFullscreen(options) {
            var document2 = this.element.ownerDocument;
            if (this.fulled && !(document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
              var documentElement = document2.documentElement;
              if (documentElement.requestFullscreen) {
                if (isPlainObject(options)) {
                  documentElement.requestFullscreen(options);
                } else {
                  documentElement.requestFullscreen();
                }
              } else if (documentElement.webkitRequestFullscreen) {
                documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              } else if (documentElement.mozRequestFullScreen) {
                documentElement.mozRequestFullScreen();
              } else if (documentElement.msRequestFullscreen) {
                documentElement.msRequestFullscreen();
              }
            }
          },
          exitFullscreen: function exitFullscreen() {
            var document2 = this.element.ownerDocument;
            if (this.fulled && (document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
              if (document2.exitFullscreen) {
                document2.exitFullscreen();
              } else if (document2.webkitExitFullscreen) {
                document2.webkitExitFullscreen();
              } else if (document2.mozCancelFullScreen) {
                document2.mozCancelFullScreen();
              } else if (document2.msExitFullscreen) {
                document2.msExitFullscreen();
              }
            }
          },
          change: function change(event) {
            var options = this.options, pointers = this.pointers;
            var pointer = pointers[Object.keys(pointers)[0]];
            if (!pointer) {
              return;
            }
            var offsetX = pointer.endX - pointer.startX;
            var offsetY = pointer.endY - pointer.startY;
            switch (this.action) {
              // Move the current image
              case ACTION_MOVE:
                if (offsetX !== 0 || offsetY !== 0) {
                  this.pointerMoved = true;
                  this.move(offsetX, offsetY, event);
                }
                break;
              // Zoom the current image
              case ACTION_ZOOM:
                this.zoom(getMaxZoomRatio(pointers), false, null, event);
                break;
              case ACTION_SWITCH: {
                this.action = "switched";
                var absoluteOffsetX = Math.abs(offsetX);
                if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
                  this.pointers = {};
                  if (offsetX > 1) {
                    this.prev(options.loop);
                  } else if (offsetX < -1) {
                    this.next(options.loop);
                  }
                }
                break;
              }
            }
            forEach(pointers, function(p) {
              p.startX = p.endX;
              p.startY = p.endY;
            });
          },
          isSwitchable: function isSwitchable() {
            var imageData = this.imageData, viewerData = this.viewerData;
            return this.length > 1 && imageData.x >= 0 && imageData.y >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
          }
        };
        var AnotherViewer = WINDOW.Viewer;
        var getUniqueID = /* @__PURE__ */ (function(id) {
          return function() {
            id += 1;
            return id;
          };
        })(-1);
        var Viewer2 = /* @__PURE__ */ (function() {
          function Viewer3(element) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, Viewer3);
            if (!element || element.nodeType !== 1) {
              throw new Error("The first argument is required and must be an element.");
            }
            this.element = element;
            this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
            this.action = false;
            this.fading = false;
            this.fulled = false;
            this.hiding = false;
            this.imageClicked = false;
            this.imageData = {};
            this.index = this.options.initialViewIndex;
            this.isImg = false;
            this.isShown = false;
            this.length = 0;
            this.moving = false;
            this.played = false;
            this.playing = false;
            this.pointers = {};
            this.ready = false;
            this.rotating = false;
            this.scaling = false;
            this.showing = false;
            this.timeout = false;
            this.tooltipping = false;
            this.viewed = false;
            this.viewing = false;
            this.wheeling = false;
            this.zooming = false;
            this.pointerMoved = false;
            this.id = getUniqueID();
            this.init();
          }
          return _createClass(Viewer3, [{
            key: "init",
            value: function init2() {
              var _this = this;
              var element = this.element, options = this.options;
              if (element[NAMESPACE]) {
                return;
              }
              element[NAMESPACE] = this;
              if (options.focus && !options.keyboard) {
                options.focus = false;
              }
              var isImg = element.localName === "img";
              var images = [];
              forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
                if (isFunction2(options.filter)) {
                  if (options.filter.call(_this, image)) {
                    images.push(image);
                  }
                } else if (_this.getImageURL(image)) {
                  images.push(image);
                }
              });
              this.isImg = isImg;
              this.length = images.length;
              this.images = images;
              this.initBody();
              if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
                options.transition = false;
              }
              if (options.inline) {
                var count = 0;
                var progress = function progress2() {
                  count += 1;
                  if (count === _this.length) {
                    var timeout;
                    _this.initializing = false;
                    _this.delaying = {
                      abort: function abort() {
                        clearTimeout(timeout);
                      }
                    };
                    timeout = setTimeout(function() {
                      _this.delaying = false;
                      _this.build();
                    }, 0);
                  }
                };
                this.initializing = {
                  abort: function abort() {
                    forEach(images, function(image) {
                      if (!image.complete) {
                        removeListener(image, EVENT_LOAD, progress);
                        removeListener(image, EVENT_ERROR, progress);
                      }
                    });
                  }
                };
                forEach(images, function(image) {
                  if (image.complete) {
                    progress();
                  } else {
                    var onLoad;
                    var onError;
                    addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
                      removeListener(image, EVENT_ERROR, onError);
                      progress();
                    }, {
                      once: true
                    });
                    addListener(image, EVENT_ERROR, onError = function onError2() {
                      removeListener(image, EVENT_LOAD, onLoad);
                      progress();
                    }, {
                      once: true
                    });
                  }
                });
              } else {
                addListener(element, EVENT_CLICK, this.onStart = function(_ref) {
                  var target = _ref.target;
                  if (target.localName === "img" && (!isFunction2(options.filter) || options.filter.call(_this, target))) {
                    _this.view(_this.images.indexOf(target));
                  }
                });
              }
            }
          }, {
            key: "build",
            value: function build() {
              if (this.ready) {
                return;
              }
              var element = this.element, options = this.options;
              var parent = element.parentNode;
              var template = document.createElement("div");
              template.innerHTML = TEMPLATE;
              var viewer = template.querySelector(".".concat(NAMESPACE, "-container"));
              var title = viewer.querySelector(".".concat(NAMESPACE, "-title"));
              var toolbar = viewer.querySelector(".".concat(NAMESPACE, "-toolbar"));
              var navbar = viewer.querySelector(".".concat(NAMESPACE, "-navbar"));
              var button = viewer.querySelector(".".concat(NAMESPACE, "-button"));
              var canvas = viewer.querySelector(".".concat(NAMESPACE, "-canvas"));
              this.parent = parent;
              this.viewer = viewer;
              this.title = title;
              this.toolbar = toolbar;
              this.navbar = navbar;
              this.button = button;
              this.canvas = canvas;
              this.footer = viewer.querySelector(".".concat(NAMESPACE, "-footer"));
              this.tooltipBox = viewer.querySelector(".".concat(NAMESPACE, "-tooltip"));
              this.player = viewer.querySelector(".".concat(NAMESPACE, "-player"));
              this.list = viewer.querySelector(".".concat(NAMESPACE, "-list"));
              viewer.id = "".concat(NAMESPACE).concat(this.id);
              title.id = "".concat(NAMESPACE, "Title").concat(this.id);
              addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
              addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
              toggleClass(button, CLASS_HIDE, !options.button);
              if (options.keyboard) {
                button.setAttribute("tabindex", 0);
              }
              if (options.backdrop) {
                addClass(viewer, "".concat(NAMESPACE, "-backdrop"));
                if (!options.inline && options.backdrop !== "static") {
                  setData(canvas, DATA_ACTION, "hide");
                }
              }
              if (isString2(options.className) && options.className) {
                options.className.split(REGEXP_SPACES).forEach(function(className) {
                  addClass(viewer, className);
                });
              }
              if (options.toolbar) {
                var list = document.createElement("ul");
                var custom = isPlainObject(options.toolbar);
                var zoomButtons = BUTTONS.slice(0, 3);
                var rotateButtons = BUTTONS.slice(7, 9);
                var scaleButtons = BUTTONS.slice(9);
                if (!custom) {
                  addClass(toolbar, getResponsiveClass(options.toolbar));
                }
                forEach(custom ? options.toolbar : BUTTONS, function(value, index) {
                  var deep = custom && isPlainObject(value);
                  var name = custom ? hyphenate2(index) : value;
                  var show = deep && !isUndefined(value.show) ? value.show : value;
                  if (!show || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
                    return;
                  }
                  var size2 = deep && !isUndefined(value.size) ? value.size : value;
                  var click = deep && !isUndefined(value.click) ? value.click : value;
                  var item = document.createElement("li");
                  if (options.keyboard) {
                    item.setAttribute("tabindex", 0);
                  }
                  item.setAttribute("role", "button");
                  addClass(item, "".concat(NAMESPACE, "-").concat(name));
                  if (!isFunction2(click)) {
                    setData(item, DATA_ACTION, name);
                  }
                  if (isNumber(show)) {
                    addClass(item, getResponsiveClass(show));
                  }
                  if (["small", "large"].indexOf(size2) !== -1) {
                    addClass(item, "".concat(NAMESPACE, "-").concat(size2));
                  } else if (name === "play") {
                    addClass(item, "".concat(NAMESPACE, "-large"));
                  }
                  if (isFunction2(click)) {
                    addListener(item, EVENT_CLICK, click);
                  }
                  list.appendChild(item);
                });
                toolbar.appendChild(list);
              } else {
                addClass(toolbar, CLASS_HIDE);
              }
              if (!options.rotatable) {
                var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
                addClass(rotates, CLASS_INVISIBLE);
                forEach(rotates, function(rotate) {
                  toolbar.appendChild(rotate);
                });
              }
              if (options.inline) {
                addClass(button, CLASS_FULLSCREEN);
                setStyle(viewer, {
                  zIndex: options.zIndexInline
                });
                if (window.getComputedStyle(parent).position === "static") {
                  setStyle(parent, {
                    position: "relative"
                  });
                }
                parent.insertBefore(viewer, element.nextSibling);
              } else {
                addClass(button, CLASS_CLOSE);
                addClass(viewer, CLASS_FIXED);
                addClass(viewer, CLASS_FADE);
                addClass(viewer, CLASS_HIDE);
                setStyle(viewer, {
                  zIndex: options.zIndex
                });
                var container = options.container;
                if (isString2(container)) {
                  container = element.ownerDocument.querySelector(container);
                }
                if (!container) {
                  container = this.body;
                }
                container.appendChild(viewer);
              }
              if (options.inline) {
                this.render();
                this.bind();
                this.isShown = true;
              }
              this.ready = true;
              if (isFunction2(options.ready)) {
                addListener(element, EVENT_READY, options.ready, {
                  once: true
                });
              }
              if (dispatchEvent(element, EVENT_READY) === false) {
                this.ready = false;
                return;
              }
              if (this.ready && options.inline) {
                this.view(this.index);
              }
            }
            /**
             * Get the no conflict viewer class.
             * @returns {Viewer} The viewer class.
             */
          }], [{
            key: "noConflict",
            value: function noConflict() {
              window.Viewer = AnotherViewer;
              return Viewer3;
            }
            /**
             * Change the default options.
             * @param {Object} options - The new default options.
             */
          }, {
            key: "setDefaults",
            value: function setDefaults(options) {
              assign(DEFAULTS, isPlainObject(options) && options);
            }
          }]);
        })();
        assign(Viewer2.prototype, render4, events, handlers, methods, others);
        return Viewer2;
      }));
    }
  });

  // node_modules/@embedpdf/pdfium/dist/index.browser.js
  var index_browser_exports = {};
  __export(index_browser_exports, {
    DEFAULT_PDFIUM_WASM_URL: () => DEFAULT_PDFIUM_WASM_URL,
    init: () => init
  });
  async function createWrappedModule(pdfium) {
    const module = {
      pdfium
    };
    for (const key in functions) {
      const ident = key;
      const args = functions[ident][0];
      const ret = functions[ident][1];
      module[ident] = pdfium.cwrap(key, ret, args);
    }
    return module;
  }
  async function init(moduleOverrides) {
    const pdfium = await createPdfium(moduleOverrides);
    return createWrappedModule(pdfium);
  }
  var import_meta, createPdfium, functions, DEFAULT_PDFIUM_WASM_URL;
  var init_index_browser = __esm({
    "node_modules/@embedpdf/pdfium/dist/index.browser.js"() {
      import_meta = {};
      createPdfium = (() => {
        var _scriptName = import_meta.url;
        return async function(moduleArg = {}) {
          var moduleRtn;
          var Module2 = moduleArg;
          var readyPromiseResolve, readyPromiseReject;
          var readyPromise = new Promise((resolve, reject) => {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
          });
          [
            "_EPDF_GetMetaKeyCount",
            "_EPDF_GetMetaKeyName",
            "_EPDF_GetMetaTrapped",
            "_EPDF_GetPageRotationByIndex",
            "_EPDF_HasMetaText",
            "_EPDF_IsEncrypted",
            "_EPDF_IsOwnerUnlocked",
            "_EPDF_PNG_EncodeRGBA",
            "_EPDF_RemoveEncryption",
            "_EPDF_RenderAnnotBitmap",
            "_EPDF_SetEncryption",
            "_EPDF_SetMetaText",
            "_EPDF_SetMetaTrapped",
            "_EPDF_UnlockOwnerPermissions",
            "_EPDFAction_CreateGoTo",
            "_EPDFAction_CreateGoToNamed",
            "_EPDFAction_CreateLaunch",
            "_EPDFAction_CreateRemoteGoToByName",
            "_EPDFAction_CreateRemoteGoToDest",
            "_EPDFAction_CreateURI",
            "_EPDFAnnot_ClearColor",
            "_EPDFAnnot_GenerateAppearance",
            "_EPDFAnnot_GenerateAppearanceWithBlend",
            "_EPDFAnnot_GetBlendMode",
            "_EPDFAnnot_GetBorderDashPattern",
            "_EPDFAnnot_GetBorderDashPatternCount",
            "_EPDFAnnot_GetBorderEffect",
            "_EPDFAnnot_GetBorderStyle",
            "_EPDFAnnot_GetColor",
            "_EPDFAnnot_GetDefaultAppearance",
            "_EPDFAnnot_GetIcon",
            "_EPDFAnnot_GetIntent",
            "_EPDFAnnot_GetLineEndings",
            "_EPDFAnnot_GetOpacity",
            "_EPDFAnnot_GetRectangleDifferences",
            "_EPDFAnnot_GetRichContent",
            "_EPDFAnnot_GetTextAlignment",
            "_EPDFAnnot_GetVerticalAlignment",
            "_EPDFAnnot_SetBorderDashPattern",
            "_EPDFAnnot_SetBorderStyle",
            "_EPDFAnnot_SetColor",
            "_EPDFAnnot_SetDefaultAppearance",
            "_EPDFAnnot_SetIcon",
            "_EPDFAnnot_SetIntent",
            "_EPDFAnnot_SetLine",
            "_EPDFAnnot_SetLineEndings",
            "_EPDFAnnot_SetLinkedAnnot",
            "_EPDFAnnot_SetOpacity",
            "_EPDFAnnot_SetTextAlignment",
            "_EPDFAnnot_SetVerticalAlignment",
            "_EPDFAnnot_SetVertices",
            "_EPDFAnnot_UpdateAppearanceToRect",
            "_EPDFAttachment_GetDescription",
            "_EPDFAttachment_GetIntegerValue",
            "_EPDFAttachment_SetDescription",
            "_EPDFAttachment_SetSubtype",
            "_EPDFBookmark_AppendChild",
            "_EPDFBookmark_Clear",
            "_EPDFBookmark_ClearTarget",
            "_EPDFBookmark_Create",
            "_EPDFBookmark_Delete",
            "_EPDFBookmark_InsertAfter",
            "_EPDFBookmark_SetAction",
            "_EPDFBookmark_SetDest",
            "_EPDFBookmark_SetTitle",
            "_EPDFCatalog_GetLanguage",
            "_EPDFDest_CreateRemoteView",
            "_EPDFDest_CreateRemoteXYZ",
            "_EPDFDest_CreateView",
            "_EPDFDest_CreateXYZ",
            "_EPDFNamedDest_Remove",
            "_EPDFNamedDest_SetDest",
            "_EPDFPage_CreateAnnot",
            "_EPDFPage_GetAnnotByName",
            "_EPDFPage_GetAnnotCountRaw",
            "_EPDFPage_GetAnnotRaw",
            "_EPDFPage_RemoveAnnotByName",
            "_EPDFPage_RemoveAnnotRaw",
            "_EPDFText_RedactInQuads",
            "_EPDFText_RedactInRect",
            "_FORM_CanRedo",
            "_FORM_CanUndo",
            "_FORM_DoDocumentAAction",
            "_FORM_DoDocumentJSAction",
            "_FORM_DoDocumentOpenAction",
            "_FORM_DoPageAAction",
            "_FORM_ForceToKillFocus",
            "_FORM_GetFocusedAnnot",
            "_FORM_GetFocusedText",
            "_FORM_GetSelectedText",
            "_FORM_IsIndexSelected",
            "_FORM_OnAfterLoadPage",
            "_FORM_OnBeforeClosePage",
            "_FORM_OnChar",
            "_FORM_OnFocus",
            "_FORM_OnKeyDown",
            "_FORM_OnKeyUp",
            "_FORM_OnLButtonDoubleClick",
            "_FORM_OnLButtonDown",
            "_FORM_OnLButtonUp",
            "_FORM_OnMouseMove",
            "_FORM_OnMouseWheel",
            "_FORM_OnRButtonDown",
            "_FORM_OnRButtonUp",
            "_FORM_Redo",
            "_FORM_ReplaceAndKeepSelection",
            "_FORM_ReplaceSelection",
            "_FORM_SelectAllText",
            "_FORM_SetFocusedAnnot",
            "_FORM_SetIndexSelected",
            "_FORM_Undo",
            "_FPDF_AddInstalledFont",
            "_FPDF_CloseDocument",
            "_FPDF_ClosePage",
            "_FPDF_CloseXObject",
            "_FPDF_CopyViewerPreferences",
            "_FPDF_CountNamedDests",
            "_FPDF_CreateClipPath",
            "_FPDF_CreateNewDocument",
            "_FPDF_DestroyClipPath",
            "_FPDF_DestroyLibrary",
            "_FPDF_DeviceToPage",
            "_FPDF_DocumentHasValidCrossReferenceTable",
            "_FPDF_FFLDraw",
            "_FPDF_FreeDefaultSystemFontInfo",
            "_FPDF_GetDefaultSystemFontInfo",
            "_FPDF_GetDefaultTTFMap",
            "_FPDF_GetDefaultTTFMapCount",
            "_FPDF_GetDefaultTTFMapEntry",
            "_FPDF_GetDocPermissions",
            "_FPDF_GetDocUserPermissions",
            "_FPDF_GetFileIdentifier",
            "_FPDF_GetFileVersion",
            "_FPDF_GetFormType",
            "_FPDF_GetLastError",
            "_FPDF_GetMetaText",
            "_FPDF_GetNamedDest",
            "_FPDF_GetNamedDestByName",
            "_FPDF_GetPageAAction",
            "_FPDF_GetPageBoundingBox",
            "_FPDF_GetPageCount",
            "_FPDF_GetPageHeight",
            "_FPDF_GetPageHeightF",
            "_FPDF_GetPageLabel",
            "_FPDF_GetPageSizeByIndex",
            "_FPDF_GetPageSizeByIndexF",
            "_FPDF_GetPageWidth",
            "_FPDF_GetPageWidthF",
            "_FPDF_GetSecurityHandlerRevision",
            "_FPDF_GetSignatureCount",
            "_FPDF_GetSignatureObject",
            "_FPDF_GetTrailerEnds",
            "_FPDF_GetXFAPacketContent",
            "_FPDF_GetXFAPacketCount",
            "_FPDF_GetXFAPacketName",
            "_FPDF_ImportNPagesToOne",
            "_FPDF_ImportPages",
            "_FPDF_ImportPagesByIndex",
            "_FPDF_InitLibrary",
            "_FPDF_InitLibraryWithConfig",
            "_FPDF_LoadCustomDocument",
            "_FPDF_LoadDocument",
            "_FPDF_LoadMemDocument",
            "_FPDF_LoadMemDocument64",
            "_FPDF_LoadPage",
            "_FPDF_LoadXFA",
            "_FPDF_MovePages",
            "_FPDF_NewFormObjectFromXObject",
            "_FPDF_NewXObjectFromPage",
            "_FPDF_PageToDevice",
            "_FPDF_RemoveFormFieldHighlight",
            "_FPDF_RenderPage_Close",
            "_FPDF_RenderPage_Continue",
            "_FPDF_RenderPageBitmap",
            "_FPDF_RenderPageBitmap_Start",
            "_FPDF_RenderPageBitmapWithColorScheme_Start",
            "_FPDF_RenderPageBitmapWithMatrix",
            "_FPDF_SaveAsCopy",
            "_FPDF_SaveWithVersion",
            "_FPDF_SetFormFieldHighlightAlpha",
            "_FPDF_SetFormFieldHighlightColor",
            "_FPDF_SetSandBoxPolicy",
            "_FPDF_SetSystemFontInfo",
            "_FPDF_StructElement_Attr_CountChildren",
            "_FPDF_StructElement_Attr_GetBlobValue",
            "_FPDF_StructElement_Attr_GetBooleanValue",
            "_FPDF_StructElement_Attr_GetChildAtIndex",
            "_FPDF_StructElement_Attr_GetCount",
            "_FPDF_StructElement_Attr_GetName",
            "_FPDF_StructElement_Attr_GetNumberValue",
            "_FPDF_StructElement_Attr_GetStringValue",
            "_FPDF_StructElement_Attr_GetType",
            "_FPDF_StructElement_Attr_GetValue",
            "_FPDF_StructElement_CountChildren",
            "_FPDF_StructElement_GetActualText",
            "_FPDF_StructElement_GetAltText",
            "_FPDF_StructElement_GetAttributeAtIndex",
            "_FPDF_StructElement_GetAttributeCount",
            "_FPDF_StructElement_GetChildAtIndex",
            "_FPDF_StructElement_GetChildMarkedContentID",
            "_FPDF_StructElement_GetID",
            "_FPDF_StructElement_GetLang",
            "_FPDF_StructElement_GetMarkedContentID",
            "_FPDF_StructElement_GetMarkedContentIdAtIndex",
            "_FPDF_StructElement_GetMarkedContentIdCount",
            "_FPDF_StructElement_GetObjType",
            "_FPDF_StructElement_GetParent",
            "_FPDF_StructElement_GetStringAttribute",
            "_FPDF_StructElement_GetTitle",
            "_FPDF_StructElement_GetType",
            "_FPDF_StructTree_Close",
            "_FPDF_StructTree_CountChildren",
            "_FPDF_StructTree_GetChildAtIndex",
            "_FPDF_StructTree_GetForPage",
            "_FPDF_VIEWERREF_GetDuplex",
            "_FPDF_VIEWERREF_GetName",
            "_FPDF_VIEWERREF_GetNumCopies",
            "_FPDF_VIEWERREF_GetPrintPageRange",
            "_FPDF_VIEWERREF_GetPrintPageRangeCount",
            "_FPDF_VIEWERREF_GetPrintPageRangeElement",
            "_FPDF_VIEWERREF_GetPrintScaling",
            "_FPDFAction_GetDest",
            "_FPDFAction_GetFilePath",
            "_FPDFAction_GetType",
            "_FPDFAction_GetURIPath",
            "_FPDFAnnot_AddFileAttachment",
            "_FPDFAnnot_AddInkStroke",
            "_FPDFAnnot_AppendAttachmentPoints",
            "_FPDFAnnot_AppendObject",
            "_FPDFAnnot_CountAttachmentPoints",
            "_FPDFAnnot_GetAP",
            "_FPDFAnnot_GetAttachmentPoints",
            "_FPDFAnnot_GetBorder",
            "_FPDFAnnot_GetColor",
            "_FPDFAnnot_GetFileAttachment",
            "_FPDFAnnot_GetFlags",
            "_FPDFAnnot_GetFocusableSubtypes",
            "_FPDFAnnot_GetFocusableSubtypesCount",
            "_FPDFAnnot_GetFontColor",
            "_FPDFAnnot_GetFontSize",
            "_FPDFAnnot_GetFormAdditionalActionJavaScript",
            "_FPDFAnnot_GetFormControlCount",
            "_FPDFAnnot_GetFormControlIndex",
            "_FPDFAnnot_GetFormFieldAlternateName",
            "_FPDFAnnot_GetFormFieldAtPoint",
            "_FPDFAnnot_GetFormFieldExportValue",
            "_FPDFAnnot_GetFormFieldFlags",
            "_FPDFAnnot_GetFormFieldName",
            "_FPDFAnnot_GetFormFieldType",
            "_FPDFAnnot_GetFormFieldValue",
            "_FPDFAnnot_GetInkListCount",
            "_FPDFAnnot_GetInkListPath",
            "_FPDFAnnot_GetLine",
            "_FPDFAnnot_GetLink",
            "_FPDFAnnot_GetLinkedAnnot",
            "_FPDFAnnot_GetNumberValue",
            "_FPDFAnnot_GetObject",
            "_FPDFAnnot_GetObjectCount",
            "_FPDFAnnot_GetOptionCount",
            "_FPDFAnnot_GetOptionLabel",
            "_FPDFAnnot_GetRect",
            "_FPDFAnnot_GetStringValue",
            "_FPDFAnnot_GetSubtype",
            "_FPDFAnnot_GetValueType",
            "_FPDFAnnot_GetVertices",
            "_FPDFAnnot_HasAttachmentPoints",
            "_FPDFAnnot_HasKey",
            "_FPDFAnnot_IsChecked",
            "_FPDFAnnot_IsObjectSupportedSubtype",
            "_FPDFAnnot_IsOptionSelected",
            "_FPDFAnnot_IsSupportedSubtype",
            "_FPDFAnnot_RemoveInkList",
            "_FPDFAnnot_RemoveObject",
            "_FPDFAnnot_SetAP",
            "_FPDFAnnot_SetAttachmentPoints",
            "_FPDFAnnot_SetBorder",
            "_FPDFAnnot_SetColor",
            "_FPDFAnnot_SetFlags",
            "_FPDFAnnot_SetFocusableSubtypes",
            "_FPDFAnnot_SetFontColor",
            "_FPDFAnnot_SetFormFieldFlags",
            "_FPDFAnnot_SetRect",
            "_FPDFAnnot_SetStringValue",
            "_FPDFAnnot_SetURI",
            "_FPDFAnnot_UpdateObject",
            "_FPDFAttachment_GetFile",
            "_FPDFAttachment_GetName",
            "_FPDFAttachment_GetStringValue",
            "_FPDFAttachment_GetSubtype",
            "_FPDFAttachment_GetValueType",
            "_FPDFAttachment_HasKey",
            "_FPDFAttachment_SetFile",
            "_FPDFAttachment_SetStringValue",
            "_FPDFAvail_Create",
            "_FPDFAvail_Destroy",
            "_FPDFAvail_GetDocument",
            "_FPDFAvail_GetFirstPageNum",
            "_FPDFAvail_IsDocAvail",
            "_FPDFAvail_IsFormAvail",
            "_FPDFAvail_IsLinearized",
            "_FPDFAvail_IsPageAvail",
            "_FPDFBitmap_Create",
            "_FPDFBitmap_CreateEx",
            "_FPDFBitmap_Destroy",
            "_FPDFBitmap_FillRect",
            "_FPDFBitmap_GetBuffer",
            "_FPDFBitmap_GetFormat",
            "_FPDFBitmap_GetHeight",
            "_FPDFBitmap_GetStride",
            "_FPDFBitmap_GetWidth",
            "_FPDFBookmark_Find",
            "_FPDFBookmark_GetAction",
            "_FPDFBookmark_GetCount",
            "_FPDFBookmark_GetDest",
            "_FPDFBookmark_GetFirstChild",
            "_FPDFBookmark_GetNextSibling",
            "_FPDFBookmark_GetTitle",
            "_FPDFCatalog_IsTagged",
            "_FPDFCatalog_SetLanguage",
            "_FPDFClipPath_CountPaths",
            "_FPDFClipPath_CountPathSegments",
            "_FPDFClipPath_GetPathSegment",
            "_FPDFDest_GetDestPageIndex",
            "_FPDFDest_GetLocationInPage",
            "_FPDFDest_GetView",
            "_FPDFDoc_AddAttachment",
            "_FPDFDoc_CloseJavaScriptAction",
            "_FPDFDoc_DeleteAttachment",
            "_FPDFDOC_ExitFormFillEnvironment",
            "_FPDFDoc_GetAttachment",
            "_FPDFDoc_GetAttachmentCount",
            "_FPDFDoc_GetJavaScriptAction",
            "_FPDFDoc_GetJavaScriptActionCount",
            "_FPDFDoc_GetPageMode",
            "_FPDFDOC_InitFormFillEnvironment",
            "_FPDFFont_Close",
            "_FPDFFont_GetAscent",
            "_FPDFFont_GetBaseFontName",
            "_FPDFFont_GetDescent",
            "_FPDFFont_GetFamilyName",
            "_FPDFFont_GetFlags",
            "_FPDFFont_GetFontData",
            "_FPDFFont_GetGlyphPath",
            "_FPDFFont_GetGlyphWidth",
            "_FPDFFont_GetIsEmbedded",
            "_FPDFFont_GetItalicAngle",
            "_FPDFFont_GetWeight",
            "_FPDFFormObj_CountObjects",
            "_FPDFFormObj_GetObject",
            "_FPDFFormObj_RemoveObject",
            "_FPDFGlyphPath_CountGlyphSegments",
            "_FPDFGlyphPath_GetGlyphPathSegment",
            "_FPDFImageObj_GetBitmap",
            "_FPDFImageObj_GetIccProfileDataDecoded",
            "_FPDFImageObj_GetImageDataDecoded",
            "_FPDFImageObj_GetImageDataRaw",
            "_FPDFImageObj_GetImageFilter",
            "_FPDFImageObj_GetImageFilterCount",
            "_FPDFImageObj_GetImageMetadata",
            "_FPDFImageObj_GetImagePixelSize",
            "_FPDFImageObj_GetRenderedBitmap",
            "_FPDFImageObj_LoadJpegFile",
            "_FPDFImageObj_LoadJpegFileInline",
            "_FPDFImageObj_SetBitmap",
            "_FPDFImageObj_SetMatrix",
            "_FPDFJavaScriptAction_GetName",
            "_FPDFJavaScriptAction_GetScript",
            "_FPDFLink_CloseWebLinks",
            "_FPDFLink_CountQuadPoints",
            "_FPDFLink_CountRects",
            "_FPDFLink_CountWebLinks",
            "_FPDFLink_Enumerate",
            "_FPDFLink_GetAction",
            "_FPDFLink_GetAnnot",
            "_FPDFLink_GetAnnotRect",
            "_FPDFLink_GetDest",
            "_FPDFLink_GetLinkAtPoint",
            "_FPDFLink_GetLinkZOrderAtPoint",
            "_FPDFLink_GetQuadPoints",
            "_FPDFLink_GetRect",
            "_FPDFLink_GetTextRange",
            "_FPDFLink_GetURL",
            "_FPDFLink_LoadWebLinks",
            "_FPDFPage_CloseAnnot",
            "_FPDFPage_CountObjects",
            "_FPDFPage_CreateAnnot",
            "_FPDFPage_Delete",
            "_FPDFPage_Flatten",
            "_FPDFPage_FormFieldZOrderAtPoint",
            "_FPDFPage_GenerateContent",
            "_FPDFPage_GetAnnot",
            "_FPDFPage_GetAnnotCount",
            "_FPDFPage_GetAnnotIndex",
            "_FPDFPage_GetArtBox",
            "_FPDFPage_GetBleedBox",
            "_FPDFPage_GetCropBox",
            "_FPDFPage_GetDecodedThumbnailData",
            "_FPDFPage_GetMediaBox",
            "_FPDFPage_GetObject",
            "_FPDFPage_GetRawThumbnailData",
            "_FPDFPage_GetRotation",
            "_FPDFPage_GetThumbnailAsBitmap",
            "_FPDFPage_GetTrimBox",
            "_FPDFPage_HasFormFieldAtPoint",
            "_FPDFPage_HasTransparency",
            "_FPDFPage_InsertClipPath",
            "_FPDFPage_InsertObject",
            "_FPDFPage_InsertObjectAtIndex",
            "_FPDFPage_New",
            "_FPDFPage_RemoveAnnot",
            "_FPDFPage_RemoveObject",
            "_FPDFPage_SetArtBox",
            "_FPDFPage_SetBleedBox",
            "_FPDFPage_SetCropBox",
            "_FPDFPage_SetMediaBox",
            "_FPDFPage_SetRotation",
            "_FPDFPage_SetTrimBox",
            "_FPDFPage_TransformAnnots",
            "_FPDFPage_TransFormWithClip",
            "_FPDFPageObj_AddMark",
            "_FPDFPageObj_CountMarks",
            "_FPDFPageObj_CreateNewPath",
            "_FPDFPageObj_CreateNewRect",
            "_FPDFPageObj_CreateTextObj",
            "_FPDFPageObj_Destroy",
            "_FPDFPageObj_GetBounds",
            "_FPDFPageObj_GetClipPath",
            "_FPDFPageObj_GetDashArray",
            "_FPDFPageObj_GetDashCount",
            "_FPDFPageObj_GetDashPhase",
            "_FPDFPageObj_GetFillColor",
            "_FPDFPageObj_GetIsActive",
            "_FPDFPageObj_GetLineCap",
            "_FPDFPageObj_GetLineJoin",
            "_FPDFPageObj_GetMark",
            "_FPDFPageObj_GetMarkedContentID",
            "_FPDFPageObj_GetMatrix",
            "_FPDFPageObj_GetRotatedBounds",
            "_FPDFPageObj_GetStrokeColor",
            "_FPDFPageObj_GetStrokeWidth",
            "_FPDFPageObj_GetType",
            "_FPDFPageObj_HasTransparency",
            "_FPDFPageObj_NewImageObj",
            "_FPDFPageObj_NewTextObj",
            "_FPDFPageObj_RemoveMark",
            "_FPDFPageObj_SetBlendMode",
            "_FPDFPageObj_SetDashArray",
            "_FPDFPageObj_SetDashPhase",
            "_FPDFPageObj_SetFillColor",
            "_FPDFPageObj_SetIsActive",
            "_FPDFPageObj_SetLineCap",
            "_FPDFPageObj_SetLineJoin",
            "_FPDFPageObj_SetMatrix",
            "_FPDFPageObj_SetStrokeColor",
            "_FPDFPageObj_SetStrokeWidth",
            "_FPDFPageObj_Transform",
            "_FPDFPageObj_TransformClipPath",
            "_FPDFPageObj_TransformF",
            "_FPDFPageObjMark_CountParams",
            "_FPDFPageObjMark_GetName",
            "_FPDFPageObjMark_GetParamBlobValue",
            "_FPDFPageObjMark_GetParamIntValue",
            "_FPDFPageObjMark_GetParamKey",
            "_FPDFPageObjMark_GetParamStringValue",
            "_FPDFPageObjMark_GetParamValueType",
            "_FPDFPageObjMark_RemoveParam",
            "_FPDFPageObjMark_SetBlobParam",
            "_FPDFPageObjMark_SetIntParam",
            "_FPDFPageObjMark_SetStringParam",
            "_FPDFPath_BezierTo",
            "_FPDFPath_Close",
            "_FPDFPath_CountSegments",
            "_FPDFPath_GetDrawMode",
            "_FPDFPath_GetPathSegment",
            "_FPDFPath_LineTo",
            "_FPDFPath_MoveTo",
            "_FPDFPath_SetDrawMode",
            "_FPDFPathSegment_GetClose",
            "_FPDFPathSegment_GetPoint",
            "_FPDFPathSegment_GetType",
            "_FPDFSignatureObj_GetByteRange",
            "_FPDFSignatureObj_GetContents",
            "_FPDFSignatureObj_GetDocMDPPermission",
            "_FPDFSignatureObj_GetReason",
            "_FPDFSignatureObj_GetSubFilter",
            "_FPDFSignatureObj_GetTime",
            "_FPDFText_ClosePage",
            "_FPDFText_CountChars",
            "_FPDFText_CountRects",
            "_FPDFText_FindClose",
            "_FPDFText_FindNext",
            "_FPDFText_FindPrev",
            "_FPDFText_FindStart",
            "_FPDFText_GetBoundedText",
            "_FPDFText_GetCharAngle",
            "_FPDFText_GetCharBox",
            "_FPDFText_GetCharIndexAtPos",
            "_FPDFText_GetCharIndexFromTextIndex",
            "_FPDFText_GetCharOrigin",
            "_FPDFText_GetFillColor",
            "_FPDFText_GetFontInfo",
            "_FPDFText_GetFontSize",
            "_FPDFText_GetFontWeight",
            "_FPDFText_GetLooseCharBox",
            "_FPDFText_GetMatrix",
            "_FPDFText_GetRect",
            "_FPDFText_GetSchCount",
            "_FPDFText_GetSchResultIndex",
            "_FPDFText_GetStrokeColor",
            "_FPDFText_GetText",
            "_FPDFText_GetTextIndexFromCharIndex",
            "_FPDFText_GetTextObject",
            "_FPDFText_GetUnicode",
            "_FPDFText_HasUnicodeMapError",
            "_FPDFText_IsGenerated",
            "_FPDFText_IsHyphen",
            "_FPDFText_LoadCidType2Font",
            "_FPDFText_LoadFont",
            "_FPDFText_LoadPage",
            "_FPDFText_LoadStandardFont",
            "_FPDFText_SetCharcodes",
            "_FPDFText_SetText",
            "_FPDFTextObj_GetFont",
            "_FPDFTextObj_GetFontSize",
            "_FPDFTextObj_GetRenderedBitmap",
            "_FPDFTextObj_GetText",
            "_FPDFTextObj_GetTextRenderMode",
            "_FPDFTextObj_SetTextRenderMode",
            "_PDFiumExt_CloseFileWriter",
            "_PDFiumExt_CloseFormFillInfo",
            "_PDFiumExt_ExitFormFillEnvironment",
            "_PDFiumExt_GetFileWriterData",
            "_PDFiumExt_GetFileWriterSize",
            "_PDFiumExt_Init",
            "_PDFiumExt_InitFormFillEnvironment",
            "_PDFiumExt_OpenFileWriter",
            "_PDFiumExt_OpenFormFillInfo",
            "_PDFiumExt_SaveAsCopy",
            "_malloc",
            "_free",
            "_memory",
            "___indirect_function_table",
            "onRuntimeInitialized"
          ].forEach((prop) => {
            if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
              Object.defineProperty(readyPromise, prop, {
                get: () => abort(
                  "You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
                ),
                set: () => abort(
                  "You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
                )
              });
            }
          });
          var ENVIRONMENT_IS_WEB = typeof window == "object";
          var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
          typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
          var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && true && !ENVIRONMENT_IS_WORKER;
          var require2;
          var moduleOverrides = Object.assign({}, Module2);
          var thisProgram = "./this.program";
          var scriptDirectory = "";
          function locateFile(path) {
            if (Module2["locateFile"]) {
              return Module2["locateFile"](path, scriptDirectory);
            }
            return scriptDirectory + path;
          }
          var readAsync, readBinary;
          if (ENVIRONMENT_IS_SHELL) {
            if (typeof process == "object" && typeof require2 === "function" || typeof window == "object" || typeof importScripts == "function")
              throw new Error(
                "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
              );
            readBinary = (f) => {
              if (typeof readbuffer == "function") {
                return new Uint8Array(readbuffer(f));
              }
              let data2 = read(f, "binary");
              assert(typeof data2 == "object");
              return data2;
            };
            readAsync = (f) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => resolve(readBinary(f)));
              });
            };
            globalThis.clearTimeout ??= (id) => {
            };
            globalThis.setTimeout ??= (f) => typeof f == "function" ? f() : abort();
            if (typeof print != "undefined") {
              globalThis.console ??= /** @type{!Console} */
              {};
              console.log = /** @type{!function(this:Console, ...*): undefined} */
              print;
              console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */
              globalThis.printErr ?? print;
            }
          } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
              scriptDirectory = self.location.href;
            } else if (typeof document != "undefined" && document.currentScript) {
              scriptDirectory = document.currentScript.src;
            }
            if (_scriptName) {
              scriptDirectory = _scriptName;
            }
            if (scriptDirectory.startsWith("blob:")) {
              scriptDirectory = "";
            } else {
              scriptDirectory = scriptDirectory.substr(
                0,
                scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
              );
            }
            if (!(typeof window == "object" || typeof importScripts == "function"))
              throw new Error(
                "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
              );
            {
              if (ENVIRONMENT_IS_WORKER) {
                readBinary = (url) => {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url, false);
                  xhr.responseType = "arraybuffer";
                  xhr.send(null);
                  return new Uint8Array(
                    /** @type{!ArrayBuffer} */
                    xhr.response
                  );
                };
              }
              readAsync = (url) => {
                assert(!isFileURI(url), "readAsync does not work with file:// URLs");
                return fetch(url, { credentials: "same-origin" }).then((response) => {
                  if (response.ok) {
                    return response.arrayBuffer();
                  }
                  return Promise.reject(new Error(response.status + " : " + response.url));
                });
              };
            }
          } else {
            throw new Error("environment detection error");
          }
          var out = Module2["print"] || console.log.bind(console);
          var err = Module2["printErr"] || console.error.bind(console);
          Object.assign(Module2, moduleOverrides);
          moduleOverrides = null;
          checkIncomingModuleAPI();
          if (Module2["arguments"]) Module2["arguments"];
          legacyModuleProp("arguments", "arguments_");
          if (Module2["thisProgram"]) thisProgram = Module2["thisProgram"];
          legacyModuleProp("thisProgram", "thisProgram");
          assert(
            typeof Module2["memoryInitializerPrefixURL"] == "undefined",
            "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"
          );
          assert(
            typeof Module2["pthreadMainPrefixURL"] == "undefined",
            "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"
          );
          assert(
            typeof Module2["cdInitializerPrefixURL"] == "undefined",
            "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"
          );
          assert(
            typeof Module2["filePackagePrefixURL"] == "undefined",
            "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"
          );
          assert(typeof Module2["read"] == "undefined", "Module.read option was removed");
          assert(
            typeof Module2["readAsync"] == "undefined",
            "Module.readAsync option was removed (modify readAsync in JS)"
          );
          assert(
            typeof Module2["readBinary"] == "undefined",
            "Module.readBinary option was removed (modify readBinary in JS)"
          );
          assert(
            typeof Module2["setWindowTitle"] == "undefined",
            "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"
          );
          assert(
            typeof Module2["TOTAL_MEMORY"] == "undefined",
            "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"
          );
          legacyModuleProp("asm", "wasmExports");
          legacyModuleProp("readAsync", "readAsync");
          legacyModuleProp("readBinary", "readBinary");
          legacyModuleProp("setWindowTitle", "setWindowTitle");
          var wasmBinary = Module2["wasmBinary"];
          legacyModuleProp("wasmBinary", "wasmBinary");
          if (typeof WebAssembly != "object") {
            err("no native wasm support detected");
          }
          var wasmMemory;
          var ABORT = false;
          function assert(condition, text) {
            if (!condition) {
              abort("Assertion failed" + (text ? ": " + text : ""));
            }
          }
          var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
          function updateMemoryViews() {
            var b = wasmMemory.buffer;
            Module2["HEAP8"] = HEAP8 = new Int8Array(b);
            Module2["HEAP16"] = HEAP16 = new Int16Array(b);
            Module2["HEAPU8"] = HEAPU8 = new Uint8Array(b);
            Module2["HEAPU16"] = HEAPU16 = new Uint16Array(b);
            Module2["HEAP32"] = HEAP32 = new Int32Array(b);
            Module2["HEAPU32"] = HEAPU32 = new Uint32Array(b);
            Module2["HEAPF32"] = HEAPF32 = new Float32Array(b);
            Module2["HEAPF64"] = HEAPF64 = new Float64Array(b);
          }
          assert(
            !Module2["STACK_SIZE"],
            "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"
          );
          assert(
            typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != void 0 && Int32Array.prototype.set != void 0,
            "JS engine does not provide full typed array support"
          );
          assert(
            !Module2["wasmMemory"],
            "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"
          );
          assert(
            !Module2["INITIAL_MEMORY"],
            "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"
          );
          function writeStackCookie() {
            var max2 = _emscripten_stack_get_end();
            assert((max2 & 3) == 0);
            if (max2 == 0) {
              max2 += 4;
            }
            HEAPU32[max2 >> 2] = 34821223;
            HEAPU32[max2 + 4 >> 2] = 2310721022;
            HEAPU32[0 >> 2] = 1668509029;
          }
          function checkStackCookie() {
            if (ABORT) return;
            var max2 = _emscripten_stack_get_end();
            if (max2 == 0) {
              max2 += 4;
            }
            var cookie1 = HEAPU32[max2 >> 2];
            var cookie2 = HEAPU32[max2 + 4 >> 2];
            if (cookie1 != 34821223 || cookie2 != 2310721022) {
              abort(
                `Stack overflow! Stack cookie has been overwritten at ${ptrToString(max2)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`
              );
            }
            if (HEAPU32[0 >> 2] != 1668509029) {
              abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
            }
          }
          var __ATPRERUN__ = [];
          var __ATINIT__ = [];
          var __ATPOSTRUN__ = [];
          var runtimeInitialized = false;
          function preRun() {
            var preRuns = Module2["preRun"];
            if (preRuns) {
              if (typeof preRuns == "function") preRuns = [preRuns];
              preRuns.forEach(addOnPreRun);
            }
            callRuntimeCallbacks(__ATPRERUN__);
          }
          function initRuntime() {
            assert(!runtimeInitialized);
            runtimeInitialized = true;
            checkStackCookie();
            if (!Module2["noFSInit"] && !FS.initialized) FS.init();
            FS.ignorePermissions = false;
            callRuntimeCallbacks(__ATINIT__);
          }
          function postRun() {
            checkStackCookie();
            var postRuns = Module2["postRun"];
            if (postRuns) {
              if (typeof postRuns == "function") postRuns = [postRuns];
              postRuns.forEach(addOnPostRun);
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
          }
          function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
          }
          function addOnInit(cb) {
            __ATINIT__.unshift(cb);
          }
          function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
          }
          assert(
            Math.imul,
            "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
          );
          assert(
            Math.fround,
            "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
          );
          assert(
            Math.clz32,
            "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
          );
          assert(
            Math.trunc,
            "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
          );
          var runDependencies = 0;
          var runDependencyWatcher = null;
          var dependenciesFulfilled = null;
          var runDependencyTracking = {};
          function getUniqueRunDependency(id) {
            var orig = id;
            while (1) {
              if (!runDependencyTracking[id]) return id;
              id = orig + Math.random();
            }
          }
          function addRunDependency(id) {
            runDependencies++;
            Module2["monitorRunDependencies"]?.(runDependencies);
            if (id) {
              assert(!runDependencyTracking[id]);
              runDependencyTracking[id] = 1;
              if (runDependencyWatcher === null && typeof setInterval != "undefined") {
                runDependencyWatcher = setInterval(() => {
                  if (ABORT) {
                    clearInterval(runDependencyWatcher);
                    runDependencyWatcher = null;
                    return;
                  }
                  var shown = false;
                  for (var dep in runDependencyTracking) {
                    if (!shown) {
                      shown = true;
                      err("still waiting on run dependencies:");
                    }
                    err(`dependency: ${dep}`);
                  }
                  if (shown) {
                    err("(end of list)");
                  }
                }, 1e4);
              }
            } else {
              err("warning: run dependency added without ID");
            }
          }
          function removeRunDependency(id) {
            runDependencies--;
            Module2["monitorRunDependencies"]?.(runDependencies);
            if (id) {
              assert(runDependencyTracking[id]);
              delete runDependencyTracking[id];
            } else {
              err("warning: run dependency removed without ID");
            }
            if (runDependencies == 0) {
              if (runDependencyWatcher !== null) {
                clearInterval(runDependencyWatcher);
                runDependencyWatcher = null;
              }
              if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
              }
            }
          }
          function abort(what) {
            Module2["onAbort"]?.(what);
            what = "Aborted(" + what + ")";
            err(what);
            ABORT = true;
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
          }
          var dataURIPrefix = "data:application/octet-stream;base64,";
          var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
          var isFileURI = (filename) => filename.startsWith("file://");
          function createExportWrapper(name, nargs) {
            return (...args) => {
              assert(
                runtimeInitialized,
                `native function \`${name}\` called before runtime initialization`
              );
              var f = wasmExports[name];
              assert(f, `exported native function \`${name}\` not found`);
              assert(
                args.length <= nargs,
                `native function \`${name}\` called with ${args.length} args but expects ${nargs}`
              );
              return f(...args);
            };
          }
          function findWasmBinary() {
            if (Module2["locateFile"]) {
              var f = "pdfium.wasm";
              if (!isDataURI(f)) {
                return locateFile(f);
              }
              return f;
            }
            if (ENVIRONMENT_IS_SHELL) return "pdfium.wasm";
            return new URL("pdfium.wasm", import_meta.url).href;
          }
          var wasmBinaryFile;
          function getBinarySync(file) {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          }
          function getBinaryPromise(binaryFile) {
            if (!wasmBinary) {
              return readAsync(binaryFile).then(
                (response) => new Uint8Array(
                  /** @type{!ArrayBuffer} */
                  response
                ),
                // Fall back to getBinarySync if readAsync fails
                () => getBinarySync(binaryFile)
              );
            }
            return Promise.resolve().then(() => getBinarySync(binaryFile));
          }
          function instantiateArrayBuffer(binaryFile, imports, receiver) {
            return getBinaryPromise(binaryFile).then((binary) => {
              return WebAssembly.instantiate(binary, imports);
            }).then(receiver, (reason) => {
              err(`failed to asynchronously prepare wasm: ${reason}`);
              if (isFileURI(wasmBinaryFile)) {
                err(
                  `warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`
                );
              }
              abort(reason);
            });
          }
          function instantiateAsync(binary, binaryFile, imports, callback) {
            if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && // Avoid instantiateStreaming() on Node.js environment for now, as while
            // Node.js v18.1.0 implements it, it does not have a full fetch()
            // implementation yet.
            //
            // Reference:
            //   https://github.com/emscripten-core/emscripten/pull/16917
            true && typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
                var result = WebAssembly.instantiateStreaming(response, imports);
                return result.then(callback, function(reason) {
                  err(`wasm streaming compile failed: ${reason}`);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              });
            }
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
          function getWasmImports() {
            return {
              env: wasmImports,
              wasi_snapshot_preview1: wasmImports
            };
          }
          function createWasm() {
            var info = getWasmImports();
            function receiveInstance(instance, module) {
              wasmExports = instance.exports;
              Module2["wasmExports"] = wasmExports;
              wasmMemory = wasmExports["memory"];
              assert(wasmMemory, "memory not found in wasm exports");
              updateMemoryViews();
              wasmTable = wasmExports["__indirect_function_table"];
              assert(wasmTable, "table not found in wasm exports");
              addOnInit(wasmExports["__wasm_call_ctors"]);
              removeRunDependency("wasm-instantiate");
              return wasmExports;
            }
            addRunDependency("wasm-instantiate");
            var trueModule = Module2;
            function receiveInstantiationResult(result) {
              assert(
                Module2 === trueModule,
                "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"
              );
              trueModule = null;
              receiveInstance(result["instance"]);
            }
            if (Module2["instantiateWasm"]) {
              try {
                return Module2["instantiateWasm"](info, receiveInstance);
              } catch (e) {
                err(`Module.instantiateWasm callback failed with error: ${e}`);
                readyPromiseReject(e);
              }
            }
            wasmBinaryFile ??= findWasmBinary();
            instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(
              readyPromiseReject
            );
            return {};
          }
          var tempDouble;
          var tempI64;
          (() => {
            var h16 = new Int16Array(1);
            var h8 = new Int8Array(h16.buffer);
            h16[0] = 25459;
            if (h8[0] !== 115 || h8[1] !== 99)
              throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
          })();
          if (Module2["ENVIRONMENT"]) {
            throw new Error(
              "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"
            );
          }
          function legacyModuleProp(prop, newName, incoming = true) {
            if (!Object.getOwnPropertyDescriptor(Module2, prop)) {
              Object.defineProperty(Module2, prop, {
                configurable: true,
                get() {
                  let extra = incoming ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
                  abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);
                }
              });
            }
          }
          function ignoredModuleProp(prop) {
            if (Object.getOwnPropertyDescriptor(Module2, prop)) {
              abort(
                `\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`
              );
            }
          }
          function isExportedByForceFilesystem(name) {
            return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || // The old FS has some functionality that WasmFS lacks.
            name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
          }
          function hookGlobalSymbolAccess(sym, func) {
            if (typeof globalThis != "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
              Object.defineProperty(globalThis, sym, {
                configurable: true,
                get() {
                  func();
                  return void 0;
                }
              });
            }
          }
          function missingGlobal(sym, msg) {
            hookGlobalSymbolAccess(sym, () => {
              warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
            });
          }
          missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
          missingGlobal("asm", "Please use wasmExports instead");
          function missingLibrarySymbol(sym) {
            hookGlobalSymbolAccess(sym, () => {
              var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
              var librarySymbol = sym;
              if (!librarySymbol.startsWith("_")) {
                librarySymbol = "$" + sym;
              }
              msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
              if (isExportedByForceFilesystem(sym)) {
                msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
              }
              warnOnce(msg);
            });
            unexportedRuntimeSymbol(sym);
          }
          function unexportedRuntimeSymbol(sym) {
            if (!Object.getOwnPropertyDescriptor(Module2, sym)) {
              Object.defineProperty(Module2, sym, {
                configurable: true,
                get() {
                  var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
                  if (isExportedByForceFilesystem(sym)) {
                    msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                  }
                  abort(msg);
                }
              });
            }
          }
          var callRuntimeCallbacks = (callbacks) => {
            callbacks.forEach((f) => f(Module2));
          };
          function getValue(ptr, type = "i8") {
            if (type.endsWith("*")) type = "*";
            switch (type) {
              case "i1":
                return HEAP8[ptr];
              case "i8":
                return HEAP8[ptr];
              case "i16":
                return HEAP16[ptr >> 1];
              case "i32":
                return HEAP32[ptr >> 2];
              case "i64":
                abort("to do getValue(i64) use WASM_BIGINT");
              case "float":
                return HEAPF32[ptr >> 2];
              case "double":
                return HEAPF64[ptr >> 3];
              case "*":
                return HEAPU32[ptr >> 2];
              default:
                abort(`invalid type for getValue: ${type}`);
            }
          }
          Module2["noExitRuntime"] || true;
          var ptrToString = (ptr) => {
            assert(typeof ptr === "number");
            ptr >>>= 0;
            return "0x" + ptr.toString(16).padStart(8, "0");
          };
          function setValue(ptr, value, type = "i8") {
            if (type.endsWith("*")) type = "*";
            switch (type) {
              case "i1":
                HEAP8[ptr] = value;
                break;
              case "i8":
                HEAP8[ptr] = value;
                break;
              case "i16":
                HEAP16[ptr >> 1] = value;
                break;
              case "i32":
                HEAP32[ptr >> 2] = value;
                break;
              case "i64":
                abort("to do setValue(i64) use WASM_BIGINT");
              case "float":
                HEAPF32[ptr >> 2] = value;
                break;
              case "double":
                HEAPF64[ptr >> 3] = value;
                break;
              case "*":
                HEAPU32[ptr >> 2] = value;
                break;
              default:
                abort(`invalid type for setValue: ${type}`);
            }
          }
          var stackRestore = (val) => __emscripten_stack_restore(val);
          var stackSave = () => _emscripten_stack_get_current();
          var warnOnce = (text) => {
            warnOnce.shown ||= {};
            if (!warnOnce.shown[text]) {
              warnOnce.shown[text] = 1;
              err(text);
            }
          };
          var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
          var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
              return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            }
            var str = "";
            while (idx < endPtr) {
              var u0 = heapOrArray[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heapOrArray[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heapOrArray[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                if ((u0 & 248) != 240)
                  warnOnce(
                    "Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"
                  );
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
            return str;
          };
          var UTF8ToString = (ptr, maxBytesToRead) => {
            assert(typeof ptr == "number", `UTF8ToString expects a number (got ${typeof ptr})`);
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
          };
          var ___assert_fail = (condition, filename, line, func) => {
            abort(
              `Assertion failed: ${UTF8ToString(condition)}, at: ` + [
                filename ? UTF8ToString(filename) : "unknown filename",
                line,
                func ? UTF8ToString(func) : "unknown function"
              ]
            );
          };
          function syscallGetVarargI() {
            assert(SYSCALLS.varargs != void 0);
            var ret = HEAP32[+SYSCALLS.varargs >> 2];
            SYSCALLS.varargs += 4;
            return ret;
          }
          var syscallGetVarargP = syscallGetVarargI;
          var PATH = {
            isAbs: (path) => path.charAt(0) === "/",
            splitPath: (filename) => {
              var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
              return splitPathRe.exec(filename).slice(1);
            },
            normalizeArray: (parts, allowAboveRoot) => {
              var up = 0;
              for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === ".") {
                  parts.splice(i, 1);
                } else if (last === "..") {
                  parts.splice(i, 1);
                  up++;
                } else if (up) {
                  parts.splice(i, 1);
                  up--;
                }
              }
              if (allowAboveRoot) {
                for (; up; up--) {
                  parts.unshift("..");
                }
              }
              return parts;
            },
            normalize: (path) => {
              var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
              path = PATH.normalizeArray(
                path.split("/").filter((p) => !!p),
                !isAbsolute
              ).join("/");
              if (!path && !isAbsolute) {
                path = ".";
              }
              if (path && trailingSlash) {
                path += "/";
              }
              return (isAbsolute ? "/" : "") + path;
            },
            dirname: (path) => {
              var result = PATH.splitPath(path), root = result[0], dir = result[1];
              if (!root && !dir) {
                return ".";
              }
              if (dir) {
                dir = dir.substr(0, dir.length - 1);
              }
              return root + dir;
            },
            basename: (path) => {
              if (path === "/") return "/";
              path = PATH.normalize(path);
              path = path.replace(/\/$/, "");
              var lastSlash = path.lastIndexOf("/");
              if (lastSlash === -1) return path;
              return path.substr(lastSlash + 1);
            },
            join: (...paths) => PATH.normalize(paths.join("/")),
            join2: (l, r) => PATH.normalize(l + "/" + r)
          };
          var initRandomFill = () => {
            if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
              return (view) => crypto.getRandomValues(view);
            }
            abort(
              "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"
            );
          };
          var randomFill = (view) => {
            return (randomFill = initRandomFill())(view);
          };
          var PATH_FS = {
            resolve: (...args) => {
              var resolvedPath = "", resolvedAbsolute = false;
              for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? args[i] : FS.cwd();
                if (typeof path != "string") {
                  throw new TypeError("Arguments to path.resolve must be strings");
                } else if (!path) {
                  return "";
                }
                resolvedPath = path + "/" + resolvedPath;
                resolvedAbsolute = PATH.isAbs(path);
              }
              resolvedPath = PATH.normalizeArray(
                resolvedPath.split("/").filter((p) => !!p),
                !resolvedAbsolute
              ).join("/");
              return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
            },
            relative: (from, to) => {
              from = PATH_FS.resolve(from).substr(1);
              to = PATH_FS.resolve(to).substr(1);
              function trim(arr) {
                var start3 = 0;
                for (; start3 < arr.length; start3++) {
                  if (arr[start3] !== "") break;
                }
                var end2 = arr.length - 1;
                for (; end2 >= 0; end2--) {
                  if (arr[end2] !== "") break;
                }
                if (start3 > end2) return [];
                return arr.slice(start3, end2 - start3 + 1);
              }
              var fromParts = trim(from.split("/"));
              var toParts = trim(to.split("/"));
              var length = Math.min(fromParts.length, toParts.length);
              var samePartsLength = length;
              for (var i = 0; i < length; i++) {
                if (fromParts[i] !== toParts[i]) {
                  samePartsLength = i;
                  break;
                }
              }
              var outputParts = [];
              for (var i = samePartsLength; i < fromParts.length; i++) {
                outputParts.push("..");
              }
              outputParts = outputParts.concat(toParts.slice(samePartsLength));
              return outputParts.join("/");
            }
          };
          var FS_stdin_getChar_buffer = [];
          var lengthBytesUTF8 = (str) => {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var c = str.charCodeAt(i);
              if (c <= 127) {
                len++;
              } else if (c <= 2047) {
                len += 2;
              } else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
              } else {
                len += 3;
              }
            }
            return len;
          };
          var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
            assert(typeof str === "string", `stringToUTF8Array expects a string (got ${typeof str})`);
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
              }
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              } else {
                if (outIdx + 3 >= endIdx) break;
                if (u > 1114111)
                  warnOnce(
                    "Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."
                  );
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
          };
          function intArrayFromString(stringy, dontAddNull, length) {
            var len = lengthBytesUTF8(stringy) + 1;
            var u8array = new Array(len);
            var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
            u8array.length = numBytesWritten;
            return u8array;
          }
          var FS_stdin_getChar = () => {
            if (!FS_stdin_getChar_buffer.length) {
              var result = null;
              if (typeof window != "undefined" && typeof window.prompt == "function") {
                result = window.prompt("Input: ");
                if (result !== null) {
                  result += "\n";
                }
              } else if (typeof readline == "function") {
                result = readline();
                if (result) {
                  result += "\n";
                }
              } else ;
              if (!result) {
                return null;
              }
              FS_stdin_getChar_buffer = intArrayFromString(result);
            }
            return FS_stdin_getChar_buffer.shift();
          };
          var TTY = {
            ttys: [],
            init() {
            },
            shutdown() {
            },
            register(dev, ops) {
              TTY.ttys[dev] = { input: [], output: [], ops };
              FS.registerDevice(dev, TTY.stream_ops);
            },
            stream_ops: {
              open(stream) {
                var tty = TTY.ttys[stream.node.rdev];
                if (!tty) {
                  throw new FS.ErrnoError(43);
                }
                stream.tty = tty;
                stream.seekable = false;
              },
              close(stream) {
                stream.tty.ops.fsync(stream.tty);
              },
              fsync(stream) {
                stream.tty.ops.fsync(stream.tty);
              },
              read(stream, buffer, offset2, length, pos) {
                if (!stream.tty || !stream.tty.ops.get_char) {
                  throw new FS.ErrnoError(60);
                }
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                  var result;
                  try {
                    result = stream.tty.ops.get_char(stream.tty);
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                  if (result === void 0 && bytesRead === 0) {
                    throw new FS.ErrnoError(6);
                  }
                  if (result === null || result === void 0) break;
                  bytesRead++;
                  buffer[offset2 + i] = result;
                }
                if (bytesRead) {
                  stream.node.timestamp = Date.now();
                }
                return bytesRead;
              },
              write(stream, buffer, offset2, length, pos) {
                if (!stream.tty || !stream.tty.ops.put_char) {
                  throw new FS.ErrnoError(60);
                }
                try {
                  for (var i = 0; i < length; i++) {
                    stream.tty.ops.put_char(stream.tty, buffer[offset2 + i]);
                  }
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
                if (length) {
                  stream.node.timestamp = Date.now();
                }
                return i;
              }
            },
            default_tty_ops: {
              get_char(tty) {
                return FS_stdin_getChar();
              },
              put_char(tty, val) {
                if (val === null || val === 10) {
                  out(UTF8ArrayToString(tty.output));
                  tty.output = [];
                } else {
                  if (val != 0) tty.output.push(val);
                }
              },
              fsync(tty) {
                if (tty.output && tty.output.length > 0) {
                  out(UTF8ArrayToString(tty.output));
                  tty.output = [];
                }
              },
              ioctl_tcgets(tty) {
                return {
                  c_iflag: 25856,
                  c_oflag: 5,
                  c_cflag: 191,
                  c_lflag: 35387,
                  c_cc: [
                    3,
                    28,
                    127,
                    21,
                    4,
                    0,
                    1,
                    0,
                    17,
                    19,
                    26,
                    0,
                    18,
                    15,
                    23,
                    22,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ]
                };
              },
              ioctl_tcsets(tty, optional_actions, data2) {
                return 0;
              },
              ioctl_tiocgwinsz(tty) {
                return [24, 80];
              }
            },
            default_tty1_ops: {
              put_char(tty, val) {
                if (val === null || val === 10) {
                  err(UTF8ArrayToString(tty.output));
                  tty.output = [];
                } else {
                  if (val != 0) tty.output.push(val);
                }
              },
              fsync(tty) {
                if (tty.output && tty.output.length > 0) {
                  err(UTF8ArrayToString(tty.output));
                  tty.output = [];
                }
              }
            }
          };
          var zeroMemory = (address, size2) => {
            HEAPU8.fill(0, address, address + size2);
          };
          var alignMemory = (size2, alignment) => {
            assert(alignment, "alignment argument is required");
            return Math.ceil(size2 / alignment) * alignment;
          };
          var mmapAlloc = (size2) => {
            size2 = alignMemory(size2, 65536);
            var ptr = _emscripten_builtin_memalign(65536, size2);
            if (ptr) zeroMemory(ptr, size2);
            return ptr;
          };
          var MEMFS = {
            ops_table: null,
            mount(mount) {
              return MEMFS.createNode(null, "/", 16384 | 511, 0);
            },
            createNode(parent, name, mode, dev) {
              if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
                throw new FS.ErrnoError(63);
              }
              MEMFS.ops_table ||= {
                dir: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr,
                    lookup: MEMFS.node_ops.lookup,
                    mknod: MEMFS.node_ops.mknod,
                    rename: MEMFS.node_ops.rename,
                    unlink: MEMFS.node_ops.unlink,
                    rmdir: MEMFS.node_ops.rmdir,
                    readdir: MEMFS.node_ops.readdir,
                    symlink: MEMFS.node_ops.symlink
                  },
                  stream: {
                    llseek: MEMFS.stream_ops.llseek
                  }
                },
                file: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr
                  },
                  stream: {
                    llseek: MEMFS.stream_ops.llseek,
                    read: MEMFS.stream_ops.read,
                    write: MEMFS.stream_ops.write,
                    allocate: MEMFS.stream_ops.allocate,
                    mmap: MEMFS.stream_ops.mmap,
                    msync: MEMFS.stream_ops.msync
                  }
                },
                link: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr,
                    readlink: MEMFS.node_ops.readlink
                  },
                  stream: {}
                },
                chrdev: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr
                  },
                  stream: FS.chrdev_stream_ops
                }
              };
              var node = FS.createNode(parent, name, mode, dev);
              if (FS.isDir(node.mode)) {
                node.node_ops = MEMFS.ops_table.dir.node;
                node.stream_ops = MEMFS.ops_table.dir.stream;
                node.contents = {};
              } else if (FS.isFile(node.mode)) {
                node.node_ops = MEMFS.ops_table.file.node;
                node.stream_ops = MEMFS.ops_table.file.stream;
                node.usedBytes = 0;
                node.contents = null;
              } else if (FS.isLink(node.mode)) {
                node.node_ops = MEMFS.ops_table.link.node;
                node.stream_ops = MEMFS.ops_table.link.stream;
              } else if (FS.isChrdev(node.mode)) {
                node.node_ops = MEMFS.ops_table.chrdev.node;
                node.stream_ops = MEMFS.ops_table.chrdev.stream;
              }
              node.timestamp = Date.now();
              if (parent) {
                parent.contents[name] = node;
                parent.timestamp = node.timestamp;
              }
              return node;
            },
            getFileDataAsTypedArray(node) {
              if (!node.contents) return new Uint8Array(0);
              if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
              return new Uint8Array(node.contents);
            },
            expandFileStorage(node, newCapacity) {
              var prevCapacity = node.contents ? node.contents.length : 0;
              if (prevCapacity >= newCapacity) return;
              var CAPACITY_DOUBLING_MAX = 1024 * 1024;
              newCapacity = Math.max(
                newCapacity,
                prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0
              );
              if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
              var oldContents = node.contents;
              node.contents = new Uint8Array(newCapacity);
              if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
            },
            resizeFileStorage(node, newSize) {
              if (node.usedBytes == newSize) return;
              if (newSize == 0) {
                node.contents = null;
                node.usedBytes = 0;
              } else {
                var oldContents = node.contents;
                node.contents = new Uint8Array(newSize);
                if (oldContents) {
                  node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
                }
                node.usedBytes = newSize;
              }
            },
            node_ops: {
              getattr(node) {
                var attr = {};
                attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                attr.ino = node.id;
                attr.mode = node.mode;
                attr.nlink = 1;
                attr.uid = 0;
                attr.gid = 0;
                attr.rdev = node.rdev;
                if (FS.isDir(node.mode)) {
                  attr.size = 4096;
                } else if (FS.isFile(node.mode)) {
                  attr.size = node.usedBytes;
                } else if (FS.isLink(node.mode)) {
                  attr.size = node.link.length;
                } else {
                  attr.size = 0;
                }
                attr.atime = new Date(node.timestamp);
                attr.mtime = new Date(node.timestamp);
                attr.ctime = new Date(node.timestamp);
                attr.blksize = 4096;
                attr.blocks = Math.ceil(attr.size / attr.blksize);
                return attr;
              },
              setattr(node, attr) {
                if (attr.mode !== void 0) {
                  node.mode = attr.mode;
                }
                if (attr.timestamp !== void 0) {
                  node.timestamp = attr.timestamp;
                }
                if (attr.size !== void 0) {
                  MEMFS.resizeFileStorage(node, attr.size);
                }
              },
              lookup(parent, name) {
                throw FS.genericErrors[44];
              },
              mknod(parent, name, mode, dev) {
                return MEMFS.createNode(parent, name, mode, dev);
              },
              rename(old_node, new_dir, new_name) {
                if (FS.isDir(old_node.mode)) {
                  var new_node;
                  try {
                    new_node = FS.lookupNode(new_dir, new_name);
                  } catch (e) {
                  }
                  if (new_node) {
                    for (var i in new_node.contents) {
                      throw new FS.ErrnoError(55);
                    }
                  }
                }
                delete old_node.parent.contents[old_node.name];
                old_node.parent.timestamp = Date.now();
                old_node.name = new_name;
                new_dir.contents[new_name] = old_node;
                new_dir.timestamp = old_node.parent.timestamp;
              },
              unlink(parent, name) {
                delete parent.contents[name];
                parent.timestamp = Date.now();
              },
              rmdir(parent, name) {
                var node = FS.lookupNode(parent, name);
                for (var i in node.contents) {
                  throw new FS.ErrnoError(55);
                }
                delete parent.contents[name];
                parent.timestamp = Date.now();
              },
              readdir(node) {
                var entries = [".", ".."];
                for (var key of Object.keys(node.contents)) {
                  entries.push(key);
                }
                return entries;
              },
              symlink(parent, newname, oldpath) {
                var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
                node.link = oldpath;
                return node;
              },
              readlink(node) {
                if (!FS.isLink(node.mode)) {
                  throw new FS.ErrnoError(28);
                }
                return node.link;
              }
            },
            stream_ops: {
              read(stream, buffer, offset2, length, position) {
                var contents = stream.node.contents;
                if (position >= stream.node.usedBytes) return 0;
                var size2 = Math.min(stream.node.usedBytes - position, length);
                assert(size2 >= 0);
                if (size2 > 8 && contents.subarray) {
                  buffer.set(contents.subarray(position, position + size2), offset2);
                } else {
                  for (var i = 0; i < size2; i++) buffer[offset2 + i] = contents[position + i];
                }
                return size2;
              },
              write(stream, buffer, offset2, length, position, canOwn) {
                assert(!(buffer instanceof ArrayBuffer));
                if (buffer.buffer === HEAP8.buffer) {
                  canOwn = false;
                }
                if (!length) return 0;
                var node = stream.node;
                node.timestamp = Date.now();
                if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                  if (canOwn) {
                    assert(position === 0, "canOwn must imply no weird position inside the file");
                    node.contents = buffer.subarray(offset2, offset2 + length);
                    node.usedBytes = length;
                    return length;
                  } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = buffer.slice(offset2, offset2 + length);
                    node.usedBytes = length;
                    return length;
                  } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset2, offset2 + length), position);
                    return length;
                  }
                }
                MEMFS.expandFileStorage(node, position + length);
                if (node.contents.subarray && buffer.subarray) {
                  node.contents.set(buffer.subarray(offset2, offset2 + length), position);
                } else {
                  for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset2 + i];
                  }
                }
                node.usedBytes = Math.max(node.usedBytes, position + length);
                return length;
              },
              llseek(stream, offset2, whence) {
                var position = offset2;
                if (whence === 1) {
                  position += stream.position;
                } else if (whence === 2) {
                  if (FS.isFile(stream.node.mode)) {
                    position += stream.node.usedBytes;
                  }
                }
                if (position < 0) {
                  throw new FS.ErrnoError(28);
                }
                return position;
              },
              allocate(stream, offset2, length) {
                MEMFS.expandFileStorage(stream.node, offset2 + length);
                stream.node.usedBytes = Math.max(stream.node.usedBytes, offset2 + length);
              },
              mmap(stream, length, position, prot, flags) {
                if (!FS.isFile(stream.node.mode)) {
                  throw new FS.ErrnoError(43);
                }
                var ptr;
                var allocated;
                var contents = stream.node.contents;
                if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
                  allocated = false;
                  ptr = contents.byteOffset;
                } else {
                  allocated = true;
                  ptr = mmapAlloc(length);
                  if (!ptr) {
                    throw new FS.ErrnoError(48);
                  }
                  if (contents) {
                    if (position > 0 || position + length < contents.length) {
                      if (contents.subarray) {
                        contents = contents.subarray(position, position + length);
                      } else {
                        contents = Array.prototype.slice.call(contents, position, position + length);
                      }
                    }
                    HEAP8.set(contents, ptr);
                  }
                }
                return { ptr, allocated };
              },
              msync(stream, buffer, offset2, length, mmapFlags) {
                MEMFS.stream_ops.write(stream, buffer, 0, length, offset2, false);
                return 0;
              }
            }
          };
          var asyncLoad = (url, onload, onerror, noRunDep) => {
            var dep = getUniqueRunDependency(`al ${url}`);
            readAsync(url).then(
              (arrayBuffer) => {
                assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
                onload(new Uint8Array(arrayBuffer));
                if (dep) removeRunDependency(dep);
              },
              (err2) => {
                if (onerror) {
                  onerror();
                } else {
                  throw `Loading data file "${url}" failed.`;
                }
              }
            );
            if (dep) addRunDependency(dep);
          };
          var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
            FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
          };
          var preloadPlugins = Module2["preloadPlugins"] || [];
          var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
            if (typeof Browser != "undefined") Browser.init();
            var handled = false;
            preloadPlugins.forEach((plugin2) => {
              if (handled) return;
              if (plugin2["canHandle"](fullname)) {
                plugin2["handle"](byteArray, fullname, finish, onerror);
                handled = true;
              }
            });
            return handled;
          };
          var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
            var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
            var dep = getUniqueRunDependency(`cp ${fullname}`);
            function processData(byteArray) {
              function finish(byteArray2) {
                preFinish?.();
                if (!dontCreateFile) {
                  FS_createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
                }
                onload?.();
                removeRunDependency(dep);
              }
              if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
                onerror?.();
                removeRunDependency(dep);
              })) {
                return;
              }
              finish(byteArray);
            }
            addRunDependency(dep);
            if (typeof url == "string") {
              asyncLoad(url, processData, onerror);
            } else {
              processData(url);
            }
          };
          var FS_modeStringToFlags = (str) => {
            var flagModes = {
              r: 0,
              "r+": 2,
              w: 512 | 64 | 1,
              "w+": 512 | 64 | 2,
              a: 1024 | 64 | 1,
              "a+": 1024 | 64 | 2
            };
            var flags = flagModes[str];
            if (typeof flags == "undefined") {
              throw new Error(`Unknown file open mode: ${str}`);
            }
            return flags;
          };
          var FS_getMode = (canRead, canWrite) => {
            var mode = 0;
            if (canRead) mode |= 292 | 73;
            if (canWrite) mode |= 146;
            return mode;
          };
          var strError = (errno) => {
            return UTF8ToString(_strerror(errno));
          };
          var ERRNO_CODES = {
            EPERM: 63,
            ENOENT: 44,
            ESRCH: 71,
            EINTR: 27,
            EIO: 29,
            ENXIO: 60,
            E2BIG: 1,
            ENOEXEC: 45,
            EBADF: 8,
            ECHILD: 12,
            EAGAIN: 6,
            EWOULDBLOCK: 6,
            ENOMEM: 48,
            EACCES: 2,
            EFAULT: 21,
            ENOTBLK: 105,
            EBUSY: 10,
            EEXIST: 20,
            EXDEV: 75,
            ENODEV: 43,
            ENOTDIR: 54,
            EISDIR: 31,
            EINVAL: 28,
            ENFILE: 41,
            EMFILE: 33,
            ENOTTY: 59,
            ETXTBSY: 74,
            EFBIG: 22,
            ENOSPC: 51,
            ESPIPE: 70,
            EROFS: 69,
            EMLINK: 34,
            EPIPE: 64,
            EDOM: 18,
            ERANGE: 68,
            ENOMSG: 49,
            EIDRM: 24,
            ECHRNG: 106,
            EL2NSYNC: 156,
            EL3HLT: 107,
            EL3RST: 108,
            ELNRNG: 109,
            EUNATCH: 110,
            ENOCSI: 111,
            EL2HLT: 112,
            EDEADLK: 16,
            ENOLCK: 46,
            EBADE: 113,
            EBADR: 114,
            EXFULL: 115,
            ENOANO: 104,
            EBADRQC: 103,
            EBADSLT: 102,
            EDEADLOCK: 16,
            EBFONT: 101,
            ENOSTR: 100,
            ENODATA: 116,
            ETIME: 117,
            ENOSR: 118,
            ENONET: 119,
            ENOPKG: 120,
            EREMOTE: 121,
            ENOLINK: 47,
            EADV: 122,
            ESRMNT: 123,
            ECOMM: 124,
            EPROTO: 65,
            EMULTIHOP: 36,
            EDOTDOT: 125,
            EBADMSG: 9,
            ENOTUNIQ: 126,
            EBADFD: 127,
            EREMCHG: 128,
            ELIBACC: 129,
            ELIBBAD: 130,
            ELIBSCN: 131,
            ELIBMAX: 132,
            ELIBEXEC: 133,
            ENOSYS: 52,
            ENOTEMPTY: 55,
            ENAMETOOLONG: 37,
            ELOOP: 32,
            EOPNOTSUPP: 138,
            EPFNOSUPPORT: 139,
            ECONNRESET: 15,
            ENOBUFS: 42,
            EAFNOSUPPORT: 5,
            EPROTOTYPE: 67,
            ENOTSOCK: 57,
            ENOPROTOOPT: 50,
            ESHUTDOWN: 140,
            ECONNREFUSED: 14,
            EADDRINUSE: 3,
            ECONNABORTED: 13,
            ENETUNREACH: 40,
            ENETDOWN: 38,
            ETIMEDOUT: 73,
            EHOSTDOWN: 142,
            EHOSTUNREACH: 23,
            EINPROGRESS: 26,
            EALREADY: 7,
            EDESTADDRREQ: 17,
            EMSGSIZE: 35,
            EPROTONOSUPPORT: 66,
            ESOCKTNOSUPPORT: 137,
            EADDRNOTAVAIL: 4,
            ENETRESET: 39,
            EISCONN: 30,
            ENOTCONN: 53,
            ETOOMANYREFS: 141,
            EUSERS: 136,
            EDQUOT: 19,
            ESTALE: 72,
            ENOTSUP: 138,
            ENOMEDIUM: 148,
            EILSEQ: 25,
            EOVERFLOW: 61,
            ECANCELED: 11,
            ENOTRECOVERABLE: 56,
            EOWNERDEAD: 62,
            ESTRPIPE: 135
          };
          var FS = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: false,
            ignorePermissions: true,
            ErrnoError: class extends Error {
              // We set the `name` property to be able to identify `FS.ErrnoError`
              // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
              // - when using PROXYFS, an error can come from an underlying FS
              // as different FS objects have their own FS.ErrnoError each,
              // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
              // we'll use the reliable test `err.name == "ErrnoError"` instead
              constructor(errno) {
                super(runtimeInitialized ? strError(errno) : "");
                this.name = "ErrnoError";
                this.errno = errno;
                for (var key in ERRNO_CODES) {
                  if (ERRNO_CODES[key] === errno) {
                    this.code = key;
                    break;
                  }
                }
              }
            },
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            readFiles: {},
            FSStream: class {
              constructor() {
                this.shared = {};
              }
              get object() {
                return this.node;
              }
              set object(val) {
                this.node = val;
              }
              get isRead() {
                return (this.flags & 2097155) !== 1;
              }
              get isWrite() {
                return (this.flags & 2097155) !== 0;
              }
              get isAppend() {
                return this.flags & 1024;
              }
              get flags() {
                return this.shared.flags;
              }
              set flags(val) {
                this.shared.flags = val;
              }
              get position() {
                return this.shared.position;
              }
              set position(val) {
                this.shared.position = val;
              }
            },
            FSNode: class {
              constructor(parent, name, mode, rdev) {
                if (!parent) {
                  parent = this;
                }
                this.parent = parent;
                this.mount = parent.mount;
                this.mounted = null;
                this.id = FS.nextInode++;
                this.name = name;
                this.mode = mode;
                this.node_ops = {};
                this.stream_ops = {};
                this.rdev = rdev;
                this.readMode = 292 | 73;
                this.writeMode = 146;
              }
              get read() {
                return (this.mode & this.readMode) === this.readMode;
              }
              set read(val) {
                val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
              }
              get write() {
                return (this.mode & this.writeMode) === this.writeMode;
              }
              set write(val) {
                val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
              }
              get isFolder() {
                return FS.isDir(this.mode);
              }
              get isDevice() {
                return FS.isChrdev(this.mode);
              }
            },
            lookupPath(path, opts = {}) {
              path = PATH_FS.resolve(path);
              if (!path) return { path: "", node: null };
              var defaults = {
                follow_mount: true,
                recurse_count: 0
              };
              opts = Object.assign(defaults, opts);
              if (opts.recurse_count > 8) {
                throw new FS.ErrnoError(32);
              }
              var parts = path.split("/").filter((p) => !!p);
              var current = FS.root;
              var current_path = "/";
              for (var i = 0; i < parts.length; i++) {
                var islast = i === parts.length - 1;
                if (islast && opts.parent) {
                  break;
                }
                current = FS.lookupNode(current, parts[i]);
                current_path = PATH.join2(current_path, parts[i]);
                if (FS.isMountpoint(current)) {
                  if (!islast || islast && opts.follow_mount) {
                    current = current.mounted.root;
                  }
                }
                if (!islast || opts.follow) {
                  var count = 0;
                  while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                    var lookup2 = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
                    current = lookup2.node;
                    if (count++ > 40) {
                      throw new FS.ErrnoError(32);
                    }
                  }
                }
              }
              return { path: current_path, node: current };
            },
            getPath(node) {
              var path;
              while (true) {
                if (FS.isRoot(node)) {
                  var mount = node.mount.mountpoint;
                  if (!path) return mount;
                  return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
                }
                path = path ? `${node.name}/${path}` : node.name;
                node = node.parent;
              }
            },
            hashName(parentid, name) {
              var hash3 = 0;
              for (var i = 0; i < name.length; i++) {
                hash3 = (hash3 << 5) - hash3 + name.charCodeAt(i) | 0;
              }
              return (parentid + hash3 >>> 0) % FS.nameTable.length;
            },
            hashAddNode(node) {
              var hash3 = FS.hashName(node.parent.id, node.name);
              node.name_next = FS.nameTable[hash3];
              FS.nameTable[hash3] = node;
            },
            hashRemoveNode(node) {
              var hash3 = FS.hashName(node.parent.id, node.name);
              if (FS.nameTable[hash3] === node) {
                FS.nameTable[hash3] = node.name_next;
              } else {
                var current = FS.nameTable[hash3];
                while (current) {
                  if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break;
                  }
                  current = current.name_next;
                }
              }
            },
            lookupNode(parent, name) {
              var errCode = FS.mayLookup(parent);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              var hash3 = FS.hashName(parent.id, name);
              for (var node = FS.nameTable[hash3]; node; node = node.name_next) {
                var nodeName = node.name;
                if (node.parent.id === parent.id && nodeName === name) {
                  return node;
                }
              }
              return FS.lookup(parent, name);
            },
            createNode(parent, name, mode, rdev) {
              assert(typeof parent == "object");
              var node = new FS.FSNode(parent, name, mode, rdev);
              FS.hashAddNode(node);
              return node;
            },
            destroyNode(node) {
              FS.hashRemoveNode(node);
            },
            isRoot(node) {
              return node === node.parent;
            },
            isMountpoint(node) {
              return !!node.mounted;
            },
            isFile(mode) {
              return (mode & 61440) === 32768;
            },
            isDir(mode) {
              return (mode & 61440) === 16384;
            },
            isLink(mode) {
              return (mode & 61440) === 40960;
            },
            isChrdev(mode) {
              return (mode & 61440) === 8192;
            },
            isBlkdev(mode) {
              return (mode & 61440) === 24576;
            },
            isFIFO(mode) {
              return (mode & 61440) === 4096;
            },
            isSocket(mode) {
              return (mode & 49152) === 49152;
            },
            flagsToPermissionString(flag) {
              var perms = ["r", "w", "rw"][flag & 3];
              if (flag & 512) {
                perms += "w";
              }
              return perms;
            },
            nodePermissions(node, perms) {
              if (FS.ignorePermissions) {
                return 0;
              }
              if (perms.includes("r") && !(node.mode & 292)) {
                return 2;
              } else if (perms.includes("w") && !(node.mode & 146)) {
                return 2;
              } else if (perms.includes("x") && !(node.mode & 73)) {
                return 2;
              }
              return 0;
            },
            mayLookup(dir) {
              if (!FS.isDir(dir.mode)) return 54;
              var errCode = FS.nodePermissions(dir, "x");
              if (errCode) return errCode;
              if (!dir.node_ops.lookup) return 2;
              return 0;
            },
            mayCreate(dir, name) {
              try {
                var node = FS.lookupNode(dir, name);
                return 20;
              } catch (e) {
              }
              return FS.nodePermissions(dir, "wx");
            },
            mayDelete(dir, name, isdir) {
              var node;
              try {
                node = FS.lookupNode(dir, name);
              } catch (e) {
                return e.errno;
              }
              var errCode = FS.nodePermissions(dir, "wx");
              if (errCode) {
                return errCode;
              }
              if (isdir) {
                if (!FS.isDir(node.mode)) {
                  return 54;
                }
                if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                  return 10;
                }
              } else {
                if (FS.isDir(node.mode)) {
                  return 31;
                }
              }
              return 0;
            },
            mayOpen(node, flags) {
              if (!node) {
                return 44;
              }
              if (FS.isLink(node.mode)) {
                return 32;
              } else if (FS.isDir(node.mode)) {
                if (FS.flagsToPermissionString(flags) !== "r" || // opening for write
                flags & 512) {
                  return 31;
                }
              }
              return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
            },
            MAX_OPEN_FDS: 4096,
            nextfd() {
              for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
                if (!FS.streams[fd]) {
                  return fd;
                }
              }
              throw new FS.ErrnoError(33);
            },
            getStreamChecked(fd) {
              var stream = FS.getStream(fd);
              if (!stream) {
                throw new FS.ErrnoError(8);
              }
              return stream;
            },
            getStream: (fd) => FS.streams[fd],
            createStream(stream, fd = -1) {
              assert(fd >= -1);
              stream = Object.assign(new FS.FSStream(), stream);
              if (fd == -1) {
                fd = FS.nextfd();
              }
              stream.fd = fd;
              FS.streams[fd] = stream;
              return stream;
            },
            closeStream(fd) {
              FS.streams[fd] = null;
            },
            dupStream(origStream, fd = -1) {
              var stream = FS.createStream(origStream, fd);
              stream.stream_ops?.dup?.(stream);
              return stream;
            },
            chrdev_stream_ops: {
              open(stream) {
                var device = FS.getDevice(stream.node.rdev);
                stream.stream_ops = device.stream_ops;
                stream.stream_ops.open?.(stream);
              },
              llseek() {
                throw new FS.ErrnoError(70);
              }
            },
            major: (dev) => dev >> 8,
            minor: (dev) => dev & 255,
            makedev: (ma, mi) => ma << 8 | mi,
            registerDevice(dev, ops) {
              FS.devices[dev] = { stream_ops: ops };
            },
            getDevice: (dev) => FS.devices[dev],
            getMounts(mount) {
              var mounts = [];
              var check = [mount];
              while (check.length) {
                var m = check.pop();
                mounts.push(m);
                check.push(...m.mounts);
              }
              return mounts;
            },
            syncfs(populate, callback) {
              if (typeof populate == "function") {
                callback = populate;
                populate = false;
              }
              FS.syncFSRequests++;
              if (FS.syncFSRequests > 1) {
                err(
                  `warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
                );
              }
              var mounts = FS.getMounts(FS.root.mount);
              var completed = 0;
              function doCallback(errCode) {
                assert(FS.syncFSRequests > 0);
                FS.syncFSRequests--;
                return callback(errCode);
              }
              function done(errCode) {
                if (errCode) {
                  if (!done.errored) {
                    done.errored = true;
                    return doCallback(errCode);
                  }
                  return;
                }
                if (++completed >= mounts.length) {
                  doCallback(null);
                }
              }
              mounts.forEach((mount) => {
                if (!mount.type.syncfs) {
                  return done(null);
                }
                mount.type.syncfs(mount, populate, done);
              });
            },
            mount(type, opts, mountpoint) {
              if (typeof type == "string") {
                throw type;
              }
              var root = mountpoint === "/";
              var pseudo = !mountpoint;
              var node;
              if (root && FS.root) {
                throw new FS.ErrnoError(10);
              } else if (!root && !pseudo) {
                var lookup2 = FS.lookupPath(mountpoint, { follow_mount: false });
                mountpoint = lookup2.path;
                node = lookup2.node;
                if (FS.isMountpoint(node)) {
                  throw new FS.ErrnoError(10);
                }
                if (!FS.isDir(node.mode)) {
                  throw new FS.ErrnoError(54);
                }
              }
              var mount = {
                type,
                opts,
                mountpoint,
                mounts: []
              };
              var mountRoot = type.mount(mount);
              mountRoot.mount = mount;
              mount.root = mountRoot;
              if (root) {
                FS.root = mountRoot;
              } else if (node) {
                node.mounted = mount;
                if (node.mount) {
                  node.mount.mounts.push(mount);
                }
              }
              return mountRoot;
            },
            unmount(mountpoint) {
              var lookup2 = FS.lookupPath(mountpoint, { follow_mount: false });
              if (!FS.isMountpoint(lookup2.node)) {
                throw new FS.ErrnoError(28);
              }
              var node = lookup2.node;
              var mount = node.mounted;
              var mounts = FS.getMounts(mount);
              Object.keys(FS.nameTable).forEach((hash3) => {
                var current = FS.nameTable[hash3];
                while (current) {
                  var next = current.name_next;
                  if (mounts.includes(current.mount)) {
                    FS.destroyNode(current);
                  }
                  current = next;
                }
              });
              node.mounted = null;
              var idx = node.mount.mounts.indexOf(mount);
              assert(idx !== -1);
              node.mount.mounts.splice(idx, 1);
            },
            lookup(parent, name) {
              return parent.node_ops.lookup(parent, name);
            },
            mknod(path, mode, dev) {
              var lookup2 = FS.lookupPath(path, { parent: true });
              var parent = lookup2.node;
              var name = PATH.basename(path);
              if (!name || name === "." || name === "..") {
                throw new FS.ErrnoError(28);
              }
              var errCode = FS.mayCreate(parent, name);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.mknod) {
                throw new FS.ErrnoError(63);
              }
              return parent.node_ops.mknod(parent, name, mode, dev);
            },
            create(path, mode) {
              mode = mode !== void 0 ? mode : 438;
              mode &= 4095;
              mode |= 32768;
              return FS.mknod(path, mode, 0);
            },
            mkdir(path, mode) {
              mode = mode !== void 0 ? mode : 511;
              mode &= 511 | 512;
              mode |= 16384;
              return FS.mknod(path, mode, 0);
            },
            mkdirTree(path, mode) {
              var dirs = path.split("/");
              var d = "";
              for (var i = 0; i < dirs.length; ++i) {
                if (!dirs[i]) continue;
                d += "/" + dirs[i];
                try {
                  FS.mkdir(d, mode);
                } catch (e) {
                  if (e.errno != 20) throw e;
                }
              }
            },
            mkdev(path, mode, dev) {
              if (typeof dev == "undefined") {
                dev = mode;
                mode = 438;
              }
              mode |= 8192;
              return FS.mknod(path, mode, dev);
            },
            symlink(oldpath, newpath) {
              if (!PATH_FS.resolve(oldpath)) {
                throw new FS.ErrnoError(44);
              }
              var lookup2 = FS.lookupPath(newpath, { parent: true });
              var parent = lookup2.node;
              if (!parent) {
                throw new FS.ErrnoError(44);
              }
              var newname = PATH.basename(newpath);
              var errCode = FS.mayCreate(parent, newname);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.symlink) {
                throw new FS.ErrnoError(63);
              }
              return parent.node_ops.symlink(parent, newname, oldpath);
            },
            rename(old_path, new_path) {
              var old_dirname = PATH.dirname(old_path);
              var new_dirname = PATH.dirname(new_path);
              var old_name = PATH.basename(old_path);
              var new_name = PATH.basename(new_path);
              var lookup2, old_dir, new_dir;
              lookup2 = FS.lookupPath(old_path, { parent: true });
              old_dir = lookup2.node;
              lookup2 = FS.lookupPath(new_path, { parent: true });
              new_dir = lookup2.node;
              if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
              if (old_dir.mount !== new_dir.mount) {
                throw new FS.ErrnoError(75);
              }
              var old_node = FS.lookupNode(old_dir, old_name);
              var relative = PATH_FS.relative(old_path, new_dirname);
              if (relative.charAt(0) !== ".") {
                throw new FS.ErrnoError(28);
              }
              relative = PATH_FS.relative(new_path, old_dirname);
              if (relative.charAt(0) !== ".") {
                throw new FS.ErrnoError(55);
              }
              var new_node;
              try {
                new_node = FS.lookupNode(new_dir, new_name);
              } catch (e) {
              }
              if (old_node === new_node) {
                return;
              }
              var isdir = FS.isDir(old_node.mode);
              var errCode = FS.mayDelete(old_dir, old_name, isdir);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!old_dir.node_ops.rename) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
                throw new FS.ErrnoError(10);
              }
              if (new_dir !== old_dir) {
                errCode = FS.nodePermissions(old_dir, "w");
                if (errCode) {
                  throw new FS.ErrnoError(errCode);
                }
              }
              FS.hashRemoveNode(old_node);
              try {
                old_dir.node_ops.rename(old_node, new_dir, new_name);
                old_node.parent = new_dir;
              } catch (e) {
                throw e;
              } finally {
                FS.hashAddNode(old_node);
              }
            },
            rmdir(path) {
              var lookup2 = FS.lookupPath(path, { parent: true });
              var parent = lookup2.node;
              var name = PATH.basename(path);
              var node = FS.lookupNode(parent, name);
              var errCode = FS.mayDelete(parent, name, true);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.rmdir) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
              }
              parent.node_ops.rmdir(parent, name);
              FS.destroyNode(node);
            },
            readdir(path) {
              var lookup2 = FS.lookupPath(path, { follow: true });
              var node = lookup2.node;
              if (!node.node_ops.readdir) {
                throw new FS.ErrnoError(54);
              }
              return node.node_ops.readdir(node);
            },
            unlink(path) {
              var lookup2 = FS.lookupPath(path, { parent: true });
              var parent = lookup2.node;
              if (!parent) {
                throw new FS.ErrnoError(44);
              }
              var name = PATH.basename(path);
              var node = FS.lookupNode(parent, name);
              var errCode = FS.mayDelete(parent, name, false);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.unlink) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
              }
              parent.node_ops.unlink(parent, name);
              FS.destroyNode(node);
            },
            readlink(path) {
              var lookup2 = FS.lookupPath(path);
              var link = lookup2.node;
              if (!link) {
                throw new FS.ErrnoError(44);
              }
              if (!link.node_ops.readlink) {
                throw new FS.ErrnoError(28);
              }
              return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
            },
            stat(path, dontFollow) {
              var lookup2 = FS.lookupPath(path, { follow: !dontFollow });
              var node = lookup2.node;
              if (!node) {
                throw new FS.ErrnoError(44);
              }
              if (!node.node_ops.getattr) {
                throw new FS.ErrnoError(63);
              }
              return node.node_ops.getattr(node);
            },
            lstat(path) {
              return FS.stat(path, true);
            },
            chmod(path, mode, dontFollow) {
              var node;
              if (typeof path == "string") {
                var lookup2 = FS.lookupPath(path, { follow: !dontFollow });
                node = lookup2.node;
              } else {
                node = path;
              }
              if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
              }
              node.node_ops.setattr(node, {
                mode: mode & 4095 | node.mode & -4096,
                timestamp: Date.now()
              });
            },
            lchmod(path, mode) {
              FS.chmod(path, mode, true);
            },
            fchmod(fd, mode) {
              var stream = FS.getStreamChecked(fd);
              FS.chmod(stream.node, mode);
            },
            chown(path, uid2, gid, dontFollow) {
              var node;
              if (typeof path == "string") {
                var lookup2 = FS.lookupPath(path, { follow: !dontFollow });
                node = lookup2.node;
              } else {
                node = path;
              }
              if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
              }
              node.node_ops.setattr(node, {
                timestamp: Date.now()
                // we ignore the uid / gid for now
              });
            },
            lchown(path, uid2, gid) {
              FS.chown(path, uid2, gid, true);
            },
            fchown(fd, uid2, gid) {
              var stream = FS.getStreamChecked(fd);
              FS.chown(stream.node, uid2, gid);
            },
            truncate(path, len) {
              if (len < 0) {
                throw new FS.ErrnoError(28);
              }
              var node;
              if (typeof path == "string") {
                var lookup2 = FS.lookupPath(path, { follow: true });
                node = lookup2.node;
              } else {
                node = path;
              }
              if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isDir(node.mode)) {
                throw new FS.ErrnoError(31);
              }
              if (!FS.isFile(node.mode)) {
                throw new FS.ErrnoError(28);
              }
              var errCode = FS.nodePermissions(node, "w");
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              node.node_ops.setattr(node, {
                size: len,
                timestamp: Date.now()
              });
            },
            ftruncate(fd, len) {
              var stream = FS.getStreamChecked(fd);
              if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(28);
              }
              FS.truncate(stream.node, len);
            },
            utime(path, atime, mtime) {
              var lookup2 = FS.lookupPath(path, { follow: true });
              var node = lookup2.node;
              node.node_ops.setattr(node, {
                timestamp: Math.max(atime, mtime)
              });
            },
            open(path, flags, mode) {
              if (path === "") {
                throw new FS.ErrnoError(44);
              }
              flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
              if (flags & 64) {
                mode = typeof mode == "undefined" ? 438 : mode;
                mode = mode & 4095 | 32768;
              } else {
                mode = 0;
              }
              var node;
              if (typeof path == "object") {
                node = path;
              } else {
                path = PATH.normalize(path);
                try {
                  var lookup2 = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                  });
                  node = lookup2.node;
                } catch (e) {
                }
              }
              var created = false;
              if (flags & 64) {
                if (node) {
                  if (flags & 128) {
                    throw new FS.ErrnoError(20);
                  }
                } else {
                  node = FS.mknod(path, mode, 0);
                  created = true;
                }
              }
              if (!node) {
                throw new FS.ErrnoError(44);
              }
              if (FS.isChrdev(node.mode)) {
                flags &= -513;
              }
              if (flags & 65536 && !FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54);
              }
              if (!created) {
                var errCode = FS.mayOpen(node, flags);
                if (errCode) {
                  throw new FS.ErrnoError(errCode);
                }
              }
              if (flags & 512 && !created) {
                FS.truncate(node, 0);
              }
              flags &= -131713;
              var stream = FS.createStream({
                node,
                path: FS.getPath(node),
                // we want the absolute path to the node
                flags,
                seekable: true,
                position: 0,
                stream_ops: node.stream_ops,
                // used by the file family libc calls (fopen, fwrite, ferror, etc.)
                ungotten: [],
                error: false
              });
              if (stream.stream_ops.open) {
                stream.stream_ops.open(stream);
              }
              if (Module2["logReadFiles"] && !(flags & 1)) {
                if (!(path in FS.readFiles)) {
                  FS.readFiles[path] = 1;
                }
              }
              return stream;
            },
            close(stream) {
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if (stream.getdents) stream.getdents = null;
              try {
                if (stream.stream_ops.close) {
                  stream.stream_ops.close(stream);
                }
              } catch (e) {
                throw e;
              } finally {
                FS.closeStream(stream.fd);
              }
              stream.fd = null;
            },
            isClosed(stream) {
              return stream.fd === null;
            },
            llseek(stream, offset2, whence) {
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if (!stream.seekable || !stream.stream_ops.llseek) {
                throw new FS.ErrnoError(70);
              }
              if (whence != 0 && whence != 1 && whence != 2) {
                throw new FS.ErrnoError(28);
              }
              stream.position = stream.stream_ops.llseek(stream, offset2, whence);
              stream.ungotten = [];
              return stream.position;
            },
            read(stream, buffer, offset2, length, position) {
              assert(offset2 >= 0);
              if (length < 0 || position < 0) {
                throw new FS.ErrnoError(28);
              }
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if ((stream.flags & 2097155) === 1) {
                throw new FS.ErrnoError(8);
              }
              if (FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(31);
              }
              if (!stream.stream_ops.read) {
                throw new FS.ErrnoError(28);
              }
              var seeking = typeof position != "undefined";
              if (!seeking) {
                position = stream.position;
              } else if (!stream.seekable) {
                throw new FS.ErrnoError(70);
              }
              var bytesRead = stream.stream_ops.read(stream, buffer, offset2, length, position);
              if (!seeking) stream.position += bytesRead;
              return bytesRead;
            },
            write(stream, buffer, offset2, length, position, canOwn) {
              assert(offset2 >= 0);
              if (length < 0 || position < 0) {
                throw new FS.ErrnoError(28);
              }
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(8);
              }
              if (FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(31);
              }
              if (!stream.stream_ops.write) {
                throw new FS.ErrnoError(28);
              }
              if (stream.seekable && stream.flags & 1024) {
                FS.llseek(stream, 0, 2);
              }
              var seeking = typeof position != "undefined";
              if (!seeking) {
                position = stream.position;
              } else if (!stream.seekable) {
                throw new FS.ErrnoError(70);
              }
              var bytesWritten = stream.stream_ops.write(
                stream,
                buffer,
                offset2,
                length,
                position,
                canOwn
              );
              if (!seeking) stream.position += bytesWritten;
              return bytesWritten;
            },
            allocate(stream, offset2, length) {
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if (offset2 < 0 || length <= 0) {
                throw new FS.ErrnoError(28);
              }
              if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(8);
              }
              if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(43);
              }
              if (!stream.stream_ops.allocate) {
                throw new FS.ErrnoError(138);
              }
              stream.stream_ops.allocate(stream, offset2, length);
            },
            mmap(stream, length, position, prot, flags) {
              if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
                throw new FS.ErrnoError(2);
              }
              if ((stream.flags & 2097155) === 1) {
                throw new FS.ErrnoError(2);
              }
              if (!stream.stream_ops.mmap) {
                throw new FS.ErrnoError(43);
              }
              if (!length) {
                throw new FS.ErrnoError(28);
              }
              return stream.stream_ops.mmap(stream, length, position, prot, flags);
            },
            msync(stream, buffer, offset2, length, mmapFlags) {
              assert(offset2 >= 0);
              if (!stream.stream_ops.msync) {
                return 0;
              }
              return stream.stream_ops.msync(stream, buffer, offset2, length, mmapFlags);
            },
            ioctl(stream, cmd, arg) {
              if (!stream.stream_ops.ioctl) {
                throw new FS.ErrnoError(59);
              }
              return stream.stream_ops.ioctl(stream, cmd, arg);
            },
            readFile(path, opts = {}) {
              opts.flags = opts.flags || 0;
              opts.encoding = opts.encoding || "binary";
              if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
                throw new Error(`Invalid encoding type "${opts.encoding}"`);
              }
              var ret;
              var stream = FS.open(path, opts.flags);
              var stat = FS.stat(path);
              var length = stat.size;
              var buf = new Uint8Array(length);
              FS.read(stream, buf, 0, length, 0);
              if (opts.encoding === "utf8") {
                ret = UTF8ArrayToString(buf);
              } else if (opts.encoding === "binary") {
                ret = buf;
              }
              FS.close(stream);
              return ret;
            },
            writeFile(path, data2, opts = {}) {
              opts.flags = opts.flags || 577;
              var stream = FS.open(path, opts.flags, opts.mode);
              if (typeof data2 == "string") {
                var buf = new Uint8Array(lengthBytesUTF8(data2) + 1);
                var actualNumBytes = stringToUTF8Array(data2, buf, 0, buf.length);
                FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
              } else if (ArrayBuffer.isView(data2)) {
                FS.write(stream, data2, 0, data2.byteLength, void 0, opts.canOwn);
              } else {
                throw new Error("Unsupported data type");
              }
              FS.close(stream);
            },
            cwd: () => FS.currentPath,
            chdir(path) {
              var lookup2 = FS.lookupPath(path, { follow: true });
              if (lookup2.node === null) {
                throw new FS.ErrnoError(44);
              }
              if (!FS.isDir(lookup2.node.mode)) {
                throw new FS.ErrnoError(54);
              }
              var errCode = FS.nodePermissions(lookup2.node, "x");
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              FS.currentPath = lookup2.path;
            },
            createDefaultDirectories() {
              FS.mkdir("/tmp");
              FS.mkdir("/home");
              FS.mkdir("/home/web_user");
            },
            createDefaultDevices() {
              FS.mkdir("/dev");
              FS.registerDevice(FS.makedev(1, 3), {
                read: () => 0,
                write: (stream, buffer, offset2, length, pos) => length
              });
              FS.mkdev("/dev/null", FS.makedev(1, 3));
              TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
              TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
              FS.mkdev("/dev/tty", FS.makedev(5, 0));
              FS.mkdev("/dev/tty1", FS.makedev(6, 0));
              var randomBuffer = new Uint8Array(1024), randomLeft = 0;
              var randomByte = () => {
                if (randomLeft === 0) {
                  randomLeft = randomFill(randomBuffer).byteLength;
                }
                return randomBuffer[--randomLeft];
              };
              FS.createDevice("/dev", "random", randomByte);
              FS.createDevice("/dev", "urandom", randomByte);
              FS.mkdir("/dev/shm");
              FS.mkdir("/dev/shm/tmp");
            },
            createSpecialDirectories() {
              FS.mkdir("/proc");
              var proc_self = FS.mkdir("/proc/self");
              FS.mkdir("/proc/self/fd");
              FS.mount(
                {
                  mount() {
                    var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                    node.node_ops = {
                      lookup(parent, name) {
                        var fd = +name;
                        var stream = FS.getStreamChecked(fd);
                        var ret = {
                          parent: null,
                          mount: { mountpoint: "fake" },
                          node_ops: { readlink: () => stream.path }
                        };
                        ret.parent = ret;
                        return ret;
                      }
                    };
                    return node;
                  }
                },
                {},
                "/proc/self/fd"
              );
            },
            createStandardStreams(input, output, error3) {
              if (input) {
                FS.createDevice("/dev", "stdin", input);
              } else {
                FS.symlink("/dev/tty", "/dev/stdin");
              }
              if (output) {
                FS.createDevice("/dev", "stdout", null, output);
              } else {
                FS.symlink("/dev/tty", "/dev/stdout");
              }
              if (error3) {
                FS.createDevice("/dev", "stderr", null, error3);
              } else {
                FS.symlink("/dev/tty1", "/dev/stderr");
              }
              var stdin = FS.open("/dev/stdin", 0);
              var stdout = FS.open("/dev/stdout", 1);
              var stderr = FS.open("/dev/stderr", 1);
              assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
              assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
              assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
            },
            staticInit() {
              [44].forEach((code) => {
                FS.genericErrors[code] = new FS.ErrnoError(code);
                FS.genericErrors[code].stack = "<generic error, no stack>";
              });
              FS.nameTable = new Array(4096);
              FS.mount(MEMFS, {}, "/");
              FS.createDefaultDirectories();
              FS.createDefaultDevices();
              FS.createSpecialDirectories();
              FS.filesystems = {
                MEMFS
              };
            },
            init(input, output, error3) {
              assert(
                !FS.initialized,
                "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
              );
              FS.initialized = true;
              input ??= Module2["stdin"];
              output ??= Module2["stdout"];
              error3 ??= Module2["stderr"];
              FS.createStandardStreams(input, output, error3);
            },
            quit() {
              FS.initialized = false;
              _fflush(0);
              for (var i = 0; i < FS.streams.length; i++) {
                var stream = FS.streams[i];
                if (!stream) {
                  continue;
                }
                FS.close(stream);
              }
            },
            findObject(path, dontResolveLastLink) {
              var ret = FS.analyzePath(path, dontResolveLastLink);
              if (!ret.exists) {
                return null;
              }
              return ret.object;
            },
            analyzePath(path, dontResolveLastLink) {
              try {
                var lookup2 = FS.lookupPath(path, { follow: !dontResolveLastLink });
                path = lookup2.path;
              } catch (e) {
              }
              var ret = {
                isRoot: false,
                exists: false,
                error: 0,
                name: null,
                path: null,
                object: null,
                parentExists: false,
                parentPath: null,
                parentObject: null
              };
              try {
                var lookup2 = FS.lookupPath(path, { parent: true });
                ret.parentExists = true;
                ret.parentPath = lookup2.path;
                ret.parentObject = lookup2.node;
                ret.name = PATH.basename(path);
                lookup2 = FS.lookupPath(path, { follow: !dontResolveLastLink });
                ret.exists = true;
                ret.path = lookup2.path;
                ret.object = lookup2.node;
                ret.name = lookup2.node.name;
                ret.isRoot = lookup2.path === "/";
              } catch (e) {
                ret.error = e.errno;
              }
              return ret;
            },
            createPath(parent, path, canRead, canWrite) {
              parent = typeof parent == "string" ? parent : FS.getPath(parent);
              var parts = path.split("/").reverse();
              while (parts.length) {
                var part = parts.pop();
                if (!part) continue;
                var current = PATH.join2(parent, part);
                try {
                  FS.mkdir(current);
                } catch (e) {
                }
                parent = current;
              }
              return current;
            },
            createFile(parent, name, properties, canRead, canWrite) {
              var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
              var mode = FS_getMode(canRead, canWrite);
              return FS.create(path, mode);
            },
            createDataFile(parent, name, data2, canRead, canWrite, canOwn) {
              var path = name;
              if (parent) {
                parent = typeof parent == "string" ? parent : FS.getPath(parent);
                path = name ? PATH.join2(parent, name) : parent;
              }
              var mode = FS_getMode(canRead, canWrite);
              var node = FS.create(path, mode);
              if (data2) {
                if (typeof data2 == "string") {
                  var arr = new Array(data2.length);
                  for (var i = 0, len = data2.length; i < len; ++i) arr[i] = data2.charCodeAt(i);
                  data2 = arr;
                }
                FS.chmod(node, mode | 146);
                var stream = FS.open(node, 577);
                FS.write(stream, data2, 0, data2.length, 0, canOwn);
                FS.close(stream);
                FS.chmod(node, mode);
              }
            },
            createDevice(parent, name, input, output) {
              var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
              var mode = FS_getMode(!!input, !!output);
              FS.createDevice.major ??= 64;
              var dev = FS.makedev(FS.createDevice.major++, 0);
              FS.registerDevice(dev, {
                open(stream) {
                  stream.seekable = false;
                },
                close(stream) {
                  if (output?.buffer?.length) {
                    output(10);
                  }
                },
                read(stream, buffer, offset2, length, pos) {
                  var bytesRead = 0;
                  for (var i = 0; i < length; i++) {
                    var result;
                    try {
                      result = input();
                    } catch (e) {
                      throw new FS.ErrnoError(29);
                    }
                    if (result === void 0 && bytesRead === 0) {
                      throw new FS.ErrnoError(6);
                    }
                    if (result === null || result === void 0) break;
                    bytesRead++;
                    buffer[offset2 + i] = result;
                  }
                  if (bytesRead) {
                    stream.node.timestamp = Date.now();
                  }
                  return bytesRead;
                },
                write(stream, buffer, offset2, length, pos) {
                  for (var i = 0; i < length; i++) {
                    try {
                      output(buffer[offset2 + i]);
                    } catch (e) {
                      throw new FS.ErrnoError(29);
                    }
                  }
                  if (length) {
                    stream.node.timestamp = Date.now();
                  }
                  return i;
                }
              });
              return FS.mkdev(path, mode, dev);
            },
            forceLoadFile(obj) {
              if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
              if (typeof XMLHttpRequest != "undefined") {
                throw new Error(
                  "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                );
              } else {
                try {
                  obj.contents = readBinary(obj.url);
                  obj.usedBytes = obj.contents.length;
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
              }
            },
            createLazyFile(parent, name, url, canRead, canWrite) {
              class LazyUint8Array {
                constructor() {
                  this.lengthKnown = false;
                  this.chunks = [];
                }
                get(idx) {
                  if (idx > this.length - 1 || idx < 0) {
                    return void 0;
                  }
                  var chunkOffset = idx % this.chunkSize;
                  var chunkNum = idx / this.chunkSize | 0;
                  return this.getter(chunkNum)[chunkOffset];
                }
                setDataGetter(getter) {
                  this.getter = getter;
                }
                cacheLength() {
                  var xhr = new XMLHttpRequest();
                  xhr.open("HEAD", url, false);
                  xhr.send(null);
                  if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                    throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                  var datalength = Number(xhr.getResponseHeader("Content-length"));
                  var header;
                  var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                  var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                  var chunkSize = 1024 * 1024;
                  if (!hasByteServing) chunkSize = datalength;
                  var doXHR = (from, to) => {
                    if (from > to)
                      throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                    if (to > datalength - 1)
                      throw new Error("only " + datalength + " bytes available! programmer error!");
                    var xhr2 = new XMLHttpRequest();
                    xhr2.open("GET", url, false);
                    if (datalength !== chunkSize)
                      xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
                    xhr2.responseType = "arraybuffer";
                    if (xhr2.overrideMimeType) {
                      xhr2.overrideMimeType("text/plain; charset=x-user-defined");
                    }
                    xhr2.send(null);
                    if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
                      throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
                    if (xhr2.response !== void 0) {
                      return new Uint8Array(
                        /** @type{Array<number>} */
                        xhr2.response || []
                      );
                    }
                    return intArrayFromString(xhr2.responseText || "");
                  };
                  var lazyArray2 = this;
                  lazyArray2.setDataGetter((chunkNum) => {
                    var start3 = chunkNum * chunkSize;
                    var end2 = (chunkNum + 1) * chunkSize - 1;
                    end2 = Math.min(end2, datalength - 1);
                    if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                      lazyArray2.chunks[chunkNum] = doXHR(start3, end2);
                    }
                    if (typeof lazyArray2.chunks[chunkNum] == "undefined")
                      throw new Error("doXHR failed!");
                    return lazyArray2.chunks[chunkNum];
                  });
                  if (usesGzip || !datalength) {
                    chunkSize = datalength = 1;
                    datalength = this.getter(0).length;
                    chunkSize = datalength;
                    out("LazyFiles on gzip forces download of the whole file when length is accessed");
                  }
                  this._length = datalength;
                  this._chunkSize = chunkSize;
                  this.lengthKnown = true;
                }
                get length() {
                  if (!this.lengthKnown) {
                    this.cacheLength();
                  }
                  return this._length;
                }
                get chunkSize() {
                  if (!this.lengthKnown) {
                    this.cacheLength();
                  }
                  return this._chunkSize;
                }
              }
              if (typeof XMLHttpRequest != "undefined") {
                if (!ENVIRONMENT_IS_WORKER)
                  throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                var lazyArray = new LazyUint8Array();
                var properties = { isDevice: false, contents: lazyArray };
              } else {
                var properties = { isDevice: false, url };
              }
              var node = FS.createFile(parent, name, properties, canRead, canWrite);
              if (properties.contents) {
                node.contents = properties.contents;
              } else if (properties.url) {
                node.contents = null;
                node.url = properties.url;
              }
              Object.defineProperties(node, {
                usedBytes: {
                  get: function() {
                    return this.contents.length;
                  }
                }
              });
              var stream_ops = {};
              var keys = Object.keys(node.stream_ops);
              keys.forEach((key) => {
                var fn3 = node.stream_ops[key];
                stream_ops[key] = (...args) => {
                  FS.forceLoadFile(node);
                  return fn3(...args);
                };
              });
              function writeChunks(stream, buffer, offset2, length, position) {
                var contents = stream.node.contents;
                if (position >= contents.length) return 0;
                var size2 = Math.min(contents.length - position, length);
                assert(size2 >= 0);
                if (contents.slice) {
                  for (var i = 0; i < size2; i++) {
                    buffer[offset2 + i] = contents[position + i];
                  }
                } else {
                  for (var i = 0; i < size2; i++) {
                    buffer[offset2 + i] = contents.get(position + i);
                  }
                }
                return size2;
              }
              stream_ops.read = (stream, buffer, offset2, length, position) => {
                FS.forceLoadFile(node);
                return writeChunks(stream, buffer, offset2, length, position);
              };
              stream_ops.mmap = (stream, length, position, prot, flags) => {
                FS.forceLoadFile(node);
                var ptr = mmapAlloc(length);
                if (!ptr) {
                  throw new FS.ErrnoError(48);
                }
                writeChunks(stream, HEAP8, ptr, length, position);
                return { ptr, allocated: true };
              };
              node.stream_ops = stream_ops;
              return node;
            },
            absolutePath() {
              abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
            },
            createFolder() {
              abort("FS.createFolder has been removed; use FS.mkdir instead");
            },
            createLink() {
              abort("FS.createLink has been removed; use FS.symlink instead");
            },
            joinPath() {
              abort("FS.joinPath has been removed; use PATH.join instead");
            },
            mmapAlloc() {
              abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
            },
            standardizePath() {
              abort("FS.standardizePath has been removed; use PATH.normalize instead");
            }
          };
          var SYSCALLS = {
            DEFAULT_POLLMASK: 5,
            calculateAt(dirfd, path, allowEmpty) {
              if (PATH.isAbs(path)) {
                return path;
              }
              var dir;
              if (dirfd === -100) {
                dir = FS.cwd();
              } else {
                var dirstream = SYSCALLS.getStreamFromFD(dirfd);
                dir = dirstream.path;
              }
              if (path.length == 0) {
                if (!allowEmpty) {
                  throw new FS.ErrnoError(44);
                }
                return dir;
              }
              return PATH.join2(dir, path);
            },
            doStat(func, path, buf) {
              var stat = func(path);
              HEAP32[buf >> 2] = stat.dev;
              HEAP32[buf + 4 >> 2] = stat.mode;
              HEAPU32[buf + 8 >> 2] = stat.nlink;
              HEAP32[buf + 12 >> 2] = stat.uid;
              HEAP32[buf + 16 >> 2] = stat.gid;
              HEAP32[buf + 20 >> 2] = stat.rdev;
              tempI64 = [
                stat.size >>> 0,
                (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
              ], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
              HEAP32[buf + 32 >> 2] = 4096;
              HEAP32[buf + 36 >> 2] = stat.blocks;
              var atime = stat.atime.getTime();
              var mtime = stat.mtime.getTime();
              var ctime = stat.ctime.getTime();
              tempI64 = [
                Math.floor(atime / 1e3) >>> 0,
                (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
              ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
              HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
              tempI64 = [
                Math.floor(mtime / 1e3) >>> 0,
                (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
              ], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
              HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
              tempI64 = [
                Math.floor(ctime / 1e3) >>> 0,
                (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
              ], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
              HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
              tempI64 = [
                stat.ino >>> 0,
                (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
              ], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
              return 0;
            },
            doMsync(addr, stream, len, flags, offset2) {
              if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43);
              }
              if (flags & 2) {
                return 0;
              }
              var buffer = HEAPU8.slice(addr, addr + len);
              FS.msync(stream, buffer, offset2, len, flags);
            },
            getStreamFromFD(fd) {
              var stream = FS.getStreamChecked(fd);
              return stream;
            },
            varargs: void 0,
            getStr(ptr) {
              var ret = UTF8ToString(ptr);
              return ret;
            }
          };
          function ___syscall_fcntl64(fd, cmd, varargs) {
            SYSCALLS.varargs = varargs;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              switch (cmd) {
                case 0: {
                  var arg = syscallGetVarargI();
                  if (arg < 0) {
                    return -28;
                  }
                  while (FS.streams[arg]) {
                    arg++;
                  }
                  var newStream;
                  newStream = FS.dupStream(stream, arg);
                  return newStream.fd;
                }
                case 1:
                case 2:
                  return 0;
                // FD_CLOEXEC makes no sense for a single process.
                case 3:
                  return stream.flags;
                case 4: {
                  var arg = syscallGetVarargI();
                  stream.flags |= arg;
                  return 0;
                }
                case 12: {
                  var arg = syscallGetVarargP();
                  var offset2 = 0;
                  HEAP16[arg + offset2 >> 1] = 2;
                  return 0;
                }
                case 13:
                case 14:
                  return 0;
              }
              return -28;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_fstat64(fd, buf) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              return SYSCALLS.doStat(FS.stat, stream.path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          var convertI32PairToI53Checked = (lo, hi) => {
            assert(lo == lo >>> 0 || lo == (lo | 0));
            assert(hi === (hi | 0));
            return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
          };
          function ___syscall_ftruncate64(fd, length_low, length_high) {
            var length = convertI32PairToI53Checked(length_low, length_high);
            try {
              if (isNaN(length)) return 61;
              FS.ftruncate(fd, length);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
            assert(
              typeof maxBytesToWrite == "number",
              "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
            );
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
          };
          function ___syscall_getdents64(fd, dirp, count) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              stream.getdents ||= FS.readdir(stream.path);
              var struct_size = 280;
              var pos = 0;
              var off = FS.llseek(stream, 0, 1);
              var idx = Math.floor(off / struct_size);
              while (idx < stream.getdents.length && pos + struct_size <= count) {
                var id;
                var type;
                var name = stream.getdents[idx];
                if (name === ".") {
                  id = stream.node.id;
                  type = 4;
                } else if (name === "..") {
                  var lookup2 = FS.lookupPath(stream.path, { parent: true });
                  id = lookup2.node.id;
                  type = 4;
                } else {
                  var child = FS.lookupNode(stream.node, name);
                  id = child.id;
                  type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
                }
                assert(id);
                tempI64 = [
                  id >>> 0,
                  (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                ], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
                tempI64 = [
                  (idx + 1) * struct_size >>> 0,
                  (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                ], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
                HEAP16[dirp + pos + 16 >> 1] = 280;
                HEAP8[dirp + pos + 18] = type;
                stringToUTF8(name, dirp + pos + 19, 256);
                pos += struct_size;
                idx += 1;
              }
              FS.llseek(stream, idx * struct_size, 0);
              return pos;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_ioctl(fd, op, varargs) {
            SYSCALLS.varargs = varargs;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              switch (op) {
                case 21509: {
                  if (!stream.tty) return -59;
                  return 0;
                }
                case 21505: {
                  if (!stream.tty) return -59;
                  if (stream.tty.ops.ioctl_tcgets) {
                    var termios = stream.tty.ops.ioctl_tcgets(stream);
                    var argp = syscallGetVarargP();
                    HEAP32[argp >> 2] = termios.c_iflag || 0;
                    HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
                    HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
                    HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
                    for (var i = 0; i < 32; i++) {
                      HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
                    }
                    return 0;
                  }
                  return 0;
                }
                case 21510:
                case 21511:
                case 21512: {
                  if (!stream.tty) return -59;
                  return 0;
                }
                case 21506:
                case 21507:
                case 21508: {
                  if (!stream.tty) return -59;
                  if (stream.tty.ops.ioctl_tcsets) {
                    var argp = syscallGetVarargP();
                    var c_iflag = HEAP32[argp >> 2];
                    var c_oflag = HEAP32[argp + 4 >> 2];
                    var c_cflag = HEAP32[argp + 8 >> 2];
                    var c_lflag = HEAP32[argp + 12 >> 2];
                    var c_cc = [];
                    for (var i = 0; i < 32; i++) {
                      c_cc.push(HEAP8[argp + i + 17]);
                    }
                    return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
                      c_iflag,
                      c_oflag,
                      c_cflag,
                      c_lflag,
                      c_cc
                    });
                  }
                  return 0;
                }
                case 21519: {
                  if (!stream.tty) return -59;
                  var argp = syscallGetVarargP();
                  HEAP32[argp >> 2] = 0;
                  return 0;
                }
                case 21520: {
                  if (!stream.tty) return -59;
                  return -28;
                }
                case 21531: {
                  var argp = syscallGetVarargP();
                  return FS.ioctl(stream, op, argp);
                }
                case 21523: {
                  if (!stream.tty) return -59;
                  if (stream.tty.ops.ioctl_tiocgwinsz) {
                    var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
                    var argp = syscallGetVarargP();
                    HEAP16[argp >> 1] = winsize[0];
                    HEAP16[argp + 2 >> 1] = winsize[1];
                  }
                  return 0;
                }
                case 21524: {
                  if (!stream.tty) return -59;
                  return 0;
                }
                case 21515: {
                  if (!stream.tty) return -59;
                  return 0;
                }
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_lstat64(path, buf) {
            try {
              path = SYSCALLS.getStr(path);
              return SYSCALLS.doStat(FS.lstat, path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_newfstatat(dirfd, path, buf, flags) {
            try {
              path = SYSCALLS.getStr(path);
              var nofollow = flags & 256;
              var allowEmpty = flags & 4096;
              flags = flags & ~6400;
              assert(!flags, `unknown flags in __syscall_newfstatat: ${flags}`);
              path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
              return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_openat(dirfd, path, flags, varargs) {
            SYSCALLS.varargs = varargs;
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              var mode = varargs ? syscallGetVarargI() : 0;
              return FS.open(path, flags, mode).fd;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_rmdir(path) {
            try {
              path = SYSCALLS.getStr(path);
              FS.rmdir(path);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_stat64(path, buf) {
            try {
              path = SYSCALLS.getStr(path);
              return SYSCALLS.doStat(FS.stat, path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          function ___syscall_unlinkat(dirfd, path, flags) {
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              if (flags === 0) {
                FS.unlink(path);
              } else if (flags === 512) {
                FS.rmdir(path);
              } else {
                abort("Invalid flags passed to unlinkat");
              }
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          }
          var __abort_js = () => {
            abort("native code called abort()");
          };
          var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
          var __emscripten_throw_longjmp = () => {
            throw Infinity;
          };
          function __gmtime_js(time_low, time_high, tmPtr) {
            var time = convertI32PairToI53Checked(time_low, time_high);
            var date = new Date(time * 1e3);
            HEAP32[tmPtr >> 2] = date.getUTCSeconds();
            HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
            HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
            HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
            HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
            HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
            HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
            var start3 = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
            var yday = (date.getTime() - start3) / (1e3 * 60 * 60 * 24) | 0;
            HEAP32[tmPtr + 28 >> 2] = yday;
          }
          var isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
          var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
          var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          var ydayFromDate = (date) => {
            var leap = isLeapYear(date.getFullYear());
            var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
            var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
            return yday;
          };
          function __localtime_js(time_low, time_high, tmPtr) {
            var time = convertI32PairToI53Checked(time_low, time_high);
            var date = new Date(time * 1e3);
            HEAP32[tmPtr >> 2] = date.getSeconds();
            HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
            HEAP32[tmPtr + 8 >> 2] = date.getHours();
            HEAP32[tmPtr + 12 >> 2] = date.getDate();
            HEAP32[tmPtr + 16 >> 2] = date.getMonth();
            HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
            HEAP32[tmPtr + 24 >> 2] = date.getDay();
            var yday = ydayFromDate(date) | 0;
            HEAP32[tmPtr + 28 >> 2] = yday;
            HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
            var start3 = new Date(date.getFullYear(), 0, 1);
            var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
            var winterOffset = start3.getTimezoneOffset();
            var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
            HEAP32[tmPtr + 32 >> 2] = dst;
          }
          var __tzset_js = (timezone, daylight, std_name, dst_name) => {
            var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
            var winter = new Date(currentYear, 0, 1);
            var summer = new Date(currentYear, 6, 1);
            var winterOffset = winter.getTimezoneOffset();
            var summerOffset = summer.getTimezoneOffset();
            var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
            HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
            HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
            var extractZone = (timezoneOffset) => {
              var sign = timezoneOffset >= 0 ? "-" : "+";
              var absOffset = Math.abs(timezoneOffset);
              var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
              var minutes = String(absOffset % 60).padStart(2, "0");
              return `UTC${sign}${hours}${minutes}`;
            };
            var winterName = extractZone(winterOffset);
            var summerName = extractZone(summerOffset);
            assert(winterName);
            assert(summerName);
            assert(
              lengthBytesUTF8(winterName) <= 16,
              `timezone name truncated to fit in TZNAME_MAX (${winterName})`
            );
            assert(
              lengthBytesUTF8(summerName) <= 16,
              `timezone name truncated to fit in TZNAME_MAX (${summerName})`
            );
            if (summerOffset < winterOffset) {
              stringToUTF8(winterName, std_name, 17);
              stringToUTF8(summerName, dst_name, 17);
            } else {
              stringToUTF8(winterName, dst_name, 17);
              stringToUTF8(summerName, std_name, 17);
            }
          };
          var _emscripten_date_now = () => Date.now();
          var getHeapMax = () => (
            // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
            // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
            // for any code that deals with heap sizes, which would require special
            // casing all heap size related code to treat 0 specially.
            2147483648
          );
          var growMemory = (size2) => {
            var b = wasmMemory.buffer;
            var pages = (size2 - b.byteLength + 65535) / 65536 | 0;
            try {
              wasmMemory.grow(pages);
              updateMemoryViews();
              return 1;
            } catch (e) {
              err(
                `growMemory: Attempted to grow heap from ${b.byteLength} bytes to ${size2} bytes, but got error: ${e}`
              );
            }
          };
          var _emscripten_resize_heap = (requestedSize) => {
            var oldSize = HEAPU8.length;
            requestedSize >>>= 0;
            assert(requestedSize > oldSize);
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
              err(
                `Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`
              );
              return false;
            }
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
              var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
              overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
              var newSize = Math.min(
                maxHeapSize,
                alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
              );
              var replacement = growMemory(newSize);
              if (replacement) {
                return true;
              }
            }
            err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
            return false;
          };
          var ENV = {};
          var getExecutableName = () => {
            return thisProgram || "./this.program";
          };
          var getEnvStrings = () => {
            if (!getEnvStrings.strings) {
              var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
              var env = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: lang,
                _: getExecutableName()
              };
              for (var x in ENV) {
                if (ENV[x] === void 0) delete env[x];
                else env[x] = ENV[x];
              }
              var strings = [];
              for (var x in env) {
                strings.push(`${x}=${env[x]}`);
              }
              getEnvStrings.strings = strings;
            }
            return getEnvStrings.strings;
          };
          var stringToAscii = (str, buffer) => {
            for (var i = 0; i < str.length; ++i) {
              assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
              HEAP8[buffer++] = str.charCodeAt(i);
            }
            HEAP8[buffer] = 0;
          };
          var _environ_get = (__environ, environ_buf) => {
            var bufSize = 0;
            getEnvStrings().forEach((string, i) => {
              var ptr = environ_buf + bufSize;
              HEAPU32[__environ + i * 4 >> 2] = ptr;
              stringToAscii(string, ptr);
              bufSize += string.length + 1;
            });
            return 0;
          };
          var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
            var strings = getEnvStrings();
            HEAPU32[penviron_count >> 2] = strings.length;
            var bufSize = 0;
            strings.forEach((string) => bufSize += string.length + 1);
            HEAPU32[penviron_buf_size >> 2] = bufSize;
            return 0;
          };
          function _fd_close(fd) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              FS.close(stream);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          }
          var doReadv = (stream, iov, iovcnt, offset2) => {
            var ret = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >> 2];
              var len = HEAPU32[iov + 4 >> 2];
              iov += 8;
              var curr = FS.read(stream, HEAP8, ptr, len, offset2);
              if (curr < 0) return -1;
              ret += curr;
              if (curr < len) break;
            }
            return ret;
          };
          function _fd_read(fd, iov, iovcnt, pnum) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              var num = doReadv(stream, iov, iovcnt);
              HEAPU32[pnum >> 2] = num;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          }
          function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
            var offset2 = convertI32PairToI53Checked(offset_low, offset_high);
            try {
              if (isNaN(offset2)) return 61;
              var stream = SYSCALLS.getStreamFromFD(fd);
              FS.llseek(stream, offset2, whence);
              tempI64 = [
                stream.position >>> 0,
                (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
              ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
              if (stream.getdents && offset2 === 0 && whence === 0) stream.getdents = null;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          }
          function _fd_sync(fd) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              if (stream.stream_ops?.fsync) {
                return stream.stream_ops.fsync(stream);
              }
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          }
          var doWritev = (stream, iov, iovcnt, offset2) => {
            var ret = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >> 2];
              var len = HEAPU32[iov + 4 >> 2];
              iov += 8;
              var curr = FS.write(stream, HEAP8, ptr, len, offset2);
              if (curr < 0) return -1;
              ret += curr;
              if (curr < len) {
                break;
              }
            }
            return ret;
          };
          function _fd_write(fd, iov, iovcnt, pnum) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              var num = doWritev(stream, iov, iovcnt);
              HEAPU32[pnum >> 2] = num;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          }
          var wasmTableMirror = [];
          var wasmTable;
          var getWasmTableEntry = (funcPtr) => {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
              if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
              wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
            }
            assert(
              wasmTable.get(funcPtr) == func,
              "JavaScript-side Wasm function table mirror is out of date!"
            );
            return func;
          };
          var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
          var UTF16ToString = (ptr, maxBytesToRead) => {
            assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
            var endPtr = ptr;
            var idx = endPtr >> 1;
            var maxIdx = idx + maxBytesToRead / 2;
            while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
            endPtr = idx << 1;
            if (endPtr - ptr > 32 && UTF16Decoder)
              return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
            var str = "";
            for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
              var codeUnit = HEAP16[ptr + i * 2 >> 1];
              if (codeUnit == 0) break;
              str += String.fromCharCode(codeUnit);
            }
            return str;
          };
          var uleb128Encode = (n, target) => {
            assert(n < 16384);
            if (n < 128) {
              target.push(n);
            } else {
              target.push(n % 128 | 128, n >> 7);
            }
          };
          var sigToWasmTypes = (sig) => {
            assert(
              !sig.includes("j"),
              "i64 not permitted in function signatures when WASM_BIGINT is disabled"
            );
            var typeNames = {
              i: "i32",
              j: "i64",
              f: "f32",
              d: "f64",
              e: "externref",
              p: "i32"
            };
            var type = {
              parameters: [],
              results: sig[0] == "v" ? [] : [typeNames[sig[0]]]
            };
            for (var i = 1; i < sig.length; ++i) {
              assert(sig[i] in typeNames, "invalid signature char: " + sig[i]);
              type.parameters.push(typeNames[sig[i]]);
            }
            return type;
          };
          var generateFuncType = (sig, target) => {
            var sigRet = sig.slice(0, 1);
            var sigParam = sig.slice(1);
            var typeCodes = {
              i: 127,
              // i32
              p: 127,
              // i32
              j: 126,
              // i64
              f: 125,
              // f32
              d: 124,
              // f64
              e: 111
              // externref
            };
            target.push(
              96
              /* form: func */
            );
            uleb128Encode(sigParam.length, target);
            for (var i = 0; i < sigParam.length; ++i) {
              assert(sigParam[i] in typeCodes, "invalid signature char: " + sigParam[i]);
              target.push(typeCodes[sigParam[i]]);
            }
            if (sigRet == "v") {
              target.push(0);
            } else {
              target.push(1, typeCodes[sigRet]);
            }
          };
          var convertJsFunctionToWasm = (func, sig) => {
            assert(
              !sig.includes("j"),
              "i64 not permitted in function signatures when WASM_BIGINT is disabled"
            );
            if (typeof WebAssembly.Function == "function") {
              return new WebAssembly.Function(sigToWasmTypes(sig), func);
            }
            var typeSectionBody = [
              1
              // count: 1
            ];
            generateFuncType(sig, typeSectionBody);
            var bytes = [
              0,
              97,
              115,
              109,
              // magic ("\0asm")
              1,
              0,
              0,
              0,
              // version: 1
              1
              // Type section code
            ];
            uleb128Encode(typeSectionBody.length, bytes);
            bytes.push(...typeSectionBody);
            bytes.push(
              2,
              7,
              // import section
              // (import "e" "f" (func 0 (type 0)))
              1,
              1,
              101,
              1,
              102,
              0,
              0,
              7,
              5,
              // export section
              // (export "f" (func 0 (type 0)))
              1,
              1,
              102,
              0,
              0
            );
            var module = new WebAssembly.Module(new Uint8Array(bytes));
            var instance = new WebAssembly.Instance(module, { e: { f: func } });
            var wrappedFunc = instance.exports["f"];
            return wrappedFunc;
          };
          var updateTableMap = (offset2, count) => {
            if (functionsInTableMap) {
              for (var i = offset2; i < offset2 + count; i++) {
                var item = getWasmTableEntry(i);
                if (item) {
                  functionsInTableMap.set(item, i);
                }
              }
            }
          };
          var functionsInTableMap;
          var getFunctionAddress = (func) => {
            if (!functionsInTableMap) {
              functionsInTableMap = /* @__PURE__ */ new WeakMap();
              updateTableMap(0, wasmTable.length);
            }
            return functionsInTableMap.get(func) || 0;
          };
          var freeTableIndexes = [];
          var getEmptyTableSlot = () => {
            if (freeTableIndexes.length) {
              return freeTableIndexes.pop();
            }
            try {
              wasmTable.grow(1);
            } catch (err2) {
              if (!(err2 instanceof RangeError)) {
                throw err2;
              }
              throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
            }
            return wasmTable.length - 1;
          };
          var setWasmTableEntry = (idx, func) => {
            wasmTable.set(idx, func);
            wasmTableMirror[idx] = wasmTable.get(idx);
          };
          var addFunction = (func, sig) => {
            assert(typeof func != "undefined");
            var rtn = getFunctionAddress(func);
            if (rtn) {
              return rtn;
            }
            var ret = getEmptyTableSlot();
            try {
              setWasmTableEntry(ret, func);
            } catch (err2) {
              if (!(err2 instanceof TypeError)) {
                throw err2;
              }
              assert(typeof sig != "undefined", "Missing signature argument to addFunction: " + func);
              var wrapped = convertJsFunctionToWasm(func, sig);
              setWasmTableEntry(ret, wrapped);
            }
            functionsInTableMap.set(func, ret);
            return ret;
          };
          var getCFunc = (ident) => {
            var func = Module2["_" + ident];
            assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
            return func;
          };
          var writeArrayToMemory = (array, buffer) => {
            assert(
              array.length >= 0,
              "writeArrayToMemory array must have a length (should be an array or typed array)"
            );
            HEAP8.set(array, buffer);
          };
          var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
          var stringToUTF8OnStack = (str) => {
            var size2 = lengthBytesUTF8(str) + 1;
            var ret = stackAlloc(size2);
            stringToUTF8(str, ret, size2);
            return ret;
          };
          var ccall = (ident, returnType, argTypes, args, opts) => {
            var toC = {
              string: (str) => {
                var ret2 = 0;
                if (str !== null && str !== void 0 && str !== 0) {
                  ret2 = stringToUTF8OnStack(str);
                }
                return ret2;
              },
              array: (arr) => {
                var ret2 = stackAlloc(arr.length);
                writeArrayToMemory(arr, ret2);
                return ret2;
              }
            };
            function convertReturnValue(ret2) {
              if (returnType === "string") {
                return UTF8ToString(ret2);
              }
              if (returnType === "boolean") return Boolean(ret2);
              return ret2;
            }
            var func = getCFunc(ident);
            var cArgs = [];
            var stack = 0;
            assert(returnType !== "array", 'Return type should not be "array".');
            if (args) {
              for (var i = 0; i < args.length; i++) {
                var converter = toC[argTypes[i]];
                if (converter) {
                  if (stack === 0) stack = stackSave();
                  cArgs[i] = converter(args[i]);
                } else {
                  cArgs[i] = args[i];
                }
              }
            }
            var ret = func(...cArgs);
            function onDone(ret2) {
              if (stack !== 0) stackRestore(stack);
              return convertReturnValue(ret2);
            }
            ret = onDone(ret);
            return ret;
          };
          var cwrap = (ident, returnType, argTypes, opts) => {
            return (...args) => ccall(ident, returnType, argTypes, args);
          };
          var removeFunction = (index) => {
            functionsInTableMap.delete(getWasmTableEntry(index));
            setWasmTableEntry(index, null);
            freeTableIndexes.push(index);
          };
          var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
            assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
            assert(
              typeof maxBytesToWrite == "number",
              "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
            );
            maxBytesToWrite ??= 2147483647;
            if (maxBytesToWrite < 2) return 0;
            maxBytesToWrite -= 2;
            var startPtr = outPtr;
            var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
            for (var i = 0; i < numCharsToWrite; ++i) {
              var codeUnit = str.charCodeAt(i);
              HEAP16[outPtr >> 1] = codeUnit;
              outPtr += 2;
            }
            HEAP16[outPtr >> 1] = 0;
            return outPtr - startPtr;
          };
          FS.createPreloadedFile = FS_createPreloadedFile;
          FS.staticInit();
          function checkIncomingModuleAPI() {
            ignoredModuleProp("fetchSettings");
          }
          var wasmImports = {
            /** @export */
            __assert_fail: ___assert_fail,
            /** @export */
            __syscall_fcntl64: ___syscall_fcntl64,
            /** @export */
            __syscall_fstat64: ___syscall_fstat64,
            /** @export */
            __syscall_ftruncate64: ___syscall_ftruncate64,
            /** @export */
            __syscall_getdents64: ___syscall_getdents64,
            /** @export */
            __syscall_ioctl: ___syscall_ioctl,
            /** @export */
            __syscall_lstat64: ___syscall_lstat64,
            /** @export */
            __syscall_newfstatat: ___syscall_newfstatat,
            /** @export */
            __syscall_openat: ___syscall_openat,
            /** @export */
            __syscall_rmdir: ___syscall_rmdir,
            /** @export */
            __syscall_stat64: ___syscall_stat64,
            /** @export */
            __syscall_unlinkat: ___syscall_unlinkat,
            /** @export */
            _abort_js: __abort_js,
            /** @export */
            _emscripten_memcpy_js: __emscripten_memcpy_js,
            /** @export */
            _emscripten_throw_longjmp: __emscripten_throw_longjmp,
            /** @export */
            _gmtime_js: __gmtime_js,
            /** @export */
            _localtime_js: __localtime_js,
            /** @export */
            _tzset_js: __tzset_js,
            /** @export */
            emscripten_date_now: _emscripten_date_now,
            /** @export */
            emscripten_resize_heap: _emscripten_resize_heap,
            /** @export */
            environ_get: _environ_get,
            /** @export */
            environ_sizes_get: _environ_sizes_get,
            /** @export */
            fd_close: _fd_close,
            /** @export */
            fd_read: _fd_read,
            /** @export */
            fd_seek: _fd_seek,
            /** @export */
            fd_sync: _fd_sync,
            /** @export */
            fd_write: _fd_write,
            /** @export */
            invoke_ii,
            /** @export */
            invoke_iii,
            /** @export */
            invoke_iiii,
            /** @export */
            invoke_iiiii,
            /** @export */
            invoke_v,
            /** @export */
            invoke_vii,
            /** @export */
            invoke_viii,
            /** @export */
            invoke_viiii,
            /** @export */
            invoke_viiiiiiiii
          };
          var wasmExports = createWasm();
          Module2["_PDFiumExt_Init"] = createExportWrapper("PDFiumExt_Init", 0);
          Module2["_FPDF_InitLibraryWithConfig"] = createExportWrapper(
            "FPDF_InitLibraryWithConfig",
            1
          );
          Module2["_PDFiumExt_OpenFileWriter"] = createExportWrapper(
            "PDFiumExt_OpenFileWriter",
            0
          );
          Module2["_PDFiumExt_GetFileWriterSize"] = createExportWrapper("PDFiumExt_GetFileWriterSize", 1);
          Module2["_PDFiumExt_GetFileWriterData"] = createExportWrapper("PDFiumExt_GetFileWriterData", 3);
          Module2["_PDFiumExt_CloseFileWriter"] = createExportWrapper(
            "PDFiumExt_CloseFileWriter",
            1
          );
          Module2["_PDFiumExt_SaveAsCopy"] = createExportWrapper(
            "PDFiumExt_SaveAsCopy",
            2
          );
          Module2["_FPDF_SaveAsCopy"] = createExportWrapper("FPDF_SaveAsCopy", 3);
          Module2["_PDFiumExt_OpenFormFillInfo"] = createExportWrapper(
            "PDFiumExt_OpenFormFillInfo",
            0
          );
          Module2["_PDFiumExt_CloseFormFillInfo"] = createExportWrapper("PDFiumExt_CloseFormFillInfo", 1);
          Module2["_PDFiumExt_InitFormFillEnvironment"] = createExportWrapper("PDFiumExt_InitFormFillEnvironment", 2);
          Module2["_FPDFDOC_InitFormFillEnvironment"] = createExportWrapper("FPDFDOC_InitFormFillEnvironment", 2);
          Module2["_PDFiumExt_ExitFormFillEnvironment"] = createExportWrapper("PDFiumExt_ExitFormFillEnvironment", 1);
          Module2["_FPDFDOC_ExitFormFillEnvironment"] = createExportWrapper("FPDFDOC_ExitFormFillEnvironment", 1);
          Module2["_EPDFNamedDest_SetDest"] = createExportWrapper(
            "EPDFNamedDest_SetDest",
            3
          );
          Module2["_EPDFNamedDest_Remove"] = createExportWrapper(
            "EPDFNamedDest_Remove",
            2
          );
          Module2["_EPDFDest_CreateView"] = createExportWrapper(
            "EPDFDest_CreateView",
            4
          );
          Module2["_EPDFDest_CreateXYZ"] = createExportWrapper(
            "EPDFDest_CreateXYZ",
            7
          );
          Module2["_EPDFDest_CreateRemoteView"] = createExportWrapper(
            "EPDFDest_CreateRemoteView",
            5
          );
          Module2["_EPDFDest_CreateRemoteXYZ"] = createExportWrapper(
            "EPDFDest_CreateRemoteXYZ",
            8
          );
          Module2["_EPDFAction_CreateGoTo"] = createExportWrapper(
            "EPDFAction_CreateGoTo",
            2
          );
          Module2["_EPDFAction_CreateGoToNamed"] = createExportWrapper(
            "EPDFAction_CreateGoToNamed",
            2
          );
          Module2["_EPDFAction_CreateLaunch"] = createExportWrapper(
            "EPDFAction_CreateLaunch",
            2
          );
          Module2["_EPDFAction_CreateRemoteGoToByName"] = createExportWrapper("EPDFAction_CreateRemoteGoToByName", 3);
          Module2["_EPDFAction_CreateRemoteGoToDest"] = createExportWrapper("EPDFAction_CreateRemoteGoToDest", 3);
          Module2["_EPDFAction_CreateURI"] = createExportWrapper(
            "EPDFAction_CreateURI",
            2
          );
          Module2["_EPDFBookmark_Create"] = createExportWrapper(
            "EPDFBookmark_Create",
            2
          );
          Module2["_EPDFBookmark_Delete"] = createExportWrapper(
            "EPDFBookmark_Delete",
            2
          );
          Module2["_EPDFBookmark_AppendChild"] = createExportWrapper(
            "EPDFBookmark_AppendChild",
            3
          );
          Module2["_EPDFBookmark_InsertAfter"] = createExportWrapper(
            "EPDFBookmark_InsertAfter",
            4
          );
          Module2["_EPDFBookmark_Clear"] = createExportWrapper(
            "EPDFBookmark_Clear",
            1
          );
          Module2["_EPDFBookmark_SetTitle"] = createExportWrapper(
            "EPDFBookmark_SetTitle",
            2
          );
          Module2["_EPDFBookmark_SetDest"] = createExportWrapper(
            "EPDFBookmark_SetDest",
            3
          );
          Module2["_EPDFBookmark_SetAction"] = createExportWrapper(
            "EPDFBookmark_SetAction",
            3
          );
          Module2["_EPDFBookmark_ClearTarget"] = createExportWrapper(
            "EPDFBookmark_ClearTarget",
            1
          );
          Module2["_EPDF_PNG_EncodeRGBA"] = createExportWrapper(
            "EPDF_PNG_EncodeRGBA",
            6
          );
          Module2["_FPDFAnnot_IsSupportedSubtype"] = createExportWrapper("FPDFAnnot_IsSupportedSubtype", 1);
          Module2["_FPDFPage_CreateAnnot"] = createExportWrapper(
            "FPDFPage_CreateAnnot",
            2
          );
          Module2["_FPDFPage_GetAnnotCount"] = createExportWrapper(
            "FPDFPage_GetAnnotCount",
            1
          );
          Module2["_FPDFPage_GetAnnot"] = createExportWrapper(
            "FPDFPage_GetAnnot",
            2
          );
          Module2["_FPDFPage_GetAnnotIndex"] = createExportWrapper(
            "FPDFPage_GetAnnotIndex",
            2
          );
          Module2["_FPDFPage_CloseAnnot"] = createExportWrapper(
            "FPDFPage_CloseAnnot",
            1
          );
          Module2["_FPDFPage_RemoveAnnot"] = createExportWrapper(
            "FPDFPage_RemoveAnnot",
            2
          );
          Module2["_FPDFAnnot_GetSubtype"] = createExportWrapper(
            "FPDFAnnot_GetSubtype",
            1
          );
          Module2["_FPDFAnnot_IsObjectSupportedSubtype"] = createExportWrapper("FPDFAnnot_IsObjectSupportedSubtype", 1);
          Module2["_FPDFAnnot_UpdateObject"] = createExportWrapper(
            "FPDFAnnot_UpdateObject",
            2
          );
          Module2["_FPDFAnnot_AddInkStroke"] = createExportWrapper(
            "FPDFAnnot_AddInkStroke",
            3
          );
          Module2["_FPDFAnnot_RemoveInkList"] = createExportWrapper(
            "FPDFAnnot_RemoveInkList",
            1
          );
          Module2["_FPDFAnnot_AppendObject"] = createExportWrapper(
            "FPDFAnnot_AppendObject",
            2
          );
          Module2["_FPDFAnnot_GetObjectCount"] = createExportWrapper(
            "FPDFAnnot_GetObjectCount",
            1
          );
          Module2["_FPDFAnnot_GetObject"] = createExportWrapper(
            "FPDFAnnot_GetObject",
            2
          );
          Module2["_FPDFAnnot_RemoveObject"] = createExportWrapper(
            "FPDFAnnot_RemoveObject",
            2
          );
          Module2["_FPDFAnnot_SetColor"] = createExportWrapper(
            "FPDFAnnot_SetColor",
            6
          );
          Module2["_FPDFAnnot_GetColor"] = createExportWrapper(
            "FPDFAnnot_GetColor",
            6
          );
          Module2["_FPDFAnnot_HasAttachmentPoints"] = createExportWrapper("FPDFAnnot_HasAttachmentPoints", 1);
          Module2["_FPDFAnnot_SetAttachmentPoints"] = createExportWrapper("FPDFAnnot_SetAttachmentPoints", 3);
          Module2["_FPDFAnnot_AppendAttachmentPoints"] = createExportWrapper("FPDFAnnot_AppendAttachmentPoints", 2);
          Module2["_FPDFAnnot_CountAttachmentPoints"] = createExportWrapper("FPDFAnnot_CountAttachmentPoints", 1);
          Module2["_FPDFAnnot_GetAttachmentPoints"] = createExportWrapper("FPDFAnnot_GetAttachmentPoints", 3);
          Module2["_FPDFAnnot_SetRect"] = createExportWrapper(
            "FPDFAnnot_SetRect",
            2
          );
          Module2["_FPDFAnnot_GetRect"] = createExportWrapper(
            "FPDFAnnot_GetRect",
            2
          );
          Module2["_FPDFAnnot_GetVertices"] = createExportWrapper(
            "FPDFAnnot_GetVertices",
            3
          );
          Module2["_FPDFAnnot_GetInkListCount"] = createExportWrapper(
            "FPDFAnnot_GetInkListCount",
            1
          );
          Module2["_FPDFAnnot_GetInkListPath"] = createExportWrapper(
            "FPDFAnnot_GetInkListPath",
            4
          );
          Module2["_FPDFAnnot_GetLine"] = createExportWrapper(
            "FPDFAnnot_GetLine",
            3
          );
          Module2["_FPDFAnnot_SetBorder"] = createExportWrapper(
            "FPDFAnnot_SetBorder",
            4
          );
          Module2["_FPDFAnnot_GetBorder"] = createExportWrapper(
            "FPDFAnnot_GetBorder",
            4
          );
          Module2["_FPDFAnnot_HasKey"] = createExportWrapper(
            "FPDFAnnot_HasKey",
            2
          );
          Module2["_FPDFAnnot_GetValueType"] = createExportWrapper(
            "FPDFAnnot_GetValueType",
            2
          );
          Module2["_FPDFAnnot_SetStringValue"] = createExportWrapper(
            "FPDFAnnot_SetStringValue",
            3
          );
          Module2["_FPDFAnnot_GetStringValue"] = createExportWrapper(
            "FPDFAnnot_GetStringValue",
            4
          );
          Module2["_FPDFAnnot_GetNumberValue"] = createExportWrapper(
            "FPDFAnnot_GetNumberValue",
            3
          );
          Module2["_FPDFAnnot_SetAP"] = createExportWrapper("FPDFAnnot_SetAP", 3);
          Module2["_FPDFAnnot_GetAP"] = createExportWrapper("FPDFAnnot_GetAP", 4);
          Module2["_FPDFAnnot_GetLinkedAnnot"] = createExportWrapper(
            "FPDFAnnot_GetLinkedAnnot",
            2
          );
          Module2["_FPDFAnnot_GetFlags"] = createExportWrapper(
            "FPDFAnnot_GetFlags",
            1
          );
          Module2["_FPDFAnnot_SetFlags"] = createExportWrapper(
            "FPDFAnnot_SetFlags",
            2
          );
          Module2["_FPDFAnnot_GetFormFieldFlags"] = createExportWrapper("FPDFAnnot_GetFormFieldFlags", 2);
          Module2["_FPDFAnnot_SetFormFieldFlags"] = createExportWrapper("FPDFAnnot_SetFormFieldFlags", 3);
          Module2["_FPDFAnnot_GetFormFieldAtPoint"] = createExportWrapper("FPDFAnnot_GetFormFieldAtPoint", 3);
          Module2["_FPDFAnnot_GetFormFieldName"] = createExportWrapper(
            "FPDFAnnot_GetFormFieldName",
            4
          );
          Module2["_FPDFAnnot_GetFormFieldType"] = createExportWrapper(
            "FPDFAnnot_GetFormFieldType",
            2
          );
          Module2["_FPDFAnnot_GetFormAdditionalActionJavaScript"] = createExportWrapper("FPDFAnnot_GetFormAdditionalActionJavaScript", 5);
          Module2["_FPDFAnnot_GetFormFieldAlternateName"] = createExportWrapper("FPDFAnnot_GetFormFieldAlternateName", 4);
          Module2["_FPDFAnnot_GetFormFieldValue"] = createExportWrapper("FPDFAnnot_GetFormFieldValue", 4);
          Module2["_FPDFAnnot_GetOptionCount"] = createExportWrapper(
            "FPDFAnnot_GetOptionCount",
            2
          );
          Module2["_FPDFAnnot_GetOptionLabel"] = createExportWrapper(
            "FPDFAnnot_GetOptionLabel",
            5
          );
          Module2["_FPDFAnnot_IsOptionSelected"] = createExportWrapper(
            "FPDFAnnot_IsOptionSelected",
            3
          );
          Module2["_FPDFAnnot_GetFontSize"] = createExportWrapper(
            "FPDFAnnot_GetFontSize",
            3
          );
          Module2["_FPDFAnnot_SetFontColor"] = createExportWrapper(
            "FPDFAnnot_SetFontColor",
            5
          );
          Module2["_FPDFAnnot_GetFontColor"] = createExportWrapper(
            "FPDFAnnot_GetFontColor",
            5
          );
          Module2["_FPDFAnnot_IsChecked"] = createExportWrapper(
            "FPDFAnnot_IsChecked",
            2
          );
          Module2["_FPDFAnnot_SetFocusableSubtypes"] = createExportWrapper("FPDFAnnot_SetFocusableSubtypes", 3);
          Module2["_FPDFAnnot_GetFocusableSubtypesCount"] = createExportWrapper("FPDFAnnot_GetFocusableSubtypesCount", 1);
          Module2["_FPDFAnnot_GetFocusableSubtypes"] = createExportWrapper("FPDFAnnot_GetFocusableSubtypes", 3);
          Module2["_FPDFAnnot_GetLink"] = createExportWrapper(
            "FPDFAnnot_GetLink",
            1
          );
          Module2["_FPDFAnnot_GetFormControlCount"] = createExportWrapper("FPDFAnnot_GetFormControlCount", 2);
          Module2["_FPDFAnnot_GetFormControlIndex"] = createExportWrapper("FPDFAnnot_GetFormControlIndex", 2);
          Module2["_FPDFAnnot_GetFormFieldExportValue"] = createExportWrapper("FPDFAnnot_GetFormFieldExportValue", 4);
          Module2["_FPDFAnnot_SetURI"] = createExportWrapper(
            "FPDFAnnot_SetURI",
            2
          );
          Module2["_FPDFAnnot_GetFileAttachment"] = createExportWrapper("FPDFAnnot_GetFileAttachment", 1);
          Module2["_FPDFAnnot_AddFileAttachment"] = createExportWrapper("FPDFAnnot_AddFileAttachment", 2);
          Module2["_EPDFAnnot_SetColor"] = createExportWrapper(
            "EPDFAnnot_SetColor",
            5
          );
          Module2["_EPDFAnnot_GetColor"] = createExportWrapper(
            "EPDFAnnot_GetColor",
            5
          );
          Module2["_EPDFAnnot_ClearColor"] = createExportWrapper(
            "EPDFAnnot_ClearColor",
            2
          );
          Module2["_EPDFAnnot_SetOpacity"] = createExportWrapper(
            "EPDFAnnot_SetOpacity",
            2
          );
          Module2["_EPDFAnnot_GetOpacity"] = createExportWrapper(
            "EPDFAnnot_GetOpacity",
            2
          );
          Module2["_EPDFAnnot_GetBorderEffect"] = createExportWrapper(
            "EPDFAnnot_GetBorderEffect",
            2
          );
          Module2["_EPDFAnnot_GetRectangleDifferences"] = createExportWrapper("EPDFAnnot_GetRectangleDifferences", 5);
          Module2["_EPDFAnnot_GetBorderDashPatternCount"] = createExportWrapper("EPDFAnnot_GetBorderDashPatternCount", 1);
          Module2["_EPDFAnnot_GetBorderDashPattern"] = createExportWrapper("EPDFAnnot_GetBorderDashPattern", 3);
          Module2["_EPDFAnnot_SetBorderDashPattern"] = createExportWrapper("EPDFAnnot_SetBorderDashPattern", 3);
          Module2["_EPDFAnnot_GetBorderStyle"] = createExportWrapper(
            "EPDFAnnot_GetBorderStyle",
            2
          );
          Module2["_EPDFAnnot_SetBorderStyle"] = createExportWrapper(
            "EPDFAnnot_SetBorderStyle",
            3
          );
          Module2["_EPDFAnnot_GenerateAppearance"] = createExportWrapper("EPDFAnnot_GenerateAppearance", 1);
          Module2["_EPDFAnnot_GenerateAppearanceWithBlend"] = createExportWrapper("EPDFAnnot_GenerateAppearanceWithBlend", 2);
          Module2["_EPDFAnnot_GetBlendMode"] = createExportWrapper(
            "EPDFAnnot_GetBlendMode",
            1
          );
          Module2["_EPDFAnnot_SetIntent"] = createExportWrapper(
            "EPDFAnnot_SetIntent",
            2
          );
          Module2["_EPDFAnnot_GetIntent"] = createExportWrapper(
            "EPDFAnnot_GetIntent",
            3
          );
          Module2["_EPDFAnnot_GetRichContent"] = createExportWrapper(
            "EPDFAnnot_GetRichContent",
            3
          );
          Module2["_EPDFAnnot_SetLineEndings"] = createExportWrapper(
            "EPDFAnnot_SetLineEndings",
            3
          );
          Module2["_EPDFAnnot_GetLineEndings"] = createExportWrapper(
            "EPDFAnnot_GetLineEndings",
            3
          );
          Module2["_EPDFAnnot_SetVertices"] = createExportWrapper(
            "EPDFAnnot_SetVertices",
            3
          );
          Module2["_EPDFAnnot_SetLine"] = createExportWrapper(
            "EPDFAnnot_SetLine",
            3
          );
          Module2["_EPDFAnnot_SetDefaultAppearance"] = createExportWrapper("EPDFAnnot_SetDefaultAppearance", 6);
          Module2["_EPDFAnnot_GetDefaultAppearance"] = createExportWrapper("EPDFAnnot_GetDefaultAppearance", 6);
          Module2["_EPDFAnnot_SetTextAlignment"] = createExportWrapper(
            "EPDFAnnot_SetTextAlignment",
            2
          );
          Module2["_EPDFAnnot_GetTextAlignment"] = createExportWrapper(
            "EPDFAnnot_GetTextAlignment",
            1
          );
          Module2["_EPDFAnnot_SetVerticalAlignment"] = createExportWrapper("EPDFAnnot_SetVerticalAlignment", 2);
          Module2["_EPDFAnnot_GetVerticalAlignment"] = createExportWrapper("EPDFAnnot_GetVerticalAlignment", 1);
          Module2["_EPDFPage_GetAnnotByName"] = createExportWrapper(
            "EPDFPage_GetAnnotByName",
            2
          );
          Module2["_EPDFPage_RemoveAnnotByName"] = createExportWrapper(
            "EPDFPage_RemoveAnnotByName",
            2
          );
          Module2["_EPDFAnnot_SetLinkedAnnot"] = createExportWrapper(
            "EPDFAnnot_SetLinkedAnnot",
            3
          );
          Module2["_EPDFPage_GetAnnotCountRaw"] = createExportWrapper(
            "EPDFPage_GetAnnotCountRaw",
            2
          );
          Module2["_EPDFPage_GetAnnotRaw"] = createExportWrapper(
            "EPDFPage_GetAnnotRaw",
            3
          );
          Module2["_EPDFPage_RemoveAnnotRaw"] = createExportWrapper(
            "EPDFPage_RemoveAnnotRaw",
            3
          );
          Module2["_EPDFAnnot_SetIcon"] = createExportWrapper(
            "EPDFAnnot_SetIcon",
            2
          );
          Module2["_EPDFAnnot_GetIcon"] = createExportWrapper(
            "EPDFAnnot_GetIcon",
            1
          );
          Module2["_EPDFAnnot_UpdateAppearanceToRect"] = createExportWrapper("EPDFAnnot_UpdateAppearanceToRect", 2);
          Module2["_EPDFPage_CreateAnnot"] = createExportWrapper(
            "EPDFPage_CreateAnnot",
            2
          );
          Module2["_FPDFDoc_GetAttachmentCount"] = createExportWrapper(
            "FPDFDoc_GetAttachmentCount",
            1
          );
          Module2["_FPDFDoc_AddAttachment"] = createExportWrapper(
            "FPDFDoc_AddAttachment",
            2
          );
          Module2["_FPDFDoc_GetAttachment"] = createExportWrapper(
            "FPDFDoc_GetAttachment",
            2
          );
          Module2["_FPDFDoc_DeleteAttachment"] = createExportWrapper(
            "FPDFDoc_DeleteAttachment",
            2
          );
          Module2["_FPDFAttachment_GetName"] = createExportWrapper(
            "FPDFAttachment_GetName",
            3
          );
          Module2["_FPDFAttachment_HasKey"] = createExportWrapper(
            "FPDFAttachment_HasKey",
            2
          );
          Module2["_FPDFAttachment_GetValueType"] = createExportWrapper("FPDFAttachment_GetValueType", 2);
          Module2["_FPDFAttachment_SetStringValue"] = createExportWrapper("FPDFAttachment_SetStringValue", 3);
          Module2["_FPDFAttachment_GetStringValue"] = createExportWrapper("FPDFAttachment_GetStringValue", 4);
          Module2["_FPDFAttachment_SetFile"] = createExportWrapper(
            "FPDFAttachment_SetFile",
            4
          );
          Module2["_FPDFAttachment_GetFile"] = createExportWrapper(
            "FPDFAttachment_GetFile",
            4
          );
          Module2["_FPDFAttachment_GetSubtype"] = createExportWrapper(
            "FPDFAttachment_GetSubtype",
            3
          );
          Module2["_EPDFAttachment_SetSubtype"] = createExportWrapper(
            "EPDFAttachment_SetSubtype",
            2
          );
          Module2["_EPDFAttachment_SetDescription"] = createExportWrapper("EPDFAttachment_SetDescription", 2);
          Module2["_EPDFAttachment_GetDescription"] = createExportWrapper("EPDFAttachment_GetDescription", 3);
          Module2["_EPDFAttachment_GetIntegerValue"] = createExportWrapper("EPDFAttachment_GetIntegerValue", 3);
          Module2["_FPDFCatalog_IsTagged"] = createExportWrapper(
            "FPDFCatalog_IsTagged",
            1
          );
          Module2["_FPDFCatalog_SetLanguage"] = createExportWrapper(
            "FPDFCatalog_SetLanguage",
            2
          );
          Module2["_EPDFCatalog_GetLanguage"] = createExportWrapper(
            "EPDFCatalog_GetLanguage",
            3
          );
          Module2["_FPDFAvail_Create"] = createExportWrapper(
            "FPDFAvail_Create",
            2
          );
          Module2["_FPDFAvail_Destroy"] = createExportWrapper(
            "FPDFAvail_Destroy",
            1
          );
          Module2["_FPDFAvail_IsDocAvail"] = createExportWrapper(
            "FPDFAvail_IsDocAvail",
            2
          );
          Module2["_FPDFAvail_GetDocument"] = createExportWrapper(
            "FPDFAvail_GetDocument",
            2
          );
          Module2["_FPDFAvail_GetFirstPageNum"] = createExportWrapper(
            "FPDFAvail_GetFirstPageNum",
            1
          );
          Module2["_FPDFAvail_IsPageAvail"] = createExportWrapper(
            "FPDFAvail_IsPageAvail",
            3
          );
          Module2["_FPDFAvail_IsFormAvail"] = createExportWrapper(
            "FPDFAvail_IsFormAvail",
            2
          );
          Module2["_FPDFAvail_IsLinearized"] = createExportWrapper(
            "FPDFAvail_IsLinearized",
            1
          );
          Module2["_FPDFBookmark_GetFirstChild"] = createExportWrapper(
            "FPDFBookmark_GetFirstChild",
            2
          );
          Module2["_FPDFBookmark_GetNextSibling"] = createExportWrapper("FPDFBookmark_GetNextSibling", 2);
          Module2["_FPDFBookmark_GetTitle"] = createExportWrapper(
            "FPDFBookmark_GetTitle",
            3
          );
          Module2["_FPDFBookmark_GetCount"] = createExportWrapper(
            "FPDFBookmark_GetCount",
            1
          );
          Module2["_FPDFBookmark_Find"] = createExportWrapper(
            "FPDFBookmark_Find",
            2
          );
          Module2["_FPDFBookmark_GetDest"] = createExportWrapper(
            "FPDFBookmark_GetDest",
            2
          );
          Module2["_FPDFBookmark_GetAction"] = createExportWrapper(
            "FPDFBookmark_GetAction",
            1
          );
          Module2["_FPDFAction_GetType"] = createExportWrapper(
            "FPDFAction_GetType",
            1
          );
          Module2["_FPDFAction_GetDest"] = createExportWrapper(
            "FPDFAction_GetDest",
            2
          );
          Module2["_FPDFAction_GetFilePath"] = createExportWrapper(
            "FPDFAction_GetFilePath",
            3
          );
          Module2["_FPDFAction_GetURIPath"] = createExportWrapper(
            "FPDFAction_GetURIPath",
            4
          );
          Module2["_FPDFDest_GetDestPageIndex"] = createExportWrapper(
            "FPDFDest_GetDestPageIndex",
            2
          );
          Module2["_FPDFDest_GetView"] = createExportWrapper(
            "FPDFDest_GetView",
            3
          );
          Module2["_FPDFDest_GetLocationInPage"] = createExportWrapper(
            "FPDFDest_GetLocationInPage",
            7
          );
          Module2["_FPDFLink_GetLinkAtPoint"] = createExportWrapper(
            "FPDFLink_GetLinkAtPoint",
            3
          );
          Module2["_FPDFLink_GetLinkZOrderAtPoint"] = createExportWrapper("FPDFLink_GetLinkZOrderAtPoint", 3);
          Module2["_FPDFLink_GetDest"] = createExportWrapper(
            "FPDFLink_GetDest",
            2
          );
          Module2["_FPDFLink_GetAction"] = createExportWrapper(
            "FPDFLink_GetAction",
            1
          );
          Module2["_FPDFLink_Enumerate"] = createExportWrapper(
            "FPDFLink_Enumerate",
            3
          );
          Module2["_FPDFLink_GetAnnot"] = createExportWrapper(
            "FPDFLink_GetAnnot",
            2
          );
          Module2["_FPDFLink_GetAnnotRect"] = createExportWrapper(
            "FPDFLink_GetAnnotRect",
            2
          );
          Module2["_FPDFLink_CountQuadPoints"] = createExportWrapper(
            "FPDFLink_CountQuadPoints",
            1
          );
          Module2["_FPDFLink_GetQuadPoints"] = createExportWrapper(
            "FPDFLink_GetQuadPoints",
            3
          );
          Module2["_FPDF_GetPageAAction"] = createExportWrapper(
            "FPDF_GetPageAAction",
            2
          );
          Module2["_FPDF_GetFileIdentifier"] = createExportWrapper(
            "FPDF_GetFileIdentifier",
            4
          );
          Module2["_FPDF_GetMetaText"] = createExportWrapper(
            "FPDF_GetMetaText",
            4
          );
          Module2["_FPDF_GetPageLabel"] = createExportWrapper(
            "FPDF_GetPageLabel",
            4
          );
          Module2["_EPDF_SetMetaText"] = createExportWrapper(
            "EPDF_SetMetaText",
            3
          );
          Module2["_EPDF_HasMetaText"] = createExportWrapper(
            "EPDF_HasMetaText",
            2
          );
          Module2["_EPDF_GetMetaTrapped"] = createExportWrapper(
            "EPDF_GetMetaTrapped",
            1
          );
          Module2["_EPDF_SetMetaTrapped"] = createExportWrapper(
            "EPDF_SetMetaTrapped",
            2
          );
          Module2["_EPDF_GetMetaKeyCount"] = createExportWrapper(
            "EPDF_GetMetaKeyCount",
            2
          );
          Module2["_EPDF_GetMetaKeyName"] = createExportWrapper(
            "EPDF_GetMetaKeyName",
            5
          );
          Module2["_FPDFPageObj_NewImageObj"] = createExportWrapper(
            "FPDFPageObj_NewImageObj",
            1
          );
          Module2["_FPDFImageObj_LoadJpegFile"] = createExportWrapper(
            "FPDFImageObj_LoadJpegFile",
            4
          );
          Module2["_FPDFImageObj_LoadJpegFileInline"] = createExportWrapper("FPDFImageObj_LoadJpegFileInline", 4);
          Module2["_FPDFImageObj_SetMatrix"] = createExportWrapper(
            "FPDFImageObj_SetMatrix",
            7
          );
          Module2["_FPDFImageObj_SetBitmap"] = createExportWrapper(
            "FPDFImageObj_SetBitmap",
            4
          );
          Module2["_FPDFImageObj_GetBitmap"] = createExportWrapper(
            "FPDFImageObj_GetBitmap",
            1
          );
          Module2["_FPDFImageObj_GetRenderedBitmap"] = createExportWrapper("FPDFImageObj_GetRenderedBitmap", 3);
          Module2["_FPDFImageObj_GetImageDataDecoded"] = createExportWrapper("FPDFImageObj_GetImageDataDecoded", 3);
          Module2["_FPDFImageObj_GetImageDataRaw"] = createExportWrapper("FPDFImageObj_GetImageDataRaw", 3);
          Module2["_FPDFImageObj_GetImageFilterCount"] = createExportWrapper("FPDFImageObj_GetImageFilterCount", 1);
          Module2["_FPDFImageObj_GetImageFilter"] = createExportWrapper("FPDFImageObj_GetImageFilter", 4);
          Module2["_FPDFImageObj_GetImageMetadata"] = createExportWrapper("FPDFImageObj_GetImageMetadata", 3);
          Module2["_FPDFImageObj_GetImagePixelSize"] = createExportWrapper("FPDFImageObj_GetImagePixelSize", 3);
          Module2["_FPDFImageObj_GetIccProfileDataDecoded"] = createExportWrapper("FPDFImageObj_GetIccProfileDataDecoded", 5);
          Module2["_FPDF_CreateNewDocument"] = createExportWrapper(
            "FPDF_CreateNewDocument",
            0
          );
          Module2["_FPDFPage_Delete"] = createExportWrapper("FPDFPage_Delete", 2);
          Module2["_FPDF_MovePages"] = createExportWrapper("FPDF_MovePages", 4);
          Module2["_FPDFPage_New"] = createExportWrapper("FPDFPage_New", 4);
          Module2["_FPDFPage_GetRotation"] = createExportWrapper(
            "FPDFPage_GetRotation",
            1
          );
          Module2["_FPDFPage_InsertObject"] = createExportWrapper(
            "FPDFPage_InsertObject",
            2
          );
          Module2["_FPDFPage_InsertObjectAtIndex"] = createExportWrapper("FPDFPage_InsertObjectAtIndex", 3);
          Module2["_FPDFPage_RemoveObject"] = createExportWrapper(
            "FPDFPage_RemoveObject",
            2
          );
          Module2["_FPDFPage_CountObjects"] = createExportWrapper(
            "FPDFPage_CountObjects",
            1
          );
          Module2["_FPDFPage_GetObject"] = createExportWrapper(
            "FPDFPage_GetObject",
            2
          );
          Module2["_FPDFPage_HasTransparency"] = createExportWrapper(
            "FPDFPage_HasTransparency",
            1
          );
          Module2["_FPDFPageObj_Destroy"] = createExportWrapper(
            "FPDFPageObj_Destroy",
            1
          );
          Module2["_FPDFPageObj_GetMarkedContentID"] = createExportWrapper("FPDFPageObj_GetMarkedContentID", 1);
          Module2["_FPDFPageObj_CountMarks"] = createExportWrapper(
            "FPDFPageObj_CountMarks",
            1
          );
          Module2["_FPDFPageObj_GetMark"] = createExportWrapper(
            "FPDFPageObj_GetMark",
            2
          );
          Module2["_FPDFPageObj_AddMark"] = createExportWrapper(
            "FPDFPageObj_AddMark",
            2
          );
          Module2["_FPDFPageObj_RemoveMark"] = createExportWrapper(
            "FPDFPageObj_RemoveMark",
            2
          );
          Module2["_FPDFPageObjMark_GetName"] = createExportWrapper(
            "FPDFPageObjMark_GetName",
            4
          );
          Module2["_FPDFPageObjMark_CountParams"] = createExportWrapper("FPDFPageObjMark_CountParams", 1);
          Module2["_FPDFPageObjMark_GetParamKey"] = createExportWrapper("FPDFPageObjMark_GetParamKey", 5);
          Module2["_FPDFPageObjMark_GetParamValueType"] = createExportWrapper("FPDFPageObjMark_GetParamValueType", 2);
          Module2["_FPDFPageObjMark_GetParamIntValue"] = createExportWrapper("FPDFPageObjMark_GetParamIntValue", 3);
          Module2["_FPDFPageObjMark_GetParamStringValue"] = createExportWrapper("FPDFPageObjMark_GetParamStringValue", 5);
          Module2["_FPDFPageObjMark_GetParamBlobValue"] = createExportWrapper("FPDFPageObjMark_GetParamBlobValue", 5);
          Module2["_FPDFPageObj_HasTransparency"] = createExportWrapper("FPDFPageObj_HasTransparency", 1);
          Module2["_FPDFPageObjMark_SetIntParam"] = createExportWrapper("FPDFPageObjMark_SetIntParam", 5);
          Module2["_FPDFPageObjMark_SetStringParam"] = createExportWrapper("FPDFPageObjMark_SetStringParam", 5);
          Module2["_FPDFPageObjMark_SetBlobParam"] = createExportWrapper("FPDFPageObjMark_SetBlobParam", 6);
          Module2["_FPDFPageObjMark_RemoveParam"] = createExportWrapper("FPDFPageObjMark_RemoveParam", 3);
          Module2["_FPDFPageObj_GetType"] = createExportWrapper(
            "FPDFPageObj_GetType",
            1
          );
          Module2["_FPDFPageObj_GetIsActive"] = createExportWrapper(
            "FPDFPageObj_GetIsActive",
            2
          );
          Module2["_FPDFPageObj_SetIsActive"] = createExportWrapper(
            "FPDFPageObj_SetIsActive",
            2
          );
          Module2["_FPDFPage_GenerateContent"] = createExportWrapper(
            "FPDFPage_GenerateContent",
            1
          );
          Module2["_FPDFPageObj_Transform"] = createExportWrapper(
            "FPDFPageObj_Transform",
            7
          );
          Module2["_FPDFPageObj_TransformF"] = createExportWrapper(
            "FPDFPageObj_TransformF",
            2
          );
          Module2["_FPDFPageObj_GetMatrix"] = createExportWrapper(
            "FPDFPageObj_GetMatrix",
            2
          );
          Module2["_FPDFPageObj_SetMatrix"] = createExportWrapper(
            "FPDFPageObj_SetMatrix",
            2
          );
          Module2["_FPDFPageObj_SetBlendMode"] = createExportWrapper(
            "FPDFPageObj_SetBlendMode",
            2
          );
          Module2["_FPDFPage_TransformAnnots"] = createExportWrapper(
            "FPDFPage_TransformAnnots",
            7
          );
          Module2["_FPDFPage_SetRotation"] = createExportWrapper(
            "FPDFPage_SetRotation",
            2
          );
          Module2["_FPDFPageObj_SetFillColor"] = createExportWrapper(
            "FPDFPageObj_SetFillColor",
            5
          );
          Module2["_FPDFPageObj_GetFillColor"] = createExportWrapper(
            "FPDFPageObj_GetFillColor",
            5
          );
          Module2["_FPDFPageObj_GetBounds"] = createExportWrapper(
            "FPDFPageObj_GetBounds",
            5
          );
          Module2["_FPDFPageObj_GetRotatedBounds"] = createExportWrapper("FPDFPageObj_GetRotatedBounds", 2);
          Module2["_FPDFPageObj_SetStrokeColor"] = createExportWrapper(
            "FPDFPageObj_SetStrokeColor",
            5
          );
          Module2["_FPDFPageObj_GetStrokeColor"] = createExportWrapper(
            "FPDFPageObj_GetStrokeColor",
            5
          );
          Module2["_FPDFPageObj_SetStrokeWidth"] = createExportWrapper(
            "FPDFPageObj_SetStrokeWidth",
            2
          );
          Module2["_FPDFPageObj_GetStrokeWidth"] = createExportWrapper(
            "FPDFPageObj_GetStrokeWidth",
            2
          );
          Module2["_FPDFPageObj_GetLineJoin"] = createExportWrapper(
            "FPDFPageObj_GetLineJoin",
            1
          );
          Module2["_FPDFPageObj_SetLineJoin"] = createExportWrapper(
            "FPDFPageObj_SetLineJoin",
            2
          );
          Module2["_FPDFPageObj_GetLineCap"] = createExportWrapper(
            "FPDFPageObj_GetLineCap",
            1
          );
          Module2["_FPDFPageObj_SetLineCap"] = createExportWrapper(
            "FPDFPageObj_SetLineCap",
            2
          );
          Module2["_FPDFPageObj_GetDashPhase"] = createExportWrapper(
            "FPDFPageObj_GetDashPhase",
            2
          );
          Module2["_FPDFPageObj_SetDashPhase"] = createExportWrapper(
            "FPDFPageObj_SetDashPhase",
            2
          );
          Module2["_FPDFPageObj_GetDashCount"] = createExportWrapper(
            "FPDFPageObj_GetDashCount",
            1
          );
          Module2["_FPDFPageObj_GetDashArray"] = createExportWrapper(
            "FPDFPageObj_GetDashArray",
            3
          );
          Module2["_FPDFPageObj_SetDashArray"] = createExportWrapper(
            "FPDFPageObj_SetDashArray",
            4
          );
          Module2["_FPDFFormObj_CountObjects"] = createExportWrapper(
            "FPDFFormObj_CountObjects",
            1
          );
          Module2["_FPDFFormObj_GetObject"] = createExportWrapper(
            "FPDFFormObj_GetObject",
            2
          );
          Module2["_FPDFFormObj_RemoveObject"] = createExportWrapper(
            "FPDFFormObj_RemoveObject",
            2
          );
          Module2["_FPDFPageObj_CreateNewPath"] = createExportWrapper(
            "FPDFPageObj_CreateNewPath",
            2
          );
          Module2["_FPDFPageObj_CreateNewRect"] = createExportWrapper(
            "FPDFPageObj_CreateNewRect",
            4
          );
          Module2["_FPDFPath_CountSegments"] = createExportWrapper(
            "FPDFPath_CountSegments",
            1
          );
          Module2["_FPDFPath_GetPathSegment"] = createExportWrapper(
            "FPDFPath_GetPathSegment",
            2
          );
          Module2["_FPDFPath_MoveTo"] = createExportWrapper("FPDFPath_MoveTo", 3);
          Module2["_FPDFPath_LineTo"] = createExportWrapper("FPDFPath_LineTo", 3);
          Module2["_FPDFPath_BezierTo"] = createExportWrapper(
            "FPDFPath_BezierTo",
            7
          );
          Module2["_FPDFPath_Close"] = createExportWrapper("FPDFPath_Close", 1);
          Module2["_FPDFPath_SetDrawMode"] = createExportWrapper(
            "FPDFPath_SetDrawMode",
            3
          );
          Module2["_FPDFPath_GetDrawMode"] = createExportWrapper(
            "FPDFPath_GetDrawMode",
            3
          );
          Module2["_FPDFPathSegment_GetPoint"] = createExportWrapper(
            "FPDFPathSegment_GetPoint",
            3
          );
          Module2["_FPDFPathSegment_GetType"] = createExportWrapper(
            "FPDFPathSegment_GetType",
            1
          );
          Module2["_FPDFPathSegment_GetClose"] = createExportWrapper(
            "FPDFPathSegment_GetClose",
            1
          );
          Module2["_FPDFPageObj_NewTextObj"] = createExportWrapper(
            "FPDFPageObj_NewTextObj",
            3
          );
          Module2["_FPDFText_SetText"] = createExportWrapper(
            "FPDFText_SetText",
            2
          );
          Module2["_FPDFText_SetCharcodes"] = createExportWrapper(
            "FPDFText_SetCharcodes",
            3
          );
          Module2["_FPDFText_LoadFont"] = createExportWrapper(
            "FPDFText_LoadFont",
            5
          );
          Module2["_FPDFText_LoadStandardFont"] = createExportWrapper(
            "FPDFText_LoadStandardFont",
            2
          );
          Module2["_FPDFText_LoadCidType2Font"] = createExportWrapper(
            "FPDFText_LoadCidType2Font",
            6
          );
          Module2["_FPDFTextObj_GetFontSize"] = createExportWrapper(
            "FPDFTextObj_GetFontSize",
            2
          );
          Module2["_FPDFTextObj_GetText"] = createExportWrapper(
            "FPDFTextObj_GetText",
            4
          );
          Module2["_FPDFTextObj_GetRenderedBitmap"] = createExportWrapper("FPDFTextObj_GetRenderedBitmap", 4);
          Module2["_FPDFFont_Close"] = createExportWrapper("FPDFFont_Close", 1);
          Module2["_FPDFPageObj_CreateTextObj"] = createExportWrapper(
            "FPDFPageObj_CreateTextObj",
            3
          );
          Module2["_FPDFTextObj_GetTextRenderMode"] = createExportWrapper("FPDFTextObj_GetTextRenderMode", 1);
          Module2["_FPDFTextObj_SetTextRenderMode"] = createExportWrapper("FPDFTextObj_SetTextRenderMode", 2);
          Module2["_FPDFTextObj_GetFont"] = createExportWrapper(
            "FPDFTextObj_GetFont",
            1
          );
          Module2["_FPDFFont_GetBaseFontName"] = createExportWrapper(
            "FPDFFont_GetBaseFontName",
            3
          );
          Module2["_FPDFFont_GetFamilyName"] = createExportWrapper(
            "FPDFFont_GetFamilyName",
            3
          );
          Module2["_FPDFFont_GetFontData"] = createExportWrapper(
            "FPDFFont_GetFontData",
            4
          );
          Module2["_FPDFFont_GetIsEmbedded"] = createExportWrapper(
            "FPDFFont_GetIsEmbedded",
            1
          );
          Module2["_FPDFFont_GetFlags"] = createExportWrapper(
            "FPDFFont_GetFlags",
            1
          );
          Module2["_FPDFFont_GetWeight"] = createExportWrapper(
            "FPDFFont_GetWeight",
            1
          );
          Module2["_FPDFFont_GetItalicAngle"] = createExportWrapper(
            "FPDFFont_GetItalicAngle",
            2
          );
          Module2["_FPDFFont_GetAscent"] = createExportWrapper(
            "FPDFFont_GetAscent",
            3
          );
          Module2["_FPDFFont_GetDescent"] = createExportWrapper(
            "FPDFFont_GetDescent",
            3
          );
          Module2["_FPDFFont_GetGlyphWidth"] = createExportWrapper(
            "FPDFFont_GetGlyphWidth",
            4
          );
          Module2["_FPDFFont_GetGlyphPath"] = createExportWrapper(
            "FPDFFont_GetGlyphPath",
            3
          );
          Module2["_FPDFGlyphPath_CountGlyphSegments"] = createExportWrapper("FPDFGlyphPath_CountGlyphSegments", 1);
          Module2["_FPDFGlyphPath_GetGlyphPathSegment"] = createExportWrapper("FPDFGlyphPath_GetGlyphPathSegment", 2);
          Module2["_EPDFText_RedactInRect"] = createExportWrapper(
            "EPDFText_RedactInRect",
            4
          );
          Module2["_EPDFText_RedactInQuads"] = createExportWrapper(
            "EPDFText_RedactInQuads",
            5
          );
          Module2["_FPDFDoc_GetPageMode"] = createExportWrapper(
            "FPDFDoc_GetPageMode",
            1
          );
          Module2["_FPDFPage_Flatten"] = createExportWrapper(
            "FPDFPage_Flatten",
            2
          );
          Module2["_FPDFPage_HasFormFieldAtPoint"] = createExportWrapper("FPDFPage_HasFormFieldAtPoint", 4);
          Module2["_FPDFPage_FormFieldZOrderAtPoint"] = createExportWrapper("FPDFPage_FormFieldZOrderAtPoint", 4);
          Module2["_malloc"] = createExportWrapper("malloc", 1);
          Module2["_free"] = createExportWrapper("free", 1);
          Module2["_FORM_OnMouseMove"] = createExportWrapper(
            "FORM_OnMouseMove",
            5
          );
          Module2["_FORM_OnMouseWheel"] = createExportWrapper(
            "FORM_OnMouseWheel",
            6
          );
          Module2["_FORM_OnFocus"] = createExportWrapper("FORM_OnFocus", 5);
          Module2["_FORM_OnLButtonDown"] = createExportWrapper(
            "FORM_OnLButtonDown",
            5
          );
          Module2["_FORM_OnLButtonUp"] = createExportWrapper(
            "FORM_OnLButtonUp",
            5
          );
          Module2["_FORM_OnLButtonDoubleClick"] = createExportWrapper(
            "FORM_OnLButtonDoubleClick",
            5
          );
          Module2["_FORM_OnRButtonDown"] = createExportWrapper(
            "FORM_OnRButtonDown",
            5
          );
          Module2["_FORM_OnRButtonUp"] = createExportWrapper(
            "FORM_OnRButtonUp",
            5
          );
          Module2["_FORM_OnKeyDown"] = createExportWrapper("FORM_OnKeyDown", 4);
          Module2["_FORM_OnKeyUp"] = createExportWrapper("FORM_OnKeyUp", 4);
          Module2["_FORM_OnChar"] = createExportWrapper("FORM_OnChar", 4);
          Module2["_FORM_GetFocusedText"] = createExportWrapper(
            "FORM_GetFocusedText",
            4
          );
          Module2["_FORM_GetSelectedText"] = createExportWrapper(
            "FORM_GetSelectedText",
            4
          );
          Module2["_FORM_ReplaceAndKeepSelection"] = createExportWrapper("FORM_ReplaceAndKeepSelection", 3);
          Module2["_FORM_ReplaceSelection"] = createExportWrapper(
            "FORM_ReplaceSelection",
            3
          );
          Module2["_FORM_SelectAllText"] = createExportWrapper(
            "FORM_SelectAllText",
            2
          );
          Module2["_FORM_CanUndo"] = createExportWrapper("FORM_CanUndo", 2);
          Module2["_FORM_CanRedo"] = createExportWrapper("FORM_CanRedo", 2);
          Module2["_FORM_Undo"] = createExportWrapper("FORM_Undo", 2);
          Module2["_FORM_Redo"] = createExportWrapper("FORM_Redo", 2);
          Module2["_FORM_ForceToKillFocus"] = createExportWrapper(
            "FORM_ForceToKillFocus",
            1
          );
          Module2["_FORM_GetFocusedAnnot"] = createExportWrapper(
            "FORM_GetFocusedAnnot",
            3
          );
          Module2["_FORM_SetFocusedAnnot"] = createExportWrapper(
            "FORM_SetFocusedAnnot",
            2
          );
          Module2["_FPDF_FFLDraw"] = createExportWrapper("FPDF_FFLDraw", 9);
          Module2["_FPDF_SetFormFieldHighlightColor"] = createExportWrapper("FPDF_SetFormFieldHighlightColor", 3);
          Module2["_FPDF_SetFormFieldHighlightAlpha"] = createExportWrapper("FPDF_SetFormFieldHighlightAlpha", 2);
          Module2["_FPDF_RemoveFormFieldHighlight"] = createExportWrapper("FPDF_RemoveFormFieldHighlight", 1);
          Module2["_FORM_OnAfterLoadPage"] = createExportWrapper(
            "FORM_OnAfterLoadPage",
            2
          );
          Module2["_FORM_OnBeforeClosePage"] = createExportWrapper(
            "FORM_OnBeforeClosePage",
            2
          );
          Module2["_FORM_DoDocumentJSAction"] = createExportWrapper(
            "FORM_DoDocumentJSAction",
            1
          );
          Module2["_FORM_DoDocumentOpenAction"] = createExportWrapper(
            "FORM_DoDocumentOpenAction",
            1
          );
          Module2["_FORM_DoDocumentAAction"] = createExportWrapper(
            "FORM_DoDocumentAAction",
            2
          );
          Module2["_FORM_DoPageAAction"] = createExportWrapper(
            "FORM_DoPageAAction",
            3
          );
          Module2["_FORM_SetIndexSelected"] = createExportWrapper(
            "FORM_SetIndexSelected",
            4
          );
          Module2["_FORM_IsIndexSelected"] = createExportWrapper(
            "FORM_IsIndexSelected",
            3
          );
          Module2["_FPDFDoc_GetJavaScriptActionCount"] = createExportWrapper("FPDFDoc_GetJavaScriptActionCount", 1);
          Module2["_FPDFDoc_GetJavaScriptAction"] = createExportWrapper("FPDFDoc_GetJavaScriptAction", 2);
          Module2["_FPDFDoc_CloseJavaScriptAction"] = createExportWrapper("FPDFDoc_CloseJavaScriptAction", 1);
          Module2["_FPDFJavaScriptAction_GetName"] = createExportWrapper("FPDFJavaScriptAction_GetName", 3);
          Module2["_FPDFJavaScriptAction_GetScript"] = createExportWrapper("FPDFJavaScriptAction_GetScript", 3);
          Module2["_FPDF_ImportPagesByIndex"] = createExportWrapper(
            "FPDF_ImportPagesByIndex",
            5
          );
          Module2["_FPDF_ImportPages"] = createExportWrapper(
            "FPDF_ImportPages",
            4
          );
          Module2["_FPDF_ImportNPagesToOne"] = createExportWrapper(
            "FPDF_ImportNPagesToOne",
            5
          );
          Module2["_FPDF_NewXObjectFromPage"] = createExportWrapper(
            "FPDF_NewXObjectFromPage",
            3
          );
          Module2["_FPDF_CloseXObject"] = createExportWrapper(
            "FPDF_CloseXObject",
            1
          );
          Module2["_FPDF_NewFormObjectFromXObject"] = createExportWrapper("FPDF_NewFormObjectFromXObject", 1);
          Module2["_FPDF_CopyViewerPreferences"] = createExportWrapper(
            "FPDF_CopyViewerPreferences",
            2
          );
          Module2["_FPDF_RenderPageBitmapWithColorScheme_Start"] = createExportWrapper("FPDF_RenderPageBitmapWithColorScheme_Start", 10);
          Module2["_FPDF_RenderPageBitmap_Start"] = createExportWrapper("FPDF_RenderPageBitmap_Start", 9);
          Module2["_FPDF_RenderPage_Continue"] = createExportWrapper(
            "FPDF_RenderPage_Continue",
            2
          );
          Module2["_FPDF_RenderPage_Close"] = createExportWrapper(
            "FPDF_RenderPage_Close",
            1
          );
          Module2["_FPDF_SaveWithVersion"] = createExportWrapper(
            "FPDF_SaveWithVersion",
            4
          );
          Module2["_FPDFText_GetCharIndexFromTextIndex"] = createExportWrapper("FPDFText_GetCharIndexFromTextIndex", 2);
          Module2["_FPDFText_GetTextIndexFromCharIndex"] = createExportWrapper("FPDFText_GetTextIndexFromCharIndex", 2);
          Module2["_FPDF_GetSignatureCount"] = createExportWrapper(
            "FPDF_GetSignatureCount",
            1
          );
          Module2["_FPDF_GetSignatureObject"] = createExportWrapper(
            "FPDF_GetSignatureObject",
            2
          );
          Module2["_FPDFSignatureObj_GetContents"] = createExportWrapper("FPDFSignatureObj_GetContents", 3);
          Module2["_FPDFSignatureObj_GetByteRange"] = createExportWrapper("FPDFSignatureObj_GetByteRange", 3);
          Module2["_FPDFSignatureObj_GetSubFilter"] = createExportWrapper("FPDFSignatureObj_GetSubFilter", 3);
          Module2["_FPDFSignatureObj_GetReason"] = createExportWrapper(
            "FPDFSignatureObj_GetReason",
            3
          );
          Module2["_FPDFSignatureObj_GetTime"] = createExportWrapper(
            "FPDFSignatureObj_GetTime",
            3
          );
          Module2["_FPDFSignatureObj_GetDocMDPPermission"] = createExportWrapper("FPDFSignatureObj_GetDocMDPPermission", 1);
          Module2["_FPDF_StructTree_GetForPage"] = createExportWrapper(
            "FPDF_StructTree_GetForPage",
            1
          );
          Module2["_FPDF_StructTree_Close"] = createExportWrapper(
            "FPDF_StructTree_Close",
            1
          );
          Module2["_FPDF_StructTree_CountChildren"] = createExportWrapper("FPDF_StructTree_CountChildren", 1);
          Module2["_FPDF_StructTree_GetChildAtIndex"] = createExportWrapper("FPDF_StructTree_GetChildAtIndex", 2);
          Module2["_FPDF_StructElement_GetAltText"] = createExportWrapper("FPDF_StructElement_GetAltText", 3);
          Module2["_FPDF_StructElement_GetActualText"] = createExportWrapper("FPDF_StructElement_GetActualText", 3);
          Module2["_FPDF_StructElement_GetID"] = createExportWrapper(
            "FPDF_StructElement_GetID",
            3
          );
          Module2["_FPDF_StructElement_GetLang"] = createExportWrapper(
            "FPDF_StructElement_GetLang",
            3
          );
          Module2["_FPDF_StructElement_GetAttributeCount"] = createExportWrapper("FPDF_StructElement_GetAttributeCount", 1);
          Module2["_FPDF_StructElement_GetAttributeAtIndex"] = createExportWrapper("FPDF_StructElement_GetAttributeAtIndex", 2);
          Module2["_FPDF_StructElement_GetStringAttribute"] = createExportWrapper("FPDF_StructElement_GetStringAttribute", 4);
          Module2["_FPDF_StructElement_GetMarkedContentID"] = createExportWrapper("FPDF_StructElement_GetMarkedContentID", 1);
          Module2["_FPDF_StructElement_GetType"] = createExportWrapper(
            "FPDF_StructElement_GetType",
            3
          );
          Module2["_FPDF_StructElement_GetObjType"] = createExportWrapper("FPDF_StructElement_GetObjType", 3);
          Module2["_FPDF_StructElement_GetTitle"] = createExportWrapper("FPDF_StructElement_GetTitle", 3);
          Module2["_FPDF_StructElement_CountChildren"] = createExportWrapper("FPDF_StructElement_CountChildren", 1);
          Module2["_FPDF_StructElement_GetChildAtIndex"] = createExportWrapper("FPDF_StructElement_GetChildAtIndex", 2);
          Module2["_FPDF_StructElement_GetChildMarkedContentID"] = createExportWrapper("FPDF_StructElement_GetChildMarkedContentID", 2);
          Module2["_FPDF_StructElement_GetParent"] = createExportWrapper("FPDF_StructElement_GetParent", 1);
          Module2["_FPDF_StructElement_Attr_GetCount"] = createExportWrapper("FPDF_StructElement_Attr_GetCount", 1);
          Module2["_FPDF_StructElement_Attr_GetName"] = createExportWrapper("FPDF_StructElement_Attr_GetName", 5);
          Module2["_FPDF_StructElement_Attr_GetValue"] = createExportWrapper("FPDF_StructElement_Attr_GetValue", 2);
          Module2["_FPDF_StructElement_Attr_GetType"] = createExportWrapper("FPDF_StructElement_Attr_GetType", 1);
          Module2["_FPDF_StructElement_Attr_GetBooleanValue"] = createExportWrapper("FPDF_StructElement_Attr_GetBooleanValue", 2);
          Module2["_FPDF_StructElement_Attr_GetNumberValue"] = createExportWrapper("FPDF_StructElement_Attr_GetNumberValue", 2);
          Module2["_FPDF_StructElement_Attr_GetStringValue"] = createExportWrapper("FPDF_StructElement_Attr_GetStringValue", 4);
          Module2["_FPDF_StructElement_Attr_GetBlobValue"] = createExportWrapper("FPDF_StructElement_Attr_GetBlobValue", 4);
          Module2["_FPDF_StructElement_Attr_CountChildren"] = createExportWrapper("FPDF_StructElement_Attr_CountChildren", 1);
          Module2["_FPDF_StructElement_Attr_GetChildAtIndex"] = createExportWrapper("FPDF_StructElement_Attr_GetChildAtIndex", 2);
          Module2["_FPDF_StructElement_GetMarkedContentIdCount"] = createExportWrapper("FPDF_StructElement_GetMarkedContentIdCount", 1);
          Module2["_FPDF_StructElement_GetMarkedContentIdAtIndex"] = createExportWrapper("FPDF_StructElement_GetMarkedContentIdAtIndex", 2);
          Module2["_FPDF_AddInstalledFont"] = createExportWrapper(
            "FPDF_AddInstalledFont",
            3
          );
          Module2["_FPDF_SetSystemFontInfo"] = createExportWrapper(
            "FPDF_SetSystemFontInfo",
            1
          );
          Module2["_FPDF_GetDefaultTTFMap"] = createExportWrapper(
            "FPDF_GetDefaultTTFMap",
            0
          );
          Module2["_FPDF_GetDefaultTTFMapCount"] = createExportWrapper(
            "FPDF_GetDefaultTTFMapCount",
            0
          );
          Module2["_FPDF_GetDefaultTTFMapEntry"] = createExportWrapper(
            "FPDF_GetDefaultTTFMapEntry",
            1
          );
          Module2["_FPDF_GetDefaultSystemFontInfo"] = createExportWrapper("FPDF_GetDefaultSystemFontInfo", 0);
          Module2["_FPDF_FreeDefaultSystemFontInfo"] = createExportWrapper("FPDF_FreeDefaultSystemFontInfo", 1);
          Module2["_FPDFText_LoadPage"] = createExportWrapper(
            "FPDFText_LoadPage",
            1
          );
          Module2["_FPDFText_ClosePage"] = createExportWrapper(
            "FPDFText_ClosePage",
            1
          );
          Module2["_FPDFText_CountChars"] = createExportWrapper(
            "FPDFText_CountChars",
            1
          );
          Module2["_FPDFText_GetUnicode"] = createExportWrapper(
            "FPDFText_GetUnicode",
            2
          );
          Module2["_FPDFText_GetTextObject"] = createExportWrapper(
            "FPDFText_GetTextObject",
            2
          );
          Module2["_FPDFText_IsGenerated"] = createExportWrapper(
            "FPDFText_IsGenerated",
            2
          );
          Module2["_FPDFText_IsHyphen"] = createExportWrapper(
            "FPDFText_IsHyphen",
            2
          );
          Module2["_FPDFText_HasUnicodeMapError"] = createExportWrapper("FPDFText_HasUnicodeMapError", 2);
          Module2["_FPDFText_GetFontSize"] = createExportWrapper(
            "FPDFText_GetFontSize",
            2
          );
          Module2["_FPDFText_GetFontInfo"] = createExportWrapper(
            "FPDFText_GetFontInfo",
            5
          );
          Module2["_FPDFText_GetFontWeight"] = createExportWrapper(
            "FPDFText_GetFontWeight",
            2
          );
          Module2["_FPDFText_GetFillColor"] = createExportWrapper(
            "FPDFText_GetFillColor",
            6
          );
          Module2["_FPDFText_GetStrokeColor"] = createExportWrapper(
            "FPDFText_GetStrokeColor",
            6
          );
          Module2["_FPDFText_GetCharAngle"] = createExportWrapper(
            "FPDFText_GetCharAngle",
            2
          );
          Module2["_FPDFText_GetCharBox"] = createExportWrapper(
            "FPDFText_GetCharBox",
            6
          );
          Module2["_FPDFText_GetLooseCharBox"] = createExportWrapper(
            "FPDFText_GetLooseCharBox",
            3
          );
          Module2["_FPDFText_GetMatrix"] = createExportWrapper(
            "FPDFText_GetMatrix",
            3
          );
          Module2["_FPDFText_GetCharOrigin"] = createExportWrapper(
            "FPDFText_GetCharOrigin",
            4
          );
          Module2["_FPDFText_GetCharIndexAtPos"] = createExportWrapper(
            "FPDFText_GetCharIndexAtPos",
            5
          );
          Module2["_FPDFText_GetText"] = createExportWrapper(
            "FPDFText_GetText",
            4
          );
          Module2["_FPDFText_CountRects"] = createExportWrapper(
            "FPDFText_CountRects",
            3
          );
          Module2["_FPDFText_GetRect"] = createExportWrapper(
            "FPDFText_GetRect",
            6
          );
          Module2["_FPDFText_GetBoundedText"] = createExportWrapper(
            "FPDFText_GetBoundedText",
            7
          );
          Module2["_FPDFText_FindStart"] = createExportWrapper(
            "FPDFText_FindStart",
            4
          );
          Module2["_FPDFText_FindNext"] = createExportWrapper(
            "FPDFText_FindNext",
            1
          );
          Module2["_FPDFText_FindPrev"] = createExportWrapper(
            "FPDFText_FindPrev",
            1
          );
          Module2["_FPDFText_GetSchResultIndex"] = createExportWrapper(
            "FPDFText_GetSchResultIndex",
            1
          );
          Module2["_FPDFText_GetSchCount"] = createExportWrapper(
            "FPDFText_GetSchCount",
            1
          );
          Module2["_FPDFText_FindClose"] = createExportWrapper(
            "FPDFText_FindClose",
            1
          );
          Module2["_FPDFLink_LoadWebLinks"] = createExportWrapper(
            "FPDFLink_LoadWebLinks",
            1
          );
          Module2["_FPDFLink_CountWebLinks"] = createExportWrapper(
            "FPDFLink_CountWebLinks",
            1
          );
          Module2["_FPDFLink_GetURL"] = createExportWrapper("FPDFLink_GetURL", 4);
          Module2["_FPDFLink_CountRects"] = createExportWrapper(
            "FPDFLink_CountRects",
            2
          );
          Module2["_FPDFLink_GetRect"] = createExportWrapper(
            "FPDFLink_GetRect",
            7
          );
          Module2["_FPDFLink_GetTextRange"] = createExportWrapper(
            "FPDFLink_GetTextRange",
            4
          );
          Module2["_FPDFLink_CloseWebLinks"] = createExportWrapper(
            "FPDFLink_CloseWebLinks",
            1
          );
          Module2["_FPDFPage_GetDecodedThumbnailData"] = createExportWrapper("FPDFPage_GetDecodedThumbnailData", 3);
          Module2["_FPDFPage_GetRawThumbnailData"] = createExportWrapper("FPDFPage_GetRawThumbnailData", 3);
          Module2["_FPDFPage_GetThumbnailAsBitmap"] = createExportWrapper("FPDFPage_GetThumbnailAsBitmap", 1);
          Module2["_FPDFPage_SetMediaBox"] = createExportWrapper(
            "FPDFPage_SetMediaBox",
            5
          );
          Module2["_FPDFPage_SetCropBox"] = createExportWrapper(
            "FPDFPage_SetCropBox",
            5
          );
          Module2["_FPDFPage_SetBleedBox"] = createExportWrapper(
            "FPDFPage_SetBleedBox",
            5
          );
          Module2["_FPDFPage_SetTrimBox"] = createExportWrapper(
            "FPDFPage_SetTrimBox",
            5
          );
          Module2["_FPDFPage_SetArtBox"] = createExportWrapper(
            "FPDFPage_SetArtBox",
            5
          );
          Module2["_FPDFPage_GetMediaBox"] = createExportWrapper(
            "FPDFPage_GetMediaBox",
            5
          );
          Module2["_FPDFPage_GetCropBox"] = createExportWrapper(
            "FPDFPage_GetCropBox",
            5
          );
          Module2["_FPDFPage_GetBleedBox"] = createExportWrapper(
            "FPDFPage_GetBleedBox",
            5
          );
          Module2["_FPDFPage_GetTrimBox"] = createExportWrapper(
            "FPDFPage_GetTrimBox",
            5
          );
          Module2["_FPDFPage_GetArtBox"] = createExportWrapper(
            "FPDFPage_GetArtBox",
            5
          );
          Module2["_FPDFPage_TransFormWithClip"] = createExportWrapper(
            "FPDFPage_TransFormWithClip",
            3
          );
          Module2["_FPDFPageObj_TransformClipPath"] = createExportWrapper("FPDFPageObj_TransformClipPath", 7);
          Module2["_FPDFPageObj_GetClipPath"] = createExportWrapper(
            "FPDFPageObj_GetClipPath",
            1
          );
          Module2["_FPDFClipPath_CountPaths"] = createExportWrapper(
            "FPDFClipPath_CountPaths",
            1
          );
          Module2["_FPDFClipPath_CountPathSegments"] = createExportWrapper("FPDFClipPath_CountPathSegments", 2);
          Module2["_FPDFClipPath_GetPathSegment"] = createExportWrapper("FPDFClipPath_GetPathSegment", 3);
          Module2["_FPDF_CreateClipPath"] = createExportWrapper(
            "FPDF_CreateClipPath",
            4
          );
          Module2["_FPDF_DestroyClipPath"] = createExportWrapper(
            "FPDF_DestroyClipPath",
            1
          );
          Module2["_FPDFPage_InsertClipPath"] = createExportWrapper(
            "FPDFPage_InsertClipPath",
            2
          );
          Module2["_FPDF_InitLibrary"] = createExportWrapper(
            "FPDF_InitLibrary",
            0
          );
          Module2["_FPDF_DestroyLibrary"] = createExportWrapper(
            "FPDF_DestroyLibrary",
            0
          );
          Module2["_FPDF_SetSandBoxPolicy"] = createExportWrapper(
            "FPDF_SetSandBoxPolicy",
            2
          );
          Module2["_FPDF_LoadDocument"] = createExportWrapper(
            "FPDF_LoadDocument",
            2
          );
          Module2["_FPDF_GetFormType"] = createExportWrapper(
            "FPDF_GetFormType",
            1
          );
          Module2["_FPDF_LoadXFA"] = createExportWrapper("FPDF_LoadXFA", 1);
          Module2["_FPDF_LoadMemDocument"] = createExportWrapper(
            "FPDF_LoadMemDocument",
            3
          );
          Module2["_FPDF_LoadMemDocument64"] = createExportWrapper(
            "FPDF_LoadMemDocument64",
            3
          );
          Module2["_FPDF_LoadCustomDocument"] = createExportWrapper(
            "FPDF_LoadCustomDocument",
            2
          );
          Module2["_FPDF_GetFileVersion"] = createExportWrapper(
            "FPDF_GetFileVersion",
            2
          );
          Module2["_FPDF_DocumentHasValidCrossReferenceTable"] = createExportWrapper("FPDF_DocumentHasValidCrossReferenceTable", 1);
          Module2["_FPDF_GetDocPermissions"] = createExportWrapper(
            "FPDF_GetDocPermissions",
            1
          );
          Module2["_FPDF_GetDocUserPermissions"] = createExportWrapper(
            "FPDF_GetDocUserPermissions",
            1
          );
          Module2["_FPDF_GetSecurityHandlerRevision"] = createExportWrapper("FPDF_GetSecurityHandlerRevision", 1);
          Module2["_EPDF_SetEncryption"] = createExportWrapper(
            "EPDF_SetEncryption",
            4
          );
          Module2["_EPDF_RemoveEncryption"] = createExportWrapper(
            "EPDF_RemoveEncryption",
            1
          );
          Module2["_EPDF_UnlockOwnerPermissions"] = createExportWrapper("EPDF_UnlockOwnerPermissions", 2);
          Module2["_EPDF_IsEncrypted"] = createExportWrapper(
            "EPDF_IsEncrypted",
            1
          );
          Module2["_EPDF_IsOwnerUnlocked"] = createExportWrapper(
            "EPDF_IsOwnerUnlocked",
            1
          );
          Module2["_FPDF_GetPageCount"] = createExportWrapper(
            "FPDF_GetPageCount",
            1
          );
          Module2["_FPDF_LoadPage"] = createExportWrapper("FPDF_LoadPage", 2);
          Module2["_FPDF_GetPageWidthF"] = createExportWrapper(
            "FPDF_GetPageWidthF",
            1
          );
          Module2["_FPDF_GetPageWidth"] = createExportWrapper(
            "FPDF_GetPageWidth",
            1
          );
          Module2["_FPDF_GetPageHeightF"] = createExportWrapper(
            "FPDF_GetPageHeightF",
            1
          );
          Module2["_FPDF_GetPageHeight"] = createExportWrapper(
            "FPDF_GetPageHeight",
            1
          );
          Module2["_FPDF_GetPageBoundingBox"] = createExportWrapper(
            "FPDF_GetPageBoundingBox",
            2
          );
          Module2["_FPDF_RenderPageBitmap"] = createExportWrapper(
            "FPDF_RenderPageBitmap",
            8
          );
          Module2["_FPDF_RenderPageBitmapWithMatrix"] = createExportWrapper("FPDF_RenderPageBitmapWithMatrix", 5);
          Module2["_EPDF_RenderAnnotBitmap"] = createExportWrapper(
            "EPDF_RenderAnnotBitmap",
            6
          );
          Module2["_FPDF_ClosePage"] = createExportWrapper("FPDF_ClosePage", 1);
          Module2["_FPDF_CloseDocument"] = createExportWrapper(
            "FPDF_CloseDocument",
            1
          );
          Module2["_FPDF_GetLastError"] = createExportWrapper(
            "FPDF_GetLastError",
            0
          );
          Module2["_FPDF_DeviceToPage"] = createExportWrapper(
            "FPDF_DeviceToPage",
            10
          );
          Module2["_FPDF_PageToDevice"] = createExportWrapper(
            "FPDF_PageToDevice",
            10
          );
          Module2["_FPDFBitmap_Create"] = createExportWrapper(
            "FPDFBitmap_Create",
            3
          );
          Module2["_FPDFBitmap_CreateEx"] = createExportWrapper(
            "FPDFBitmap_CreateEx",
            5
          );
          Module2["_FPDFBitmap_GetFormat"] = createExportWrapper(
            "FPDFBitmap_GetFormat",
            1
          );
          Module2["_FPDFBitmap_FillRect"] = createExportWrapper(
            "FPDFBitmap_FillRect",
            6
          );
          Module2["_FPDFBitmap_GetBuffer"] = createExportWrapper(
            "FPDFBitmap_GetBuffer",
            1
          );
          Module2["_FPDFBitmap_GetWidth"] = createExportWrapper(
            "FPDFBitmap_GetWidth",
            1
          );
          Module2["_FPDFBitmap_GetHeight"] = createExportWrapper(
            "FPDFBitmap_GetHeight",
            1
          );
          Module2["_FPDFBitmap_GetStride"] = createExportWrapper(
            "FPDFBitmap_GetStride",
            1
          );
          Module2["_FPDFBitmap_Destroy"] = createExportWrapper(
            "FPDFBitmap_Destroy",
            1
          );
          Module2["_FPDF_GetPageSizeByIndexF"] = createExportWrapper(
            "FPDF_GetPageSizeByIndexF",
            3
          );
          Module2["_EPDF_GetPageRotationByIndex"] = createExportWrapper("EPDF_GetPageRotationByIndex", 2);
          Module2["_FPDF_GetPageSizeByIndex"] = createExportWrapper(
            "FPDF_GetPageSizeByIndex",
            4
          );
          Module2["_FPDF_VIEWERREF_GetPrintScaling"] = createExportWrapper("FPDF_VIEWERREF_GetPrintScaling", 1);
          Module2["_FPDF_VIEWERREF_GetNumCopies"] = createExportWrapper("FPDF_VIEWERREF_GetNumCopies", 1);
          Module2["_FPDF_VIEWERREF_GetPrintPageRange"] = createExportWrapper("FPDF_VIEWERREF_GetPrintPageRange", 1);
          Module2["_FPDF_VIEWERREF_GetPrintPageRangeCount"] = createExportWrapper("FPDF_VIEWERREF_GetPrintPageRangeCount", 1);
          Module2["_FPDF_VIEWERREF_GetPrintPageRangeElement"] = createExportWrapper("FPDF_VIEWERREF_GetPrintPageRangeElement", 2);
          Module2["_FPDF_VIEWERREF_GetDuplex"] = createExportWrapper(
            "FPDF_VIEWERREF_GetDuplex",
            1
          );
          Module2["_FPDF_VIEWERREF_GetName"] = createExportWrapper(
            "FPDF_VIEWERREF_GetName",
            4
          );
          Module2["_FPDF_CountNamedDests"] = createExportWrapper(
            "FPDF_CountNamedDests",
            1
          );
          Module2["_FPDF_GetNamedDestByName"] = createExportWrapper(
            "FPDF_GetNamedDestByName",
            2
          );
          Module2["_FPDF_GetNamedDest"] = createExportWrapper(
            "FPDF_GetNamedDest",
            4
          );
          Module2["_FPDF_GetXFAPacketCount"] = createExportWrapper(
            "FPDF_GetXFAPacketCount",
            1
          );
          Module2["_FPDF_GetXFAPacketName"] = createExportWrapper(
            "FPDF_GetXFAPacketName",
            4
          );
          Module2["_FPDF_GetXFAPacketContent"] = createExportWrapper(
            "FPDF_GetXFAPacketContent",
            5
          );
          Module2["_FPDF_GetTrailerEnds"] = createExportWrapper(
            "FPDF_GetTrailerEnds",
            3
          );
          var _fflush = createExportWrapper("fflush", 1);
          var _emscripten_builtin_memalign = createExportWrapper("emscripten_builtin_memalign", 2);
          var _strerror = createExportWrapper("strerror", 1);
          var _setThrew = createExportWrapper("setThrew", 2);
          var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports["emscripten_stack_init"])();
          var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"])();
          var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(a0);
          var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);
          var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"])();
          Module2["dynCall_ji"] = createExportWrapper("dynCall_ji", 2);
          Module2["dynCall_jij"] = createExportWrapper("dynCall_jij", 4);
          Module2["dynCall_iiij"] = createExportWrapper("dynCall_iiij", 5);
          Module2["dynCall_iij"] = createExportWrapper("dynCall_iij", 4);
          Module2["dynCall_j"] = createExportWrapper("dynCall_j", 1);
          Module2["dynCall_jji"] = createExportWrapper("dynCall_jji", 4);
          Module2["dynCall_iji"] = createExportWrapper("dynCall_iji", 4);
          Module2["dynCall_viijii"] = createExportWrapper("dynCall_viijii", 7);
          Module2["dynCall_iiji"] = createExportWrapper("dynCall_iiji", 5);
          Module2["dynCall_jiji"] = createExportWrapper("dynCall_jiji", 5);
          Module2["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij", 7);
          Module2["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj", 9);
          Module2["dynCall_iiiiiijj"] = createExportWrapper(
            "dynCall_iiiiiijj",
            10
          );
          Module2["dynCall_viji"] = createExportWrapper("dynCall_viji", 5);
          function invoke_viii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_ii(index, a1) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_iii(index, a1, a2) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_iiii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_viiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_iiiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_v(index) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)();
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_vii(index, a1, a2) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew(1, 0);
            }
          }
          Module2["wasmExports"] = wasmExports;
          Module2["ccall"] = ccall;
          Module2["cwrap"] = cwrap;
          Module2["addFunction"] = addFunction;
          Module2["removeFunction"] = removeFunction;
          Module2["setValue"] = setValue;
          Module2["getValue"] = getValue;
          Module2["UTF8ToString"] = UTF8ToString;
          Module2["stringToUTF8"] = stringToUTF8;
          Module2["UTF16ToString"] = UTF16ToString;
          Module2["stringToUTF16"] = stringToUTF16;
          var missingLibrarySymbols = [
            "writeI53ToI64",
            "writeI53ToI64Clamped",
            "writeI53ToI64Signaling",
            "writeI53ToU64Clamped",
            "writeI53ToU64Signaling",
            "readI53FromI64",
            "readI53FromU64",
            "convertI32PairToI53",
            "convertU32PairToI53",
            "getTempRet0",
            "setTempRet0",
            "exitJS",
            "inetPton4",
            "inetNtop4",
            "inetPton6",
            "inetNtop6",
            "readSockaddr",
            "writeSockaddr",
            "emscriptenLog",
            "readEmAsmArgs",
            "jstoi_q",
            "listenOnce",
            "autoResumeAudioContext",
            "dynCallLegacy",
            "getDynCaller",
            "dynCall",
            "handleException",
            "keepRuntimeAlive",
            "runtimeKeepalivePush",
            "runtimeKeepalivePop",
            "callUserCallback",
            "maybeExit",
            "asmjsMangle",
            "HandleAllocator",
            "getNativeTypeSize",
            "STACK_SIZE",
            "STACK_ALIGN",
            "POINTER_SIZE",
            "ASSERTIONS",
            "reallyNegative",
            "unSign",
            "strLen",
            "reSign",
            "formatString",
            "intArrayToString",
            "AsciiToString",
            "lengthBytesUTF16",
            "UTF32ToString",
            "stringToUTF32",
            "lengthBytesUTF32",
            "stringToNewUTF8",
            "registerKeyEventCallback",
            "maybeCStringToJsString",
            "findEventTarget",
            "getBoundingClientRect",
            "fillMouseEventData",
            "registerMouseEventCallback",
            "registerWheelEventCallback",
            "registerUiEventCallback",
            "registerFocusEventCallback",
            "fillDeviceOrientationEventData",
            "registerDeviceOrientationEventCallback",
            "fillDeviceMotionEventData",
            "registerDeviceMotionEventCallback",
            "screenOrientation",
            "fillOrientationChangeEventData",
            "registerOrientationChangeEventCallback",
            "fillFullscreenChangeEventData",
            "registerFullscreenChangeEventCallback",
            "JSEvents_requestFullscreen",
            "JSEvents_resizeCanvasForFullscreen",
            "registerRestoreOldStyle",
            "hideEverythingExceptGivenElement",
            "restoreHiddenElements",
            "setLetterbox",
            "softFullscreenResizeWebGLRenderTarget",
            "doRequestFullscreen",
            "fillPointerlockChangeEventData",
            "registerPointerlockChangeEventCallback",
            "registerPointerlockErrorEventCallback",
            "requestPointerLock",
            "fillVisibilityChangeEventData",
            "registerVisibilityChangeEventCallback",
            "registerTouchEventCallback",
            "fillGamepadEventData",
            "registerGamepadEventCallback",
            "registerBeforeUnloadEventCallback",
            "fillBatteryEventData",
            "battery",
            "registerBatteryEventCallback",
            "setCanvasElementSize",
            "getCanvasElementSize",
            "jsStackTrace",
            "getCallstack",
            "convertPCtoSourceLocation",
            "checkWasiClock",
            "wasiRightsToMuslOFlags",
            "wasiOFlagsToMuslOFlags",
            "createDyncallWrapper",
            "safeSetTimeout",
            "setImmediateWrapped",
            "clearImmediateWrapped",
            "polyfillSetImmediate",
            "registerPostMainLoop",
            "registerPreMainLoop",
            "getPromise",
            "makePromise",
            "idsToPromises",
            "makePromiseCallback",
            "ExceptionInfo",
            "findMatchingCatch",
            "Browser_asyncPrepareDataCounter",
            "safeRequestAnimationFrame",
            "arraySum",
            "addDays",
            "getSocketFromFD",
            "getSocketAddress",
            "FS_unlink",
            "FS_mkdirTree",
            "_setNetworkCallback",
            "heapObjectForWebGLType",
            "toTypedArrayIndex",
            "webgl_enable_ANGLE_instanced_arrays",
            "webgl_enable_OES_vertex_array_object",
            "webgl_enable_WEBGL_draw_buffers",
            "webgl_enable_WEBGL_multi_draw",
            "webgl_enable_EXT_polygon_offset_clamp",
            "webgl_enable_EXT_clip_control",
            "webgl_enable_WEBGL_polygon_mode",
            "emscriptenWebGLGet",
            "computeUnpackAlignedImageSize",
            "colorChannelsInGlTextureFormat",
            "emscriptenWebGLGetTexPixelData",
            "emscriptenWebGLGetUniform",
            "webglGetUniformLocation",
            "webglPrepareUniformLocationsBeforeFirstUse",
            "webglGetLeftBracePos",
            "emscriptenWebGLGetVertexAttrib",
            "__glGetActiveAttribOrUniform",
            "writeGLArray",
            "registerWebGlEventCallback",
            "runAndAbortIfError",
            "ALLOC_NORMAL",
            "ALLOC_STACK",
            "allocate",
            "writeStringToMemory",
            "writeAsciiToMemory",
            "setErrNo",
            "demangle",
            "stackTrace"
          ];
          missingLibrarySymbols.forEach(missingLibrarySymbol);
          var unexportedSymbols = [
            "run",
            "addOnPreRun",
            "addOnInit",
            "addOnPreMain",
            "addOnExit",
            "addOnPostRun",
            "addRunDependency",
            "removeRunDependency",
            "out",
            "err",
            "callMain",
            "abort",
            "wasmMemory",
            "writeStackCookie",
            "checkStackCookie",
            "convertI32PairToI53Checked",
            "stackSave",
            "stackRestore",
            "stackAlloc",
            "ptrToString",
            "zeroMemory",
            "getHeapMax",
            "growMemory",
            "ENV",
            "ERRNO_CODES",
            "strError",
            "DNS",
            "Protocols",
            "Sockets",
            "initRandomFill",
            "randomFill",
            "timers",
            "warnOnce",
            "readEmAsmArgsArray",
            "jstoi_s",
            "getExecutableName",
            "asyncLoad",
            "alignMemory",
            "mmapAlloc",
            "wasmTable",
            "noExitRuntime",
            "getCFunc",
            "uleb128Encode",
            "sigToWasmTypes",
            "generateFuncType",
            "convertJsFunctionToWasm",
            "freeTableIndexes",
            "functionsInTableMap",
            "getEmptyTableSlot",
            "updateTableMap",
            "getFunctionAddress",
            "PATH",
            "PATH_FS",
            "UTF8Decoder",
            "UTF8ArrayToString",
            "stringToUTF8Array",
            "lengthBytesUTF8",
            "intArrayFromString",
            "stringToAscii",
            "UTF16Decoder",
            "stringToUTF8OnStack",
            "writeArrayToMemory",
            "JSEvents",
            "specialHTMLTargets",
            "findCanvasEventTarget",
            "currentFullscreenStrategy",
            "restoreOldWindowedStyle",
            "UNWIND_CACHE",
            "ExitStatus",
            "getEnvStrings",
            "doReadv",
            "doWritev",
            "promiseMap",
            "uncaughtExceptionCount",
            "exceptionLast",
            "exceptionCaught",
            "Browser",
            "getPreloadedImageData__data",
            "wget",
            "MONTH_DAYS_REGULAR",
            "MONTH_DAYS_LEAP",
            "MONTH_DAYS_REGULAR_CUMULATIVE",
            "MONTH_DAYS_LEAP_CUMULATIVE",
            "isLeapYear",
            "ydayFromDate",
            "SYSCALLS",
            "preloadPlugins",
            "FS_createPreloadedFile",
            "FS_modeStringToFlags",
            "FS_getMode",
            "FS_stdin_getChar_buffer",
            "FS_stdin_getChar",
            "FS_createPath",
            "FS_createDevice",
            "FS_readFile",
            "FS",
            "FS_createDataFile",
            "FS_createLazyFile",
            "MEMFS",
            "TTY",
            "PIPEFS",
            "SOCKFS",
            "tempFixedLengthArray",
            "miniTempWebGLFloatBuffers",
            "miniTempWebGLIntBuffers",
            "GL",
            "AL",
            "GLUT",
            "EGL",
            "GLEW",
            "IDBStore",
            "SDL",
            "SDL_gfx",
            "allocateUTF8",
            "allocateUTF8OnStack",
            "print",
            "printErr"
          ];
          unexportedSymbols.forEach(unexportedRuntimeSymbol);
          var calledRun;
          var calledPrerun;
          dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
          };
          function stackCheckInit() {
            _emscripten_stack_init();
            writeStackCookie();
          }
          function run() {
            if (runDependencies > 0) {
              return;
            }
            stackCheckInit();
            if (!calledPrerun) {
              calledPrerun = 1;
              preRun();
              if (runDependencies > 0) {
                return;
              }
            }
            function doRun() {
              if (calledRun) return;
              calledRun = 1;
              Module2["calledRun"] = 1;
              if (ABORT) return;
              initRuntime();
              readyPromiseResolve(Module2);
              Module2["onRuntimeInitialized"]?.();
              assert(
                !Module2["_main"],
                'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'
              );
              postRun();
            }
            if (Module2["setStatus"]) {
              Module2["setStatus"]("Running...");
              setTimeout(() => {
                setTimeout(() => Module2["setStatus"](""), 1);
                doRun();
              }, 1);
            } else {
              doRun();
            }
            checkStackCookie();
          }
          if (Module2["preInit"]) {
            if (typeof Module2["preInit"] == "function") Module2["preInit"] = [Module2["preInit"]];
            while (Module2["preInit"].length > 0) {
              Module2["preInit"].pop()();
            }
          }
          run();
          moduleRtn = readyPromise;
          for (const prop of Object.keys(Module2)) {
            if (!(prop in moduleArg)) {
              Object.defineProperty(moduleArg, prop, {
                configurable: true,
                get() {
                  abort(
                    `Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`
                  );
                }
              });
            }
          }
          return moduleRtn;
        };
      })();
      functions = {
        EPDF_GetMetaKeyCount: [["number", "boolean"], "number"],
        EPDF_GetMetaKeyName: [
          ["number", "number", "boolean", "number", "number"],
          "number"
        ],
        EPDF_GetMetaTrapped: [["number"], "number"],
        EPDF_GetPageRotationByIndex: [["number", "number"], "number"],
        EPDF_HasMetaText: [["number", "string"], "boolean"],
        EPDF_IsEncrypted: [["number"], "boolean"],
        EPDF_IsOwnerUnlocked: [["number"], "boolean"],
        EPDF_PNG_EncodeRGBA: [
          ["number", "number", "number", "number", "number", "number"],
          "number"
        ],
        EPDF_RemoveEncryption: [["number"], "boolean"],
        EPDF_RenderAnnotBitmap: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        EPDF_SetEncryption: [["number", "string", "string", "number"], "boolean"],
        EPDF_SetMetaText: [["number", "string", "number"], "boolean"],
        EPDF_SetMetaTrapped: [["number", "number"], "boolean"],
        EPDF_UnlockOwnerPermissions: [["number", "string"], "boolean"],
        EPDFAction_CreateGoTo: [["number", "number"], "number"],
        EPDFAction_CreateGoToNamed: [["number", "string"], "number"],
        EPDFAction_CreateLaunch: [["number", "number"], "number"],
        EPDFAction_CreateRemoteGoToByName: [["number", "number", "number"], "number"],
        EPDFAction_CreateRemoteGoToDest: [["number", "number", "number"], "number"],
        EPDFAction_CreateURI: [["number", "string"], "number"],
        EPDFAnnot_ClearColor: [["number", "number"], "boolean"],
        EPDFAnnot_GenerateAppearance: [["number"], "boolean"],
        EPDFAnnot_GenerateAppearanceWithBlend: [["number", "number"], "boolean"],
        EPDFAnnot_GetBlendMode: [["number"], "number"],
        EPDFAnnot_GetBorderDashPattern: [["number", "number", "number"], "boolean"],
        EPDFAnnot_GetBorderDashPatternCount: [["number"], "number"],
        EPDFAnnot_GetBorderEffect: [["number", "number"], "boolean"],
        EPDFAnnot_GetBorderStyle: [["number", "number"], "number"],
        EPDFAnnot_GetColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        EPDFAnnot_GetDefaultAppearance: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        EPDFAnnot_GetIcon: [["number"], "number"],
        EPDFAnnot_GetIntent: [["number", "number", "number"], "number"],
        EPDFAnnot_GetLineEndings: [["number", "number", "number"], "boolean"],
        EPDFAnnot_GetOpacity: [["number", "number"], "boolean"],
        EPDFAnnot_GetRectangleDifferences: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        EPDFAnnot_GetRichContent: [["number", "number", "number"], "number"],
        EPDFAnnot_GetTextAlignment: [["number"], "number"],
        EPDFAnnot_GetVerticalAlignment: [["number"], "number"],
        EPDFAnnot_SetBorderDashPattern: [["number", "number", "number"], "boolean"],
        EPDFAnnot_SetBorderStyle: [["number", "number", "number"], "boolean"],
        EPDFAnnot_SetColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        EPDFAnnot_SetDefaultAppearance: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        EPDFAnnot_SetIcon: [["number", "number"], "boolean"],
        EPDFAnnot_SetIntent: [["number", "string"], "boolean"],
        EPDFAnnot_SetLine: [["number", "number", "number"], "boolean"],
        EPDFAnnot_SetLineEndings: [["number", "number", "number"], "boolean"],
        EPDFAnnot_SetLinkedAnnot: [["number", "string", "number"], "boolean"],
        EPDFAnnot_SetOpacity: [["number", "number"], "boolean"],
        EPDFAnnot_SetTextAlignment: [["number", "number"], "boolean"],
        EPDFAnnot_SetVerticalAlignment: [["number", "number"], "boolean"],
        EPDFAnnot_SetVertices: [["number", "number", "number"], "boolean"],
        EPDFAnnot_UpdateAppearanceToRect: [["number", "number"], "boolean"],
        EPDFAttachment_GetDescription: [["number", "number", "number"], "number"],
        EPDFAttachment_GetIntegerValue: [["number", "string", "number"], "boolean"],
        EPDFAttachment_SetDescription: [["number", "number"], "boolean"],
        EPDFAttachment_SetSubtype: [["number", "string"], "boolean"],
        EPDFBookmark_AppendChild: [["number", "number", "number"], "number"],
        EPDFBookmark_Clear: [["number"], "boolean"],
        EPDFBookmark_ClearTarget: [["number"], "boolean"],
        EPDFBookmark_Create: [["number", "number"], "number"],
        EPDFBookmark_Delete: [["number", "number"], "boolean"],
        EPDFBookmark_InsertAfter: [["number", "number", "number", "number"], "number"],
        EPDFBookmark_SetAction: [["number", "number", "number"], "boolean"],
        EPDFBookmark_SetDest: [["number", "number", "number"], "boolean"],
        EPDFBookmark_SetTitle: [["number", "number"], "boolean"],
        EPDFCatalog_GetLanguage: [["number", "number", "number"], "number"],
        EPDFDest_CreateRemoteView: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        EPDFDest_CreateRemoteXYZ: [
          ["number", "number", "boolean", "number", "boolean", "number", "boolean", "number"],
          "number"
        ],
        EPDFDest_CreateView: [["number", "number", "number", "number"], "number"],
        EPDFDest_CreateXYZ: [
          ["number", "boolean", "number", "boolean", "number", "boolean", "number"],
          "number"
        ],
        EPDFNamedDest_Remove: [["number", "string"], "boolean"],
        EPDFNamedDest_SetDest: [["number", "string", "number"], "boolean"],
        EPDFPage_CreateAnnot: [["number", "number"], "number"],
        EPDFPage_GetAnnotByName: [["number", "number"], "number"],
        EPDFPage_GetAnnotCountRaw: [["number", "number"], "number"],
        EPDFPage_GetAnnotRaw: [["number", "number", "number"], "number"],
        EPDFPage_RemoveAnnotByName: [["number", "number"], "boolean"],
        EPDFPage_RemoveAnnotRaw: [["number", "number", "number"], "boolean"],
        EPDFText_RedactInQuads: [
          ["number", "number", "number", "boolean", "boolean"],
          "boolean"
        ],
        EPDFText_RedactInRect: [["number", "number", "boolean", "boolean"], "boolean"],
        FORM_CanRedo: [["number", "number"], "boolean"],
        FORM_CanUndo: [["number", "number"], "boolean"],
        FORM_DoDocumentAAction: [["number", "number"], null],
        FORM_DoDocumentJSAction: [["number"], null],
        FORM_DoDocumentOpenAction: [["number"], null],
        FORM_DoPageAAction: [["number", "number", "number"], null],
        FORM_ForceToKillFocus: [["number"], "boolean"],
        FORM_GetFocusedAnnot: [["number", "number", "number"], "boolean"],
        FORM_GetFocusedText: [["number", "number", "number", "number"], "number"],
        FORM_GetSelectedText: [["number", "number", "number", "number"], "number"],
        FORM_IsIndexSelected: [["number", "number", "number"], "boolean"],
        FORM_OnAfterLoadPage: [["number", "number"], null],
        FORM_OnBeforeClosePage: [["number", "number"], null],
        FORM_OnChar: [["number", "number", "number", "number"], "boolean"],
        FORM_OnFocus: [["number", "number", "number", "number", "number"], "boolean"],
        FORM_OnKeyDown: [["number", "number", "number", "number"], "boolean"],
        FORM_OnKeyUp: [["number", "number", "number", "number"], "boolean"],
        FORM_OnLButtonDoubleClick: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_OnLButtonDown: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_OnLButtonUp: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_OnMouseMove: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_OnMouseWheel: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_OnRButtonDown: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_OnRButtonUp: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FORM_Redo: [["number", "number"], "boolean"],
        FORM_ReplaceAndKeepSelection: [["number", "number", "number"], null],
        FORM_ReplaceSelection: [["number", "number", "number"], null],
        FORM_SelectAllText: [["number", "number"], "boolean"],
        FORM_SetFocusedAnnot: [["number", "number"], "boolean"],
        FORM_SetIndexSelected: [["number", "number", "number", "boolean"], "boolean"],
        FORM_Undo: [["number", "number"], "boolean"],
        FPDF_AddInstalledFont: [["number", "number", "number"], null],
        FPDF_CloseDocument: [["number"], null],
        FPDF_ClosePage: [["number"], null],
        FPDF_CloseXObject: [["number"], null],
        FPDF_CopyViewerPreferences: [["number", "number"], "boolean"],
        FPDF_CountNamedDests: [["number"], "number"],
        FPDF_CreateClipPath: [["number", "number", "number", "number"], "number"],
        FPDF_CreateNewDocument: [[], "number"],
        FPDF_DestroyClipPath: [["number"], null],
        FPDF_DestroyLibrary: [[], null],
        FPDF_DeviceToPage: [
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number"
          ],
          "boolean"
        ],
        FPDF_DocumentHasValidCrossReferenceTable: [["number"], "boolean"],
        FPDF_FFLDraw: [
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number"
          ],
          null
        ],
        FPDF_FreeDefaultSystemFontInfo: [["number"], null],
        FPDF_GetDefaultSystemFontInfo: [[], "number"],
        FPDF_GetDefaultTTFMap: [[], "number"],
        FPDF_GetDefaultTTFMapCount: [[], "number"],
        FPDF_GetDefaultTTFMapEntry: [["number"], "number"],
        FPDF_GetDocPermissions: [["number"], "number"],
        FPDF_GetDocUserPermissions: [["number"], "number"],
        FPDF_GetFileIdentifier: [["number", "number", "number", "number"], "number"],
        FPDF_GetFileVersion: [["number", "number"], "boolean"],
        FPDF_GetFormType: [["number"], "number"],
        FPDF_GetLastError: [[], "number"],
        FPDF_GetMetaText: [["number", "string", "number", "number"], "number"],
        FPDF_GetNamedDest: [["number", "number", "number", "number"], "number"],
        FPDF_GetNamedDestByName: [["number", "string"], "number"],
        FPDF_GetPageAAction: [["number", "number"], "number"],
        FPDF_GetPageBoundingBox: [["number", "number"], "boolean"],
        FPDF_GetPageCount: [["number"], "number"],
        FPDF_GetPageHeight: [["number"], "number"],
        FPDF_GetPageHeightF: [["number"], "number"],
        FPDF_GetPageLabel: [["number", "number", "number", "number"], "number"],
        FPDF_GetPageSizeByIndex: [["number", "number", "number", "number"], "number"],
        FPDF_GetPageSizeByIndexF: [["number", "number", "number"], "boolean"],
        FPDF_GetPageWidth: [["number"], "number"],
        FPDF_GetPageWidthF: [["number"], "number"],
        FPDF_GetSecurityHandlerRevision: [["number"], "number"],
        FPDF_GetSignatureCount: [["number"], "number"],
        FPDF_GetSignatureObject: [["number", "number"], "number"],
        FPDF_GetTrailerEnds: [["number", "number", "number"], "number"],
        FPDF_GetXFAPacketContent: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDF_GetXFAPacketCount: [["number"], "number"],
        FPDF_GetXFAPacketName: [["number", "number", "number", "number"], "number"],
        FPDF_ImportNPagesToOne: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        FPDF_ImportPages: [["number", "number", "string", "number"], "boolean"],
        FPDF_ImportPagesByIndex: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDF_InitLibrary: [[], null],
        FPDF_InitLibraryWithConfig: [["number"], null],
        FPDF_LoadCustomDocument: [["number", "string"], "number"],
        FPDF_LoadDocument: [["number", "string"], "number"],
        FPDF_LoadMemDocument: [["number", "number", "string"], "number"],
        FPDF_LoadMemDocument64: [["number", "number", "string"], "number"],
        FPDF_LoadPage: [["number", "number"], "number"],
        FPDF_LoadXFA: [["number"], "boolean"],
        FPDF_MovePages: [["number", "number", "number", "number"], "boolean"],
        FPDF_NewFormObjectFromXObject: [["number"], "number"],
        FPDF_NewXObjectFromPage: [["number", "number", "number"], "number"],
        FPDF_PageToDevice: [
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number"
          ],
          "boolean"
        ],
        FPDF_RemoveFormFieldHighlight: [["number"], null],
        FPDF_RenderPage_Close: [["number"], null],
        FPDF_RenderPage_Continue: [["number", "number"], "number"],
        FPDF_RenderPageBitmap: [
          ["number", "number", "number", "number", "number", "number", "number", "number"],
          null
        ],
        FPDF_RenderPageBitmap_Start: [
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number"
          ],
          "number"
        ],
        FPDF_RenderPageBitmapWithColorScheme_Start: [
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number"
          ],
          "number"
        ],
        FPDF_RenderPageBitmapWithMatrix: [
          ["number", "number", "number", "number", "number"],
          null
        ],
        FPDF_SaveAsCopy: [["number", "number", "number"], "boolean"],
        FPDF_SaveWithVersion: [["number", "number", "number", "number"], "boolean"],
        FPDF_SetFormFieldHighlightAlpha: [["number", "number"], null],
        FPDF_SetFormFieldHighlightColor: [["number", "number", "number"], null],
        FPDF_SetSandBoxPolicy: [["number", "boolean"], null],
        FPDF_SetSystemFontInfo: [["number"], null],
        FPDF_StructElement_Attr_CountChildren: [["number"], "number"],
        FPDF_StructElement_Attr_GetBlobValue: [
          ["number", "number", "number", "number"],
          "boolean"
        ],
        FPDF_StructElement_Attr_GetBooleanValue: [["number", "number"], "boolean"],
        FPDF_StructElement_Attr_GetChildAtIndex: [["number", "number"], "number"],
        FPDF_StructElement_Attr_GetCount: [["number"], "number"],
        FPDF_StructElement_Attr_GetName: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDF_StructElement_Attr_GetNumberValue: [["number", "number"], "boolean"],
        FPDF_StructElement_Attr_GetStringValue: [
          ["number", "number", "number", "number"],
          "boolean"
        ],
        FPDF_StructElement_Attr_GetType: [["number"], "number"],
        FPDF_StructElement_Attr_GetValue: [["number", "string"], "number"],
        FPDF_StructElement_CountChildren: [["number"], "number"],
        FPDF_StructElement_GetActualText: [["number", "number", "number"], "number"],
        FPDF_StructElement_GetAltText: [["number", "number", "number"], "number"],
        FPDF_StructElement_GetAttributeAtIndex: [["number", "number"], "number"],
        FPDF_StructElement_GetAttributeCount: [["number"], "number"],
        FPDF_StructElement_GetChildAtIndex: [["number", "number"], "number"],
        FPDF_StructElement_GetChildMarkedContentID: [["number", "number"], "number"],
        FPDF_StructElement_GetID: [["number", "number", "number"], "number"],
        FPDF_StructElement_GetLang: [["number", "number", "number"], "number"],
        FPDF_StructElement_GetMarkedContentID: [["number"], "number"],
        FPDF_StructElement_GetMarkedContentIdAtIndex: [["number", "number"], "number"],
        FPDF_StructElement_GetMarkedContentIdCount: [["number"], "number"],
        FPDF_StructElement_GetObjType: [["number", "number", "number"], "number"],
        FPDF_StructElement_GetParent: [["number"], "number"],
        FPDF_StructElement_GetStringAttribute: [
          ["number", "string", "number", "number"],
          "number"
        ],
        FPDF_StructElement_GetTitle: [["number", "number", "number"], "number"],
        FPDF_StructElement_GetType: [["number", "number", "number"], "number"],
        FPDF_StructTree_Close: [["number"], null],
        FPDF_StructTree_CountChildren: [["number"], "number"],
        FPDF_StructTree_GetChildAtIndex: [["number", "number"], "number"],
        FPDF_StructTree_GetForPage: [["number"], "number"],
        FPDF_VIEWERREF_GetDuplex: [["number"], "number"],
        FPDF_VIEWERREF_GetName: [["number", "string", "number", "number"], "number"],
        FPDF_VIEWERREF_GetNumCopies: [["number"], "number"],
        FPDF_VIEWERREF_GetPrintPageRange: [["number"], "number"],
        FPDF_VIEWERREF_GetPrintPageRangeCount: [["number"], "number"],
        FPDF_VIEWERREF_GetPrintPageRangeElement: [["number", "number"], "number"],
        FPDF_VIEWERREF_GetPrintScaling: [["number"], "boolean"],
        FPDFAction_GetDest: [["number", "number"], "number"],
        FPDFAction_GetFilePath: [["number", "number", "number"], "number"],
        FPDFAction_GetType: [["number"], "number"],
        FPDFAction_GetURIPath: [["number", "number", "number", "number"], "number"],
        FPDFAnnot_AddFileAttachment: [["number", "number"], "number"],
        FPDFAnnot_AddInkStroke: [["number", "number", "number"], "number"],
        FPDFAnnot_AppendAttachmentPoints: [["number", "number"], "boolean"],
        FPDFAnnot_AppendObject: [["number", "number"], "boolean"],
        FPDFAnnot_CountAttachmentPoints: [["number"], "number"],
        FPDFAnnot_GetAP: [["number", "number", "number", "number"], "number"],
        FPDFAnnot_GetAttachmentPoints: [["number", "number", "number"], "boolean"],
        FPDFAnnot_GetBorder: [["number", "number", "number", "number"], "boolean"],
        FPDFAnnot_GetColor: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFAnnot_GetFileAttachment: [["number"], "number"],
        FPDFAnnot_GetFlags: [["number"], "number"],
        FPDFAnnot_GetFocusableSubtypes: [["number", "number", "number"], "boolean"],
        FPDFAnnot_GetFocusableSubtypesCount: [["number"], "number"],
        FPDFAnnot_GetFontColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFAnnot_GetFontSize: [["number", "number", "number"], "boolean"],
        FPDFAnnot_GetFormAdditionalActionJavaScript: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        FPDFAnnot_GetFormControlCount: [["number", "number"], "number"],
        FPDFAnnot_GetFormControlIndex: [["number", "number"], "number"],
        FPDFAnnot_GetFormFieldAlternateName: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFAnnot_GetFormFieldAtPoint: [["number", "number", "number"], "number"],
        FPDFAnnot_GetFormFieldExportValue: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFAnnot_GetFormFieldFlags: [["number", "number"], "number"],
        FPDFAnnot_GetFormFieldName: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFAnnot_GetFormFieldType: [["number", "number"], "number"],
        FPDFAnnot_GetFormFieldValue: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFAnnot_GetInkListCount: [["number"], "number"],
        FPDFAnnot_GetInkListPath: [["number", "number", "number", "number"], "number"],
        FPDFAnnot_GetLine: [["number", "number", "number"], "boolean"],
        FPDFAnnot_GetLink: [["number"], "number"],
        FPDFAnnot_GetLinkedAnnot: [["number", "string"], "number"],
        FPDFAnnot_GetNumberValue: [["number", "string", "number"], "boolean"],
        FPDFAnnot_GetObject: [["number", "number"], "number"],
        FPDFAnnot_GetObjectCount: [["number"], "number"],
        FPDFAnnot_GetOptionCount: [["number", "number"], "number"],
        FPDFAnnot_GetOptionLabel: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        FPDFAnnot_GetRect: [["number", "number"], "boolean"],
        FPDFAnnot_GetStringValue: [["number", "string", "number", "number"], "number"],
        FPDFAnnot_GetSubtype: [["number"], "number"],
        FPDFAnnot_GetValueType: [["number", "string"], "number"],
        FPDFAnnot_GetVertices: [["number", "number", "number"], "number"],
        FPDFAnnot_HasAttachmentPoints: [["number"], "boolean"],
        FPDFAnnot_HasKey: [["number", "string"], "boolean"],
        FPDFAnnot_IsChecked: [["number", "number"], "boolean"],
        FPDFAnnot_IsObjectSupportedSubtype: [["number"], "boolean"],
        FPDFAnnot_IsOptionSelected: [["number", "number", "number"], "boolean"],
        FPDFAnnot_IsSupportedSubtype: [["number"], "boolean"],
        FPDFAnnot_RemoveInkList: [["number"], "boolean"],
        FPDFAnnot_RemoveObject: [["number", "number"], "boolean"],
        FPDFAnnot_SetAP: [["number", "number", "number"], "boolean"],
        FPDFAnnot_SetAttachmentPoints: [["number", "number", "number"], "boolean"],
        FPDFAnnot_SetBorder: [["number", "number", "number", "number"], "boolean"],
        FPDFAnnot_SetColor: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFAnnot_SetFlags: [["number", "number"], "boolean"],
        FPDFAnnot_SetFocusableSubtypes: [["number", "number", "number"], "boolean"],
        FPDFAnnot_SetFontColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFAnnot_SetFormFieldFlags: [["number", "number", "number"], "boolean"],
        FPDFAnnot_SetRect: [["number", "number"], "boolean"],
        FPDFAnnot_SetStringValue: [["number", "string", "number"], "boolean"],
        FPDFAnnot_SetURI: [["number", "number"], "boolean"],
        FPDFAnnot_UpdateObject: [["number", "number"], "boolean"],
        FPDFAttachment_GetFile: [["number", "number", "number", "number"], "boolean"],
        FPDFAttachment_GetName: [["number", "number", "number"], "number"],
        FPDFAttachment_GetStringValue: [
          ["number", "string", "number", "number"],
          "number"
        ],
        FPDFAttachment_GetSubtype: [["number", "number", "number"], "number"],
        FPDFAttachment_GetValueType: [["number", "string"], "number"],
        FPDFAttachment_HasKey: [["number", "string"], "boolean"],
        FPDFAttachment_SetFile: [["number", "number", "number", "number"], "boolean"],
        FPDFAttachment_SetStringValue: [["number", "string", "number"], "boolean"],
        FPDFAvail_Create: [["number", "number"], "number"],
        FPDFAvail_Destroy: [["number"], null],
        FPDFAvail_GetDocument: [["number", "string"], "number"],
        FPDFAvail_GetFirstPageNum: [["number"], "number"],
        FPDFAvail_IsDocAvail: [["number", "number"], "number"],
        FPDFAvail_IsFormAvail: [["number", "number"], "number"],
        FPDFAvail_IsLinearized: [["number"], "number"],
        FPDFAvail_IsPageAvail: [["number", "number", "number"], "number"],
        FPDFBitmap_Create: [["number", "number", "number"], "number"],
        FPDFBitmap_CreateEx: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        FPDFBitmap_Destroy: [["number"], null],
        FPDFBitmap_FillRect: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFBitmap_GetBuffer: [["number"], "number"],
        FPDFBitmap_GetFormat: [["number"], "number"],
        FPDFBitmap_GetHeight: [["number"], "number"],
        FPDFBitmap_GetStride: [["number"], "number"],
        FPDFBitmap_GetWidth: [["number"], "number"],
        FPDFBookmark_Find: [["number", "number"], "number"],
        FPDFBookmark_GetAction: [["number"], "number"],
        FPDFBookmark_GetCount: [["number"], "number"],
        FPDFBookmark_GetDest: [["number", "number"], "number"],
        FPDFBookmark_GetFirstChild: [["number", "number"], "number"],
        FPDFBookmark_GetNextSibling: [["number", "number"], "number"],
        FPDFBookmark_GetTitle: [["number", "number", "number"], "number"],
        FPDFCatalog_IsTagged: [["number"], "boolean"],
        FPDFCatalog_SetLanguage: [["number", "string"], "boolean"],
        FPDFClipPath_CountPaths: [["number"], "number"],
        FPDFClipPath_CountPathSegments: [["number", "number"], "number"],
        FPDFClipPath_GetPathSegment: [["number", "number", "number"], "number"],
        FPDFDest_GetDestPageIndex: [["number", "number"], "number"],
        FPDFDest_GetLocationInPage: [
          ["number", "number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFDest_GetView: [["number", "number", "number"], "number"],
        FPDFDoc_AddAttachment: [["number", "number"], "number"],
        FPDFDoc_CloseJavaScriptAction: [["number"], null],
        FPDFDoc_DeleteAttachment: [["number", "number"], "boolean"],
        FPDFDOC_ExitFormFillEnvironment: [["number"], null],
        FPDFDoc_GetAttachment: [["number", "number"], "number"],
        FPDFDoc_GetAttachmentCount: [["number"], "number"],
        FPDFDoc_GetJavaScriptAction: [["number", "number"], "number"],
        FPDFDoc_GetJavaScriptActionCount: [["number"], "number"],
        FPDFDoc_GetPageMode: [["number"], "number"],
        FPDFDOC_InitFormFillEnvironment: [["number", "number"], "number"],
        FPDFFont_Close: [["number"], null],
        FPDFFont_GetAscent: [["number", "number", "number"], "boolean"],
        FPDFFont_GetBaseFontName: [["number", "number", "number"], "number"],
        FPDFFont_GetDescent: [["number", "number", "number"], "boolean"],
        FPDFFont_GetFamilyName: [["number", "number", "number"], "number"],
        FPDFFont_GetFlags: [["number"], "number"],
        FPDFFont_GetFontData: [["number", "number", "number", "number"], "boolean"],
        FPDFFont_GetGlyphPath: [["number", "number", "number"], "number"],
        FPDFFont_GetGlyphWidth: [["number", "number", "number", "number"], "boolean"],
        FPDFFont_GetIsEmbedded: [["number"], "number"],
        FPDFFont_GetItalicAngle: [["number", "number"], "boolean"],
        FPDFFont_GetWeight: [["number"], "number"],
        FPDFFormObj_CountObjects: [["number"], "number"],
        FPDFFormObj_GetObject: [["number", "number"], "number"],
        FPDFFormObj_RemoveObject: [["number", "number"], "boolean"],
        FPDFGlyphPath_CountGlyphSegments: [["number"], "number"],
        FPDFGlyphPath_GetGlyphPathSegment: [["number", "number"], "number"],
        FPDFImageObj_GetBitmap: [["number"], "number"],
        FPDFImageObj_GetIccProfileDataDecoded: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFImageObj_GetImageDataDecoded: [["number", "number", "number"], "number"],
        FPDFImageObj_GetImageDataRaw: [["number", "number", "number"], "number"],
        FPDFImageObj_GetImageFilter: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFImageObj_GetImageFilterCount: [["number"], "number"],
        FPDFImageObj_GetImageMetadata: [["number", "number", "number"], "boolean"],
        FPDFImageObj_GetImagePixelSize: [["number", "number", "number"], "boolean"],
        FPDFImageObj_GetRenderedBitmap: [["number", "number", "number"], "number"],
        FPDFImageObj_LoadJpegFile: [
          ["number", "number", "number", "number"],
          "boolean"
        ],
        FPDFImageObj_LoadJpegFileInline: [
          ["number", "number", "number", "number"],
          "boolean"
        ],
        FPDFImageObj_SetBitmap: [["number", "number", "number", "number"], "boolean"],
        FPDFImageObj_SetMatrix: [
          ["number", "number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFJavaScriptAction_GetName: [["number", "number", "number"], "number"],
        FPDFJavaScriptAction_GetScript: [["number", "number", "number"], "number"],
        FPDFLink_CloseWebLinks: [["number"], null],
        FPDFLink_CountQuadPoints: [["number"], "number"],
        FPDFLink_CountRects: [["number", "number"], "number"],
        FPDFLink_CountWebLinks: [["number"], "number"],
        FPDFLink_Enumerate: [["number", "number", "number"], "boolean"],
        FPDFLink_GetAction: [["number"], "number"],
        FPDFLink_GetAnnot: [["number", "number"], "number"],
        FPDFLink_GetAnnotRect: [["number", "number"], "boolean"],
        FPDFLink_GetDest: [["number", "number"], "number"],
        FPDFLink_GetLinkAtPoint: [["number", "number", "number"], "number"],
        FPDFLink_GetLinkZOrderAtPoint: [["number", "number", "number"], "number"],
        FPDFLink_GetQuadPoints: [["number", "number", "number"], "boolean"],
        FPDFLink_GetRect: [
          ["number", "number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFLink_GetTextRange: [["number", "number", "number", "number"], "boolean"],
        FPDFLink_GetURL: [["number", "number", "number", "number"], "number"],
        FPDFLink_LoadWebLinks: [["number"], "number"],
        FPDFPage_CloseAnnot: [["number"], null],
        FPDFPage_CountObjects: [["number"], "number"],
        FPDFPage_CreateAnnot: [["number", "number"], "number"],
        FPDFPage_Delete: [["number", "number"], null],
        FPDFPage_Flatten: [["number", "number"], "number"],
        FPDFPage_FormFieldZOrderAtPoint: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFPage_GenerateContent: [["number"], "boolean"],
        FPDFPage_GetAnnot: [["number", "number"], "number"],
        FPDFPage_GetAnnotCount: [["number"], "number"],
        FPDFPage_GetAnnotIndex: [["number", "number"], "number"],
        FPDFPage_GetArtBox: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPage_GetBleedBox: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPage_GetCropBox: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPage_GetDecodedThumbnailData: [["number", "number", "number"], "number"],
        FPDFPage_GetMediaBox: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPage_GetObject: [["number", "number"], "number"],
        FPDFPage_GetRawThumbnailData: [["number", "number", "number"], "number"],
        FPDFPage_GetRotation: [["number"], "number"],
        FPDFPage_GetThumbnailAsBitmap: [["number"], "number"],
        FPDFPage_GetTrimBox: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPage_HasFormFieldAtPoint: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFPage_HasTransparency: [["number"], "boolean"],
        FPDFPage_InsertClipPath: [["number", "number"], null],
        FPDFPage_InsertObject: [["number", "number"], null],
        FPDFPage_InsertObjectAtIndex: [["number", "number", "number"], "boolean"],
        FPDFPage_New: [["number", "number", "number", "number"], "number"],
        FPDFPage_RemoveAnnot: [["number", "number"], "boolean"],
        FPDFPage_RemoveObject: [["number", "number"], "boolean"],
        FPDFPage_SetArtBox: [["number", "number", "number", "number", "number"], null],
        FPDFPage_SetBleedBox: [
          ["number", "number", "number", "number", "number"],
          null
        ],
        FPDFPage_SetCropBox: [["number", "number", "number", "number", "number"], null],
        FPDFPage_SetMediaBox: [
          ["number", "number", "number", "number", "number"],
          null
        ],
        FPDFPage_SetRotation: [["number", "number"], null],
        FPDFPage_SetTrimBox: [["number", "number", "number", "number", "number"], null],
        FPDFPage_TransformAnnots: [
          ["number", "number", "number", "number", "number", "number", "number"],
          null
        ],
        FPDFPage_TransFormWithClip: [["number", "number", "number"], "boolean"],
        FPDFPageObj_AddMark: [["number", "string"], "number"],
        FPDFPageObj_CountMarks: [["number"], "number"],
        FPDFPageObj_CreateNewPath: [["number", "number"], "number"],
        FPDFPageObj_CreateNewRect: [["number", "number", "number", "number"], "number"],
        FPDFPageObj_CreateTextObj: [["number", "number", "number"], "number"],
        FPDFPageObj_Destroy: [["number"], null],
        FPDFPageObj_GetBounds: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObj_GetClipPath: [["number"], "number"],
        FPDFPageObj_GetDashArray: [["number", "number", "number"], "boolean"],
        FPDFPageObj_GetDashCount: [["number"], "number"],
        FPDFPageObj_GetDashPhase: [["number", "number"], "boolean"],
        FPDFPageObj_GetFillColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObj_GetIsActive: [["number", "number"], "boolean"],
        FPDFPageObj_GetLineCap: [["number"], "number"],
        FPDFPageObj_GetLineJoin: [["number"], "number"],
        FPDFPageObj_GetMark: [["number", "number"], "number"],
        FPDFPageObj_GetMarkedContentID: [["number"], "number"],
        FPDFPageObj_GetMatrix: [["number", "number"], "boolean"],
        FPDFPageObj_GetRotatedBounds: [["number", "number"], "boolean"],
        FPDFPageObj_GetStrokeColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObj_GetStrokeWidth: [["number", "number"], "boolean"],
        FPDFPageObj_GetType: [["number"], "number"],
        FPDFPageObj_HasTransparency: [["number"], "boolean"],
        FPDFPageObj_NewImageObj: [["number"], "number"],
        FPDFPageObj_NewTextObj: [["number", "string", "number"], "number"],
        FPDFPageObj_RemoveMark: [["number", "number"], "boolean"],
        FPDFPageObj_SetBlendMode: [["number", "string"], null],
        FPDFPageObj_SetDashArray: [["number", "number", "number", "number"], "boolean"],
        FPDFPageObj_SetDashPhase: [["number", "number"], "boolean"],
        FPDFPageObj_SetFillColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObj_SetIsActive: [["number", "boolean"], "boolean"],
        FPDFPageObj_SetLineCap: [["number", "number"], "boolean"],
        FPDFPageObj_SetLineJoin: [["number", "number"], "boolean"],
        FPDFPageObj_SetMatrix: [["number", "number"], "boolean"],
        FPDFPageObj_SetStrokeColor: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObj_SetStrokeWidth: [["number", "number"], "boolean"],
        FPDFPageObj_Transform: [
          ["number", "number", "number", "number", "number", "number", "number"],
          null
        ],
        FPDFPageObj_TransformClipPath: [
          ["number", "number", "number", "number", "number", "number", "number"],
          null
        ],
        FPDFPageObj_TransformF: [["number", "number"], "boolean"],
        FPDFPageObjMark_CountParams: [["number"], "number"],
        FPDFPageObjMark_GetName: [["number", "number", "number", "number"], "boolean"],
        FPDFPageObjMark_GetParamBlobValue: [
          ["number", "string", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObjMark_GetParamIntValue: [["number", "string", "number"], "boolean"],
        FPDFPageObjMark_GetParamKey: [
          ["number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObjMark_GetParamStringValue: [
          ["number", "string", "number", "number", "number"],
          "boolean"
        ],
        FPDFPageObjMark_GetParamValueType: [["number", "string"], "number"],
        FPDFPageObjMark_RemoveParam: [["number", "number", "string"], "boolean"],
        FPDFPageObjMark_SetBlobParam: [
          ["number", "number", "number", "string", "number", "number"],
          "boolean"
        ],
        FPDFPageObjMark_SetIntParam: [
          ["number", "number", "number", "string", "number"],
          "boolean"
        ],
        FPDFPageObjMark_SetStringParam: [
          ["number", "number", "number", "string", "string"],
          "boolean"
        ],
        FPDFPath_BezierTo: [
          ["number", "number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFPath_Close: [["number"], "boolean"],
        FPDFPath_CountSegments: [["number"], "number"],
        FPDFPath_GetDrawMode: [["number", "number", "number"], "boolean"],
        FPDFPath_GetPathSegment: [["number", "number"], "number"],
        FPDFPath_LineTo: [["number", "number", "number"], "boolean"],
        FPDFPath_MoveTo: [["number", "number", "number"], "boolean"],
        FPDFPath_SetDrawMode: [["number", "number", "boolean"], "boolean"],
        FPDFPathSegment_GetClose: [["number"], "boolean"],
        FPDFPathSegment_GetPoint: [["number", "number", "number"], "boolean"],
        FPDFPathSegment_GetType: [["number"], "number"],
        FPDFSignatureObj_GetByteRange: [["number", "number", "number"], "number"],
        FPDFSignatureObj_GetContents: [["number", "number", "number"], "number"],
        FPDFSignatureObj_GetDocMDPPermission: [["number"], "number"],
        FPDFSignatureObj_GetReason: [["number", "number", "number"], "number"],
        FPDFSignatureObj_GetSubFilter: [["number", "number", "number"], "number"],
        FPDFSignatureObj_GetTime: [["number", "number", "number"], "number"],
        FPDFText_ClosePage: [["number"], null],
        FPDFText_CountChars: [["number"], "number"],
        FPDFText_CountRects: [["number", "number", "number"], "number"],
        FPDFText_FindClose: [["number"], null],
        FPDFText_FindNext: [["number"], "boolean"],
        FPDFText_FindPrev: [["number"], "boolean"],
        FPDFText_FindStart: [["number", "number", "number", "number"], "number"],
        FPDFText_GetBoundedText: [
          ["number", "number", "number", "number", "number", "number", "number"],
          "number"
        ],
        FPDFText_GetCharAngle: [["number", "number"], "number"],
        FPDFText_GetCharBox: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFText_GetCharIndexAtPos: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        FPDFText_GetCharIndexFromTextIndex: [["number", "number"], "number"],
        FPDFText_GetCharOrigin: [["number", "number", "number", "number"], "boolean"],
        FPDFText_GetFillColor: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFText_GetFontInfo: [
          ["number", "number", "number", "number", "number"],
          "number"
        ],
        FPDFText_GetFontSize: [["number", "number"], "number"],
        FPDFText_GetFontWeight: [["number", "number"], "number"],
        FPDFText_GetLooseCharBox: [["number", "number", "number"], "boolean"],
        FPDFText_GetMatrix: [["number", "number", "number"], "boolean"],
        FPDFText_GetRect: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFText_GetSchCount: [["number"], "number"],
        FPDFText_GetSchResultIndex: [["number"], "number"],
        FPDFText_GetStrokeColor: [
          ["number", "number", "number", "number", "number", "number"],
          "boolean"
        ],
        FPDFText_GetText: [["number", "number", "number", "number"], "number"],
        FPDFText_GetTextIndexFromCharIndex: [["number", "number"], "number"],
        FPDFText_GetTextObject: [["number", "number"], "number"],
        FPDFText_GetUnicode: [["number", "number"], "number"],
        FPDFText_HasUnicodeMapError: [["number", "number"], "number"],
        FPDFText_IsGenerated: [["number", "number"], "number"],
        FPDFText_IsHyphen: [["number", "number"], "number"],
        FPDFText_LoadCidType2Font: [
          ["number", "number", "number", "string", "number", "number"],
          "number"
        ],
        FPDFText_LoadFont: [
          ["number", "number", "number", "number", "boolean"],
          "number"
        ],
        FPDFText_LoadPage: [["number"], "number"],
        FPDFText_LoadStandardFont: [["number", "string"], "number"],
        FPDFText_SetCharcodes: [["number", "number", "number"], "boolean"],
        FPDFText_SetText: [["number", "number"], "boolean"],
        FPDFTextObj_GetFont: [["number"], "number"],
        FPDFTextObj_GetFontSize: [["number", "number"], "boolean"],
        FPDFTextObj_GetRenderedBitmap: [
          ["number", "number", "number", "number"],
          "number"
        ],
        FPDFTextObj_GetText: [["number", "number", "number", "number"], "number"],
        FPDFTextObj_GetTextRenderMode: [["number"], "number"],
        FPDFTextObj_SetTextRenderMode: [["number", "number"], "boolean"],
        PDFiumExt_CloseFileWriter: [["number"], null],
        PDFiumExt_CloseFormFillInfo: [["number"], null],
        PDFiumExt_ExitFormFillEnvironment: [["number"], null],
        PDFiumExt_GetFileWriterData: [["number", "number", "number"], "number"],
        PDFiumExt_GetFileWriterSize: [["number"], "number"],
        PDFiumExt_Init: [[], null],
        PDFiumExt_InitFormFillEnvironment: [["number", "number"], "number"],
        PDFiumExt_OpenFileWriter: [[], "number"],
        PDFiumExt_OpenFormFillInfo: [[], "number"],
        PDFiumExt_SaveAsCopy: [["number", "number"], "number"]
      };
      DEFAULT_PDFIUM_WASM_URL = "https://cdn.jsdelivr.net/npm/@embedpdf/pdfium@2.2.0/dist/pdfium.wasm";
    }
  });

  // node_modules/@hotwired/stimulus/dist/stimulus.js
  var EventListener = class {
    constructor(eventTarget, eventName, eventOptions) {
      this.eventTarget = eventTarget;
      this.eventName = eventName;
      this.eventOptions = eventOptions;
      this.unorderedBindings = /* @__PURE__ */ new Set();
    }
    connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
      const extendedEvent = extendEvent(event);
      for (const binding of this.bindings) {
        if (extendedEvent.immediatePropagationStopped) {
          break;
        } else {
          binding.handleEvent(extendedEvent);
        }
      }
    }
    hasBindings() {
      return this.unorderedBindings.size > 0;
    }
    get bindings() {
      return Array.from(this.unorderedBindings).sort((left2, right2) => {
        const leftIndex = left2.index, rightIndex = right2.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  };
  function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
      return event;
    } else {
      const { stopImmediatePropagation } = event;
      return Object.assign(event, {
        immediatePropagationStopped: false,
        stopImmediatePropagation() {
          this.immediatePropagationStopped = true;
          stopImmediatePropagation.call(this);
        }
      });
    }
  }
  var Dispatcher = class {
    constructor(application2) {
      this.application = application2;
      this.eventListenerMaps = /* @__PURE__ */ new Map();
      this.started = false;
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach((eventListener) => eventListener.connect());
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach((eventListener) => eventListener.disconnect());
      }
    }
    get eventListeners() {
      return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding, clearEventListeners = false) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
      if (clearEventListeners)
        this.clearEventListenersForBinding(binding);
    }
    handleError(error3, message, detail = {}) {
      this.application.handleError(error3, `Error ${message}`, detail);
    }
    clearEventListenersForBinding(binding) {
      const eventListener = this.fetchEventListenerForBinding(binding);
      if (!eventListener.hasBindings()) {
        eventListener.disconnect();
        this.removeMappedEventListenerFor(binding);
      }
    }
    removeMappedEventListenerFor(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      eventListenerMap.delete(cacheKey);
      if (eventListenerMap.size == 0)
        this.eventListenerMaps.delete(eventTarget);
    }
    fetchEventListenerForBinding(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      let eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
      const eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
      let eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = /* @__PURE__ */ new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
      const parts = [eventName];
      Object.keys(eventOptions).sort().forEach((key) => {
        parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
      });
      return parts.join(":");
    }
  };
  var defaultActionDescriptorFilters = {
    stop({ event, value }) {
      if (value)
        event.stopPropagation();
      return true;
    },
    prevent({ event, value }) {
      if (value)
        event.preventDefault();
      return true;
    },
    self({ event, value, element }) {
      if (value) {
        return element === event.target;
      } else {
        return true;
      }
    }
  };
  var descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
  function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    let eventName = matches[2];
    let keyFilter = matches[3];
    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
      eventName += `.${keyFilter}`;
      keyFilter = "";
    }
    return {
      eventTarget: parseEventTarget(matches[4]),
      eventName,
      eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
      identifier: matches[5],
      methodName: matches[6],
      keyFilter: matches[1] || keyFilter
    };
  }
  function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
      return window;
    } else if (eventTargetName == "document") {
      return document;
    }
  }
  function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
  }
  function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
      return "window";
    } else if (eventTarget == document) {
      return "document";
    }
  }
  function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function namespaceCamelize(value) {
    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
  }
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
  }
  function isSomething(object) {
    return object !== null && object !== void 0;
  }
  function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  var allModifiers = ["meta", "ctrl", "alt", "shift"];
  var Action = class {
    constructor(element, index, descriptor, schema) {
      this.element = element;
      this.index = index;
      this.eventTarget = descriptor.eventTarget || element;
      this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error2("missing event name");
      this.eventOptions = descriptor.eventOptions || {};
      this.identifier = descriptor.identifier || error2("missing identifier");
      this.methodName = descriptor.methodName || error2("missing method name");
      this.keyFilter = descriptor.keyFilter || "";
      this.schema = schema;
    }
    static forToken(token, schema) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
    toString() {
      const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
      const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
      return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
    }
    shouldIgnoreKeyboardEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = this.keyFilter.split("+");
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      const standardFilter = filters.filter((key) => !allModifiers.includes(key))[0];
      if (!standardFilter) {
        return false;
      }
      if (!hasProperty(this.keyMappings, standardFilter)) {
        error2(`contains unknown key filter: ${this.keyFilter}`);
      }
      return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
    shouldIgnoreMouseEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = [this.keyFilter];
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      return false;
    }
    get params() {
      const params = {};
      const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
      for (const { name, value } of Array.from(this.element.attributes)) {
        const match = name.match(pattern);
        const key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
    get eventTargetName() {
      return stringifyEventTarget(this.eventTarget);
    }
    get keyMappings() {
      return this.schema.keyMappings;
    }
    keyFilterDissatisfied(event, filters) {
      const [meta, ctrl, alt, shift] = allModifiers.map((modifier) => filters.includes(modifier));
      return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
  };
  var defaultEventNames = {
    a: () => "click",
    button: () => "click",
    form: () => "submit",
    details: () => "toggle",
    input: (e) => e.getAttribute("type") == "submit" ? "click" : "input",
    select: () => "change",
    textarea: () => "input"
  };
  function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
      return defaultEventNames[tagName](element);
    }
  }
  function error2(message) {
    throw new Error(message);
  }
  function typecast(value) {
    try {
      return JSON.parse(value);
    } catch (o_O) {
      return value;
    }
  }
  var Binding = class {
    constructor(context, action) {
      this.context = context;
      this.action = action;
    }
    get index() {
      return this.action.index;
    }
    get eventTarget() {
      return this.action.eventTarget;
    }
    get eventOptions() {
      return this.action.eventOptions;
    }
    get identifier() {
      return this.context.identifier;
    }
    handleEvent(event) {
      const actionEvent = this.prepareActionEvent(event);
      if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
        this.invokeWithEvent(actionEvent);
      }
    }
    get eventName() {
      return this.action.eventName;
    }
    get method() {
      const method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    applyEventModifiers(event) {
      const { element } = this.action;
      const { actionDescriptorFilters } = this.context.application;
      const { controller } = this.context;
      let passes = true;
      for (const [name, value] of Object.entries(this.eventOptions)) {
        if (name in actionDescriptorFilters) {
          const filter = actionDescriptorFilters[name];
          passes = passes && filter({ name, value, event, element, controller });
        } else {
          continue;
        }
      }
      return passes;
    }
    prepareActionEvent(event) {
      return Object.assign(event, { params: this.action.params });
    }
    invokeWithEvent(event) {
      const { target, currentTarget } = event;
      try {
        this.method.call(this.controller, event);
        this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
      } catch (error3) {
        const { identifier, controller, element, index } = this;
        const detail = { identifier, controller, element, index, event };
        this.context.handleError(error3, `invoking action "${this.action}"`, detail);
      }
    }
    willBeInvokedByEvent(event) {
      const eventTarget = event.target;
      if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
        return false;
      }
      if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
        return false;
      }
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
    get controller() {
      return this.context.controller;
    }
    get methodName() {
      return this.action.methodName;
    }
    get element() {
      return this.scope.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  var ElementObserver = class {
    constructor(element, delegate) {
      this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
      this.element = element;
      this.started = false;
      this.delegate = delegate;
      this.elements = /* @__PURE__ */ new Set();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
    pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        const matches = new Set(this.matchElementsInTree());
        for (const element of Array.from(this.elements)) {
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (const element of Array.from(matches)) {
          this.addElement(element);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
    processAttributeChange(element, attributeName) {
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
    processRemovedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
    processAddedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
    matchElement(element) {
      return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
      return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
      for (const element of this.matchElementsInTree(tree)) {
        processor.call(this, element);
      }
    }
    elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
    elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
    addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
    removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  };
  var AttributeObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeName = attributeName;
      this.delegate = delegate;
      this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
      return this.elementObserver.element;
    }
    get selector() {
      return `[${this.attributeName}]`;
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get started() {
      return this.elementObserver.started;
    }
    matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
      const match = this.matchElement(tree) ? [tree] : [];
      const matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
    elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
    elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
    elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  };
  function add(map, key, value) {
    fetch2(map, key).add(value);
  }
  function del(map, key, value) {
    fetch2(map, key).delete(value);
    prune(map, key);
  }
  function fetch2(map, key) {
    let values = map.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      map.set(key, values);
    }
    return values;
  }
  function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) {
      map.delete(key);
    }
  }
  var Multimap = class {
    constructor() {
      this.valuesByKey = /* @__PURE__ */ new Map();
    }
    get keys() {
      return Array.from(this.valuesByKey.keys());
    }
    get values() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((values, set3) => values.concat(Array.from(set3)), []);
    }
    get size() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((size2, set3) => size2 + set3.size, 0);
    }
    add(key, value) {
      add(this.valuesByKey, key, value);
    }
    delete(key, value) {
      del(this.valuesByKey, key, value);
    }
    has(key, value) {
      const values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
    hasKey(key) {
      return this.valuesByKey.has(key);
    }
    hasValue(value) {
      const sets = Array.from(this.valuesByKey.values());
      return sets.some((set3) => set3.has(value));
    }
    getValuesForKey(key) {
      const values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(([_key, values]) => values.has(value)).map(([key, _values]) => key);
    }
  };
  var SelectorObserver = class {
    constructor(element, selector, delegate, details) {
      this._selector = selector;
      this.details = details;
      this.elementObserver = new ElementObserver(element, this);
      this.delegate = delegate;
      this.matchesByElement = new Multimap();
    }
    get started() {
      return this.elementObserver.started;
    }
    get selector() {
      return this._selector;
    }
    set selector(selector) {
      this._selector = selector;
      this.refresh();
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get element() {
      return this.elementObserver.element;
    }
    matchElement(element) {
      const { selector } = this;
      if (selector) {
        const matches = element.matches(selector);
        if (this.delegate.selectorMatchElement) {
          return matches && this.delegate.selectorMatchElement(element, this.details);
        }
        return matches;
      } else {
        return false;
      }
    }
    matchElementsInTree(tree) {
      const { selector } = this;
      if (selector) {
        const match = this.matchElement(tree) ? [tree] : [];
        const matches = Array.from(tree.querySelectorAll(selector)).filter((match2) => this.matchElement(match2));
        return match.concat(matches);
      } else {
        return [];
      }
    }
    elementMatched(element) {
      const { selector } = this;
      if (selector) {
        this.selectorMatched(element, selector);
      }
    }
    elementUnmatched(element) {
      const selectors = this.matchesByElement.getKeysForValue(element);
      for (const selector of selectors) {
        this.selectorUnmatched(element, selector);
      }
    }
    elementAttributeChanged(element, _attributeName) {
      const { selector } = this;
      if (selector) {
        const matches = this.matchElement(element);
        const matchedBefore = this.matchesByElement.has(selector, element);
        if (matches && !matchedBefore) {
          this.selectorMatched(element, selector);
        } else if (!matches && matchedBefore) {
          this.selectorUnmatched(element, selector);
        }
      }
    }
    selectorMatched(element, selector) {
      this.delegate.selectorMatched(element, selector, this.details);
      this.matchesByElement.add(selector, element);
    }
    selectorUnmatched(element, selector) {
      this.delegate.selectorUnmatched(element, selector, this.details);
      this.matchesByElement.delete(selector, element);
    }
  };
  var StringMapObserver = class {
    constructor(element, delegate) {
      this.element = element;
      this.delegate = delegate;
      this.started = false;
      this.stringMap = /* @__PURE__ */ new Map();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
        this.refresh();
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        for (const attributeName of this.knownAttributeNames) {
          this.refreshAttribute(attributeName, null);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      const attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
    refreshAttribute(attributeName, oldValue) {
      const key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        const value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          const oldValue2 = this.stringMap.get(attributeName);
          this.stringMap.delete(attributeName);
          if (oldValue2)
            this.stringMapKeyRemoved(key, attributeName, oldValue2);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
    stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
    stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
    get knownAttributeNames() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
      return Array.from(this.element.attributes).map((attribute) => attribute.name);
    }
    get recordedAttributeNames() {
      return Array.from(this.stringMap.keys());
    }
  };
  var TokenListObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeObserver = new AttributeObserver(element, attributeName, this);
      this.delegate = delegate;
      this.tokensByElement = new Multimap();
    }
    get started() {
      return this.attributeObserver.started;
    }
    start() {
      this.attributeObserver.start();
    }
    pause(callback) {
      this.attributeObserver.pause(callback);
    }
    stop() {
      this.attributeObserver.stop();
    }
    refresh() {
      this.attributeObserver.refresh();
    }
    get element() {
      return this.attributeObserver.element;
    }
    get attributeName() {
      return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
      const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
      tokens.forEach((token) => this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
      tokens.forEach((token) => this.tokenUnmatched(token));
    }
    tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
      const previousTokens = this.tokensByElement.getValuesForKey(element);
      const currentTokens = this.readTokensForElement(element);
      const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
    readTokensForElement(element) {
      const attributeName = this.attributeName;
      const tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  };
  function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content) => content.length).map((content, index) => ({ element, attributeName, content, index }));
  }
  function zip(left2, right2) {
    const length = Math.max(left2.length, right2.length);
    return Array.from({ length }, (_, index) => [left2[index], right2[index]]);
  }
  function tokensAreEqual(left2, right2) {
    return left2 && right2 && left2.index == right2.index && left2.content == right2.content;
  }
  var ValueListObserver = class {
    constructor(element, attributeName, delegate) {
      this.tokenListObserver = new TokenListObserver(element, attributeName, this);
      this.delegate = delegate;
      this.parseResultsByToken = /* @__PURE__ */ new WeakMap();
      this.valuesByTokenByElement = /* @__PURE__ */ new WeakMap();
    }
    get started() {
      return this.tokenListObserver.started;
    }
    start() {
      this.tokenListObserver.start();
    }
    stop() {
      this.tokenListObserver.stop();
    }
    refresh() {
      this.tokenListObserver.refresh();
    }
    get element() {
      return this.tokenListObserver.element;
    }
    get attributeName() {
      return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
    tokenUnmatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
    fetchParseResultForToken(token) {
      let parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
    fetchValuesByTokenForElement(element) {
      let valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = /* @__PURE__ */ new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
    parseToken(token) {
      try {
        const value = this.delegate.parseValueForToken(token);
        return { value };
      } catch (error3) {
        return { error: error3 };
      }
    }
  };
  var BindingObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.bindingsByAction = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
    stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
    get element() {
      return this.context.element;
    }
    get identifier() {
      return this.context.identifier;
    }
    get actionAttribute() {
      return this.schema.actionAttribute;
    }
    get schema() {
      return this.context.schema;
    }
    get bindings() {
      return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
      const binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
      const binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
    disconnectAllActions() {
      this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding, true));
      this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
      const action = Action.forToken(token, this.schema);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
    elementMatchedValue(element, action) {
      this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  };
  var ValueObserver = class {
    constructor(context, receiver) {
      this.context = context;
      this.receiver = receiver;
      this.stringMapObserver = new StringMapObserver(this.element, this);
      this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
      this.stringMapObserver.stop();
    }
    get element() {
      return this.context.element;
    }
    get controller() {
      return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
    stringMapKeyAdded(key, attributeName) {
      const descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
    stringMapValueChanged(value, name, oldValue) {
      const descriptor = this.valueDescriptorNameMap[name];
      if (value === null)
        return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      const descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
    invokeChangedCallbacksForDefaultValues() {
      for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
        if (defaultValue != void 0 && !this.controller.data.has(key)) {
          this.invokeChangedCallback(name, writer(defaultValue), void 0);
        }
      }
    }
    invokeChangedCallback(name, rawValue2, rawOldValue) {
      const changedMethodName = `${name}Changed`;
      const changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        const descriptor = this.valueDescriptorNameMap[name];
        try {
          const value = descriptor.reader(rawValue2);
          let oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error3) {
          if (error3 instanceof TypeError) {
            error3.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error3.message}`;
          }
          throw error3;
        }
      }
    }
    get valueDescriptors() {
      const { valueDescriptorMap } = this;
      return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
      const descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach((key) => {
        const descriptor = this.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
    hasValue(attributeName) {
      const descriptor = this.valueDescriptorNameMap[attributeName];
      const hasMethodName = `has${capitalize(descriptor.name)}`;
      return this.receiver[hasMethodName];
    }
  };
  var TargetObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.targetsByName = new Multimap();
    }
    start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
    stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
    tokenMatched({ element, content: name }) {
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
    tokenUnmatched({ element, content: name }) {
      this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
      }
    }
    disconnectTarget(element, name) {
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
      }
    }
    disconnectAllTargets() {
      for (const name of this.targetsByName.keys) {
        for (const element of this.targetsByName.getValuesForKey(name)) {
          this.disconnectTarget(element, name);
        }
      }
    }
    get attributeName() {
      return `data-${this.context.identifier}-target`;
    }
    get element() {
      return this.context.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  var OutletObserver = class {
    constructor(context, delegate) {
      this.started = false;
      this.context = context;
      this.delegate = delegate;
      this.outletsByName = new Multimap();
      this.outletElementsByName = new Multimap();
      this.selectorObserverMap = /* @__PURE__ */ new Map();
      this.attributeObserverMap = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.started) {
        this.outletDefinitions.forEach((outletName) => {
          this.setupSelectorObserverForOutlet(outletName);
          this.setupAttributeObserverForOutlet(outletName);
        });
        this.started = true;
        this.dependentContexts.forEach((context) => context.refresh());
      }
    }
    refresh() {
      this.selectorObserverMap.forEach((observer2) => observer2.refresh());
      this.attributeObserverMap.forEach((observer2) => observer2.refresh());
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.disconnectAllOutlets();
        this.stopSelectorObservers();
        this.stopAttributeObservers();
      }
    }
    stopSelectorObservers() {
      if (this.selectorObserverMap.size > 0) {
        this.selectorObserverMap.forEach((observer2) => observer2.stop());
        this.selectorObserverMap.clear();
      }
    }
    stopAttributeObservers() {
      if (this.attributeObserverMap.size > 0) {
        this.attributeObserverMap.forEach((observer2) => observer2.stop());
        this.attributeObserverMap.clear();
      }
    }
    selectorMatched(element, _selector, { outletName }) {
      const outlet = this.getOutlet(element, outletName);
      if (outlet) {
        this.connectOutlet(outlet, element, outletName);
      }
    }
    selectorUnmatched(element, _selector, { outletName }) {
      const outlet = this.getOutletFromMap(element, outletName);
      if (outlet) {
        this.disconnectOutlet(outlet, element, outletName);
      }
    }
    selectorMatchElement(element, { outletName }) {
      const selector = this.selector(outletName);
      const hasOutlet = this.hasOutlet(element, outletName);
      const hasOutletController = element.matches(`[${this.schema.controllerAttribute}~=${outletName}]`);
      if (selector) {
        return hasOutlet && hasOutletController && element.matches(selector);
      } else {
        return false;
      }
    }
    elementMatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementAttributeValueChanged(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementUnmatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    connectOutlet(outlet, element, outletName) {
      var _a;
      if (!this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.add(outletName, outlet);
        this.outletElementsByName.add(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletConnected(outlet, element, outletName));
      }
    }
    disconnectOutlet(outlet, element, outletName) {
      var _a;
      if (this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.delete(outletName, outlet);
        this.outletElementsByName.delete(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletDisconnected(outlet, element, outletName));
      }
    }
    disconnectAllOutlets() {
      for (const outletName of this.outletElementsByName.keys) {
        for (const element of this.outletElementsByName.getValuesForKey(outletName)) {
          for (const outlet of this.outletsByName.getValuesForKey(outletName)) {
            this.disconnectOutlet(outlet, element, outletName);
          }
        }
      }
    }
    updateSelectorObserverForOutlet(outletName) {
      const observer2 = this.selectorObserverMap.get(outletName);
      if (observer2) {
        observer2.selector = this.selector(outletName);
      }
    }
    setupSelectorObserverForOutlet(outletName) {
      const selector = this.selector(outletName);
      const selectorObserver = new SelectorObserver(document.body, selector, this, { outletName });
      this.selectorObserverMap.set(outletName, selectorObserver);
      selectorObserver.start();
    }
    setupAttributeObserverForOutlet(outletName) {
      const attributeName = this.attributeNameForOutletName(outletName);
      const attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
      this.attributeObserverMap.set(outletName, attributeObserver);
      attributeObserver.start();
    }
    selector(outletName) {
      return this.scope.outlets.getSelectorForOutletName(outletName);
    }
    attributeNameForOutletName(outletName) {
      return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
    getOutletNameFromOutletAttributeName(attributeName) {
      return this.outletDefinitions.find((outletName) => this.attributeNameForOutletName(outletName) === attributeName);
    }
    get outletDependencies() {
      const dependencies = new Multimap();
      this.router.modules.forEach((module) => {
        const constructor = module.definition.controllerConstructor;
        const outlets = readInheritableStaticArrayValues(constructor, "outlets");
        outlets.forEach((outlet) => dependencies.add(outlet, module.identifier));
      });
      return dependencies;
    }
    get outletDefinitions() {
      return this.outletDependencies.getKeysForValue(this.identifier);
    }
    get dependentControllerIdentifiers() {
      return this.outletDependencies.getValuesForKey(this.identifier);
    }
    get dependentContexts() {
      const identifiers = this.dependentControllerIdentifiers;
      return this.router.contexts.filter((context) => identifiers.includes(context.identifier));
    }
    hasOutlet(element, outletName) {
      return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
    getOutlet(element, outletName) {
      return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
    getOutletFromMap(element, outletName) {
      return this.outletsByName.getValuesForKey(outletName).find((outlet) => outlet.element === element);
    }
    get scope() {
      return this.context.scope;
    }
    get schema() {
      return this.context.schema;
    }
    get identifier() {
      return this.context.identifier;
    }
    get application() {
      return this.context.application;
    }
    get router() {
      return this.application.router;
    }
  };
  var Context = class {
    constructor(module, scope2) {
      this.logDebugActivity = (functionName, detail = {}) => {
        const { identifier, controller, element } = this;
        detail = Object.assign({ identifier, controller, element }, detail);
        this.application.logDebugActivity(this.identifier, functionName, detail);
      };
      this.module = module;
      this.scope = scope2;
      this.controller = new module.controllerConstructor(this);
      this.bindingObserver = new BindingObserver(this, this.dispatcher);
      this.valueObserver = new ValueObserver(this, this.controller);
      this.targetObserver = new TargetObserver(this, this);
      this.outletObserver = new OutletObserver(this, this);
      try {
        this.controller.initialize();
        this.logDebugActivity("initialize");
      } catch (error3) {
        this.handleError(error3, "initializing controller");
      }
    }
    connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      this.outletObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error3) {
        this.handleError(error3, "connecting controller");
      }
    }
    refresh() {
      this.outletObserver.refresh();
    }
    disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error3) {
        this.handleError(error3, "disconnecting controller");
      }
      this.outletObserver.stop();
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
    get application() {
      return this.module.application;
    }
    get identifier() {
      return this.module.identifier;
    }
    get schema() {
      return this.application.schema;
    }
    get dispatcher() {
      return this.application.dispatcher;
    }
    get element() {
      return this.scope.element;
    }
    get parentElement() {
      return this.element.parentElement;
    }
    handleError(error3, message, detail = {}) {
      const { identifier, controller, element } = this;
      detail = Object.assign({ identifier, controller, element }, detail);
      this.application.handleError(error3, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
      this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
      this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    outletConnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
    }
    outletDisconnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
    }
    invokeControllerMethod(methodName, ...args) {
      const controller = this.controller;
      if (typeof controller[methodName] == "function") {
        controller[methodName](...args);
      }
    }
  };
  function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
  }
  function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
  }
  function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing) => {
      const properties = blessing(constructor);
      for (const key in properties) {
        const descriptor = blessedProperties[key] || {};
        blessedProperties[key] = Object.assign(descriptor, properties[key]);
      }
      return blessedProperties;
    }, {});
  }
  function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key) => {
      const descriptor = getShadowedDescriptor(prototype, properties, key);
      if (descriptor) {
        Object.assign(shadowProperties, { [key]: descriptor });
      }
      return shadowProperties;
    }, {});
  }
  function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
      const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
      if (shadowingDescriptor) {
        descriptor.get = shadowingDescriptor.get || descriptor.get;
        descriptor.set = shadowingDescriptor.set || descriptor.set;
      }
      return descriptor;
    }
  }
  var getOwnKeys = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error3) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  function blessDefinition(definition) {
    return {
      identifier: definition.identifier,
      controllerConstructor: bless(definition.controllerConstructor)
    };
  }
  var Module = class {
    constructor(application2, definition) {
      this.application = application2;
      this.definition = blessDefinition(definition);
      this.contextsByScope = /* @__PURE__ */ new WeakMap();
      this.connectedContexts = /* @__PURE__ */ new Set();
    }
    get identifier() {
      return this.definition.identifier;
    }
    get controllerConstructor() {
      return this.definition.controllerConstructor;
    }
    get contexts() {
      return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope2) {
      const context = this.fetchContextForScope(scope2);
      this.connectedContexts.add(context);
      context.connect();
    }
    disconnectContextForScope(scope2) {
      const context = this.contextsByScope.get(scope2);
      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
    fetchContextForScope(scope2) {
      let context = this.contextsByScope.get(scope2);
      if (!context) {
        context = new Context(this, scope2);
        this.contextsByScope.set(scope2, context);
      }
      return context;
    }
  };
  var ClassMap = class {
    constructor(scope2) {
      this.scope = scope2;
    }
    has(name) {
      return this.data.has(this.getDataKey(name));
    }
    get(name) {
      return this.getAll(name)[0];
    }
    getAll(name) {
      const tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
    getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
      return `${name}-class`;
    }
    get data() {
      return this.scope.data;
    }
  };
  var DataMap = class {
    constructor(scope2) {
      this.scope = scope2;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
    set(key, value) {
      const name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
    has(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
    delete(key) {
      if (this.has(key)) {
        const name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
    getAttributeNameForKey(key) {
      return `data-${this.identifier}-${dasherize(key)}`;
    }
  };
  var Guide = class {
    constructor(logger) {
      this.warnedKeysByObject = /* @__PURE__ */ new WeakMap();
      this.logger = logger;
    }
    warn(object, key, message) {
      let warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = /* @__PURE__ */ new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  };
  function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
  }
  var TargetSet = class {
    constructor(scope2) {
      this.scope = scope2;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(targetName) {
      return this.find(targetName) != null;
    }
    find(...targetNames) {
      return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), void 0);
    }
    findAll(...targetNames) {
      return targetNames.reduce((targets, targetName) => [
        ...targets,
        ...this.findAllTargets(targetName),
        ...this.findAllLegacyTargets(targetName)
      ], []);
    }
    findTarget(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
      const attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
      const targetDescriptor = `${this.identifier}.${targetName}`;
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
      if (element) {
        const { identifier } = this;
        const attributeName = this.schema.targetAttribute;
        const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
      }
      return element;
    }
    get guide() {
      return this.scope.guide;
    }
  };
  var OutletSet = class {
    constructor(scope2, controllerElement) {
      this.scope = scope2;
      this.controllerElement = controllerElement;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(outletName) {
      return this.find(outletName) != null;
    }
    find(...outletNames) {
      return outletNames.reduce((outlet, outletName) => outlet || this.findOutlet(outletName), void 0);
    }
    findAll(...outletNames) {
      return outletNames.reduce((outlets, outletName) => [...outlets, ...this.findAllOutlets(outletName)], []);
    }
    getSelectorForOutletName(outletName) {
      const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
      return this.controllerElement.getAttribute(attributeName);
    }
    findOutlet(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      if (selector)
        return this.findElement(selector, outletName);
    }
    findAllOutlets(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      return selector ? this.findAllElements(selector, outletName) : [];
    }
    findElement(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName))[0];
    }
    findAllElements(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName));
    }
    matchesElement(element, selector, outletName) {
      const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
      return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
  };
  var Scope = class _Scope {
    constructor(schema, element, identifier, logger) {
      this.targets = new TargetSet(this);
      this.classes = new ClassMap(this);
      this.data = new DataMap(this);
      this.containsElement = (element2) => {
        return element2.closest(this.controllerSelector) === this.element;
      };
      this.schema = schema;
      this.element = element;
      this.identifier = identifier;
      this.guide = new Guide(logger);
      this.outlets = new OutletSet(this.documentScope, element);
    }
    findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
      return [
        ...this.element.matches(selector) ? [this.element] : [],
        ...this.queryElements(selector).filter(this.containsElement)
      ];
    }
    queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    get isDocumentScope() {
      return this.element === document.documentElement;
    }
    get documentScope() {
      return this.isDocumentScope ? this : new _Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
  };
  var ScopeObserver = class {
    constructor(element, schema, delegate) {
      this.element = element;
      this.schema = schema;
      this.delegate = delegate;
      this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
      this.scopesByIdentifierByElement = /* @__PURE__ */ new WeakMap();
      this.scopeReferenceCounts = /* @__PURE__ */ new WeakMap();
    }
    start() {
      this.valueListObserver.start();
    }
    stop() {
      this.valueListObserver.stop();
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
      const { element, content: identifier } = token;
      return this.parseValueForElementAndIdentifier(element, identifier);
    }
    parseValueForElementAndIdentifier(element, identifier) {
      const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      let scope2 = scopesByIdentifier.get(identifier);
      if (!scope2) {
        scope2 = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope2);
      }
      return scope2;
    }
    elementMatchedValue(element, value) {
      const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
    elementUnmatchedValue(element, value) {
      const referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
    fetchScopesByIdentifierForElement(element) {
      let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = /* @__PURE__ */ new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  };
  var Router = class {
    constructor(application2) {
      this.application = application2;
      this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
      this.scopesByIdentifier = new Multimap();
      this.modulesByIdentifier = /* @__PURE__ */ new Map();
    }
    get element() {
      return this.application.element;
    }
    get schema() {
      return this.application.schema;
    }
    get logger() {
      return this.application.logger;
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    get modules() {
      return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
      return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
    }
    start() {
      this.scopeObserver.start();
    }
    stop() {
      this.scopeObserver.stop();
    }
    loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      const module = new Module(this.application, definition);
      this.connectModule(module);
      const afterLoad = definition.controllerConstructor.afterLoad;
      if (afterLoad) {
        afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
      }
    }
    unloadIdentifier(identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
    getContextForElementAndIdentifier(element, identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find((context) => context.element == element);
      }
    }
    proposeToConnectScopeForElementAndIdentifier(element, identifier) {
      const scope2 = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
      if (scope2) {
        this.scopeObserver.elementMatchedValue(scope2.element, scope2);
      } else {
        console.error(`Couldn't find or create scope for identifier: "${identifier}" and element:`, element);
      }
    }
    handleError(error3, message, detail) {
      this.application.handleError(error3, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope2) {
      this.scopesByIdentifier.add(scope2.identifier, scope2);
      const module = this.modulesByIdentifier.get(scope2.identifier);
      if (module) {
        module.connectContextForScope(scope2);
      }
    }
    scopeDisconnected(scope2) {
      this.scopesByIdentifier.delete(scope2.identifier, scope2);
      const module = this.modulesByIdentifier.get(scope2.identifier);
      if (module) {
        module.disconnectContextForScope(scope2);
      }
    }
    connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope2) => module.connectContextForScope(scope2));
    }
    disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope2) => module.disconnectContextForScope(scope2));
    }
  };
  var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries("0123456789".split("").map((n) => [n, n])))
  };
  function objectFromEntries(array) {
    return array.reduce((memo, [k, v]) => Object.assign(Object.assign({}, memo), { [k]: v }), {});
  }
  var Application = class {
    constructor(element = document.documentElement, schema = defaultSchema) {
      this.logger = console;
      this.debug = false;
      this.logDebugActivity = (identifier, functionName, detail = {}) => {
        if (this.debug) {
          this.logFormattedMessage(identifier, functionName, detail);
        }
      };
      this.element = element;
      this.schema = schema;
      this.dispatcher = new Dispatcher(this);
      this.router = new Router(this);
      this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
    }
    static start(element, schema) {
      const application2 = new this(element, schema);
      application2.start();
      return application2;
    }
    async start() {
      await domReady();
      this.logDebugActivity("application", "starting");
      this.dispatcher.start();
      this.router.start();
      this.logDebugActivity("application", "start");
    }
    stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
      this.load({ identifier, controllerConstructor });
    }
    registerActionOption(name, filter) {
      this.actionDescriptorFilters[name] = filter;
    }
    load(head, ...rest) {
      const definitions = Array.isArray(head) ? head : [head, ...rest];
      definitions.forEach((definition) => {
        if (definition.controllerConstructor.shouldLoad) {
          this.router.loadDefinition(definition);
        }
      });
    }
    unload(head, ...rest) {
      const identifiers = Array.isArray(head) ? head : [head, ...rest];
      identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
    }
    get controllers() {
      return this.router.contexts.map((context) => context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
      const context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
    handleError(error3, message, detail) {
      var _a;
      this.logger.error(`%s

%o

%o`, message, error3, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error3);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
      detail = Object.assign({ application: this }, detail);
      this.logger.groupCollapsed(`${identifier} #${functionName}`);
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  };
  function domReady() {
    return new Promise((resolve) => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => resolve());
      } else {
        resolve();
      }
    });
  }
  function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function OutletPropertiesBlessing(constructor) {
    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
      return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
  }
  function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
  }
  function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    let outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
  }
  function propertiesForOutletDefinition(name) {
    const camelizedName = namespaceCamelize(name);
    return {
      [`${camelizedName}Outlet`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
            if (outletController)
              return outletController;
            throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
          }
          throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
        }
      },
      [`${camelizedName}Outlets`]: {
        get() {
          const outlets = this.outlets.findAll(name);
          if (outlets.length > 0) {
            return outlets.map((outletElement) => {
              const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
              if (outletController)
                return outletController;
              console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
            }).filter((controller) => controller);
          }
          return [];
        }
      },
      [`${camelizedName}OutletElement`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            return outletElement;
          } else {
            throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
          }
        }
      },
      [`${camelizedName}OutletElements`]: {
        get() {
          return this.outlets.findAll(name);
        }
      },
      [`has${capitalize(camelizedName)}Outlet`]: {
        get() {
          return this.outlets.has(name);
        }
      }
    };
  }
  function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read3, writer: write2 } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read3(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write2(value));
          }
        }
      },
      [`has${capitalize(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething(typeObject.type);
    const hasDefault = isSomething(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType)
      return typeFromObject;
    if (onlyDefault)
      return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
      const propertyPath = controller ? `${controller}.${token}` : token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
      return typeFromObject;
  }
  function parseValueTypeDefinition(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
  }
  function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant)
      return defaultValuesByType[constant];
    const hasDefault = hasProperty(typeDefinition, "default");
    const hasType = hasProperty(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
      return typeObject.default;
    if (hasType) {
      const { type } = typeObject;
      const constantFromType = parseValueTypeConstant(type);
      if (constantFromType)
        return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
      type,
      key,
      name: camelize(key),
      get defaultValue() {
        return defaultValueForDefinition(typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault(typeDefinition) !== void 0;
      },
      reader: readers[type],
      writer: writers[type] || writers.default
    };
  }
  var defaultValuesByType = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value.replace(/_/g, ""));
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
  };
  function writeJSON(value) {
    return JSON.stringify(value);
  }
  function writeString(value) {
    return `${value}`;
  }
  var Controller = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    static afterLoad(_identifier, _application) {
      return;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get outlets() {
      return this.scope.outlets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix: prefix2 = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix2 ? `${prefix2}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing,
    OutletPropertiesBlessing
  ];
  Controller.targets = [];
  Controller.outlets = [];
  Controller.values = {};

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
      lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(() => {
      let value = getter();
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    });
    return () => release(effectReference);
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    el._x_effects?.forEach(dequeueJob);
    while (el._x_cleanups?.length)
      el._x_cleanups.pop()();
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var queuedMutations = [];
  function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(() => records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(() => {
      if (queuedMutations.length === queueLengthWhenTriggered) {
        while (queuedMutations.length > 0)
          queuedMutations.shift()();
      }
    });
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].removedNodes.forEach((node) => {
          if (node.nodeType !== 1)
            return;
          if (!node._x_marker)
            return;
          removedNodes.add(node);
        });
        mutations[i].addedNodes.forEach((node) => {
          if (node.nodeType !== 1)
            return;
          if (removedNodes.has(node)) {
            removedNodes.delete(node);
            return;
          }
          if (node._x_marker)
            return;
          addedNodes.push(node);
        });
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add22 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add22();
        } else if (el.hasAttribute(name)) {
          remove();
          add22();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.some((i) => i.contains(node)))
        continue;
      onElRemoveds.forEach((i) => i(node));
    }
    for (let node of addedNodes) {
      if (!node.isConnected)
        continue;
      onElAddeds.forEach((i) => i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i) => Object.keys(i)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Reflect.has(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if (descriptor?.set && descriptor?.get)
        return descriptor.set.call(thisProxy, value) || true;
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        if (typeof value === "object" && value !== null && value.__v_skip)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    let memoizedUtilities = getUtilities(el);
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, memoizedUtilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function getUtilities(el) {
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    let utils = { interceptor, ...utilities };
    onElRemoved(el, cleanup2);
    return utils;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(...args) {
    return errorHandler(...args);
  }
  var errorHandler = normalErrorHandler;
  function setErrorHandler(handler4) {
    errorHandler = handler4;
  }
  function normalErrorHandler(error22, el, expression = void 0) {
    error22 = Object.assign(
      error22 ?? { message: "No error message given." },
      { el, expression }
    );
    console.warn(`Alpine Expression Error: ${error22.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error22;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  var theRawEvaluatorFunction;
  function setRawEvaluator(newEvaluator) {
    theRawEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [], context } = {}) => {
      if (!shouldAutoEvaluateFunctions) {
        runIfTypeOfFunction(receiver, func, mergeProxies([scope2, ...dataStack]), params);
        return;
      }
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error22) {
        handleError(error22, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [], context } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func.call(context, func, completeScope).catch((error22) => handleError(error22, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error22) => handleError(error22, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error22) => handleError(error22, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i) => receiver(i));
    } else {
      receiver(value);
    }
  }
  function evaluateRaw(...args) {
    return theRawEvaluatorFunction(...args);
  }
  function normalRawEvaluator(el, expression, extras = {}) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let scope2 = mergeProxies([extras.scope ?? {}, ...dataStack]);
    let params = extras.params ?? [];
    if (expression.includes("await")) {
      let AsyncFunction = Object.getPrototypeOf(async function() {
      }).constructor;
      let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
      let func = new AsyncFunction(
        ["scope"],
        `with (scope) { let __result = ${rightSideSafeExpression}; return __result }`
      );
      let result = func.call(extras.context, scope2);
      return result;
    } else {
      let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(()=>{ ${expression} })()` : expression;
      let func = new Function(
        ["scope"],
        `with (scope) { let __result = ${rightSideSafeExpression}; return __result }`
      );
      let result = func.call(extras.context, scope2);
      if (typeof result === "function" && shouldAutoEvaluateFunctions) {
        return result.apply(scope2, params);
      }
      return result;
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect32, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect32,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(() => {
      warnAboutMissingPlugins();
    });
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn3) => fn3());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn3) => fn3());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (el.parentNode instanceof ShadowRoot) {
      return findClosest(el.parentNode.host, callback);
    }
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors2 = [];
  function interceptInit(callback) {
    initInterceptors2.push(callback);
  }
  var markerDispenser = 1;
  function initTree(el, walker = walk, intercept = () => {
  }) {
    if (findClosest(el, (i) => i._x_ignore))
      return;
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        if (el2._x_marker)
          return;
        intercept(el2, skip);
        initInterceptors2.forEach((i) => i(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        if (!el2._x_ignore)
          el2._x_marker = markerDispenser++;
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root, walker = walk) {
    walker(root, (el) => {
      cleanupElement(el);
      cleanupAttributes(el);
      delete el._x_marker;
    });
  }
  function warnAboutMissingPlugins() {
    let pluginDirectives = [
      ["ui", "dialog", ["[x-dialog], [x-popover]"]],
      ["anchor", "anchor", ["[x-anchor]"]],
      ["sort", "sort", ["[x-sort]"]]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
      if (directiveExists(directive2))
        return;
      selectors.some((selector) => {
        if (document.querySelector(selector)) {
          warn(`found "${selector}", but missing ${plugin2} plugin`);
          return true;
        }
      });
    });
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide2) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide2));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide2);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i?.());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start22, end: end2 } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start22).length === 0 && Object.keys(end2).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start22);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end2);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue2 = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue2)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue2))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue2.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue2, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue2;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  var interceptors = [];
  function interceptClone(callback) {
    interceptors.push(callback);
  }
  function cloneNode(from, to) {
    interceptors.forEach((i) => i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (isRadio(el)) {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (isCheckbox(el)) {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue2) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue2)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue2)) {
      return false;
    }
    return rawValue2 ? Boolean(rawValue2) : null;
  }
  var booleanAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable"
  ]);
  function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function isCheckbox(el) {
    return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
  }
  function isRadio(el) {
    return el.type === "radio" || el.localName === "ui-radio";
  }
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference2 = effect(() => {
      let outer = outerGet();
      let inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
      } else {
        let outerHashLatest = JSON.stringify(outer);
        let innerHashLatest = JSON.stringify(inner);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
        } else if (outerHashLatest !== innerHashLatest) {
          outerSet(cloneIfObject(inner));
        } else {
        }
      }
      outerHash = JSON.stringify(outerGet());
      innerHash = JSON.stringify(innerGet());
    });
    return () => {
      release(reference2);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i) => i(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    initInterceptors(stores[name]);
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.15.3",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    setErrorHandler,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    initInterceptors,
    injectMagics,
    setEvaluator,
    setRawEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    evaluateRaw,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn3) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn3(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize2 = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize2 = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize2(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn3) {
    return fn3 && fn3._isEffect === true;
  }
  function effect2(fn3, options = EMPTY_OBJ) {
    if (isEffect(fn3)) {
      fn3 = fn3.raw;
    }
    const effect32 = createReactiveEffect(fn3, options);
    if (!options.lazy) {
      effect32();
    }
    return effect32;
  }
  function stop(effect32) {
    if (effect32.active) {
      cleanup(effect32);
      if (effect32.options.onStop) {
        effect32.options.onStop();
      }
      effect32.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn3, options) {
    const effect32 = function reactiveEffect() {
      if (!effect32.active) {
        return fn3();
      }
      if (!effectStack.includes(effect32)) {
        cleanup(effect32);
        try {
          enableTracking();
          effectStack.push(effect32);
          activeEffect = effect32;
          return fn3();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect32.id = uid++;
    effect32.allowRecurse = !!options.allowRecurse;
    effect32._isEffect = true;
    effect32.active = true;
    effect32.raw = fn3;
    effect32.deps = [];
    effect32.options = options;
    return effect32;
  }
  function cleanup(effect32) {
    const { deps } = effect32;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect32);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add22 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect32) => {
          if (effect32 !== activeEffect || effect32.allowRecurse) {
            effects.add(effect32);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add22);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add22(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add22(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add22(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add22(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add22(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add22(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add22(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add22(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect32) => {
      if (effect32.options.onTrigger) {
        effect32.options.onTrigger({
          effect: effect32,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect32.options.scheduler) {
        effect32.options.scheduler(effect32);
      } else {
        effect32();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add2(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize2(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add: add2,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add: add2,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target[
      "__v_isReadonly"
      /* IS_READONLY */
    ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* RAW */
    ] && !(isReadonly && target[
      "__v_isReactive"
      /* IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed[
      "__v_raw"
      /* RAW */
    ]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let getter = () => {
      let value;
      evaluate2((i) => value = i);
      return value;
    };
    let unwatch = watch(getter, callback);
    cleanup2(unwatch);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i) => {
      if (i._x_refs)
        refObjects.push(i._x_refs);
    });
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
    let cacheKey = `${name}${key ? `-${key}` : ""}`;
    return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
      let root = closestIdRoot(el, name);
      let id = root ? root._x_ids[name] : findAndIncrementId(name);
      return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
  });
  interceptClone((from, to) => {
    if (from._x_id) {
      to._x_id = from._x_id;
    }
  });
  function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id)
      el._x_id = {};
    if (el._x_id[cacheKey])
      return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(() => {
      delete el._x_id[cacheKey];
    });
    return output;
  }
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect32, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      skipDuringClone(() => {
        initTree(clone2);
      })();
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(
      () => mutateDom(() => {
        clone2.remove();
        destroyTree(clone2);
      })
    );
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect32 }) => {
    effect32(evaluateLater(el, expression));
  }));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.target === el && next(e);
      });
    if (isKeyEvent(event) || isClickEvent(event)) {
      handler4 = wrapHandler(handler4, (next, e) => {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
        next(e);
      });
    }
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isClickEvent(event) {
    return ["contextmenu", "click", "mouse"].some((i) => event.includes(i));
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive", "preserve-scroll"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (isClickEvent(e.type))
          return false;
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "comma": ",",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect32, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    let event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event, modifiers, (e) => {
      setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([void 0, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
        setValue(
          getInputValue(el, modifiers, { target: el }, getValue())
        );
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e) => {
        nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect32(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (isCheckbox(el)) {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue2 = option.value || option.text;
            return safeParseNumber(rawValue2);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue2 = option.value || option.text;
            return safeParseBoolean(rawValue2);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let newValue;
        if (isRadio(el)) {
          if (event.target.checked) {
            newValue = event.target.value;
          } else {
            newValue = currentValue;
          }
        } else {
          newValue = event.target.value;
        }
        if (modifiers.includes("number")) {
          return safeParseNumber(newValue);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(newValue);
        } else if (modifiers.includes("trim")) {
          return newValue.trim();
        } else {
          return newValue;
        }
      }
    });
  }
  function safeParseNumber(rawValue2) {
    let number = rawValue2 ? parseFloat(rawValue2) : null;
    return isNumeric2(number) ? number : rawValue2;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect32, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect32(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect32, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect32(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect32, cleanup: cleanup2 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect32(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
    cleanup2(() => {
      el._x_undoAddedClasses && el._x_undoAddedClasses();
      el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from, to) => {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect32 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide2 = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide2(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide2);
        } else {
          value ? clickAwayCompatibleShow() : hide2();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect32(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide2();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect32, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      // the x-bind:key expression is stored for our use instead of evaluated.
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect32(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => mutateDom(
        () => {
          destroyTree(el2);
          el2.remove();
        }
      ));
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup2 = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => {
            if (keys.includes(value2))
              warn("Duplicate key on x-for", el);
            keys.push(value2);
          }, { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => {
            if (keys.includes(value))
              warn("Duplicate key on x-for", el);
            keys.push(value);
          }, { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!(key in lookup2))
          continue;
        mutateDom(() => {
          destroyTree(lookup2[key]);
          lookup2[key].remove();
        });
        delete lookup2[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup2[keyInSpot];
        let elForSpot = lookup2[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup2);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup2[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          skipDuringClone(() => initTree(clone2))();
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup2[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        lookup2[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect32, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        mutateDom(() => {
          destroyTree(clone2);
          clone2.remove();
        });
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide2 = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect32(() => evaluate2((value) => {
      value ? show() : hide2();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  interceptClone((from, to) => {
    if (from._x_ids) {
      to._x_ids = from._x_ids;
    }
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { "$event": e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setRawEvaluator(normalRawEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start2 = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start2, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start2, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read2 = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read2, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect3(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect3,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect4(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect4,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect5(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect5,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start2:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start2;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data2 = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data2[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data2;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data2 = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start2 ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start2 ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data2[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data2[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data2;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce2(fn3) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn3());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn3 === "function") {
              state = fn3({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce2(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect7 = _ref.effect;
          if (typeof effect7 === "function") {
            var cleanupFn = effect7({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn3) {
          return fn3();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/tippy.js/dist/tippy.esm.js
  var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
    return document.body;
  };
  function hasOwnProperty2(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
  }
  function debounce3(fn3, ms) {
    if (ms === 0) {
      return fn3;
    }
    var timeout;
    return function(arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn3(arg);
      }, ms);
    };
  }
  function removeProperties(obj, keys) {
    var clone2 = Object.assign({}, obj);
    keys.forEach(function(key) {
      delete clone2[key];
    });
    return clone2;
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  }
  function getBasePlacement2(placement) {
    return placement.split("-")[0];
  }
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
      if (obj[key] !== void 0) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  }
  function div() {
    return document.createElement("div");
  }
  function isElement2(value) {
    return ["Element", "Fragment"].some(function(type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, "NodeList");
  }
  function isMouseEvent(value) {
    return isType(value, "MouseEvent");
  }
  function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements(value) {
    if (isElement2(value)) {
      return [value];
    }
    if (isNodeList(value)) {
      return arrayFrom(value);
    }
    if (Array.isArray(value)) {
      return value;
    }
    return arrayFrom(document.querySelectorAll(value));
  }
  function setTransitionDuration(els, value) {
    els.forEach(function(el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function(el) {
      if (el) {
        el.setAttribute("data-state", state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
  }
  function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
      var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement2(popperState.placement);
      var offsetData = popperState.modifiersData.offset;
      if (!offsetData) {
        return true;
      }
      var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
      var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
      var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
      box[method](event, listener);
    });
  }
  function actualContains(parent, child) {
    var target = child;
    while (target) {
      var _target$getRootNode;
      if (parent.contains(target)) {
        return true;
      }
      target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
  }
  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }
    currentInput.isTouch = true;
    if (window.performance) {
      document.addEventListener("mousemove", onDocumentMouseMove);
    }
  }
  function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener("mousemove", onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
  }
  function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
      var instance = activeElement._tippy;
      if (activeElement.blur && !instance.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener("blur", onWindowBlur);
  }
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var isIE11 = isBrowser ? (
    // @ts-ignore
    !!window.msCrypto
  ) : false;
  function createMemoryLeakWarning(method) {
    var txt = method === "destroy" ? "n already-" : " ";
    return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
  }
  function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
  }
  function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
  }
  function getFormattedMessage(message) {
    return [
      getDevMessage(message),
      // title
      "color: #00C584; font-size: 1.3em; font-weight: bold;",
      // message
      "line-height: 1.5",
      // footer
      "color: #a6a095;"
    ];
  }
  var visitedMessages;
  if (true) {
    resetVisitedMessages();
  }
  function resetVisitedMessages() {
    visitedMessages = /* @__PURE__ */ new Set();
  }
  function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console;
      visitedMessages.add(message);
      (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
  }
  function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console2;
      visitedMessages.add(message);
      (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
  }
  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
    errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
    errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
  }
  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
  };
  var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  };
  var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {
    },
    onBeforeUpdate: function onBeforeUpdate() {
    },
    onCreate: function onCreate() {
    },
    onDestroy: function onDestroy() {
    },
    onHidden: function onHidden() {
    },
    onHide: function onHide() {
    },
    onMount: function onMount() {
    },
    onShow: function onShow() {
    },
    onShown: function onShown() {
    },
    onTrigger: function onTrigger() {
    },
    onUntrigger: function onUntrigger() {
    },
    onClickOutside: function onClickOutside() {
    },
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, pluginProps, renderProps);
  var defaultKeys = Object.keys(defaultProps);
  var setDefaultProps = function setDefaultProps2(partialProps) {
    if (true) {
      validateProps(partialProps, []);
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
      defaultProps[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps2 = plugins.reduce(function(acc, plugin2) {
      var name = plugin2.name, defaultValue = plugin2.defaultValue;
      if (name) {
        var _name;
        acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
      }
      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps2);
  }
  function getDataAttributeProps(reference2, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
      plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
      var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
      if (!valueAsString) {
        return acc;
      }
      if (key === "content") {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }
      return acc;
    }, {});
    return props;
  }
  function evaluateProps(reference2, props) {
    var out = Object.assign({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference2])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
      expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
      content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
    };
    return out;
  }
  function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
      partialProps = {};
    }
    if (plugins === void 0) {
      plugins = [];
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
      var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
      var didPassUnknownProp = !hasOwnProperty2(nonPluginProps, prop);
      if (didPassUnknownProp) {
        didPassUnknownProp = plugins.filter(function(plugin2) {
          return plugin2.name === prop;
        }).length === 0;
      }
      warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
    });
  }
  var innerHTML = function innerHTML2() {
    return "innerHTML";
  };
  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
  }
  function createArrowElement(value) {
    var arrow2 = div();
    if (value === true) {
      arrow2.className = ARROW_CLASS;
    } else {
      arrow2.className = SVG_ARROW_CLASS;
      if (isElement2(value)) {
        arrow2.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow2, value);
      }
    }
    return arrow2;
  }
  function setContent(content, props) {
    if (isElement2(props.content)) {
      dangerouslySetInnerHTML(content, "");
      content.appendChild(props.content);
    } else if (typeof props.content !== "function") {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren(popper2) {
    var box = popper2.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
      box,
      content: boxChildren.find(function(node) {
        return node.classList.contains(CONTENT_CLASS);
      }),
      arrow: boxChildren.find(function(node) {
        return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
      }),
      backdrop: boxChildren.find(function(node) {
        return node.classList.contains(BACKDROP_CLASS);
      })
    };
  }
  function render(instance) {
    var popper2 = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute("data-state", "hidden");
    box.setAttribute("tabindex", "-1");
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    setContent(content, instance.props);
    popper2.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
      if (nextProps.theme) {
        box2.setAttribute("data-theme", nextProps.theme);
      } else {
        box2.removeAttribute("data-theme");
      }
      if (typeof nextProps.animation === "string") {
        box2.setAttribute("data-animation", nextProps.animation);
      } else {
        box2.removeAttribute("data-animation");
      }
      if (nextProps.inertia) {
        box2.setAttribute("data-inertia", "");
      } else {
        box2.removeAttribute("data-inertia");
      }
      box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
      if (nextProps.role) {
        box2.setAttribute("role", nextProps.role);
      } else {
        box2.removeAttribute("role");
      }
      if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
        setContent(content2, instance.props);
      }
      if (nextProps.arrow) {
        if (!arrow2) {
          box2.appendChild(createArrowElement(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box2.removeChild(arrow2);
          box2.appendChild(createArrowElement(nextProps.arrow));
        }
      } else if (arrow2) {
        box2.removeChild(arrow2);
      }
    }
    return {
      popper: popper2,
      onUpdate
    };
  }
  render.$$tippy = true;
  var idCounter = 1;
  var mouseMoveListeners = [];
  var mountedInstances = [];
  function createTippy(reference2, passedProps) {
    var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce3(onMouseMove, props.interactiveDebounce);
    var currentTarget;
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false
    };
    var instance = {
      // properties
      id,
      reference: reference2,
      popper: div(),
      popperInstance,
      props,
      state,
      plugins,
      // methods
      clearDelayTimeouts,
      setProps,
      setContent: setContent2,
      show,
      hide: hide2,
      hideWithInteractivity,
      enable,
      disable,
      unmount,
      destroy
    };
    if (!props.render) {
      if (true) {
        errorWhen(true, "render() function has not been supplied.");
      }
      return instance;
    }
    var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper2.setAttribute("data-tippy-root", "");
    popper2.id = "tippy-" + instance.id;
    instance.popper = popper2;
    reference2._tippy = instance;
    popper2._tippy = instance;
    var pluginsHooks = plugins.map(function(plugin2) {
      return plugin2.fn(instance);
    });
    var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [instance]);
    if (props.showOnCreate) {
      scheduleShow();
    }
    popper2.addEventListener("mouseenter", function() {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper2.addEventListener("mouseleave", function() {
      if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
        getDocument().addEventListener("mousemove", debouncedOnMouseMove);
      }
    });
    return instance;
    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }
    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === "hold";
    }
    function getIsDefaultRenderFn() {
      var _instance$props$rende;
      return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
      return currentTarget || reference2;
    }
    function getDocument() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
      return getChildren(popper2);
    }
    function getDelay(isShow) {
      if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
        return 0;
      }
      return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }
      popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
      popper2.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }
      pluginsHooks.forEach(function(pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });
      if (shouldInvokePropsHook) {
        var _instance$props;
        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }
    }
    function handleAriaContentAttribute() {
      var aria = instance.props.aria;
      if (!aria.content) {
        return;
      }
      var attr = "aria-" + aria.content;
      var id2 = popper2.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        var currentValue = node.getAttribute(attr);
        if (instance.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
        } else {
          var nextValue = currentValue && currentValue.replace(id2, "").trim();
          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }
    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance.props.aria.expanded) {
        return;
      }
      var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        if (instance.props.interactive) {
          node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
        } else {
          node.removeAttribute("aria-expanded");
        }
      });
    }
    function cleanupInteractiveMouseListeners() {
      getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
        return listener !== debouncedOnMouseMove;
      });
    }
    function onDocumentPress(event) {
      if (currentInput.isTouch) {
        if (didTouchMove || event.type === "mousedown") {
          return;
        }
      }
      var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
      if (instance.props.interactive && actualContains(popper2, actualTarget)) {
        return;
      }
      if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
        return actualContains(el, actualTarget);
      })) {
        if (currentInput.isTouch) {
          return;
        }
        if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
          return;
        }
      } else {
        invokeHook("onClickOutside", [instance, event]);
      }
      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide();
        didHideDueToDocumentMouseDown = true;
        setTimeout(function() {
          didHideDueToDocumentMouseDown = false;
        });
        if (!instance.state.isMounted) {
          removeDocumentPress();
        }
      }
    }
    function onTouchMove() {
      didTouchMove = true;
    }
    function onTouchStart() {
      didTouchMove = false;
    }
    function addDocumentPress() {
      var doc = getDocument();
      doc.addEventListener("mousedown", onDocumentPress, true);
      doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
      doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
      var doc = getDocument();
      doc.removeEventListener("mousedown", onDocumentPress, true);
      doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
      doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function() {
        if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
          callback();
        }
      });
    }
    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;
      function listener(event) {
        if (event.target === box) {
          updateTransitionEndListener(box, "remove", listener);
          callback();
        }
      }
      if (duration === 0) {
        return callback();
      }
      updateTransitionEndListener(box, "remove", currentTransitionEndListener);
      updateTransitionEndListener(box, "add", listener);
      currentTransitionEndListener = listener;
    }
    function on2(eventType, handler4, options) {
      if (options === void 0) {
        options = false;
      }
      var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        node.addEventListener(eventType, handler4, options);
        listeners.push({
          node,
          eventType,
          handler: handler4,
          options
        });
      });
    }
    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on2("touchstart", onTrigger2, {
          passive: true
        });
        on2("touchend", onMouseLeave, {
          passive: true
        });
      }
      splitBySpaces(instance.props.trigger).forEach(function(eventType) {
        if (eventType === "manual") {
          return;
        }
        on2(eventType, onTrigger2);
        switch (eventType) {
          case "mouseenter":
            on2("mouseleave", onMouseLeave);
            break;
          case "focus":
            on2(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
            break;
          case "focusin":
            on2("focusout", onBlurOrFocusOut);
            break;
        }
      });
    }
    function removeListeners() {
      listeners.forEach(function(_ref) {
        var node = _ref.node, eventType = _ref.eventType, handler4 = _ref.handler, options = _ref.options;
        node.removeEventListener(eventType, handler4, options);
      });
      listeners = [];
    }
    function onTrigger2(event) {
      var _lastTriggerEvent;
      var shouldScheduleClickHide = false;
      if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
        return;
      }
      var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
      lastTriggerEvent = event;
      currentTarget = event.currentTarget;
      handleAriaExpandedAttribute();
      if (!instance.state.isVisible && isMouseEvent(event)) {
        mouseMoveListeners.forEach(function(listener) {
          return listener(event);
        });
      }
      if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event);
      }
      if (event.type === "click") {
        isVisibleFromClick = !shouldScheduleClickHide;
      }
      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event);
      }
    }
    function onMouseMove(event) {
      var target = event.target;
      var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
      if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
        return;
      }
      var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
        var _instance$popperInsta;
        var instance2 = popper3._tippy;
        var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
        if (state2) {
          return {
            popperRect: popper3.getBoundingClientRect(),
            popperState: state2,
            props
          };
        }
        return null;
      }).filter(Boolean);
      if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }
    function onMouseLeave(event) {
      var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
      if (shouldBail) {
        return;
      }
      if (instance.props.interactive) {
        instance.hideWithInteractivity(event);
        return;
      }
      scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
      if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
        return;
      }
      if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
        return;
      }
      scheduleHide(event);
    }
    function isEventListenerStopped(event) {
      return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
    }
    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
      var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
      var computedReference = getReferenceClientRect ? {
        getBoundingClientRect: getReferenceClientRect,
        contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
      } : reference2;
      var tippyModifier = {
        name: "$$tippy",
        enabled: true,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function fn3(_ref2) {
          var state2 = _ref2.state;
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
              if (attr === "placement") {
                box.setAttribute("data-placement", state2.placement);
              } else {
                if (state2.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, "");
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state2.attributes.popper = {};
          }
        }
      };
      var modifiers = [{
        name: "offset",
        options: {
          offset: offset2
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !moveTransition
        }
      }, tippyModifier];
      if (getIsDefaultRenderFn() && arrow2) {
        modifiers.push({
          name: "arrow",
          options: {
            element: arrow2,
            padding: 3
          }
        });
      }
      modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
      instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
        placement,
        onFirstUpdate,
        modifiers
      }));
    }
    function destroyPopperInstance() {
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
        instance.popperInstance = null;
      }
    }
    function mount() {
      var appendTo = instance.props.appendTo;
      var parentNode;
      var node = getCurrentTarget();
      if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      }
      if (!parentNode.contains(popper2)) {
        parentNode.appendChild(popper2);
      }
      instance.state.isMounted = true;
      createPopperInstance();
      if (true) {
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
      }
    }
    function getNestedPopperTree() {
      return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
    }
    function scheduleShow(event) {
      instance.clearDelayTimeouts();
      if (event) {
        invokeHook("onTrigger", [instance, event]);
      }
      addDocumentPress();
      var delay = getDelay(true);
      var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
      if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
        delay = touchDelay;
      }
      if (delay) {
        showTimeout = setTimeout(function() {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }
    function scheduleHide(event) {
      instance.clearDelayTimeouts();
      invokeHook("onUntrigger", [instance, event]);
      if (!instance.state.isVisible) {
        removeDocumentPress();
        return;
      }
      if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
        return;
      }
      var delay = getDelay(false);
      if (delay) {
        hideTimeout = setTimeout(function() {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        scheduleHideAnimationFrame = requestAnimationFrame(function() {
          instance.hide();
        });
      }
    }
    function enable() {
      instance.state.isEnabled = true;
    }
    function disable() {
      instance.hide();
      instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
      }
      if (instance.state.isDestroyed) {
        return;
      }
      invokeHook("onBeforeUpdate", [instance, partialProps]);
      removeListeners();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
        ignoreAttributes: true
      }));
      instance.props = nextProps;
      addListeners();
      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce3(onMouseMove, nextProps.interactiveDebounce);
      }
      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
          node.removeAttribute("aria-expanded");
        });
      } else if (nextProps.triggerTarget) {
        reference2.removeAttribute("aria-expanded");
      }
      handleAriaExpandedAttribute();
      handleStyles();
      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }
      if (instance.popperInstance) {
        createPopperInstance();
        getNestedPopperTree().forEach(function(nestedPopper) {
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }
      invokeHook("onAfterUpdate", [instance, partialProps]);
    }
    function setContent2(content) {
      instance.setProps({
        content
      });
    }
    function show() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
      }
      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      }
      if (getCurrentTarget().hasAttribute("disabled")) {
        return;
      }
      invokeHook("onShow", [instance], false);
      if (instance.props.onShow(instance) === false) {
        return;
      }
      instance.state.isVisible = true;
      if (getIsDefaultRenderFn()) {
        popper2.style.visibility = "visible";
      }
      handleStyles();
      addDocumentPress();
      if (!instance.state.isMounted) {
        popper2.style.transition = "none";
      }
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
        setTransitionDuration([box, content], 0);
      }
      onFirstUpdate = function onFirstUpdate2() {
        var _instance$popperInsta2;
        if (!instance.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }
        ignoreOnFirstUpdate = true;
        void popper2.offsetHeight;
        popper2.style.transition = instance.props.moveTransition;
        if (getIsDefaultRenderFn() && instance.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
          setTransitionDuration([_box, _content], duration);
          setVisibilityState([_box, _content], "visible");
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance);
        (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
        invokeHook("onMount", [instance]);
        if (instance.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function() {
            instance.state.isShown = true;
            invokeHook("onShown", [instance]);
          });
        }
      };
      mount();
    }
    function hide2() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
      }
      var isAlreadyHidden = !instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }
      invokeHook("onHide", [instance], false);
      if (instance.props.onHide(instance) === false) {
        return;
      }
      instance.state.isVisible = false;
      instance.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;
      if (getIsDefaultRenderFn()) {
        popper2.style.visibility = "hidden";
      }
      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
        if (instance.props.animation) {
          setTransitionDuration([box, content], duration);
          setVisibilityState([box, content], "hidden");
        }
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      if (instance.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance.unmount);
        }
      } else {
        instance.unmount();
      }
    }
    function hideWithInteractivity(event) {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
      }
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
    function unmount() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
      }
      if (instance.state.isVisible) {
        instance.hide();
      }
      if (!instance.state.isMounted) {
        return;
      }
      destroyPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        nestedPopper._tippy.unmount();
      });
      if (popper2.parentNode) {
        popper2.parentNode.removeChild(popper2);
      }
      mountedInstances = mountedInstances.filter(function(i) {
        return i !== instance;
      });
      instance.state.isMounted = false;
      invokeHook("onHidden", [instance]);
    }
    function destroy() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
      }
      if (instance.state.isDestroyed) {
        return;
      }
      instance.clearDelayTimeouts();
      instance.unmount();
      removeListeners();
      delete reference2._tippy;
      instance.state.isDestroyed = true;
      invokeHook("onDestroy", [instance]);
    }
  }
  function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    if (true) {
      validateTargets(targets);
      validateProps(optionalProps, plugins);
    }
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
      plugins
    });
    var elements = getArrayOfElements(targets);
    if (true) {
      var isSingleContentElement = isElement2(passedProps.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
    }
    var instances = elements.reduce(function(acc, reference2) {
      var instance = reference2 && createTippy(reference2, passedProps);
      if (instance) {
        acc.push(instance);
      }
      return acc;
    }, []);
    return isElement2(targets) ? instances[0] : instances;
  }
  tippy.defaultProps = defaultProps;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;
  var applyStylesModifier = Object.assign({}, applyStyles_default, {
    effect: function effect6(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
    }
  });
  var mouseCoords = {
    clientX: 0,
    clientY: 0
  };
  var activeInstances = [];
  function storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    mouseCoords = {
      clientX,
      clientY
    };
  }
  function addMouseCoordsListener(doc) {
    doc.addEventListener("mousemove", storeMouseCoords);
  }
  function removeMouseCoordsListener(doc) {
    doc.removeEventListener("mousemove", storeMouseCoords);
  }
  var followCursor = {
    name: "followCursor",
    defaultValue: false,
    fn: function fn2(instance) {
      var reference2 = instance.reference;
      var doc = getOwnerDocument(instance.props.triggerTarget || reference2);
      var isInternalUpdate = false;
      var wasFocusEvent = false;
      var isUnmounted = true;
      var prevProps = instance.props;
      function getIsInitialBehavior() {
        return instance.props.followCursor === "initial" && instance.state.isVisible;
      }
      function addListener() {
        doc.addEventListener("mousemove", onMouseMove);
      }
      function removeListener() {
        doc.removeEventListener("mousemove", onMouseMove);
      }
      function unsetGetReferenceClientRect() {
        isInternalUpdate = true;
        instance.setProps({
          getReferenceClientRect: null
        });
        isInternalUpdate = false;
      }
      function onMouseMove(event) {
        var isCursorOverReference = event.target ? reference2.contains(event.target) : true;
        var followCursor2 = instance.props.followCursor;
        var clientX = event.clientX, clientY = event.clientY;
        var rect = reference2.getBoundingClientRect();
        var relativeX = clientX - rect.left;
        var relativeY = clientY - rect.top;
        if (isCursorOverReference || !instance.props.interactive) {
          instance.setProps({
            // @ts-ignore - unneeded DOMRect properties
            getReferenceClientRect: function getReferenceClientRect() {
              var rect2 = reference2.getBoundingClientRect();
              var x = clientX;
              var y = clientY;
              if (followCursor2 === "initial") {
                x = rect2.left + relativeX;
                y = rect2.top + relativeY;
              }
              var top2 = followCursor2 === "horizontal" ? rect2.top : y;
              var right2 = followCursor2 === "vertical" ? rect2.right : x;
              var bottom2 = followCursor2 === "horizontal" ? rect2.bottom : y;
              var left2 = followCursor2 === "vertical" ? rect2.left : x;
              return {
                width: right2 - left2,
                height: bottom2 - top2,
                top: top2,
                right: right2,
                bottom: bottom2,
                left: left2
              };
            }
          });
        }
      }
      function create() {
        if (instance.props.followCursor) {
          activeInstances.push({
            instance,
            doc
          });
          addMouseCoordsListener(doc);
        }
      }
      function destroy() {
        activeInstances = activeInstances.filter(function(data2) {
          return data2.instance !== instance;
        });
        if (activeInstances.filter(function(data2) {
          return data2.doc === doc;
        }).length === 0) {
          removeMouseCoordsListener(doc);
        }
      }
      return {
        onCreate: create,
        onDestroy: destroy,
        onBeforeUpdate: function onBeforeUpdate2() {
          prevProps = instance.props;
        },
        onAfterUpdate: function onAfterUpdate2(_, _ref2) {
          var followCursor2 = _ref2.followCursor;
          if (isInternalUpdate) {
            return;
          }
          if (followCursor2 !== void 0 && prevProps.followCursor !== followCursor2) {
            destroy();
            if (followCursor2) {
              create();
              if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
                addListener();
              }
            } else {
              removeListener();
              unsetGetReferenceClientRect();
            }
          }
        },
        onMount: function onMount2() {
          if (instance.props.followCursor && !wasFocusEvent) {
            if (isUnmounted) {
              onMouseMove(mouseCoords);
              isUnmounted = false;
            }
            if (!getIsInitialBehavior()) {
              addListener();
            }
          }
        },
        onTrigger: function onTrigger2(_, event) {
          if (isMouseEvent(event)) {
            mouseCoords = {
              clientX: event.clientX,
              clientY: event.clientY
            };
          }
          wasFocusEvent = event.type === "focus";
        },
        onHidden: function onHidden2() {
          if (instance.props.followCursor) {
            unsetGetReferenceClientRect();
            removeListener();
            isUnmounted = true;
          }
        }
      };
    }
  };
  tippy.setDefaultProps({
    render
  });
  var tippy_esm_default = tippy;

  // src/javascripts/alpinejs/directives/tooltip.js
  var tooltip_default = (el, { modifiers, expression }, { evaluateLater: evaluateLater2, effect: effect7 }) => {
    const getContent = evaluateLater2(expression);
    const options = buildOptionsFromModifiers(modifiers);
    effect7(() => {
      getContent((content) => {
        if (options.content === true) {
          options.content = document.querySelector(content).content.cloneNode(true);
          options.allowHTML = true;
          el.__x_tippy = tippy_esm_default(el, options);
        } else {
          if (!el.__x_tippy) {
            el.__x_tippy = tippy_esm_default(el, options);
          }
          el.__x_tippy.setContent(content);
        }
      });
    });
  };
  var buildOptionsFromModifiers = (modifiers) => {
    const options = {
      plugins: [],
      arrow: ROUND_ARROW,
      animation: "shift-away",
      zIndex: 10003
    };
    if (modifiers.includes("duration")) {
      options.duration = parseInt(modifiers[modifiers.indexOf("duration") + 1]);
    }
    if (modifiers.includes("delay")) {
      options.delay = parseInt(modifiers[modifiers.indexOf("delay") + 1]);
    }
    if (modifiers.includes("cursor")) {
      options.plugins.push(followCursor);
      const next = modifiers[modifiers.indexOf("cursor") + 1] ?? null;
      if (["x", "y", "initial"].includes(next)) {
        if (next === "x") options.followCursor = "horizontal";
        if (next === "y") options.followCursor = "vertical";
        if (next === "initial") options.followCursor = "initial";
      } else {
        options.followCursor = true;
      }
    }
    if (modifiers.includes("on")) {
      const triggerIndex = modifiers.indexOf("on");
      const triggerValue = modifiers[triggerIndex + 1];
      if (triggerValue) {
        options.trigger = triggerValue === "click" ? "click" : triggerValue === "focus" ? "focus" : triggerValue === "hover" ? "mouseenter focus" : triggerValue;
      } else {
        options.trigger = "mouseenter focus";
      }
    } else {
      options.trigger = "mouseenter focus";
    }
    if (modifiers.includes("arrowless")) {
      options.arrow = false;
    }
    if (modifiers.includes("interactive")) {
      options.interactive = true;
    }
    if (modifiers.includes("border") && options.interactive) {
      options.interactiveBorder = parseInt(
        modifiers[modifiers.indexOf("border") + 1]
      );
    }
    if (modifiers.includes("debounce") && options.interactive) {
      options.interactiveDebounce = parseInt(
        modifiers[modifiers.indexOf("debounce") + 1]
      );
    }
    if (modifiers.includes("max-width")) {
      options.maxWidth = parseInt(modifiers[modifiers.indexOf("max-width") + 1]);
    }
    if (modifiers.includes("placement")) {
      options.placement = modifiers[modifiers.indexOf("placement") + 1];
    }
    if (modifiers.includes("allow_html")) {
      options.allowHTML = true;
    }
    if (modifiers.includes("light")) options.theme = "light";
    if (modifiers.includes("primary")) options.theme = "primary";
    if (modifiers.includes("secondary")) options.theme = "secondary";
    if (modifiers.includes("info")) options.theme = "info";
    if (modifiers.includes("success")) options.theme = "success";
    if (modifiers.includes("warning")) options.theme = "warning";
    if (modifiers.includes("error")) options.theme = "error";
    if (modifiers.includes("sm")) options.theme = `${options.theme} is-sm`;
    if (modifiers.includes("content")) {
      options.theme = "content";
      options.content = true;
    }
    if (modifiers.includes("appendto") && options.interactive) {
      options.appendTo = document.querySelector(modifiers[modifiers.indexOf("appendto") + 1]);
    }
    return options;
  };

  // src/javascripts/controllers/image_preview_controller.js
  var image_preview_controller_default = class extends Controller {
    static values = {
      url: String,
      title: String,
      createdAt: String,
      fileSize: String,
      fileType: String,
      location: String,
      contains: String,
      lastModified: String,
      lastOpened: String
    };
    connect() {
      this.element.style.cursor = "pointer";
    }
    click(event) {
      event.preventDefault();
      this.showSidebarPreview();
    }
    showSidebarPreview() {
      const isMobile = window.innerWidth < 768;
      const formatDateTime = (dateString) => {
        if (!dateString) return "\u672A\u77E5";
        try {
          const date = new Date(dateString);
          return date.toLocaleString("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).replace(/\//g, "-");
        } catch (e) {
          return dateString;
        }
      };
      const createdAt = formatDateTime(this.createdAtValue || this.element.dataset.createdAt);
      const fileSize = this.fileSizeValue || this.element.dataset.fileSize || "\u672A\u77E5";
      const fileType = this.fileTypeValue || this.element.dataset.fileType || "\u672A\u77E5";
      const location = this.locationValue || this.element.dataset.location || "\u7167\u7247\u5E93/";
      const contains2 = this.containsValue || this.element.dataset.contains || "0\u4E2A\u6587\u4EF6, 0\u4E2A\u6587\u4EF6\u5939, \u51710 MB";
      const lastModified = formatDateTime(this.lastModifiedValue || this.element.dataset.lastModified || this.createdAtValue);
      const lastOpened = formatDateTime(this.lastOpenedValue || this.element.dataset.lastOpened || (/* @__PURE__ */ new Date()).toISOString());
      const contentHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">\u8BE6\u60C5\u4FE1\u606F</h2>
          <button class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  data-action="click->image-preview#close">
            <i class="ri-close-line text-2xl"></i>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">\u7D20\u6750\u5E93</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-500 dark:text-gray-400">\u4E0A\u6B21\u6253\u5F00\u65F6\u95F4:</span>
                <span class="text-gray-900 dark:text-gray-100">${lastOpened}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500 dark:text-gray-400">\u6587\u4EF6\u5927\u5C0F:</span>
                <span class="text-gray-900 dark:text-gray-100">${fileSize}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500 dark:text-gray-400">\u5305\u542B:</span>
                <span class="text-gray-900 dark:text-gray-100">${contains2}</span>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 text-sm">
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">\u6587\u4EF6\u540D</div>
              <div class="text-gray-900 dark:text-gray-100">${this.titleValue || "\u672A\u547D\u540D"}</div>
            </div>
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">\u521B\u5EFA\u65F6\u95F4</div>
              <div class="text-gray-900 dark:text-gray-100">${createdAt}</div>
            </div>
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">\u4F4D\u7F6E</div>
              <div class="text-gray-900 dark:text-gray-100">${location}</div>
            </div>
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">\u4E0A\u6B21\u4FEE\u6539\u65F6\u95F4</div>
              <div class="text-gray-900 dark:text-gray-100">${lastModified}</div>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <a href="${this.urlValue}" class="block w-full px-4 py-2 border bg-primary hover:bg-primary/90 text-primary-content text-center rounded-md transition-colors">
              <i class="ri-download-line mr-2"></i>
              \u4E0B\u8F7D
            </a>
          </div>
        </div>
      </div>
    `;
      if (isMobile) {
        let modal = document.getElementById("image-preview-modal");
        if (!modal) {
          modal = document.createElement("div");
          modal.id = "image-preview-modal";
          modal.className = "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm";
          modal.innerHTML = `
          <div class="absolute inset-0" data-action="click->image-preview#close"></div>
          <aside class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
            ${contentHTML}
          </aside>
        `;
          document.body.appendChild(modal);
          const backdrop = modal.querySelector(".absolute.inset-0");
          if (backdrop) {
            backdrop.addEventListener("click", () => this.close());
          }
        } else {
          const aside = modal.querySelector("aside");
          if (aside) {
            aside.innerHTML = contentHTML;
          }
          const backdrop = modal.querySelector(".absolute.inset-0");
          if (backdrop) {
            backdrop.replaceWith(backdrop.cloneNode(true));
            backdrop.addEventListener("click", () => this.close());
          }
        }
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      } else {
        let sidebar = document.getElementById("image-preview-sidebar");
        if (!sidebar) {
          sidebar = document.createElement("aside");
          sidebar.id = "image-preview-sidebar";
          sidebar.className = "flex-0 w-96 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto";
          const main2 = document.querySelector("main");
          if (main2) {
            const flexContainer = main2.querySelector(".flex-1.flex");
            if (flexContainer) {
              flexContainer.appendChild(sidebar);
            }
          }
        }
        sidebar.innerHTML = contentHTML;
        sidebar.classList.remove("hidden");
      }
      const closeButton = (isMobile ? document.getElementById("image-preview-modal") : document.getElementById("image-preview-sidebar"))?.querySelector('[data-action*="close"]');
      if (closeButton) {
        const newCloseButton = closeButton.cloneNode(true);
        closeButton.parentNode.replaceChild(newCloseButton, closeButton);
        newCloseButton.addEventListener("click", () => {
          this.close();
        });
      }
    }
    close() {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const modal = document.getElementById("image-preview-modal");
        if (modal) {
          modal.classList.add("hidden");
        }
        document.body.style.overflow = "";
      } else {
        const sidebar = document.getElementById("image-preview-sidebar");
        if (sidebar) {
          sidebar.classList.add("hidden");
        }
      }
    }
  };

  // src/javascripts/controllers/view_toggle_controller.js
  var view_toggle_controller_default = class extends Controller {
    connect() {
      let savedView = localStorage.getItem("picture-portal-view");
      if (!savedView || savedView === "") {
        const container = document.querySelector("[data-default-view-mode]");
        if (container && container.dataset.defaultViewMode) {
          savedView = container.dataset.defaultViewMode;
          if (savedView === "\u7F51\u683C" || savedView === "Grid") {
            savedView = "grid";
          } else if (savedView === "\u5217\u8868" || savedView === "List") {
            savedView = "list";
          }
          if (savedView !== "grid" && savedView !== "list") {
            savedView = "grid";
          }
        } else {
          savedView = "grid";
        }
      } else {
        if (savedView === "card") {
          savedView = "grid";
        } else if (savedView !== "grid" && savedView !== "list") {
          savedView = "grid";
        }
      }
      this.switchView(savedView);
    }
    toggle(event) {
      event.preventDefault();
      const view = this.element.dataset.view;
      this.switchView(view);
    }
    switchView(view) {
      document.querySelectorAll(".view-toggle").forEach((btn) => {
        if (btn.dataset.view === view) {
          btn.classList.add("bg-primary-100", "dark:bg-primary-900/20", "border-primary", "text-primary", "dark:text-primary");
          btn.classList.remove("bg-white", "dark:bg-gray-800", "border-gray-300", "dark:border-gray-600");
        } else {
          btn.classList.remove("bg-primary-100", "dark:bg-primary-900/20", "border-primary", "text-primary", "dark:text-primary");
          btn.classList.add("bg-white", "dark:bg-gray-800", "border-gray-300", "dark:border-gray-600");
        }
      });
      const gridView = document.getElementById("grid-view") || document.getElementById("card-view");
      const listView = document.getElementById("list-view");
      if (view === "grid" || view === "card") {
        if (gridView) {
          gridView.classList.remove("hidden");
          gridView.style.display = "";
        }
        if (listView) {
          listView.classList.add("hidden");
          listView.style.display = "none";
        }
      } else if (view === "list") {
        if (gridView) {
          gridView.classList.add("hidden");
          gridView.style.display = "none";
        }
        if (listView) {
          listView.classList.remove("hidden");
          listView.style.display = "";
        }
      }
      const checkedValues = /* @__PURE__ */ new Set();
      const currentCheckboxes = document.querySelectorAll(".batch-checkbox:checked");
      currentCheckboxes.forEach((cb) => {
        checkedValues.add(cb.value);
      });
      const checkboxes = document.querySelectorAll(".batch-checkbox");
      if (checkboxes.length > 0) {
        checkboxes.forEach((cb) => {
          cb.style.display = "";
          if (checkedValues.has(cb.value)) {
            cb.checked = true;
          }
        });
      }
      const selectAllCheckbox = document.querySelector(".select-all-checkbox");
      if (selectAllCheckbox && checkboxes.length > 0) {
        const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
        const someChecked = Array.from(checkboxes).some((cb) => cb.checked);
        selectAllCheckbox.checked = allChecked;
        selectAllCheckbox.indeterminate = !allChecked && someChecked;
      }
      const batchActions = document.getElementById("batch-actions");
      if (batchActions) {
        const hasChecked = Array.from(checkboxes).some((cb) => cb.checked);
        if (hasChecked) {
          batchActions.style.display = "flex";
        } else {
          batchActions.style.display = "none";
        }
      }
      const viewToSave = view === "grid" || view === "list" ? view : "grid";
      localStorage.setItem("picture-portal-view", viewToSave);
      setTimeout(() => {
        const zoomController = document.querySelector('[data-controller*="image-zoom"]');
        if (zoomController) {
          const slider = zoomController.querySelector('input[type="range"]');
          if (slider) {
            const event = new Event("input", { bubbles: true });
            slider.dispatchEvent(event);
          }
        }
      }, 100);
    }
  };

  // src/javascripts/controllers/batch_download_controller.js
  var batch_download_controller_default = class extends Controller {
    connect() {
      this.selectedItems = /* @__PURE__ */ new Set();
    }
    download(event) {
      event.preventDefault();
      const checkboxes = document.querySelectorAll(".batch-checkbox:checked");
      const items = Array.from(checkboxes).map((cb) => ({
        id: cb.value,
        url: cb.closest("tr, .bg-white, .dark\\:bg-gray-800")?.querySelector("a[href]")?.href || "",
        name: cb.closest("tr, .bg-white, .dark\\:bg-gray-800")?.querySelector("h3, td a")?.textContent || ""
      }));
      if (items.length === 0) {
        alert("\u8BF7\u5148\u9009\u62E9\u8981\u4E0B\u8F7D\u7684\u8D44\u6E90");
        return;
      }
      items.forEach((item, index) => {
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = item.url;
          link.download = item.name;
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, index * 200);
      });
    }
  };

  // src/javascripts/controllers/filter_select_controller.js
  var filter_select_controller_default = class extends Controller {
    change(event) {
      const select = event.target;
      const value = select.value;
      const paramName = select.dataset.paramName || "tag";
      if (value) {
        const url = new URL(window.location.href);
        url.searchParams.set(paramName, value);
        window.location.href = url.toString();
      } else {
        const url = new URL(window.location.href);
        url.searchParams.delete(paramName);
        window.location.href = url.toString();
      }
    }
  };

  // src/javascripts/controllers/file_size_filter_controller.js
  var file_size_filter_controller_default = class extends Controller {
    static targets = ["minSize", "maxSize"];
    static values = {
      paramName: String
    };
    connect() {
      const urlParams = new URLSearchParams(window.location.search);
      const paramName = this.paramNameValue || "size";
      const minSize = urlParams.get(`${paramName}_min`);
      const maxSize = urlParams.get(`${paramName}_max`);
      if (minSize && this.hasMinSizeTarget) {
        this.minSizeTarget.value = minSize;
      }
      if (maxSize && this.hasMaxSizeTarget) {
        this.maxSizeTarget.value = maxSize;
      }
    }
    updateFilter() {
      const paramName = this.paramNameValue || "size";
      const minSize = this.hasMinSizeTarget ? this.minSizeTarget.value : "";
      const maxSize = this.hasMaxSizeTarget ? this.maxSizeTarget.value : "";
      const url = new URL(window.location.href);
      if (minSize) {
        url.searchParams.set(`${paramName}_min`, minSize);
      } else {
        url.searchParams.delete(`${paramName}_min`);
      }
      if (maxSize) {
        url.searchParams.set(`${paramName}_max`, maxSize);
      } else {
        url.searchParams.delete(`${paramName}_max`);
      }
      const event = new CustomEvent("file-size-filter-change", {
        detail: {
          minSize: minSize || null,
          maxSize: maxSize || null
        }
      });
      window.dispatchEvent(event);
      if (window.Alpine && document.querySelector('[x-data*="attachmentsQuery"]')) {
        const alpineElement = document.querySelector('[x-data*="attachmentsQuery"]');
        if (alpineElement && alpineElement._x_dataStack) {
          const alpineData = alpineElement._x_dataStack[0];
          if (alpineData && alpineData.attachmentsQuery) {
            if (minSize) {
              alpineData.attachmentsQuery[`${paramName}_min`] = minSize;
            } else {
              delete alpineData.attachmentsQuery[`${paramName}_min`];
            }
            if (maxSize) {
              alpineData.attachmentsQuery[`${paramName}_max`] = maxSize;
            } else {
              delete alpineData.attachmentsQuery[`${paramName}_max`];
            }
          }
        }
      }
    }
  };

  // src/javascripts/controllers/sidebar_toggle_controller.js
  var sidebar_toggle_controller_default = class extends Controller {
    static values = {
      sidebarId: { type: String, default: "main-sidebar" }
    };
    connect() {
      this.sidebar = document.getElementById(this.sidebarIdValue || "main-sidebar");
      if (!this.sidebar) return;
      this.lastScreenSize = window.innerWidth < 1024 ? "mobile" : "desktop";
      this.initializeSidebarState();
      window.addEventListener("resize", this.handleResize.bind(this));
    }
    disconnect() {
      window.removeEventListener("resize", this.handleResize.bind(this));
      if (this.overlay) {
        this.overlay.remove();
      }
      document.body.style.overflow = "";
    }
    toggle(event) {
      event.preventDefault();
      if (!this.sidebar) return;
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        const isHidden = this.sidebar.classList.contains("-translate-x-full");
        this.sidebar.setAttribute("data-user-toggled", "true");
        if (isHidden) {
          this.sidebar.classList.remove("-translate-x-full");
          this.showOverlay();
        } else {
          this.sidebar.classList.add("-translate-x-full");
          this.hideOverlay();
        }
      } else {
        const isCurrentlyHidden = this.sidebar.classList.contains("hidden");
        this.sidebar.setAttribute("data-user-toggled", "true");
        if (isCurrentlyHidden) {
          this.sidebar.classList.remove("hidden");
        } else {
          this.sidebar.classList.add("hidden");
        }
        const isHidden = this.sidebar.classList.contains("hidden");
        localStorage.setItem("sidebar-hidden", isHidden);
      }
    }
    showOverlay() {
      if (!this.overlay) {
        this.overlay = document.createElement("div");
        this.overlay.id = "sidebar-overlay";
        this.overlay.className = "fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden hidden";
        this.overlay.addEventListener("click", () => {
          this.toggle({ preventDefault: () => {
          } });
        });
        document.body.appendChild(this.overlay);
      }
      this.overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    hideOverlay() {
      if (this.overlay) {
        this.overlay.classList.add("hidden");
      }
      document.body.style.overflow = "";
    }
    initializeSidebarState() {
      if (!this.sidebar) return;
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        if (!this.sidebar.classList.contains("-translate-x-full")) {
          this.sidebar.classList.add("-translate-x-full");
        }
        this.hideOverlay();
      } else {
        const sidebarHidden = localStorage.getItem("sidebar-hidden") === "true";
        if (sidebarHidden) {
          this.sidebar.classList.add("hidden");
        } else {
          this.sidebar.classList.remove("hidden");
        }
        this.sidebar.classList.remove("-translate-x-full");
        this.hideOverlay();
      }
    }
    updateSidebarState() {
      if (!this.sidebar) return;
      const isMobile = window.innerWidth < 1024;
      const wasMobile = this.lastScreenSize === "mobile";
      const screenSizeChanged = wasMobile !== isMobile;
      this.lastScreenSize = isMobile ? "mobile" : "desktop";
      if (screenSizeChanged) {
        if (isMobile) {
          this.sidebar.classList.remove("hidden");
          if (!this.sidebar.hasAttribute("data-user-toggled")) {
            this.sidebar.classList.add("-translate-x-full");
            this.hideOverlay();
          }
        } else {
          this.sidebar.classList.remove("-translate-x-full");
          this.hideOverlay();
          const sidebarHidden = localStorage.getItem("sidebar-hidden") === "true";
          if (sidebarHidden) {
            this.sidebar.classList.add("hidden");
          } else {
            this.sidebar.classList.remove("hidden");
          }
          this.sidebar.removeAttribute("data-user-toggled");
        }
      }
    }
    handleResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.updateSidebarState();
      }, 150);
    }
  };

  // src/javascripts/controllers/image_zoom_controller.js
  var image_zoom_controller_default = class extends Controller {
    static targets = ["zoomControl", "view", "item", "errorMessage", "value"];
    static values = {};
    initialize() {
      this.savedZoom = localStorage.getItem("image-zoom") || "100";
      this.baseItemSize = this.calculateBaseItemSize();
    }
    // 根据窗口宽度计算基础尺寸
    calculateBaseItemSize() {
      const windowWidth = window.innerWidth;
      const space = 16;
      if (!this.hasViewTarget) return 0;
      console.log("calculateBaseItemSize", windowWidth);
      const containerWidth = this.viewTarget.getBoundingClientRect().width;
      const containerPadding = parseFloat(getComputedStyle(this.viewTarget).paddingLeft) * 2;
      if (windowWidth < 480) {
        return (containerWidth - containerPadding - space) / 2;
      }
      if (windowWidth < 768) {
        return (containerWidth - containerPadding - space) / 2;
      } else if (windowWidth < 1024) {
        console.log("768-1024");
        return (containerWidth - containerPadding - space * 3) / 4;
      } else if (windowWidth >= 1024 && windowWidth < 1366) {
        console.log("1024-1366");
        return (containerWidth - containerPadding - space * 3) / 4;
      } else if (windowWidth >= 1366 && windowWidth < 1920) {
        console.log("1366-1920");
        return (containerWidth - containerPadding - space * 3) / 4;
      } else if (windowWidth >= 1920 && windowWidth < 2560) {
        console.log("1920-2560");
        return (containerWidth - containerPadding - space * 4) / 5;
      } else {
        return 400;
      }
    }
    connect() {
      if (this.hasZoomControlTarget) {
        this.zoomControlTarget.value = this.savedZoom;
        this.updateValue(this.savedZoom);
        this.applyZoom(this.savedZoom);
      } else {
        return;
      }
      if (this.hasViewTarget) this.viewTarget.removeAttribute("x-cloak");
      this.handleResize = this.debounce(() => {
        this.baseItemSize = this.calculateBaseItemSize();
        if (this.hasZoomControlTarget) {
          const currentZoom = this.zoomControlTarget.value;
          this.applyZoom(currentZoom);
        }
      }, 150);
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("sidebar-collapsed-status-changed", this.handleResize);
    }
    viewTargetConnected() {
      if (!this.hasZoomControlTarget) return;
      if (this.hasViewTarget) {
        this.viewTarget.removeAttribute("x-cloak");
        const currentZoom = this.zoomControlTarget.value;
        this.applyZoom(currentZoom);
        this.baseItemSize = this.calculateBaseItemSize();
      }
    }
    disconnect() {
      window.removeEventListener("resize", this.handleResize);
      if (this.handleTurboFrameLoad) {
        document.removeEventListener("turbo:frame-load", this.handleTurboFrameLoad);
      }
    }
    // 防抖函数
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    change(event) {
      const zoom = event.target.value;
      this.updateValue(zoom);
      this.applyZoom(zoom);
      localStorage.setItem("image-zoom", zoom);
    }
    updateValue(zoom) {
      if (this.hasValueTarget) {
        this.valueTarget.textContent = `${zoom}%`;
      }
    }
    // 重置缩放值到 100%
    reset(event) {
      event.preventDefault();
      const defaultZoom = "100";
      if (this.hasZoomControlTarget) {
        this.zoomControlTarget.value = defaultZoom;
      }
      this.updateValue(defaultZoom);
      this.applyZoom(defaultZoom);
      localStorage.setItem("image-zoom", defaultZoom);
    }
    // 增加缩放
    zoomIn(event) {
      event.preventDefault();
      if (!this.hasZoomControlTarget) return;
      const currentZoom = parseInt(this.zoomControlTarget.value);
      const min2 = parseInt(this.zoomControlTarget.min) || 50;
      const max2 = parseInt(this.zoomControlTarget.max) || 200;
      const step = parseInt(this.zoomControlTarget.step) || 10;
      const newZoom = Math.min(max2, currentZoom + step);
      this.zoomControlTarget.value = newZoom;
      this.updateValue(newZoom.toString());
      this.applyZoom(newZoom.toString());
      localStorage.setItem("image-zoom", newZoom.toString());
    }
    // 减少缩放
    zoomOut(event) {
      event.preventDefault();
      if (!this.hasZoomControlTarget) return;
      const currentZoom = parseInt(this.zoomControlTarget.value);
      const min2 = parseInt(this.zoomControlTarget.min) || 50;
      const max2 = parseInt(this.zoomControlTarget.max) || 200;
      const step = parseInt(this.zoomControlTarget.step) || 10;
      const newZoom = Math.max(min2, currentZoom - step);
      this.zoomControlTarget.value = newZoom;
      this.updateValue(newZoom.toString());
      this.applyZoom(newZoom.toString());
      localStorage.setItem("image-zoom", newZoom.toString());
    }
    applyZoom(zoom) {
      requestAnimationFrame(() => {
        const zoomValue = parseInt(zoom) / 100;
        document.documentElement.style.setProperty("--view-zoom", zoomValue);
        if (!this.hasViewTarget) return;
        this.applyViewZoom(this.viewTarget, zoomValue);
      });
    }
    applyViewZoom(view, zoomValue) {
      if (this.hasItemTarget) {
        this.itemTargets.forEach((item) => {
          if (!view.contains(item)) return;
          const itemSize = this.baseItemSize * zoomValue;
          item.style.width = `${itemSize}px`;
        });
      }
    }
  };

  // src/javascripts/controllers/view_mode_toggle_controller.js
  var view_mode_toggle_controller_default = class extends Controller {
    connect() {
      const savedMode = localStorage.getItem("grid-view-mode") || "tile";
      this.switchMode(savedMode, false);
    }
    toggle(event) {
      event.preventDefault();
      const mode = event.currentTarget.dataset.viewMode;
      this.switchMode(mode, true);
    }
    switchMode(mode, save = true) {
      const gridView = document.getElementById("grid-view");
      if (!gridView) return;
      gridView.setAttribute("data-view-mode", mode);
      document.querySelectorAll(".view-mode-btn").forEach((btn) => {
        const btnMode = btn.dataset.viewMode;
        if (btnMode === mode) {
          btn.classList.add("bg-primary-100", "dark:bg-primary-900/20", "border-primary", "text-primary", "dark:text-primary");
          btn.classList.remove("bg-white", "dark:bg-gray-800", "text-gray-600", "dark:text-gray-400");
        } else {
          btn.classList.remove("bg-primary-100", "dark:bg-primary-900/20", "border-primary", "text-primary", "dark:text-primary");
          btn.classList.add("bg-white", "dark:bg-gray-800", "text-gray-600", "dark:text-gray-400");
        }
      });
      const zoomController = document.querySelector('[data-controller*="image-zoom"]');
      if (zoomController) {
        const zoomSlider = zoomController.querySelector('input[type="range"]');
        if (zoomSlider) {
          zoomSlider.dispatchEvent(new Event("input"));
        }
      }
      if (save) {
        localStorage.setItem("grid-view-mode", mode);
      }
    }
  };

  // src/javascripts/controllers/sort_options_controller.js
  var sort_options_controller_default = class extends Controller {
    static targets = ["menu"];
    toggle(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.hasMenuTarget) {
        this.menuTarget.classList.toggle("hidden");
        if (!this.menuTarget.classList.contains("hidden")) {
          setTimeout(() => {
            document.addEventListener("click", this.closeMenu.bind(this), { once: true });
          }, 0);
        }
      }
    }
    closeMenu(event) {
      if (this.hasMenuTarget && !this.menuTarget.contains(event.target) && !this.element.contains(event.target)) {
        this.menuTarget.classList.add("hidden");
      }
    }
  };

  // src/javascripts/controllers/more_menu_controller.js
  var more_menu_controller_default = class extends Controller {
    static targets = ["menu"];
    toggle(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.hasMenuTarget) {
        this.menuTarget.classList.toggle("hidden");
        if (!this.menuTarget.classList.contains("hidden")) {
          setTimeout(() => {
            document.addEventListener("click", this.closeMenu.bind(this), { once: true });
          }, 0);
        }
      }
    }
    closeMenu(event) {
      if (this.hasMenuTarget && !this.menuTarget.contains(event.target) && !this.element.contains(event.target)) {
        this.menuTarget.classList.add("hidden");
      }
    }
  };

  // src/javascripts/controllers/user_menu_controller.js
  var user_menu_controller_default = class extends Controller {
    static targets = ["menu"];
    toggle(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.hasMenuTarget) {
        this.menuTarget.classList.toggle("hidden");
        if (!this.menuTarget.classList.contains("hidden")) {
          setTimeout(() => {
            document.addEventListener("click", this.closeMenu.bind(this), { once: true });
          }, 0);
        }
      }
    }
    closeMenu(event) {
      if (this.hasMenuTarget && !this.menuTarget.contains(event.target) && !this.element.contains(event.target)) {
        this.menuTarget.classList.add("hidden");
      }
    }
  };

  // src/javascripts/utils/index.js
  var import_qs = __toESM(require_lib());

  // node_modules/mime/dist/types/other.js
  var types = {
    "application/prs.cww": ["cww"],
    "application/prs.xsf+xml": ["xsf"],
    "application/vnd.1000minds.decision-model+xml": ["1km"],
    "application/vnd.3gpp.pic-bw-large": ["plb"],
    "application/vnd.3gpp.pic-bw-small": ["psb"],
    "application/vnd.3gpp.pic-bw-var": ["pvb"],
    "application/vnd.3gpp2.tcap": ["tcap"],
    "application/vnd.3m.post-it-notes": ["pwn"],
    "application/vnd.accpac.simply.aso": ["aso"],
    "application/vnd.accpac.simply.imp": ["imp"],
    "application/vnd.acucobol": ["acu"],
    "application/vnd.acucorp": ["atc", "acutc"],
    "application/vnd.adobe.air-application-installer-package+zip": ["air"],
    "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
    "application/vnd.adobe.fxp": ["fxp", "fxpl"],
    "application/vnd.adobe.xdp+xml": ["xdp"],
    "application/vnd.adobe.xfdf": ["*xfdf"],
    "application/vnd.age": ["age"],
    "application/vnd.ahead.space": ["ahead"],
    "application/vnd.airzip.filesecure.azf": ["azf"],
    "application/vnd.airzip.filesecure.azs": ["azs"],
    "application/vnd.amazon.ebook": ["azw"],
    "application/vnd.americandynamics.acc": ["acc"],
    "application/vnd.amiga.ami": ["ami"],
    "application/vnd.android.package-archive": ["apk"],
    "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
    "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
    "application/vnd.antix.game-component": ["atx"],
    "application/vnd.apple.installer+xml": ["mpkg"],
    "application/vnd.apple.keynote": ["key"],
    "application/vnd.apple.mpegurl": ["m3u8"],
    "application/vnd.apple.numbers": ["numbers"],
    "application/vnd.apple.pages": ["pages"],
    "application/vnd.apple.pkpass": ["pkpass"],
    "application/vnd.aristanetworks.swi": ["swi"],
    "application/vnd.astraea-software.iota": ["iota"],
    "application/vnd.audiograph": ["aep"],
    "application/vnd.autodesk.fbx": ["fbx"],
    "application/vnd.balsamiq.bmml+xml": ["bmml"],
    "application/vnd.blueice.multipass": ["mpm"],
    "application/vnd.bmi": ["bmi"],
    "application/vnd.businessobjects": ["rep"],
    "application/vnd.chemdraw+xml": ["cdxml"],
    "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
    "application/vnd.cinderella": ["cdy"],
    "application/vnd.citationstyles.style+xml": ["csl"],
    "application/vnd.claymore": ["cla"],
    "application/vnd.cloanto.rp9": ["rp9"],
    "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
    "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
    "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
    "application/vnd.commonspace": ["csp"],
    "application/vnd.contact.cmsg": ["cdbcmsg"],
    "application/vnd.cosmocaller": ["cmc"],
    "application/vnd.crick.clicker": ["clkx"],
    "application/vnd.crick.clicker.keyboard": ["clkk"],
    "application/vnd.crick.clicker.palette": ["clkp"],
    "application/vnd.crick.clicker.template": ["clkt"],
    "application/vnd.crick.clicker.wordbank": ["clkw"],
    "application/vnd.criticaltools.wbs+xml": ["wbs"],
    "application/vnd.ctc-posml": ["pml"],
    "application/vnd.cups-ppd": ["ppd"],
    "application/vnd.curl.car": ["car"],
    "application/vnd.curl.pcurl": ["pcurl"],
    "application/vnd.dart": ["dart"],
    "application/vnd.data-vision.rdz": ["rdz"],
    "application/vnd.dbf": ["dbf"],
    "application/vnd.dcmp+xml": ["dcmp"],
    "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
    "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
    "application/vnd.dece.unspecified": ["uvx", "uvvx"],
    "application/vnd.dece.zip": ["uvz", "uvvz"],
    "application/vnd.denovo.fcselayout-link": ["fe_launch"],
    "application/vnd.dna": ["dna"],
    "application/vnd.dolby.mlp": ["mlp"],
    "application/vnd.dpgraph": ["dpg"],
    "application/vnd.dreamfactory": ["dfac"],
    "application/vnd.ds-keypoint": ["kpxx"],
    "application/vnd.dvb.ait": ["ait"],
    "application/vnd.dvb.service": ["svc"],
    "application/vnd.dynageo": ["geo"],
    "application/vnd.ecowin.chart": ["mag"],
    "application/vnd.enliven": ["nml"],
    "application/vnd.epson.esf": ["esf"],
    "application/vnd.epson.msf": ["msf"],
    "application/vnd.epson.quickanime": ["qam"],
    "application/vnd.epson.salt": ["slt"],
    "application/vnd.epson.ssf": ["ssf"],
    "application/vnd.eszigno3+xml": ["es3", "et3"],
    "application/vnd.ezpix-album": ["ez2"],
    "application/vnd.ezpix-package": ["ez3"],
    "application/vnd.fdf": ["*fdf"],
    "application/vnd.fdsn.mseed": ["mseed"],
    "application/vnd.fdsn.seed": ["seed", "dataless"],
    "application/vnd.flographit": ["gph"],
    "application/vnd.fluxtime.clip": ["ftc"],
    "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
    "application/vnd.frogans.fnc": ["fnc"],
    "application/vnd.frogans.ltf": ["ltf"],
    "application/vnd.fsc.weblaunch": ["fsc"],
    "application/vnd.fujitsu.oasys": ["oas"],
    "application/vnd.fujitsu.oasys2": ["oa2"],
    "application/vnd.fujitsu.oasys3": ["oa3"],
    "application/vnd.fujitsu.oasysgp": ["fg5"],
    "application/vnd.fujitsu.oasysprs": ["bh2"],
    "application/vnd.fujixerox.ddd": ["ddd"],
    "application/vnd.fujixerox.docuworks": ["xdw"],
    "application/vnd.fujixerox.docuworks.binder": ["xbd"],
    "application/vnd.fuzzysheet": ["fzs"],
    "application/vnd.genomatix.tuxedo": ["txd"],
    "application/vnd.geogebra.file": ["ggb"],
    "application/vnd.geogebra.slides": ["ggs"],
    "application/vnd.geogebra.tool": ["ggt"],
    "application/vnd.geometry-explorer": ["gex", "gre"],
    "application/vnd.geonext": ["gxt"],
    "application/vnd.geoplan": ["g2w"],
    "application/vnd.geospace": ["g3w"],
    "application/vnd.gmx": ["gmx"],
    "application/vnd.google-apps.document": ["gdoc"],
    "application/vnd.google-apps.drawing": ["gdraw"],
    "application/vnd.google-apps.form": ["gform"],
    "application/vnd.google-apps.jam": ["gjam"],
    "application/vnd.google-apps.map": ["gmap"],
    "application/vnd.google-apps.presentation": ["gslides"],
    "application/vnd.google-apps.script": ["gscript"],
    "application/vnd.google-apps.site": ["gsite"],
    "application/vnd.google-apps.spreadsheet": ["gsheet"],
    "application/vnd.google-earth.kml+xml": ["kml"],
    "application/vnd.google-earth.kmz": ["kmz"],
    "application/vnd.gov.sk.xmldatacontainer+xml": ["xdcf"],
    "application/vnd.grafeq": ["gqf", "gqs"],
    "application/vnd.groove-account": ["gac"],
    "application/vnd.groove-help": ["ghf"],
    "application/vnd.groove-identity-message": ["gim"],
    "application/vnd.groove-injector": ["grv"],
    "application/vnd.groove-tool-message": ["gtm"],
    "application/vnd.groove-tool-template": ["tpl"],
    "application/vnd.groove-vcard": ["vcg"],
    "application/vnd.hal+xml": ["hal"],
    "application/vnd.handheld-entertainment+xml": ["zmm"],
    "application/vnd.hbci": ["hbci"],
    "application/vnd.hhe.lesson-player": ["les"],
    "application/vnd.hp-hpgl": ["hpgl"],
    "application/vnd.hp-hpid": ["hpid"],
    "application/vnd.hp-hps": ["hps"],
    "application/vnd.hp-jlyt": ["jlt"],
    "application/vnd.hp-pcl": ["pcl"],
    "application/vnd.hp-pclxl": ["pclxl"],
    "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
    "application/vnd.ibm.minipay": ["mpy"],
    "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
    "application/vnd.ibm.rights-management": ["irm"],
    "application/vnd.ibm.secure-container": ["sc"],
    "application/vnd.iccprofile": ["icc", "icm"],
    "application/vnd.igloader": ["igl"],
    "application/vnd.immervision-ivp": ["ivp"],
    "application/vnd.immervision-ivu": ["ivu"],
    "application/vnd.insors.igm": ["igm"],
    "application/vnd.intercon.formnet": ["xpw", "xpx"],
    "application/vnd.intergeo": ["i2g"],
    "application/vnd.intu.qbo": ["qbo"],
    "application/vnd.intu.qfx": ["qfx"],
    "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
    "application/vnd.irepository.package+xml": ["irp"],
    "application/vnd.is-xpr": ["xpr"],
    "application/vnd.isac.fcs": ["fcs"],
    "application/vnd.jam": ["jam"],
    "application/vnd.jcp.javame.midlet-rms": ["rms"],
    "application/vnd.jisp": ["jisp"],
    "application/vnd.joost.joda-archive": ["joda"],
    "application/vnd.kahootz": ["ktz", "ktr"],
    "application/vnd.kde.karbon": ["karbon"],
    "application/vnd.kde.kchart": ["chrt"],
    "application/vnd.kde.kformula": ["kfo"],
    "application/vnd.kde.kivio": ["flw"],
    "application/vnd.kde.kontour": ["kon"],
    "application/vnd.kde.kpresenter": ["kpr", "kpt"],
    "application/vnd.kde.kspread": ["ksp"],
    "application/vnd.kde.kword": ["kwd", "kwt"],
    "application/vnd.kenameaapp": ["htke"],
    "application/vnd.kidspiration": ["kia"],
    "application/vnd.kinar": ["kne", "knp"],
    "application/vnd.koan": ["skp", "skd", "skt", "skm"],
    "application/vnd.kodak-descriptor": ["sse"],
    "application/vnd.las.las+xml": ["lasxml"],
    "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
    "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
    "application/vnd.lotus-1-2-3": ["123"],
    "application/vnd.lotus-approach": ["apr"],
    "application/vnd.lotus-freelance": ["pre"],
    "application/vnd.lotus-notes": ["nsf"],
    "application/vnd.lotus-organizer": ["org"],
    "application/vnd.lotus-screencam": ["scm"],
    "application/vnd.lotus-wordpro": ["lwp"],
    "application/vnd.macports.portpkg": ["portpkg"],
    "application/vnd.mapbox-vector-tile": ["mvt"],
    "application/vnd.mcd": ["mcd"],
    "application/vnd.medcalcdata": ["mc1"],
    "application/vnd.mediastation.cdkey": ["cdkey"],
    "application/vnd.mfer": ["mwf"],
    "application/vnd.mfmp": ["mfm"],
    "application/vnd.micrografx.flo": ["flo"],
    "application/vnd.micrografx.igx": ["igx"],
    "application/vnd.mif": ["mif"],
    "application/vnd.mobius.daf": ["daf"],
    "application/vnd.mobius.dis": ["dis"],
    "application/vnd.mobius.mbk": ["mbk"],
    "application/vnd.mobius.mqy": ["mqy"],
    "application/vnd.mobius.msl": ["msl"],
    "application/vnd.mobius.plc": ["plc"],
    "application/vnd.mobius.txf": ["txf"],
    "application/vnd.mophun.application": ["mpn"],
    "application/vnd.mophun.certificate": ["mpc"],
    "application/vnd.mozilla.xul+xml": ["xul"],
    "application/vnd.ms-artgalry": ["cil"],
    "application/vnd.ms-cab-compressed": ["cab"],
    "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
    "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
    "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
    "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
    "application/vnd.ms-fontobject": ["eot"],
    "application/vnd.ms-htmlhelp": ["chm"],
    "application/vnd.ms-ims": ["ims"],
    "application/vnd.ms-lrm": ["lrm"],
    "application/vnd.ms-officetheme": ["thmx"],
    "application/vnd.ms-outlook": ["msg"],
    "application/vnd.ms-pki.seccat": ["cat"],
    "application/vnd.ms-pki.stl": ["*stl"],
    "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
    "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
    "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
    "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
    "application/vnd.ms-project": ["*mpp", "mpt"],
    "application/vnd.ms-visio.viewer": ["vdx"],
    "application/vnd.ms-word.document.macroenabled.12": ["docm"],
    "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
    "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
    "application/vnd.ms-wpl": ["wpl"],
    "application/vnd.ms-xpsdocument": ["xps"],
    "application/vnd.mseq": ["mseq"],
    "application/vnd.musician": ["mus"],
    "application/vnd.muvee.style": ["msty"],
    "application/vnd.mynfc": ["taglet"],
    "application/vnd.nato.bindingdataobject+xml": ["bdo"],
    "application/vnd.neurolanguage.nlu": ["nlu"],
    "application/vnd.nitf": ["ntf", "nitf"],
    "application/vnd.noblenet-directory": ["nnd"],
    "application/vnd.noblenet-sealer": ["nns"],
    "application/vnd.noblenet-web": ["nnw"],
    "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
    "application/vnd.nokia.n-gage.data": ["ngdat"],
    "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
    "application/vnd.nokia.radio-preset": ["rpst"],
    "application/vnd.nokia.radio-presets": ["rpss"],
    "application/vnd.novadigm.edm": ["edm"],
    "application/vnd.novadigm.edx": ["edx"],
    "application/vnd.novadigm.ext": ["ext"],
    "application/vnd.oasis.opendocument.chart": ["odc"],
    "application/vnd.oasis.opendocument.chart-template": ["otc"],
    "application/vnd.oasis.opendocument.database": ["odb"],
    "application/vnd.oasis.opendocument.formula": ["odf"],
    "application/vnd.oasis.opendocument.formula-template": ["odft"],
    "application/vnd.oasis.opendocument.graphics": ["odg"],
    "application/vnd.oasis.opendocument.graphics-template": ["otg"],
    "application/vnd.oasis.opendocument.image": ["odi"],
    "application/vnd.oasis.opendocument.image-template": ["oti"],
    "application/vnd.oasis.opendocument.presentation": ["odp"],
    "application/vnd.oasis.opendocument.presentation-template": ["otp"],
    "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
    "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
    "application/vnd.oasis.opendocument.text": ["odt"],
    "application/vnd.oasis.opendocument.text-master": ["odm"],
    "application/vnd.oasis.opendocument.text-template": ["ott"],
    "application/vnd.oasis.opendocument.text-web": ["oth"],
    "application/vnd.olpc-sugar": ["xo"],
    "application/vnd.oma.dd2+xml": ["dd2"],
    "application/vnd.openblox.game+xml": ["obgx"],
    "application/vnd.openofficeorg.extension": ["oxt"],
    "application/vnd.openstreetmap.data+xml": ["osm"],
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
      "pptx"
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.slide": [
      "sldx"
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": [
      "ppsx"
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.template": [
      "potx"
    ],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [
      "xltx"
    ],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      "docx"
    ],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": [
      "dotx"
    ],
    "application/vnd.osgeo.mapguide.package": ["mgp"],
    "application/vnd.osgi.dp": ["dp"],
    "application/vnd.osgi.subsystem": ["esa"],
    "application/vnd.palm": ["pdb", "pqa", "oprc"],
    "application/vnd.pawaafile": ["paw"],
    "application/vnd.pg.format": ["str"],
    "application/vnd.pg.osasli": ["ei6"],
    "application/vnd.picsel": ["efif"],
    "application/vnd.pmi.widget": ["wg"],
    "application/vnd.pocketlearn": ["plf"],
    "application/vnd.powerbuilder6": ["pbd"],
    "application/vnd.previewsystems.box": ["box"],
    "application/vnd.procrate.brushset": ["brushset"],
    "application/vnd.procreate.brush": ["brush"],
    "application/vnd.procreate.dream": ["drm"],
    "application/vnd.proteus.magazine": ["mgz"],
    "application/vnd.publishare-delta-tree": ["qps"],
    "application/vnd.pvi.ptid1": ["ptid"],
    "application/vnd.pwg-xhtml-print+xml": ["xhtm"],
    "application/vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "application/vnd.rar": ["rar"],
    "application/vnd.realvnc.bed": ["bed"],
    "application/vnd.recordare.musicxml": ["mxl"],
    "application/vnd.recordare.musicxml+xml": ["musicxml"],
    "application/vnd.rig.cryptonote": ["cryptonote"],
    "application/vnd.rim.cod": ["cod"],
    "application/vnd.rn-realmedia": ["rm"],
    "application/vnd.rn-realmedia-vbr": ["rmvb"],
    "application/vnd.route66.link66+xml": ["link66"],
    "application/vnd.sailingtracker.track": ["st"],
    "application/vnd.seemail": ["see"],
    "application/vnd.sema": ["sema"],
    "application/vnd.semd": ["semd"],
    "application/vnd.semf": ["semf"],
    "application/vnd.shana.informed.formdata": ["ifm"],
    "application/vnd.shana.informed.formtemplate": ["itp"],
    "application/vnd.shana.informed.interchange": ["iif"],
    "application/vnd.shana.informed.package": ["ipk"],
    "application/vnd.simtech-mindmapper": ["twd", "twds"],
    "application/vnd.smaf": ["mmf"],
    "application/vnd.smart.teacher": ["teacher"],
    "application/vnd.software602.filler.form+xml": ["fo"],
    "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
    "application/vnd.spotfire.dxp": ["dxp"],
    "application/vnd.spotfire.sfs": ["sfs"],
    "application/vnd.stardivision.calc": ["sdc"],
    "application/vnd.stardivision.draw": ["sda"],
    "application/vnd.stardivision.impress": ["sdd"],
    "application/vnd.stardivision.math": ["smf"],
    "application/vnd.stardivision.writer": ["sdw", "vor"],
    "application/vnd.stardivision.writer-global": ["sgl"],
    "application/vnd.stepmania.package": ["smzip"],
    "application/vnd.stepmania.stepchart": ["sm"],
    "application/vnd.sun.wadl+xml": ["wadl"],
    "application/vnd.sun.xml.calc": ["sxc"],
    "application/vnd.sun.xml.calc.template": ["stc"],
    "application/vnd.sun.xml.draw": ["sxd"],
    "application/vnd.sun.xml.draw.template": ["std"],
    "application/vnd.sun.xml.impress": ["sxi"],
    "application/vnd.sun.xml.impress.template": ["sti"],
    "application/vnd.sun.xml.math": ["sxm"],
    "application/vnd.sun.xml.writer": ["sxw"],
    "application/vnd.sun.xml.writer.global": ["sxg"],
    "application/vnd.sun.xml.writer.template": ["stw"],
    "application/vnd.sus-calendar": ["sus", "susp"],
    "application/vnd.svd": ["svd"],
    "application/vnd.symbian.install": ["sis", "sisx"],
    "application/vnd.syncml+xml": ["xsm"],
    "application/vnd.syncml.dm+wbxml": ["bdm"],
    "application/vnd.syncml.dm+xml": ["xdm"],
    "application/vnd.syncml.dmddf+xml": ["ddf"],
    "application/vnd.tao.intent-module-archive": ["tao"],
    "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
    "application/vnd.tmobile-livetv": ["tmo"],
    "application/vnd.trid.tpt": ["tpt"],
    "application/vnd.triscape.mxs": ["mxs"],
    "application/vnd.trueapp": ["tra"],
    "application/vnd.ufdl": ["ufd", "ufdl"],
    "application/vnd.uiq.theme": ["utz"],
    "application/vnd.umajin": ["umj"],
    "application/vnd.unity": ["unityweb"],
    "application/vnd.uoml+xml": ["uoml", "uo"],
    "application/vnd.vcx": ["vcx"],
    "application/vnd.visio": ["vsd", "vst", "vss", "vsw", "vsdx", "vtx"],
    "application/vnd.visionary": ["vis"],
    "application/vnd.vsf": ["vsf"],
    "application/vnd.wap.wbxml": ["wbxml"],
    "application/vnd.wap.wmlc": ["wmlc"],
    "application/vnd.wap.wmlscriptc": ["wmlsc"],
    "application/vnd.webturbo": ["wtb"],
    "application/vnd.wolfram.player": ["nbp"],
    "application/vnd.wordperfect": ["wpd"],
    "application/vnd.wqd": ["wqd"],
    "application/vnd.wt.stf": ["stf"],
    "application/vnd.xara": ["xar"],
    "application/vnd.xfdl": ["xfdl"],
    "application/vnd.yamaha.hv-dic": ["hvd"],
    "application/vnd.yamaha.hv-script": ["hvs"],
    "application/vnd.yamaha.hv-voice": ["hvp"],
    "application/vnd.yamaha.openscoreformat": ["osf"],
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
    "application/vnd.yamaha.smaf-audio": ["saf"],
    "application/vnd.yamaha.smaf-phrase": ["spf"],
    "application/vnd.yellowriver-custom-menu": ["cmp"],
    "application/vnd.zul": ["zir", "zirz"],
    "application/vnd.zzazz.deck+xml": ["zaz"],
    "application/x-7z-compressed": ["7z"],
    "application/x-abiword": ["abw"],
    "application/x-ace-compressed": ["ace"],
    "application/x-apple-diskimage": ["*dmg"],
    "application/x-arj": ["arj"],
    "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
    "application/x-authorware-map": ["aam"],
    "application/x-authorware-seg": ["aas"],
    "application/x-bcpio": ["bcpio"],
    "application/x-bdoc": ["*bdoc"],
    "application/x-bittorrent": ["torrent"],
    "application/x-blender": ["blend"],
    "application/x-blorb": ["blb", "blorb"],
    "application/x-bzip": ["bz"],
    "application/x-bzip2": ["bz2", "boz"],
    "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
    "application/x-cdlink": ["vcd"],
    "application/x-cfs-compressed": ["cfs"],
    "application/x-chat": ["chat"],
    "application/x-chess-pgn": ["pgn"],
    "application/x-chrome-extension": ["crx"],
    "application/x-cocoa": ["cco"],
    "application/x-compressed": ["*rar"],
    "application/x-conference": ["nsc"],
    "application/x-cpio": ["cpio"],
    "application/x-csh": ["csh"],
    "application/x-debian-package": ["*deb", "udeb"],
    "application/x-dgc-compressed": ["dgc"],
    "application/x-director": [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "application/x-doom": ["wad"],
    "application/x-dtbncx+xml": ["ncx"],
    "application/x-dtbook+xml": ["dtb"],
    "application/x-dtbresource+xml": ["res"],
    "application/x-dvi": ["dvi"],
    "application/x-envoy": ["evy"],
    "application/x-eva": ["eva"],
    "application/x-font-bdf": ["bdf"],
    "application/x-font-ghostscript": ["gsf"],
    "application/x-font-linux-psf": ["psf"],
    "application/x-font-pcf": ["pcf"],
    "application/x-font-snf": ["snf"],
    "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
    "application/x-freearc": ["arc"],
    "application/x-futuresplash": ["spl"],
    "application/x-gca-compressed": ["gca"],
    "application/x-glulx": ["ulx"],
    "application/x-gnumeric": ["gnumeric"],
    "application/x-gramps-xml": ["gramps"],
    "application/x-gtar": ["gtar"],
    "application/x-hdf": ["hdf"],
    "application/x-httpd-php": ["php"],
    "application/x-install-instructions": ["install"],
    "application/x-ipynb+json": ["ipynb"],
    "application/x-iso9660-image": ["*iso"],
    "application/x-iwork-keynote-sffkey": ["*key"],
    "application/x-iwork-numbers-sffnumbers": ["*numbers"],
    "application/x-iwork-pages-sffpages": ["*pages"],
    "application/x-java-archive-diff": ["jardiff"],
    "application/x-java-jnlp-file": ["jnlp"],
    "application/x-keepass2": ["kdbx"],
    "application/x-latex": ["latex"],
    "application/x-lua-bytecode": ["luac"],
    "application/x-lzh-compressed": ["lzh", "lha"],
    "application/x-makeself": ["run"],
    "application/x-mie": ["mie"],
    "application/x-mobipocket-ebook": ["*prc", "mobi"],
    "application/x-ms-application": ["application"],
    "application/x-ms-shortcut": ["lnk"],
    "application/x-ms-wmd": ["wmd"],
    "application/x-ms-wmz": ["wmz"],
    "application/x-ms-xbap": ["xbap"],
    "application/x-msaccess": ["mdb"],
    "application/x-msbinder": ["obd"],
    "application/x-mscardfile": ["crd"],
    "application/x-msclip": ["clp"],
    "application/x-msdos-program": ["*exe"],
    "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
    "application/x-msmediaview": ["mvb", "m13", "m14"],
    "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
    "application/x-msmoney": ["mny"],
    "application/x-mspublisher": ["pub"],
    "application/x-msschedule": ["scd"],
    "application/x-msterminal": ["trm"],
    "application/x-mswrite": ["wri"],
    "application/x-netcdf": ["nc", "cdf"],
    "application/x-ns-proxy-autoconfig": ["pac"],
    "application/x-nzb": ["nzb"],
    "application/x-perl": ["pl", "pm"],
    "application/x-pilot": ["*prc", "*pdb"],
    "application/x-pkcs12": ["p12", "pfx"],
    "application/x-pkcs7-certificates": ["p7b", "spc"],
    "application/x-pkcs7-certreqresp": ["p7r"],
    "application/x-rar-compressed": ["*rar"],
    "application/x-redhat-package-manager": ["rpm"],
    "application/x-research-info-systems": ["ris"],
    "application/x-sea": ["sea"],
    "application/x-sh": ["sh"],
    "application/x-shar": ["shar"],
    "application/x-shockwave-flash": ["swf"],
    "application/x-silverlight-app": ["xap"],
    "application/x-sql": ["*sql"],
    "application/x-stuffit": ["sit"],
    "application/x-stuffitx": ["sitx"],
    "application/x-subrip": ["srt"],
    "application/x-sv4cpio": ["sv4cpio"],
    "application/x-sv4crc": ["sv4crc"],
    "application/x-t3vm-image": ["t3"],
    "application/x-tads": ["gam"],
    "application/x-tar": ["tar"],
    "application/x-tcl": ["tcl", "tk"],
    "application/x-tex": ["tex"],
    "application/x-tex-tfm": ["tfm"],
    "application/x-texinfo": ["texinfo", "texi"],
    "application/x-tgif": ["*obj"],
    "application/x-ustar": ["ustar"],
    "application/x-virtualbox-hdd": ["hdd"],
    "application/x-virtualbox-ova": ["ova"],
    "application/x-virtualbox-ovf": ["ovf"],
    "application/x-virtualbox-vbox": ["vbox"],
    "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
    "application/x-virtualbox-vdi": ["vdi"],
    "application/x-virtualbox-vhd": ["vhd"],
    "application/x-virtualbox-vmdk": ["vmdk"],
    "application/x-wais-source": ["src"],
    "application/x-web-app-manifest+json": ["webapp"],
    "application/x-x509-ca-cert": ["der", "crt", "pem"],
    "application/x-xfig": ["fig"],
    "application/x-xliff+xml": ["*xlf"],
    "application/x-xpinstall": ["xpi"],
    "application/x-xz": ["xz"],
    "application/x-zip-compressed": ["*zip"],
    "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    "audio/vnd.dece.audio": ["uva", "uvva"],
    "audio/vnd.digital-winds": ["eol"],
    "audio/vnd.dra": ["dra"],
    "audio/vnd.dts": ["dts"],
    "audio/vnd.dts.hd": ["dtshd"],
    "audio/vnd.lucent.voice": ["lvp"],
    "audio/vnd.ms-playready.media.pya": ["pya"],
    "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
    "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
    "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
    "audio/vnd.rip": ["rip"],
    "audio/x-aac": ["*aac"],
    "audio/x-aiff": ["aif", "aiff", "aifc"],
    "audio/x-caf": ["caf"],
    "audio/x-flac": ["flac"],
    "audio/x-m4a": ["*m4a"],
    "audio/x-matroska": ["mka"],
    "audio/x-mpegurl": ["m3u"],
    "audio/x-ms-wax": ["wax"],
    "audio/x-ms-wma": ["wma"],
    "audio/x-pn-realaudio": ["ram", "ra"],
    "audio/x-pn-realaudio-plugin": ["rmp"],
    "audio/x-realaudio": ["*ra"],
    "audio/x-wav": ["*wav"],
    "chemical/x-cdx": ["cdx"],
    "chemical/x-cif": ["cif"],
    "chemical/x-cmdf": ["cmdf"],
    "chemical/x-cml": ["cml"],
    "chemical/x-csml": ["csml"],
    "chemical/x-xyz": ["xyz"],
    "image/prs.btif": ["btif", "btf"],
    "image/prs.pti": ["pti"],
    "image/vnd.adobe.photoshop": ["psd"],
    "image/vnd.airzip.accelerator.azv": ["azv"],
    "image/vnd.blockfact.facti": ["facti"],
    "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
    "image/vnd.djvu": ["djvu", "djv"],
    "image/vnd.dvb.subtitle": ["*sub"],
    "image/vnd.dwg": ["dwg"],
    "image/vnd.dxf": ["dxf"],
    "image/vnd.fastbidsheet": ["fbs"],
    "image/vnd.fpx": ["fpx"],
    "image/vnd.fst": ["fst"],
    "image/vnd.fujixerox.edmics-mmr": ["mmr"],
    "image/vnd.fujixerox.edmics-rlc": ["rlc"],
    "image/vnd.microsoft.icon": ["ico"],
    "image/vnd.ms-dds": ["dds"],
    "image/vnd.ms-modi": ["mdi"],
    "image/vnd.ms-photo": ["wdp"],
    "image/vnd.net-fpx": ["npx"],
    "image/vnd.pco.b16": ["b16"],
    "image/vnd.tencent.tap": ["tap"],
    "image/vnd.valve.source.texture": ["vtf"],
    "image/vnd.wap.wbmp": ["wbmp"],
    "image/vnd.xiff": ["xif"],
    "image/vnd.zbrush.pcx": ["pcx"],
    "image/x-3ds": ["3ds"],
    "image/x-adobe-dng": ["dng"],
    "image/x-cmu-raster": ["ras"],
    "image/x-cmx": ["cmx"],
    "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
    "image/x-icon": ["*ico"],
    "image/x-jng": ["jng"],
    "image/x-mrsid-image": ["sid"],
    "image/x-ms-bmp": ["*bmp"],
    "image/x-pcx": ["*pcx"],
    "image/x-pict": ["pic", "pct"],
    "image/x-portable-anymap": ["pnm"],
    "image/x-portable-bitmap": ["pbm"],
    "image/x-portable-graymap": ["pgm"],
    "image/x-portable-pixmap": ["ppm"],
    "image/x-rgb": ["rgb"],
    "image/x-tga": ["tga"],
    "image/x-xbitmap": ["xbm"],
    "image/x-xpixmap": ["xpm"],
    "image/x-xwindowdump": ["xwd"],
    "message/vnd.wfa.wsc": ["wsc"],
    "model/vnd.bary": ["bary"],
    "model/vnd.cld": ["cld"],
    "model/vnd.collada+xml": ["dae"],
    "model/vnd.dwf": ["dwf"],
    "model/vnd.gdl": ["gdl"],
    "model/vnd.gtw": ["gtw"],
    "model/vnd.mts": ["*mts"],
    "model/vnd.opengex": ["ogex"],
    "model/vnd.parasolid.transmit.binary": ["x_b"],
    "model/vnd.parasolid.transmit.text": ["x_t"],
    "model/vnd.pytha.pyox": ["pyo", "pyox"],
    "model/vnd.sap.vds": ["vds"],
    "model/vnd.usda": ["usda"],
    "model/vnd.usdz+zip": ["usdz"],
    "model/vnd.valve.source.compiled-map": ["bsp"],
    "model/vnd.vtu": ["vtu"],
    "text/prs.lines.tag": ["dsc"],
    "text/vnd.curl": ["curl"],
    "text/vnd.curl.dcurl": ["dcurl"],
    "text/vnd.curl.mcurl": ["mcurl"],
    "text/vnd.curl.scurl": ["scurl"],
    "text/vnd.dvb.subtitle": ["sub"],
    "text/vnd.familysearch.gedcom": ["ged"],
    "text/vnd.fly": ["fly"],
    "text/vnd.fmi.flexstor": ["flx"],
    "text/vnd.graphviz": ["gv"],
    "text/vnd.in3d.3dml": ["3dml"],
    "text/vnd.in3d.spot": ["spot"],
    "text/vnd.sun.j2me.app-descriptor": ["jad"],
    "text/vnd.wap.wml": ["wml"],
    "text/vnd.wap.wmlscript": ["wmls"],
    "text/x-asm": ["s", "asm"],
    "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    "text/x-component": ["htc"],
    "text/x-fortran": ["f", "for", "f77", "f90"],
    "text/x-handlebars-template": ["hbs"],
    "text/x-java-source": ["java"],
    "text/x-lua": ["lua"],
    "text/x-markdown": ["mkd"],
    "text/x-nfo": ["nfo"],
    "text/x-opml": ["opml"],
    "text/x-org": ["*org"],
    "text/x-pascal": ["p", "pas"],
    "text/x-processing": ["pde"],
    "text/x-sass": ["sass"],
    "text/x-scss": ["scss"],
    "text/x-setext": ["etx"],
    "text/x-sfv": ["sfv"],
    "text/x-suse-ymp": ["ymp"],
    "text/x-uuencode": ["uu"],
    "text/x-vcalendar": ["vcs"],
    "text/x-vcard": ["vcf"],
    "video/vnd.dece.hd": ["uvh", "uvvh"],
    "video/vnd.dece.mobile": ["uvm", "uvvm"],
    "video/vnd.dece.pd": ["uvp", "uvvp"],
    "video/vnd.dece.sd": ["uvs", "uvvs"],
    "video/vnd.dece.video": ["uvv", "uvvv"],
    "video/vnd.dvb.file": ["dvb"],
    "video/vnd.fvt": ["fvt"],
    "video/vnd.mpegurl": ["mxu", "m4u"],
    "video/vnd.ms-playready.media.pyv": ["pyv"],
    "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
    "video/vnd.vivo": ["viv"],
    "video/x-f4v": ["f4v"],
    "video/x-fli": ["fli"],
    "video/x-flv": ["flv"],
    "video/x-m4v": ["m4v"],
    "video/x-matroska": ["mkv", "mk3d", "mks"],
    "video/x-mng": ["mng"],
    "video/x-ms-asf": ["asf", "asx"],
    "video/x-ms-vob": ["vob"],
    "video/x-ms-wm": ["wm"],
    "video/x-ms-wmv": ["wmv"],
    "video/x-ms-wmx": ["wmx"],
    "video/x-ms-wvx": ["wvx"],
    "video/x-msvideo": ["avi"],
    "video/x-sgi-movie": ["movie"],
    "video/x-smv": ["smv"],
    "x-conference/x-cooltalk": ["ice"]
  };
  Object.freeze(types);
  var other_default = types;

  // node_modules/mime/dist/types/standard.js
  var types2 = {
    "application/andrew-inset": ["ez"],
    "application/appinstaller": ["appinstaller"],
    "application/applixware": ["aw"],
    "application/appx": ["appx"],
    "application/appxbundle": ["appxbundle"],
    "application/atom+xml": ["atom"],
    "application/atomcat+xml": ["atomcat"],
    "application/atomdeleted+xml": ["atomdeleted"],
    "application/atomsvc+xml": ["atomsvc"],
    "application/atsc-dwd+xml": ["dwd"],
    "application/atsc-held+xml": ["held"],
    "application/atsc-rsat+xml": ["rsat"],
    "application/automationml-aml+xml": ["aml"],
    "application/automationml-amlx+zip": ["amlx"],
    "application/bdoc": ["bdoc"],
    "application/calendar+xml": ["xcs"],
    "application/ccxml+xml": ["ccxml"],
    "application/cdfx+xml": ["cdfx"],
    "application/cdmi-capability": ["cdmia"],
    "application/cdmi-container": ["cdmic"],
    "application/cdmi-domain": ["cdmid"],
    "application/cdmi-object": ["cdmio"],
    "application/cdmi-queue": ["cdmiq"],
    "application/cpl+xml": ["cpl"],
    "application/cu-seeme": ["cu"],
    "application/cwl": ["cwl"],
    "application/dash+xml": ["mpd"],
    "application/dash-patch+xml": ["mpp"],
    "application/davmount+xml": ["davmount"],
    "application/dicom": ["dcm"],
    "application/docbook+xml": ["dbk"],
    "application/dssc+der": ["dssc"],
    "application/dssc+xml": ["xdssc"],
    "application/ecmascript": ["ecma"],
    "application/emma+xml": ["emma"],
    "application/emotionml+xml": ["emotionml"],
    "application/epub+zip": ["epub"],
    "application/exi": ["exi"],
    "application/express": ["exp"],
    "application/fdf": ["fdf"],
    "application/fdt+xml": ["fdt"],
    "application/font-tdpfr": ["pfr"],
    "application/geo+json": ["geojson"],
    "application/gml+xml": ["gml"],
    "application/gpx+xml": ["gpx"],
    "application/gxf": ["gxf"],
    "application/gzip": ["gz"],
    "application/hjson": ["hjson"],
    "application/hyperstudio": ["stk"],
    "application/inkml+xml": ["ink", "inkml"],
    "application/ipfix": ["ipfix"],
    "application/its+xml": ["its"],
    "application/java-archive": ["jar", "war", "ear"],
    "application/java-serialized-object": ["ser"],
    "application/java-vm": ["class"],
    "application/javascript": ["*js"],
    "application/json": ["json", "map"],
    "application/json5": ["json5"],
    "application/jsonml+json": ["jsonml"],
    "application/ld+json": ["jsonld"],
    "application/lgr+xml": ["lgr"],
    "application/lost+xml": ["lostxml"],
    "application/mac-binhex40": ["hqx"],
    "application/mac-compactpro": ["cpt"],
    "application/mads+xml": ["mads"],
    "application/manifest+json": ["webmanifest"],
    "application/marc": ["mrc"],
    "application/marcxml+xml": ["mrcx"],
    "application/mathematica": ["ma", "nb", "mb"],
    "application/mathml+xml": ["mathml"],
    "application/mbox": ["mbox"],
    "application/media-policy-dataset+xml": ["mpf"],
    "application/mediaservercontrol+xml": ["mscml"],
    "application/metalink+xml": ["metalink"],
    "application/metalink4+xml": ["meta4"],
    "application/mets+xml": ["mets"],
    "application/mmt-aei+xml": ["maei"],
    "application/mmt-usd+xml": ["musd"],
    "application/mods+xml": ["mods"],
    "application/mp21": ["m21", "mp21"],
    "application/mp4": ["*mp4", "*mpg4", "mp4s", "m4p"],
    "application/msix": ["msix"],
    "application/msixbundle": ["msixbundle"],
    "application/msword": ["doc", "dot"],
    "application/mxf": ["mxf"],
    "application/n-quads": ["nq"],
    "application/n-triples": ["nt"],
    "application/node": ["cjs"],
    "application/octet-stream": [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ],
    "application/oda": ["oda"],
    "application/oebps-package+xml": ["opf"],
    "application/ogg": ["ogx"],
    "application/omdoc+xml": ["omdoc"],
    "application/onenote": [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg",
      "one",
      "onea"
    ],
    "application/oxps": ["oxps"],
    "application/p2p-overlay+xml": ["relo"],
    "application/patch-ops-error+xml": ["xer"],
    "application/pdf": ["pdf"],
    "application/pgp-encrypted": ["pgp"],
    "application/pgp-keys": ["asc"],
    "application/pgp-signature": ["sig", "*asc"],
    "application/pics-rules": ["prf"],
    "application/pkcs10": ["p10"],
    "application/pkcs7-mime": ["p7m", "p7c"],
    "application/pkcs7-signature": ["p7s"],
    "application/pkcs8": ["p8"],
    "application/pkix-attr-cert": ["ac"],
    "application/pkix-cert": ["cer"],
    "application/pkix-crl": ["crl"],
    "application/pkix-pkipath": ["pkipath"],
    "application/pkixcmp": ["pki"],
    "application/pls+xml": ["pls"],
    "application/postscript": ["ai", "eps", "ps"],
    "application/provenance+xml": ["provx"],
    "application/pskc+xml": ["pskcxml"],
    "application/raml+yaml": ["raml"],
    "application/rdf+xml": ["rdf", "owl"],
    "application/reginfo+xml": ["rif"],
    "application/relax-ng-compact-syntax": ["rnc"],
    "application/resource-lists+xml": ["rl"],
    "application/resource-lists-diff+xml": ["rld"],
    "application/rls-services+xml": ["rs"],
    "application/route-apd+xml": ["rapd"],
    "application/route-s-tsid+xml": ["sls"],
    "application/route-usd+xml": ["rusd"],
    "application/rpki-ghostbusters": ["gbr"],
    "application/rpki-manifest": ["mft"],
    "application/rpki-roa": ["roa"],
    "application/rsd+xml": ["rsd"],
    "application/rss+xml": ["rss"],
    "application/rtf": ["rtf"],
    "application/sbml+xml": ["sbml"],
    "application/scvp-cv-request": ["scq"],
    "application/scvp-cv-response": ["scs"],
    "application/scvp-vp-request": ["spq"],
    "application/scvp-vp-response": ["spp"],
    "application/sdp": ["sdp"],
    "application/senml+xml": ["senmlx"],
    "application/sensml+xml": ["sensmlx"],
    "application/set-payment-initiation": ["setpay"],
    "application/set-registration-initiation": ["setreg"],
    "application/shf+xml": ["shf"],
    "application/sieve": ["siv", "sieve"],
    "application/smil+xml": ["smi", "smil"],
    "application/sparql-query": ["rq"],
    "application/sparql-results+xml": ["srx"],
    "application/sql": ["sql"],
    "application/srgs": ["gram"],
    "application/srgs+xml": ["grxml"],
    "application/sru+xml": ["sru"],
    "application/ssdl+xml": ["ssdl"],
    "application/ssml+xml": ["ssml"],
    "application/swid+xml": ["swidtag"],
    "application/tei+xml": ["tei", "teicorpus"],
    "application/thraud+xml": ["tfi"],
    "application/timestamped-data": ["tsd"],
    "application/toml": ["toml"],
    "application/trig": ["trig"],
    "application/ttml+xml": ["ttml"],
    "application/ubjson": ["ubj"],
    "application/urc-ressheet+xml": ["rsheet"],
    "application/urc-targetdesc+xml": ["td"],
    "application/voicexml+xml": ["vxml"],
    "application/wasm": ["wasm"],
    "application/watcherinfo+xml": ["wif"],
    "application/widget": ["wgt"],
    "application/winhlp": ["hlp"],
    "application/wsdl+xml": ["wsdl"],
    "application/wspolicy+xml": ["wspolicy"],
    "application/xaml+xml": ["xaml"],
    "application/xcap-att+xml": ["xav"],
    "application/xcap-caps+xml": ["xca"],
    "application/xcap-diff+xml": ["xdf"],
    "application/xcap-el+xml": ["xel"],
    "application/xcap-ns+xml": ["xns"],
    "application/xenc+xml": ["xenc"],
    "application/xfdf": ["xfdf"],
    "application/xhtml+xml": ["xhtml", "xht"],
    "application/xliff+xml": ["xlf"],
    "application/xml": ["xml", "xsl", "xsd", "rng"],
    "application/xml-dtd": ["dtd"],
    "application/xop+xml": ["xop"],
    "application/xproc+xml": ["xpl"],
    "application/xslt+xml": ["*xsl", "xslt"],
    "application/xspf+xml": ["xspf"],
    "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
    "application/yang": ["yang"],
    "application/yin+xml": ["yin"],
    "application/zip": ["zip"],
    "application/zip+dotlottie": ["lottie"],
    "audio/3gpp": ["*3gpp"],
    "audio/aac": ["adts", "aac"],
    "audio/adpcm": ["adp"],
    "audio/amr": ["amr"],
    "audio/basic": ["au", "snd"],
    "audio/midi": ["mid", "midi", "kar", "rmi"],
    "audio/mobile-xmf": ["mxmf"],
    "audio/mp3": ["*mp3"],
    "audio/mp4": ["m4a", "mp4a", "m4b"],
    "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    "audio/ogg": ["oga", "ogg", "spx", "opus"],
    "audio/s3m": ["s3m"],
    "audio/silk": ["sil"],
    "audio/wav": ["wav"],
    "audio/wave": ["*wav"],
    "audio/webm": ["weba"],
    "audio/xm": ["xm"],
    "font/collection": ["ttc"],
    "font/otf": ["otf"],
    "font/ttf": ["ttf"],
    "font/woff": ["woff"],
    "font/woff2": ["woff2"],
    "image/aces": ["exr"],
    "image/apng": ["apng"],
    "image/avci": ["avci"],
    "image/avcs": ["avcs"],
    "image/avif": ["avif"],
    "image/bmp": ["bmp", "dib"],
    "image/cgm": ["cgm"],
    "image/dicom-rle": ["drle"],
    "image/dpx": ["dpx"],
    "image/emf": ["emf"],
    "image/fits": ["fits"],
    "image/g3fax": ["g3"],
    "image/gif": ["gif"],
    "image/heic": ["heic"],
    "image/heic-sequence": ["heics"],
    "image/heif": ["heif"],
    "image/heif-sequence": ["heifs"],
    "image/hej2k": ["hej2"],
    "image/ief": ["ief"],
    "image/jaii": ["jaii"],
    "image/jais": ["jais"],
    "image/jls": ["jls"],
    "image/jp2": ["jp2", "jpg2"],
    "image/jpeg": ["jpg", "jpeg", "jpe"],
    "image/jph": ["jph"],
    "image/jphc": ["jhc"],
    "image/jpm": ["jpm", "jpgm"],
    "image/jpx": ["jpx", "jpf"],
    "image/jxl": ["jxl"],
    "image/jxr": ["jxr"],
    "image/jxra": ["jxra"],
    "image/jxrs": ["jxrs"],
    "image/jxs": ["jxs"],
    "image/jxsc": ["jxsc"],
    "image/jxsi": ["jxsi"],
    "image/jxss": ["jxss"],
    "image/ktx": ["ktx"],
    "image/ktx2": ["ktx2"],
    "image/pjpeg": ["jfif"],
    "image/png": ["png"],
    "image/sgi": ["sgi"],
    "image/svg+xml": ["svg", "svgz"],
    "image/t38": ["t38"],
    "image/tiff": ["tif", "tiff"],
    "image/tiff-fx": ["tfx"],
    "image/webp": ["webp"],
    "image/wmf": ["wmf"],
    "message/disposition-notification": ["disposition-notification"],
    "message/global": ["u8msg"],
    "message/global-delivery-status": ["u8dsn"],
    "message/global-disposition-notification": ["u8mdn"],
    "message/global-headers": ["u8hdr"],
    "message/rfc822": ["eml", "mime", "mht", "mhtml"],
    "model/3mf": ["3mf"],
    "model/gltf+json": ["gltf"],
    "model/gltf-binary": ["glb"],
    "model/iges": ["igs", "iges"],
    "model/jt": ["jt"],
    "model/mesh": ["msh", "mesh", "silo"],
    "model/mtl": ["mtl"],
    "model/obj": ["obj"],
    "model/prc": ["prc"],
    "model/step": ["step", "stp", "stpnc", "p21", "210"],
    "model/step+xml": ["stpx"],
    "model/step+zip": ["stpz"],
    "model/step-xml+zip": ["stpxz"],
    "model/stl": ["stl"],
    "model/u3d": ["u3d"],
    "model/vrml": ["wrl", "vrml"],
    "model/x3d+binary": ["*x3db", "x3dbz"],
    "model/x3d+fastinfoset": ["x3db"],
    "model/x3d+vrml": ["*x3dv", "x3dvz"],
    "model/x3d+xml": ["x3d", "x3dz"],
    "model/x3d-vrml": ["x3dv"],
    "text/cache-manifest": ["appcache", "manifest"],
    "text/calendar": ["ics", "ifb"],
    "text/coffeescript": ["coffee", "litcoffee"],
    "text/css": ["css"],
    "text/csv": ["csv"],
    "text/html": ["html", "htm", "shtml"],
    "text/jade": ["jade"],
    "text/javascript": ["js", "mjs"],
    "text/jsx": ["jsx"],
    "text/less": ["less"],
    "text/markdown": ["md", "markdown"],
    "text/mathml": ["mml"],
    "text/mdx": ["mdx"],
    "text/n3": ["n3"],
    "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    "text/richtext": ["rtx"],
    "text/rtf": ["*rtf"],
    "text/sgml": ["sgml", "sgm"],
    "text/shex": ["shex"],
    "text/slim": ["slim", "slm"],
    "text/spdx": ["spdx"],
    "text/stylus": ["stylus", "styl"],
    "text/tab-separated-values": ["tsv"],
    "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
    "text/turtle": ["ttl"],
    "text/uri-list": ["uri", "uris", "urls"],
    "text/vcard": ["vcard"],
    "text/vtt": ["vtt"],
    "text/wgsl": ["wgsl"],
    "text/xml": ["*xml"],
    "text/yaml": ["yaml", "yml"],
    "video/3gpp": ["3gp", "3gpp"],
    "video/3gpp2": ["3g2"],
    "video/h261": ["h261"],
    "video/h263": ["h263"],
    "video/h264": ["h264"],
    "video/iso.segment": ["m4s"],
    "video/jpeg": ["jpgv"],
    "video/jpm": ["*jpm", "*jpgm"],
    "video/mj2": ["mj2", "mjp2"],
    "video/mp2t": ["ts", "m2t", "m2ts", "mts"],
    "video/mp4": ["mp4", "mp4v", "mpg4"],
    "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    "video/ogg": ["ogv"],
    "video/quicktime": ["qt", "mov"],
    "video/webm": ["webm"]
  };
  Object.freeze(types2);
  var standard_default = types2;

  // node_modules/mime/dist/src/Mime.js
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Mime_extensionToType;
  var _Mime_typeToExtension;
  var _Mime_typeToExtensions;
  var Mime = class {
    constructor(...args) {
      _Mime_extensionToType.set(this, /* @__PURE__ */ new Map());
      _Mime_typeToExtension.set(this, /* @__PURE__ */ new Map());
      _Mime_typeToExtensions.set(this, /* @__PURE__ */ new Map());
      for (const arg of args) {
        this.define(arg);
      }
    }
    define(typeMap, force = false) {
      for (let [type, extensions] of Object.entries(typeMap)) {
        type = type.toLowerCase();
        extensions = extensions.map((ext) => ext.toLowerCase());
        if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
          __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, /* @__PURE__ */ new Set());
        }
        const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
        let first = true;
        for (let extension of extensions) {
          const starred = extension.startsWith("*");
          extension = starred ? extension.slice(1) : extension;
          allExtensions?.add(extension);
          if (first) {
            __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
          }
          first = false;
          if (starred)
            continue;
          const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
          if (currentType && currentType != type && !force) {
            throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
          }
          __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
        }
      }
      return this;
    }
    getType(path) {
      if (typeof path !== "string")
        return null;
      const last = path.replace(/^.*[/\\]/s, "").toLowerCase();
      const ext = last.replace(/^.*\./s, "").toLowerCase();
      const hasPath = last.length < path.length;
      const hasDot = ext.length < last.length - 1;
      if (!hasDot && hasPath)
        return null;
      return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
      if (typeof type !== "string")
        return null;
      type = type?.split?.(";")[0];
      return (type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null;
    }
    getAllExtensions(type) {
      if (typeof type !== "string")
        return null;
      return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
      this.define = () => {
        throw new Error("define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances");
      };
      Object.freeze(this);
      for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
        Object.freeze(extensions);
      }
      return this;
    }
    _getTestState() {
      return {
        types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
        extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f")
      };
    }
  };
  _Mime_extensionToType = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtension = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtensions = /* @__PURE__ */ new WeakMap();
  var Mime_default = Mime;

  // node_modules/mime/dist/src/index.js
  var src_default2 = new Mime_default(standard_default, other_default)._freeze();

  // src/javascripts/utils/index.js
  function buildUrl(originalUrl, params = {}, isOverride = false, isRemoveEmpty = true) {
    if (!originalUrl) {
      return "";
    }
    let url = new URL(originalUrl, window.location.origin);
    const existingParams = import_qs.default.parse(decodeURIComponent(url.search), { ignoreQueryPrefix: true });
    const mergedParams = isOverride ? params : { ...existingParams, ...params };
    if (isRemoveEmpty) {
      Object.keys(mergedParams).forEach((key) => {
        if (mergedParams[key] === null || mergedParams[key] === void 0 || mergedParams[key] === "") {
          delete mergedParams[key];
        }
      });
    }
    url.search = import_qs.default.stringify(mergedParams, { arrayFormat: "brackets" });
    return url.toString();
  }
  function updateQuery(params, action = "push", isOverride = true) {
    let url = new URL(window.location.href);
    let mergedParams = {};
    if (!isOverride) {
      mergedParams = import_qs.default.parse(decodeURIComponent(url.search), { ignoreQueryPrefix: true });
    }
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === void 0 || value === "") {
        delete mergedParams[key];
      } else {
        mergedParams[key] = value;
      }
    });
    url.search = import_qs.default.stringify(mergedParams, { arrayFormat: "brackets" });
    if (action === "push") {
      history.pushState({}, "", url);
    } else {
      history.replaceState({}, "", url);
    }
  }
  function getQueryParams(urlString) {
    if (!urlString) {
      return {};
    }
    const url = new URL(urlString, window.location.origin);
    return import_qs.default.parse(decodeURIComponent(url.search), { ignoreQueryPrefix: true });
  }
  function getFilenameWithExtension(filename, contentType) {
    if (!filename) {
      return filename;
    }
    const hasExtension = /\.\w+$/.test(filename);
    if (hasExtension) {
      return filename;
    }
    if (contentType) {
      const mimeType = contentType.split(";")[0].trim();
      const extension = src_default2.getExtension(mimeType);
      if (extension) {
        return `${filename}.${extension}`;
      }
    }
    return filename;
  }

  // src/javascripts/controllers/redirect_controller.js
  var redirect_controller_default = class extends Controller {
    static values = {
      // 目标 URL
      targetUrl: { type: String, default: "" },
      // 需要更新的参数（JSON 字符串或对象）
      params: { type: Object, default: {} },
      // 是否使用当前 URL 作为基础（如果为 true，则从当前 URL 复制所有参数，然后应用 params）
      useCurrentUrl: { type: Boolean, default: false },
      // 是否覆盖现有参数（默认 false，即合并参数）
      override: { type: Boolean, default: false },
      // 是否在 connect 时自动执行重定向（默认 true）
      autoRedirect: { type: Boolean, default: true },
      // 是否保留history
      keepHistory: { type: Boolean, default: true }
    };
    connect() {
      if (this.autoRedirectValue) {
        this.redirect();
      }
    }
    redirect() {
      let targetUrl = this.targetUrlValue;
      if (!targetUrl) {
        console.warn("RedirectController: targetUrl is required");
        return;
      }
      let finalUrl;
      if (this.useCurrentUrlValue) {
        if (this.targetUrlValue) {
          const currentParams = getQueryParams(window.location.href);
          const mergedParams = this.overrideValue ? this.paramsValue : { ...currentParams, ...this.paramsValue };
          finalUrl = buildUrl(targetUrl, mergedParams, true);
        } else {
          finalUrl = buildUrl(window.location.href, this.paramsValue, this.overrideValue);
        }
      } else {
        finalUrl = buildUrl(targetUrl, this.paramsValue, this.overrideValue);
      }
      if (this.keepHistoryValue) {
        window.location.href = finalUrl;
      } else {
        window.location.replace(finalUrl);
      }
    }
  };

  // node_modules/mustache/mustache.mjs
  var objectToString2 = Object.prototype.toString;
  var isArray2 = Array.isArray || function isArrayPolyfill(object) {
    return objectToString2.call(object) === "[object Array]";
  };
  function isFunction(object) {
    return typeof object === "function";
  }
  function typeStr(obj) {
    return isArray2(obj) ? "array" : typeof obj;
  }
  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function hasProperty2(obj, propName) {
    return obj != null && typeof obj === "object" && propName in obj;
  }
  function primitiveHasOwnProperty(primitive, propName) {
    return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
  }
  var regExpTest = RegExp.prototype.test;
  function testRegExp(re, string) {
    return regExpTest.call(re, string);
  }
  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;"
  };
  function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
      return entityMap[s];
    });
  }
  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;
  function parseTemplate(template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];
    var tokens = [];
    var spaces = [];
    var hasTag = false;
    var nonSpace = false;
    var indentation = "";
    var tagIndex = 0;
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }
      hasTag = false;
      nonSpace = false;
    }
    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags(tagsToCompile) {
      if (typeof tagsToCompile === "string")
        tagsToCompile = tagsToCompile.split(spaceRe, 2);
      if (!isArray2(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error("Invalid tags: " + tagsToCompile);
      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
      closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
    }
    compileTags(tags || mustache.tags);
    var scanner = new Scanner(template);
    var start3, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start3 = scanner.pos;
      value = scanner.scanUntil(openingTagRe);
      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);
          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += " ";
          }
          tokens.push(["text", chr, start3, start3 + 1]);
          start3 += 1;
          if (chr === "\n") {
            stripSpace();
            indentation = "";
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }
      if (!scanner.scan(openingTagRe))
        break;
      hasTag = true;
      type = scanner.scan(tagRe) || "name";
      scanner.scan(whiteRe);
      if (type === "=") {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === "{") {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = "&";
      } else {
        value = scanner.scanUntil(closingTagRe);
      }
      if (!scanner.scan(closingTagRe))
        throw new Error("Unclosed tag at " + scanner.pos);
      if (type == ">") {
        token = [type, value, start3, scanner.pos, indentation, tagIndex, lineHasNonSpace];
      } else {
        token = [type, value, start3, scanner.pos];
      }
      tagIndex++;
      tokens.push(token);
      if (type === "#" || type === "^") {
        sections.push(token);
      } else if (type === "/") {
        openSection = sections.pop();
        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start3);
        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start3);
      } else if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      } else if (type === "=") {
        compileTags(value);
      }
    }
    stripSpace();
    openSection = sections.pop();
    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    return nestTokens(squashTokens(tokens));
  }
  function squashTokens(tokens) {
    var squashedTokens = [];
    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      if (token) {
        if (token[0] === "text" && lastToken && lastToken[0] === "text") {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }
    return squashedTokens;
  }
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];
    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      switch (token[0]) {
        case "#":
        case "^":
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case "/":
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }
    return nestedTokens;
  }
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }
  Scanner.prototype.eos = function eos() {
    return this.tail === "";
  };
  Scanner.prototype.scan = function scan(re) {
    var match = this.tail.match(re);
    if (!match || match.index !== 0)
      return "";
    var string = match[0];
    this.tail = this.tail.substring(string.length);
    this.pos += string.length;
    return string;
  };
  Scanner.prototype.scanUntil = function scanUntil(re) {
    var index = this.tail.search(re), match;
    switch (index) {
      case -1:
        match = this.tail;
        this.tail = "";
        break;
      case 0:
        match = "";
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }
    this.pos += match.length;
    return match;
  };
  function Context2(view, parentContext) {
    this.view = view;
    this.cache = { ".": this.view };
    this.parent = parentContext;
  }
  Context2.prototype.push = function push(view) {
    return new Context2(view, this);
  };
  Context2.prototype.lookup = function lookup(name) {
    var cache = this.cache;
    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;
      while (context) {
        if (name.indexOf(".") > 0) {
          intermediateValue = context.view;
          names = name.split(".");
          index = 0;
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty2(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];
          lookupHit = hasProperty2(context.view, name);
        }
        if (lookupHit) {
          value = intermediateValue;
          break;
        }
        context = context.parent;
      }
      cache[name] = value;
    }
    if (isFunction(value))
      value = value.call(this.view);
    return value;
  };
  function Writer() {
    this.templateCache = {
      _cache: {},
      set: function set3(key, value) {
        this._cache[key] = value;
      },
      get: function get3(key) {
        return this._cache[key];
      },
      clear: function clear2() {
        this._cache = {};
      }
    };
  }
  Writer.prototype.clearCache = function clearCache() {
    if (typeof this.templateCache !== "undefined") {
      this.templateCache.clear();
    }
  };
  Writer.prototype.parse = function parse(template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ":" + (tags || mustache.tags).join(":");
    var isCacheEnabled = typeof cache !== "undefined";
    var tokens = isCacheEnabled ? cache.get(cacheKey) : void 0;
    if (tokens == void 0) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };
  Writer.prototype.render = function render2(template, view, partials, config) {
    var tags = this.getConfigTags(config);
    var tokens = this.parse(template, tags);
    var context = view instanceof Context2 ? view : new Context2(view, void 0);
    return this.renderTokens(tokens, context, partials, template, config);
  };
  Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, config) {
    var buffer = "";
    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = void 0;
      token = tokens[i];
      symbol = token[0];
      if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate, config);
      else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate, config);
      else if (symbol === ">") value = this.renderPartial(token, context, partials, config);
      else if (symbol === "&") value = this.unescapedValue(token, context);
      else if (symbol === "name") value = this.escapedValue(token, context, config);
      else if (symbol === "text") value = this.rawValue(token);
      if (value !== void 0)
        buffer += value;
    }
    return buffer;
  };
  Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate, config) {
    var self2 = this;
    var buffer = "";
    var value = context.lookup(token[1]);
    function subRender(template) {
      return self2.render(template, context, partials, config);
    }
    if (!value) return;
    if (isArray2(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
      }
    } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== "string")
        throw new Error("Cannot use higher-order sections without the original template");
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
    }
    return buffer;
  };
  Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate, config) {
    var value = context.lookup(token[1]);
    if (!value || isArray2(value) && value.length === 0)
      return this.renderTokens(token[4], context, partials, originalTemplate, config);
  };
  Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, "");
    var partialByNl = partial.split("\n");
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join("\n");
  };
  Writer.prototype.renderPartial = function renderPartial(token, context, partials, config) {
    if (!partials) return;
    var tags = this.getConfigTags(config);
    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      var tokens = this.parse(indentedValue, tags);
      return this.renderTokens(tokens, context, partials, indentedValue, config);
    }
  };
  Writer.prototype.unescapedValue = function unescapedValue(token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };
  Writer.prototype.escapedValue = function escapedValue(token, context, config) {
    var escape2 = this.getConfigEscape(config) || mustache.escape;
    var value = context.lookup(token[1]);
    if (value != null)
      return typeof value === "number" && escape2 === mustache.escape ? String(value) : escape2(value);
  };
  Writer.prototype.rawValue = function rawValue(token) {
    return token[1];
  };
  Writer.prototype.getConfigTags = function getConfigTags(config) {
    if (isArray2(config)) {
      return config;
    } else if (config && typeof config === "object") {
      return config.tags;
    } else {
      return void 0;
    }
  };
  Writer.prototype.getConfigEscape = function getConfigEscape(config) {
    if (config && typeof config === "object" && !isArray2(config)) {
      return config.escape;
    } else {
      return void 0;
    }
  };
  var mustache = {
    name: "mustache.js",
    version: "4.2.0",
    tags: ["{{", "}}"],
    clearCache: void 0,
    escape: void 0,
    parse: void 0,
    render: void 0,
    Scanner: void 0,
    Context: void 0,
    Writer: void 0,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache(cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache() {
      return defaultWriter.templateCache;
    }
  };
  var defaultWriter = new Writer();
  mustache.clearCache = function clearCache2() {
    return defaultWriter.clearCache();
  };
  mustache.parse = function parse2(template, tags) {
    return defaultWriter.parse(template, tags);
  };
  mustache.render = function render3(template, view, partials, config) {
    if (typeof template !== "string") {
      throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
    }
    return defaultWriter.render(template, view, partials, config);
  };
  mustache.escape = escapeHtml;
  mustache.Scanner = Scanner;
  mustache.Context = Context2;
  mustache.Writer = Writer;
  var mustache_default = mustache;

  // src/javascripts/controllers/turbo_nav_tree_controller.js
  var turbo_nav_tree_controller_default = class extends Controller {
    static values = {
      navTree: Array,
      depth: Number,
      parentPath: String,
      url: String,
      currentPath: String,
      idPrefix: String,
      containerStyle: String,
      rootContainer: String,
      // 整个栏目树的容器是什么，class
      itemStyle: String,
      itemActiveClass: String,
      linkTurboFrame: String,
      linkTurboFrameAction: String,
      linkTurbo: Boolean,
      // 新增参数
      expand: { type: Boolean, default: false }
      // 是否默认展开下级
    };
    static targets = [
      "itemTemplate"
      // item 模板
    ];
    connect() {
      this.currentPath = this.hasCurrentPathValue ? this.currentPathValue : window.location.pathname;
      this.menuContainer = this.rootContainer();
      if (!this.menuContainer) {
        console.log("turbo_nav_tree_controller: menuContainer null");
        return;
      }
      if (this.element.dataset.rendered === "true") {
        this.refreshActiveState();
        return;
      }
      this.element.dataset.rendered = "true";
      this.itemTemplate = this.hasItemTemplateTarget ? this.itemTemplateTarget.innerHTML.trim() : null;
      this.renderTree(this.navTreeValue || [], this.depthValue || 0, this.element);
    }
    disconnect() {
    }
    refreshActiveState = () => {
      const currentPath = this.currentPath;
      const aDom = this.menuContainer.querySelector(`a[href='${currentPath}']`);
      if (!aDom) return;
      this.menuContainer.querySelectorAll("li[active]").forEach((li) => {
        li.querySelector("[turbo-nav-tree-children-container]")?.classList.remove("opacity-0");
      });
      this.getParents(aDom, "li", this.menuContainer).forEach((li) => {
        this.treeContainerToggle(li, true);
      });
      this.click({ currentTarget: aDom });
    };
    renderTree(nodes, depth, container) {
      if (container.rendered) return;
      const ul = document.createElement("ul");
      ul.className = this.hasContainerStyleValue ? this.containerStyleValue : "w-full";
      requestAnimationFrame(() => {
        nodes.forEach((node) => {
          const liDom = document.createElement("li");
          liDom.className = this.hasItemStyleValue ? this.itemStyleValue : "";
          const isActive = this.expandValue ? true : this.isPathActive(node);
          const shouldOpen = isActive || this.hasActiveChild(node);
          const useRenderChildren = node.children?.length > 0;
          const useRenderTurboFrame = node.children?.length == 0 && node.children_count > 0 && this.hasUrlValue;
          const itemHtml = this.renderItem(node, depth, shouldOpen, isActive);
          liDom.innerHTML = itemHtml;
          const treeItem = liDom.children[0];
          treeItem.setAttribute("turbo-nav-tree-item", "");
          const childrenContainer = document.createElement("div");
          childrenContainer.setAttribute("turbo-nav-tree-children-container", "");
          childrenContainer.classList.add("transition-all", "duration-300");
          childrenContainer.hidden = !shouldOpen;
          if (isActive) {
            liDom.setAttribute("active", "");
            if (this.isPathActive(node, false)) {
              treeItem.setAttribute("active", "");
              requestAnimationFrame(() => {
                liDom.scrollIntoView({ behavior: "smooth", block: "center", container: "nearest" });
              });
            }
          }
          if (useRenderChildren) {
            this.renderTree(node.children, depth + 1, childrenContainer);
          }
          if (useRenderTurboFrame) {
            this.appendTurboFrame(childrenContainer, node, depth + 1);
          }
          liDom.appendChild(childrenContainer);
          ul.appendChild(liDom);
        });
        container.appendChild(ul);
      });
      container.rendered = true;
    }
    // 懒加载 turbo-frame
    appendTurboFrame(container, node, depth) {
      const tf = document.createElement("turbo-frame");
      tf.classList.add("w-full");
      const idPrefix = this.hasIdPrefixValue ? this.idPrefixValue : "nav_tree_frame_";
      tf.id = `${idPrefix}${node.path.replaceAll("/", "_")}`;
      const urlBase = this.urlValue.split("?")[0];
      let params = getQueryParams(this.urlValue);
      params = { ...params, parent_path: node.path, depth };
      tf.src = buildUrl(urlBase, params, true);
      tf.loading = "lazy";
      tf.innerHTML = `
      <div class="flex items-center justify-center h-12 text-base-content/60">
        <span class="loading loading-spinner loading-sm"></span>
      </div>
    `;
      container.appendChild(tf);
    }
    toggle(event) {
      const target = event.currentTarget;
      let onlyOpen = false;
      if (target == event.target) {
        onlyOpen = event.params?.onlyOpen;
      } else {
        onlyOpen = event.target.getAttribute("data-turbo-nav-tree-only-open-param") == "true";
      }
      const li = target.closest("li");
      if (onlyOpen && li.hasAttribute("active")) return;
      const childrenContainer = li.querySelector("[turbo-nav-tree-children-container]");
      this.treeContainerToggle(li, childrenContainer.hidden);
    }
    treeContainerToggle(li, status) {
      const childrenContainer = li.querySelector("[turbo-nav-tree-children-container]");
      if (!(childrenContainer && childrenContainer.children.length > 0)) return;
      if (status) {
        childrenContainer.hidden = false;
        childrenContainer.classList.remove("opacity-0");
      } else {
        childrenContainer.hidden = true;
        childrenContainer.classList.add("opacity-0");
      }
      const itemTargetIcon = li.querySelector("[turbo-nav-tree-item-target-icon]");
      itemTargetIcon.classList.add("transition-transform", "duration-300", "peer-hover:text-primary");
      itemTargetIcon.classList.toggle("rotate-90", status);
    }
    click(event) {
      const target = event.currentTarget;
      const li = target.closest("li");
      this.menuContainer?.querySelectorAll("[active]").forEach((el) => {
        el.removeAttribute("active");
      });
      this.getParents(target, "li").forEach((el) => {
        el.setAttribute("active", "");
      });
      li.querySelector("[turbo-nav-tree-item]")?.setAttribute("active", "");
      this.treeContainerToggle(li, true);
    }
    // 单个 item 渲染
    renderItem(node, depth, open = false, isActive = false) {
      const hasChildren = this.hasUrlValue ? node.children_count : node.children?.length > 0;
      let aAttrs = [];
      if (this.hasLinkTurboFrameValue && this.linkTurboFrameValue) {
        aAttrs.push(`data-turbo-frame="${this.linkTurboFrameValue}"`);
      }
      if (this.hasLinkTurboFrameActionValue && this.linkTurboFrameActionValue) {
        aAttrs.push(`data-turbo-action="${this.linkTurboFrameActionValue}"`);
      }
      if (this.hasLinkTurboValue && this.linkTurboValue === false) {
        aAttrs = [`data-turbo="false"`];
      }
      let template = "";
      if (this.itemTemplate) {
        template = this.itemTemplate;
      } else {
        template = `
        <div class="flex items-center">
          <a href="{{path}}"
            ${aAttrs.join(" ")}
            class="block hover:underline"
            style="padding-left: {{padding}}rem">
            {{link_text}}
          </a>
        </div>
      `;
        if (hasChildren) {
          template = `
          <div class="flex items-center" data-action="click->turbo-nav-tree#toggle">
            <a href="{{path}}"
              ${aAttrs.join(" ")}
              class="block hover:underline"
              style="padding-left: {{padding}}rem">
              {{{link_text}}}
            </a>
            <!-- \u6709\u5B50\u8282\u70B9\u65F6\u663E\u793A toggle \u6309\u94AE -->
            <div turbo-nav-tree-item-target-icon class="inline-block ml-auto mr-1 ${open ? "rotate-90" : ""}">
              <svg class="w-4 h-4 opacity-70 transition-transform duration-200"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6"/>
              </svg>
            </div>
          </div>
        `;
        }
      }
      return mustache_default.render(template, {
        ...node,
        depth,
        padding: depth * 1.25,
        hasChildren,
        open,
        isActive
      });
    }
    // 激活判断
    isPathActive(node, isPrefix = true) {
      if (!this.currentPath) return false;
      if (isPrefix) {
        const currentParts = this.currentPath.split("/").filter(Boolean);
        const nodeParts = node.path.split("/").filter(Boolean);
        if (nodeParts.length > currentParts.length) return false;
        return nodeParts.every((part, idx) => currentParts[idx] === part);
      } else {
        return node.path == this.currentPath;
      }
    }
    hasActiveChild(node) {
      if (!node.children || node.children.length === 0) return false;
      return node.children.some((child) => this.isPathActive(child) || this.hasActiveChild(child));
    }
    /**
     * 从元素向上查找所有符合 selector 的父级元素
     * @param {Element} el - 起始元素
     * @param {string} selector - 父元素选择器
     * @param {Element} [root=document.body] - 可选查找上限
     * @returns {Element[]} - 符合条件的父级元素数组，按从近到远顺序
    */
    getParents(el, selector, root = null) {
      if (!el) return;
      const parents = [];
      let parent = el.parentElement;
      while (parent && parent !== root) {
        if (parent.matches(selector)) {
          parents.push(parent);
        }
        parent = parent.parentElement;
      }
      return parents;
    }
    rootContainer() {
      if (this.hasRootContainerValue) {
        return this.element.closest(this.rootContainerValue);
      } else {
        return this.getParents(this.element.querySelector("li"), "ul")?.at(-1);
      }
    }
  };

  // src/javascripts/controllers/breadcrumb_controller.js
  var breadcrumb_controller_default = class extends Controller {
    static values = {
      channel: String,
      // 当前选中的 channel path（从 params.channel 传入）
      // 传入默认值 []
      defaultBreadcrumb: Array
    };
    static targets = [
      "navTreeContainer",
      // nav_tree 的整体容器
      "breadcrumbContainer",
      // static_breadcrumb 的容器
      "breadcrumbTemplate",
      // 面包屑模板
      "navNode"
      // nav_tree 中的每个节点
    ];
    connect() {
      if (this.hasDefaultBreadcrumbValue && this.defaultBreadcrumbValue) {
        this.renderBreadcrumb(this.defaultBreadcrumbValue.slice(1, this.defaultBreadcrumbValue.length));
      }
    }
    // 当 navNode 连接时
    navNodeTargetConnected(element) {
      element.addEventListener("click", (_e) => {
        this.updateBreadcrumb(element, element.getAttribute("data-node-path"));
      });
      this.updateBreadcrumb(element, this.channelValue);
    }
    updateBreadcrumb(element, path) {
      if (element?.getAttribute("data-node-path") === path) {
        const data2 = this.getBreadcrumbData(element, path);
        this.renderBreadcrumb(data2);
      }
    }
    // 递归获取当前节点的父节点和祖父节点，返回数组 [..., 父级, 最终节点]
    getBreadcrumbData(element, basePath, data2 = []) {
      const liDom = element.closest("li");
      const basePathParts = basePath.split("/").filter(Boolean);
      const pathParts = element.getAttribute("data-node-path").split("/").filter(Boolean);
      if (pathParts.length > basePathParts.length) {
        return data2;
      }
      if (pathParts.every((part, idx) => basePathParts[idx] === part)) {
        data2.unshift({
          path: element.getAttribute("data-node-path"),
          link_text: element.getAttribute("data-node-name")
        });
        const parentNode = liDom.parentNode.closest("li")?.querySelector("[turbo-nav-tree-item] > [data-breadcrumb-target='navNode']");
        if (parentNode) {
          this.getBreadcrumbData(parentNode, basePath, data2);
        }
      }
      return data2;
    }
    // 渲染面包屑
    renderBreadcrumb(data2) {
      if (!this.hasBreadcrumbTemplateTarget) {
        console.warn("breadcrumb_controller: breadcrumbTemplate target not found");
        return;
      }
      const template = this.breadcrumbTemplateTarget.innerHTML.trim();
      if (!template) {
        console.warn("breadcrumb_controller: breadcrumbTemplate is empty");
        return;
      }
      this.breadcrumbContainerTarget.innerHTML = "";
      for (const item of data2) {
        const html = mustache_default.render(template, item);
        this.breadcrumbContainerTarget.insertAdjacentHTML("beforeend", html);
      }
    }
  };

  // src/javascripts/controllers/link_target_controller.js
  var link_target_controller_default = class extends Controller {
    static values = {
      external: { type: Boolean, default: true }
      // 是否外部打开
    };
    connect() {
      const anchors = this.element.querySelectorAll("a[href]");
      anchors.forEach((a) => {
        const href = a.getAttribute("href");
        if (!href || href.startsWith("#")) return;
        const isAbsolute = /^https?:\/\//i.test(href);
        let isExternal = false;
        if (isAbsolute) {
          try {
            const url = new URL(href, window.location.origin);
            isExternal = url.hostname !== window.location.hostname;
          } catch (e) {
          }
        }
        if (this.externalValue && isExternal) {
          a.setAttribute("target", "_blank");
          a.setAttribute("rel", "noopener noreferrer");
        }
        if (!this.externalValue) {
          a.removeAttribute("target");
          a.removeAttribute("rel");
        }
      });
    }
  };

  // src/javascripts/controllers/images_viewer_controller.js
  var import_viewerjs = __toESM(require_viewer());
  var images_viewer_controller_default = class extends Controller {
    connect() {
      const images = this.element.getElementsByTagName("img");
      const imgArray = Array.from(images);
      imgArray.forEach((image) => {
        image.addEventListener("click", this.openViewer);
      });
    }
    openViewer = (event) => {
      const clickedImage = event.currentTarget;
      const viewer = new import_viewerjs.default(this.element, {
        toolbar: {
          // 放大
          zoomIn: 1,
          // 缩小
          zoomOut: 1,
          // 原始大小
          oneToOne: 1,
          // 重置
          reset: 1,
          // 上一页
          prev: 1,
          // 全屏幻灯片
          play: {
            show: 1,
            size: "large"
          },
          // 下一页
          next: 1,
          // 向左旋转90
          rotateLeft: 1,
          // 向右旋转90
          rotateRight: 1,
          // 水平镜像翻转
          flipHorizontal: 1,
          // 垂直镜像翻转
          flipVertical: 1
        }
      });
      viewer.view(clickedImage);
    };
  };

  // src/javascripts/controllers/pdf_preview_controller.js
  var FPDF_REVERSE_BYTE_ORDER = 16;
  var ERROR_PASSWORD_REQUIRED = 4;
  var MIN_SCALE = 0.5;
  var MAX_SCALE = 3;
  var SCALE_STEP = 0.25;
  var DEFAULT_SCALE = 1.5;
  var pdfiumInit = null;
  async function getPdfiumInit() {
    if (!pdfiumInit) {
      const module = await Promise.resolve().then(() => (init_index_browser(), index_browser_exports));
      pdfiumInit = module.init;
    }
    return pdfiumInit;
  }
  var pdf_preview_controller_default = class extends Controller {
    static values = {
      url: String,
      wasmUrl: String,
      scale: { type: Number, default: DEFAULT_SCALE }
    };
    static targets = ["container", "canvas", "loading", "error", "controls", "pageInfo"];
    connect() {
      this.pdfiumInstance = null;
      this.pdfData = null;
      this.filePtr = null;
      this.docPtr = null;
      this.currentPage = 1;
      this.totalPages = 0;
      this.pagePtrs = {};
      this.isRendering = false;
      this.renderQueue = null;
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchStartTime = 0;
      this.lastTouchDistance = 0;
      this.isPinching = false;
      this.initialScale = this.scaleValue;
      this.isMobile = this.detectMobile();
      this.boundHandleKeydown = this.handleKeydown.bind(this);
      this.boundHandleTouchStart = this.handleTouchStart.bind(this);
      this.boundHandleTouchMove = this.handleTouchMove.bind(this);
      this.boundHandleTouchEnd = this.handleTouchEnd.bind(this);
      this.boundHandleWheel = this.handleWheel.bind(this);
      if (this.hasUrlValue && this.urlValue) {
        this.loadPDF();
      }
    }
    // 检测是否为移动设备
    detectMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
    }
    disconnect() {
      document.removeEventListener("keydown", this.boundHandleKeydown);
      if (this.hasContainerTarget) {
        this.containerTarget.removeEventListener("touchstart", this.boundHandleTouchStart);
        this.containerTarget.removeEventListener("touchmove", this.boundHandleTouchMove);
        this.containerTarget.removeEventListener("touchend", this.boundHandleTouchEnd);
        this.containerTarget.removeEventListener("wheel", this.boundHandleWheel);
      }
      this.cleanup();
    }
    // 键盘快捷键支持
    handleKeydown(event) {
      if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        return;
      }
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          this.previousPage();
          break;
        case "ArrowRight":
          event.preventDefault();
          this.nextPage();
          break;
        case "+":
        case "=":
          if (event.shiftKey || event.key === "+") {
            event.preventDefault();
            this.zoomIn();
          }
          break;
        case "-":
          event.preventDefault();
          this.zoomOut();
          break;
        case "0":
          event.preventDefault();
          this.resetZoom();
          break;
      }
    }
    async initializePdfium() {
      if (this.pdfiumInstance) {
        return this.pdfiumInstance;
      }
      const init2 = await getPdfiumInit();
      const wasmUrl = this.wasmUrlValue;
      if (!wasmUrl || typeof wasmUrl !== "string") {
        throw new Error("WASM URL \u65E0\u6548");
      }
      let absoluteUrl;
      try {
        absoluteUrl = new URL(wasmUrl).href;
      } catch (e) {
        absoluteUrl = new URL(wasmUrl, window.location.href).href;
      }
      console.log("\u6B63\u5728\u52A0\u8F7D PDFium WASM:", absoluteUrl);
      const response = await fetch(absoluteUrl, {
        mode: "cors",
        credentials: "omit"
      });
      if (!response.ok) {
        throw new Error(`\u65E0\u6CD5\u52A0\u8F7D WASM \u6587\u4EF6: ${response.status} ${response.statusText}`);
      }
      const wasmBinary = await response.arrayBuffer();
      if (!wasmBinary || wasmBinary.byteLength === 0) {
        throw new Error("WASM \u6587\u4EF6\u4E3A\u7A7A");
      }
      console.log("WASM \u6587\u4EF6\u52A0\u8F7D\u6210\u529F\uFF0C\u5927\u5C0F:", wasmBinary.byteLength, "bytes");
      this.pdfiumInstance = await init2({
        wasmBinary,
        locateFile: (path) => {
          if (!path) return absoluteUrl;
          if (path.endsWith(".wasm") || path.includes("pdfium")) {
            return absoluteUrl;
          }
          try {
            if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
              return path;
            }
            const baseDir = absoluteUrl.substring(0, absoluteUrl.lastIndexOf("/") + 1);
            return baseDir + path;
          } catch (e) {
            console.warn("\u65E0\u6CD5\u6784\u9020\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528 WASM URL:", path, e);
            return absoluteUrl;
          }
        }
      });
      this.pdfiumInstance.PDFiumExt_Init();
      console.log("PDFium \u521D\u59CB\u5316\u6210\u529F");
      return this.pdfiumInstance;
    }
    async loadPDF() {
      if (!this.hasUrlValue || !this.urlValue) {
        return;
      }
      try {
        this.showLoading();
        this.hideError();
        await this.initializePdfium();
        const response = await fetch(this.urlValue);
        const arrayBuffer = await response.arrayBuffer();
        this.pdfData = new Uint8Array(arrayBuffer);
        this.filePtr = this.pdfiumInstance.pdfium.wasmExports.malloc(this.pdfData.length);
        this.pdfiumInstance.pdfium.HEAPU8.set(this.pdfData, this.filePtr);
        this.docPtr = this.pdfiumInstance.FPDF_LoadMemDocument(this.filePtr, this.pdfData.length, 0);
        if (!this.docPtr) {
          const error3 = this.pdfiumInstance.FPDF_GetLastError();
          this.pdfiumInstance.pdfium.wasmExports.free(this.filePtr);
          this.filePtr = null;
          if (error3 === ERROR_PASSWORD_REQUIRED) {
            throw new Error("PDF \u6587\u6863\u53D7\u5BC6\u7801\u4FDD\u62A4\uFF0C\u65E0\u6CD5\u9884\u89C8");
          }
          throw new Error(`\u65E0\u6CD5\u52A0\u8F7D PDF \u6587\u6863 (\u9519\u8BEF\u4EE3\u7801: ${error3})`);
        }
        this.totalPages = this.pdfiumInstance.FPDF_GetPageCount(this.docPtr);
        this.currentPage = 1;
        if (this.hasContainerTarget && this.totalPages > 0) {
          await this.adjustScaleToFit();
        }
        await this.renderPage(this.currentPage);
        this.updatePageInfo();
        this.showControls();
        this.updateControls();
        this.hideLoading();
        document.addEventListener("keydown", this.boundHandleKeydown);
        if (this.hasContainerTarget) {
          this.containerTarget.addEventListener("touchstart", this.boundHandleTouchStart, { passive: false });
          this.containerTarget.addEventListener("touchmove", this.boundHandleTouchMove, { passive: false });
          this.containerTarget.addEventListener("touchend", this.boundHandleTouchEnd, { passive: false });
          this.containerTarget.addEventListener("wheel", this.boundHandleWheel, { passive: false });
        }
      } catch (error3) {
        console.error("PDF \u52A0\u8F7D\u5931\u8D25:", error3);
        this.showError(error3.message || "PDF \u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
        this.hideLoading();
        this.hideControls();
        this.cleanup();
      }
    }
    async renderPage(pageNum) {
      if (!this.pdfiumInstance || !this.docPtr || pageNum < 1 || pageNum > this.totalPages) {
        return;
      }
      if (this.isRendering) {
        if (this.renderQueue) {
          clearTimeout(this.renderQueue);
        }
        this.renderQueue = setTimeout(() => this.renderPage(pageNum), 50);
        return;
      }
      this.isRendering = true;
      try {
        let pagePtr = this.pagePtrs[pageNum];
        if (!pagePtr) {
          pagePtr = this.pdfiumInstance.FPDF_LoadPage(this.docPtr, pageNum - 1);
          if (!pagePtr) {
            throw new Error(`\u65E0\u6CD5\u52A0\u8F7D\u7B2C ${pageNum} \u9875`);
          }
          this.pagePtrs[pageNum] = pagePtr;
        }
        const width = this.pdfiumInstance.FPDF_GetPageWidthF(pagePtr);
        const height = this.pdfiumInstance.FPDF_GetPageHeightF(pagePtr);
        let canvas = this.hasCanvasTarget ? this.canvasTarget : this.createCanvas();
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          throw new Error("\u65E0\u6CD5\u83B7\u53D6 canvas 2D \u4E0A\u4E0B\u6587");
        }
        const dpr = window.devicePixelRatio || 1;
        const effectiveScale = this.scaleValue * dpr;
        let scaledWidth = Math.floor(width * effectiveScale);
        let scaledHeight = Math.floor(height * effectiveScale);
        const bitmapPtr = this.pdfiumInstance.FPDFBitmap_Create(scaledWidth, scaledHeight, 0);
        if (!bitmapPtr) {
          throw new Error("\u65E0\u6CD5\u521B\u5EFA\u4F4D\u56FE");
        }
        try {
          canvas.style.width = `${scaledWidth / dpr}px`;
          canvas.style.height = `${scaledHeight / dpr}px`;
          canvas.width = scaledWidth;
          canvas.height = scaledHeight;
          this.pdfiumInstance.FPDFBitmap_FillRect(bitmapPtr, 0, 0, scaledWidth, scaledHeight, 4294967295);
          this.pdfiumInstance.FPDF_RenderPageBitmap(
            bitmapPtr,
            pagePtr,
            0,
            0,
            scaledWidth,
            scaledHeight,
            0,
            // 旋转角度（0 = 无旋转）
            FPDF_REVERSE_BYTE_ORDER
            // 用于正确的颜色表示
          );
          const bufferPtr = this.pdfiumInstance.FPDFBitmap_GetBuffer(bitmapPtr);
          if (!bufferPtr) {
            throw new Error("\u65E0\u6CD5\u83B7\u53D6\u4F4D\u56FE\u7F13\u51B2\u533A");
          }
          const bufferSize = scaledWidth * scaledHeight * 4;
          const buffer = new Uint8Array(
            this.pdfiumInstance.pdfium.HEAPU8.buffer,
            this.pdfiumInstance.pdfium.HEAPU8.byteOffset + bufferPtr,
            bufferSize
          ).slice();
          const imageData = new ImageData(
            new Uint8ClampedArray(buffer.buffer),
            scaledWidth,
            scaledHeight
          );
          ctx.putImageData(imageData, 0, 0);
        } finally {
          this.pdfiumInstance.FPDFBitmap_Destroy(bitmapPtr);
        }
      } catch (error3) {
        console.error("PDF \u9875\u9762\u6E32\u67D3\u5931\u8D25:", error3);
        this.showError(`\u9875\u9762\u6E32\u67D3\u5931\u8D25: ${error3.message}`);
      } finally {
        this.isRendering = false;
      }
    }
    // 自动适配容器大小
    async adjustScaleToFit() {
      if (!this.hasContainerTarget || !this.docPtr || this.totalPages === 0) {
        return;
      }
      try {
        const pagePtr = this.pdfiumInstance.FPDF_LoadPage(this.docPtr, 0);
        if (!pagePtr) {
          return;
        }
        try {
          const pageWidth = this.pdfiumInstance.FPDF_GetPageWidthF(pagePtr);
          const pageHeight = this.pdfiumInstance.FPDF_GetPageHeightF(pagePtr);
          const container = this.containerTarget;
          const containerWidth = container.clientWidth - 32;
          const containerHeight = container.clientHeight - 32;
          if (containerWidth > 0 && containerHeight > 0) {
            const scaleX = containerWidth / pageWidth;
            const scaleY = containerHeight / pageHeight;
            let fitScale = Math.min(scaleX, scaleY, MAX_SCALE);
            if (this.isMobile) {
              fitScale = Math.min(fitScale * 0.9, MAX_SCALE);
            }
            if (fitScale >= MIN_SCALE && fitScale <= MAX_SCALE) {
              this.scaleValue = fitScale;
              this.initialScale = fitScale;
            }
          }
        } finally {
          this.pdfiumInstance.FPDF_ClosePage(pagePtr);
        }
      } catch (error3) {
        console.warn("\u65E0\u6CD5\u8BA1\u7B97\u9002\u5408\u7684\u7F29\u653E\u6BD4\u4F8B:", error3);
      }
    }
    // 触摸开始
    handleTouchStart(event) {
      if (event.touches.length === 1) {
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
        this.touchStartTime = Date.now();
        this.isPinching = false;
      } else if (event.touches.length === 2) {
        event.preventDefault();
        this.isPinching = true;
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        this.lastTouchDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        this.initialScale = this.scaleValue;
      }
    }
    // 触摸移动
    handleTouchMove(event) {
      if (this.isPinching && event.touches.length === 2) {
        event.preventDefault();
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        if (this.lastTouchDistance > 0) {
          const scaleChange = currentDistance / this.lastTouchDistance;
          const newScale = this.initialScale * scaleChange;
          this.scaleValue = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
          this.renderPage(this.currentPage);
        }
        this.lastTouchDistance = currentDistance;
      }
    }
    // 触摸结束
    handleTouchEnd(event) {
      if (!this.isPinching && event.changedTouches.length === 1) {
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - this.touchStartX;
        const deltaY = touch.clientY - this.touchStartY;
        const deltaTime = Date.now() - this.touchStartTime;
        const distance = Math.hypot(deltaX, deltaY);
        if (distance > 50 && deltaTime < 300 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            this.previousPage();
          } else {
            this.nextPage();
          }
        }
      }
      this.isPinching = false;
      this.lastTouchDistance = 0;
    }
    // 鼠标滚轮缩放（桌面端）
    handleWheel(event) {
      if (!this.isMobile && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        const delta = event.deltaY > 0 ? -SCALE_STEP : SCALE_STEP;
        this.scaleValue = Math.max(MIN_SCALE, Math.min(MAX_SCALE, this.scaleValue + delta));
        this.renderPage(this.currentPage);
      }
    }
    createCanvas() {
      const canvas = document.createElement("canvas");
      canvas.className = "max-w-full h-auto";
      canvas.style.display = "block";
      canvas.style.margin = "0 auto";
      if (this.isMobile) {
        canvas.style.touchAction = "pan-x pan-y";
        canvas.style.userSelect = "none";
        canvas.style.webkitUserSelect = "none";
      }
      if (this.hasContainerTarget) {
        this.containerTarget.innerHTML = "";
        this.containerTarget.appendChild(canvas);
      } else {
        this.element.appendChild(canvas);
      }
      return canvas;
    }
    async previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.renderPage(this.currentPage);
        this.updatePageInfo();
        this.updateControls();
      }
    }
    async nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.renderPage(this.currentPage);
        this.updatePageInfo();
        this.updateControls();
      }
    }
    async goToPage(event) {
      const pageNum = parseInt(event.target.value);
      if (pageNum >= 1 && pageNum <= this.totalPages) {
        this.currentPage = pageNum;
        await this.renderPage(this.currentPage);
        this.updatePageInfo();
        this.updateControls();
      }
    }
    async zoomIn() {
      this.scaleValue = Math.min(this.scaleValue + SCALE_STEP, MAX_SCALE);
      await this.renderPage(this.currentPage);
    }
    async zoomOut() {
      this.scaleValue = Math.max(this.scaleValue - SCALE_STEP, MIN_SCALE);
      await this.renderPage(this.currentPage);
    }
    async resetZoom() {
      if (this.isMobile && this.initialScale > 0) {
        this.scaleValue = this.initialScale;
      } else {
        this.scaleValue = DEFAULT_SCALE;
      }
      await this.renderPage(this.currentPage);
    }
    updatePageInfo() {
      if (this.hasPageInfoTarget) {
        this.pageInfoTarget.textContent = `${this.currentPage} / ${this.totalPages}`;
      }
    }
    updateControls() {
      if (this.hasControlsTarget) {
        const prevButton = this.controlsTarget.querySelector('[data-action*="previous"]');
        const nextButton = this.controlsTarget.querySelector('[data-action*="next"]');
        if (prevButton) {
          prevButton.disabled = this.currentPage <= 1;
          prevButton.classList.toggle("opacity-50", this.currentPage <= 1);
          prevButton.classList.toggle("cursor-not-allowed", this.currentPage <= 1);
        }
        if (nextButton) {
          nextButton.disabled = this.currentPage >= this.totalPages;
          nextButton.classList.toggle("opacity-50", this.currentPage >= this.totalPages);
          nextButton.classList.toggle("cursor-not-allowed", this.currentPage >= this.totalPages);
        }
      }
    }
    showLoading() {
      if (this.hasLoadingTarget) {
        this.loadingTarget.classList.remove("hidden");
      }
    }
    hideLoading() {
      if (this.hasLoadingTarget) {
        this.loadingTarget.classList.add("hidden");
      }
    }
    showError(message) {
      if (this.hasErrorTarget) {
        this.errorTarget.textContent = message;
        this.errorTarget.classList.remove("hidden");
      }
    }
    hideError() {
      if (this.hasErrorTarget) {
        this.errorTarget.classList.add("hidden");
      }
    }
    showControls() {
      if (this.hasControlsTarget) {
        this.controlsTarget.classList.remove("hidden");
      }
    }
    hideControls() {
      if (this.hasControlsTarget) {
        this.controlsTarget.classList.add("hidden");
      }
    }
    cleanup() {
      if (this.renderQueue) {
        clearTimeout(this.renderQueue);
        this.renderQueue = null;
      }
      if (this.pdfiumInstance && this.pagePtrs) {
        Object.values(this.pagePtrs).forEach((pagePtr) => {
          if (pagePtr) {
            try {
              this.pdfiumInstance.FPDF_ClosePage(pagePtr);
            } catch (e) {
              console.warn("\u5173\u95ED\u9875\u9762\u65F6\u51FA\u9519:", e);
            }
          }
        });
        this.pagePtrs = {};
      }
      if (this.pdfiumInstance && this.docPtr) {
        try {
          this.pdfiumInstance.FPDF_CloseDocument(this.docPtr);
        } catch (e) {
          console.warn("\u5173\u95ED\u6587\u6863\u65F6\u51FA\u9519:", e);
        }
        this.docPtr = null;
      }
      if (this.pdfiumInstance && this.filePtr) {
        try {
          this.pdfiumInstance.pdfium.wasmExports.free(this.filePtr);
        } catch (e) {
          console.warn("\u91CA\u653E\u5185\u5B58\u65F6\u51FA\u9519:", e);
        }
        this.filePtr = null;
      }
      this.pdfData = null;
      this.isRendering = false;
    }
  };

  // src/javascripts/application.js
  var application = Application.start();
  application.register("image-preview", image_preview_controller_default);
  application.register("view-toggle", view_toggle_controller_default);
  application.register("batch-download", batch_download_controller_default);
  application.register("filter-select", filter_select_controller_default);
  application.register("file-size-filter", file_size_filter_controller_default);
  application.register("sidebar-toggle", sidebar_toggle_controller_default);
  application.register("image-zoom", image_zoom_controller_default);
  application.register("view-mode-toggle", view_mode_toggle_controller_default);
  application.register("sort-options", sort_options_controller_default);
  application.register("more-menu", more_menu_controller_default);
  application.register("user-menu", user_menu_controller_default);
  application.register("redirect", redirect_controller_default);
  application.register("turbo-nav-tree", turbo_nav_tree_controller_default);
  application.register("breadcrumb", breadcrumb_controller_default);
  application.register("link-target", link_target_controller_default);
  application.register("images-viewer", images_viewer_controller_default);
  application.register("pdf-preview", pdf_preview_controller_default);
  module_default.magic("buildUrl", () => buildUrl);
  module_default.magic("updateQuery", () => updateQuery);
  module_default.magic("getQueryParams", () => getQueryParams);
  module_default.magic("getFilenameWithExtension", () => getFilenameWithExtension);
  module_default.directive("tooltip", tooltip_default);
  window.Alpine = module_default;
  module_default.start();
  var application_default = application;
})();
/*! Bundled license information:

viewerjs/dist/viewer.js:
  (*!
   * Viewer.js v1.11.7
   * https://fengyuanchen.github.io/viewerjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2024-11-24T04:32:19.116Z
   *)

mustache/mustache.mjs:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
