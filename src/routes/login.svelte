<script lang="ts">
  import FormInput from '$lib/components/Base/form-input.svelte';
  import { authorized } from '$lib/store/auth';
  import Button from '$lib/components/Base/button.svelte';

  import supabase from '$lib/supabase';
  import type { ApiError } from '@supabase/supabase-js';
  let formError: ApiError | null;
  let email = '';
  let password = '';
  $: isLoggedIn = $authorized || supabase.auth.session();

  const handleSubmit = async () => {
    const { session, error } = await supabase.auth.signIn({
      email,
      password
    });

    if (error) {
      formError = error;
    }
    if (session) {
      $authorized = true;
    }
  };
</script>

<div class="login-page">
  {#if isLoggedIn}
    <h1>Congrats, you're logged in!</h1>
  {:else}
    <div class="login-form-container">
      <form class="login-form" on:submit|preventDefault={handleSubmit}>
        <div class="content-container">
          <div class="image-container">
            <img class="image" src={'/ud_login.svg'} alt="login-svg" />
          </div>
          <div class="form-group">
            <FormInput label="Email" type="email" bind:inputValue={email} />
            <FormInput label="Password" type="password" bind:inputValue={password} />
            <Button type="submit">Login</Button>
          </div>
        </div>
      </form>
      {#if formError?.message}
        <h1>{formError.message}</h1>
      {/if}
    </div>
  {/if}
</div>

<style>
  .image-container {
    width: 35%;
  }
  .image {
    width: 100%;
  }

  .login-page {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background: linear-gradient(to left top, var(--teal600), var(--blue600), var(--teal600));
    background-attachment: fixed;
  }

  .login-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-m);
  }

  .login-form {
    width: var(--w-3Q);
    border-radius: var(--radius-5);
    padding: var(--spacing-xl);
    box-shadow: 2px 2px 10px var(--primary);
    background-color: var(--glassBG);
    backdrop-filter: blur(5px);
  }

  .content-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: var(--spacing-m);
  }

  @media (max-width: 900px) {
    .content-container {
      flex-direction: column;
      width: 100%;
    }
    .form-group {
      width: 100%;
    }
    .image-container {
      width: 50%;
    }
  }
</style>
