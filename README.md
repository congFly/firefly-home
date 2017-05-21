
## 如何运行本项目
1. [~] $: git clone https://github.com/Afaren/firefly-home.git  
2. [~] $: cd firefly-home  
3. [ firefly-home ] $: npm install  
4. [ firefly-home ] $: mongod OR sudo mongod  
5. [ firefly-home ] $: npm run refreshMongo  
6. [ firefly-home ] $:
 npm run webpack
7. [ firefly-home ] $: npm start  
8. 打开浏览器，输入localhost:3000打开firefly-home主页，开始firefly之旅 :)

## 运行jamine测试
`./run-test.sh` 自动运行测试30次

## story access
`./story-ac.sh` 自动运行`覆盖率`测试及`eslint`检查
