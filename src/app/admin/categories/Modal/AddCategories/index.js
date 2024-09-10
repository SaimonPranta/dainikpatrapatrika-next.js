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
        e.preventDefault();
        if (!input.label || !input.route) {
            if (select.categoriesID) {
                return;
            }
        }
        fetch(`${BACKEND_URL}/admin/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...input, ...select }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    if (select.categoriesID) {
                        setCategories((state) => {
                            const updateState = state.map((item) => {
                                if (select.categoriesID === item._id) {
                                    return data.data
                                }
                                return item
                            })
                            return [...updateState]
                        })
                    } else {
                        setCategories((state) => {
                            return [...state, data.data];
                        });
                    }

                    close();
                }
            }).catch((error) => {})
    };

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
                    <div className='button-container'>
                        <button type='submit'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Index;