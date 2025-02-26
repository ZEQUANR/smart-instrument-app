<template>
	<view class="login-container">
		<image class="login-container-bg-image" src="./logo.png" mode="aspectFill"></image>

		<view class="login-container-title">
			<image class="login-container-title-icon" src="./logo.png" mode="aspectFill"></image>
			<view class="login-container-title-zh">欢迎使用 - 智控云科</view>
			<view class="login-container-title-en">Welcome to 智控云科</view>
		</view>

		<view class="login-container-form">
			<wd-tabs :custom-class="'login-container-form-tab'" lineWidth="56" v-model="tab" swipeable>
				<block>
					<wd-tab title="账号密码登录">
						<view class="login-container-form-tab-content">
							<view class="login-container-form-tab-content-label">账号</view>
							<wd-input
								custom-class="login-container-form-tab-content-input"
								size="large"
								type="text"
								placeholder="请输入ID或手机号"
								v-model="value"
								clearable
								@change="handleChange"
							/>
							<view class="login-container-form-tab-content-label">登录密码</view>
							<wd-input
								custom-class="login-container-form-tab-content-input"
								size="large"
								placeholder="请输入登录密码"
								v-model="value"
								clearable
								show-password
								@change="handleChange"
							/>
						</view>
					</wd-tab>

					<wd-tab title="手机验证码登录">
						<view class="login-container-form-tab-content">
							<view class="login-container-form-tab-content-label">手机号</view>
							<wd-input
								custom-class="login-container-form-tab-content-input"
								size="large"
								type="text"
								placeholder="请输入手机号码"
								v-model="value"
								clearable
								@change="handleChange"
							/>
							<view class="login-container-form-tab-content-label">验证码</view>
							<wd-input
								custom-class="login-container-form-tab-content-input"
								size="large"
								placeholder="请输入验证码"
								v-model="value"
								clearable
								@change="handleChange"
							>
								<template #suffix>
									<wd-button>获取验证码</wd-button>
								</template>
							</wd-input>
						</view>
					</wd-tab>
				</block>
			</wd-tabs>

			<view class="login-container-form-confirm">
				<view class="login-container-form-confirm-login">
					<wd-button size="large" block>登录</wd-button>
				</view>
				<view class="login-container-form-confirm-wechat">
					<wd-button type="success" size="large" block>
						<view style="display: flex; align-items: center; justify-content: center">
							<image style="width: 50rpx; height: 50rpx; margin-right: 14rpx" :src="icon_wx" mode="aspectFill"></image>
							微信
						</view>
					</wd-button>
				</view>
			</view>

			<view class="login-container-form-register">
				<wd-button size="large" plain block>注册</wd-button>
			</view>

			<view class="login-container-form-help">
				<view class="">忘记密码</view>
				<view class="login-container-form-help-str"></view>
				<view class="">帮助</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { icon_hide, icon_display, icon_wx } from './icon.js';
</script>

<style lang="scss">
	.login-container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
		background-image: linear-gradient(to top, rgba(203, 194, 255, 0.3), #fff);

		&-title {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 168rpx;
			padding-top: 152rpx;
			padding-left: 16rpx;
			margin-bottom: 24rpx;

			&-icon {
				width: 80rpx;
				height: 60rpx;
				margin-bottom: 14rpx;
			}

			&-zh {
				font-size: 36rpx;
				font-weight: bold;
			}

			&-en {
				font-size: 26rpx;
				font-weight: bold;
			}
		}

		&-bg-image {
			position: absolute;
			top: 152rpx;
			right: -184rpx;
			width: 586rpx;
			height: 440rpx;
		}

		&-form {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			position: relative;
			padding: 30rpx 40rpx;
			width: calc(100% - 40rpx - 40rpx);
			height: calc(100% - 152rpx - 168rpx - 24rpx - 64rpx);
			margin-left: 40rpx;
			margin-right: 40rpx;
			border-radius: 40rpx;
			border: 2px solid rgba(255, 255, 255, 1);
			background-color: rgba(255, 255, 255, 0.6);
			backdrop-filter: blur(10px);

			&-tab {
				background: transparent !important;

				:deep() {
					.wd-tabs__nav-item-text {
						font-size: 32rpx;
						font-weight: bold;
					}
				}

				& > .wd-tabs__nav {
					background-color: transparent !important;
				}

				&-content {
					display: flex;
					flex-direction: column;
					padding-top: 60rpx;

					&-label {
						font-size: 32rpx;
						font-weight: bold;
						margin-bottom: 8rpx;
					}

					&-input {
						background: transparent !important;
						padding: 0rpx !important;
						margin-bottom: 48rpx;

						:deep() {
							.wd-input__icon {
								background: transparent !important;
							}
							.wd-input__clear {
								background: transparent !important;
							}

							.wd-input__suffix {
								display: flex;
								align-items: center;
							}
						}
					}
				}
			}

			&-confirm {
				display: flex;
				flex-direction: row;
				margin-top: 48rpx;
				margin-bottom: 20rpx;

				&-login {
					flex: 2;
					margin-right: 20rpx;
				}

				&-wechat {
					flex: 1;
				}
			}

			&-register {
				width: 100%;
				height: 80rpx;
			}

			&-help {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				position: absolute;
				bottom: 40rpx;
				font-size: 28rpx;
				width: calc(100% - 40rpx - 40rpx);
				height: 50rpx;
				color: #3b3b3b;

				&-str {
					width: 1px;
					height: 22rpx;
					margin: 0 16rpx;
					background-color: #535353;
				}
			}
		}
	}
</style>
