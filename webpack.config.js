/**
 * Created by linten01 on 2016/5/24 0024.
 */
var path = require('path');
module.exports = {

    entry:{
        'index':'./index.jsx'
    },
    output:{
        path:"./static/js/",
        filename:'[name].js'
    },
    devServer: {
        inline: true,
        port: 3300,
        hot: true
    },
    module:{
        loaders:[
            {
                test:/\.jsx$/,
                loader:'babel',
                exclude:/node_modules/
            },
            {
                test:path.join(__dirname,''),
                loaders:['babel-loader'],
                exclude:/node_modules/,
            },
            {
                test:/\.png|\.jpg$/,
                loaders:["url-loader?limit=8192"] //30720
            },
            {
                test:/.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }


};