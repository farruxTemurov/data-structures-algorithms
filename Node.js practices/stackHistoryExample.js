class Stack {
    constructor() {
        this.historyStack = [];
        this.forwardStack = [];
    }

    visitPage(url) {
        this.historyStack.push(url);
        this.forwardStack = []; //Gets the index of the last element (since arrays are zero-indexed).
        console.log(`Visited: ${url}`);
    }

    goBack() {
        if (this.historyStack.length > 1) {
            const currentPage = this.historyStack.pop();    // remove the current page from history stack
            this.forwardStack.push(currentPage);            // add the current page to forward stack
            console.log(`Back to: ${this.historyStack[this.historyStack.length - 1]}`);
        } else {
            console.log('No page to go back to');
        }
    }

    goForward() {
        if (this.forwardStack.length > 0) {
            const nextPage = this.forwardStack.pop();    // remove the next page from forward stack
            this.historyStack.push(nextPage);            // add the next page to history stack
            console.log(`Forward to: ${nextPage}`);
        } else {
            console.log('No page to go forward to');
        }
    }
}

let stack = new Stack();
stack.visitPage('google.com'); // Visited: google.com
stack.visitPage('youtube.com'); // Visited: youtube.com
stack.visitPage('facebook.com'); // Visited: facebook.com
stack.visitPage('twitter.com'); // Visited: twitter.com

stack.goBack(); 
stack.goBack(); 
stack.goBack(); 
stack.goForward();