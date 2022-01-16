const reducer = (state, action) => {

  switch(action.type){

    case 'SET_API_ACTIVE':
      if(action.payload == 'js'){
        return {
          ...state,
          apiActiveBtn: {
            js: true,
            css: false,
            security: false
          }
        }
      } else if (action.payload == 'css'){
        return {
          ...state,
          apiActiveBtn: {
            js: false,
            css: true,
            security: false
          }
        }
      } else if (action.payload == 'security'){
        return {
          ...state,
          apiActiveBtn: {
            js: false,
            css: false,
            security: true
          }
        }
      }

    case 'SET_PRICING_ACTIVE':
      if(action.payload == 'montly'){
        return {
          ...state,
          pricingActiveBtn: {
            montly: true,
            yearly: false,
          }
        }
      } else if (action.payload == 'yearly'){
        return {
          ...state,
          pricingActiveBtn: {
            montly: false,
            yearly: true,
          }
        }
      }
      case 'SET_AMOUNT':
        return{
          ...state,
          amountCustomizer: action.payload
        }
      case 'SET_RATE':
        return{
          ...state,
          rateCustomizer: action.payload
        }
      case 'SET_MONTH_TERM':
        if(action.payload == 'first'){
          return {
            ...state,
            monthTerm: {
              first: true,
              second: false,
              third: false,
            },
          }
        } else if (action.payload == 'second'){
          return {
            ...state,
            monthTerm: {
              first: false,
              second: true,
              third: false,
            },
          }
        } else if (action.payload == 'third'){
          return {
            ...state,
            monthTerm: {
              first: false,
              second: false,
              third: true,
            },
          }
        }

    default :
    return state;
  }
}

export default reducer;