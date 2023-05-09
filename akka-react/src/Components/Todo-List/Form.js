// Ma Todo-list !

import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import ItemForm01 from './ItemForm01';

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coder avec React", id: uuidv4()}
    ])

    const [stateInput, setStateInput] = useState();
    const linkedInput = e => {
        console.log(e);
        setStateInput(e);
    }
    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr];

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr);
        
        setStateInput('');
    }

    console.log(uuidv4());

    const deleteElement = id => {
        console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    return(

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <h1>Notre TODO-LIST</h1><br />
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="mt-3 form-label">Chose à faire :</label><br />
                <input value={stateInput} onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo"/>
                <button className="mt-2 btn btn-primary">Envoyer</button>
            </form><br />

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return(
                        <ItemForm01 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    )
                })}
            </ul>

        </div>

    );

}
