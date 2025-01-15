<script lang="ts">

    let { data } = $props();

    let post = $state(data.newsPosts?.[0]);

</script>

<section id="post" class="post-section relative">
    <div class="bg-white px-4 py-12 text-black">
        <div class="max-w-4xl mx-auto">
            <!-- Title -->
	        <h1 class="text-3xl font-bold mb-4">{post.title}</h1>

            <!-- Date -->
            <p class="text-sm text-gray-600 mb-6">{post.date}</p>

            <!-- Image -->
            <img src={post.image} alt={post.title} class="rounded-lg mb-6" />

            <!-- Content -->
            <p class="text-lg leading-relaxed whitespace-pre-line">{post.content}</p>
        </div>
    </div>
</section>

<style>
	section {
		background-color: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		padding: 2rem;
		line-height: 1.6;
	}
</style>
