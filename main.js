function loadTopProducts() {
    fetch('http://ajax.local/bd.php') // Укажите здесь правильный путь к вашему PHP файлу
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('.top-products ul');
            list.innerHTML = ''; // Очищаем список перед добавлением новых элементов
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.description_article} - Sold: ${item.total_sold}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', loadTopProducts);