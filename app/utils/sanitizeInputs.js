export function sanitizeInput(input) {
    // Implement input sanitization logic
    // For example, remove or escape special characters, trim whitespace, etc.
    return input.trim().replace(/[<>&'"]/g, (char) => {
        switch (char) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case "'": return '&#39;';
            case '"': return '&quot;';
            default: return char;
        }
    });
}