module.exports = {
    //env:指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    "env": {
        "browser": true,//browser 全局变量
        "commonjs": true,//CommonJS 全局变量和 CommonJS 作用域
        "es6": true,//支持除了modules所有 ECMAScript 6 特性。
        "node": true//Node.js 全局变量和 Node.js 作用域。
    },
    "extends": "eslint:recommended",
    "parserOptions": {//文件使用 parserOptions 属性设置解析器选项
        "ecmaFeatures": {//这是个对象，表示你想使用的额外的语言特性
            "experimentalObjectRestSpread": true,// 启用对实验性的 object rest/spread properties 的支持。
            "jsx": true//启用 JSX
        },
        "sourceType": "module"//设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    },
    "plugins": [//插件
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "complexity": [
            "error",
            3
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-statements": [
            "error",
            15
        ],
        "react/jsx-uses-vars": [2],
        "max-lines": [
          "error",
          {
            "max": 150,
            "skipComments": true
          }
        ]
    }
};