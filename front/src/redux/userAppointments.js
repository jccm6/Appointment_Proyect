import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userAppointments: [],
};

export const userAppointmentsSlice = createSlice({
    name: 'userAppointments',
    initialState,
    reducers: {
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },

        cancelUserAppointment: (state, action) => {
            const index = state.userAppointments.findIndex(
              (appointment) => appointment.id === action.payload
            );
            if (index !== -1) {
              state.userAppointments[index].status = 'cancelled';
            }
          },
    },
});

export const { setUserAppointments, cancelUserAppointment } = userAppointmentsSlice.actions;

export default userAppointmentsSlice.reducer;
