import React,{useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import Header from "../Components/Header2";



export default function Form(props){

    const history = useHistory();

    const formSchema = yup.object().shape({
        name: yup.string().required("Please enter name").min(2,"Name must be longer than 2 characters"),
        size: yup.string(),
        glutenFreeCrust: yup.boolean().defined(),
        pepperoni: yup.boolean().defined(),
        sausage: yup.boolean().defined(),
        canadianBacon: yup.boolean().defined(),
        spicyItalianSausage: yup.boolean().defined(),
        grilledChicken: yup.boolean().defined(),
        onions: yup.boolean().defined(),
        greenPeppers: yup.boolean().defined(),
        dicedTomatos: yup.boolean().defined(),
        blackOlives: yup.boolean().defined(),
        roastedGarlic: yup.boolean().defined(),
        artichokeHearts: yup.boolean().defined(),
        threeCheese: yup.boolean().defined(),
        pineapple: yup.boolean().defined(),
        extraCheese: yup.boolean().defined(),
        instructions: yup.string()


    });
    const [formState,setFormState] = useState({
        name:"",
        size:"",
        glutenFreeCrust:false,
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalianSausage: false,
        grilledChicken: false,
        onions: false,
        greenPeppers: false,
        dicedTomatos: false,
        blackOlives: false,
        roastedGarlic: false,
        artichokeHearts: false,
        threeCheese: false,
        pineapple: false,
        extraCheese: false,

        instructions:"",
        amount:0,
    });

    const [errorState, setErrorState] = useState({
        name: "",
        size:"",
        glutenFreeCrust: false,
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalianSausage: false,
        grilledChicken: false,
        onions: false,
        greenPeppers: false,
        dicedTomatos: false,
        blackOlives: false,
        roastedGarlic: false,
        artichokeHearts: false,
        threeCheese: false,
        pineapple: false,
        extraCheese: false,
        
        instructions:""
    });

    const validate = e =>{
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,[e.target.name]:""
                });
            })
            .catch(err =>{
                setErrorState({
                    ...errorState, [e.target.name]:err.errors[0]
                });
            })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                props.setOrder([...props.order,response.data]);
                console.log(response.data);
                history.push('/order');
            })
            .catch(err => console.log(err));
    };

    //const [total, setTotal] = useState(0);

    // const addTotal = (x) =>{
    //     setTotal(total + x);
    // }


    const inputChange = e =>{
        e.persist();
        validate(e);
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]:value});
        console.log(formState[e.target.name])
    }

    return(

        <>
        <Header head="You deserve that pizza" tail="go get it!!!"/>

        <form onSubmit={formSubmit} className="pizzaForm" >

        <h1>Build Your Own Pizza</h1>
            <label htmlFor='name' id="customerName">
                Customer's Name
                <br />
                <span>Required</span>
                </label>
                <br />

                <input
                    type="text"
                    name="name"
                    id = "name"
                    value = {formState.name}
                    onChange={inputChange}
                />


            {errorState.name.length > 2 ? (
                <p className="error">{errorState.name}</p>
            ) : null}
            <br/>

            <label htmlFor='size' id="sizeID">
                Choice of Size
                <br />
                <span>Required</span>
                </label>
                <br />
                <select name='size' data-cy="sizeSelect" id='sizeinput' onChange={inputChange}>
                    <option value="" disabled selected>Choose a size</option>
                    <option name="SM" value='small'>Small</option>
                    <option name="MD" value='medium'>Medium</option>
                    <option name="LG" value='large'>Large</option>
                    <option name="XL" value='extraL'>Extra Large</option>
                </select>

            <br />

            {/* Gluten Free Crust */}

            <label htmlFor='glutenFreeCrust'>
                    <input
                        type='checkbox'
                        name='glutenFreeCrust'
                        id='glutenCheckBox'
                        checked={formState.glutenFreeCrust}
                        onChange={inputChange}
                    />
                    Gluten Free Crust
                </label>
                <br />

            {/* Toppings */}

            <div className='toppingsChecklist'>
            <h1>Add Toppings</h1>

            <th>

            <label htmlFor='pepperoni'>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        id='pepperoniCheckBox'
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                    Pepperoni
                </label>
                <br />

                <label htmlFor='sausage'>
                    <input
                        type='checkbox'
                        name='sausage'
                        id='sausageCheckBox'
                        checked={formState.sausage}
                        onChange={inputChange}
                    />
                    Sausage
                </label>
                <br />

                <label htmlFor='canadianBacon'>
                    <input
                        type='checkbox'
                        name='canadianBacon'
                        id='canadianCheckBox'
                        checked={formState.canadianBecon}
                        onChange={inputChange}
                    />
                    Canadian Bacon
                </label>
                <br />

                <label htmlFor='spicyItalianSausage'>
                    <input
                        type='checkbox'
                        name='spicyItalianSausage'
                        id='spicyItalianSausageCheckBox'
                        data-cy='spicyItalianSausage'
                        checked={formState.spicyItalianSausage}
                        onChange={inputChange}
                    />
                    Spicy Italian Sausage
                </label>
                <br />

                <label htmlFor='grilledChicken'>
                    <input
                        type='checkbox'
                        name='grilledChicken'
                        id='grilledChickenCheckBox'
                        checked={formState.grilledChicken}
                        onChange={inputChange}
                    />
                    Grilled Chicken
                </label>
                <br />

                <label htmlFor="onions">
                  <input 
                  type='checkbox'
                  name='onions'
                  id='onionsCheckBox'
                  checked={formState.onions}
                  onChange={inputChange}
                  />
                  Onions
                </label>
                <br />

                <label htmlFor="greenPeppers">
                  <input 
                  type='checkbox'
                  name='greenPeppers'
                  id='greenPeppersCheckBox'
                  checked={formState.greenPeppers}
                  onChange={inputChange}
                  />
                  Green Peppers
                </label>
                <br />
                </th>

                <th>

                <label htmlFor="dicedTomatos">
                  <input 
                  type='checkbox'
                  name='dicedTomatos'
                  id='tomatosCheckBox'
                  checked={formState.dicedTomatos}
                  onChange={inputChange}
                  />
                  Diced Tomatos
                </label>
                <br />

                <label htmlFor="blackOlives">
                  <input 
                  type='checkbox'
                  name='blackOlives'
                  id='blackOlivesCheckBox'
                  checked={formState.blackOlives}
                  onChange={inputChange}
                  />
                  Black Olives
                </label>
                <br />

                <label htmlFor="roastedGarlic">
                  <input 
                  type='checkbox'
                  name='roastedGarlic'
                  id='roastedGarlicCheckBox'
                  checked={formState.roastedGarlic}
                  onChange={inputChange}
                  />
                  Roasted Garlic
                </label>
                <br />

                <label htmlFor="artichokeHearts">
                  <input 
                  type='checkbox'
                  name='artichokeHearts'
                  id='artichokeHeartsCheckBox'
                  checked={formState.articokeHearts}
                  onChange={inputChange}
                  />
                  Artichoke Hearts
                </label>
                <br />

                <label htmlFor="threeCheese">
                  <input 
                  type='checkbox'
                  name='threeCheese'
                  id='threeCheeseCheckBox'
                  checked={formState.threeCheese}
                  onChange={inputChange}
                  />
                  Three Cheese
                </label>
                <br />

                <label htmlFor="pineapple">
                  <input 
                  type='checkbox'
                  name='pineapple'
                  id='pineappleCheckBox'
                  checked={formState.pineapple}
                  onChange={inputChange}
                  />
                  Pineapple
                </label>
                <br />


                <label htmlFor='extraCheese'>
                    <input
                        type='checkbox'
                        name='extraCheese'
                        id='cheeseCheckBox'
                        checked={formState.cheese}
                        onChange={inputChange}
                    />
                    Extra Cheese
                </label>
            </th>
            </div>

            <label htmlFor="instructions">
                Special Instructions
                <textarea
                    id="instructions"
                    name="instructions"
                    onChange={inputChange}
                />

            </label>

            <button type='submit'>Submit</button>

        </form>

            </>
    )



}