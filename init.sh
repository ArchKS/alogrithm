#!/bin/bash
#file_name="README.md"
#echo "\`\`\`text" > $file_name
#tree -N >> $file_name
#echo "\`\`\`" >> $file_name

git add .
msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"`;
git commit -m "${msg}"
git push 


