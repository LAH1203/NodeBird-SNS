export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 'lah1203',
            nickname: '아현',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAE+CAMAAACk8jItAAABoVBMVEVzmM/70rT///8AAACxYmVzu2X90Xr8//////3lPzH//v/29vb70rVzmM3x8fFzmND///r/2Lf507b90rH+0bP80bf507T//P8AAAT+0q//2LtymtT/0Ldyl9T+0bDnPjFmWVD/3sNeXl7Dw8P01brqt6R+mMr02satZGRtuV7mdGn67Mj/z3D404Nrks3/znpzmchwjbtbcJVKXHozQlwoNEpBUGhSZ4Nhe6UYHSsjLDsjJTILERg+SmNkfahyicQUCQArJB85MSw/Oz3YuaO3nImWgXNaSkBMSEWBa2XKsZorN0ekkYDZvqlbcJcfGBR2YlQwLCmUpMbawLByZ2KXg3m2sMJIOzXmxKSMcGBgU093ZFyskX21t8DNtJuDg4PPz8+goKBwcHDaxsKmr8fqzsLriH/1rJeRoc3pmorNlYm6fHblfnbncW7fpprvvKvu4NXa8Net1qaVx4rg5u/LjpLQn5nv4N15t2zI1ebm7+Ogt9bwwr+92LffHACzxtvcRkLz3Jzio6H78dVrnrRwt39zrpRzwFT125jiWU+2uaxkkP8nAAANE0lEQVR4nO2b+1vTZhvHm3JIaBNyTk3SFJihBYFQ9dU55+bQFgaDiVWYTtncSrE4p+WwISCgsvcd21/93s+TngK67QcS9sP9uXrBmrgr397Pffg+SYnFEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBkLARYqINOI4owg/HFgVBcM5aVBugKnbx0uX/XLl+5crVj69lBduxHeGsVTWxnWtXP+lo4/rVa3lbFM9aF0WwxY8/bdN2zv9147PPBVsQY2erUhTsm5dvUEFfTNwCJtqUfnrJsW3hTJdZzF/1Q3bbZRQft1CcnLpTD+JliO4ZqhMuXqfyzp3r6LcYQIWXasmWW5j8kq70J5dE+6wiaNvXzjXzrWNaZpqYqjXzZT0Zv7ro2Gck8FKgLGathjzNmptqCe+4dBYBhLT6msg613Hn8awfqRmL5xmG51Vrsk03nPgsH/0aC84l/+K3XNmaocG646qgT1GV/lab8X9dESJfYkHwg9OvyKomz1IZD2kKPrhVD91UsThRF3g9G3UZO59Tefdz3xWLM+7APBHy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'
        }, {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6Fj5NtHvFowdHwYG4tgCEm0mA1VlZwHXkA&usqp=CAU'
        }, {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vu3k01uJWS0MUDHPcMmS0YOrGvharYfAWA&usqp=CAU'
        }],
        Comments: [{
            User: {
                nickname: 'Aha',
            },
            content: '짱구 너무 귀여워!',
        }, {
            User: {
                nickname: 'zero',
            },
            content: 'ㅇㅈ',
        }]
    }],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};
const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: 'Aha',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;