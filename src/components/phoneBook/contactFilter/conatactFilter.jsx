import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsWrapper,
  LabelContacts,
  Search,
  ResetButtons,
} from './contatcFilter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { changeValueFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeValueFilter(e.currentTarget.value));
  };

  const resetFilters = () => {
    dispatch(changeValueFilter(''));
  };

  return (
    <ContactsWrapper>
      <LabelContacts>
        Find contacts by name
        <Search
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
        <ResetButtons type="button" onClick={resetFilters}>
          Reset filters
        </ResetButtons>
      </LabelContacts>
    </ContactsWrapper>
  );
};
