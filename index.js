import { changeFont, setupFont } from './scripts/setup-font.js'
import { toggleDisplay } from './scripts/toggle-display.js'

const watch = document.getElementById('watch')
const calendar = document.getElementById('calendar')
const container = document.getElementById('container')

let combination = 'full'

function updateScreenDateTime() {
    let dateTime = new Date()

    if (combination === 'full') {
        watch.innerText = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} `
        calendar.innerText = `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()} `
    }
    if (combination === 'watch') {
        watch.innerText = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} `
        calendar.innerText = ''
    }
    if (combination === 'calendar') {
        calendar.innerText = `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()} `
        watch.innerText = ''
    }
}

// Settings
const settingsButton = document.getElementById('settings-button')
const settings = document.getElementById('settings')

settingsButton.addEventListener('click', () => {
    toggleDisplay(settings)
})

const fontSelector = document.getElementById('font')
const combinationSelector = document.getElementById('combination')

fontSelector.addEventListener('change', (event) => {
    setupFont(container, event.target.value)
    setupFont(settingsButton, event.target.value)
})

combinationSelector.addEventListener('change', (event) => {
    combination = event.target.value
})

// Change time after every second

setInterval(() => updateScreenDateTime(combination), 1)

let watchFontSize = document.getElementById('watch-font-size')

function start() {
    changeFont(container, 'Roboto')

    watchFontSize.innerText = window.getComputedStyle(watch).fontSize
}

// Startup

start()
