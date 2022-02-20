<script lang="ts">
  export let height = 24;
  export let width = 24;
  export let fill = 'none';
</script>

<!-- NOTE: stroke is required to be added with css -->
<svg xmlns="http://www.w3.org/2000/svg" {height} {width} {fill} viewBox="0 0 24 24">
  <slot />
</svg>
