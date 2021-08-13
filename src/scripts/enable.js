/**
 * @param {HTMLDivElement} parent parent element
 */
export function enable (parent) {

    if (!parent) return

    const channels = parent.children[1]
    const navigation = parent.children[2]

    channels.style.display = 'flex'

    channels.style.flexDirection = 'column-reverse'

    if (navigation) {

        navigation.setAttribute ('style', 'margin-top: -10px')

        parent.insertBefore (navigation, channels)

    }

}