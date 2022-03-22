export class Profile {
    pk: string;
    name: string;
    followers: number;
    isFollowed: boolean;
    profilePhoto: string;
    backgroundPhoto: string;
    introduction: string;

    constructor(
        pk: string,
        name: string,
        followers: number,
        isFollowed: boolean,
        profilePhoto: string,
        backgroundPhoto: string,
        introduction: string
    ) {
        this.pk = pk
        this.name = name
        this.followers = followers
        this.isFollowed = isFollowed
        this.profilePhoto = profilePhoto
        this.backgroundPhoto = backgroundPhoto
        this.introduction = introduction
    }



}