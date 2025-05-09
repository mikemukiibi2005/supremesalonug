<script lang="ts">
    import { Button } from 'bits-ui';
    import { MenuIcon, XIcon } from 'lucide-svelte';

    let mobileMenuOpen = $state(false);

    const navLinks = [
        { href: '#hero', label: 'Home '},
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Services' },
        { href: '#location', label: 'Location' },
    ];

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class="w-full mx-auto flex justify-around m-[24px]">
    <a href="/" class="md:text-xl text-amber-800">Supreme Salon</a>
    <ul class="flex justify-around space-x-3.5">
        {#each navLinks as navLink}
            <li class="md:text-xl text-amber-800"><a href={navLink.href}>{navLink.label}</a></li>
        {/each}
    </ul>
</nav>