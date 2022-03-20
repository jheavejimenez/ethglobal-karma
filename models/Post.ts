export class Post {
    pk: string;
    title: string;
    description: string;
    image: string;


    constructor(
        pk: string,
        title: string,
        description: string,
        image: string
    ) {
        this.pk = pk
        this.title = title
        this.description = description
        this.image = image
    }
    props

}