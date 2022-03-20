import { Post } from "../models/Post"

export const PostData = () => {
    const data = [
        new Post(
            '1',
            'First Title',
            'First Description',
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        ),
        new Post(
            '2',
            'Second Title',
            'Second Description',
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
        ),
        new Post(
            '3',
            'Third Title',
            'Third Description',
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        ),
        new Post(
            '4',
            'Fourth Title',
            'Fourth Description',
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
        ),
    ];

    return data;
}