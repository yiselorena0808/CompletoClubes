import { Client } from 'pg'

const BackendClubes = new Client({
    port: 5432,
    host: 'localhost',
    password: 'root',
    user: 'postgres',
    database: 'Clubes'
})
BackendClubes.connect()
export default BackendClubes