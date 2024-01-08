window.addEventListener('load', function() {
    var checkInterval = setInterval(function() {
        let buttons = document.querySelectorAll('button, [role="button"]');

        let foundButton = Array.from(buttons).find(button => button.textContent.trim() === "Following");

        if (foundButton) {
            foundButton.click();
            clearInterval(checkInterval); // Stop checking once the button is found and clicked
        }
    }, 100); // Checks every 100 milliseconds (0.1 seconds) for a following button

    // Timeout to stop checking after 15 seconds to prevent the script running indefinitely
    setTimeout(function() {
        clearInterval(checkInterval);
    }, 15000); // 15 seconds
});
