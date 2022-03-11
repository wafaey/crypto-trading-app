<script lang="ts">

 export let graphPoints;
</script>
<svg width="160" height="100">
	<!-- x axis -->
	<line x1="0" x2="200" y1="100" y2="100"></line>

	<!-- y axis -->
	<line x1="0" x2="0" y1="0" y2="100"></line>

	<!-- data -->
	<polyline style="stroke: red; stroke-width: 2" points={graphPoints}></polyline>
</svg>

<style>
	svg {
		overflow: visible;
		margin: 3em;
	}
	
	line, polyline {
		fill: none;
		stroke: black;
	}
	.x text {
		text-anchor: middle;
	}
	.y text {
		text-anchor: end;
		dominant-baseline: middle;
	}
</style>