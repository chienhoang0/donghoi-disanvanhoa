function copyLinkToClipboard() {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)
      .then(() => {
        console.log('Link copied to clipboard');
        // Optionally, you can provide visual feedback to the user, e.g., change the button text
        this.textContent = 'Link Copied!'; // 'this' refers to the button element
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
        // Optionally, display an error message to the user
        alert('Failed to copy link. Please try again.');
      });
  }