'use strict';

// Add event listener
function onEvent(event, element, callback) {
    if (element) {
        element.addEventListener(event, callback);
    } else {
        console.error('Element is not defined');
    }
}
  
  // Get HTML element by id
  function getElement(selector, parent = document) {
    return parent.getElementById(selector);
  }
  
  // Select HTML element
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // Get a (node) list of HTML elements as array
  function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }
  
  // Print
  function print(arg) {
    console.log(arg);
  }
  
  // Sleep
  function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  
  // Generate random number between - and including - 'min' and 'max'
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Filter array
  function filterArray(array, callback) {
    return array.filter(callback);
  }
  
  // Create an HTML element
  function create(element, parent = document) {
    return parent.createElement(element);
  }
  
const acceptButton = select('.cookies-button-accept');
const settingsButton = select('.cookies-button-settings');
const saveSettinsButton = select('.cookies-button-save');
const backgroundCookies = select('.cookies-background-cookies');
const backgroundSettings = select('.cookies-background-settings');
const cookiesField = select('.cookies-field');
const cookies = select('.cookies');
const cookiesSettings = select('.cookies-settings');
const browserCheck = select('.switch-input-browser');
const operationSystemCheck = select('.switch-input-operation-system');
const screenWidthCheck = select('.switch-input-screen-width');
const screenHeightCheck = select('.switch-input-screen-height');
const container = select('.container');
  
  let browserLabel = encodeURIComponent("Browser");
  let browserName = encodeURIComponent(getBrowser());
  
  let operationSystemLabel = encodeURIComponent("Operation system");
  let operationSystemName = encodeURIComponent(getOperationSystem());
  
  let screenWidthLabel = encodeURIComponent("Screen width");
  let screenWidthName = encodeURIComponent(getScreenWidth());
  
  let screenHeightLabel = encodeURIComponent("Screen height");
  let screenHeightName = encodeURIComponent(getScreenHeight());
  
  let lifetime = 15;

  function setCookie() {
    if (browserCheck.checked) {
      document.cookie = `${browserLabel}=${browserName}; max-age=${lifetime}`;
    } else {
      document.cookie = `${browserLabel}=Disabled; max-age=${lifetime}`;
    }
    if (operationSystemCheck.checked) {
      document.cookie = `${operationSystemLabel}=${operationSystemName}; max-age=${lifetime}`;
    } else {
      document.cookie = `${operationSystemLabel}=Disabled; max-age=${lifetime}`;
    }
    if (screenWidthCheck.checked) {
      document.cookie = `${screenWidthLabel}=${screenWidthName}; max-age=${lifetime}`;
    } else {
      document.cookie = `${screenWidthLabel}=Disabled; max-age=${lifetime}`;
    }
    if (screenHeightCheck.checked) {
      document.cookie = `${screenHeightLabel}=${screenHeightName}; max-age=${lifetime}`;
    } else {
      document.cookie = `${screenHeightLabel}=Disabled; max-age=${lifetime}`;
    }
  }
  
  function startCountingSeconds() {
    sleep(15000).then(() => {
      console.log(`Cookies expired`);
    });
  }

  function showFirstCookiesModal() {
    container.classList.add('blure');
    cookies.classList.remove('hidden');
  }
  
  function hideFirstCookiesModal() {
    container.classList.remove('blure');
    cookies.classList.add('hidden');
  }
  
  function showSettingsModal() {
    container.classList.add('blure');
    cookiesSettings.classList.remove('hidden');
  }
  
  function hideSettingsModal() {
    container.classList.remove('blure');
    cookiesSettings.classList.add('hidden');
  }

  function startCountingSeconds() {
    sleep(20000).then(() => {
      console.log(`Cookies dead`);
    });
  }

  function getCookie() {
    let cookiesList = decodeURIComponent(document.cookie).split("; ");
    console.log(`Browser: ${cookiesList[0].split("=")[1]}`);
    console.log(`Operation system: ${cookiesList[1].split("=")[1]}`);
    console.log(`Screen width: ${cookiesList[2].split("=")[1]}`);
    console.log(`Screen height: ${cookiesList[3].split("=")[1]}`);
  }

  function getOperationSystem() {
    const operationSystem = navigator.userAgent;
  
    const operationSystemPatterns = {
    Windows: /Windows/,
    Mac: /Mac/,
    Linux: /Linux/,
    Android: /Android/,
    iOS: /iPad|iPhone|iPod/,
    };
  
    const matchingOperationSystem = Object.keys(operationSystemPatterns).find((operationSystem) =>
    operationSystemPatterns[operationSystem].test(operationSystem)
    );
  
    return matchingOperationSystem || "Unknown";
  }

  function getBrowser() {
    const userAgent = navigator.userAgent;
  
    const browserPatterns = {
    Chrome: /Chrome/,
    Edge: /Edg/,
    Firefox: /Firefox/,
    Safari: /Safari/,
    Opera: /Opera/,
    };
  
    const matchingBrowser = Object.keys(browserPatterns).find((browser) =>
      browserPatterns[browser].test(userAgent)
    );
  
    return matchingBrowser || "Unknown";
  }
  
  function getScreenWidth() {
    return screen.width;
  }
  
  function getScreenHeight() {
    return screen.height;
  }
  
  onEvent("load", window, () => {
    if (document.cookie) {
      getCookie();
    } else {
      sleep(5000).then(() => {
        showFirstCookiesModal();
      });
    }
  });
  
  acceptButton.addEventListener("click", function() {
    hideFirstCookiesModal();
    setCookie();
    startCountingSeconds();
    console.log(document.cookie ? "Cookies set correctly" : "No cookies available");
  });
  
  onEvent("click", settingsButton, function()  {
    hideFirstCookiesModal();
    showSettingsModal();
  });
  
  onEvent("click", saveSettinsButton, function() {
    hideSettingsModal();
    setCookie();
    getCookie();
    startCountingSeconds();
  });

