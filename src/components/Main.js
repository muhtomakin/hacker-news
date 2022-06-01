import React, {useState, useEffect, useReducer} from 'react'
import storiesReducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

/*const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
        localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key,value)
    }, [value, key])
    return [value, setValue];   
}*/

const Main = () => {

    /*const [searchTerm, setSearchTerm] = useSemiPersistentState(
        'search',
        'React'
    );
    
    const [stories, dispatchStories] = useReducer(
        storiesReducer,
        {data:[], isLoading: false, isError: false}
    )

    useEffect(() => {
        if (!searchTerm) return;
        dispatchStories({type: 'STORIES_FETCH_INIT'});
        fetch (`${API_ENDPOINT}query=${searchTerm}`)
            .then(response => response.json())
            .then(result => {
                dispatchStories({
                    type: 'STORIES_FETCH_SUCCESS',
                    payload: result.hits,
                })
                console.log(result.hits)
            }) 
            .catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}))      
    },[])

    //console.log(stories)*/

    return (
        <div>Main</div>
    )
}

export default Main