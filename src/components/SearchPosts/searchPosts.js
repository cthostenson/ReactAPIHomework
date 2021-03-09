import React, {Component} from 'react';
import Post from "../Post/Post";
import axios from "axios";
import { Button, TextField } from '@material-ui/core';

export class SearchPosts extends Component {
    postsEndpoint = 'http://mysite.com/wp-json/wp/v2/posts';

    state = {
        posts: [],
        isLoaded: false,
        search: "",
    }

    getPosts() {
        axios
            .get(this.postsEndpoint, {
                params: {
                    search: this.state.search,
                    per_page: 12,
                    _embed: 1,
                }
            })
            .then((res) => {
                console.log('Response', res);
                // return posts to the app/parent
                this.props.onSearchResult(res.data);
            })
            .catch((err) => {
                console.log('API error', err);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.search){
            this.getPosts();
        }
    }

    render() {
        return (
            <form className="Search" onSubmit={(event) => this.handleSubmit(event)}>
                <TextField
                    label="Search..."
                    value={this.state.search}
                    onChange={(event) => this.setState({search: event.target.value})}
                />
                <Button color="primary" variant="contained" type="submit">Get Posts</Button>
            </form>
        )
    }
}
