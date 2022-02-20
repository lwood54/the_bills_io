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

{#if isLoggedIn}
  <h1>Congrats, you're logged in!</h1>
{:else}
  <div class="login-form-container">
    <form class="login-form" on:submit|preventDefault={handleSubmit}>
      <FormInput label="Email" type="email" bind:inputValue={email} />
      <FormInput label="Password" type="password" bind:inputValue={password} />
      <Button type="submit">Login</Button>
    </form>
    {#if formError?.message}
      <h1>{formError.message}</h1>
    {/if}
  </div>
{/if}

<style>
  .login-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-m);
  }

  .login-form {
    width: var(--w-half);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
  }
</style>
