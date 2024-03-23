import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import userAppointmentsSlice from './userAppointments';

export const store = configureStore({
    // Quien es el organizador
  reducer: {
    user: userSlice,
    userAppointments: userAppointmentsSlice
  },
});
