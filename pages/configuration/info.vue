<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="container">
		<wd-floating-panel>
			<wd-cell-group border>
				<wd-cell v-for="item in 10" :key="item" :title="item" />
			</wd-cell-group>
		</wd-floating-panel>
	</view>

	<!-- 		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{ duration }}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{ interval }}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view> -->
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	const echarts = require('../../uni_modules/lime-echart/static/echarts.min');

	const chartRefs = ref([
		{
			child: null
		},
		{
			child: null
		},
		{
			child: null
		}
	]);

	const option = {
		legend: {
			top: '4%'
		},
		series: [
			{
				type: 'gauge',
				startAngle: 180,
				endAngle: 0,
				center: ['50%', '75%'],
				radius: '90%',
				min: 0,
				max: 1,
				splitNumber: 8,
				axisLine: {
					lineStyle: {
						width: 6,
						color: [
							[0.25, '#FF6E76'],
							[0.5, '#FDDD60'],
							[0.75, '#58D9F9'],
							[1, '#7CFFB2']
						]
					}
				},
				pointer: {
					icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
					length: '12%',
					width: 20,
					offsetCenter: [0, '-60%'],
					itemStyle: {
						color: 'auto'
					}
				},
				axisTick: {
					length: 12,
					lineStyle: {
						color: 'auto',
						width: 2
					}
				},
				splitLine: {
					length: 20,
					lineStyle: {
						color: 'auto',
						width: 5
					}
				},
				axisLabel: {
					color: '#464646',
					fontSize: 20,
					distance: -60,
					rotate: 'tangential',
					formatter: function (value) {
						if (value === 0.875) {
							return '等级 A';
						} else if (value === 0.625) {
							return '等级 B';
						} else if (value === 0.375) {
							return '等级 C';
						} else if (value === 0.125) {
							return '等级 D';
						}
						return '';
					}
				},
				title: {
					offsetCenter: [0, '-10%'],
					fontSize: 20
				},
				detail: {
					fontSize: 30,
					offsetCenter: [0, '-35%'],
					valueAnimation: true,
					formatter: function (value) {
						return Math.round(value * 100) + '';
					},
					color: 'inherit'
				},
				data: [
					{
						value: 0.7,
						name: 'Grade Rating'
					}
				]
			}
		]
	};

	onMounted(() => {
		// 组件能被调用必须是组件的节点已经被渲染到页面上
		setTimeout(() => {
			chartRefs.value.forEach(async (item) => {
				if (!item.child) return;
				const myChart = await item.child.init(echarts);
				myChart.setOption(option);
			});
		}, 300);
	});

	const background = ref(['color1', 'color2', 'color3']);
	const indicatorDots = ref(true);
	const autoplay = ref(true);
	const interval = ref(2000);
	const duration = ref(500);
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		position: relative;
		background-image: linear-gradient(to top, rgba(203, 194, 255, 0.3), #fff);

		&-swiper {
			position: absolute;
			top: -120rpx;
			width: 100vw;
			height: 45vh;

			&-item {
				width: 100vw;
				height: 45vh;
			}
		}
	}
</style>
