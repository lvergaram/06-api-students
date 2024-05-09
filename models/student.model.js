import {pool} from '../database/connection.js'

const findAll = async() => {
    const {rows} =await pool.query('SELECT * FROM STUDENTS')
    return rows
}

const findById = async(id) => {
    const query = {
        text: `
        SELECT * FROM STUDENTS
        WHERE ID=$1
        `,
        values: [id]
    }
    const {rows} = await pool.query(query)
    return rows

}

const findByRut = async(rut) => {
    const query = {
        text: `
        SELECT * FROM STUDENTS
        WHERE rut=$1
        `,
        values: [rut]
    }
    const {rows} = await pool.query(query)
    return rows

}

const create = async({nombre,rut,curso,nivel}) => {
    const query = {
        text: `
        INSERT INTO STUDENTS (nombre, rut,curso,nivel)
        VALUES ($1,$2,$3,$4)
        RETURNING *
        `,
        values: [nombre,rut,curso,nivel]
    }
    const {rows} = await pool.query(query)
    return rows
}

const update = async({id,nombre,rut,curso,nivel}) => {
    console.log({id,nombre,rut,curso,nivel})
    const query = {
        text: `
        UPDATE STUDENTS
        SET
          nombre = $2,
          rut = $3,
          curso = $4,
          nivel = $5
        WHERE ID = $1
        RETURNING *;
        `,
        values: [id,nombre,rut,curso,nivel]
    }
    const {rows} = await pool.query(query)
    return rows
}

const remove = async(id) => {
    console.log(id)
    const query = {
        text: `
        DELETE FROM STUDENTS
        WHERE id = $1
        RETURNING *
        `,
        values: [id]
    }
    const {rows} = await pool.query(query)
    return rows
}

export const Student = {
    findAll,
    findById,
    findByRut,
    create,
    update,
    remove
}
