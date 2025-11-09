// ВАЖНО: Замените 'YOUR_DEPLOYMENT_ID' на реальный ID вашего развертывания Google Apps Script.
// После каждого изменения в скрипте Google, вам нужно делать НОВОЕ развертывание, чтобы получить новый URL.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5C-MtNfa6CQFEHeMnP_T4AtgMfBlwEpcV1vcWE40qIPV4Gk-1XWLTitm6bgBkM9ThcQ/exec';

/**
 * Отправляет данные в Google Apps Script с использованием метода 'no-cors'.
 * 
 * ВАЖНО: Режим 'no-cors' является "односторонним" методом отправки.
 * Он позволяет отправить данные на сервер, который не настроен для CORS,
 * но при этом НЕ ПОЗВОЛЯЕТ узнать, были ли данные успешно обработаны.
 * Приложение может лишь определить, произошла ли сетевая ошибка при самой отправке.
 * Любые ошибки внутри самого Google Script не будут обнаружены.
 */
export const saveResults = async (data: any): Promise<void> => {
    console.log("Attempting to save data using 'no-cors' mode:", data);

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // "Fire and forget" request. We cannot read the server's response.
            headers: {
                // В режиме 'no-cors' отправка 'application/json' может вызывать CORS preflight.
                // Использование 'text/plain' позволяет избежать этого и является более надежным.
                // Google Apps Script сможет корректно обработать тело запроса.
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
        });

        // Поскольку мы не можем прочитать ответ сервера, мы можем только предположить,
        // что запрос был отправлен успешно, если не возникло сетевой ошибки.
        console.log("Data packet sent to Google Sheets. Success cannot be confirmed with 'no-cors'.");
        return Promise.resolve();

    } catch (error) {
        // Этот блок будет выполнен только в случае сетевой ошибки (например, нет интернета),
        // а не в случае ошибки на стороне сервера Google.
        console.error("A network error occurred while trying to send data:", error);
        return Promise.reject(error);
    }
};
