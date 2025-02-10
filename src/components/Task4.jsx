import React, { useState } from 'react'
import './table.css'
import { MdModeEdit } from "react-icons/md";

function Task4() {
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)
    const [addExperience, setExperiecne] = useState([])
    const [selected, setSelected] = useState(true)
    const [employee, setEmployee] = useState({
        id: Date.now(),
        empId: '',
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        role: '',
    })
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        if (editId) {
            const updatedList = list.map((item) =>
                item.id === editId ? { ...employee, id: editId } : item)
            setList(updatedList)
            setEditId(null)
        }
        else {
            const array = { ...employee, id: Date.now() };
            setList([...list, array]);
        }
        setEmployee(
            {
                empId: "",
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
                select: ""
            }
        )

    }
    const addEmp = () => {
        const updateExpeience = [...addExperience, { company: '', role: '', experience: '', startDate: '', endDate: '' }]
        setExperiecne(updateExpeience)
    }
    console.log(employee.addExperience)
    return (

        <div>
            <div className='box'>
                <div className='emp-experience1'>
                    <div className='container1'>

                        <form className='form' onSubmit={handleSubmit}>

                            <div> <input type='text' placeholder='Id' name='empId' value={employee.empId}
                                onChange={handleChange} />
                                <input type='text' placeholder='First Name' name='firstname' value={employee.firstname}
                                    onChange={handleChange} />
                                <input type='text' placeholder='Last Name' name='lastname' value={employee.lastname}
                                    onChange={handleChange} />
                            </div>
                            <div>

                                <input type='text' placeholder='Email' name='email' value={employee.email}
                                    onChange={handleChange} />
                                     <input type='text' placeholder='gender' name='gender' value={employee.gender}
                                    onChange={handleChange} />
                                     <input type='text' placeholder='Role' name='role' value={employee.role}
                                    onChange={handleChange} />
                            </div>
                            <div id='submit'>
                                <button type='submit'  id='btn-submit'>Submit</button>

                            </div>
                        </form>

                    </div>
                </div>
                <div className='emp-experience'>
                    <div className='container'>
                        <div className='title1'><h4>Add Experience</h4>
                            <span className='expand'>+expand</span></div>
                        {
                            selected &&
                            <div>
                                {
                                    addExperience.map((add, i) => {
                                        return (
                                            <div className='experiecne'>
                                                <div className='experience'>
                                                    <input type='text' placeholder='Company' />
                                                    <input type='text' placeholder='Role' />
                                                    <input type='text' placeholder='Experience' />
                                                </div>
                                                <div className='date'>
                                                    <div> start date<input type='date' /></div>
                                                    <div style={{ paddingRight: '600px' }}>
                                                        end date <input type='date' /></div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        }
                        <button className='btn' onClick={addEmp}>+add</button>


                    </div>
                </div>
                {/* <div className='add-button'>
                <button id='add' >AddEmployee</button>
            </div> */}
                <div >
                    <table id='emp-table'>
                        <tr>
                            <th>Emp Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th></tr>
                        <tbody>
                            {list.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.empId}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.role}</td>
                                        <td><button>edit<MdModeEdit style={{ width: '30%' }} /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Task4
