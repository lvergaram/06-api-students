import pg from 'pg'
import 'dotenv/config'


const {Pool} = pg
const connectionString = process.env.CONNECTION_STRING
console.log(connectionString)

export const pool = new Pool({
    connectionString,
    allowExitOnIdle:true
})

try {
    const {rows:response} = await pool.query('SELECT NOW()')
    console.log('DDBB CONECTADA')
    console.log(response)
} catch (error) {
    console.log(error)
}