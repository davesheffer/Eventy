import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEvent, addEvent, updateEvent } from '../services/events';

export const useDeleteEvent = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useAddEvent = () => {
    const queryClient = useQueryClient();

    return useMutation(addEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useUpdateEvent = () => {
    const queryClient = useQueryClient();

    return useMutation(updateEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};
