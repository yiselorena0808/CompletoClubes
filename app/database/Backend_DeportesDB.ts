import { Client } from 'pg'

const Clubes = new Client({
    port: 5432,
    host: 'localhost',
    password: 'root',
    user: 'postgres',
    database: 'Clubes'
})
Clubes.connect()
export default Clubes