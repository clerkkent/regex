(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['useful-regex'] = factory());
}(this, (function () { 'use strict';

var index = {
    // 中文字符
    Chinese: /[\u4e00-\u9fa5]/,
    // 双字节字符
    DoubleCharacter: /[^\x00-\xff]/,
    // 中国大陆手机号 (移动/联通/电信)
    Phone: /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/,
    // 中国移动
    PhoneYidong: /^1(3[4-9]|4[7]|5[0-27-9]|7[08]|8[2-478])\d{8}$/,
    // 中国联通
    PhoneLiantong: /^1(3[0-2]|4[5]|5[56]|7[0156]|8[56])\d{8}$/,
    // 中国电信
    PhoneDianxin: /^1(3[3]|4[9]|53|7[037]|8[019])\d{8}$/,
    // 邮箱
    Email: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    // 统一资源标识符
    URI: /[a-zA-z]+:\/\/[^\s]*/,
    // 统一资源定位符
    URL: /https?:\/\/[^\s]*/,
    // QQ号码
    QQ: /[1-9][0-9]{4,}/,
    // 邮政编码
    PostalCode: /[1-9]\d{5}(?!\d)/,
    // 身份证
    IDCard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
    // 整数
    Integer: /^-?[1-9]\d*$/,
    // 正整数
    PositiveInteger: /^[1-9]\d*$/,
    // 负整数
    NegtiveInteger: /^-[1-9]\d*$/,
    // 非正整数
    NonPositiveInteger: /^-[1-9]\d*|0$/,
    // 非负整数
    NonNegtiveInteger: /^[1-9]\d*|0$/,
};

return index;

})));
