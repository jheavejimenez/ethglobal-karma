export class Profile {
    pk: string;
    name: string;
    followers: number;
    isFollowed: boolean;
    image: string;

    constructor(
        pk: string,
        name: string,
        followers: number,
        isFollowed: boolean,
        image: string
    ) {
        this.pk = pk
        this.name = name
        this.followers = followers
        this.isFollowed = isFollowed
        this.image = image
    }

}