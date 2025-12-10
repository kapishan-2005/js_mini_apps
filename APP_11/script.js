function getUserFromServer() {
    return new Promise((resolve) => {
        console.log("Fetching user...");
        setTimeout(() => {
            const success = false;
            if (success) {
                resolve({
                    id: 101,
                    name: "sajirupan",
                    role:"bit_Student"
                });
            }
        },2000);
    });
}
// getUserFromServer()
// .then(user => {
//     console.log("User loaded:", user);
//     console.log("Welcome:", user.name);
// })
// .catch(error => {
//     console.log("Error:", error);
// });
async function showUser() {
    console.log("Loading user...");
    const user = await getUserFromServer();
    console.log("User Loaded", user);
    console.log("Welcome", user.name);
}

showUser();