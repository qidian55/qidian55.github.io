// ==UserScript==
// @name         联合阅读辅助插件
// @namespace    http://*.unionread.vip/
// @version      0.1
// @description  优化联合阅读一些程序方面体验
// @author       qidian55
// @match        http://*.unionread.vip/*
// @grant        none
// ==/UserScript==
(function() {
    for (var form of document.getElementsByTagName('form')) {
        var action = form.action;
        if (action.substr(action.length - 10) === 'search.php') form.method = 'get';
    }
})();