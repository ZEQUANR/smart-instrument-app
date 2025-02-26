<template>
	<view class="container">
		<wd-card>
			<template #title>
				<view class="container-card-title">
					<view class="container-card-title-text">智能工业控制器 A2000</view>
					<view class="container-card-title-icon">
						<view style="width: 8px; height: 8px; background-color: #22c55e; border-radius: 50%"></view>
						<view style="margin-left: 4px; color: #22c55e">在线</view>
					</view>
				</view>
			</template>

			<view class="container-card-content">
				<view style="display: flex; flex-direction: row; align-items: center">
					<wd-icon name="fork" size="16px"></wd-icon>
					<view style="margin-left: 4px">IP: 192.168.1.100</view>
				</view>
			</view>

			<!-- 	<template #footer>
				<view>
					<wd-button size="small" style="margin-right: 8px">评价</wd-button>
					<wd-button size="small" plain>立即使用</wd-button>
				</view>
			</template> -->
		</wd-card>

		<view class="container-device">
			<view class="container-device-card">
				<view class="container-device-card-left">
					<image style="width: 72rpx; height: 72rpx" src="./water.svg" mode="aspectFill"></image>
				</view>
				<view class="container-device-card-right">
					<view class="container-device-card-right-title"> 运行温度 </view>
					<wd-count-to :endVal="2024" suffix="Nm³/h" :fontSize="20" color="#1e9fff"> </wd-count-to>
				</view>
			</view>

			<view class="container-device-card">
				<view class="container-device-card-left">
					<image style="width: 72rpx; height: 72rpx" src="./chart.svg" mode="aspectFill"></image>
				</view>
				<view class="container-device-card-right">
					<view class="container-device-card-right-title"> 累计流量小数 </view>
					<wd-count-to :endVal="2024" suffix="w" :fontSize="20" color="#1e9fff"> </wd-count-to>
				</view>
			</view>

			<view class="container-device-card">
				<view class="container-device-card-left">
					<image style="width: 72rpx; height: 72rpx" src="./electricity.svg" mode="aspectFill"></image>
				</view>
				<view class="container-device-card-right">
					<view class="container-device-card-right-title"> 瞬时流量 </view>
					<wd-count-to :endVal="2024" suffix="Hz" :fontSize="20" color="#1e9fff"> </wd-count-to>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: calc(100vh - 16rpx);
		padding-top: 16rpx;
		background-image: linear-gradient(to top, rgba(203, 194, 255, 0.3), #fafafa);

		&-card {
			&-title {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				&-text {
					font-weight: bold;
				}

				&-icon {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			}

			&-content {
				margin-bottom: 32rpx;
			}
		}

		&-device {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			width: calc(100% - 24rpx - 24rpx);
			margin: 8rpx 24rpx 0rpx 24rpx;

			&-card {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: calc(50% - 16rpx - 32rpx - 32rpx);
				padding: 40rpx 32rpx;
				border-radius: 16rpx;
				border: 2px solid rgba(255, 255, 255, 1);
				background-color: rgba(255, 255, 255, 0.6);
				backdrop-filter: blur(10px);
				margin-bottom: 24rpx;

				&-left {
					display: flex;
					align-items: center;
					justify-content: center;
				}

				&-right {
					display: flex;
					flex-direction: column;
					align-items: flex-end;

					&-title {
						margin-bottom: 24rpx;
					}
				}
			}
		}
	}
</style>
