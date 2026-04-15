/* IT Portfolio Interactivity 
   Includes: Smooth Scroll, Typing Effect, and Networking Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Terminal Typing Effect for the Knowledge Base
    const terminalText = "Systems initialized... Protocols loaded... Ready for deployment.";
    const terminalElement = document.querySelector('#notes .font-mono p:last-child');
    
    if (terminalElement) {
        let i = 0;
        terminalElement.textContent = ""; // Clear existing text
        
        function typeWriter() {
            if (i < terminalText.length) {
                terminalElement.textContent += terminalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    // 2. Simple Subnetting Helper (Logic Example)
    // This function converts a standard IP (like 192.168.1.1) to Binary
    function ipToBinary(ip) {
        return ip.split('.')
                 .map(octet => parseInt(octet).toString(2).padStart(8, '0'))
                 .join('.');
    }

    // Log example to console so you can check it in Inspect Element (F12)
    console.log("Binary Conversion Test (192.168.1.1):", ipToBinary("192.168.1.1"));

    // 3. Dynamic Year Update for Footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = &copy; ${currentYear} | Built with HTML, Tailwind & JS;
    }
});
