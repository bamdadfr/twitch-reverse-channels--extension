/**
 * @param {HTMLDivElement} parent parent element
 */
export function enable (parent) {

    if (!parent) return

    const title = parent.children[0]
    const channels = parent.children[1]
    const navigation = parent.children[2]

    channels.style.display = ''

    channels.style.flexDirection = ''

    if (navigation) {

        parent.appendChild (navigation)

        title.style = ''

    }

}