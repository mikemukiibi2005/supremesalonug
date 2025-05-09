<script lang="ts">
    import { InstagramLogo, XLogo, YoutubeLogo, TiktokLogo } from "phosphor-svelte";

    const currentYear = 2025;
    const socialLinks = [
        { href: 'ttps://www.instagram.com/supremesalonug', label: '@supremesalonug', icon: InstagramLogo },
        { href: 'https://x.com/SupremeSalonUG', label: '@SupremeSalonUG', icon: XLogo },
        { href: 'https://www.youtube.com/@SupremeSalonug', label: '@SupremeSalonug', icon: YoutubeLogo },
        { href: 'https://www.tiktok.com/@supremesalonug', label: '@supremesalonug', icon: TiktokLogo }
    ]
</script>

<footer id="contacts" class="text-gray-800 py-8 px-4 text-center">
    <h2 class="text-3xl font-bold text-amber-800 mb-8">Contact Us</h2>
    <div class="container mx-auto">
        <div class="flex flex-col space-y-2 md:flex-row md:justify-center space-x-6 mb-4 lg:max-w-[1/2]">
            {#each socialLinks as social}
                <a href="{social.href}" target="_blank" rel="noopener noreferrer" aria-label={social.label} class="transition duration-300 flex justify-between mx-auto">
                    <svelte:component this={social.icon} size={24} class="mr-2" />
                    <p class="hover:text-amber-600">{social.label}</p>
                </a>
            {/each}
        </div>
        <div>
            <p>&copy; {currentYear} Supreme Salon Uganda.</p>
            <p>All rights reserved.</p>
        </div>
        <p class="text-sm text-gray-500 mt-1">Located at Akamwesi Mall - Gayaza Road</p>
    </div>
</footer>