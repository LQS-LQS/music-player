module.exports = {
  lintOnSave:false,    //关闭语法检查 
  publicPath:process.env.NODE_ENV === 'production' ? './' : './',//
  devServer:{
    proxy:{
        '^/wangyiyun':{  //匹配所有以'/wangyiyun'开始的路径
          target:'https://autumnfish.cn',
          pathRewrite:{'^/wangyiyun':''},//匹配所有以/fuck开头的字符串变为空字符串
          ws:true,  //用于支持WebSocket
          changeOrigin:true,  ////设置是否跨域，开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
          secure: false, //支持https
        },
    }
  },
}