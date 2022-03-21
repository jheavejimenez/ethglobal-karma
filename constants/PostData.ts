import { Post } from "../models/Post"

export const PostData = () => {
    const data = [
        new Post(
            '1',
            'First Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        ),
        new Post(
            '2',
            'Second Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
        ),
        new Post(
            '3',
            'Third Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        ),
        new Post(
            '4',
            'Fourth Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
        ),
    ];

    return data;
}