<template>
    <div class="actions-container grid">
        <button v-for="btn in btns" class="secondary-btn" @click="btn.action">{{ $trans(btn.name) }}</button>
    </div>

</template>

<script setup>
import { watchEffect, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { eventBus, showSuccessMsg } from '@/services/event-bus.service';
import { useUserStore } from '@/stores/user-store';

const emit = defineEmits(['resetModal'])
const userStore = useUserStore()
const btns = [
    {
        name: 'print',
        action: onPrintList
    },
    {
        name: 'summary',
        action: onShowSummary
    },
    {
        name: 'share-list',
        action: onSendList
    },
    {
        name: 'home-action-1',
        action: onRecipe
    },
    {
        name: 'save-history',
        action: saveHistory
    },
    {
        name: 'back',
        action: closeModal
    },
    // {
    //     name: 'debug',
    //     action: onDebug
    // }
]

const router = useRouter()
const route = useRoute()

function onPrintList() {

    onShowSummary({ print: true })
    closeModal()
}

function onDebug() {
    console.debug('debug');
    router.push({ name: 'debug' , query:route.query })
    closeModal()
}

function onShowSummary({ print=false } ) {
  
    closeModal()
    const query = { ...route.query, print }
    router.push({ name: 'list-summary', query:query })
}


const selectItems = computed(() => userStore.getSelectedItems)
async function onSendList() {

    if (!selectItems.value.length) {
        showSuccessMsg('Nothing to share')
        return
    }
    try {
        let idsTosShare = selectItems.value.map(({ _id }) => _id)
        const url = `${import.meta.env.VITE_PROD_URL}?share=true&ids=${idsTosShare}`;
        console.debug(url);
        await navigator.share({ title: 'My shopping list', text: 'Check out my shopping list', url: url })
        showSuccessMsg('List sent successfully ')

    } catch (error) {
        showSuccessMsg('Failed to send list')
    }
    finally {
        closeModal()
    }

}



function saveHistory() {
    if (!selectItems.value.length) {
        showSuccessMsg('Select items to save history')
        return
    }
    let idsTosShare = selectItems.value.map(({ _id }) => _id)
    console.debug('save history', idsTosShare);
    const url = `&ids=${idsTosShare}`;
    console.debug(url);

    const history={
        url : url,
        date: new Date().toLocaleDateString()
    }

    userStore.addHistory(history)
    showSuccessMsg('History saved successfully, watch it in the user page')
    // closeModal()
   
}

function onRecipe() {
    closeModal()
    router.push({ name: 'recipe' })
}

function closeModal() {
    console.debug('close modal');
    emit('resetModal')
}
</script>

<style scoped>
button {
    padding: 0.8rem;
}

dialog.blur-bg {
    width: 60%;
    border: none;
    padding: 1rem;
    border-radius: var(--br);

}

.actions-container {
    gap: 1rem;
}
</style>