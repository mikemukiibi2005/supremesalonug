<script lang="ts">
    import { FacebookLogo, InstagramLogo, XLogo } from "phosphor-svelte";

    const currentYear = 2025;
    const socialLinks = [
        { href: '#', label: 'SupremeSalonUG', icon: FacebookLogo },
        { href: '#', label: 'supremesalonug', icon: InstagramLogo },
        { href: '#', label: 'supremesalonug', icon: XLogo },
    ]
</script>

<footer class="text-gray-800 py-8 px-4 text-center">
    <div class="container mx-auto">
        <div class="flex justify-center space-x-6 mb-4">
            {#each socialLinks as social}
                <a href="{social.href}" target="_blank" rel="noopener noreferrer" aria-label={social.label} class="transition duration-300 flex justify-center">
                    <svelte:component this={social.icon} size={24} />
                    <p>{social.label}</p>
                </a>
            {/each}
        </div>
        <p>&copy; {currentYear} Supreme Salon Uganda. All rights reserved.</p>
        <p class="text-sm text-gray-500 mt-1">Located at Akamwesi Mall - Gayaza Road</p>
    </div>
</footer>