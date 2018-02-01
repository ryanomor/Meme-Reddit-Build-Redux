const defaultState = {
    allMemes: [
      {id: "1", title: 'Slender Man', comments: [{id: "1", comment: "Scarier than Freddy on Elm St.?"}, {id: "2", comment: "He looks more hilarious than frightening"}]},
      {id: "2", title: 'Doge', comments: [{id: "1", comment: "" }]},
      {id: "3", title: 'Arrow in the Knee', comments: [{id: "1", comment: ""}]},
      {id: "4", title: 'Tide Pods', comments: [{id: "1", comment: "When I was a kid, we had to eat the powder detergent"}]},
      {id: "5", title: 'Whomst', comments: [{id: "1", comment: ""}]},
    ],
    oneMeme: [],
  };

export default (state = defaultState, action) => {

    switch (action.type) {
        case "SHOW_COMMENTS": 
            const theOne = state.allMemes.find((meme) => meme.id === action.id);

            if (theOne) {
                return ({
                allMemes: state.allMemes,
                oneMeme: theOne
                });
            } else {
                return { oneMeme: { comments: [{id: "1", comment: "No comments..."}] } };
            }
        case "ADD_COMMENT": {
            const newState = state;
            const meme = newState.allMemes.find(meme => meme.id === action.meme.id);
            if (meme) {
                const newComment = {id: (meme.comments.length + 1).toString() , comment: action.newComment};
                meme.comments = [...meme.comments, newComment];
                return newState;
            } else {
                const newMeme = {id: (newState.allMemes.length + 1).toString(), title: action.meme.title, comments: [{id: "1", comment: action.newComment}]};
                newState.allMemes = [...newState.allMemes, newMeme];
                return newState;
            };
            // const newState = state.allMemes.map(comment => {
            //     if (comment.title === action.title) {
            //         const newComment = {id: (comment.comments.length + 1).toString() , comment: action.newComment};
            //         comment.comments = [...comment.comments, newComment];
            //         return comment;
            //     }
            // });
            // return newState;
        }
        default:
            return state;
    };

};