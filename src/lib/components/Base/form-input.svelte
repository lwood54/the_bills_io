<script lang="ts">
  export let inputValue: string | number;
  export let type: 'email' | 'password' | 'text' | 'number' = 'text';
  export let label: string;
</script>

<div class="container">
  <label class="label" for={type}>{label}</label>
  {#if type === 'email'}
    <input class="input" type="email" name={type} id={type} bind:value={inputValue} />
  {/if}
  {#if type === 'password'}
    <input class="input" type="password" name={type} id={type} bind:value={inputValue} />
  {/if}
  {#if type === 'text'}
    <input class="input" type="text" name={type} id={type} bind:value={inputValue} />
  {/if}
  {#if type === 'number'}
    <input class="input" type="number" name={type} id={type} bind:value={inputValue} />
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
    border: 1px solid var(--secondary);
    border-radius: var(--radius-2);
    padding: var(--spacing-s);
    border-bottom: 4px solid var(--secondary);
    color: var(--text-primary);
  }
</style>
