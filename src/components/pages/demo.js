import axios from 'axios'
import React, {Compononet} from 'react'

class Demo extends Component(){
    constructor(props){
        super(props)

        this.state = {
            tokenArray = [currentToken]
            newToken = ''
        }
    }

    tokenCall() {
        this.setState({
            newToken: newToken,
            tokenArray = [...this.tokenArray, newToken]
        })


    }

    renderTokens() {
        this.state.tokenArray.map(token => {
            return <div>
                
            </div>
        })
    }
}