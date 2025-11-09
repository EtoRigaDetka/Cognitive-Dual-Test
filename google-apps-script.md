const SHEET_ID = '1uTdrNoc1W847OxfQ07oNBur_CeoEIwvWo4zoNX2F7hA';
const SHEET_NAME = 'Results';

function doPost(e) {
  try {
    // Проверяем, что данные пришли
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No data received');
    }

    // Открываем таблицу
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error(`Sheet with name "${SHEET_NAME}" was not found.`);
    }

    // Парсим данные
    const data = JSON.parse(e.postData.contents);

    // Заголовки
    const headers = [
      'timestamp', 
      'email',
      'age',
      'gender', 
      'forwardMax', 
      'backwardMax', 
      'forwardTrials', 
      'backwardTrials', 
      'quiz'
    ];

    // Добавляем заголовки, если таблица пустая
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }
    
    // Формируем строку с данными
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.age || '',
      data.gender || '',
      data.forwardMax || 0,
      data.backwardMax || 0,
      JSON.stringify(data.forwardTrials || []),
      JSON.stringify(data.backwardTrials || []),
      JSON.stringify(data.quiz || [])
    ];

    // Добавляем строку в таблицу
    sheet.appendRow(newRow);

    // Возвращаем успех
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: 'success',
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Логируем ошибку
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // Возвращаем ошибку
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: 'error', 
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для тестирования
// Функция для тестирования с вашими реальными данными
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: "2025-11-09T21:02:54.999Z",
        email: "exemple@gmail.com",
        age: 22,
        gender: "Vīrietis",
        forwardMax: 0,
        backwardMax: 0,
        forwardTrials: [
          {
            length: 3,
            sequence: [5, 8, 2],
            response: "",
            correct: false
          },
          {
            length: 3,
            sequence: [6, 9, 4],
            response: "",
            correct: false
          }
        ],
        backwardTrials: [
          {
            length: 2,
            sequence: [2, 4],
            response: "",
            correct: false
          },
          {
            length: 2,
            sequence: [5, 8],
            response: "",
            correct: false
          }
        ],
        quiz: [
          {
            imageNr: 1,
            questionNr: 1,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 2,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 3,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 4,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 5,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 6,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 7,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 1,
            questionNr: 8,
            answer: 1,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 1,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 2,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 3,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 4,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 5,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 6,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 7,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 2,
            questionNr: 8,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 1,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 2,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 3,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 4,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 5,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 6,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 7,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 3,
            questionNr: 8,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 1,
            answer: 1,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 2,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 3,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 4,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 5,
            answer: 1,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 6,
            answer: 1,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 7,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 4,
            questionNr: 8,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 1,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 2,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 3,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 4,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 5,
            answer: 5,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 6,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 7,
            answer: 3,
            confidence: 2
          },
          {
            imageNr: 5,
            questionNr: 8,
            answer: 3,
            confidence: 2
          }
        ]
      })
    }
  };
  
  Logger.log('=== TESTING doPost FUNCTION ===');
  Logger.log('Input data: ' + testData.postData.contents);
  
  const response = doPost(testData);
  const responseContent = response.getContent();
  
  Logger.log('=== RESPONSE ===');
  Logger.log(responseContent);
  
  const result = JSON.parse(responseContent);
  if (result.result === 'success') {
    Logger.log('✅ TEST PASSED: Data saved successfully!');
  } else {
    Logger.log('❌ TEST FAILED: ' + result.message);
  }
  
  return result;
}