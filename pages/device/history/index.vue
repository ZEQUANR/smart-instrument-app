<template>
	<view class="history-container">
		<view class="history-container-header">
			<view class="history-container-header-title">KY-H1-2F</view>
			<view class="history-container-header-content">DTU: 868892071913280</view>
		</view>

		<wd-tabs custom-class="history-container-tabs" v-model="tab" swipeable>
			<block v-for="item in 4" :key="item">
				<wd-tab :title="`标签${item}`">
					<view class="content">内容{{ item }}</view>
				</wd-tab>
			</block>
		</wd-tabs>
	</view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
	.history-container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		background: $uni-bg-color;

		&-header {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 16rpx 16rpx 0rpx 32rpx;

			&-title {
				width: 100%;
				font-size: 32rpx;
				font-weight: bold;
				line-height: 1.4;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: $uni-text-color;
				margin-bottom: 16rpx;
			}

			&-content {
				font-size: 24rpx;
				color: $uni-text-color-grey;
			}
		}

		&-tabs {
			:deep() {
				.wd-tabs__nav-item {
					flex: none !important;
				}
			}
		}
	}
</style>
