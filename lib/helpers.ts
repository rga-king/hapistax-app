  export function sanitizeText(text: string) {
    return text.trim().replace(/\s+/g, ' ');
  }