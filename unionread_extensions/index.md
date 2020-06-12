# 联合阅读辅助插件

> 有问题和建议请在本评论区或[联合阅读评论区](http://unionread.vip/module/novel/info.php?tid=3&nid=10838)留言

## 电脑端

### 功能
1. ~~优化了搜索功能，解决无法搜索问题~~（官方已解决，弃用）
2. 解决评论换行显示问题
3. 添加作品简介展开按钮（仿起点）
4. 添加作家草稿箱自动保存功能（默认30秒一次，自行修改）
5. 自动重定向至电脑版

### 适用浏览器
* 安装了[用户脚本管理器](https://www.bilibili.com/read/cv5293953)的各大浏览器

### 插件地址
[https://greasyfork.org/zh-CN/scripts/403902-联合阅读辅助插件](https://greasyfork.org/zh-CN/scripts/403902-联合阅读辅助插件)

## 手机端

### 功能
1. ~~普通页面自动重定向至手机版~~（官方已解决，弃用）
2. ~~作家中心自动重定向至电脑版~~（官方已解决，弃用）
3. ~~手机版“个人中心”添加“作家中心”入口点~~（官方已解决，弃用）
4. ~~去除段落前后空格，统一格式~~（官方已解决，弃用）
5. 解决评论换行显示问题
6. 解决作品信息换行显示问题

### 适用浏览器
* 安卓：[via浏览器](https://viayoo.com/zh-cn/)
* IOS：[alook浏览器](https://apps.apple.com/cn/app/id1261944766)（未测试）

### 插件地址
[https://qidian55.github.io/unionread_extensions/via](https://qidian55.github.io/unionread_extensions/via)

<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk@latest/dist/gitalk.min.js"></script>

<div id="gitalk-container"></div>
<script type="text/javascript">
    var gitalk = new Gitalk({
    // gitalk的主要参数
      clientID: `c675747fb4b4a83a59f9`,   //上面获取到的值
      clientSecret: `85b826d9abd3f763f7d8f9606a699b121571fbef`,//上面获取到的值
      repo: `qidian55.github.io`,  //您刚才建立仓库的名字
      owner: 'qidian55',   //你的GitHub用户名字
      admin: ['qidian55'],  //你的GitHub用户的名字
      id: 'unionread_extensions', //id不能重复，如果重复就会把其他页面的评论引进来
        });
      gitalk.render('gitalk-container');
</script>