//LOCAL/SESSION STORAGE
/* ================================ PHASE 1 ================================ */

//!!START SILENT
// set the localStorage theme key name to a constant to prevent spelling
    // errors
    const THEME_KEY = 'theme';

    //!!END
    // For storing user's theme selection in the browser
    function storeTheme(themeName) {
        //!!START
        window.localStorage.setItem(THEME_KEY, themeName);
        //!!END
    }

    // For restoring theme, if selected by the user in the past
    function restoreTheme() {
        //!!START
        const storedTheme = window.localStorage.getItem(THEME_KEY);
        if (storedTheme) {
            setTheme(storedTheme);
        }
        //!!END
    }

    // For clearing theme selection from the browser's storage (reset to default)

    function clearTheme() {
        //!!START
        window.localStorage.removeItem(THEME_KEY);
        //!!END
    }

    /* ================================ PHASE 2 ================================ */

    //!!START SILENT
    // set the localStorage display name key name to a constant to prevent spelling
        // errors
    const NAME_KEY = "displayName";

    //!!END
    // For storing user's display name
    function storeName(displayName) {
        //!!START
        window.sessionStorage.setItem(NAME_KEY, displayName);
        //!!END
    }

    // For restoring user's display name, if set in the past
    function restoreName() {
        //!!START
        const storedName = window.sessionStorage.getItem(NAME_KEY);
        if (storedName) {
            setInputValue('display-name', storedName);
        }
        //!!END
    }

    // For clearing user's display name from browser storage
    function clearName() {
        //!!START
        window.sessionStorage.removeItem(NAME_KEY);
        //!!END
    }



//COOKIES
/* ============================== PHASE 1 + 2 ============================== */

//!!START SILENT
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

//!!START SILENT
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
