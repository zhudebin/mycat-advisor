mycat顶级顾问app端
========

使用React Native 构建的一款跨平台的app。

# 环境需求
1. OS X - 本向导假设您的操作系统是OS X，因为这是开发iOS应用所必须的。
2. 推荐使用Homebrew 来安装Watchman和Flow
3. 安装Node.js 4.0或更高版本(译注：如果你并不使用Node.js开发网站，只是用于React Native的开发，那么请先安装homebrew，然后直接使用brew install node安装即可，不必按照下面的nvm的安装步骤)
 - 安装 nvm（安装向导在这里）。然后运行nvm install node && nvm alias default node，这将会默认安装- 最新版本的Node.js并且设置好命令行的环境变量，这样你可以输入node命令来启动Node.js环境。nvm使你可以同时安装多个版本的Node.js，并且在这些版本之间轻松切换。
 - 如果你从未接触过npm，推荐阅读npm的文档
4. 在命令行中输入brew install watchman，我们推荐安装watchman，否则你可能会遇到一个Node.js监视文件系统的BUG。
5. 如果你希望使用flow来为js代码加上类型检查，那么在命令行中输入brew install flow来安装flow。（译注：新手可以跳过这一步）

我们推荐您定期运行brew update && brew upgrade来保持上述几个程序为最新版本。

更多参考 http://reactnative.cn/docs/0.21/getting-started.html
