
const initialState = {
  contacts: {
    items: [
      { id: 0, name: "Rosie Simpson", number: "443-91-26", delete: false },
          { id: 1, name: "Hermione Kline", number: "443-92-23", delete: false }
          { id: 2, name: "Annie Copeland", number: "423-91-21", delete: false }
          { id: 3, name: "Eden Clements", number: "443-91-18", delete: false },
    ],
    },
    filters: {
        status: 'all',
    }
};

const contactsReducer = (state = initialState.contacts, action) => {
    switch (action.type) {
        case 'contacts/addContact': { 
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }
        case 'contacts/deleteContact':
            return {
                ...state,
                items: state.items.filter((contact) => contact.id !== action.payload),
            };
        default:
            return state;
    }
};

const filtersReducer = (state = initialState.filters, action) => { 
    switch (action.type) { 
        case 'filters/setStatusFilter':
            return {
                ...state,
                status: action.payload,
            };
        
        default:
            return state;
    }
}