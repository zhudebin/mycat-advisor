### Mycat advisor

### 官网:[http://www.mycat.org.cn](http://www.mycat.org.cn)

### 依赖说明：


*	依赖lombok 插件
*	依赖maven项目,下载安装
*   https://github.com/GuangShengLiang/mybatis-generator-plugins.git
*   https://github.com/GuangShengLiang/commons.git



##### 架构说明：

*	spring boot + mybatis + mysql + h5 + restful
*	运行Application.java main 方法 启动
*	数据库表的映射 使用mybatis-generator生成, 参考配置文件generatorConfig.xml

##### 开发说明：

*	接口设计请严格遵循restful规范,可参考UserController
*	接口返回的数据格式使用JsonResponse
*	mybatis 数据访问使用子mapper
*   mbg目录里面的代码全部是由mybatis生成,不可以修改
