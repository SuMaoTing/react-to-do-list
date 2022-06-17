import React from "react";
import styles from './index.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'',
            task:[
                {
                    id: 1655453319099,
                    name: "應數作業",
                    check: true,
                },
                {
                    id: 1090294902101,
                    name: "洗碗",
                    check: false,
                },
                {
                    id: 109029490096,
                    name: "背譜",
                    check: false,
                }
            ]
        };
        this.checkHandler = this.checkHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    checkHandler(id){
        const newList = this.state.task.map((el)=>{
            if(el.id === id) el.check = !el.check;
            return el;
        })
        this.setState({task:newList});
    }

    deleteHandler(id){
        const newList = this.state.task.filter((el)=>(el.id !== id))
        this.setState({task:newList});
    }

    addHandler(){
        if(this.state.input !== ""){
            this.setState({input: '', 
                task:this.state.task.concat([
                {
                    id:Date.now(),
                    name:this.state.input,
                    check: false
                }
            ])})
        }
    }

    inputHandler(e){
        this.setState({input: e.target.value})
    }

    render() {
        return(
            <div className="Container">
                <div className="AddBox">
                    <input type='text' value={this.state.input} onChange={this.inputHandler}/>
                    <button onClick={this.addHandler}>add</button>
                </div>    
                {this.state.task.map((el)=>(
                    <form className="CheckBox" key={el.id}>
                        <input type="checkbox" checked={el.check} onChange={()=>this.checkHandler(el.id)}/>
                        <p className={`task ${el.check ? "task-checked" : ""}`}>{el.name}</p>
                        <input className="deleteButton" type="button" value="delete" onClick={()=>this.deleteHandler(el.id)}/>
                    </form>
                ))}
            </div>
        )
    }
} 
export default TodoList;