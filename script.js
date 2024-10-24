function updateText() {
    const intro = document.getElementById('intro').value;
    const content = document.getElementById('contentField').value;
    
    document.getElementById('heading').textContent = intro || 'Your Intro';
    document.getElementById('content').textContent = content || 'Your content will appear here.';
}

function validateIntro() {
    const introField = document.getElementById('intro');
    const words = introField.value.trim().split(/\s+/);
    if (words.length > 7) {
        introField.value = words.slice(0, 7).join(" ");
    }
}

function updateHeadingSize() {
    const size = document.getElementById('headingSize').value;
    document.getElementById('heading').style.fontSize = `${size}px`;
    document.getElementById('headingSizeValue').textContent = size;
}

function updateContentSize() {
    const size = document.getElementById('contentSize').value;
    document.getElementById('content').style.fontSize = `${size}px`;
    document.getElementById('contentSizeValue').textContent = size;
}

function downloadImage() {
    const box = document.getElementById('boxToDownload');
    const originalBg = box.style.backgroundColor;
    const originalColor = box.style.color;
    const originalBorderRadius = box.style.borderRadius;

    // Remove border radius temporarily
    box.style.borderRadius = '0';

    if (document.documentElement.classList.contains('dark-mode')) {
        box.style.backgroundColor = '#1a1a1a';
        box.style.color = '#ffffff';
    } else {
        box.style.backgroundColor = '#ffffff';
        box.style.color = '#000000';
    }

    html2canvas(box, {
        backgroundColor: null // This ensures transparency
    }).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'quick-post.png';
        link.href = canvas.toDataURL();
        link.click();

        // Restore original styles
        box.style.backgroundColor = originalBg;
        box.style.color = originalColor;
        box.style.borderRadius = originalBorderRadius;
    });
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('light-mode');
}

// Initial calls to set up sizes
updateHeadingSize();
updateContentSize();

// Add event listeners
document.getElementById('intro').addEventListener('input', validateIntro);
document.getElementById('headingSize').addEventListener('input', updateHeadingSize);
document.getElementById('contentSize').addEventListener('input', updateContentSize);
document.getElementById('dark-mode-toggle').addEventListener('change', toggleDarkMode);
