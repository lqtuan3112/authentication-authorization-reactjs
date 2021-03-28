/**
 * Hàm tạo query param từ 1 object
 * @param {*} obj object cần tạo
 * @author LQTUAN (10/01/2021)
 */
const generateQueryParam = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p) & (obj[p] != null)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    str = str.join('&');
    if (str && str.length > 0) return '?' + str;
    return '';
};

export { generateQueryParam };
