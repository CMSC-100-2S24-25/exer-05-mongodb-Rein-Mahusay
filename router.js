//requests here

import { homepage, User, Members, removeUser, removeAll, saveStudent } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/user', User);
    app.get('/members', Members);

    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAll);

    app.post('/save-student', saveStudent);
}

export default router;