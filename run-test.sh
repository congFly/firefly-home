#########################################################################
# File Name: run-test.sh
# Author: fcc
# mail: 18829291885@163.com.com
# Created Time: Sat 20 Apirl 2017 12:17:10 AM CST
#########################################################################
#!/bin/bash

echo $'\n\n run test of firefly'
npm run refreshMongo # refreshMongo before run test, otherwise first test will faild 

times=30

while [ $times -gt 0 ]; do
	npm test  # run test
	echo "----------------------- # $times "
	times=$((times-1))
done
echo 'All test finished'

