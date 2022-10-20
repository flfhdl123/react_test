
import axios from "axios";
import {Component} from "react";


class App extends Component{

    state={
        date: "",
        version: "",
        number_of_calls: "",
    }

    api_call = async function() {
            let res = await axios({
                //request
                method: "get",
                url: "http://localhost:8080/date",
                responseType: "type"
            });
            console.log("api_call")

            let res2= JSON.parse(res.data);
            this.setState({date:res2["date"],
                version:res2["version"],
                number_of_calls: res2["number_of_calls"]
            })


    }

    componentDidMount() {
        console.log("DidMount")
        this.api_call();
    }

    render()
    {
        return (<div className="App">
            <header className="App-header">
                <p>
                    Hello, World!!
                </p>
                <input type="button" onClick={this.api_call.bind(this)}value="call"/>
                <span>

              <p>date: {this.state.date}</p>

              <p>version: {this.state.version}</p>

              <p>number_of_calls: {this.state.number_of_calls}</p>

        </span>

            </header>
        </div>
        )
    }





}








export default App;
