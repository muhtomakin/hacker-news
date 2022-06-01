
const reducer = (state, action) => {
    switch (action.type) {
        case ('STORIES_FETCH_INIT'):
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            }
        case 'STORIES_FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'REMOVE_STORY':
            return {
                ...state,
                data: state.data.filter((story) => action.payload !== story.objectID)
            }
        case 'HANDLE_SEARCH':
            return {...state, searchTerm: action.payload, page:0}
        case 'HANDLE_PAGE':
            if (action.payload === 'inc') {
                let nextPage = state.page + 1
                if (nextPage > state.maxPages - 1) {
                    nextPage = 0
                }
                return {...state, page: nextPage}
            }
            if (action.payload === 'dec') {
                let prevPage = state.page - 1
                if (prevPage < 0) {
                    prevPage = state.maxPages - 1
                }
                return {...state, page: prevPage}
            }
        default:
            throw new Error('Something wrong...')
    }
}

export default reducer