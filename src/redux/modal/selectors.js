export const selectModalOpen = state => state.modal.isModalOpen;
export const selectModalContact = state => state.modal.selectedContact;

export const selectModalOpenContactDelete = state =>
  state.modal.isModalOpenContactDelete;
export const selectSelectedContactDelete = state =>
  state.modal.selectedContactDelete;
