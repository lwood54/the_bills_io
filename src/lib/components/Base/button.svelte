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
  }

  .primary {
    background-color: var(--teal500);
  }
  .primary:hover,
  .primary:focus {
    background-color: var(--teal200);
  }
  .primary:active {
    background-color: var(--secondary-active);
  }
  .primary:focus {
    border: 2px solid var(--teal900);
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
