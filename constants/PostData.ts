import { Post } from "../models/Post"

export const PostData = () => {
    const data = [
        new Post(
            '1',
            'First Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://us.123rf.com/450wm/margobasarab/margobasarab1907/margobasarab190700072/127095356-up-to-date-technology-top-view-of-diverse-personal-accessory.jpg?ver=6'
        ),
        new Post(
            '2',
            'Second Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://www3.pictures.zimbio.com/mp/wwj1hrnad01x.jpg'
        ),
        new Post(
            '3',
            'Third Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://bishopbikes.com/site/wp-content/uploads/FM2019-NEW_205-1.jpg'
        ),
        new Post(
            '4',
            'Fourth Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://www.myoffice.com.ph/wp-content/uploads/2018/10/25d-1170x781.jpg'
        ),
        new Post(
            '5',
            'First Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://us.123rf.com/450wm/margobasarab/margobasarab1907/margobasarab190700072/127095356-up-to-date-technology-top-view-of-diverse-personal-accessory.jpg?ver=6'
        ),
        new Post(
            '6',
            'Second Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://www3.pictures.zimbio.com/mp/wwj1hrnad01x.jpg'
        ),
        new Post(
            '7',
            'Third Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://bishopbikes.com/site/wp-content/uploads/FM2019-NEW_205-1.jpg'
        ),
        new Post(
            '8',
            'Fourth Title',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            'https://www.myoffice.com.ph/wp-content/uploads/2018/10/25d-1170x781.jpg'
        ),
    ];

    return data;
}