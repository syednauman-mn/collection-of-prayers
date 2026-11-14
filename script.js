
// ==========================================
// A COLLECTION OF PRAYERS — MAIN JAVASCRIPT
// ==========================================


// ---------- GET ALL SCREENS ----------

const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const time = document.getElementById("time");
const collection = document.getElementById("collection");


// ---------- OPENING ELEMENTS ----------

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const continueButton = document.getElementById("continueButton");
const duasButton = document.getElementById("duasButton");


// ---------- CHAPTER 01: HEART ----------

const heartPageOne = document.getElementById("heartPageOne");
const heartPageTwo = document.getElementById("heartPageTwo");

const nextHeartPage = document.getElementById("nextHeartPage");
const returnCollection = document.getElementById("returnCollection");


// ---------- CHAPTER 02: IMAAN ----------

const imaanPageOne = document.getElementById("imaanPageOne");
const imaanPageTwo = document.getElementById("imaanPageTwo");

const nextImaanPage = document.getElementById("nextImaanPage");
const returnImaanCollection = document.getElementById("returnImaanCollection");


// ---------- CHAPTER 03: PROTECTION ----------

const protectionPageOne = document.getElementById("protectionPageOne");
const protectionPageTwo = document.getElementById("protectionPageTwo");

const nextProtectionPage = document.getElementById("nextProtectionPage");
const returnProtectionCollection = document.getElementById("returnProtectionCollection");


// ---------- CHAPTER 04: FUTURE ----------

const futurePageOne = document.getElementById("futurePageOne");
const futurePageTwo = document.getElementById("futurePageTwo");

const nextFuturePage = document.getElementById("nextFuturePage");
const returnFutureCollection = document.getElementById("returnFutureCollection");


// ---------- CHAPTER 05: PERSONAL DUA ----------

const personalPage = document.getElementById("personalPage");


// ---------- FINAL THOUGHT PAGE ----------

const finalThoughtPage = document.getElementById("finalThoughtPage");
const finalThoughtButton = document.getElementById("finalThoughtButton");
const closeLetterButton = document.getElementById("closeLetterButton");


// ==========================================
// SCREEN NAVIGATION FUNCTION
// ==========================================

function showScreen(nextScreen) {

    if (!nextScreen) return;

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    nextScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// OPENING → LETTER
// ==========================================

if (openButton) {

    openButton.addEventListener("click", () => {

        if (envelope) {
            envelope.classList.add("open");
        }

        setTimeout(() => {
            showScreen(letter);
        }, 650);

    });

}


// ==========================================
// LETTER → DAYS COUNTER
// ==========================================

if (continueButton) {

    continueButton.addEventListener("click", () => {
        showScreen(time);
    });

}


// ==========================================
// DAYS COUNTER
// ==========================================

function updateDaysCounter() {

    const birthDate = Date.UTC(2010, 10, 22);

    const today = new Date();

    const currentDate = Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const totalDays = Math.floor(
        (currentDate - birthDate) / millisecondsPerDay
    );

    const daysElement = document.getElementById("daysCount");

    if (daysElement) {
        daysElement.textContent = totalDays.toLocaleString("en-US");
    }

}

updateDaysCounter();

setInterval(updateDaysCounter, 60000);


// ==========================================
// DAYS COUNTER → COLLECTION
// ==========================================

if (duasButton) {

    duasButton.addEventListener("click", () => {
        showScreen(collection);
    });

}


// ==========================================
// COLLECTION → CHAPTERS
// ==========================================

document.querySelectorAll("[data-chapter]").forEach(card => {

    card.addEventListener("click", () => {

        const chapter = card.dataset.chapter;

        if (chapter === "heart") {
            showScreen(heartPageOne);
        }

        else if (chapter === "imaan") {
            showScreen(imaanPageOne);
        }

        else if (chapter === "protection") {
            showScreen(protectionPageOne);
        }

        else if (chapter === "future") {
            showScreen(futurePageOne);
        }

        else if (chapter === "personal") {
            showScreen(personalPage);
        }

    });

});


// ==========================================
// CHAPTER 01: HEART NAVIGATION
// ==========================================

if (nextHeartPage) {
    nextHeartPage.addEventListener("click", () => {
        showScreen(heartPageTwo);
    });
}

if (returnCollection) {
    returnCollection.addEventListener("click", () => {
        showScreen(collection);
    });
}


// ==========================================
// CHAPTER 02: IMAAN NAVIGATION
// ==========================================

if (nextImaanPage) {
    nextImaanPage.addEventListener("click", () => {
        showScreen(imaanPageTwo);
    });
}

if (returnImaanCollection) {
    returnImaanCollection.addEventListener("click", () => {
        showScreen(collection);
    });
}


// ==========================================
// CHAPTER 03: PROTECTION NAVIGATION
// ==========================================

if (nextProtectionPage) {
    nextProtectionPage.addEventListener("click", () => {
        showScreen(protectionPageTwo);
    });
}

if (returnProtectionCollection) {
    returnProtectionCollection.addEventListener("click", () => {
        showScreen(collection);
    });
}


// ==========================================
// CHAPTER 04: FUTURE NAVIGATION
// ==========================================

if (nextFuturePage) {
    nextFuturePage.addEventListener("click", () => {
        showScreen(futurePageTwo);
    });
}

if (returnFutureCollection) {
    returnFutureCollection.addEventListener("click", () => {
        showScreen(collection);
    });
}


// ==========================================
// CHAPTER 05 → FINAL THOUGHT
// ==========================================

if (finalThoughtButton) {

    finalThoughtButton.addEventListener("click", () => {
        showScreen(finalThoughtPage);
    });

}


// ==========================================
// FINAL THOUGHT → ORIGINAL OPENING
// ==========================================

if (closeLetterButton) {

    closeLetterButton.addEventListener("click", () => {
        showScreen(opening);
    });

}
