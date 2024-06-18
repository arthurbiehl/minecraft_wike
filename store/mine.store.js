export const useMine = defineStore('useMine', {

    state() {
        return {
            items: [],
            blocks: [],
        }
    },

    actions: {
        async getItems() {
            const response = await $fetch('https://minecraft-api.vercel.app/api/items', {
                method: 'GET',

            })

            this.items = response;
        },

        async getBlocks() {
            const response = await $fetch('https://minecraft-api.vercel.app/api/blocks', {
                method: 'GET',

            })

            this.blocks = response;
        },

        
    },

})