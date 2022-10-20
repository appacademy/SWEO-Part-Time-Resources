/* ============================== PHASE 1 + 2 ============================== */

const findCookieVal = (cookieName) => {
    const cookies = document.cookie;
    let cookieVal;

    const matchingCookie = cookies
        .split("; ")
        .find(cookie => cookie.indexOf(`${cookieName}=`) === 0);

    if (matchingCookie) {
        cookieVal = matchingCookie.split("=")[1];
    };

    return cookieVal;
};

// For storing user's theme selection in cookies
function storeTheme(themeName) {
    document.cookie = `theme=${themeName}; max-age=5`

}

// For restoring theme from cookies, if selected by the user in the past
function restoreTheme() {
    const storedTheme = findCookieVal("theme");

    if (storedTheme) {
        setTheme(storedTheme);
    }
}

// For clearing theme selection from cookies (reset to default)
function clearTheme() {
    document.cookie = "theme=; max-age=0"
}

/* ================================ PHASE 3 ================================ */

// For storing user's display name in cookies
function storeName(displayName) {
    document.cookie = `displayName=${displayName}`;
}

// For restoring user's display name from cookies, if set in the past
function restoreName() {
    const storedDisplayName = findCookieVal("displayName");

    if (storedDisplayName) {
        setInputValue("display-name", storedDisplayName);
    };
};

// For clearing user's display name from cookies
function clearName() {
    document.cookie = "displayName=; max-age=0";
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