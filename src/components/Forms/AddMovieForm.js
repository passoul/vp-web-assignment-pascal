import React from 'react';
import { connect } from 'react-redux'
import { addMovieToWatchlist } from '../../actions/movieActions'

import './AddMovieForm.css'

/**
 * The class component will help keeping some local state, like form inputs. It receives a Redux action as well. 
 * This way it can update the global state by dispatching the addMovieToWatchlist action.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: newMovie => dispatch(addMovieToWatchlist(newMovie))
    }
}

class connectAddMovieForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleInputVal: '',
            imageUrlInputVal: '',
            commentInputVal: '',
        }
        // bind this in the constructor so this becomes bound to the class methods when the component is initialized
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const inputVal = e.target.id + 'Val';
        this.setState({ [inputVal]: e.target.value });
    }
    
    handleSubmit(e){
        e.preventDefault();
        const { titleInputVal, imageUrlInputVal, commentInputVal } = this.state;

        const newMovie = {
            title: titleInputVal,
            image: imageUrlInputVal,
            comment: commentInputVal,
        }
        this.props.addMovie(newMovie);
        this.setState({
            titleInputVal: '',
            imageUrlInputVal: '',
            commentInputVal: '',
        })
    }

    render() {
        const { titleInputVal, imageUrlInputVal, commentInputVal } = this.state;
        return (
            <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        <h1>Add movie!</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-wrapper">
                                <label htmlFor="titleInput">TITLE:</label>
                                <input type="text" name="titleInput" id="titleInput" value={titleInputVal} onChange={this.handleChange}/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="imageUrlInput">IMAGE URL:</label>
                                <input type="text" name="imageUrlInput" id="imageUrlInput" value={imageUrlInputVal} onChange={this.handleChange}/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="commentInput">COMMENT:</label>
                                <textarea name="commentInput" id="commentInput" rows="10" value={commentInputVal} onChange={this.handleChange}></textarea>
                            </div>
                            <input type="submit" value="ADD MOVIE" className="btn" disabled={!titleInputVal} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const AddMovieForm = connect(null, mapDispatchToProps)(connectAddMovieForm)

export default AddMovieForm;
