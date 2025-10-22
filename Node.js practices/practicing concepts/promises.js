// A Promise in JavaScript is an object that 
// represents a value that might not be available yet, but will be at some point in the future — or it might fail.

function delayedAdd(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

delayedAdd(5, 7)
    .then(result => {
        console.log("First result " + result);
        return result * 2;
    }).then(doubled => {
        console.log("Doubled " + doubled);
    });

// greet function
async function meetAndGreet(name, millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
        .then(() => {
            console.log(`Hello, ${name}`);
        });
    return `Waited for ${millis} milliseconds`;
}

meetAndGreet("Farrukh", 2000).then(console.log);

// function to fetch users and posts

async function fetchUser(id, name) {
    return new Promise(res => {
        setTimeout(() => {
            console.log(`id: ${id}, name: ${name}`);
            res({ id, name });
        }, 1000);
    });
}

async function fetchPosts(...args) {
    return new Promise(res => {
        setTimeout(() => {
            console.log("User's posts:");
            args.forEach(post => console.log(post));
            res(args);
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching user...");
    console.log("Fetching posts...");

    const [user, posts] = await Promise.all([
        fetchUser(1, "Farrukh"),
        fetchPosts("Post 1", "Post 2", "Post 3")
    ]);

    console.log(`User: ${user.name}`);
    console.log("User's posts:");
    posts.forEach(post => console.log(post));

    return { user, posts };
}

displayData();




