<template>
	<view class="m-input">
		<view class="m-input-title">{{ title }}</view>
		<view class="flex_r fa_c m-input-box">
			<view class="flex1 input">
				<input v-model="inputValue" type="text" :focus="focus" :placeholder="placeholder" :password="password"
					@input="input" @confirm="confirm" v-if="type == 'text'" />
				<input v-model="inputValue" type="number" :focus="focus" :placeholder="placeholder" @input="input"
					@confirm="confirm" v-else />
			</view>
			<view class="m-input-box-icon" @click="empty" v-if="inputValue">
				<image class="img"
					src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmkzLjJjNmEzYTgxQ3ROOWRJIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiAyMGMyNzEuNzI0IDAgNDkyIDIyMC4yNzYgNDkyIDQ5MnMtMjIwLjI3NiA0OTItNDkyIDQ5MlMyMCA3ODMuNzI0IDIwIDUxMiAyNDAuMjc2IDIwIDUxMiAyMHptLjUgNzhDMjgzLjU3OCA5OCA5OCAyODMuNTc4IDk4IDUxMi41UzI4My41NzggOTI3IDUxMi41IDkyNyA5MjcgNzQxLjQyMiA5MjcgNTEyLjUgNzQxLjQyMiA5OCA1MTIuNSA5OHpNMzY2LjkyOSAzMDAuNjM0bDE0Ny4xMDUgMTUyLjE4MiAxNTIuMzM0LTE0Ni45NjJjMTYuNjUtMTYuMDYyIDQzLjE2My0xNS42IDU5LjI0IDEuMDM0IDE2LjA1OSAxNi42MTIgMTUuNjEgNDMuMDk2LTEuMDAzIDU5LjE1NGwtLjAzLjAyOC0xNTIuMzM0IDE0Ni45NjMgMTQ3LjEwNiAxNTIuMTgyYzE2LjA1OCAxNi42MTMgMTUuNjEgNDMuMDk4LTEuMDAzIDU5LjE1NmwtLjAzLjAyOWMtMTYuNjUgMTYuMDYyLTQzLjE2NCAxNS42LTU5LjI0My0xLjAzNEw1MTEuOTY1IDU3MS4xODMgMzU5LjYzMiA3MTguMTQ2Yy0xNi42NSAxNi4wNjItNDMuMTYzIDE1LjYtNTkuMjQtMS4wMzQtMTYuMDU5LTE2LjYxMi0xNS42MS00My4wOTYgMS4wMDMtNTkuMTU0bC4wMy0uMDI4IDE1Mi4zMzMtMTQ2Ljk2NC0xNDcuMTA1LTE1Mi4xODFjLTE2LjA1OC0xNi42MTMtMTUuNjEtNDMuMDk4IDEuMDAzLTU5LjE1NmwuMDMtLjAyOWMxNi42NS0xNi4wNjIgNDMuMTY0LTE1LjYgNTkuMjQzIDEuMDM0eiIgZmlsbD0iIzhjOGE4YSIvPjwvc3ZnPg=="
					mode="aspectFill"></image>
			</view>
			<view class="m-input-box-r">
				<slot />
			</view>
		</view>
		<view class="m-line"></view>
		<view class="text_colour_red m-input-text" v-if="error_msg">{{ error_msg }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: [String, Number],
				default: ''
			},
			type: {
				type: String,
				default: 'text'
			},
			focus: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: '标题'
			},
			placeholder: {
				type: String,
				default: '请输入ID/手机号'
			},
			password: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				error_msg: '',
				inputValue: ''
			};
		},
		watch: {
			value: {
				handler(val) {
					this.inputValue = val;
				},
				immediate: true
			}
		},
		methods: {
			errorText(msg) {
				this.error_msg = msg;
			},
			empty() {
				this.inputValue = '';
			},
			confirm() {
				this.$emit('confirm');
			},
			input(e) {
				if (this.error_msg) {
					this.error_msg = '';
				}
				this.$emit('input', e.detail.value);
			}
		}
	};
</script>

<style scoped lang="scss">
	.m-line {
		width: 100%;
		border-bottom-width: 1px;
		border-bottom-color: #B8B8B8;
		border-bottom-style: solid;
		transform: scaleY(0.5);
	}

	.m-input {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		padding-bottom: 10rpx;

		.m-input-title {
			width: 100%;
			height: 54rpx;
			font-size: 34rpx;
			font-weight: bold;
		}

		.m-input-box {
			width: 100%;
			height: 60rpx;
			margin-bottom: 10rpx;

			.input {
				box-sizing: border-box;
				padding-left: 4rpx;
				height: 100%;
				font-weight: bold; 

				input {
					width: 100%;
					height: 100%;
				}
			}

			.m-input-box-icon {
				width: 40rpx;
				height: 40rpx;
				margin-right: 15rpx;
				.img{
					width: 100%;
					height: 100%;
				}
			}

			.m-input-box-r {}
		}

		.m-input-text {
			position: absolute;
			bottom: -30rpx;
			left: 0;
			font-size: 28rpx;
			margin-top: 6rpx;
			animation: shake 0.8s ease-in-out;
		}
	}

	@keyframes shake {

		/* 水平抖动，核心代码 */
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(+2px, 0, 0);
		}

		30%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(+4px, 0, 0);
		}

		50% {
			transform: translate3d(-4px, 0, 0);
		}
	}
	.text_colour_red {
		color: #ff0000;
	}
	.flex_r {
		display: flex;
		flex-direction: row;
	}
	
	.fa_c {
		align-items: center;
	}
	.flex1 {
		flex: 1;
	}
</style>