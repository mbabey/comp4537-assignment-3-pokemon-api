import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './styles/search-styles.css'

function Search({ selectedTypes, setSelectedTypes, setQueryName }) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json')
            setTypes(res.data.map(type => type.english));
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
            e.target.parentNode.classList.add("child-checked");
        } else {
            setSelectedTypes(selectedTypes.filter(type => type !== value));
            e.target.parentNode.classList.remove("child-checked");
        }
    }

    const handleNameChange = (e) => {
        setQueryName(e.target.value);
    }

    return (
        <div className={"search-field-container"}>
            <h4>Select Types to Filter by Type</h4>
            <div className={"type-checkboxes-container"}>
                {
                    types.map(type =>
                        <div key={type} className={`type-checkbox ${type}`}>
                            <input
                                type="checkbox"
                                value={type}
                                id={type}
                                onChange={handleChange}
                            />
                            <label htmlFor={type}>{type}</label>
                        </div>)
                }
            </div>
            <h4>Enter a Name to Query by Name</h4>
            <div className={"query-name-container"}>
                <input
                    type="text"
                    id="query-name"
                    placeholder="Enter a pokemon's name to search."
                    onChange={handleNameChange}
                />
            </div>
        </div>
    )
}

export default Search