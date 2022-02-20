<script lang="ts">
  import Nav from '$lib/components/Nav/nav.svelte';
  import { authorized } from '$lib/store/auth';
  import supabase from '$lib/supabase';

  $: isLoggedIn = $authorized || Boolean(supabase.auth.session());
</script>

<Nav {isLoggedIn} />
<slot />

<style global>
  :root {
    /* COLORS */
    --gray900: #212121;
    --text-primary: var(--gray900); /* MAIN TEXT*/
    --blue900: #1b3cbc;
    --blue800: #115ddb;
    --primary-active: var(--blue800);
    --blue700: #0270ee;
    --primary: #0270ee; /* MAIN BLUE*/
    --blue600: #0082ff;
    --blue500: #0091ff;
    --blue400: #1fa2ff;
    --blue300: #54b3ff;
    --blue200: #8ac8ff;
    --blue100: #b9ddff;
    --blue50: #e2f2ff;
    --light-blue50: #e1f5fe;
    --background: var(--light-blue50); /* BACKGROUND */
    --light-blue100: #b3e5fc;
    --light-blue200: #81d4fa;
    --light-blue300: #4fc3f7;
    --light-blue400: #29b6f6;
    --light-blu500: #03a9f4;
    --light-blue600: #039be5;
    --light-blue700: #0288d1;
    --light-blue800: #0277bd;
    --light-blue900: #01579b;
    --cyan50: #e0f7fa;
    --cyan100: #b2ebf2;
    --cyan200: #80deea;
    --cyan300: #4dd0e1;
    --cyan400: #26c6da;
    --cyan500: #00bcd4;
    --cyan600: #00acc1;
    --cyan700: #0097a7;
    --cyan800: #0277bd;
    --cyan900: #006064;
    --orange900: #df5700;
    --orange800: #00838f;
    --orange700: #ee8002;
    --orange600: #f48f05;
    --orange500: #f89b08;
    --orange400: #f8aa29;
    --orange300: #f9b94f;
    --orange200: #fbcd81;
    --orange100: #fce1b3;
    --orange50: #fef3e0;
    --teal900: #007774;
    --teal800: #009ca2;
    --teal700: #00b1ba;
    --secondary-active: var(--teal700); /* SECONDARY ACTIVE */
    --teal600: #00c7d6;
    --teal500: #00d8e9;
    --secondary: var(--teal500); /* SECONDARY */
    --teal400: #00e0eb;
    --teal300: #02e6ee;
    --teal200: #74eef2;
    --teal100: #aff5f6;
    --teal50: #dffbfb;
    --blue-alt900: #0000e6;
    --blue-alt800: #0000ea;
    --blue-alt700: #0a02ee;
    --blue-alt600: #3a0ff6;
    --blue-alt500: #4c14fc;
    --blue-alt400: #7343fe;
    --blue-alt300: #9168fe;
    --blue-alt200: #b496fd;
    --blue-alt100: #d3c0fd;
    --blue-alt50: #efe5ff;
    --violet900: #3200d4;
    --violet800: #5300da;
    --violet700: #6400df;
    --violet600: #7400e8;
    --violet500: #8002ee;
    --violet400: #9643f2;
    --violet300: #aa6af5;
    --violet200: #c398f7;
    --violet100: #dbc2fa;
    --violet50: #f2e6fd;
    --pink900: #8b0159;
    --pink800: #b00362;
    --pink700: #c60467;
    --pink600: #dc036c;
    --pink500: #ee0270;
    --pink400: #ef3a87;
    --pink300: #f1609d;
    --pink200: #f48fba;
    --pink100: #f7bbd5;
    --pink50: #fce4ee;
    --red900: #b71c1c;
    --red800: #c62828;
    --red700: #d32f2f;
    --red600: #e53935;
    --red500: #f44336;
    --red400: #ef5350;
    --red300: #e57373;
    --red200: #ef9a9a;
    --red100: #ffcdd2;
    --red50: #ffebee;

    /* FONT SIZE */
    --f-xs: 0.5rem;
    --f-s: 0.75rem;
    --f-m: 1rem; /* 16px */
    --f-l: 1.5rem;
    --f-xl: 2rem;

    /* HEIGHT */
    --h-xs: 2rem;
    --h-s: 3rem;
    --h-m: 4rem; /* 64px */
    --h-l: 5rem;
    --h-xl: 6rem;

    /* WIDTH */
    --w-full: 100%;
    --w-3Q: 75%;
    --w-half: 50%;
    --w-1Q: 25%;
    --w-xl: 100rem;
    --w-l: 75rem;
    --w-m: 50rem;
    --w-s: 25rem;
    --w-xs: 15rem;

    /* SPACING */
    --spacing-xs: 0.25rem;
    --spacing-s: 0.5rem;
    --spacing-m: 0.75rem;
    --spacing-l: 1rem;
    --spacing-xl: 1.5rem;

    /* BORDER */
    --radius-1: 1px;
    --radius-2: 2px;
    --radius-3: 3px;
    --radius-4: 4px;
    --radius-5: 5px;
    --radius-circle: 50%;

    /* BUTTON */
    --btn-size-m: 2.188rem;
    --btn-size-l: 3.125rem;
  }
</style>
