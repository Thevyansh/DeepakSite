import _, { debounce } from 'lodash';
import post, {
  postCategoriesChanged,
  postContentChanged,
  postImageChanged,
  postLocalSaved,
  postTagsChanged,
  postTitleChange,
  savePostLocal,
} from '../post';

const save = debounce((dispatch) => {
  dispatch(savePostLocal());
}, 10000);

const savePost =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === postLocalSaved.type) {
      return next(action);
    }
    if (
      action.type === postCategoriesChanged.type ||
      postContentChanged.type ||
      postTitleChange.type ||
      postTagsChanged.type ||
      postImageChanged.type
    ) {
      save(dispatch);
    }
    next(action);
  };

export default savePost;
