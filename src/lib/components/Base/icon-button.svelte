<script lang="ts">
  export let onClick: () => void;
  export let variant: 'primary' | 'inverted' = 'primary';
</script>

<div tabindex="0" class={`icon-button ${variant}`} role="button" on:click={onClick}>
  <slot />
</div>

<style>
  .icon-button {
    padding: var(--spacing-xs);
    margin: var(--spacing-s);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .primary {
    stroke: var(--secondary);
  }
  .primary:hover {
    border: 1px solid var(--secondary);
  }
  .primary:active,
  .primary:focus {
    background-color: var(--primary-active);
  }
  .inverted {
    stroke: var(--primary);
  }
  .inverted:hover {
    border: 1px solid var(--primary);
  }
  .inverted:active,
  .inverted:focus {
    background-color: var(--primary-active);
    stroke: var(--secondary);
  }
</style>
