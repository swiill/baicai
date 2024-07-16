<template>
	<view>
		<canvas canvas-id="one_canvas" id="one_canvas" :style="{'height':height+'px','width':width+'px'}" class="one-canvas"></canvas>
	</view>
</template>

<script>
	export default {
		name:"img_size",
		props:{
			//压缩质量，范围0～1，数值越小，质量越低，压缩率越高
			quality:{ 
				type:Number,
				default:0.5
			}
		},

		data() {
			return {
				ctx:null,
				width:100,
				height:100,
			};
		},
		created() {
			this.ctx=uni.createCanvasContext('one_canvas', this)
			console.log(this.ctx)
		},
		onLoad() {
			
		},
		methods:{
			getImageInfo(path){
				uni.getImageInfo({
				            src: path,
				            success:(image)=> {
				                console.log(image);
								this.width=image.width
								this.height=image.height
								this.ctx.fillRect(0, 0,image.width , image.height); //canvas画布大小
								setTimeout(()=>{this.dowfile(image.path)},100)
								
				            }
				        });
			},
			dowfile(url){
				this.ctx.drawImage(url, 0, 0, this.width,this.height)
				this.ctx.draw(true,()=>{
					this.subCanvas()
				})
			},
			 subCanvas() {
				 uni.canvasToTempFilePath({
					canvasId: 'one_canvas',
					fileType: 'jpg',
					quality:this.quality, //图片质量
					success: (res) => {
						 console.log(res.tempFilePath, 'canvas生成图片地址');
						try {
							this.$emit('resimg',res.tempFilePath)
						} catch (e) {
							// error
						}
					},
					fail: (res) => {
						console.log('fail',res)
					},
					complete: (res) => {
						console.log('complete',res)
					}
				},this);
				
				
			},
			
			
		}
		
	}
</script>

<style>
.one-canvas{
	/* background-color: #006600; */
	position: absolute;left: -100000rpx;top: -11000rpx;
}
</style>
