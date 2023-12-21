import React,{useState} from 'react'

const Bird = () => {
const birds=>creatbird{{
    name:"bird",
    initialState:[],
    reducers:{
        addBird:(State,action)=>{
            const newBird{
            name:action.payload,
            like:0,

            },
            State.push(newBird);
            },
            increasLike:(state,action)=>{
                const index state.findIndex((bird) 
                =>bird.name===action.payload);
                state[index].like++;
            },
            decreaLike:(state,action)=>{
                const index state.findIndex((bird)=>bird.name===action.payload);
                
                if(state[index.like]>0){
                    state[index].like--;
                }
            }
            }


    }
})

  return (
    <div>Bird</div>
  )
}

export default Bird