import {defineStore} from "pinia";
import {ref} from "vue";

export const useTagStore = defineStore("tag",{
    state: () => {
        return {
            tag: ""
        }
    },
    actions: {
        setTag(tag: string) {
            this.tag = tag
        }
    }
})
