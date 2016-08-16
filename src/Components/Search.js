/**
 * Created by User on 2016-08-07.
 */
import React from 'react';


var Search = React.createClass({
      getInitialState: function() {
            return {
            username: 'jjj',
            lastGistUrl: '',
            source : 'https://api.github.com/users/octocat/gists',
            searchResults : []
            };
        },
    
    componentDidMount: function() {
        this.serverRequest = $.get(this.state.source, function (result) {
        var lastGist = result[0];
        this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
        });
        }.bind(this));
 	},
  

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

    render : function(){
        console.log('test', this.state.searchResults);
        return (
              <div>
                    <h2>Hey, I am Search!</h2>


                    {this.state.username}'s last gist is
                    
                    
                    <h3 >{this.state.lastGistUrl}</h3>
                    

            </div>
        );
    }
});

export default Search;
