//try-catch in JS

const userName = "Shashank";

try {
    if (userName === "") {
        throw new Error("User name cannot be blank");
        }
        console.log("User name is valid");
        } catch (error) {
            console.log(error.message);
            } finally {
                console.log("This will always run");
                }

