const config = {
    debug: true
};

const log = s => !config.debug || console.log(s);

// 货币格式化
const currency = (value, currency, decimals) => {
    const digitsRE = /(\d{3})(?=\d)/g;
    value = parseFloat(value);
    if (!isFinite(value) || (!value && value !== 0)) return '';
    currency = currency != null ? currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals
        ? stringified.slice(0, -1 - decimals)
        : stringified;
    var i = _int.length % 3;
    var head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
        : '';
    var _float = decimals
        ? stringified.slice(-1 - decimals)
        : '';
    var sign = value < 0 ? '-' : '';
    return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float;
};

//
const getType = obj => {
    // tostring会返回对应不同的标签的构造函数
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
};

// 深拷贝
const deepClone = data => {
    var type = getType(data);
    var obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        // 不再具有下一层次
        return data;
    }
    if (type === 'array') {
        for (const item of data) {
            obj.push(deepClone(item));
        }
    } else if (type === 'object') {
        for (var key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};

export default {
    log,
    currency,
    getType,
    deepClone
};
