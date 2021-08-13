import { enable } from './enable'

/**
 * @description content script
 */
async function ContentOnLoad () {

    let isReady = false

    const watch = () => {

        if (isReady) return

        const isLogged = document.body.classList[0] === 'logged-in'
        const sidebarLoaded = document.getElementsByClassName ('side-bar-contents')[0].children[0].children[0].children.length > 0

        if (isLogged && sidebarLoaded) {

            isReady = true

            const followedLayout = document.querySelector ('[aria-label="Followed Channels"]')

            enable (followedLayout)

        } else {

            setTimeout (() => {

                watch ()
            
            }, 2000)
        
        }

    }

    watch ()

}

window.addEventListener ('load', ContentOnLoad)