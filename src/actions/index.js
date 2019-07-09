

export function updateTheme(theme){
    return{
        type: 'UPDATE_THEME',
        payload: theme
    }
}

export function updateRepos(repos){
    return {
        type: 'UPDATE_REPOS',
        payload: repos
    }
}

export function updateFilter(filter){
    return {
        type: 'UPDATE_FILTER',
        payload: filter
    }
}