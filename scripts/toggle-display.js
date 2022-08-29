export function toggleDisplay(element) {
    const display = window.getComputedStyle(element).display

    if (display === 'block') element.style.display = 'none'
    if (display === 'none') element.style.display = 'block'
}
