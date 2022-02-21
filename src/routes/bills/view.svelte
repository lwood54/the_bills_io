<script context="module" lang="ts">
  import supabase from '$lib/supabase';
  import { slide } from 'svelte/transition';

  export async function load({ error }) {
    const { data: bills, error: billsErrors } = await supabase.from('bills').select();

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
  import FullPage from '$lib/components/Base/full-page.svelte';
  import type { Bill } from '$lib/types/bills';
  import type { PostgrestError } from '@supabase/supabase-js';
  import { POSITION } from '$lib/constants/styles';
  import { formatToMoney } from '$lib/helpers/bills';
  import DownArrowIcon from '$lib/components/Icons/down-arrow-icon.svelte';
  export let bills: Bill[] = [];
  export let errors: {
    loadError: any;
    billsErrors: PostgrestError;
  };

  let selectedBills: number[];
  $: selectedBills = [];

  const toggleDetails = (index: number) => {
    if (selectedBills.includes(index)) {
      selectedBills = selectedBills.filter((item) => item !== index);
    } else {
      selectedBills = [...selectedBills, index];
    }
  };
</script>

<FullPage
  customBackground="linear-gradient(to left top, var(--green600), var(--cyan700), var(--green400))"
  contentPosition={POSITION.CENTER}
>
  <div class="bills-container">
    <h1>Bills</h1>

    {#if bills}
      <div class="bills-list">
        {#each bills as bill, i}
          <div class="bill" on:click={() => toggleDetails(i)}>
            <div class="display-row">
              <div>
                <li>
                  <p class="list-item-heading">
                    {bill.name}
                  </p>
                </li>
                <li>
                  <p class="list-item">Balance: {formatToMoney(bill.balance)}</p>
                </li>
              </div>
              <div class="icon-container">
                <DownArrowIcon />
              </div>
            </div>
            {#if selectedBills.includes(i)}
              <div transition:slide class="bill-details">
                <li>Interest: {bill.interest} %</li>
                <li>Day Due: {bill.dayDue}</li>
                <li>Payment: {formatToMoney(bill.payment)}</li>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
    {#if errors?.loadError || errors?.billsErrors}
      <h3>{errors?.loadError?.message}</h3>
      <h3>{errors?.billsErrors?.message}</h3>
    {/if}
  </div>
</FullPage>

<style>
  .icon-container {
    stroke: var(--primary);
  }
  .bills-container {
    width: var(--w-3Q);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bills-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--w-3Q);
    width: 80%;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 255, 179, 0.205);
    padding: var(--spacing-xl);
    border-radius: var(--radius-5);
    box-shadow: 2px 2px 10px var(--teal700);
  }
  .bill {
    width: 100%;
    color: var(--blue900);
    list-style: none;
    padding: var(--spacing-s);
    cursor: pointer;
  }
  .bill:hover {
    background-color: var(--teal800);
    border-radius: var(--radius-2);
    color: var(--blue100);
  }
  .bill-details {
    background-color: rgba(0, 255, 179, 0.342);
    padding: var(--spacing-s);
  }
  .display-row {
    display: flex;
    justify-content: space-between;
  }
  .bill:hover > .display-row > .icon-container {
    stroke: var(--blue50);
  }
  .list-item-heading {
    margin: 0;
    font-size: var(--f-l);
    font-weight: 500;
  }
  .list-item {
    margin: 0;
    font-weight: 400;
  }
</style>
