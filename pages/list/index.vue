<template>
	<view class="container">
		<view class="container-heard">
			<wd-search v-model="keyword" hide-cancel placeholder-left></wd-search>
		</view>

		<view style="width: 100%; height: 50px"></view>

		<wd-card v-for="index in num" :key="index" title="设备名称">
			<wd-text text="Dtu 标识：868892071913280"></wd-text>
			<template #footer>
				<view style="width: 100%; display: flex; align-items: center; justify-content: space-between">
					<wd-text text="创建时间：2024-03-24"></wd-text>
					<wd-button size="small" plain @click="handleClick">查看详情</wd-button>
				</view>
			</template>
		</wd-card>

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

	const handleClick = () => {
		uni.navigateTo({
			url: 'info?id=1&name=uniapp'
		});
	};
</script>

<style lang="scss" scoped>
	.container {
		&-heard {
			// display: flex;
			// flex-direction: row;

			position: fixed;
			top: 0px;
			z-index: 10;

			width: 100vw;
			height: 50px;

			&-left {
				// display: flex;
				// align-items: center;
				// justify-content: center;
				height: 50px;
			}
		}

		background-image: linear-gradient(to top, rgba(203, 194, 255, 0.3), #fff);
	}
</style>
