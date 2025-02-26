<template>
	<view class="container">
		<!-- 顶部区域 -->
		<view class="container-device">
			<vie class="container-device-header">
				<view class="container-device-header-image">
					<image style="width: 136rpx; height: 136rpx" src="../list/icon/musicDevice.svg" mode="aspectFill"></image>
				</view>

				<view class="container-device-header-title">
					<view class="container-device-header-title-edit">
						<view class="container-device-header-title-edit-name">KY-H1-2F</view>
						<view class="container-device-header-title-edit-icon"></view>
					</view>

					<view class="container-device-header-title-status">
						<view class="container-device-header-title-status-left">设备状态:</view>
						<view class="container-device-header-title-status-right">在线</view>
					</view>
				</view>
			</vie>

			<view class="container-device-info">
				<view class="container-device-info-coll">DTU：868892071913280</view>
				<view class="container-device-info-coll">IP：192.168.1.100</view>
				<view class="container-device-info-coll">端口：8080</view>
			</view>
		</view>

		<!-- 设备参数 -->
		<view class="container-parameter">
			<view class="container-parameter-header">
				<view class="container-parameter-header-actions">
					<view class="container-parameter-header-actions-title">设备参数</view>
					<view class="container-parameter-header-actions-refresh">
						<image style="width: 32rpx; height: 32rpx" src="./icon/refresh.svg" mode="aspectFill"></image>
					</view>
				</view>

				<view class="container-parameter-header-history">
					<view class="container-parameter-header-history-icon">
						<image style="width: 32rpx; height: 32rpx" src="./icon/history.svg" mode="aspectFill"></image>
					</view>
					<view class="container-parameter-header-history-text">历史数据</view>
				</view>
			</view>

			<view class="container-parameter-list">
				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">瞬时流量</text>
					<text class="container-parameter-list-item-value">264.76 Nm³/h</text>
				</view>

				<view class="container-parameter-list-divider"></view>

				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">累计流量</text>
					<text class="container-parameter-list-item-value">752.00 Nm³</text>
				</view>

				<view class="container-parameter-list-divider"></view>

				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">累计流量小数</text>
					<text class="container-parameter-list-item-value">91.51 Nm³</text>
				</view>

				<view class="container-parameter-list-divider"></view>

				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">瞬时流量</text>
					<text class="container-parameter-list-item-value">2.17 立方米/小时</text>
				</view>

				<view class="container-parameter-list-divider"></view>

				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">流速</text>
					<text class="container-parameter-list-item-value">0.16 米/秒</text>
				</view>

				<view class="container-parameter-list-divider"></view>

				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">正积流量</text>
					<text class="container-parameter-list-item-value">4417.00 立方米</text>
				</view>

				<view class="container-parameter-list-divider"></view>

				<view class="container-parameter-list-item">
					<text class="container-parameter-list-item-label">净积流量</text>
					<text class="container-parameter-list-item-value">4417.83 立方米</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const viewHistory = () => {
		uni.showToast({
			title: '查看历史数据',
			icon: 'none'
		});
	};

	const handleRefresh = () => {
		uni.showToast({
			title: '刷新数据',
			icon: 'none'
		});
	};
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;

		&-device {
			display: flex;
			flex-direction: column;
			width: calc(100% - 24rpx * 4);
			margin: 16rpx 24rpx 24rpx 24rpx;
			padding: 24rpx;
			border-radius: 16rpx;
			background: $uni-bg-color;
			box-shadow: $uni-shadow-color;

			&-header {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 160rpx;

				&-image {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 160rpx;
					height: 160rpx;
					background: $uni-bg-color-grey;
					border-radius: 16rpx;
				}

				&-title {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: calc(100% - 160rpx - 16rpx);
					height: 100%;
					margin-left: 16rpx;

					&-edit {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
						height: 100%;

						&-name {
							width: calc(100% - 104rpx);
							height: 100%;
							font-size: 24px;
							font-weight: 496;
							line-height: 1.4;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: $uni-text-color;
						}

						&-icon {
							width: 104rpx;
							height: 100%;
						}
					}

					&-status {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 12rpx 16rpx;
						border-radius: 8rpx;
						background: $uni-bg-color-green;

						&-left {
							font-size: 26rpx;
							color: $uni-text-color;
						}

						&-right {
							font-size: 26rpx;
							color: $uni-text-color-green;
						}
					}
				}
			}

			&-info {
				display: flex;
				flex-direction: column;
				gap: 16rpx;
				margin-top: 16rpx;
				padding-top: 16rpx;
				border-top: 1px solid $uni-border-color1;

				&-coll {
					font-size: 26rpx;
					color: $uni-text-color-grey;
				}
			}
		}

		&-parameter {
			display: flex;
			flex-direction: column;
			width: calc(100% - 24rpx * 4);
			margin: 0rpx 24rpx 16rpx 24rpx;
			padding: 24rpx;
			border-radius: 16rpx;
			background: $uni-bg-color;
			box-shadow: $uni-shadow-color;

			&-header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
				margin-bottom: 24rpx;

				&-actions {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;

					&-title {
						font-size: 30rpx;
						color: $uni-text-color;
						margin-right: 8rpx;
					}

					&-refresh {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 8rpx;
						border-radius: $uni-border-radius-circle;

						&:active {
							background: $uni-bg-color-hover;
						}
					}
				}

				&-history {
					display: flex;
					align-items: center;
					padding: 12rpx 20rpx 12rpx 16rpx;
					background-color: $uni-bg-color-blue;
					border-radius: 8rpx;

					&-icon {
						display: flex;
						align-items: center;
						justify-content: center;
						margin-right: 8rpx;
					}

					&-text {
						font-size: 26rpx;
						color: $uni-text-color-blue;
					}

					&:active {
						background: $uni-bg-color-hover;
					}
				}
			}

			&-list {
				display: flex;
				flex-direction: column;
				width: 100%;
				background: $uni-bg-color-grey;
				border-radius: 16rpx;
				padding: 24rpx 0rpx;

				&-divider {
					width: 100%;
					height: 1px;
					margin: 24rpx 0rpx;
					background: $uni-border-color1;
				}

				&-item {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					padding: 0rpx 24rpx;

					&-label {
						font-size: 26rpx;
						color: $uni-text-color;
					}

					&-value {
						font-size: 26rpx;
					}
				}
			}
		}
	}
</style>
