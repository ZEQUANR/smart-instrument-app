<template>
	<view class="PAGE">
		<!-- 下面这段是返回上一页面，有需要就取消注释 -->
		<!-- <view class="return">
			<view :style="{ height: 60 + 'px' }"></view>
			<view class="flex_r_c return-box">
				<view class="return-icon">
					<image class="wh_100"
						src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTM5My4zOSA1MTIuMDI0TDc0MS4zNCAxNzUuNjc1YzIwLjUwOC0xOS44NTggMjAuNTA4LTUxLjk5NyAwLTcxLjc5Mi0yMC41MDctMTkuODI3LTUzLjc4LTE5LjgyNy03NC4yODYgMEwyODEuOTkgNDc2LjEzNWMtMjAuNDc2IDE5LjgyNy0yMC40NzYgNTEuOTgyIDAgNzEuNzQ2bDM4NS4wNjIgMzcyLjIzN2MxMC4yODUgOS45MTQgMjMuNzI4IDE0Ljg3IDM3LjE3NCAxNC44NyAxMy40NDYgMCAyNi44ODktNC45NTcgMzcuMTEyLTE0LjkwMiAyMC41MDgtMTkuODI2IDIwLjUwOC01MS45MiAwLTcxLjc0NkwzOTMuMzkgNTEyLjAyNCIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMC4yYzZhM2E4MUN0TjlkSSIgY2xhc3M9InNlbGVjdGVkIiBmaWxsPSIjMmMyYzJjIi8+PC9zdmc+"
						mode="aspectFill"></image>
				</view>
			</view>
		</view> -->

		<view class="page-bc"></view>
		<view class="page-bc2"></view>
		<view class="flex_c_c page">
			<view class="flex_c page-box">
				<view class="page-box-bc">
					<image class="wh_100" src="./logo.png" mode="aspectFill"></image>
				</view>

				<view class="flex1 z_index2 page-box-title">
					<view class="page-box-title-icon">
						<image class="wh_100" src="./logo.png" mode="aspectFill"></image>
					</view>
					<view class="text_36 text_weight_bold page-box-title-title">欢迎使用 - pan_</view>
					<view class="text_26 text_weight_bold page-box-title-text">Welcome to pan_</view>
				</view>
				<view class="form">
					<!-- 切换 -->
					<view class="flex_r tab">
						<view
							class="flex1 flex_c_c tab-item"
							:class="{ tab_item: item.type === tab_type }"
							v-for="(item, index) in tabList"
							:key="index"
							@click="onTab(item.type)"
						>
							<view class="text_32 text_weight_bold tab-item-text">
								{{ item.title }}
							</view>
							<view class="tab-item-str"></view>
						</view>
					</view>
					<!-- 表单 -->
					<view class="form-box">
						<swiper class="swiper" disable-touch :current="tab_type">
							<swiper-item>
								<m-input
									ref="account"
									v-model="inputData1.account"
									type="number"
									title="账号"
									placeholder="请输入ID或手机号"
								></m-input>
								<view style="height: 40rpx"></view>
								<m-input
									ref="password"
									v-model="inputData1.password"
									type="text"
									title="登录密码"
									:password="is_password"
									placeholder="请输入登录密码"
									@confirm="submit"
								>
									<view class="password-icon" @click="onShowPassword">
										<image class="wh_100" :src="is_password ? icon_hide : icon_display" mode="aspectFill"></image>
									</view>
								</m-input>
							</swiper-item>
							<swiper-item>
								<m-input
									ref="mobile"
									v-model="inputData2.mobile"
									type="number"
									title="手机号"
									placeholder="请输入手机号码"
									@confirm="getCode"
								></m-input>
								<view style="height: 40rpx"></view>
								<m-input
									ref="code"
									v-model="inputData2.code"
									type="number"
									title="验证码"
									placeholder="请输入验证码"
									@confirm="submit"
								>
									<view
										class="flex_r_c text_30 get-code"
										:class="{ get_code: countdown }"
										hover-class="hover_class"
										@click="getCode"
									>
										{{ countdown ? `${countdown}秒后重新获取` : '获取验证码' }}
									</view>
								</m-input>
							</swiper-item>
						</swiper>
					</view>

					<!-- 提交 -->
					<view class="text_32 text_weight_bold submit">
						<view class="flex_r submit-t">
							<view class="flex_r_c text_colour_white submit-button1" hover-class="hover_class" @click="submit"> 登录 </view>
							<view class="flex_r_c text_colour_white submit-button2" hover-class="hover_class" @click="onWxLogin">
								<view class="submit-button2-icon">
									<image class="wh_100" :src="icon_wx" mode="aspectFill"></image>
								</view>
								微信
							</view>
						</view>
						<view class="flex_r_c submit-button3" hover-class="hover_class">注册</view>
					</view>

					<!-- 帮助 -->
					<view class="flex_r_c text_28 help">
						<view class="">忘记密码</view>
						<view class="help-str"></view>
						<view class="">帮助</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { icon_hide, icon_display, icon_wx } from './icon.js';
	import mInput from './components/m-input.vue';
	export default {
		components: {
			mInput
		},
		data() {
			return {
				icon_hide,
				icon_display,
				icon_wx,
				tab_type: 0,
				is_password: true,
				countdown: 0, //验证码等待时间
				tabList: [
					{
						title: '账号密码登录',
						type: 0
					},
					{
						title: '手机验证码登录',
						type: 1
					}
				],
				inputData1: {
					account: '',
					password: ''
				},
				inputData2: {
					mobile: '',
					code: ''
				}
			};
		},
		methods: {
			onTab(type) {
				this.tab_type = type;
				try {
					vibrateShort();
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 切换密码是否可见
			onShowPassword() {
				this.is_password = !this.is_password;
			},
			// 是否是少
			isPhone(phone) {
				let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (phoneReg.test(phone)) {
					return true;
				} else {
					return false;
				}
			},
			// 提交
			submit() {
				// 账号登录
				if (this.tab_type == 0) {
					const { account, password } = this.inputData1;
					if (!account) return this.$refs.account.errorText('请正确填写账号');
					if (!password) return this.$refs.password.errorText('请正确填写密码');
				} else {
					//验证码
					const { mobile, code } = this.inputData2;
					if (!this.isPhone(mobile)) return this.$refs.mobile.errorText('请正确填写手机号');
					if (!code) return this.$refs.code.errorText('请正确填写验证码');
					if (code.length != 6) return this.$refs.code.errorText('验证码应为六位');
				}
			},
			// 获取验证码
			async getCode() {
				const { mobile } = this.inputData2;
				if (!this.isPhone(mobile)) return this.$refs.mobile.errorText('请正确填写手机号');

				const WAITING = 60; //等待时间s
				this.countdown = WAITING;
				let Timeout = setInterval(() => {
					this.countdown--;
					if (this.countdown === 0) {
						clearInterval(Timeout);
					}
				}, 1000);
			},
			async onWxLogin() {
				console.log('微信');
			}
		}
	};
</script>

<style scoped lang="scss">
	.PAGE {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		.return {
			position: absolute;
			z-index: 99;
			top: 0;
			left: 0;
			right: 0;

			.return-box {
				box-sizing: border-box;
				width: 70rpx;
				height: 70rpx;
				margin-left: 20rpx;
				border-radius: 50%;

				.return-icon {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}

	.page-bc {
		opacity: 0.5;
		position: absolute;
		z-index: 1;
		top: -140rpx;
		right: -30rpx;
		width: 220rpx;
		height: 220rpx;
		border-radius: 50%;
		background-color: rgba(203, 194, 255, 0.4);
		box-shadow: rgba(203, 194, 255, 0.4) 0px 22px 70px 104px;
	}

	.page-bc2 {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(to top, rgba(203, 194, 255, 0.3), #fff);
	}

	.page {
		position: relative;
		z-index: 2;
		width: 100vw;
		height: 100vh;
		background-color: rgba(96, 142, 202, 0.07);

		.page-box {
			width: calc(100% - 80rpx);
			height: 1300rpx;
			margin-top: 20rpx;

			.page-box-bc {
				position: absolute;
				top: 100rpx;
				right: -80rpx;
				width: 440rpx;
				height: 440rpx;
				// opacity: 0.4;
			}

			.page-box-title {
				width: 100%;
				margin-left: 4rpx;

				// color: #9a6124;
				.page-box-title-icon {
					width: 80rpx;
					height: 60rpx;
					margin-bottom: 14rpx;
				}
			}

			.form {
				box-sizing: border-box;
				padding: 30rpx 40rpx;
				width: 100%;
				height: 1100rpx;
				border-radius: 40rpx;
				border: 2px solid rgba(255, 255, 255, 1);
				background-color: rgba(255, 255, 255, 0.6);
				backdrop-filter: blur(10px);

				.tab {
					width: 100%;
					min-height: 70rpx;
					margin-bottom: 60rpx;

					.tab-item {
						color: #666666;
						height: 100%;
						transition: all 0.2s;

						.tab-item-text {
							text-align: center;
						}

						.tab-item-str {
							opacity: 0;
							transition: all 0.2s;
							width: 70rpx;
							height: 12rpx;
							margin-top: 4rpx;
							border-radius: 6rpx;
							background-color: #6a59c7;
						}
					}

					.tab_item {
						color: #000;

						.tab-item-str {
							opacity: 1;
						}
					}
				}

				.form-box {
					width: 100%;
					height: 400rpx;
					margin-bottom: 110rpx;

					.swiper {
						width: 100%;
						height: 100%;
					}
				}

				.submit {
					width: 100%;
					margin-bottom: 100rpx;

					.submit-t {
						width: 100%;
						height: 100%;
						margin-bottom: 20rpx;

						.submit-button1 {
							position: relative;
							flex: 2;
							height: 80rpx;
							border-radius: 40rpx;
							margin-right: 20rpx;
							overflow: hidden;
							background-color: #6a59c7;
						}

						.submit-button2 {
							position: relative;
							flex: 1;
							height: 80rpx;
							border-radius: 40rpx;
							box-sizing: border-box;
							overflow: hidden;
							background-color: #07c160;

							.submit-button2-icon {
								width: 50rpx;
								height: 50rpx;
								margin-right: 14rpx;
							}
						}
					}

					.submit-button3 {
						position: relative;
						width: 100%;
						height: 80rpx;
						border-radius: 40rpx;
						margin-right: 20rpx;
						box-sizing: border-box;
						border: 2px solid #6a59c7;
						overflow: hidden;
						color: #6a59c7;
					}
				}

				.help {
					width: 100%;
					height: 50rpx;
					color: #3b3b3b;

					.help-str {
						width: 1px;
						height: 22rpx;
						margin: 0 16rpx;
						background-color: #535353;
					}
				}
			}
		}
	}

	.hover_class::after {
		position: absolute;
		z-index: 2;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.password-icon {
		width: 60rpx;
		height: 60rpx;
	}

	.get-code {
		position: relative;
		box-sizing: border-box;
		padding: 0 20rpx;
		height: 54rpx;
		border-radius: 40rpx;
		border: 1px solid #6a59c7;
		color: #6a59c7;
		overflow: hidden;
	}

	.get_code {
		opacity: 0.6;
	}

	// ---------------以下代码是作者的公共css（部分）, 可通过npm i pan_css下载完整版 在app.vue中引入；这里就简化使用直接复制进来----------------
	.wh_100 {
		width: 100%;
		height: 100%;
	}

	.z_index2 {
		position: relative;
		z-index: 2;
	}

	.text_colour_red {
		color: #ff0000;
	}

	.text_colour_white {
		color: #fff;
	}

	.text_colour_0 {
		color: #000;
	}

	.text_colour_1 {
		color: #111;
	}

	.text_colour_2 {
		color: #222;
	}

	.text_colour_3 {
		color: #333;
	}

	.text_colour_4 {
		color: #444;
	}

	.text_colour_5 {
		color: #555;
	}

	.text_colour_6 {
		color: #666;
	}

	.text_colour_7 {
		color: #777;
	}

	.text_colour_8 {
		color: #888;
	}

	.text_colour_9 {
		color: #999;
	}

	.flex_r {
		display: flex;
		flex-direction: row;
	}

	.flex_c {
		display: flex;
		flex-direction: column;
	}

	.fj_b {
		justify-content: space-between;
	}

	.fj_a {
		justify-content: space-around;
	}

	.fj_c {
		justify-content: center;
	}

	.fa_c {
		align-items: center;
	}

	.flex_c_c {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.flex_r_c {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.flex1 {
		flex: 1;
	}

	.text_16 {
		font-size: 16rpx;
	}

	.text_17 {
		font-size: 17rpx;
	}

	.text_18 {
		font-size: 18rpx;
	}

	.text_19 {
		font-size: 19rpx;
	}

	.text_20 {
		font-size: 20rpx;
	}

	.text_21 {
		font-size: 21rpx;
	}

	.text_22 {
		font-size: 22rpx;
	}

	.text_23 {
		font-size: 23rpx;
	}

	.text_24 {
		font-size: 24rpx;
	}

	.text_25 {
		font-size: 25rpx;
	}

	.text_26 {
		font-size: 26rpx;
	}

	.text_27 {
		font-size: 27rpx;
	}

	.text_28 {
		font-size: 28rpx;
	}

	.text_29 {
		font-size: 29rpx;
	}

	.text_30 {
		font-size: 30rpx;
	}

	.text_31 {
		font-size: 31rpx;
	}

	.text_32 {
		font-size: 32rpx;
	}

	.text_33 {
		font-size: 33rpx;
	}

	.text_34 {
		font-size: 34rpx;
	}

	.text_35 {
		font-size: 35rpx;
	}

	.text_36 {
		font-size: 36rpx;
	}

	.text_37 {
		font-size: 37rpx;
	}

	.text_38 {
		font-size: 38rpx;
	}

	.text_39 {
		font-size: 39rpx;
	}

	.text_40 {
		font-size: 40rpx;
	}

	.text_41 {
		font-size: 41rpx;
	}

	.text_42 {
		font-size: 42rpx;
	}

	.text_43 {
		font-size: 43rpx;
	}

	.text_44 {
		font-size: 44rpx;
	}

	.text_45 {
		font-size: 45rpx;
	}

	.text_46 {
		font-size: 46rpx;
	}

	.text_weight_bold {
		font-weight: bold;
	}
</style>
