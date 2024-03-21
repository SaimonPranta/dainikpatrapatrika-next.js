import React, { useEffect, useState } from 'react';
import "./style.scss"
import { BACKEND_URL } from '@/shared/constants/ulrList';
// import { getCookie } from "../../../../../Hooks/cookies";


const Index = ({ close, setCategories, select, setSelect }) => {
    const [input, setInput] = useState({})

    useEffect(() => {
        setInput({})
    }, [select])
 
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.label || !input.path) {
            if (select.categoriesID) {
                return
            }  
        }
 console.log("input ==>>", input)
        fetch(`${BACKEND_URL}/admin/categories`, {
            method: "POST",
            body: input,
            headers: {
                // authorization: `Bearer ${getCookie()}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setCategories((state) => {
                        return [...state, data.data]
                    })
                    close()
                }
            });

    }

    return (
        <div className='add-categories-modal' id='add-categories-modal'>
            <form className='form' onSubmit={handleSubmit}>
                <button className='clone-btn' type='button' onClick={() => {
                    close()
                    setSelect({
                        categoriesID: ""
                    })
                }}>x</button>
                <div className='item'>
                    <div>
                        <label> Categories Label</label>
                        <input type='text' name="label" value={input.label ? input.label : ""} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Categories  Path</label>
                        <input type='text' name="route" value={input.route ? input.route : ""} onChange={handleInputChange} />
                    </div>
                    {/* {!select.categoriesID && <div>
                        <label>Category Logo</label>
                        <div>
                            <input type='file' onChange={handleImgChange} />
                            {
                                input?.img && <img src={URL.createObjectURL(input.img)} />
                            }

                        </div>
                    </div>} */}
                    <div className='button-container'>
                        <button type='submit'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Index;