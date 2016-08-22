/**
 * Created by User on 2016-08-07.
 */
import React from 'react';

class Search extends React.Component{

    render() {
        console.log('test', this.state);
        return (
              <div>
                    <h2>Hey, I am Search!</h2>


                    's last gist is
                    
                    
                    <h3 >{this.props.url}</h3>
                    

            </div>
        );
    }
}

export default Search;
