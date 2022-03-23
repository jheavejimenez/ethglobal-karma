export class Notification {
    avatar: string;
    title: string;
    message: string;
    createAt: string;
    read: boolean;

    constructor(
        avatar: string,
        title: string,
        message: string,
        createAt: string,
        read: boolean
    ) {
        this.avatar = avatar
        this.title = title
        this.message = message
        this.createAt = createAt
        this.read = read
    }

}