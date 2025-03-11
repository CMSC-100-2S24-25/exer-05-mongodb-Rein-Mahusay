//requests here

import { homepage, User, Members, removeUser, removeAll } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/user', User);
    app.get('/members', Members);

    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAll);
}

export default router;