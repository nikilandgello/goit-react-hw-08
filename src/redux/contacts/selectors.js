import { createSelector } from 'reselect';
import { selectFilterBy, selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectFilterBy],
  (contacts, filter, filterBy) => {
    return contacts
      .filter(contact => {
        if (filterBy === 'name') {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        }

        if (filterBy === 'number') {
          return contact.number.includes(filter);
        }

        return true;
      })
      .sort((a, b) => a.name.trim().localeCompare(b.name.trim()));
  }
);
