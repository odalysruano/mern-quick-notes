import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function index() {
    return sendRequest(BASE_URL, 'GET');
}

export function create(note) {
    return sendRequest(BASE_URL, 'POST', {note});
}
