<script lang="ts">
	import ServiceGallery from './ServiceGallery.svelte';
    
    const services = [
        { name: 'Nail Care', description: 'Manicures, pedicures, gel nails, and nail art.', href: '/nails.jpg' },
        { name: 'Hair Styling', description: 'Cuts, coloring, treatments, and styling for all occasions.', href: '/hairstyling.jpg' },
        { name: 'Braiding Services', description: 'A wide variety of braiding styles by expert stylists.', href: '/braids.jpg' }
    ];
</script>

<section id="services" class="py-16 px-4">
    <div class="container mx-auto max-w-5xl">
        <h2 class="text-3xl font-bold text-center text-amber-800 mb-12">Our Services</h2>
        <!-- <div class="grid md:flex gap-4 justify-center ">
            <div class="flex flex-col p-6 rounded-lg text-center bg-[url('{services[0].href}')] bg-cover bg-blue-300 opacity-75 bg-center">
                <h3 class="text-2xl font-bold text-amber-500 mb-2">{services[0].name}</h3>
                <p class="text-amber-400 font-semibold">{services[0].description}</p>
            </div>
            <div class="flex flex-col p-6 rounded-lg text-center bg-[url('{services[1].href}')] bg-cover bg-blue-300 opacity-75 bg-center">
                <h3 class="text-2xl font-bold text-white mb-2">{services[1].name}</h3>
                <p class="text-amber-400 font-semibold">{services[1].description}</p>
            </div>
            <div class="flex flex-col p-6 rounded-lg text-center bg-[url('{services[2].href}')] bg-cover bg-blue-300 opacity-75 bg-center">
                <h3 class="text-2xl font-bold text-amber-500 mb-2">{services[2].name}</h3>
                <p class="text-amber-400 font-semibold">{services[2].description}</p>
            </div>
        </div> -->
        <ServiceGallery />
        <p class="text-center mt-12 text-gray-700">
            Feel free to ask about our <strong class="text-amber-600">vouchers and gift cards</strong>, and check out our <strong class="text-amber-600">weekly hair blog</strong>!
        </p>
    </div>
</section>