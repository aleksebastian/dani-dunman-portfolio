<script>
	import Chart from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	Chart.register(ChartDataLabels);

	import { onMount } from 'svelte';

	const labels = ['Fully Banked', 'Underbanked', 'Unbanked'];

	const DATA = {
		genderData: {
			labels: labels,
			datasets: [
				{
					label: 'MALE',
					maxBarThickness: 40,
					backgroundColor: 'rgb(180, 221, 188)',
					borderColor: 'rgb(52, 235, 79)',
					data: [47, 55, 40]
				},
				{
					label: 'FEMALE',
					maxBarThickness: 40,
					backgroundColor: 'rgb(89, 184, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [53, 45, 60]
				}
			]
		},
		incomeData: {
			labels: labels,
			datasets: [
				{
					label: 'UNDER $50K',
					maxBarThickness: 40,
					backgroundColor: 'rgb(180, 221, 188)',
					borderColor: 'rgb(52, 235, 79)',
					data: [56, 56, 78]
				},
				{
					label: '$50K - $100K',
					maxBarThickness: 40,
					backgroundColor: 'rgb(89, 184, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [30, 37, 16]
				},
				{
					label: '$100K+',
					maxBarThickness: 40,
					backgroundColor: 'rgb(13, 62, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [14, 7, 6]
				}
			]
		},
		generationData: {
			labels: labels,
			datasets: [
				{
					label: 'GEN Z',
					maxBarThickness: 40,
					backgroundColor: 'rgb(180, 221, 188)',
					borderColor: 'rgb(52, 235, 79)',
					data: [9, 9, 22]
				},
				{
					label: 'MILLENIALS',
					maxBarThickness: 40,
					backgroundColor: 'rgb(89, 184, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [22, 52, 38]
				},
				{
					label: 'GEN X',
					maxBarThickness: 40,
					backgroundColor: 'rgb(13, 62, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [26, 25, 25]
				},
				{
					label: 'BABY BOOMERS',
					maxBarThickness: 40,
					backgroundColor: 'rgb(135, 168, 213)',
					borderColor: 'rgb(52, 235, 79)',
					data: [43, 14, 15]
				}
			]
		},
		ethnicityData: {
			labels: labels,
			datasets: [
				{
					label: 'WHITE',
					maxBarThickness: 40,
					backgroundColor: 'rgb(180, 221, 188)',
					borderColor: 'rgb(52, 235, 79)',
					data: [73, 60, 59]
				},
				{
					label: 'HISPANIC',
					maxBarThickness: 40,
					backgroundColor: 'rgb(89, 184, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [13, 22, 19]
				},
				{
					label: 'AFRICAN AMERICAN',
					maxBarThickness: 40,
					backgroundColor: 'rgb(13, 62, 106)',
					borderColor: 'rgb(52, 235, 79)',
					data: [9, 15, 15]
				},
				{
					label: 'OTHER RACE OR EHTNICITY',
					maxBarThickness: 40,
					backgroundColor: 'rgb(135, 168, 213)',
					borderColor: 'rgb(52, 235, 79)',
					data: [5, 3, 7]
				}
			]
		}
	};

	const options = {
		indexAxis: 'y',
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				stacked: true,
				display: false
			},
			y: {
				stacked: true,
				ticks: {
					font: {
						family: "'Lora', serif",
						size: 14
					},
					color: 'black'
				},
				grid: {
					display: false,
					drawBorder: false
				}
			}
		},
		plugins: {
			tooltip: {
				enabled: false
			},
			legend: {
				labels: {
					font: {
						family: "'Lora', serif",
						size: 14
					},
					color: 'black'
				}
			},
			datalabels: {
				formatter: (value) => `${value}%`,
				font: {
					family: "'Lora', serif",
					size: 14,
					weight: 'normal'
				},
				color: '#fff'
			}
		}
	};

	const data = JSON.parse(JSON.stringify(DATA.genderData));
	const config = {
		type: 'bar',
		data,
		options
	};

	let ctx;
	let myChart;
	let selectedElement;
	onMount(() => {
		ctx = document.getElementById('Chart1');
		myChart = new Chart(ctx, config);
		selectedElement = document.getElementById('category-list').firstChild;
		selectedElement.style.opacity = '1';
		selectedElement.style.transform = 'scale(1.2)';
	});

	const handleClick = (e) => {
		let targetElement = e.target;

		selectedElement.style.opacity = '0.5';
		selectedElement.style.transform = 'scale(1)';

		selectedElement = targetElement;

		selectedElement.style.opacity = '1';
		selectedElement.style.transform = 'scale(1.2)';

		const dataSetName = targetElement.innerHTML.split(' ').slice(-1)[0].toLowerCase();
		const newData = JSON.parse(JSON.stringify(DATA[`${dataSetName}Data`]));

		if (newData.datasets.length < myChart.data.datasets.length) {
			let difference = myChart.data.datasets.length - newData.datasets.length;
			for (let i = 0; i < difference; i++) {
				myChart.data.datasets.pop();
			}
		}

		for (let i = 0; i < newData.datasets.length; i++) {
			let currDataset = newData.datasets[i];
			let currDatasetInGraph = myChart.data.datasets[i];

			if (currDatasetInGraph) {
				currDatasetInGraph.label = currDataset.label;
				currDatasetInGraph.data = currDataset.data;
			} else {
				myChart.data.datasets.push(currDataset);
			}
		}

		myChart.update();
	};
</script>

<div class="container">
	<ul id="category-list">
		<li on:click={(e) => handleClick(e)}>GENDER</li>
		<li on:click={(e) => handleClick(e)}>INCOME</li>
		<li on:click={(e) => handleClick(e)}>GENERATION</li>
		<li on:click={(e) => handleClick(e)}>RACE AND ETHNICITY</li>
	</ul>

	<div class="chart-container">
		<canvas id="Chart1" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: 100%;
		padding: 0 1.5rem;
	}

	.container > ul {
		list-style: none;
		margin: 0;
		padding: 0;
		min-width: 200px;
	}

	.container > ul > li {
		cursor: pointer;
		padding: 0.35rem 0;
		opacity: 0.6;
		font-size: 0.9rem;
		transition: all;
		transition-duration: 150ms;
		will-change: auto;
	}

	@media (min-width: 768px) {
		.container {
			flex-direction: row;
		}
		.chart-container {
			flex: 1 1 auto;
		}
	}
</style>
