<script>
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title} - Homepage</title>
</svelte:head>

<div class="hero relative min-h-[60vh]" style="background-image: url('/images/Pioneer.jpg')">
	<div class="hero-overlay bg-opacity-20"></div>
	<div class="hero-content text-neutral-content h-full text-center">
		<div class="mt-auto">
			<div class="mb-4 grid h-full w-full items-end gap-2">
				<h1 class="mb-5 text-5xl font-bold drop-shadow-[0_4px_3px_rgba(0,0,0,0.8)]">
					Plumas Disc Golf
				</h1>
				<div class="min-h-content max-w-md rounded-xl bg-neutral bg-opacity-90 p-2">
					<p class="my-auto">
						Join the Plumas Disc Golf Family! Make new friends, play more disc golf, and support our
						local courses.
					</p>
				</div>
				<a href="/membership" class="btn btn-primary mx-auto">Join the Club</a>
			</div>
		</div>
	</div>
</div>

<!-- Newest Posts -->
<div class="container mx-auto px-4 py-8">
	<h2 class="mb-6 text-center text-3xl font-bold">Newest Posts</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<!-- Post Cards -->
		{#each data.posts.items as post}
			<div class="card bg-base-100 shadow-lg shadow-gray-400">
				<!-- <figure><img src="" alt="Article thumbnail"/></figure> -->
				<div class="card-body">
					<p class="font-semibold">{formatDate(post.publishedDate)}</p>
					<h2 class="card-title">{post.title}</h2>
					<p>{@html post.content.substring(0, 150)} ...</p>
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
	<div class="mt-6 flex w-full justify-center">
		<a href="/posts" class="btn btn-secondary">View All</a>
	</div>
</div>

<div id="menu">
            <ul class="clear">
                <li>
                    <a href="">text 1</a>
                    <ul class="clear">
                        <li>text 1.1</li>
                        <li>text 1.2</li>
                        <li>text 1.3</li>
                        <li>text 1.4</li>
                    </ul>
                </li>
                <li>text 2</li>
                <li>text 3</li>
                <li>text 4</li>
                <li>text 5</li>
            </ul>
        </div>

<style>

/** ALL UL */
#menu ul{
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0;
    background: #e0e0e0;
    color: #747474;
}
/** ALL LI */
#menu ul li{
    border-right: 1px solid #ffffff;
    padding: 5px 10px;
    position: relative;
}
/** FIRST LEVEL LI */
#menu>ul>li{
    float: left;
}
#menu li ul{
    display: none;
    position: absolute;
    top:20px;
    left: 0;
    width: 200px;
}
#menu li:hover ul{
    display: block;
}
#menu li li{
    border-bottom: 1px solid #ffffff;
}
#menu li li:hover{
    background: #f0f0f0;
}
.clear{
    _zoom:1;
}
.clear:after{
    content: "";
    clear: both;
    display: block;
}
</style>
