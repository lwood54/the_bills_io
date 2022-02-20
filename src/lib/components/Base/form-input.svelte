<script lang="ts">
  import { INPUT_VARIANT, type InputVariant } from '$lib/constants/styles';

  export let inputValue: string | number;
  export let type: 'email' | 'password' | 'text' | 'number' = 'text';
  export let variant: InputVariant = INPUT_VARIANT.PRIMARY;
  export let label: string;
</script>

<div class="container">
  <label class="label" for={type}>{label}</label>
  {#if type === 'email'}
    <input class={`input ${variant}`} type="email" name={type} id={type} bind:value={inputValue} />
  {/if}
  {#if type === 'password'}
    <input
      class={`input ${variant}`}
      type="password"
      name={type}
      id={type}
      bind:value={inputValue}
    />
  {/if}
  {#if type === 'text'}
    <input class={`input ${variant}`} type="text" name={type} id={type} bind:value={inputValue} />
  {/if}
  {#if type === 'number'}
    <input class={`input ${variant}`} type="number" name={type} id={type} bind:value={inputValue} />
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .label {
    color: var(--text-primary);
  }

  .input {
    all: unset;
    border-radius: var(--radius-2);
    padding: var(--spacing-s);
    color: var(--text-primary);
    background-color: var(--background);
  }

  .primary {
    border: 1px solid var(--primary);
    border-bottom: 4px solid var(--primary);
  }

  .secondary {
    border: 1px solid var(--secondary);
    border-bottom: 4px solid var(--secondary);
  }

  .negative {
    border: 1px solid var(--red500);
    border-bottom: 4px solid var(--negative);
  }
</style>
