<template>
	<view class="content">
		<view class="collapse-box" v-for="(item,index) in getList">
			<view class="collapse-title" @click.stop="updateCheck(index)" :style="[bacground]">
				<view class="collapse-title-box" :style="[collapseTitleBox]">
					<view class="user-box">
						<view class="image-box">
							<image class="image-info" :src="item.image" mode=""></image>
						</view>
						<view class="user-name">
							{{item.user_name}}
						</view>
					</view>

					<view class="right-image">
						<image class="right-image-icon"
							:class="  item.is_show && item.is_show == 1 ? 'right-image-icon-c' : ''"
							src="../../static/open.png" mode=""></image>
					</view>
				</view>
			</view>
			<view :class="item.is_show && item.is_show == 1 ? '' : 'not-show-child'" class="collapse-child">
				<view class="collapse-item">

					<view class="info-item">
						<view class="">
							总业绩:
						</view>
						<view class="">
							{{item.count_money || 0}}
						</view>
					</view>
					<view class="border-right">

					</view>

					<view class="info-item">
						<view class="">
							月业绩:
						</view>
						<view class="">
							{{item.month_money || 0}}
						</view>
					</view>
					<view class="border-right">

					</view>

					<view class="info-item">
						<view class="">
							日业绩:
						</view>
						<view class="">
							{{item.day_money || 0}}
						</view>
					</view>

				</view>


				<collapse :level="level+1" :list="item.child" :bacground="bacground_child"></collapse>
			</view>
		</view>
	</view>
</template>

<script>
	import collapse from "@/components/yygg-tree/collapse"
	export default {
		name: "collapse",
		components: {
			collapse
		},
		props: {
			list: {
				type: Array,
				default: () => {
					return new Array()
				}
			},
			bacground: {
				type: Object,
				default: () => {
					return {
						'background': '#fff'
					}
				}
			},
			bacground_child: {
				type: Object,
				default: () => {
					return {
						'background': '#fff'
					}
				}

			},
			level: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				play_like: [],
				baseUrl: this.$baseUrl
			};
		},
		computed: {
			getList() {
				return this.list
			},
			collapseTitleBox() {
				return {
					'padding-left': `calc(${this.level} * 20rpx)`
				}
			}
		},
		methods: {
			updateCheck(index) {
				if (this.list[index].is_show && this.list[index].is_show == 1) {
					this.list[index].is_show = 0
				} else {
					this.list[index].is_show = 1
					// 获取子集数据
					//


				}
				this.$forceUpdate()
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
	}

	.collapse-box {
		width: 100%;
		// height: 100rpx;
		padding: 15rpx auto;
		box-sizing: content-box;

		.collapse-title {
			position: relative;
			z-index: 3;
			padding: 15rpx auto !important;
			box-sizing: content-box;
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;

		}

		.not-show-child {
			transition-property: all;
			transition-duration: .1s;
			transition-timing-function: linear;
			height: 0;
		}

		.collapse-child {
			transition-property: all;
			transition-duration: .1s;
			transition-timing-function: linear;
			margin: 0 auto;
			width: 100%;
			z-index: 1;
			position: relative;
			overflow: hidden;



			.collapse-item {

				width: 100%;
				height: 150rpx;
				color: #555555;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: space-around;

				.info-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				.border-right {
					height: 60rpx;
					width: 1rpx;
					background-color: #555555;
				}

				.info-item:last-child {}
			}
		}
	}

	.collapse-title-box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}


	.user-box {
		display: flex;
		align-items: center;
		justify-content: flex-start;


		.image-box {
			width: 70rpx;
			height: 70rpx;
			border-radius: 50rpx;

			.image-info {
				width: 100%;
				height: 100%;
				border-radius: 50rpx;
			}
		}

		.user-name {
			font-size: 30rpx;
			margin-left: 15rpx;
		}
	}

	.right-image {
		width: 30rpx;
		height: 30rpx;
		position: relative;
		z-index: 3;

		.right-image-icon {
			width: 100%;
			height: 100%;
			transition-property: all;
			transition-duration: .1s;
			transition-timing-function: linear;
			transform: rotate(0);
		}

		.right-image-icon-c {
			transition-property: all;
			transition-duration: .1s;
			transition-timing-function: linear;
			transform: rotate(-90deg);
		}
	}
</style>
