# 联合阅读辅助插件

> 有问题和建议请在本评论区或[联合阅读评论区](https://xrzww.com/#/thread?thread_id=998)留言

## 电脑端

根据新版网站构建的全新版本！

### 功能
1. 添加了网页签到功能
2. 添加朗读功能（应该比官方实现的要好一点）
3. 个人主页添加浏览记录

### 适用浏览器
* 安装了[用户脚本管理器](https://www.bilibili.com/read/cv5293953)的各大浏览器

### 插件地址
[https://greasyfork.org/zh-CN/scripts/403902-联合阅读辅助插件](https://greasyfork.org/zh-CN/scripts/403902-联合阅读辅助插件)

## 手机端

### 功能
1. 移除app下载框

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