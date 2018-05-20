import Keymirror from 'keymirror';

const requestStatusTypes = keymirror({
  UNINITIALIZED: null,
  PENDING: null,
  SUCCEEDED: null,
  FAILED: null,
});

export default requestStatusTypes;
