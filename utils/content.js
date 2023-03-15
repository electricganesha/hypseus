export const getAuthorBlurb = (type) => {
    switch (type) {
        case('game'):
        return 'Directed by'
        case('music'):
        return 'Composed and interpreted by'
        case('comic'): 
        return 'Written and illustrated by'
        case('book'):
        return 'Written by'
        case('movie'):
        return 'Directed by'
        default: 
        return 'Created by';
    }
}
