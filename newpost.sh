cd src/routes/posts
d=`date +%Y-%m-%d`
title="${d}-${1}"
mkdir $title
echo $d
echo $1
cd $title
touch document.md
touch post.js
post="export default {
  title: \"\",
  tags: [\"\"],
  spoiler: \"\",
  getContent: () => import(\"./document.md\")
};"
echo "$post" > post.js
