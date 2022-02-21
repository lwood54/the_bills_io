<script lang="ts">
  import { draw, fade, fly, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import IconButton from '../Base/icon-button.svelte';
  import CloseIcon from '../Icons/close-icon.svelte';
  import { isMenuOpen } from '$lib/store/state';
  import { PATH } from '$lib/constants/navigation';
  import { authorized } from '$lib/store/auth';

  const toggleMenu = () => {
    $isMenuOpen = !$isMenuOpen;
  };
</script>

{#if $isMenuOpen}
  <div transition:fade={{ duration: 400 }} class="menu-overlay" on:click={toggleMenu} />
  <div transition:fly={{ duration: 400, x: -250, easing: quintOut, opacity: 1 }} class="menu">
    <div class="menu-header">
      <IconButton variant="inverted" onClick={toggleMenu}>
        <CloseIcon />
      </IconButton>
    </div>
    <div class="menu-content">
      <a class="menu-link" on:click={toggleMenu} href={PATH.HOME}>Home</a>
      {#if $authorized}
        <a class="menu-link" on:click={toggleMenu} href={PATH.BILLS.VIEW}>View</a>
      {:else}
        <a class="menu-link" on:click={toggleMenu} href={PATH.LOGIN}>Login</a>
      {/if}
    </div>
    <div class="menu-footer" />
  </div>
{/if}

<style>
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    min-width: var(--w-xs);
    height: 100vh;
    background-color: var(--background);
    border: 1px solid var(--teal900);
    z-index: 10;
  }
  .menu-content {
    margin-top: var(--spacing-m);
  }
  .menu-link {
    all: unset;
    display: inline-flex;
    width: 100%;
    height: var(--h-xs);
    background-color: var(--background);
    color: var(--blue900);
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .menu-link:hover {
    background-color: var(--secondary);
  }
  .menu-link:active,
  .menu-link:focus {
    background-color: var(--primary);
    color: var(--secondary);
  }
  .menu-header {
    position: relative;
    top: 0;
    width: 100%;
    height: var(--h-xs);
    display: flex;
    justify-content: flex-end;
  }
  .menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.411);
    z-index: 9;
  }
</style>
