<template>
	<!-- 长按复制，粘贴，转发组件 -->
	<view class="mask" :class="!show?'':'mask-show'" :style="{backgroundColor:show?maskBg:'rgba(0,0,0,0)'}" @tap="tapMask">
		<view class="popups" :class="[theme]"
			:style="{top: popupsTop ,left: popupsLeft,flexDirection:direction}">
			<text :class="dynPlace" :style="{width:'0px',height:'0px'}" v-if="triangle"></text>
			<template  v-for="(item,index) in popData">
				<view @tap.stop="tapItem(item)" v-if="item.disabled==false"
					class="itemChild view" :class="[direction=='row'?'solid-right':'solid-bottom',item.disabled?'disabledColor':'']">
						<u-icon :color="item.disabled?'#c8c9cc':'#ffffff'" :name="item.icon" size="20" v-if="item.icon"></u-icon>
						<text>{{item.title}}</text>
				</view>
			</template>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			maskBg:{
				type:String,
				default:'rgba(0,0,0,0)'
			},
			placement:{
				type:String,
				default:'default' //default top-start top-end bottom-start bottom-end 
			},
			direction:{
				type:String,
				default:'column' //column row
			},
			x:{
				type:Number,
				default:0
			},
			y:{
				type:Number,
				default:0
			},
			value:{
				type:Boolean,
				default:false
			},
			popData:{
				type:Array,
				default:()=>[]
			},
			theme:{
				type:String,
				default:'light' //light dark
			},
			dynamic:{
				type:Boolean,
				default:false
			},
			gap:{
				type:Number,
				default:20
			},
			triangle:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return{
				popupsTop:'0px',
				popupsLeft:'0px',
				show:false,
				dynPlace:''
			}
		},
		mounted() {
			this.popupsPosition()
		},
		methods:{
			tapMask(){
				
				this.$emit('input',!this.value)
			},
			tapItem(item){
				if(item.disabled) return
				this.$emit('tapPopup',item)
				this.$emit('input',!this.value)
			},
			getStatusBar(){
				let promise = new Promise((resolve,reject)=>{
					uni.getSystemInfo({
						success: function(e) {
							
							let customBar
							// #ifdef H5
					
							customBar = e.statusBarHeight + e.windowTop;

							// #endif
							resolve(customBar)
						}
					})
				})
				return promise
			},
			async popupsPosition(){
				let statusBar = await this.getStatusBar()
				let promise = new Promise((resolve,reject)=>{
					let popupsDom = uni.createSelectorQuery().in(this).select(".popups")
					popupsDom.fields({
					    size: true,  
					}, (data) => {
						let width = data.width
						let height = data.height
						
						let y = this.dynamic?this.dynamicGetY(this.y,this.gap):this.transformRpx(this.y)
						
						let x = this.dynamic?this.dynamicGetX(this.x,this.gap):this.transformRpx(this.x)
					
						
						// #ifdef H5
						y = this.dynamic?(this.y+statusBar): this.transformRpx(this.y+statusBar)
						// #endif 
						
						this.dynPlace = this.placement=='default'?this.getPlacement(x,y):this.placement
						
						switch(this.dynPlace){
							case 'top-start':
								this.popupsTop = `${y+9}px`
								this.popupsLeft = `${x-15}px`
								break;
							case 'top-end':
								this.popupsTop = `${y+9}px`
								this.popupsLeft = `${x+15-width}px`
								break;
							case 'bottom-start':
								this.popupsTop = `${y-18-height}px`
								this.popupsLeft = `${x-15}px`
								break;
							case 'bottom-end':
								this.popupsTop = `${y-9-height}px`
								this.popupsLeft = `${x+15-width}px`
								break;
						}
						resolve()
					}).exec();
					
				})
				return promise
				
			},
			getPlacement(x,y){
				let width = uni.getSystemInfoSync().windowWidth
				let height = uni.getSystemInfoSync().windowHeight
				if(x>width/2&&y>height/2){
					return 'bottom-end'
				}else if(x<width/2&&y<height/2){
					return 'top-start'
				}else if(x>width/2&&y<height/2){
					return 'top-end'
				}else if(x<width/2&&y>height/2){
					return 'bottom-start'
				}else if(x>width/2){
					return 'top-end'
				}else{
					return 'top-start'
				}
			},
			dynamicGetY(y,gap){
				
				let height = uni.getSystemInfoSync().windowHeight
				y = y<gap?gap:y
				y = height - y <gap? (height - gap) : y
				
				return y
			},
			dynamicGetX(x,gap){
				let width = uni.getSystemInfoSync().windowWidth
				x = x< gap?gap:x
				x = width - x <gap? (width - gap) : x
				return x
			},
			transformRpx(params){
				
				return params*uni.getSystemInfoSync().screenWidth/375
			}
		},
		watch:{
			value:{
				immediate:true,
				handler:async function (newVal,oldVal){
					if(newVal) await this.popupsPosition()
					this.show = newVal
				}
			},
			placement:{
				immediate:true,
				handler(newVal,oldVal){
					this.dynPlace = newVal
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mask{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
		transition: background 0.3s ease-in-out;
		visibility: hidden;
		
		&.mask-show{
			
			visibility: visible;
		}
	}
	.popups{
		position: absolute;
		padding: 20rpx;
		border-radius: 5px;
		display:flex;
		.view{
			padding: 10rpx;
		}
		.image{
			display: inline-block;
			vertical-align: middle;
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
	}
	.gradient{
		background: #515ffb;
		color: #fff;
		.top-start:after {
			content: "";
			position: absolute;
			top: -18rpx;
			left: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent #6665f6;
		}
		.top-end:after {
			content: "";
			position: absolute;
			top: -18rpx;
			right: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent #515ffb;
		}
		.bottom-start:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			left: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: #6665f6 transparent transparent ;
			
		}
		.bottom-end:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			right: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: #515ffb transparent transparent ;
		}
		.disabledColor{
			color: #c8c9cc;
		}
	}
	.light{
		color: #515a6e;
		box-shadow: 0upx 0upx 30upx rgba(0,0,0,0.2);
		background: #fff;
		.top-start:after {
			content: "";
			position: absolute;
			top: -18rpx;
			left: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent #fff;
		}
		.top-end:after {
			content: "";
			position: absolute;
			top: -18rpx;
			right: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent #fff;
		}
		.bottom-start:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			left: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: #fff transparent transparent ;
			
		}
		.bottom-end:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			right: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: #fff transparent transparent ;
		}
		.disabledColor{
			color: #c8c9cc;
		}
	}
	.solid-bottom{
		border-bottom: 1px solid #ccc;
	}
	.solid-right{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 20rpx;
	}
	.popups .itemChild:last-child{
		border: none;
	}
	
</style>
