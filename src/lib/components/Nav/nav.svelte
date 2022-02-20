<script lang="ts">
  import { goto } from '$app/navigation';
  import { PATH } from '$lib/constants/navigation';
  import { authorized } from '$lib/store/auth';
  import { isMenuOpen } from '$lib/store/state';
  import supabase from '$lib/supabase';
  import Button from '../Base/button.svelte';
  import MenuIcon from '../Icons/menu-icon.svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import CloseIcon from '../Icons/close-icon.svelte';
  import IconButton from '../Base/icon-button.svelte';
  import { tick } from 'svelte';

  export let isLoggedIn: boolean = $authorized ?? Boolean(supabase.auth.session());

  const logout = async () => {
    const res = await supabase.auth.signOut();
    if (!res.error) {
      $authorized = false;
      tick();
      goto(PATH.HOME);
    }
  };

  const toggleMenu = () => {
    $isMenuOpen = !$isMenuOpen;
  };
</script>

{#if $isMenuOpen}
  <div class="menu-overlay" on:click={toggleMenu} />
{/if}
<div class="nav-container">
  <IconButton onClick={toggleMenu}>
    <MenuIcon />
  </IconButton>
  <div class="auth-action">
    {#if isLoggedIn}
      <Button onClick={logout}>logout</Button>
    {:else}
      <Button onClick={() => goto(PATH.LOGIN)}>login</Button>
    {/if}
  </div>
</div>
{#if $isMenuOpen}
  <div transition:fly={{ delay: 100, duration: 200, easing: quintOut, x: -100 }} class="menu">
    <div class="menu-header">
      <IconButton variant="inverted" onClick={toggleMenu}>
        <CloseIcon />
      </IconButton>
    </div>
    <div class="menu-content">stuff</div>
    <div class="menu-footer" />
  </div>
{/if}

<style>
  .auth-action {
    margin: var(--spacing-s);
  }

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

  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--primary);
    height: var(--h-m);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
