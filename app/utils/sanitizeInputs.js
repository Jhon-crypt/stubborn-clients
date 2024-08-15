function sanitizeInput(input) {
    if (typeof input !== 'string') {
        return input; 
    }

    // Trim the input to remove extra spaces
    let sanitized = input.trim();

    // Replace potentially dangerous characters with HTML entities
    sanitized = sanitized.replace(/[<>&'"]/g, (char) => {
        switch (char) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            default: return char;
        }
    });

    
    sanitized = sanitized.replace(/['";]/g, '');
    sanitized = sanitized.replace(/--/g, '');  // Remove SQL comments
    sanitized = sanitized.replace(/\\/g, '');  // Remove backslashes
    return sanitized;
}

export default sanitizeInput
