import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import CreatableSelect from 'react-select/creatable';
import slugify from 'slugify';
import { useDispatch, useSelector } from 'react-redux';
import { db, timestamp } from '../../../../firebase/firebase';
import { postCategoriesChanged, selectPostData } from '../../../../store/post';
import { StyledCategories } from './styles';

const Categories = () => {
  const [suggested, setSuggested] = useState({
    error: null,
    loading: true,
    categories: [],
  });
  const [state, setState] = useState({
    label: 'Common',
    value: 'common',
  });
  const { categories } = useSelector(selectPostData);

  const dispatch = useDispatch();

  const handleChange = (array) => {
    setState(array);
    const payload = array.map((el) => el.value);
    dispatch(postCategoriesChanged(payload));
  };

  const handleNewCategory = async (value) => {
    const collectionRef = db.collection('categories');
    const id = slugify(value, { lower: true, replacement: '-', strict: true });
    const name = _.startCase(_.toLower(value));
    setSuggested({ ...suggested, loading: true });
    try {
      handleChange([...categories, { value: id, label: name }]);
      const createAt = timestamp();
      await collectionRef.doc(id).set({ name, createAt });
    } catch (error) {
      console.log(error);
      setSuggested({ ...suggested, loading: false, error });
    }
  };

  useEffect(() => {
    const unsubscribe = db.collection('categories').onSnapshot(
      (snapshot) => {
        setSuggested({
          error: null,
          loading: false,
          categories: snapshot.docs.map((doc) => ({
            label: doc.data().name,
            value: doc.id,
          })),
        });
      },
      (error) => {
        setSuggested({
          error,
          loading: false,
          categories: [],
        });
      }
    );

    return unsubscribe;
  }, []);

  return (
    <StyledCategories>
      <h3>Categories</h3>
      <CreatableSelect
        isLoading={suggested.loading}
        options={suggested.categories}
        isMulti
        closeMenuOnSelect={false}
        className="rs-container"
        classNamePrefix="rs"
        placeholder="Select a Category"
        allowCreateWhileLoading={false}
        onCreateOption={handleNewCategory}
        onChange={handleChange}
        value={state}
      />
    </StyledCategories>
  );
};
export default Categories;
