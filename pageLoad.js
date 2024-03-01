function initPageLoad() {
    const appDiv = document.getElementById('app');

    function loadPage(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                appDiv.innerHTML = data; // Заменяем HTML внутри контейнера app новым содержимым

                // Если в ответе есть скрипт, добавляем его отдельно
                executeScriptFromResponse(data);
            })
            .catch(error => console.error('Error fetching page:', error));
    }

    // Вспомогательная функция для выполнения скрипта из ответа
    function executeScriptFromResponse(htmlResponse) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlResponse, 'text/html');
        const scripts = doc.querySelectorAll('script');

        scripts.forEach((oldScript) => {
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
            document.body.removeChild(newScript);
        });
    }

    document.querySelectorAll('.sidebar li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage(this.getAttribute('data-page'));
        });
    });
}

document.addEventListener("DOMContentLoaded", initPageLoad);