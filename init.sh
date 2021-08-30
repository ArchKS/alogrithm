#!/bin/bash
#file_name="README.md"
#echo "\`\`\`text" > $file_name
#tree -N >> $file_name
#echo "\`\`\`" >> $file_name

export https_proxy=127.0.0.1:7776
export http_proxy=127.0.0.1:7776

rm .*un~*
git add .
msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"`;
git commit -m "${msg}"
git push 

export https_proxy=
export http_proxy=

