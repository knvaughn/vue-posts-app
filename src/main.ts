import { createApp } from "vue"
import App from "./App.vue"
import axios from 'axios'
import { today, thisWeek, thisMonth } from './mocks'

function delay() {
    return new Promise(res => {
      setTimeout(res, 2000)
    })
}

// Override for mock api call -- the purpose of this project is to learn Vue/TypeScript, this is not a real solution
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axios.get = async (url: string) => {
    if (url === '/posts') {
        await delay()
        return Promise.resolve({
            data: [today, thisWeek, thisMonth]
        })
    }
}

createApp(App).mount("#app");
