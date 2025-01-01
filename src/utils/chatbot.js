import { chatPatterns } from './patterns.js';

export class ChatBot {
    constructor() {
        this.patterns = chatPatterns;
    }

    getResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        
        if (!input) {
            return "Please say something!";
        }
        
        for (const [pattern, responses] of Object.entries(this.patterns)) {
            if (new RegExp(pattern).test(input)) {
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        
        return "I'm not sure how to respond to that. Try asking something else!";
    }
}