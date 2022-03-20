import { Profile } from "../models/Profile";

export const GiverData = () => {
    const data = [
        new Profile(
            '1',
            'Jhon rhay',
            200345,
            true,
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        ),
        new Profile(
            '2',
            'Shawn Mendez',
            2350345,
            true,
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
        ),
        new Profile(
            '3',
            'Jheave Jimenez',
            100,
            false,
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        ),
        new Profile(
            '4',
            'Kevin Paul Lamadrid',
            45890,
            true,
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
        ),
    ];

    return data;
}