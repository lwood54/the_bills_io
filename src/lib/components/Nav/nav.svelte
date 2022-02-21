<script lang="ts">
  import { goto } from '$app/navigation';
  import { PATH } from '$lib/constants/navigation';
  import { authorized } from '$lib/store/auth';
  import { isMenuOpen } from '$lib/store/state';
  import supabase from '$lib/supabase';
  import Button from '../Base/button.svelte';
  import MenuIcon from '../Icons/menu-icon.svelte';
  import IconButton from '../Base/icon-button.svelte';
  import { tick } from 'svelte';
  import Menu from './menu.svelte';

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
<Menu />
<div class="filler" />

<style>
  .filler {
    padding-top: var(--h-s);
  }
  .auth-action {
    margin: var(--spacing-s);
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
