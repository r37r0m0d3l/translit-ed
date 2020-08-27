/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
const MAX_SAFE_INTEGER = 9007199254740991;
const argsTag = "[object Arguments]";
const funcTag = "[object Function]";
const genTag = "[object GeneratorFunction]";
const reIsUint = /^(?:0|[1-9]\d*)$/;
function baseTimes(n, iteratee) {
  let index = -1;
  let result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const objectToString = objectProto.toString;
const propertyIsEnumerable = objectProto.propertyIsEnumerable;
const nativeKeys = overArg(Object.keys, Object);
function arrayLikeKeys(value, inherited) {
  let result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
  let length = result.length,
    skipIndexes = !!length;
  for (let key in value) {
    if (
      (inherited || hasOwnProperty.call(value, key)) &&
      !(skipIndexes && (key === "length" || isIndex(key, length)))
    ) {
      result.push(key);
    }
  }
  return result;
}
const baseFor = createBaseFor();
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function (value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  const result = [];
  for (let key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key !== "constructor") {
      result.push(key);
    }
  }
  return result;
}
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    let index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;

    while (length--) {
      let key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
function createInverter(setter, toIteratee) {
  return function (object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return (
    !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 === 0 && value < length
  );
}
function isPrototype(value) {
  let Ctor = value && value.constructor,
    proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto;

  return value === proto;
}
function isArguments(value) {
  return (
    isArrayLikeObject(value) &&
    hasOwnProperty.call(value, "callee") &&
    (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) === argsTag)
  );
}
const isArray = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function isFunction(value) {
  const tag = isObject(value) ? objectToString.call(value) : "";
  return tag === funcTag || tag === genTag;
}
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
  const type = typeof value;
  return !!value && (type === "object" || type === "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function constant(value) {
  return function () {
    return value;
  };
}
function identity(value) {
  return value;
}
export const invert = createInverter(function (result, value, key) {
  result[value] = key;
}, constant(identity));
