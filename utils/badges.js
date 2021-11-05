import Image from 'next/image';

const BADGE_ALL = '/asterisk.png';
const BADGE_GAME = '/game.png';
const BADGE_MUSIC = '/music.png';
const BADGE_COMIC = '/comic.png';
const BADGE_BOOK = '/book.png';
const BADGE_MOVIE = '/movie.png';

export const getBadgeFromType = (type) => {
    switch (type) {
        case('all'):
        return <Image src={BADGE_ALL} alt="All" width="48" height="48"/>;
        case('game'):
        return <Image src={BADGE_GAME} alt="Games" width="48" height="48"/>;
        case('music'):
        return <Image src={BADGE_MUSIC} alt="Music" width="48" height="48"/>;
        case('comic'): 
        return <Image src={BADGE_COMIC} alt="Comics" width="48" height="48"/>;
        case('book'):
        return <Image src={BADGE_BOOK} alt="Books" width="48" height="48"/>;
        case('movie'):
        return <Image src={BADGE_MOVIE} alt="Movies" width="48" height="48"/>;
        default: 
        return null;
    }
}
