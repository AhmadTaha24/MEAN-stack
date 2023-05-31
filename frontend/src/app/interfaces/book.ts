export interface Book {
    _id: string,
    categoryId:{
        _id: string,
        name: string,
        __v: number

    },
    authorId:{
        _id: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        imageUrl: string,
        __v: number,
        fullName: string,
        id: string
    },
    title: string,
    imageUrl: string,
 
    __v: number

}



