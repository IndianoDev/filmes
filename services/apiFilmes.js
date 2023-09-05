import axios from "axios"

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWI2ODVkNDE2YmJlNjk3NjgyNmM5ODJiNzA2MTlkNSIsInN1YiI6IjY0MzQ5MDA5ZDA0ZDFhMDBiZDgzMTA3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DArdbyqJaR2NcU4YeCn88xZmr56F1clLvnKbqVQJJY'
    }
})

export default apiFilmes