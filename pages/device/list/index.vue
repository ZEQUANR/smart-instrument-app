<template>
	<view class="container">
		<view class="container-heard">
			<wd-search hide-cancel placeholder-left></wd-search>
		</view>

		<view style="width: 100%; height: 50px; margin-bottom: 8px"></view>

		<view v-for="index in 10" :key="index" class="container-card">
			<view class="container-card-heard">
				<view class="container-card-heard-icon">
					<image style="width: 64rpx; height: 64rpx" src="./icon/musicDevice.svg" mode="aspectFill"></image>
				</view>

				<view class="container-card-heard-info">
					<view class="container-card-heard-info-top">
						<view class="container-card-heard-info-top-title"> KY-H1-2F </view>
						<view class="container-card-heard-info-top-online"> 在线 </view>
					</view>

					<view class="container-card-heard-info-bottom">
						<view class="container-card-heard-info-bottom-icon">
							<image style="width: 32rpx; height: 24rpx" src="./icon/dtu.svg" mode="aspectFill"></image>
						</view>
						<view class="container-card-heard-info-bottom-text"> : </view>
						<view class="container-card-heard-info-bottom-number"> 868892071913280 </view>
					</view>
				</view>
			</view>

			<view class="container-card-content">
				<swiper class="container-card-content-swiper" circular :indicator-dots="false" :autoplay="false" :interval="5000" :duration="500">
					<swiper-item>
						<view class="container-card-content-swiper-item">
							<view class="container-card-content-swiper-item-top">
								<view class="container-card-content-swiper-item-top-title"> 累计流量小数 </view>
							</view>
							<view class="container-card-content-swiper-item-bottom">
								<image style="width: 96rpx; height: 56rpx" src="./icon/gauge.svg" mode="aspectFill"></image>
								<wd-count-to :endVal="2024" suffix="Nm³/h" :fontSize="24" color="#1e9fff"> </wd-count-to>
							</view>
						</view>
					</swiper-item>
				</swiper>

				<view class="container-card-content-buttom">
					<view class="container-card-content-buttom-info" @click="goToInfo">
						<view class="container-card-content-buttom-info-icon">
							<image style="width: 24rpx; height: 24rpx" src="./icon/information.svg" mode="aspectFill"></image>
						</view>
						<view class="container-card-content-buttom-info-text"> 设备详情 </view>
					</view>

					<view class="container-card-content-buttom-history" @click="goToHistory">
						<view class="container-card-content-buttom-history-icon">
							<image style="width: 24rpx; height: 24rpx" src="./icon/clock.svg" mode="aspectFill"></image>
						</view>
						<view class="container-card-content-buttom-history-text"> 历史数据 </view>
					</view>
				</view>
			</view>
		</view>

		<wd-loadmore :state="state" @reload="loadmore" />
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { onLoad, onReachBottom } from '@dcloudio/uni-app';

	const state = ref<string>('loading');
	const num = ref<number>(0);
	const max = ref<number>(60);

	onReachBottom(() => {
		if (num.value === 45) {
			state.value = 'error';
		} else if (num.value < max.value) {
			loadmore();
		} else if (num.value === max.value) {
			state.value = 'finished';
		}
	});

	onLoad(() => {
		loadmore();
	});

	function loadmore() {
		setTimeout(() => {
			num.value = num.value + 10;
			state.value = 'loading';
		}, 200);
	}

	const goToInfo = () => {
		uni.navigateTo({
			url: '/pages/device/info/index?id=1&name=uniapp'
		});
	};

	const goToHistory = () => {
		uni.navigateTo({
			url: '/pages/device/history/index?id=1&name=uniapp'
		});
	};
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100vw;

		&-heard {
			position: fixed;
			top: 0px;
			z-index: 10;
			width: 100%;
			height: 50px;
		}

		&-card {
			display: flex;
			flex-direction: column;
			width: calc(100% - 24rpx * 4);
			margin: 0rpx 24rpx 16rpx 24rpx;
			padding: 24rpx;

			background: $uni-bg-color;
			border-radius: 16rpx;
			box-shadow: $uni-shadow-color;

			&-heard {
				display: flex;
				flex-direction: row;
				width: 100%;

				&-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 88rpx;
					height: 88rpx;
					margin-right: 24rpx;
					background: $uni-bg-color-grey;
					border-radius: 8rpx;
				}

				&-info {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: calc(100% - 88rpx - 24rpx);

					&-top {
						display: flex;
						flex-direction: row;
						justify-content: space-between;

						&-title {
							font-size: 32rpx;
							font-weight: bold;
						}

						&-online {
							font-size: 24rpx;
							color: $uni-text-color-green;
							padding: 8rpx 12rpx;
							border-radius: 8rpx;
							background: $uni-bg-color-green;
						}
					}

					&-bottom {
						display: flex;
						flex-direction: row;

						&-icon {
							display: flex;
							align-items: center;
						}

						&-text {
							display: flex;
							align-items: flex-end;
							margin: 0rpx 8rpx;
							font-size: 24rpx;
							color: $uni-text-color-grey;
						}

						&-number {
							display: flex;
							align-items: flex-end;
							margin-bottom: -2rpx;
							font-size: 24rpx;
							color: $uni-text-color-grey;
						}
					}
				}
			}

			&-content {
				display: flex;
				flex-direction: row;
				width: 100%;
				margin-top: 16rpx;

				&-swiper {
					width: calc(100% - 240rpx - 24rpx);
					height: 144rpx;
					background: $uni-bg-color-blue;
					border-radius: 8rpx;
					margin-right: 24rpx;

					&-item {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						width: calc(100% - 24rpx - 24rpx);
						height: calc(100% - 16rpx - 16rpx);
						padding: 16rpx 24rpx 16rpx 24rpx;

						&-top {
							display: flex;
							flex-direction: row;

							&-title {
								font-size: 26rpx;
								color: $uni-text-color-grey;
							}
						}

						&-bottom {
							display: flex;
							flex-direction: row;
							align-items: flex-end;
							justify-content: space-between;
						}
					}
				}

				&-buttom {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 240rpx;
					height: 144rpx;

					&-info {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						height: 60rpx;
						background: $uni-bg-color-blue;
						border-radius: 8rpx;

						&-icon {
							display: flex;
							align-items: center;
							justify-content: center;
							margin-right: 8rpx;
						}

						&-text {
							font-size: 26rpx;
							color: $uni-text-color-grey;
						}

						&:active {
							background: $uni-bg-color-hover;
						}
					}

					&-history {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						height: 60rpx;
						background: $uni-bg-color-blue;
						border-radius: 8rpx;

						&-icon {
							display: flex;
							align-items: center;
							justify-content: center;
							margin-right: 8rpx;
						}

						&-text {
							font-size: 26rpx;
							color: $uni-text-color-grey;
						}

						&:active {
							background: $uni-bg-color-hover;
						}
					}
				}
			}
		}
	}
</style>
