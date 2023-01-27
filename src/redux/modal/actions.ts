
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => ({
    type: OPEN_MODAL,
} as const);

export const closeModal = () => ({
    type: CLOSE_MODAL,
} as const);