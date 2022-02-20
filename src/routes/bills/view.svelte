<script context="module" lang="ts">
  import supabase from '$lib/supabase';
  export async function load({ error, status }) {
    const { data: bills, error: billsErrors } = await supabase.from('bills').select();
    if (error) throw new Error(error.message);
    if (billsErrors) {
      return {
        status: 403,
        body: {
          errors: {
            loadError: error,
            billsErrors
          }
        }
      };
    }
    return {
      props: {
        bills,
        errors: {
          loadError: error,
          billsErrors
        }
      }
    };
  }
</script>

<script lang="ts">
  import type { Bill } from '$lib/types/bills';
  import type { PostgrestError } from '@supabase/supabase-js';
  export let bills: Bill[] = [];
  export let errors: {
    loadError: any;
    billsErrors: PostgrestError;
  };
</script>

<h1>Bills</h1>

{#if bills}
  {#each bills as bill}
    <li class="list-item">Name: {bill.name}</li>
    <li>Balance: {bill.balance}</li>
    <li>Interest: {bill.interest}</li>
    <li>Day Due: {bill.dayDue}</li>
    <li>Payment: {bill.payment}</li>
    <hr />
  {/each}
{/if}
{#if errors?.loadError || errors?.billsErrors}
  <h3>{errors?.loadError?.message}</h3>
  <h3>{errors?.billsErrors?.message}</h3>
{/if}

<style>
  .list-item {
    color: var(--customColor);
  }
</style>
