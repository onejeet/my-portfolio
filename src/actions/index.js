

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
