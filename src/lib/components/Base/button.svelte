<script lang="ts">
  import { BTN_VARIANT, type BtnVariant } from '$lib/constants/styles';

  export let onClick: () => void = undefined;
  export let bg: string = undefined;
  export let variant: BtnVariant = BTN_VARIANT.PRIMARY;
  export let type: string = undefined;
</script>

<button
  tabindex="0"
  {type}
  class={`button ${variant}`}
  style:background-color={bg}
  on:click={onClick}
>
  <slot />
</button>

<style>
  .button {
    all: unset;
    padding: var(--spacing-m);
    cursor: pointer;
    border-radius: var(--radius-2);
    text-align: center;
  }

  .primary {
    background-color: var(--primary);
    color: var(--secondary);
  }
  .primary:hover,
  .primary:focus {
    background-color: var(--primary-hover);
    color: var(--primary);
  }
  .primary:active {
    background-color: var(--primary-active);
    color: var(--secondary);
  }
  .primary:focus {
    border: 1px solid var(--primary-border-focus);
  }

  .secondary {
    background-color: var(--secondary);
    color: var(--primary);
  }
  .secondary:hover,
  .secondary:focus {
    background-color: var(--secondary-hover);
  }
  .secondary:active {
    background-color: var(--secondary-active);
    color: var(--primary);
  }
  .secondary:focus {
    border: 1px solid var(--secondary-border-focus);
  }

  .negative {
    background-color: var(--red900);
  }
  .negative:hover {
    background-color: var(--red400);
  }
  .no-color {
    background-color: none;
  }
  .no-color:hover {
    background-color: none;
  }
</style>
