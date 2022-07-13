import React, {Component} from 'react';

import Comments from "./conponents/comments/Comments"
import Posts from "./conponents/posts/Posts"

class App extends Component {



  render() {
    return (
        <div>
            <Posts/>
          {/*<Comments/>*/}
        </div>
    );
  }
}

export default App;

