const baseUrl = "http://localhost:3000";

export const getData = async () => {
    try {
        const response = await fetch(`${baseUrl}/blog/get-all`);
        console.log(response);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
};