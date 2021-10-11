/**
 *
 */
export function flipChannels () {

    const followedChannels = document.querySelector ('[aria-label="Followed Channels"]')
    const channels = followedChannels.children[1]
    const navigation = followedChannels.children[2]

    if (channels.style.flexDirection === 'column-reverse') return

    channels.style.display = 'flex'

    channels.style.flexDirection = 'column-reverse'

    if (navigation) {

        navigation.setAttribute ('style', 'margin-top: -10px')

        followedChannels.insertBefore (navigation, channels)

    }

}