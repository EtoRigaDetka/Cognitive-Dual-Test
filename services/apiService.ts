// This service sends data to a Google Apps Script Web App.
// You need to deploy the Apps Script and paste the generated URL here.
// Follow the instructions provided to set this up.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5C-MtNfa6CQFEHeMnP_T4AtgMfBlwEpcV1vcWE40qIPV4Gk-1XWLTitm6bgBkM9ThcQ/exec';

export const saveResults = async (data: any): Promise<void> => {
    console.log("Attempting to save the following data to Google Sheets:", data);

    try {
        // Using mode: 'no-cors' to bypass CORS issues often encountered with Google Apps Script.
        // This sends the request but doesn't allow reading the response, so we assume success
        // if the request doesn't throw a network error.
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
        });

        // In 'no-cors' mode, we can't check the response status. We proceed assuming success.
        console.log("Data submission request sent successfully (via no-cors).");
        return Promise.resolve();

    } catch (error) {
        console.error("Failed to send data to Google Sheets:", error);
        // This will now only catch network-level errors (e.g., user is offline).
        return Promise.reject(error);
    }
};
