export function changeFont(element, font) {
    element.style.fontFamily = font
}

export function setupFont(element, font) {
    switch (font) {
        case 'Silkscreen':
            changeFont(element, 'Silkscreen, cursive')
            break
        case 'OpenSans':
            changeFont(element, 'Open Sans, sans-serif')
            break
        case 'AlumniPinstripe':
            changeFont(element, 'Alumni Sans Pinstripe, sans-serif')
            break
        case 'AlumniCollegiate':
            changeFont(element, 'Alumni Sans Collegiate One, sans-serif')
            break
        case 'Roboto':
            changeFont(element, 'Roboto, sans-serif')
            break
        case 'Aboreto':
            changeFont(element, 'Aboreto, cursive')
            break
        default:
            changeFont(element, 'Roboto, sans-serif')
            break
    }
}
