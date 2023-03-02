import React from 'react';

const commentsData = [
    {
        name: 'Shreesha',
        text: 'Lorem ipsum dolor sit amit , consetor adep',
        replies: [
            {
                name: 'Shreesha',
                text: 'Lorem ipsum dolor sit amit , consetor adep',
                replies: [
                    {
                        name: 'Shreesha',
                        text: 'Lorem ipsum dolor sit amit , consetor adep',
                        replies: [
                            {
                                name: 'Shreesha',
                                text: 'Lorem ipsum dolor sit amit , consetor adep',
                                replies: [],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Shreesha',
                text: 'Lorem ipsum dolor sit amit , consetor adep',
                replies: [],
            },
            {
                name: 'Shreesha',
                text: 'Lorem ipsum dolor sit amit , consetor adep',
                replies: [
                    {
                        name: 'Shreesha',
                        text: 'Lorem ipsum dolor sit amit , consetor adep',
                        replies: [
                            {
                                name: 'Shreesha',
                                text: 'Lorem ipsum dolor sit amit , consetor adep',
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Shreesha',
        text: 'Lorem ipsum dolor sit amit , consetor adep',
        replies: [],
    },
    {
        name: 'Shreesha',
        text: 'Lorem ipsum dolor sit amit , consetor adep',
        replies: [],
    },
    {
        name: 'Shreesha',
        text: 'Lorem ipsum dolor sit amit , consetor adep',
        replies: [],
    },
];

const Comment = ({data}) => {
    
    const {name, text} = data;
    return (
        <>
            <div className='px-2 flex gap-2 shadow-sm bg-gray-200 rounded-md mb-2'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQcP51A3ncwchFeonpESD-_s8Gg043M_a2g&usqp=CAU"
                    alt="cmtImg"
                    className="w-8 h-8"
                />
                <div >
                    <div className='font-bold'>{name}</div>
                    <div>{text}</div>
                </div>
            </div>
        </>
    );
}

const CommentList = ({comments}) => {
    return comments.map((cmtdata) => {
        return (
            <div>
                <Comment data={cmtdata} />
                <div className='pl-5 border border-l-black ml-5'>
                    <CommentList comments={cmtdata.replies} />
                </div>
            </div>
        )})
}

const CommentsContainer = () => {
    return (
        <div className='px-2 py-2 ml-3'>
            <h1 className='font-bold text-2xl'>Comments : </h1>
            <CommentList comments = {commentsData} />
        </div>
    );
};

export default CommentsContainer;
