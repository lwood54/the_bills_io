<script context="module" lang="ts">
  import supabase from '$lib/supabase';
  export async function load({ error, status }) {
    const { data: bills, error: billsErrors } = await supabase.from('bills').select();
    // if (error) throw new Error(error.message);
    console.log('error from load', error.message);
    console.log('bills error --> ', billsErrors);
    // if (billsErrors) {
    //   return {
    //     status: 403,
    //     body: {
    //       error: billsErrors
    //     }
    //   };
    // }
    return {
      props: {
        bills
      }
    };
  }
</script>

<script lang="ts">
  import type { Bill } from '$lib/types/bills';
  export let bills: Bill[];
</script>

<h1>Bills</h1>

{#each bills as bill}
  <li class="list-item">Name: {bill.name}</li>
  <li>Balance: {bill.balance}</li>
  <li>Interest: {bill.interest}</li>
  <li>Day Due: {bill.dayDue}</li>
  <li>Payment: {bill.payment}</li>
  <hr />
{/each}

<style>
  .list-item {
    color: var(--customColor);
  }
</style>
