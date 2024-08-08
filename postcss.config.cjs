/***
 注意点：
 （1）rootValue根据设计稿宽度除以10进行设置，这边假设设计稿为1920，即rootValue设为192；
 （2）propList是设置需要转换的属性，这边*为所有都进行转换。
 ***/
module.exports = function() {
    return {
        devServer: {
            port: 3000,
            open: true
        },
        css: {
            loaderOptions: {
                postcss: {
                    plugins: [
                        require('postcss-pxtorem')({
                            rootValue: 18,
                            propList: ['*'],
                            // 其他选项可以按照需要添加
                            // unitPrecision:5, //允许rem单位增长的十进制数字
                            // replace:true, //替换包含rems的规则，而不添加后备
                            //mediaQuery:false, //允许在媒体查询中转换px
                            // minPixelValue:0, //设置要替换的最小像素值
                            // selectorBlackList:[], //忽略转换正则匹配项
                            // exclude:/node_modules/i  要忽略并保留为px的文件路径
                        })
                    ]
                }
            }
        }
        // 其他配置...
    };
};