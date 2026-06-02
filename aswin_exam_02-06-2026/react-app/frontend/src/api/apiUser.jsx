const baseUrl = "http://localhost:3000/home";

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
        console.error("Register User Error:", error);
        return null;
    }
};


export const getViewAll = async () => {

    try {
        const response = await fetch(`${baseUrl}/viewall`,
            { method: "GET" }
        );
        const data = await response.json();
        console.log("View All Response:", data);
        return data;

    } catch (error) {
        console.error("Get Profile Error:", error);
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
        console.error("Error:", error);
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
        console.error("Error:", error);
        return null;
    }
};