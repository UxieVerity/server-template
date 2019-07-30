# server-template

这个项目搭建了一个简单的web服务  
项目总体使用强类型的ts来进行编写  
关于ts的配置放在了根目录的tsconfig.json  
后台使用的是node原生的htpp来建设，虽然没有应用express这种较为成熟的框架，有需要的同学可以自行添加。 
前端使用是使用vue框架来写，style使用scss来写的  
在src文件夹当中添加了vue-shim.d.ts是为了让项目识别vue文件  
webpack当中也进行了基础的配置，对于ts，js，css，scss，vue的识别与打包  

# yarn listen
后台文件编译并运行

# yarn webpack
监听前端文件修改并自动打包

# yarn server
打包并运行后台
