/**
* Created by thanhlt on Mon Apr 01 2019
* Copyright (c) 2019 github.com/letrinhthanhvn
*/

const initialState = {
   projects: [
      { id: '1', title: 'Luyên thuyên ngày mưa', content: 'hello hello hello' },
      { id: '2', title: 'Thói đời', content: 'hello hello hello' },
      { id: '3', title: 'Mượn rượu tỏ tình', content: 'hello hello hello' },
   ]
}

const projectReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CREATE_PROJECT': {
         console.log('hello')

         return {
            ...state
         }
      }

      case 'CREATE_PROJECT_FAILED': {
         return {
            ...state
         }
      }

      default:
         return {
            ...state
         }
   }
}

export default projectReducer;

