<script lant="ts">
  import BaseIcon from './base-icon.svelte';
  export let height = 24;
  export let width = 24;
  export let fill = 'none';
  export let strokeWidth = 2;
</script>

<BaseIcon {height} {width} {fill}>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width={strokeWidth}
    d="M6 18L18 6M6 6l12 12"
  />
</BaseIcon>
