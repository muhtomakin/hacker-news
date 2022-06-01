import React, {useState, useContext, useEffect, useReducer} from 'react'
import storiesReducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
    searchTerm: 'React',
    maxPages: 50,
    page: 0,
    data: [],
    isLoading: false,
    isError: false
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [stories, dispatchStories] = useReducer(storiesReducer, initialState)


    const fetchStories = async (url) => {
        dispatchStories({type: 'STORIES_FETCH_INIT'});
        fetch (url)
            .then(response => response.json())
            .then(result => {
                dispatchStories({
                    type: 'STORIES_FETCH_SUCCESS',
                    payload: result.hits
                })
                console.log(result.hits)
            }) 
            .catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}))
    }

    useEffect(() => {
        //if (!searchTerm) return;
        fetchStories(`${API_ENDPOINT}query=${stories.searchTerm}&page=${stories.page}`)
    }, [stories.searchTerm, stories.page])

    const handleSearch = (searchTerm) => {
        dispatchStories({type: 'HANDLE_SEARCH', payload: searchTerm})
    }
    
    const removeStory = (id) => {
        dispatchStories({type: 'REMOVE_STORY', payload: id})
    }

    const handlePage = (value) => {
        dispatchStories({type: 'HANDLE_PAGE', payload: value})
    }

    return (
        <AppContext.Provider value={{
            ...stories,
            handleSearch,
            removeStory,
            handlePage 
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}