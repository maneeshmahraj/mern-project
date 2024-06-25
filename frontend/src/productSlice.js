import { createSlice } from "@reduxjs/toolkit";

const shopSlice=createSlice({

    name:'shop',

    initialState:
    {
        items:[],
        fltitems:[]
    }
    ,
    reducers:{
      addItems:(state,action)=>{        
        state.items.push(action.payload);
       state.fltitems=state.items.filter((val,index)=>{return index ===state.items.findIndex(o=>val.id===o.id)});
      
         for(var i=0;i<state.fltitems.length;i++)
          {
            if(state.fltitems[i].price===action.payload.price)
              {
                state.totalAmount=state.totalAmount+state.fltitems[i].price;
              }
          }
      
      
      },
      removeItems:(state,action)=>{

        for(var i=0;i<state.fltitems.length;i++)
          {
            if(state.fltitems[i].id===action.payload)
              {
                state.totalAmount=state.totalAmount-state.fltitems[i].price;
              }
          }
       state.items=state.items.filter(key=>key.id!==action.payload);
       state.fltitems=state.items.filter((val,index)=>{return index ===state.items.findIndex(o=>val.id===o.id)});
     
      
    
      },
      decreaseqnty:(state,action)=>{
        for(var i=0;i<state.fltitems.length;i++)
          {
            if(state.fltitems[i].id==action.payload)
              { 
                if(state.fltitems[i].qnty==1)
                {
                  alert("you can not decrease product qnty less then 1 ")
                }
                else{
                  state.fltitems[i].qnty-=1;
                }
              }
          }
      },
      icreaseqnty:(state,action)=>{
        for(var i=0;i<state.fltitems.length;i++)
          {
            if(state.fltitems[i].id==action.payload)
              {
                state.fltitems[i].qnty+=1;
              }
             
          }
      }

    
    }
});
export const {addItems,removeItems,decreaseqnty,icreaseqnty}=shopSlice.actions;
export default shopSlice.reducer;