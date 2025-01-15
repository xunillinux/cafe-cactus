<script lang="ts">

	let { data } = $props();

    let newsPosts = $state(data.newsPosts);

</script>

<section id="news" class="news-section relative">
    <div class="bg-white px-4 py-12 text-black">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">News</h2>
            
            <div class="grid grid-cols-1 gap-6">
                {#each newsPosts as post (post.id)}
                    <div class="border rounded-lg p-4 shadow-lg flex flex-col sm:flex-row">
                        <!-- Post Image -->
                        <img
                            src={post.image}
                            alt={post.title}
                            class="w-full sm:w-1/3 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-4"
                        />

                        <!-- Post Content -->
                        <div class="flex flex-col justify-between flex-grow">
                            <!-- Title and Date -->
                            <div>
                                <h3 class="text-xl font-bold">{post.title}</h3>
                                <p class="text-sm text-gray-600">{post.date}</p>
                            </div>

                            <!-- Snippet -->
                            <p class="text-gray-800 mt-2 flex-grow">{post.snippet}</p>

                            <!-- Read More Button -->
                            <div class="mt-4">
                                <a
                                    href={post.link}
                                    class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-center block sm:inline-block"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>


<style>

</style>
