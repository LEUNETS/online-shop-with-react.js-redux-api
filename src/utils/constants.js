export const BASE_URL = "https://api.escuelajs.co/api/v1";



// import axios from 'axios';

// export const BASE_URL = "https://api.escuelajs.co/api/v1";

// // Функция, которая получает данные из API и возвращает обрезанный массив с максимальным количеством элементов, равным limit (в данном случае 5)
// export const fetchData = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/https://api.escuelajs.co/api/v1`);
    
//     // Обрезаем массив до 5 элементов
//     const limitedData = response.data.slice(0, 5);

//     return limitedData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Можно обработать ошибку здесь или передать дальше
//   }
// };