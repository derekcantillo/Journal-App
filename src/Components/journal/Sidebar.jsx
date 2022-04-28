import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const {name}=useSelector(state => state.auth)
    console.log(name)
    const dispatch=useDispatch()
    const handleLogout=()=>{
        dispatch(startLogout())
    }

    const handleAddNote=()=>{
        dispatch(startNewNote())
    }
  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar'>
            <h4 className='mt-1'>
                <i className='far fa-moon'></i>
                <span> {name}</span>
            </h4>

        <button className='btn' onClick={handleLogout}>
            Logout
        </button>
        </div>

        <div className='journal__new-entry' onClick={handleAddNote}>
            <i className='far fa-calendar-plus fa-5x'></i>
            <p className='mt-5'>  New Entry</p>

        </div>
    <JournalEntries/>
    </aside>
  )
}
