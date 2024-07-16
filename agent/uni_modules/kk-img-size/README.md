<template>
	<view>
		<!-- 组件只压缩图片，不占用页面位置 -->
		<kk-img-size :quality="0.2" ref="imgsize" @resimg="resimg"></kk-img-size>

	</view>
</template>

<script>
	export default {
		methods: {
			// 选择要压缩的图片
			select() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						const filePath = res.tempFilePaths[0]
						// 调用组件的压缩方法getImageInfo,传参： 图片文件临时路径、图片url
						this.$refs.imgsize.getImageInfo(filePath)
					},

				});
			},
			// 图片压缩完成后回调：回调 新图片文件的临时路径
			resimg(url) {
				console.log('压缩后返回的图片临时路径：', url);
				uni.uploadFile({
					url: 'https://xxxxxxxx', // 上传图片API接口地址
					filePath: e,
					success: Result => {
						console.log('图片上传到服务器成功');
					}
				});
			}


		},

	}
</script>