import React from 'react';

export const AddMovieForm = () => {

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <h1>Codest Movies!</h1>
                    <h2>Add movie!</h2>
                    <div className="input-wrapper">
                        <div>TITLE:</div>
                        <input type="text"/>
                    </div>
                    <div className="input-wrapper">
                        <div>IMAGE URL:</div>
                        <input type="text" />
                    </div>
                    <div className="input-wrapper">
                        <div>COMMENT:</div>
                        <input type="text" />
                    </div>
                    <input type="button" value="ADD MOVIE" className="btn" />
                </div>
            </div>
        </div>
    )
}
