import { INTERVAL } from './constants'
import { flipChannels } from './flip-channels'

let interval = undefined

/**
 *
 */
export function setWatcher () {

    interval = setInterval (() => {

        const isLogged = document.body.classList[0] === 'logged-in'
        const sidebarLoaded = document.getElementsByClassName ('side-bar-contents')[0].children[0].children[0].children.length > 0

        if (isLogged && sidebarLoaded) {

            flipChannels ()

            clearInterval (interval)

        }
    
    }, INTERVAL)

}