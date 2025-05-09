<script lang="ts">
    import { MenuIcon } from 'lucide-svelte';

    let mobileMenuOpen = $state(false);

    const navLinks = [
        { href: '#hero', label: 'Home '},
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Services' },
        { href: '#location', label: 'Location' },
        { href: '#contacts', label: 'Contact Us'}
    ];

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class="w-full mx-auto flex justify-around m-[24px]">
    <div>        
        <ul class="hidden md:flex md:justify-around md:space-x-3.5 mx-auto">
            {#each navLinks as navLink}
                <li class="md:text-xl text-amber-600"><a href={navLink.href}>{navLink.label}</a></li>
            {/each}
        </ul>
    </div>
    
    <div>
        <button type="button" onclick={toggleMobileMenu}>
            <MenuIcon />
        </button>
        {#if mobileMenuOpen}
            <div class="md:hidden absolute top-full left-0 w-full z-10">
                <div>
                    <ul class="py-2 flex flex-col items-center">
                        {#each navLinks as navLink}
                            <li class="md:text-xl text-amber-600"><a href={navLink.href} onclick={() => mobileMenuOpen = false}>{navLink.label}</a></li>
                        {/each}
                    </ul>
                </div>
                
            </div>
        {/if}
    </div>
</nav>