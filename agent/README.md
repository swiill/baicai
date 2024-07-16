# yygg-tree


``` js

	import collapse from "@/components/collapse/collapse"
	
	
	export default {
		components: {
			collapse
		},
		data() {
			return {
				itemList: [{
						user_name: '张山1',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg',
						child: [{
							user_name: '李四2',
							image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
						}, {
							user_name: '李四3',
							image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
						}, {
							user_name: '李四4',
							image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
						}, {
							user_name: '李四5',
							image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
						}, {
							user_name: '李四',
							image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
						}, {
							user_name: '李四7',
							image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
						}, ]
					},
					{
						user_name: '张山2',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
					}, {
						user_name: '张山3',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
					}, {
						user_name: '张山4',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
					}, {
						user_name: '张山5',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
					}, {
						user_name: '张山6',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
					}, {
						user_name: '张山7',
						image: 'https://mine-yygg.oss-cn-qingdao.aliyuncs.com/upload/111_jpg.jpg'
					},
				],
			}
		}
		
	}
```


``` html
	<collapse :list="user_list"></collapse>

```
