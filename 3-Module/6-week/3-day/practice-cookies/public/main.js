/* ============================== PHASE 1 + 2 ============================== */

// Helper function: Get the value of a single cookie
function getCookieValue(cookieName) {
    const allCookies = document.cookie;
    let cookieValue = '';

    // split up cookie to find just the part that's needed
    const matchingCookie = allCookies
        .split('; ')
        .find(c => c.indexOf(`${cookieName}=`) === 0);

    // equivalent to:
    // const matchingCookie = allCookies
    //     .split('; ')
    //     .find(keyValuePairs => keyValuePairs.startsWith(cookieName + "="));

    // the value is just the part after the equal sign
    if (matchingCookie) {
        cookieValue = matchingCookie.split('=')[1];
    }

    return cookieValue;
}

// set the theme cookie name to a constant to prevent spelling errors
const THEME_KEY = "theme";

//!!END
// For storing user's theme selection in cookies
function storeTheme(themeName) {
    //!!START
    // Phase 1
    // document.cookie = `${THEME_KEY}=${themeName}`;
    // Phase 2
    document.cookie = `${THEME_KEY}=${themeName};max-age=15`;
    //!!END
}

// For restoring theme from cookies, if selected by the user in the past
function restoreTheme() {
    //!!START
    const storedTheme = getCookieValue(THEME_KEY);
    if (storedTheme) {
        setTheme(storedTheme);
    }
    //!!END
}

// For clearing theme selection from cookies (reset to default)
function clearTheme() {
    //!!START
    document.cookie = `${THEME_KEY}=; max-age=0`;
    //!!END
}

/* ================================ PHASE 3 ================================ */

// set the name cookie name to a constant to prevent spelling errors
const NAME_KEY = "displayName";

//!!END
// For storing user's display name in cookies
function storeName(displayName) {
    //!!START
    document.cookie = `${NAME_KEY}=${displayName}`;
    //!!END
}

// For restoring user's display name from cookies, if set in the past
function restoreName() {
    //!!START
    const storedName = getCookieValue(NAME_KEY);
    if (storedName) {
        setInputValue('display-name', storedName);
    }
    //!!END
}

// For clearing user's display name from cookies
function clearName() {
    //!!START
    document.cookie = `${NAME_KEY}=; max-age=0`;
    //!!END
}

/* ========================================================================= */
/* ====================== DO NOT EDIT BELOW THIS LINE ====================== */
/* ========================================================================= */

// ===== THEME CONTROL

// For changing one theme button's styling to indicate which theme is selected

function toggleButtonSelection(themeName, selected) {
    const btn = document.getElementById(`theme-button-${themeName}`);
    if (btn) {
        if (selected) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    }
}

// Use a particular theme

function setTheme(themeName) {
    // Clear previous selection so buttons don't get stuck in selected state
    resetTheme()

    // Remember user's selection by storing it in their browser
    storeTheme(themeName);

    // Apply the theme to the page document
    document.documentElement.className = `theme-${themeName}`;

    // Show which button is selected
    toggleButtonSelection(themeName, true);
}

// Use default theme

function resetTheme() {
    // Remove selection styling from all buttons
    toggleButtonSelection('dragon', false);
    toggleButtonSelection('griffin', false);
    toggleButtonSelection('wizard', false);

    // Set default theme so header and footer are contrast colors
    document.documentElement.className = `theme-none`;
}

// For adding event listeners on the theme buttons

function addThemeEventListeners() {
    const themeNames = ['dragon', 'griffin', 'wizard'];
    themeNames.forEach(themeName => {
        const button = document.getElementById(`theme-button-${themeName}`);
        button.addEventListener('click', () => setTheme(themeName));
    });
}

// ===== NAME CONTROL

// For assigning change event to input field

function assignChangeEvent(inputId, handleChange) {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('input', (event) => {
            handleChange(event.target.value);
        });
    }
}

// For setting value on input field

function setInputValue(inputId, value) {
    const input = document.getElementById(inputId);
    if (input) {
        input.value = value;
    }
}

// For resetting the display name to empty string

function resetName() {
    setInputValue('display-name', '');
}

// ===== CLEAR ALL

// For the clear/reset button

function clearAll() {
    // Remove from browser storage
    clearTheme();
    clearName();

    // Reset the page
    resetTheme();
    resetName();
}

// For adding click event listener on the Clear All button

function addClearAllEventListener() {
    const button = document.getElementById("clear-all");
    button.addEventListener('click', clearAll);
}

// ===== INITIALIZE PAGE

// For setting a theme when the page loads (called by body's onload event)

function initializePage() {
    // Set default theme so header & footer have dark backgrounds
    resetTheme();

    // Restore user's previous theme selection, if it exists
    restoreTheme();

    // Assign event to name input
    assignChangeEvent('display-name', storeName);

    // Restore user's previous name selection, if it exists
    restoreName();

    // Add event listeners
    addThemeEventListeners();
    addClearAllEventListener();
}

window.addEventListener('DOMContentLoaded', initializePage);
