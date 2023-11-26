import axios from "axios";
let URL = "http://localhost:5010/api/v1"



export async function getAllStudents() {

    try {

        let students = await axios.get(`${URL}/students`)

        if(students) {
            return students
        } else {
            return []
        }

    } catch (error) {
        return []
    }

}



export async function deleteStudentById(id) {
    try {
        const response = await axios.delete(`${URL}/delete-student/${id}`);
        
        if (response.data) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        // Log the error or handle it appropriately
        console.error('Error deleting student:', error);

        // Rethrow the error if you want to propagate it further
        throw error;

        // Alternatively, you can return a custom error response
        // return { error: 'Failed to delete student' };
    }
}


export async function createStudent(body) {
    try {
        const response = await axios.post(`${URL}/create-student`, body);
        
        if (response.data) {
            return response.data;
        } else {
            // Handle the case where response.data is falsy (empty or undefined)
            return [];
        }
    } catch (error) {
        // Log the error or handle it appropriately
        console.error('Error creating student:', error);

        // Rethrow the error if you want to propagate it further
        throw error;

        // Alternatively, you can return a custom error response
        // return { error: 'Failed to create student' };
    }
}



export async function updateStudent(id, data) {
    try {
        const response = await axios.put(`${URL}/update-student/${id}`, data);
        
        if (response.data) {
            return response.data;
        } else {
            // Handle the case where response.data is falsy (empty or undefined)
            return [];
        }
    } catch (error) {
        // Log the error or handle it appropriately
        console.error('Error updating student:', error);

        // Rethrow the error if you want to propagate it further
        throw error;

        // Alternatively, you can return a custom error response
        // return { error: 'Failed to create student' };
    }
}

export async function getStudentById(id) {

    try {

        let student = await axios.get(`${URL}/student/${id}`)

        if(student) {
            return student
        } else {
            return {}
        }

    } catch (error) {
        return {}
    }

}
