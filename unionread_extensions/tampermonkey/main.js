// ==UserScript==
// @name         联合阅读辅助插件
// @namespace    http://*.unionread.vip/
// @version      0.6
// @description  优化联合阅读一些程序方面体验
// @author       qidian55
// @match        http://*.unionread.vip/*
// @match        https://*.xrzww.com/*
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    //自动换站
    if (!location.href.includes('xrzww.com')) {
        location.href = location.href.replace('unionread.vip', 'xrzww.com');
        return;
    }
    //自动重定向至电脑版
    var url = location.href;
    if (location.href.includes('?')) url += "&pt=web";
    else url += "?pt=web";
    if (!location.href.includes('pt=web') && !document.head.innerHTML.includes("wmcms-web")) location.href = url;
    /*优化搜索功能（弃用）
    for (var form of document.getElementsByTagName('form')) {
        var action = form.action;
        if (action.substr(action.length - 10) === 'search.php') form.method = 'get';
    }*/
    /*添加作品简介展开按钮（弃用）
    for (var div of document.getElementsByClassName('works-intro-short ui-text-gray9')) {
        div.style.height = '54px';
        div.innerHTML += `<a><svg style="position: absolute;top: 125px;width: 17px;left: 542px;transform: rotate(90deg);" viewBox="0 0 7 12">
    <path d="M6.146 6.354v-.708l-5.5 5.5a.5.5 0 0 0 .708.708l5.5-5.5a.5.5 0 0 0 0-.708l-5.5-5.5a.5.5 0 1 0-.708.708l5.5 5.5z"></path>
</svg></a>`;
        div.children[0].onclick = function() {
            if (this.parentElement.style.height == '54px') {
                this.parentElement.style.height = 'auto';
                this.parentElement.style.whiteSpace = 'pre-wrap';
                this.children[0].style.transform = 'rotate(-90deg)';
            } else {
                this.parentElement.style.height = '54px';
                this.parentElement.style.whiteSpace = '';
                this.children[0].style.transform = 'rotate(90deg)';
            }
        }
    }*/
    //作家草稿箱自动保存
    var intervalTime = 30; //默认30秒保存一次
    function autoSave() {
        var vid = $("#vid").val();
        var pay = $("#pay").val();
        var title = $("#title").val();
        var content = $("#content").val();

        if (isPositiveNum(pay) && isPositiveNum(vid) && title != '' && content != '') {
            $.ajax({
                type: "POST",
                url: "/wmcms/action/index.php?action=author.draftedit&ajax=yes",
                data: $("#form").serializeArray(),
                dataType: "json",
                success: function(data) {
                    if (data.msg == '草稿修改成功！') document.getElementById('autoSave').textContent = '于' + Date().split(' ')[4] + '自动保存';
                },
                async: true,
            });
        }
    }
    if (location.pathname === '/module/author/novel_draftlist.php') {
        var button = document.createElement('button');
        button.id = 'autoSave';
        button.style = "position: fixed;bottom:20px; right:80px;z-index: 999;background: #ff8c00;color: #fff;height: 28px;cursor: pointer;";
        button.textContent = '尚未自动保存';
        button.intervalTime = intervalTime;
        button.autoSave = autoSave;
        button.onclick = function() {
            if (this.textContent == '自动保存已关闭') {
                document.getElementById('autoSave').timer = setInterval(this.autoSave, this.intervalTime * 1000);
                this.textContent = '尚未自动保存';
                this.style.background = '#ff8c00';
            } else {
                clearInterval(this.timer);
                this.textContent = '自动保存已关闭';
                this.style.background = '#a9a';
            }
        }
        button.timer = setInterval(autoSave, intervalTime * 1000);
        document.body.appendChild(button);
    }
})();
//解决评论及作品简介换行显示问题
GM_addStyle('.p2{white-space: pre-wrap;}.wmcms_replay_replaycontent{white-space: pre-wrap;}');