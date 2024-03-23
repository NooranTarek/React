import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
      image: null,
    },
    formErrors: {
      nameError: '',
      emailError: '',
      passwordError: '',
      confirmedPasswordError: '',
      imageError: '',
    }
  },
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setFormErrors(state, action) {
      state.formErrors = action.payload;
    }
  },
});

export const { setFormData, setFormErrors } = formSlice.actions;
export default formSlice.reducer;
