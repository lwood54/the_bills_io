<script lang="ts">
  import type { Position } from '$lib/constants/styles';

  export let customBackground =
    'linear-gradient(to left top, var(--teal600), var(--blue600), var(--teal600))';
  export let contentPosition: Position = 'center';
</script>

<div class={`full-page `} style:background={customBackground}>
  <div class={`full-page-content ${contentPosition}`}>
    <slot />
  </div>
</div>

<style>
  .full-page {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-attachment: fixed;
  }
  .full-page-content {
    display: flex;
    flex-direction: column;
  }
  .center {
    align-items: center;
  }
  .end {
    align-items: flex-end;
  }
  .start {
    align-items: flex-start;
  }
</style>
