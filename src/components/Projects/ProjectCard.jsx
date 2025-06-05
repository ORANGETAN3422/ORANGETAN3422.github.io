import React, { useEffect, useState } from 'react';
import './project-card.css';

function ProjectCard(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}card-info.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => setData(jsonData[props.jsonid]))
            .catch((error) => {
                console.error('Error fetching JSON:', error);
            });
    }, []);

    function buttonClick(hyperlink) {
        window.open(hyperlink, "_self")
    }

    return (
        <div className='card'>
            <div className='card-border' />
            {!data ? 'Loading...' :
                <>
                     <input className='card-hitbox' onClick={() => { buttonClick(data.hyperlink) }} type='button' /> 
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </>
            }
        </div>
    )
}

export default ProjectCard;