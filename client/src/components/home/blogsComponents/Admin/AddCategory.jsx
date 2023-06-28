import React from 'react'
import axios from 'axios';

function AddCategory({closePopup}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.querySelector('form')
        const formdata = new FormData(form)
        console.log(...formdata);
        // console.log(formdata.get("featured"));
       const data = {
        category : formdata.get("category")
       }
    
        axios.post("http://localhost:8000/api/add-category", data).then((data)=>{
            console.log(data.data);
        })
      };
  return (
    <div className='add_category' >
        <form action="" onSubmit={handleSubmit} >
            <input name='category' type="text" placeholder='enter category' />
            <button type='submit'>Add</button>
            <button onClick={closePopup} >Close</button>
        </form>
    </div>
  )
}

export default AddCategory