const baseUrl = "http://localhost:3000/user";

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${baseUrl}/create`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            }
        );
        const data = await response.json();
        console.log("Create User Response:", data);
        return data;

    } catch (error) {
        console.error("Create user error:", error);
        return null;
    }
};


export const readUsers = async () => {

    try {
        const response = await fetch(`${baseUrl}/read`,
            {
                method: "GET"
            }
        );
        const data = await response.json();
        //console.log("View All Response:", data);
        return data;

    } catch (error) {
        console.error("Read user error:", error);
        return null;
    }
};

export const updateUser = async (id, postData) => {
    try {
        const response = await fetch(`${baseUrl}/update/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData)
            }
        );
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Update user error:", error);
        return null;
    }
};


export const deleteUser = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/delete/${id}`,
            {
                method: "DELETE"
            }
        );
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Delete user error:", error);
        return null;
    }
};