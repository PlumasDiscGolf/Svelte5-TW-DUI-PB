<script>
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title} - News</title>
</svelte:head>

<!-- Hero Section -->
<div class="hero bg-base-200">
	<div class="hero-content py-12 text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Plumas Disc Golf</h1>
		</div>
	</div>
</div>

<!-- Featured Posts -->
<div class="container mx-auto px-4 py-8">
	<h2 class="mb-6 text-center text-3xl font-bold">News Posts</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<!-- Post Cards -->
		{#each data.publishedPosts as post}
			<div class="card bg-base-100 shadow-lg shadow-gray-400">
				<!-- <figure><img src="" alt="Article thumbnail"/></figure> -->
				<div class="card-body">
					<p class="font-semibold">{formatDate(post.publishedDate)}</p>
					<h2 class="card-title">{post.title}</h2>
					<p>{@html post.content.substring(0,150)} ...</p>
					<div class="card-actions mt-4 items-center justify-between">
						<button class="btn btn-primary btn-sm">Read More</button>
					</div>
					<div class="flex gap-2">
						{#each post.expand.categories as category}
							<div class="badge badge-secondary">{category.name}</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
